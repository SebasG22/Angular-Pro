import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'angpro-register-container',
  templateUrl: './register-container.component.html',
  styleUrls: ['./register-container.component.scss']
})
export class RegisterContainerComponent {

  constructor() { }

  public registerUser(event: FormGroup) {
    console.log(event.value);
  }
}
