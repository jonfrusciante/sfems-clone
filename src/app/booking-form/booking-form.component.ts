import { Component } from '@angular/core';
import { MaterializeDirective } from "angular2-materialize";
import { Container } from '../container';
import { CORE_DIRECTIVES, FORM_DIRECTIVES, ControlGroup, FormBuilder, Validators, AbstractControl } from '@angular/common';
import { Person } from '../models/person.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'kn-booking-form',
  templateUrl: 'booking-form.component.html',
  providers: [FormBuilder],
  directives: [MaterializeDirective, Container, FORM_DIRECTIVES],
  styles: [``]
})
export class BookingForm {
  form: ControlGroup;
  person: Person;
  people: FirebaseListObservable<Person[]>;

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
    this.person = this.form.value;
    this.people.push(this.person);
  }

}
