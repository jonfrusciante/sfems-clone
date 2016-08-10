import { Component } from '@angular/core';
import { MaterializeDirective } from "angular2-materialize";
import { Container } from '../container';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { BookingForm } from '../booking-form';
import { CrewList } from '../crew-list';

@Component({
  selector: 'kn-book-a-crew',
  templateUrl: 'book-a-crew.component.html',
  directives: [MaterializeDirective, BookingForm, CrewList, Container],
  styles: [``]
})
export class BookACrew {
  form: ControlGroup;
  people: FirebaseListObservable<any[]>;

  constructor(private af: AngularFire) {
  }

  ngOnInit() {
    this.people = this.af.database.list('/people');   
  }

}
