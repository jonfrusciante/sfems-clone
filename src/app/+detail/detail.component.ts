import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Container } from '../container';

@Component({
  selector: 'detail',
  directives: [
    ...ROUTER_DIRECTIVES,
    Container
  ],
  template: `
    <router-outlet></router-outlet>
  `
})
export class Detail {
  constructor() {

  }

  ngOnInit() {
    console.log('hello `Detail` component');
  }

}
