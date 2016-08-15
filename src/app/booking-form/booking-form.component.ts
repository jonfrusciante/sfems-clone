import { Component } from '@angular/core';
import { MaterializeDirective } from "angular2-materialize";
import { Container } from '../container';
import { TimePicker } from '../time-picker';
import { CORE_DIRECTIVES, FORM_DIRECTIVES, ControlGroup, FormBuilder, Validators, AbstractControl } from '@angular/common';
import { Person } from '../models/person.model';
import { Booking } from '../models/booking.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'kn-booking-form',
  templateUrl: 'booking-form.component.html',
  providers: [FormBuilder],
  directives: [MaterializeDirective, Container, FORM_DIRECTIVES, TimePicker],
  styles: [``]
})
export class BookingForm {
  form: ControlGroup;
  booking: Booking;
  bookings: FirebaseListObservable<Booking[]>;

  constructor(private formBuilder: FormBuilder, private af: AngularFire) {
    this.form = formBuilder.group({
      name: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      venue: ['', Validators.required],
      location: ['', Validators.required],
      size: ['', Validators.required],
      hours: ['', Validators.required],
      specialRequirements: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.bookings = this.af.database.list('/bookings');   
  }

  onSubmit() {
    this.booking = this.form.value;
    this.bookings.push(this.booking);
  }

}
