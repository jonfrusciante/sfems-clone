import { Component, ViewEncapsulation } from '@angular/core';
import { TopNav } from '../top-nav';
import { Footer } from '../footer';
import {MaterializeDirective} from "angular2-materialize";

@Component({
  selector: 'container',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './container.style.css'
  ],
  directives: [TopNav, Footer, MaterializeDirective],
  templateUrl: './container.component.html'
})
export class Container {

}