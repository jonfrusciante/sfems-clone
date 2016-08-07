import { Component } from '@angular/core';
import {MaterializeDirective} from "angular2-materialize";

@Component({
  selector: 'login',
  template: `
    <div>
      <h1>Login</h1>

      <ul materialize="collapsible" class="collapsible" data-collapsible="accordion">
          <li>
            <div class="collapsible-header"><i class="material-icons">filter_drama</i>First</div>
            <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
          </li>
          <li>
            <div class="collapsible-header"><i class="material-icons">place</i>Second</div>
            <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
          </li>
          <li>
            <div class="collapsible-header"><i class="material-icons">whatshot</i>Third</div>
            <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
          </li>
      </ul>


    </div>
  `,
  directives: [MaterializeDirective]
})
export class Login {

}