import { Component, Output, EventEmitter, ContentChild, AfterContentInit } from '@angular/core';
import { AuthRememberComponent } from './auth.remember.component';

import { User } from './auth-form.interface';

@Component({
  selector: 'angpro-auth-form',
  templateUrl: './auth-form.component.html'
})
export class AuthFormComponent implements AfterContentInit {

  showMessage: boolean;

  @ContentChild(AuthRememberComponent) remember: AuthRememberComponent;

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  onSubmit(value: User) {
    this.submitted.emit(value);
  }

  ngAfterContentInit() {
    if (this.remember) {
      this.remember.checked.subscribe((value: boolean) => {
        this.showMessage = value;
      })
    }
  }

}
