import { Component, Input, OnInit } from '@angular/core';
import { InputType, FormValue, Option } from './interfaces';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith, tap } from 'rxjs/operators';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.css'],
})
export class TextFieldComponent implements OnInit {
  InputType = InputType;
  @Input()
  formValue!: FormValue;
  @Input()
  form!: FormGroup;
  filteredOptions!: Observable<Option[]>;
  selected: any = ''; //para setear el ultimo valor

  constructor() {}

  get control() {
    return this.form.get(this.formValue.key);
  }

  get appearance() {
    return this.formValue.appearance?? 'legacy';
  }

  ngOnInit(): void {
    if (this.control && this.formValue.options) {
      this.filteredOptions = this.control.valueChanges.pipe(
        startWith(''),
        map((value) => this.filter(value))
      );
    }
  }

  private filter(value: any): Option[] {
    if (!this.formValue.options) return [];
    if (typeof value === 'string')
      return this.formValue.options.filter((item) =>
        item.label.toUpperCase().includes(value.toUpperCase())
      );
    return this.formValue.options;
  }

  displayWith(item: any) {
    return item?.value;
  }

  onClosePanelAuto() {
    this.control?.setValue(this.selected);
  }

  onOptionSelected(ev: MatAutocompleteSelectedEvent) {
    this.selected = ev.option.value;
  }
}
