import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css']
})
export class FormReactiveComponent implements OnInit {
  name = new FormControl('');

  constructor() { }

  ngOnInit(): void {
    this.name.valueChanges.subscribe(value => {
      console.log('value', value);
    });
  }

  setValueName(){
    this.name.setValue('naruto kun');
  }

}
