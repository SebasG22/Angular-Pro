import { Component, OnInit } from '@angular/core';

import { IMeal } from '../../../shared/models/index';
@Component({
  selector: 'angpro-app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss']
})
export class MealComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addMeal(event: IMeal){
      console.log(event);
  }

}
