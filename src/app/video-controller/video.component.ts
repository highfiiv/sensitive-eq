import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { SafeUrl } from "@angular/platform-browser";
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { SyncService } from '@shared/services/sync.service';
import { IFile } from '@common';

@Component({
    selector: 'video-controller',
    templateUrl: './video.component.html',
    styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit, OnDestroy {
    private _ngUnsubscribe: Subject<void> = new Subject<void>();
    @ViewChild('video', { static: true }) private video: ElementRef;

    public safeSrc: SafeUrl;
    public mediaStream = new MediaStream();

    constructor(private syncService: SyncService) { }

    public ngOnInit(): void {
        this.syncService.getVideo().pipe(
            takeUntil(this._ngUnsubscribe)
        ).subscribe((file: IFile) => {
            if (file) {
                console.log(file);
                // (this.video as ElementRef).nativeElement.src = file.url; // unsafe, use binding
                // this.safeSrc = file.url; // broken: loads in blob but no playsies

                // second attempt
                // let reader = new FileReader();
                // reader.readAsDataURL(file.file);
                // this.safeSrc = reader.result;

                // play when a valid src is added
                (this.video as ElementRef).nativeElement.play = true;
            }
        });
    }

    public ngOnDestroy(): void {
        this._ngUnsubscribe.next();
        this._ngUnsubscribe.complete();
    }
}
