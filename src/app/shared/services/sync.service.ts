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

        So, the next thing you're going to run into that's not mentioned anywhere:
        If you try to scan for devices using the embedded connector on chrome,
        you need to trigger that call via a button press.
        The event that triggers that will be traced, and WAY down in the WASM guts it's calling
        WebBluetooth's scanning method, which requires a "user gesture".
        So you can't just load on page load or whatever.
        So you'd need to call your wasm service's scanning method via a button press.

        Right now buttplug-js isn't throwing that error correctly either.
        It'll just do nothing when you call startScanning without a gesture.
        It doesn't even throw the error.
        It just happily, quietly resolves the promise.
    * ------------------------------------------------------------------------ */


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
    public setAudioDevices(){
        // get and list the devices for selection
        navigator.mediaDevices.enumerateDevices().then((devices: MediaDeviceInfo[]) => {
            this._audioDevices.next(devices.filter(device => device.kind == "audiooutput"));
        })
        .catch(function (err) {
            console.log(err.name + ": " + err.message);
        });
    }
    // anyone can subscribe to ALL available devices
    public getAudioDevices(): Observable<Array<any>>{
        return this._audioDevices.pipe();
    }
    // anyone can subscribe to THE selected audio device
    public getAudioDevice(): Observable<string>{
        return this._audioDevice.pipe();
    }
    // when a user selects an audio device
    public activateAudioDevice(device: string): void {
        this._audioDevice.next(device);
    }
    // subscribe to the stream's play/stop status
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
