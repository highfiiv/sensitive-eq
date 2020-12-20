import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SysSoundComponent } from './sys-sound/sys-sound.component';
import { WINDOW_PROVIDERS } from './shared/services/window.service';
import { BandComponent } from './shared/components/band/band.component';
import { InputRangeComponent } from '@shared/components/input-range/input-range.component';

@NgModule({
    declarations: [
        AppComponent,
        SysSoundComponent,
        BandComponent,
        InputRangeComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule
    ],
    providers: [
        ...WINDOW_PROVIDERS
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
