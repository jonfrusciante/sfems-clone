import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Container } from '../container';

/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`My Profile` component loaded asynchronously');

@Component({
  selector: 'my-profile',
  styles: [`
  `],
  directives: [Container],
  template: `
  <container>
    <h1>My Profile</h1>
    </container>
  `
})
export class MyProfile {
  localState;
  constructor(public route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route
      .data
      .subscribe((data: any) => {
        // your resolved data from route
        this.localState = data.yourData;
      });

    console.log('hello `My Profile` component');
  }

}
