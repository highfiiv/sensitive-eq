import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { SyncService } from '@shared/services/sync.service';
import { WasmService } from '@shared/services/wasm.service';

@Component({
    selector: 'bluetooth',
    templateUrl: './bluetooth.component.html',
    styleUrls: ['./bluetooth.component.scss']
})
export class BluetoothComponent implements OnInit, OnDestroy {
    private _ngUnsubscribe: Subject<void> = new Subject<void>();

    // server connection
    public ready = false;
    // device statuses
    public btSearching = false;
    public btConnected = false;
    public btDisConnected = false;
    public btDisabled = false;
    public devices = [];

    constructor(private wasmService: WasmService, private syncService: SyncService) { }

    public ngOnInit(): void {
        // Check BP connection before anything
        this.wasmService.serverReady().pipe(
            takeUntil(this._ngUnsubscribe)
        ).subscribe((res: any) => {
            this.ready = res;
        });

        // subscribe to all devices (whenever they become available)
        this.wasmService.getActiveBTDevices().pipe(
            takeUntil(this._ngUnsubscribe)
        ).subscribe((devices: any) => {
            this.devices = devices;
        });
    }

    /* ------------------------------------------------------------------------ *
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
    public connectBT() {
        this.wasmService.connectEmbedded();
    }
    public scanBT() {
        this.wasmService.startScanning();
    }
    public disconnectBT() {
        this.wasmService.stopScanning();
    }
    public onSelect(e) {
        console.log(e);
    }

    public ngOnDestroy(): void {
        this._ngUnsubscribe.next();
        this._ngUnsubscribe.complete();
    }
}
