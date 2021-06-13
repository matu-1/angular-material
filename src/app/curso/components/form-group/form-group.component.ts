import { Component, OnInit } from '@angular/core';
import { TextFormInput } from '../text-field/text-form-input';
import { TEST_SCHEMA } from './formSchema';
@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css'],
})
export class FormGroupComponent implements OnInit {
  formSchema = TEST_SCHEMA;
  clienteForm = TextFormInput.buildFormGroup(TEST_SCHEMA);

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    console.log('values', this.clienteForm.value);
  }

  update() {
    this.clienteForm.patchValue({
      name: 'black cate',
      // lastName: 'uzumaki',
    });
  }
}
