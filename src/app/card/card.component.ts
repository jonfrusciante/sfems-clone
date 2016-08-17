import { Component, ViewEncapsulation, Input } from '@angular/core';
import { Booking } from '../models/booking.model';

@Component({
  selector: 'kn-card',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './card.style.css'
  ],
  templateUrl: './card.component.html'
})
export class Card {

  @Input() booking: Booking;

}