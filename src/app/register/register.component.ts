import { Component } from '@angular/core';
import { MaterializeDirective, toast } from "angular2-materialize";
import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable } from 'angularfire2';
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
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  users: FirebaseListObservable<any[]>;

  constructor(public af: AngularFire, private router: Router) { }

  ngOnInit() {
  }

  register() {
    console.log('Rergister');
    this.af.auth.createUser({ email: this.email, password: this.password });
      // .catch(error => {
      //   console.log('ERROR @ AuthService#signIn() :', error);
      //   toast(error, 4000);
      // })
      // .then((result) => {
      //   if (result) {
      //     this.router.navigateByUrl('/home');
      //     // this.addUserInfo(result);
      //   }
      // });
  }

  addUserInfo(result: any) {
    this.af.database.object('/users/' + result.uid).set({
      firstName: this.firstName,
      lastName: this.lastName
    })
      .catch(error => {
        console.log('ERROR @ AddUserInfo#register() :', error);
        toast(error, 4000);
      })
      .then((result) => {
        if (result) {
          this.router.navigateByUrl('/home');
          toast('Welcome ' + this.firstName, 4000);
        }
      });
  }

}
