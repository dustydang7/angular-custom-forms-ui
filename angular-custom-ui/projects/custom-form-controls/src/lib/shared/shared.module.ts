import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidationErrorsComponent } from './validation-errors/validation-errors.component';
import { ControlValueAccessorDirective } from './control-value-accessor.directive';



@NgModule({
  declarations: [
    ValidationErrorsComponent,
    ControlValueAccessorDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [ValidationErrorsComponent, ControlValueAccessorDirective]
})
export class SharedModule { }
