import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IMeal } from '../../../shared/models/index';

import { MealsService } from '../../../shared/services/index';


@Component({
  selector: 'angpro-app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss']
})
export class MealComponent implements OnInit {

  constructor(
    private mealsService: MealsService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  public async addMeal(event: IMeal){
    console.log('hey');
      await this.mealsService.addMeal(event);
      this.backToMeals();
  }

  public backToMeals(){
    this.router.navigate(['meals']);
  }
}
