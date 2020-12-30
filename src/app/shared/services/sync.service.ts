import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { IFile } from '@common';

@Injectable({
    providedIn: 'root'
})
export class SyncService {
    private _videoFile: BehaviorSubject<IFile>  = new BehaviorSubject<IFile>(null);
    private _audioDevice: BehaviorSubject<string>  = new BehaviorSubject<string>('');
    private _audioStreamActive: BehaviorSubject<boolean>  = new BehaviorSubject<boolean>(false);

    public devices: any[];

    constructor() { }

    /* ------------------------------------------------------------------------ *
        Store streaming devices
        - must happen AfterViewInit
    * ------------------------------------------------------------------------ */
    getDevices(){
        // get and list the devices for selection
        navigator.mediaDevices.enumerateDevices().then((devices: MediaDeviceInfo[]) => {
            this.devices = devices.filter(device => device.kind == "audiooutput");
        })
        .catch(function (err) {
            console.log(err.name + ": " + err.message);
        });
    }

    /* ------------------------------------------------------------------------ *
        VIDEO
    * ------------------------------------------------------------------------ */
    public setVideo(file: IFile){
        this._videoFile.next(file);
    }

    public getVideo(): Observable<IFile>{
        return this._videoFile.pipe();
    }

    /* ------------------------------------------------------------------------ *
        AUDIO
    * ------------------------------------------------------------------------ */
    // when a user selects an audio device
    public setAudioDevice(device: string): void {
        this._audioDevice.next(device);
    }
    // subscribe to play/stop status
    public audioStreamActive(): Observable<boolean>{
        return this._audioStreamActive.pipe();
    }
    // play only
    public playAudioStream(): void {
        this._audioStreamActive.next(true);
    }
    // stop only
    public stopAudioStream(): void {
        this._audioStreamActive.next(false);
    }
}
