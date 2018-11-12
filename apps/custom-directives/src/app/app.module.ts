import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { CreditCardDirective } from './credit-card/credit-card.directive';

@NgModule({
  declarations: [
    AppComponent,
    CreditCardDirective
  ],
  imports: [BrowserModule, NxModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
