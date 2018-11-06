import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, AfterContentInit } from '@angular/core';

import { AuthFormComponent } from '../app/auth-form/auth-form.component';
import { User } from './auth-form/auth-form.interface';

@Component({
  selector: 'angpro-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentInit {

  @ViewChild('entry', { read: ViewContainerRef }) entry: ViewContainerRef;

  constructor(
    private resolver: ComponentFactoryResolver
  ){}

  ngAfterContentInit(){
    const authFormFactory = this.resolver.resolveComponentFactory(AuthFormComponent);
    const component = this.entry.createComponent(authFormFactory);
    // To modify a property use the instance, there's not @Input on dynamic components
    component.instance.title = 'Create account';
  }

  loginUser(user: User) {
    console.log('Login', user);
  }


}
