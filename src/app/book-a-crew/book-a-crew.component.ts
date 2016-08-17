import { Component, Input, OnChanges, SimpleChange, ElementRef } from '@angular/core';
import { MaterializeDirective } from "angular2-materialize";
import { Container } from '../container';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { BookingForm } from '../booking-form';
import { CrewList } from '../crew-list';
import { CrewTable} from '../crew-table';
import { Card } from '../card';
import { TopNav } from '../top-nav';
import { Footer } from '../footer';

declare var jQuery:any;

@Component({
  selector: 'kn-book-a-crew',
  templateUrl: 'book-a-crew.component.html',
  directives: [TopNav, Footer, MaterializeDirective, BookingForm, CrewList, CrewTable, Container, Card],
  styles: [``]
})
export class BookACrew {
  bookings: FirebaseListObservable<any[]>;

  constructor(private af: AngularFire) {
  }

  ngOnInit() {
    this.bookings = this.af.database.list('/bookings');
  }

  ngAfterViewInit() {
    // jQuery('ul.tabs').tabs('select_tab', this.selectedDate.getDay());
  }

}
