import { Component, ViewEncapsulation } from '@angular/core';
import {MaterializeDirective} from "angular2-materialize";
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

@Component({
  selector: 'top-nav',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './top-nav.style.css'
  ],
  templateUrl: './top-nav.component.html',
  directives: [MaterializeDirective]
})
export class TopNav {
  selectedDate: Date = new Date();

  constructor(public af: AngularFire, private router: Router) {

  }

  logout() {
    this.af.auth.logout();
    this.router.navigateByUrl('/login');
  }
}