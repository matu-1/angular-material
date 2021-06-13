import { ValidatorFn } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';

export enum InputType {
  textField,
  dropdown,
  datepicker,
  autocomplete,
}

export interface Option {
  value: string;
  label: string;
}

export interface Validator {
  message: string;
  validator: ValidatorFn;
  key: string;
}

type Type =
  | 'text'
  | 'password'
  | 'time'
  | 'date'
  | 'email'
  | 'number'
  | 'datetime-local';

export interface FormValue {
  key: string;
  value?: any;
  label: string;
  type?: Type;
  appearance?: MatFormFieldAppearance
  inputType: InputType;
  options?: Option[];
  validator?: Validator[];
}
