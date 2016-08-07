import { Component } from '@angular/core';
import {MaterializeDirective} from "angular2-materialize";

@Component({
  selector: 'login',
  templateUrl: 'login.component.html',
  directives: [MaterializeDirective],
  styles: [`
  .page-flexbox-wrapper {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  main {
    flex: 1 1 auto;
  }
  `]
})
export class Login {

}
