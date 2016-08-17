import { Component, ElementRef, OnInit } from '@angular/core';
import { MaterializeDirective } from "angular2-materialize";
import { Container } from '../container';
import { TimePicker } from '../time-picker';
import { CORE_DIRECTIVES, FORM_DIRECTIVES, ControlGroup, FormBuilder, Validators, AbstractControl } from '@angular/common';
import { Person } from '../models/person.model';
import { Booking } from '../models/booking.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
declare var jQuery: any;

@Component({
  selector: 'kn-booking-form',
  templateUrl: 'booking-form.component.html',
  providers: [FormBuilder],
  directives: [MaterializeDirective, Container, FORM_DIRECTIVES, TimePicker],
  styles: [`
    .field-error {
        color: red;
        margin-top: -15px;
        margin-bottom: -5px;
        font-size: 80%;
    }
  `]
})
export class BookingForm {
  elementRef: ElementRef;
  form: ControlGroup;
  booking: Booking;
  bookings: FirebaseListObservable<Booking[]>;

  constructor(private formBuilder: FormBuilder, private af: AngularFire, elementRef: ElementRef) {
    this.form = formBuilder.group({
      name: ['', Validators.required],
      date: ['', Validators.required],
      time: [],
      venue: ['', Validators.required],
      location: ['', Validators.required],
      size: ['', Validators.required],
      hours: ['', Validators.required],
      specialRequirements: ['', Validators.required]
    });
    this.elementRef = elementRef;
  }

  ngOnInit() {
    jQuery("#time").pickatime({
      autoclose: false,
      twelvehour: false
    });
    this.bookings = this.af.database.list('/bookings');
  }

  onSubmit() {
    this.booking = this.form.value;
    this.bookings.push(this.booking);
  }

}
