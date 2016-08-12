import { Component } from '@angular/core';
import { MaterializeDirective } from "angular2-materialize";
import { Container } from '../container';
import { Person } from '../models/person.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'kn-crew-table',
  templateUrl: 'crew-table.component.html',
  directives: [MaterializeDirective, Container],
  styles: [``]
})
export class CrewTable {
  person: Person;
  people: FirebaseListObservable<Person[]>;

  constructor(private af: AngularFire) {
  }

  ngOnInit() {
    this.people = this.af.database.list('/people');   
    console.log(this.people); 
  }

}
