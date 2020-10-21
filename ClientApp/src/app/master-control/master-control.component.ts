import { Component, ElementRef, Input, OnInit, Self, ViewChild } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NgControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-master-control',
  templateUrl: './master-control.component.html',
  styleUrls: ['./master-control.component.css'],
  providers: []
})
export class MasterControlComponent implements ControlValueAccessor, Validator, OnInit {

  constructor(@Self() public controlDir: NgControl) {
    this.controlDir.valueAccessor = this;
}

ngOnInit(): void {
  
  const control = this.controlDir.control;
  const validators: ValidatorFn[] = control.validator ? [control.validator] : [];
  if (this.isRequired) {
    validators.push(Validators.required);
  }
  // if (this.pattern) {
  //   validators.push(Validators.pattern(this.pattern));
  // }

  control.setValidators(validators);
  control.updateValueAndValidity();
}

  @ViewChild('input', {static: true}) input: ElementRef;
  disabled;

  @Input() type = 'text';
  @Input() isRequired: boolean = false;
  // @Input() pattern: string = null;
  @Input() label: string = null;
  @Input() placeholder: string;
  @Input() errorMsg: string;

  writeValue(obj: any): void {
    this.input.nativeElement.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
  onChange(event) {  console.log(event)}

  onTouched() { }

  validate(c: AbstractControl): ValidationErrors {
    const validators: ValidatorFn[] = [];
    if (this.isRequired) {
      validators.push(Validators.required);
    }
    // if (this.pattern) {
    //   validators.push(Validators.pattern(this.pattern));
    // }

    return validators;
  }

}
