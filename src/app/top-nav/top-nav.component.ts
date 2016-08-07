import { Component, ViewEncapsulation } from '@angular/core';
import {MaterializeDirective} from "angular2-materialize";

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

}