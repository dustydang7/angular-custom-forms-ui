import { Component, Input, forwardRef } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Observable } from 'rxjs';
import { MultiCheckOption } from '../shared/classes/multi-check-option';

@Component({
  selector: 'lib-custom-checkbox',
  templateUrl: './custom-checkbox.component.html',
  styleUrls: ['./custom-checkbox.component.scss'],
  providers: [
    {
      provide: MultiCheckOption,
      useExisting: CustomCheckboxComponent
    }
  ]
})
export class CustomCheckboxComponent<T> extends MultiCheckOption {
  @Input({required: true}) value:any;
  @Input({required: true}) label: string = '';
}
