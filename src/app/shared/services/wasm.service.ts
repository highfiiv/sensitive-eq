import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs'
import { filter, map, take } from 'rxjs/operators'

// https://buttplug-developer-guide.docs.buttplug.io/writing-buttplug-applications/connecting.html
// import init, { ButtplugClient,  } from 'node_modules/buttplug-wasm/buttplug-wasm.web/buttplug_wasm.js';
// import * as bp from 'node_modules/buttplug-wasm/buttplug-wasm.web/buttplug_wasm.js';
// import 'node_modules/buttplug-wasm/buttplug-wasm.web/buttplug_wasm_bg.wasm';

@Injectable({
    providedIn: 'root'
})
export class WasmService {
    // private _wasmReady$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    // public module: any;

    constructor() {
        console.log('wasmservice');
        // this.instantiateWasm('buttplug-wasm/buttplug-wasm.web/buttplug_wasm_bg.wasm');
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

}
