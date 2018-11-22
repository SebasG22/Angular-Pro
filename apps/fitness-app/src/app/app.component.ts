import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription, Subject } from 'rxjs';

import { AuthService } from './auth/shared/services/index';
import { IUser } from './auth/shared/models/index';
import { takeUntil } from 'rxjs/operators';
import { Store } from '../store';

@Component({
  selector: 'angpro-root',
  template: `
  <div>
  <h1> {{ user$ | async | json }}</h1>
    <div class="wrapper">
      <router-outlet></router-outlet>
    </div>
  </div>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  public destroy$: Subject<boolean> = new Subject<boolean>();

  public user$: Observable<IUser>;

  constructor(
    private authService: AuthService,
    private store: Store
  ) { }

  ngOnInit() {
    this.authService.auth$.pipe(
      takeUntil(this.destroy$)
    ).subscribe();

    this.user$ = this.store.select<IUser>('user');
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    // Now let's also unsubscribe from the subject itself:
    this.destroy$.unsubscribe();
  }
}
