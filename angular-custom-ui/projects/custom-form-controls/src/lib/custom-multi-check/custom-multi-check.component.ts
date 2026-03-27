import { AfterContentInit, Component, ContentChildren, OnDestroy, QueryList, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MultiCheckOption } from '../shared/classes/multi-check-option';

@Component({
  selector: 'lib-custom-multi-check',
  templateUrl: './custom-multi-check.component.html',
  styleUrls: ['./custom-multi-check.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomMultiCheckComponent),
      multi: true
    }
  ]
})
export class CustomMultiCheckComponent implements AfterContentInit, OnDestroy, ControlValueAccessor {

  @ContentChildren(MultiCheckOption, { descendants: true }) options!: QueryList<MultiCheckOption>;

  private subscriptions = new Subscription();
  private selectedValues: any[] = [];

  private _onChange!: (_: any) => void;
  _onTouched!: () => void;
  isDisable: boolean = false;

  ngAfterContentInit(): void {
    this.options.forEach(option => {
      this.subscriptions.add(
        option.valueChanges$.subscribe(
          optionChecked => {
            if (optionChecked) {
              this.add(option.value);
            } else {
              this.remove(option.value);
            }
          }
        )
      );
    });
  }

  private add(value: any): void {
    this.selectedValues.push(value);
    this._onChange(this.selectedValues);
  }

  private remove(value: any): void {
    const idx = this.selectedValues.findIndex(v => v === value);
    if (idx >= 0) {
      this.selectedValues.splice(idx, 1);
      this._onChange(this.selectedValues);
    }
  }

  writeValue(values: any[]): void {
    values = values || [];
    this.selectedValues = [];
    values.forEach(selectedValue => {
      const selectedOption = this.options.find(v => v.value === selectedValue);
      selectedOption?.control.setValue(true);
    });
  }

  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisable = isDisabled;
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
