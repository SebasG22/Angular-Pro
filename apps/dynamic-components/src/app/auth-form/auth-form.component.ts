import { Component, Output, EventEmitter } from '@angular/core';

import { User } from './auth-form.interface';

@Component({
  selector: 'angpro-auth-form',
  templateUrl: './auth-form.component.html',
  styles: [`
  .email{
    border-color: #9f72e6
  }`]
})
export class AuthFormComponent {

  title = 'Login';

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  constructor() {

  }
  onSubmit(value: User) {
    this.submitted.emit(value);
  }

}
