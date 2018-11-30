import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { IMeal } from '../../../shared/models/index';

import { MealsService } from '../../../shared/services/index';
import { Observable, Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';


@Component({
  selector: 'angpro-app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss']
})
export class MealComponent implements OnInit, OnDestroy {

  constructor(
    private mealsService: MealsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  public destroy$: Subject<boolean> = new Subject<boolean>();

  public meal$: Observable<IMeal | {}>;

  ngOnInit() {

    this.mealsService.meals$.pipe(
      takeUntil(this.destroy$)
    ).subscribe();


    this.meal$ = this.route.params.pipe(
      switchMap((param) => this.mealsService.getMeal(param.id))
    )
  }

  public async addMeal(event: IMeal) {
    await this.mealsService.addMeal(event);
    this.backToMeals();
  }

  public backToMeals() {
    this.router.navigate(['meals']);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    // Now let's also unsubscribe from the subject itself:
    this.destroy$.unsubscribe();
  }
}
