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
import { TimelineComponent } from './timeline/timeline.component';

// import * as Timeline from 'src/assets/libs/timeliner.min.js';

@NgModule({
    declarations: [
        AppComponent,
        SysSoundComponent,
        BandComponent,
        InputRangeComponent,
        TimelineComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        // Timeline
    ],
    providers: [
        ...WINDOW_PROVIDERS
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
