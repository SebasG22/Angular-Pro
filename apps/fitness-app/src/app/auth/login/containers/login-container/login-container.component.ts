import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../../shared/services';

@Component({
  selector: 'angpro-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.scss']
})
export class LoginContainerComponent {

  public error: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  public async loginUser(event: FormGroup) {
    const { email, password } = event.value;
    try {
      await this.authService.loginUser(email, password);
      this.router.navigate(['']);
    }
    catch (e) {
      this.error = e.message;
    }
  }
}
