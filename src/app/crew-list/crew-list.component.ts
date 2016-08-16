import { Component, Input } from '@angular/core';
import { MaterializeDirective } from "angular2-materialize";
import { Container } from '../container';
import { Booking } from '../models/booking.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'kn-crew-list',
  templateUrl: 'crew-list.component.html',
  directives: [MaterializeDirective, Container],
  styles: [`
    .collapsible .collection {
        margin: 0;
        border: none;
        margin-bottom: -10px;
    }
    .collection .collection-item {
        padding-top: 20px;
    }
  `]
})
export class CrewList {
  @Input() selectedDate: string;

  booking: Booking;
  bookings: FirebaseListObservable<Booking[]>;

  constructor(private af: AngularFire) {
  }

  ngOnInit() {
    this.bookings = this.af.database.list('/bookings');
  }

}
