import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NxModule } from '@nrwl/nx';

import { AppComponent } from './app.component';
import { AuthRoutingModule } from './auth/auth.router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AuthRoutingModule,
    BrowserModule,
    NxModule.forRoot(),
    RouterModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
