import { Component, OnInit } from '@angular/core';

import { SyncService } from '@shared/services/sync.service';
import { IFile } from '@common';

@Component({
    selector: 'navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

    constructor(private syncService: SyncService) { }

    public ngOnInit(): void {
    }

    public videoReceived(e: IFile){
        this.syncService.setVideo(e);
    }

}
