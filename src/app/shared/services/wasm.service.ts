import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs'
import { filter, map, take } from 'rxjs/operators'

// import { Buttplug } from 'node_modules/buttplug/dist/web/buttplug.min.js';
// import { ButtplugDeviceError } from 'buttplug';
// https://buttplug-developer-guide.docs.buttplug.io/writing-buttplug-applications/connecting.html
// import * as Buttplug from 'node_modules/buttplug-wasm/dist/web/buttplug.js';
// import * as bp from 'node_modules/buttplug-wasm/buttplug-wasm.web/buttplug_wasm.js';
// import 'node_modules/buttplug-wasm/buttplug-wasm.web/buttplug_wasm_bg.wasm';

@Injectable({
    providedIn: 'root'
})
export class WasmService {
    // private _wasmReady$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    // public module: any;

    constructor() {
        // console.log('wasmservice', Buttplug);
        this.ButtplugErrors();
    }

    // https://buttplug-developer-guide.docs.buttplug.io/writing-buttplug-applications/api-basics.html#dealing-with-errors

    // This example assumes Buttplug is brought in as a root namespace, via
    // inclusion by a script tag, i.e.
    //
    // <script lang="javascript"
    //  src="https://cdn.jsdelivr.net/npm/buttplug-wasm@1.0.0/dist/web/buttplug.js">
    // </script>
    //
    // If you're trying to load this, change the version to the latest available.

    // In javascript, we'll use es6 style async/await. Remember that await calls
    // return promises, so how you deal with try/catch versus .then()/.catch() is up
    // to you.
    //
    // See the "Dealing with Errors" section of the Developer Guide for more info on this.
    async runAsyncExample() {
        console.log("Running async load example");
        // Instantiate our wasm module. This only needs to be done once. If you did it
        // elsewhere, ignore this.
        await Buttplug.buttplugInit();

        const connector = new Buttplug.ButtplugEmbeddedConnectorOptions();
        const client = new Buttplug.ButtplugClient("Buttplug Example Client");
        await client.connect(connector);
        console.log("Client connected");
    };

    // This example assumes Buttplug is brought in as a root namespace, via
    // inclusion by a script tag, i.e.
    //
    // <script lang="javascript"
    //  src="https://cdn.jsdelivr.net/npm/buttplug-wasm@1.0.0/dist/web/buttplug.js">
    // </script>
    //
    // If you're trying to load this, change the version to the latest available.
    // async runErrorExample() {
    //     ButtplugErrors();
    // }
    async ButtplugErrors() {
        // Instantiate our wasm module. This only needs to be done once.
        // If you did it elsewhere, ignore this.
        await Buttplug.buttplugInit();

        const client = new Buttplug.ButtplugClient("Error Example Client");
        const invalid_options = new Buttplug.ButtplugWebsocketConnectorOptions();
        //invalid_options.Address = "this is not a websocket address";

        // In javascript, there are 2 ways we can call functions and catch exceptions.
        // There's promise chain catching.
        client
            .connect(invalid_options)
            .then(() => {
                console.log("If you got here, shut down Intiface Desktop or whatever other server you're running :P");
            })
            .catch(e => {
                console.log("Using .catch()");
                console.log(e.reason);
            });
        // There's also try/catch, which is handy for async.
        try {
            await client.connect(invalid_options);
        } catch (e) {
            // However, we don't have the type of the exception we get back, so it could
            // be a system exception or something else not buttplug related. If you're
            // interested in Buttplug related exceptions, it's best to check for them
            // here.
            console.log(e);
            if (e instanceof Buttplug.ButtplugError) {
                console.log("this is a buttplug error");
                // This will make sure we're doing something specific to Buttplug.
                if (e instanceof Buttplug.ButtplugClientConnectorError) {
                    console.log("This is a connector error");
                    // And possibly even more specific.
                }
            }
        }
        // However, as all async javascript functions also return promises, so we can
        // treat the call as a promise rejection.
        this.ThrowError().catch((e) => console.log("Got an exception back from our promise!"));
    }

    async ThrowError() {
        // All async functions in Buttplug are written to return exceptions as a
        // promise rejection, meaning they work as both promise chains and
        // async/await.
        throw new ButtplugDeviceError("This is an exception", 0);
    }


    /* ------------------------------------------------------------------------ *
        THE BONEYARD
        - code for testing and experimentation
    * ------------------------------------------------------------------------ */

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

}
