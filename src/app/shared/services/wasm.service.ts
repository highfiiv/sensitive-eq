import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

// https://github.com/buttplugio/buttplug-rs-ffi/tree/master/js
import * as Buttplug from 'buttplug';

@Injectable({
    providedIn: 'root'
})
export class WasmService {
    private _wasmReady$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    private _client: Buttplug.ButtplugClient;

    private _BTDevices$: BehaviorSubject<Array<any>> = new BehaviorSubject<Array<any>>([]);

    constructor() {
        this.connectEmbedded().then(() => this.connectEmbedded());

        // debugging and logging device info
        this._BTDevices$.subscribe((res: any) => {
            console.log(res);
            if (res.length) {
                for ( let i = 0, j = res.length; i < j; i++ ) {
                    console.log("{} supports these messages:", res[i]);
                    for ( let ii = 0, jj = res[i].AllowedMessages.length; ii < jj; ii++ ) {
                        console.log(res[i].AllowedMessages[ii]);
                    }
                }
            }
        });
    }

    /* ------------------------------------------------------------------------ *
        CONNECTION TO SERVER
    * ------------------------------------------------------------------------ */
    async connectEmbedded() {
        // Instantiate our wasm module. This only needs to be done once.
        await Buttplug.buttplugInit();
        this._client = new Buttplug.ButtplugClient("Sensitive Eq Client");

        // now that we have a client setup listeners
        this.deviceListener();

        let connector = new Buttplug.ButtplugEmbeddedConnectorOptions();

        // there was an attempt!
        await this._client.connect(connector)
            .then(() => {
                this._wasmReady$.next(true);
                console.log("connected");
            })
            .catch(e => {
                console.log("catch", e.reason);
            });
    }

    /* ------------------------------------------------------------------------ *
        SERVER STATUS
    * ------------------------------------------------------------------------ */
    public serverReady(): Observable<boolean> {
        return this._wasmReady$.pipe();
    }

    /* ------------------------------------------------------------------------ *
        BLUETOOTH DEVICES
        - https://buttplug-developer-guide.docs.buttplug.io/writing-buttplug-applications/device-enum.html#scanning
    * ------------------------------------------------------------------------ */
    // Set up our DeviceAdded/DeviceRemoved event handlers before connecting. If
    // devices are already held to the server when we connect to it, we'll get
    // "deviceadded" events on successful connect.
    public deviceListener() {
        this._client.addListener("deviceadded", (device) => {
            console.log(device);
            this._client.Devices.forEach((device) => this._BTDevices$.next(this._BTDevices$.getValue().concat([device])));
        });
        // remove all devices!
        this._client.addListener("deviceremoved", (device) => this._BTDevices$.next([]));
            // this._BTDevices$
            //     .next(this._BTDevices$
            //         .getValue()
            //         .filter(function (value, index, arr) {
            //             return value !== device.Name;
            //         })));
    }

    public startScanning(): void {
        this._client.startScanning()
            .then((e) => {
                console.log(e);
            })
            .catch(e => {
                console.log("catch", e.reason);
            });
    }

    public stopScanning(): void {
        this._client.stopScanning()
            .then((e) => {
                console.log(e);
            })
            .catch(e => {
                console.log("catch", e.reason);
            });
    }

    // subscribe to ALL paired bluetooth devices
    public getActiveBTDevices(): Observable<Array<any>> {
        return this._BTDevices$.pipe();
    }

    /* ------------------------------------------------------------------------ *
        MESSAGING DEVICES
        https://buttplug-developer-guide.docs.buttplug.io/writing-buttplug-applications/device-control.html#sending-device-messages
    * ------------------------------------------------------------------------ */
    public message(amount:number): any {
        console.log(amount);
        // let test_client_device = this._client.Devices[0];
        // console.log(test_client_device);

        // test_client_device
        //     .vibrate(VibrateCommand.Speed(1.0))
        //     .then((m) => {
        //         console.log("then", m);
        //     })
        //     .catch(e => {
        //         console.log("catch", e.reason);
        //     });

        //     let vibrator_count = test_client_device
        //         .allowed_messages
        //         .get(&ButtplugDeviceMessageType::VibrateCmd)
        //         .and_then(|attributes| attributes.feature_count);

        //     test_client_device
        //         .vibrate(VibrateCommand::SpeedVec(vec![1.0, 0.0]))
        //         .await?;
    }


}
