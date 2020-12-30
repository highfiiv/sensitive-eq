import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import { NgxVideoTimelineModule } from 'ngx-video-timeline';

import { AppComponent } from './app.component';
import { AudioComponent } from './audio-controller/audio.component';
import { TimelineComponent } from './timeline-controller/timeline.component';
import { VideoComponent } from './video-controller/video.component';
import { NavigationComponent } from './navigation/navigation.component';

import { WINDOW_PROVIDERS } from '@shared/services/window.service';
import { BandComponent } from '@shared/components/band/band.component';
import { InputRangeComponent } from '@shared/components/input-range/input-range.component';
import { InputUploadComponent } from '@shared/components/input-upload/upload.component';
import { AudioDevicesComponent } from './shared/components/audio-devices/audio-devices.component';

@NgModule({
    declarations: [
        AppComponent,
        AudioComponent,
        BandComponent,
        TimelineComponent,
        VideoComponent,
        NavigationComponent,
        InputRangeComponent,
        InputUploadComponent,
        AudioDevicesComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        // NgxVideoTimelineModule
        // Timeline
    ],
    exports:[
        InputRangeComponent,
        InputUploadComponent
    ],
    providers: [
        ...WINDOW_PROVIDERS
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
