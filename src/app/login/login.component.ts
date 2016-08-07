import { Component } from '@angular/core';
import {MaterializeDirective} from "angular2-materialize";

@Component({
  selector: 'login',
  template: `
    <div>
      <h1>Login</h1>
    </div>
  `,
  directives: [MaterializeDirective]
})
export class Login {

}
