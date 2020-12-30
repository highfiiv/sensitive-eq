import { Component, OnInit, OnChanges, SimpleChanges, Input, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

import { IFile } from '@common';

@Component({
    selector: 'input-upload',
    templateUrl: './upload.component.html',
    styleUrls: ['./upload.component.scss']
})
export class InputUploadComponent implements OnInit, OnChanges{
    @Output() fileUploaded: EventEmitter<IFile> = new EventEmitter();
    @Output() fileDeleted: EventEmitter<IFile> = new EventEmitter();
    @Input() delete: boolean = false;
    @HostBinding('class.dragover') public status = false;
    public file: IFile;

    // Dragover listener
    @HostListener('dragover', ['$event']) onDragOver(evt: DragEvent): void {
        evt.preventDefault();
        evt.stopPropagation();
        this.status = true;
    }
    // Dragleave listener
    @HostListener('dragleave', ['$event']) public onDragLeave(evt: DragEvent): void {
        evt.preventDefault();
        evt.stopPropagation();
        this.status = true;
    }
    // Drop listener
    @HostListener('drop', ['$event']) public ondrop(evt: DragEvent): void {
        evt.preventDefault();
        evt.stopPropagation();
        this.status = true;

        // this.fileChange(evt);
        // delete any previous files
        this.file = undefined;
        // setup new files
        const file = evt.dataTransfer.files[0];
        const url = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(file));
        this.file = { file, url };
        this.fileUploaded.emit(this.file);
    }

    constructor(private sanitizer: DomSanitizer) { }

    public ngOnInit(): void {}

    public ngOnChanges(changes: SimpleChanges) {
        if ('delete' in changes) {
            this.deleteFile();
        }
    }

    // Manual file selection from OS/filesystem
    public fileChange(event): void {
        // delete any previous files
        this.file = undefined;
        // setup new file
        const file = event.target.files[0];
        const url = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(file));
        this.file = { file, url };
        this.fileUploaded.emit(this.file);
    }

    // parent component handles server requests
    public deleteFile(): void {
        if (!this.delete) { return; }

        this.fileDeleted.emit(this.file);
        this.file = undefined;
        this.delete = false;
    }

    // parent component handles server requests
    public upload(): void {
        this.fileUploaded.emit(this.file);
    }
}
