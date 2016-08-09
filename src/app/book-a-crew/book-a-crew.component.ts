import { Component } from '@angular/core';
import {MaterializeDirective} from "angular2-materialize";
import {Container} from '../container';
import { REACTIVE_FORM_DIRECTIVES, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'kn-book-a-crew',
  templateUrl: 'book-a-crew.component.html',
  directives: [MaterializeDirective, Container, REACTIVE_FORM_DIRECTIVES],
  styles: [``]
})
export class BookACrew {
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required]
    });
  }

  onSubmit() {
    if (!this.registerForm.valid) {
      return;
    }

    console.log('>>>>>>> ', this.registerForm.value);

  }
}
