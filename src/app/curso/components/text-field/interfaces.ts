import { ValidatorFn } from '@angular/forms';

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
  inputType: InputType;
  options?: Option[];
  validator?: Validator[];
}
