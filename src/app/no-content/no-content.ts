import { Component } from '@angular/core';
import { Container } from '../container';

@Component({
  selector: 'no-content',
  directives: [
    Container
  ],
  template: `
    <container>
      <h1>404: page missing</h1>
    </container>
  `
})
export class NoContent {

}
