import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { SyncService } from '@shared/services/sync.service';

@Component({
    selector: 'audio-devices',
    templateUrl: './audio-devices.component.html',
    styleUrls: ['./audio-devices.component.scss']
})
export class AudioDevicesComponent implements OnInit, AfterViewInit, OnDestroy {
    private _ngUnsubscribe: Subject<void> = new Subject<void>();

    public devices: any[];
    public playing = false;

    constructor(private syncService: SyncService) { }

    public ngOnInit(): void {
        // subscribe to play/stop
        this.syncService.audioStreamActive().pipe(
            takeUntil(this._ngUnsubscribe)
        ).subscribe((res:any) => {
            this.playing = res;
        });

        // subscribe to list of audio devices available
        this.syncService.getAudioDevices().pipe(
            takeUntil(this._ngUnsubscribe)
        ).subscribe((res:any) => {
            this.devices = res;
        });
    }

    public ngAfterViewInit(): void {}

    // PRESS play button (or select an audio device)
    public play() {
        this.syncService.playAudioStream();
    }

    public stop() {
        this.syncService.stopAudioStream();
    }

    public onSelect(target:any){
        const elm = target as HTMLSelectElement;
        if (elm.value !== 'false') {
            this.syncService.activateAudioDevice(elm.value);
        } else {
            this.syncService.stopAudioStream();
        }
    }

    public ngOnDestroy(): void {
        this._ngUnsubscribe.next();
        this._ngUnsubscribe.complete();
    }
}
