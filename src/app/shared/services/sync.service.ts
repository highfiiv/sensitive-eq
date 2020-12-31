import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { IFile } from '@common';

@Injectable({
    providedIn: 'root'
})
export class SyncService {
    private _videoFile: BehaviorSubject<IFile>  = new BehaviorSubject<IFile>(null);

    private _audioDevice: BehaviorSubject<string>  = new BehaviorSubject<string>(undefined);
    private _audioDevices: BehaviorSubject<Array<any>>  = new BehaviorSubject<Array<any>>([]);
    private _audioStreamActive: BehaviorSubject<boolean>  = new BehaviorSubject<boolean>(false);

    constructor() { }

    /* ------------------------------------------------------------------------ *
        Store streaming devices
        - must happen AfterViewInit
        https://godoc.org/github.com/funjack/launchcontrol/protocol/funscript
    * ------------------------------------------------------------------------ */

    /* ------------------------------------------------------------------------ *
        SCRIPTING
    * ------------------------------------------------------------------------ */

    /* ------------------------------------------------------------------------ *
        VIDEO - WIP
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
    public setAudioDevices(){
        // get and list the devices for selection
        navigator.mediaDevices.enumerateDevices().then((devices: MediaDeviceInfo[]) => {
            this._audioDevices.next(devices.filter(device => device.kind == "audiooutput"));
        })
        .catch(function (err) {
            console.log(err.name + ": " + err.message);
        });
    }
    // subscribe to ALL available devices
    public getAudioDevices(): Observable<Array<any>>{
        return this._audioDevices.pipe();
    }
    // subscribe to THE selected audio device
    public getAudioDevice(): Observable<string>{
        return this._audioDevice.pipe();
    }
    // subscribe to the user selected audio device
    public activateAudioDevice(device: string): void {
        this._audioDevice.next(device);
    }
    // subscribe to the stream's play/stop status
    public audioStreamActive(): Observable<boolean>{
        return this._audioStreamActive.pipe();
    }
    // set play status only
    public playAudioStream(): void {
        this._audioStreamActive.next(true);
    }
    // set stop status only
    public stopAudioStream(): void {
        this._audioStreamActive.next(false);
    }
}
