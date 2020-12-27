import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs'
import { filter, map, take } from 'rxjs/operators'

// https://buttplug-developer-guide.docs.buttplug.io/writing-buttplug-applications/connecting.html
import * as Buttplug from 'node_modules/buttplug-wasm/dist/web/buttplug.js';
// import * as bp from 'node_modules/buttplug-wasm/buttplug-wasm.web/buttplug_wasm.js';
// import 'node_modules/buttplug-wasm/buttplug-wasm.web/buttplug_wasm_bg.wasm';

@Injectable({
    providedIn: 'root'
})
export class WasmService {
    // private _wasmReady$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    // public module: any;

    constructor() {
        console.log('wasmservice', Buttplug);
    }

    // https://malcoded.com/posts/web-assembly-angular/
    private async instantiateWasm(url: string) {
        // fetch the wasm file
        // const wasmFile = await fetch(url);

        // // convert it into a binary array
        // const buffer = await wasmFile.arrayBuffer();
        // const binary = new Uint8Array(buffer);

        // // create module arguments
        // // including the wasm-file
        // const moduleArgs = {
        //     wasmBinary: binary,
        //     onRuntimeInitialized: () => {
        //         // TODO
        //     }
        // };

        // // instantiate the module
        // this.module = Module(moduleArgs);
    }

    // public wasm(input: number): Observable<number> {
    //     return this._wasmReady$.pipe(filter(value => value === true)).pipe(
    //         take(1)
    //     ).subscribe((res:any) => {
    //         console.log(res);
    //     });
    // }


    async runEmbeddedConnectionExample() {
        // Instantiate our wasm module. This only needs to be done once. If you did it
        // elsewhere, ignore this.
        // await Buttplug.buttplugInit();

        // After you've created a connector, the connection looks the same no
        // matter what, though the errors thrown may be different.
        // let connector = new Buttplug.ButtplugEmbeddedConnectorOptions();
        // let client = new Buttplug.ButtplugClient("Developer Guide Example");

        // // Now we connect. If anything goes wrong here, we'll throw, but outside of an
        // // issue with arguments, embedded connections should never fail.
        // try {
        //     await client.connect(connector);
        // }
        // catch (ex) {
        //     // If we ever get there, it probably has something to do with our arguments
        //     // being wrong.
        //     console.log(ex);
        // }

        // // We're connected, yay!
        // console.log("Connected!");

        // // And now we disconnect as usual
        // await client.disconnect();
    };

}
