import { Component, ViewEncapsulation } from '@angular/core';
import { TopNav } from '../top-nav';
import { Footer } from '../footer';

@Component({
  selector: 'container',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './container.style.css'
  ],
  directives: [TopNav, Footer],
  templateUrl: './container.component.html'
})
export class Container {

}