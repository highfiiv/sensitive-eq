import { Component, OnDestroy, OnInit } from '@angular/core';
import { SyncService } from '@shared/services/sync.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'timeline-controller',
    templateUrl: './timeline.component.html',
    styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit, OnDestroy {
    private _ngUnsubscribe: Subject<void> = new Subject<void>();

    constructor(private syncService: SyncService) {}

    public ngOnInit(): void {
        this.syncService.getVideo().pipe(
            takeUntil(this._ngUnsubscribe)
        ).subscribe((res:any) => {
            // console.log(res);
        });
    }

    public ngOnDestroy(): void {
        this._ngUnsubscribe.next();
        this._ngUnsubscribe.complete();
    }
}
