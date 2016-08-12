import { Component } from '@angular/core';
import { MaterializeDirective } from "angular2-materialize";
import { Container } from '../container';
import { Person } from '../models/person.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'kn-crew-list',
  templateUrl: 'crew-list.component.html',
  directives: [MaterializeDirective, Container],
  styles: [`
    .collapsible .collection {
        margin: 0;
        border: none;
        margin-bottom: -5px;
    }
    .collection .collection-item {
        padding-top: 20px;
    }
  `]
})
export class CrewList {
  person: Person;
  people: FirebaseListObservable<Person[]>;

  constructor(private af: AngularFire) {
  }

  ngOnInit() {
    this.people = this.af.database.list('/people');   
    console.log(this.people); 
  }

}
