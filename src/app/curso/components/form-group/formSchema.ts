import { FormValue, InputType } from '../text-field/interfaces';
import { Validators } from '@angular/forms';

export const TEST_SCHEMA: FormValue[] = [
  {
    key: 'name',
    inputType: InputType.textField,
    label: 'Name',
    validator: [
      {
        validator: Validators.required,
        message: 'Es requerido',
        key: 'required',
      },
      {
        validator: Validators.minLength(4),
        message: 'Minimo 4 caracteres',
        key: 'minlength',
      },
    ],
  },
  {
    key: 'hora',
    inputType: InputType.textField,
    type: 'time',
    label: 'Hora',
    validator: [
      {
        validator: Validators.required,
        message: 'Es requerido',
        key: 'required',
      },
    ],
  },
  {
    key: 'email',
    inputType: InputType.textField,
    label: 'Email',
    validator: [
      {
        validator: Validators.required,
        message: 'Es requerido',
        key: 'required',
      },
      {
        validator: Validators.email,
        message: 'Debe ser un correo valido',
        key: 'email',
      },
    ],
  },
  {
    key: 'fechaNacimiento',
    inputType: InputType.datepicker,
    label: 'Fecha nacimiento',
    value: new Date(),
    validator: [
      {
        validator: Validators.required,
        message: 'Es requerido',
        key: 'required',
      },
    ],
  },
  {
    key: 'color',
    inputType: InputType.dropdown,
    label: 'Color',
    validator: [
      {
        validator: Validators.required,
        message: 'Es requerido',
        key: 'required',
      },
    ],
    options: [
      {
        value: 'black',
        label: 'Black',
      },
      {
        value: 'orange',
        label: 'Orange',
      },
    ],
  },
  {
    key: 'curso',
    inputType: InputType.autocomplete,
    label: 'Curso',
    validator: [
      {
        validator: Validators.required,
        message: 'Es requerido',
        key: 'required',
      },
    ],
    options: [
      {
        value: 'java',
        label: 'Java',
      },
      {
        value: 'php',
        label: 'PHP',
      },
      {
        value: 'dart',
        label: 'dart',
      },
      {
        value: 'js',
        label: 'javaScript',
      },
    ],
  },
];
