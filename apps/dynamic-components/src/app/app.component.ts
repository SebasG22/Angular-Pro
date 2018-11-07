import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, AfterContentInit, ComponentRef, TemplateRef } from '@angular/core';

import { AuthFormComponent } from '../app/auth-form/auth-form.component';
import { User } from './auth-form/auth-form.interface';

@Component({
  selector: 'angpro-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentInit {

  component: ComponentRef<AuthFormComponent>;

  constructor(
  ) { }

  ngAfterContentInit() {
   
  }

  loginUser(user: User) {
    console.log('Login', user);
  }


}
