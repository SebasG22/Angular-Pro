import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';

import { AuthService } from '../auth/shared/services/index';
import { IUser } from '../auth/shared/models/index';
import { takeUntil } from 'rxjs/operators';
import { Store } from '../../store';

@Component({
  selector: 'angpro-root',
  template: `
  <div>
  <angpro-app-header 
  [user]="user$ | async"
  (logout)="onLogout()"></angpro-app-header>
  <angpro-app-nav
  *ngIf="(user$ | async)?.authenticated">
  </angpro-app-nav>
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
    private store: Store,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.auth$.pipe(
      takeUntil(this.destroy$)
    ).subscribe();

    this.user$ = this.store.select<IUser>('user');
  }

  public async onLogout() {
    await this.authService.logoutUser();
    this.router.navigate(['/auth/login']);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    // Now let's also unsubscribe from the subject itself:
    this.destroy$.unsubscribe();
  }
}
