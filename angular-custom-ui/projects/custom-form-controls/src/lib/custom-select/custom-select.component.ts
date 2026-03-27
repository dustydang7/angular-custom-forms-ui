import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessorDirective } from '../shared/control-value-accessor.directive';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'lib-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomSelectComponent),
      multi: true
    }
  ]
})
export class CustomSelectComponent<T> extends ControlValueAccessorDirective<T> {
  @Input({required: true}) options: T[] = [];
  @Input({required: true}) selectId: string = '';
  @Input({required: true}) label: string = '';
  @Input({required: true}) selectName: string = '';
  @Input() customErrorMessage: Record<string, string> = {};

}
