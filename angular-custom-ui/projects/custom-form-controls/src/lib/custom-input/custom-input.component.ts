import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlValueAccessorDirective } from '../shared/control-value-accessor.directive';

type InputType = 'text' | 'number' | 'email' | 'password';

@Component({
  selector: 'lib-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true
    }
  ]
})
export class CustomInputComponent<T> extends ControlValueAccessorDirective<T> {
  @Input({required: true}) label: string = '';
  @Input({required: true}) inputId: string = '';
  @Input({required: true}) type: InputType = 'text';
  @Input({required: true}) inputName: string = '';
  @Input() customErrorMessage: Record<string, string> = {};
}
