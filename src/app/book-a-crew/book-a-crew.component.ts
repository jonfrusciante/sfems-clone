import { Component, Input, OnChanges, SimpleChange } from '@angular/core';
import { MaterializeDirective } from "angular2-materialize";
import { Container } from '../container';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { BookingForm } from '../booking-form';
import { CrewList } from '../crew-list';
import { CrewTable} from '../crew-table';
import { Card } from '../card';
import { TopNav } from '../top-nav';
import { Footer } from '../footer';

@Component({
  selector: 'kn-book-a-crew',
  templateUrl: 'book-a-crew.component.html',
  directives: [TopNav, Footer, MaterializeDirective, BookingForm, CrewList, CrewTable, Container, Card],
  styles: [``]
})
export class BookACrew {
  people: FirebaseListObservable<any[]>;
  selectedDate: Date = new Date();
  day: number = 1;

  constructor(private af: AngularFire) {
  }

  ngOnInit() {
    this.people = this.af.database.list('/people');  
  }

  getDay(date: string): void {
    if (date) {
        this.day = new Date(date).getDay();
    }
  }

}
