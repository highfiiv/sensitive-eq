import { AfterViewInit, Component, OnInit } from '@angular/core';

import { WasmService } from '@shared/services/wasm.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

    constructor(private wasmService: WasmService) {}

    public ngOnInit(): void {}

    public ngAfterViewInit(){
        // this.wasmService.runEmbeddedConnectionExample();
    }

}
