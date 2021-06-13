import { FormValue } from './interfaces';
import { FormControl, FormGroup } from '@angular/forms';

export class TextFormInput {
  static buildFormGroup(formShema: FormValue[]) {
    const group: any = {};
    formShema.forEach((item) => {
      group[item.key] = new FormControl(
        item.value,
        item.validator?.map((item) => item.validator)
      );
    });
    return new FormGroup(group);
  }
}
