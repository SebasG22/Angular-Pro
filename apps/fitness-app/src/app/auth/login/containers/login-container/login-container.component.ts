import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'angpro-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.scss']
})
export class LoginContainerComponent {

  constructor() { }

  public loginUser(event: FormGroup) {
    console.log(event.value);
  }
}
