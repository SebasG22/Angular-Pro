import { Component, Output, ViewChild, ViewChildren, AfterViewInit, EventEmitter, ContentChild, ContentChildren, QueryList, AfterContentInit, ChangeDetectorRef, ElementRef, Renderer2 } from '@angular/core';

import { AuthRememberComponent } from './auth.remember.component';
import { AuthMessageComponent } from './auth-message.component';

import { User } from './auth-form.interface';

@Component({
  selector: 'angpro-auth-form',
  templateUrl: './auth-form.component.html',
  styles: [`
  .email{
    border-color: #9f72e6
  }`]
})
export class AuthFormComponent implements AfterContentInit, AfterViewInit {

  showMessage: boolean;

  // Only one component
  // @ContentChild(AuthRememberComponent) remember: AuthRememberComponent;

  // Multiple component
  @ContentChildren(AuthRememberComponent) remember: QueryList<AuthRememberComponent>;

  // @ViewChild(AuthMessageComponent) message: AuthMessageComponent;

  @ViewChild('email') email: ElementRef;

  @ViewChildren(AuthMessageComponent) message: QueryList<AuthMessageComponent>;

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  constructor(
    private cd: ChangeDetectorRef,
    private render: Renderer2
  ) {

  }
  onSubmit(value: User) {
    this.submitted.emit(value);
  }

  ngAfterContentInit() {
    // if (this.message) {
    //   this.message.days = 30;
    // }
    if (this.remember) {
      this.remember.forEach((item) => {
        item.checked.subscribe((value: boolean) => {
          this.showMessage = value;
        })
      })
    }
  }

  ngAfterViewInit() {
    /* 
     ViewChildren only works here on afterViewInit
     ViewChild works from afterContentInit
   */
    if (this.message) {
      // setTimeout(() => {
      this.message.forEach((item) => {
        item.days = 30;
        // })
        this.cd.detectChanges();
      })
    }
    console.log(this.message);

    // this.email.nativeElement.setAttribute('placeholder', 'Enter your email address');
    // this.email.nativeElement.classList.add('email');
    // this.email.nativeElement.focus();

    // This is better to use on environments that doesn't have access to the DOM
    this.render.setAttribute(this.email.nativeElement, 'placeholder', 'Enter your email address');
    this.render.setAttribute(this.email.nativeElement, 'class', 'email');
    this.render.selectRootElement("input[type='email']").focus();
  }

}
