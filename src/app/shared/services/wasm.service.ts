import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs'
import { filter, map, take } from 'rxjs/operators'
import * as Buttplug from 'buttplug';

@Injectable({
    providedIn: 'root'
})
export class WasmService {
    // private _wasmReady$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    // public module: any;

    private client: Buttplug.ButtplugClient;

    constructor() {
        // console.log('wasmservice', Buttplug);
        
        this.connectEmbedded().then(() => console.log("System Loaded"));
    }

    async connectEmbedded() {
        // Instantiate our wasm module. This only needs to be done once.
        // If you did it elsewhere, ignore this.
        await Buttplug.buttplugInit();
        this.client = new Buttplug.ButtplugClient("Sensitive Eq Client");
        console.log("Initialized");

        let websocket_connector = new Buttplug.ButtplugWebsocketConnectorOptions();
        websocket_connector.Address = "ws://localhost:12345";
        
        //await this.client.connect(new Buttplug.ButtplugEmbeddedConnectorOptions());
        await this.client.connect(websocket_connector);
        console.log("connected");
    }

}
