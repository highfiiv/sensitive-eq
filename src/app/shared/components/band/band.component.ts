import { Component, ElementRef, EventEmitter, forwardRef, Input, OnDestroy, OnInit, Output, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { BaseControlValueAccessor } from '@shared/utilities/BaseControlValueAccessor';

@Component({
    selector: 'band',
    templateUrl: './band.component.html',
    styleUrls: ['./band.component.scss'],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => BandComponent),
        multi: true
    }]
})
export class BandComponent extends BaseControlValueAccessor<any> implements OnInit, OnDestroy {
    private _ngUnsubscribe: Subject<void> = new Subject<void>();
    @Input() set dB(value: number) {
        this.peak = value;
        this.score = this.form.controls.range.value < value ? value - this.form.controls.range.value : 0;
    }

    @Input() id: number = 0;
    @Output() senseVal = new EventEmitter<number>();
    public peak: number = 0; // public dB level
    public percent: number = 50; // range value is what percentage of 0 - 255
    public score: number = 0; // dB peaks into the range value this much
    public form = <FormGroup>this.fb.group({
        range: this.fb.control(null)
    });

    constructor(
        private fb: FormBuilder,
        private renderer: Renderer2,
        private elementRef: ElementRef
    ) { super(); } // required methods are within BaseControlValueAccessor

    public ngOnInit(): void {

        this.form.patchValue({
            range: 50
        },
            {
                emitEvent: false,
                onlySelf: true
            });

        this.form.controls['range'].valueChanges
            .pipe(
                takeUntil(this._ngUnsubscribe)
            ).subscribe((val: any) => {
                this.percent = parseInt(((val / 255) * 100).toFixed());
                this.renderer.setStyle(this.elementRef.nativeElement, 'background-image', `linear-gradient(rgba(253,92,99,1), rgba(144,255,0,1) ${this.percent}%)`);
                this.senseVal.emit(val);
            });
    }

    // init value
    public writeValue(val: string): void {
        this.value = val;
        this.onChange(+this.value); // set the control/form value
    }

    public onInput(val: string): void {
        this.value = val;
        this.onChange(+this.value); // set the control/form value
    }

    public ngOnDestroy(): void {
        this._ngUnsubscribe.next();
        this._ngUnsubscribe.complete();
    }
}
