import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subject, Observable } from 'rxjs';

import { MealsService } from '../../../shared/services/index';
import { IMeal } from '@fitnessapp/src/health/shared/models';
import { takeUntil, tap } from 'rxjs/operators';
import { Store } from '../../../../../store';

@Component({
  selector: 'angpro-app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.scss']
})

export class MealsComponent implements OnInit, OnDestroy {

  public destroy$: Subject<boolean> = new Subject<boolean>();

  public meals$ : Observable<IMeal[]>;

  constructor(
    private store: Store,
    private mealsService: MealsService
  ) { }

  ngOnInit() {
    this.meals$ = this.store.select<IMeal[]>('meals');
    this.mealsService.meals$.pipe(
      takeUntil(this.destroy$)
    ).subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    // Now let's also unsubscribe from the subject itself:
    this.destroy$.unsubscribe();
  }

}
