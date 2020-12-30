import { Component, OnInit } from '@angular/core';
import { SyncService } from '@shared/services/sync.service';
import { WasmService } from '@shared/services/wasm.service';

@Component({
    selector: 'bluetooth',
    templateUrl: './bluetooth.component.html',
    styleUrls: ['./bluetooth.component.scss']
})
export class BluetoothComponent implements OnInit {
    public devices = [];
    public btSearching = false;
    public btConnected = false;
    public btDisConnected = false;
    public btDisabled = false;

    constructor(private wasmService: WasmService) { }

    public ngOnInit(): void {}

    public connectBT(){
        this.wasmService.connectEmbedded();
    }
    public disConnectBT(){}
    public disabledBT(){}

    public onSelect(e){}
}
