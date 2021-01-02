import { Component, ElementRef, EventEmitter, forwardRef, Input, OnDestroy, OnInit, Output, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { BaseControlValueAccessor } from '@shared/utilities/BaseControlValueAccessor';
import { IBand } from '@common';

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
    @Input() set dB(dB: number) {
        // 1: setup the dB visual
        this.paddingTop = dB;
        // 2: convert dB number from 0-255 to 0-100 percent for use
        this.dBPercent = parseInt(((dB / 255) * 100).toFixed());

        // 3: calculate peak: how much dB is peaking into the user-set range
        if (this.range < this.dBPercent) {
            this.peak = this.dBPercent - this.range;
        } else {
            this.peak = 0;
        }
        // console.log(this.paddingTop, this.dBPercent);
    }

    @Input() id: number = 0;
    @Output() values: EventEmitter<IBand> = new EventEmitter<IBand>();
    public paddingTop: number = 0; // public dB level in 0-255 value for padding-top eq visual
    public dBPercent: number = 0; // current dB converted to 0-100
    public range: number = 90; // range value is what percentage of 0 - 255
    public peak: number = 0; // dB peaks into the range value this much
    public form = <FormGroup>this.fb.group({
        range: this.fb.control(null)
    });

    constructor(
        private fb: FormBuilder,
        private renderer: Renderer2,
        private elementRef: ElementRef
    ) { super(); } // required methods are within BaseControlValueAccessor

    public ngOnInit(): void {
        // set default range value
        this.form.patchValue({
            range: this.range
        },
            {
                emitEvent: false,
                onlySelf: true
            });

        // when range is adjusted...
        this.form.controls['range'].valueChanges
            .pipe(
                takeUntil(this._ngUnsubscribe)
            ).subscribe((val: any) => {
                // converting to 0-100 percent
                // this.rangeVal = parseInt(((val / 255) * 100).toFixed());
                this.range = val;
                this.renderer.setStyle(this.elementRef.nativeElement, 'background-image', `linear-gradient(rgba(253,92,99,1), rgba(144,255,0,1) ${this.range}%)`);
                this.emitValues();
            });
    }

    private emitValues(): void{
        this.values.emit({
            id: this.id,
            range: this.range
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
