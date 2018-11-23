import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NxModule } from '@nrwl/nx';

import { AppComponent } from './containers/app.component';
import { AuthRoutingModule } from '../auth/auth.router';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppNavComponent } from './components/app-nav/app-nav.component';
import { Store } from '../../store';
import { HealthRoutingModule } from '../health/healt.module';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'schedule' }
]
@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppNavComponent
  ],
  imports: [
    AuthRoutingModule,
    HealthRoutingModule,
    BrowserModule,
    NxModule.forRoot(),
    RouterModule.forRoot(routes),
  ],
  providers: [
    Store
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
