import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomCheckboxComponent } from './custom-checkbox.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CustomCheckboxComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [CustomCheckboxComponent]
})
export class CustomCheckboxModule { }
