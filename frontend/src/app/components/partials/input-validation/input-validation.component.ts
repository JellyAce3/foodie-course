import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';                                           // This Angular component provides validation error messages for a given form control.
import { AbstractControl } from '@angular/forms';

const VALIDATORS_MESSAGES: any = {              // 'VALIDATORS_MESSAGES' Constant: Maps validation error keys to user-friendly error messages.
  required: 'Should not be empty',
  email: 'Email is not valid',
  minlength: 'Field is too short',
  notMatch: 'Password and Confirm does not match',
};

@Component({
  selector: 'input-validation',
  templateUrl: './input-validation.component.html',
  styleUrls: ['./input-validation.component.css'],
})
export class InputValidationComponent implements OnInit, OnChanges {
  @Input()                                  // '@Input' Decorators:
  control!: AbstractControl;                // - 'control': The form control to monitor for validation errors.
  @Input()
  showErrorsWhen: boolean = true;           // - 'showErrorsWhen': A boolean indicating whether to display errors (default is true).
  errorMessages: string[] = [];             // 'errorMessages' Property: Stores validation error messages.
  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {   // 'ngOnInit' Method: Initialization hook, subscribes to form control changes and checks for validation errors.
    this.checkValidation();
  }

  ngOnInit(): void {                        // 'ngOnInit' Method: Initialization hook, subscribes to form control changes and checks for validation errors.

    this.control.statusChanges.subscribe(() => {
      this.checkValidation();
    });
    this.control.valueChanges.subscribe(() => {
      this.checkValidation();
    });
  }

  checkValidation() {                         // 'checkValidation' Method: Checks the form control's validation errors and updates 'errorMessages' accordingly.
    const errors = this.control.errors;
    if (!errors) {
      this.errorMessages = [];
      return;
    }

    const errorKeys = Object.keys(errors);
    this.errorMessages = errorKeys.map((key) => VALIDATORS_MESSAGES[key]);
  }
}
