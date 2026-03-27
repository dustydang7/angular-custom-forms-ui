import { Directive, Injector, OnDestroy, OnInit, inject } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormControlDirective,
  FormControlName,
  FormGroupDirective,
  NgControl,
  NgModel,
  Validators,
} from '@angular/forms';
import { Subject, distinctUntilChanged, startWith, takeUntil, tap } from 'rxjs';

@Directive({
  selector: '[libControlValueAccessor]'
})
export class ControlValueAccessorDirective<T>
  implements OnInit, OnDestroy, ControlValueAccessor
{
  public control!: FormControl;
  public isRequired: boolean = false;
  public isDisabled: boolean = false;

  protected readonly _destroy$ = new Subject<void>();

  private injector = inject(Injector);
  private _onTouch!: () => T;
  private _onChange!: (value: T | null) => T;

  constructor() {}

  ngOnInit(): void {
    this.setFormControl();
    this.isRequired = this.control?.hasValidator(Validators.required) ?? false;
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
    this._destroy$.unsubscribe();
  }

  private setFormControl(): void {
    try {
      const formControl = this.injector.get(NgControl);

      switch (formControl.constructor) {
        case NgModel: {
          const { control, update } = formControl as NgModel;
          this.control = control;
          this.control.valueChanges
            .pipe(
              startWith(this.control.value),
              distinctUntilChanged(),
              tap((value: T) => update.emit(value)),
              takeUntil(this._destroy$)
            )
            .subscribe();
          break;
        }
        case FormControlName:
          this.control = this.injector
            .get(FormGroupDirective)
            .getControl(formControl as FormControlName);
          break;
        default:
          this.control = (formControl as FormControlDirective)
            .form as FormControl;
          break;
      }
    } catch (error) {
      this.control = new FormControl();
    }
  }

  writeValue(value: T): void {
    this.control
      ? this.control.setValue(value)
      : (this.control = new FormControl(value));
  }

  registerOnChange(fn: (value: T | null) => T): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: () => T): void {
    this._onTouch = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
}
