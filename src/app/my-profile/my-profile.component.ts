import { Component } from '@angular/core';
import { ActivatedRoute, ROUTER_DIRECTIVES, Router } from '@angular/router';
import { Container } from '../container';
import { MaterializeDirective } from "angular2-materialize";
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

@Component({
  selector: 'my-profile',
  styles: [`
  `],
  directives: [Container],
  templateUrl: 'my-profile.component.html'
})
export class MyProfile {
  me: any;

  constructor(public af: AngularFire, private router: Router) {
  }

  ngOnInit() {
    this.af.auth.subscribe(auth => {
      this.af.database.object('/users/' + auth.uid)
        .subscribe((me) => {
          this.me = me;
        });
    });
  }

}
