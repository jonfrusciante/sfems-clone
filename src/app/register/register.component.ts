import { Component } from '@angular/core';
import { MaterializeDirective, toast } from "angular2-materialize";
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { CORE_DIRECTIVES, FORM_DIRECTIVES, ControlGroup, FormBuilder, Validators, AbstractControl } from '@angular/common';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

@Component({
  selector: 'register',
  templateUrl: 'register.component.html',
  directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES, MaterializeDirective],
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
export class Register {
  email: string = '';
  password: string = '';

  constructor(public af: AngularFire, private router: Router) { }

  ngOnInit() { 
  }

  register() {
    this.af.auth.createUser({ email: this.email, password: this.password })
      .catch(error => {
        console.log('ERROR @ AuthService#signIn() :', error);
        toast(error, 4000);        
      })
      .then((result) => {
        if (result) {
          console.log(result);
          this.router.navigateByUrl('/home');
          toast('Welcome ' + result.auth.email, 4000);   
        }
      });
  }

}
