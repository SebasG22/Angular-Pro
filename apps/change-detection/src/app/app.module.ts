import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';

@NgModule({
    declarations: [
        AppComponent,
        OneComponent,
        TwoComponent
    ],
    imports: [
        BrowserModule,
        NxModule.forRoot()
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
