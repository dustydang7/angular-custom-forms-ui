import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'lib-validation-errors',
  templateUrl: './validation-errors.component.html',
  styleUrls: ['./validation-errors.component.scss']
})
export class ValidationErrorsComponent implements OnChanges {

  @Input() errors: Record<string,ValidationErrors> | null = {};
  @Input() customErrorMessages: Record<string,string> = {};

  errorMessages: Record<string,string> = {
    required: 'This field is required'
  }

  ngOnChanges(changes: SimpleChanges): void {
    const { customErrorMessages, errors } = changes;
    if(customErrorMessages) {
      this.errorMessages = {
        ...this.errorMessages,
        ...customErrorMessages.currentValue
      }
    }
  }
}
