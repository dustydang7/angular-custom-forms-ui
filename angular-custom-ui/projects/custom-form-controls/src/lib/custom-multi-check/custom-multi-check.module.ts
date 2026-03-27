import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMultiCheckComponent } from './custom-multi-check.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CustomCheckboxModule } from '../custom-checkbox/custom-checkbox.module';

@NgModule({
  declarations: [
    CustomMultiCheckComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    CustomCheckboxModule
  ],
  exports: [CustomMultiCheckComponent]
})
export class CustomMultiCheckModule { }
