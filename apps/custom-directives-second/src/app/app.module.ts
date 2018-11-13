import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { MyForDirective } from './my-for/my-for.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    MyForDirective
  ],
  imports: [
    BrowserModule,
    CommonModule,
    NxModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
