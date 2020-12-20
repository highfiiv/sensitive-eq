import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { BaseControlValueAccessor } from '@shared/utilities/BaseControlValueAccessor';

@Component({
    selector: 'input-range',
    templateUrl: './input-range.component.html',
    styleUrls: ['./input-range.component.scss'],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => InputRangeComponent),
        multi: true
    }]
})
export class InputRangeComponent extends BaseControlValueAccessor<any> implements OnInit {
    @Input() value: string = '2.5';
    @Input() name: string = '';
    @Input() forID: string; // id value to match a parent label
    @Input() max: number = 255;
    @Input() step: number = 1;
    @Input() disabled = false;

    constructor() { super();  }

    public ngOnInit(): void {}

    public writeValue(val: string): void {
        this.value = val;
        this.onChange(+this.value); // set the control/form value
    }

    public onInput(val: string): void {
        this.value = val;
        this.onChange(+this.value); // set the control/form value
    }
}
