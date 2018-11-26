import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormArrayName, FormArray, FormControl } from '@angular/forms';
import { IMeal } from '../../../shared/models';

@Component({
  selector: 'angpro-meal-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './meal-form-component.component.html',
  styleUrls: ['./meal-form-component.component.scss']
})
export class MealFormComponent {

  @Output() public create: EventEmitter<IMeal> = new EventEmitter<IMeal>();;

  constructor(
    private fb: FormBuilder
  ) { }

  public form = this.fb.group({
    name: ['', Validators.required],
    ingredients: this.fb.array([''])
  });

  public createMeal(){
    if(this.form.valid){
      this.create.emit(this.form.value);
    }
    console.log(this.form.value);
  }

  public addIngredient(){
    this.ingredients.push(new FormControl(''));
  }

  public get ingredients(){
    return this.form.get('ingredients') as FormArray;
  }

  public get required(){
    return (
      this.form.get('name').hasError('required') &&
      this.form.get('name').touched
    )
  }

  public removeIngredient(i: number) {
    this.ingredients.removeAt(i);
  }



}
