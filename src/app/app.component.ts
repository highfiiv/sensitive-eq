import { Component, OnInit } from '@angular/core';

import { IntefaceService } from '@shared/services/inteface.service';
import { WasmService } from '@shared/services/wasm.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
    constructor(
        private intefaceService:IntefaceService,
        private wasmService: WasmService
    ) {}

    public ngOnInit(): void {}
}
