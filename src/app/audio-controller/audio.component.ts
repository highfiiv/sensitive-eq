import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { SyncService } from '@shared/services/sync.service';

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

    private _data: Uint8Array; // final audio data in the standard format
    private _audioDeviceId: string; // MediaDeviceInfo;
    private _audioContext = new AudioContext();
    private _analyser = this._audioContext.createAnalyser();

    public bands: { dB?: number, sensitivity?: number }[] = []; // eq band objects for element height etc
    public freqs: number[];
    public playing = false;

    constructor(private syncService: SyncService) { }

    public ngOnInit(): void {
        // subscribe to play/stop
        this.syncService.audioStreamActive().pipe(
            takeUntil(this._ngUnsubscribe)
        ).subscribe((res:any) => {
            this.playing = res;
        });

        // subscribe to audio device selection
        this.syncService.getAudioDevice().pipe(
            takeUntil(this._ngUnsubscribe)
        ).subscribe((res:any) => {
            if (res) {
                this._audioDeviceId = res;
                this.play(this._audioDeviceId);
            }
        });
    }

    public ngAfterViewInit(): void {}

    /* ------------------------------------------------------------------------ *
        When sensitivity scores exist this method:
        - Makes a request of some kind
        - Probably want to debounce this
    * ------------------------------------------------------------------------ */
    private sensitivityRequest(amount:number){
        // console.log(amount);
    }

    // Control the view
    private frameLooper() {
        // this._intervalID = requestAnimationFrame(() => this.frameLooper()); // doesnt run in background tabs, dont use it

        // how many values from analyser (the "buffer" size)
        this._fbc = this._analyser.frequencyBinCount;

        const time = 1000 / 12; // 30 or 60 times per second
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
                // this.bands[i].dB >= this.bands[i].

                // SENSITIVITY SCORE 0 - 255
                // current dB is within how much of the sensitivity range
                const ratio = this.bands[i].dB - this.bands[i].sensitivity;
                // console.log(ratio);
                if (ratio >= 0) {
                    this.sensitivityRequest(ratio);
                }
            }
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
                'dB': undefined,
                'sensitivity': 50
            }
            // frequency labels
            // sampleRate = Math.round(sampleRate - fqRange);
            fqRange = Math.round(fqRange - fqBand);
            allocated.push(fqRange);
        }
        return allocated.slice().reverse();
    }

    // Add range values to their band data
    public updateBandSense(band: { sensitivity: number, id: number }) {
        this.bands[band.id].sensitivity = band.sensitivity;
    }

    // PRESS play button (or select an audio device)
    public play(audioDeviceId: any) {
        navigator.mediaDevices.getUserMedia({
            audio: { deviceId: audioDeviceId ? { exact: audioDeviceId } : undefined }
        }).then((stream: MediaStream) => {
            console.log(stream);
            this.connectStream(stream);
            this.frameLooper();
        });
        this.playing = true;
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
