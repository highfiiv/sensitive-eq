import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { SyncService } from '@shared/services/sync.service';
import { WasmService } from '@shared/services/wasm.service';
import * as Buttplug from 'buttplug';
import { IBand } from '@common';

@Component({
    selector: 'audio-controller',
    templateUrl: './audio.component.html',
    styleUrls: ['./audio.component.scss']
})
export class AudioComponent implements OnInit, AfterViewInit, OnDestroy {
    private _ngUnsubscribe: Subject<void> = new Subject<void>();
    private _intervalID: any; // AnimationFrame ID
    private _source: any; // eventual stream source
    private _fbc: any; // frequencyBinCount
    private _audioDeviceId: string; // MediaDeviceInfo;
    private _audioContext = new AudioContext();
    private _analyser = this._audioContext.createAnalyser();
    private _data: Uint8Array; // final audio data in the standard format

    private _activeBTDevices = [];
    maxPeak=0;
    public bands: IBand[] = []; // eq band objects for element height etc
    public freqs: number[];
    public playing = false;

    public transparency = 100;
    public transparencyForm = <FormGroup>this.fb.group({
        transparency: this.fb.control(100)
    });

    constructor(
        private syncService: SyncService,
        private wasmService: WasmService,
        private fb: FormBuilder
    ) { }

    public ngOnInit(): void {
        // subscribe to audio device play/stop
        this.syncService.audioStreamActive().pipe(
            takeUntil(this._ngUnsubscribe)
        ).subscribe((res: any) => {
            this.playing = res;
            if (!res) {
                clearInterval(this._intervalID);
                this.playing = false;
            }

        });

        // subscribe to audio device selection (the select dropdown in main nav)
        // controlled by shared/components/audio-devices/
        this.syncService.getAudioDevice().pipe(
            takeUntil(this._ngUnsubscribe)
        ).subscribe((res: any) => {
            if (res) {
                this._audioDeviceId = res;
                this.play(this._audioDeviceId);
            } else {
                this.stop();
            }
        });

        // FORM: EQ Visibility
        this.transparencyForm.controls.transparency.valueChanges.pipe(
            takeUntil(this._ngUnsubscribe)
        ).subscribe((val: any) => {
            this.transparency = val;
        });

        this.wasmService.getActiveBTDevices().pipe(
            takeUntil(this._ngUnsubscribe)
        ).subscribe((res: any) => {
            this._activeBTDevices = res;
        });
    }

    public ngAfterViewInit(): void { }

    /* ------------------------------------------------------------------------ *
        https://github.com/buttplugio/buttplug-developer-guide/blob/master/examples/javascript/device-control-example.js
        When sensitivity scores exist this method:
        - Probably want to debounce this or turn down the times-per-second in frameLooper()
        - Needs to know which band's values should be used
        - Needs to know if the haptic has multiple engines
        - Needs to know which band's values should be used for each haptic engine
    * ------------------------------------------------------------------------ */
    private async sensitivityRequest(): Promise<any> {
        // get highest peak value from all 16 bands
        const max = Math.max.apply(Math, this.bands.map(function(o) { return o.peak; })) / 100;
        // console.log(max, this.maxPeak);
        if (max != this.maxPeak) {
            this.maxPeak = max;
            await this._activeBTDevices[0].vibrate(this.maxPeak);
        } else {
            for ( let i = 0, j = this.bands.length; i < j; i++ ) {
                this.bands[i].peak = 0;
            }
        }

        // if (this._activeBTDevices && this._activeBTDevices.length > 0) { // dont check for devices each message
        // if (max > 0) {
            // for (let i = 0, j = this._activeBTDevices.length; i < j; i++) {
            //     try {
            //         await this._activeBTDevices[i].vibrate(max / 100);
            //     } catch (e) {
            //         if (e instanceof Buttplug.ButtplugDeviceError) {
            //             console.log("got a device error!");
            //         }
            //     }
            // }
        // }
    }

    // Control the view
    private frameLooper() {
        // this._intervalID = requestAnimationFrame(() => this.frameLooper()); // doesnt run in background tabs, dont use it

        // how many values from analyser (the "buffer" size)
        this._fbc = this._analyser.frequencyBinCount;

        const time = 1000 / 12; // 12 times per second
        this._intervalID = setInterval(() => {
            // frequency data comes as integers on a scale from 0 to 255
            this._data = new Uint8Array(this._analyser.frequencyBinCount);
            this._analyser.getByteFrequencyData(this._data);

            // DEBUGGING WEBAUDIO
            // console.log({ analyser: this._analyser });
            // console.log({ frequencyBinCount: this._analyser.frequencyBinCount });
            // console.log({ fbc: this.fbc });
            // console.log({ _data: this._data });
            // console.log({ sampleRate: this.audioContext.sampleRate });

            this._fbc = this._analyser.frequencyBinCount;
            // calculate the height of each band element using frequency data
            for (var i = 0; i < this._fbc; i++) {
                this.bands[i].dB = this._data[i];

                this.bands[i].dBPercent = parseInt(((this.bands[i].dB / 255) * 100).toFixed());
                // 3: calculate peak: how much dB is peaking into the user-set range
                if (this.bands[i].range < this.bands[i].dBPercent) {
                    this.bands[i].peak = this.bands[i].dBPercent - this.bands[i].range;
                }

                // this.bands[i].peak = this.bands[i].range < this.bands[i].dB ?
                //     this.dBPercent - this.range;

            }
            this.sensitivityRequest();
        }, time);
    }

    private connectStream(stream: MediaStream) {
        this._analyser.minDecibels = -90;
        this._analyser.maxDecibels = -10;
        this._analyser.fftSize = 32;

        // https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/createMediaStreamSource
        this._source = this._audioContext.createMediaStreamSource(stream);

        // https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode
        // MDN An AnalyserNode has exactly one input and one output. The node works even if the output is not connected.
        this._source.connect(this._analyser);

        // setup the frequency labels for the bands
        this.freqs = this.calcFreqs(this._analyser.context.sampleRate, this._analyser.fftSize);

        // set context.status: running
        this._audioContext.resume();
    }

    // calculate the frequency resolutions being displayed - sampleRate / eq band count
    private calcFreqs(sampleRate, fftSize) {
        const bands = fftSize / 2; // bands are half the fftSize
        let fqRange = sampleRate / 2;
        const fqBand = sampleRate / fftSize;
        let allocated = [];
        // setup eqbands and labels
        for (let i = 0, j = bands; i < j; i++) {
            this.bands[i] = {
                'id': i,
                'dB': 0,
                'range': 90,
                'peak': 0
            }
            // frequency labels
            // sampleRate = Math.round(sampleRate - fqRange);
            fqRange = Math.round(fqRange - fqBand);
            allocated.push(fqRange);
        }
        return allocated.slice().reverse();
    }

    // model real-time peak value data - emitted from each band.component
    public updateBandRange(band: IBand) {
        this.bands[band.id] = {
            range: band.range
        };
    }

    // PRESS play button (or select an audio device)
    public play(audioDeviceId: any) {
        navigator.mediaDevices.getUserMedia({
            audio: { deviceId: audioDeviceId ? { exact: audioDeviceId } : undefined }
        }).then((stream: MediaStream) => {
            this.connectStream(stream);
            this.frameLooper();
            this.playing = true;
        })
            .catch(e => {
                console.log("catch", e.reason);
                this.playing = false;
            });
    }
    public stop() {
        clearInterval(this._intervalID);
        this.playing = false;
        this.syncService.stopAudioStream();
    }

    // optimize ngFor
    public trackByFn(index, item) {
        return index; // or item.id
    }

    public ngOnDestroy(): void {
        this._ngUnsubscribe.next();
        this._ngUnsubscribe.complete();
        this.stop();
        this._intervalID = null;
    }
}
