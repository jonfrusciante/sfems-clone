import { Component } from '@angular/core';
import {MaterializeDirective} from "angular2-materialize";
import {Container} from '../container';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, ControlGroup, FormBuilder, Validators, AbstractControl} from '@angular/common';

import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'kn-book-a-crew',
  templateUrl: 'book-a-crew.component.html',
  directives: [MaterializeDirective, Container, FORM_DIRECTIVES],
  styles: [``]
})
export class BookACrew {
  form: ControlGroup;
  people: FirebaseListObservable<any[]>;

  constructor(private formBuilder: FormBuilder, private af: AngularFire) {
    this.form = formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.people = this.af.database.list('/people');    
  }

  onSubmit() {
    if (!this.form.valid) {
      return;
    }

    console.log('>>>>>>> ', this.form.value);

    this.people.push(this.form.value);

  }
}
