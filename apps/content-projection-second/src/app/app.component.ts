import { Component } from '@angular/core';
import { User } from './auth-form/auth-form.interface';

@Component({
  selector: 'angpro-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private rememberMe = false;

  createUser(user: User) {
    console.log('Create account', user);
  }

  loginUser(user: User) {
    console.log('Login', user, this.rememberMe);
  }

  rememberChange(evt) {
    this.rememberMe = evt;
  }

}
