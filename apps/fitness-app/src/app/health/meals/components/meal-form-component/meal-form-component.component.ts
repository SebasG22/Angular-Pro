import { Component, OnChanges, ChangeDetectionStrategy, Output, EventEmitter, Input, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators, FormArrayName, FormArray, FormControl } from '@angular/forms';
import { IMeal } from '../../../shared/models';

@Component({
  selector: 'angpro-meal-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './meal-form-component.component.html',
  styleUrls: ['./meal-form-component.component.scss']
})
export class MealFormComponent implements OnChanges {

  @Input() public meal: IMeal;

  @Output() public create: EventEmitter<IMeal> = new EventEmitter<IMeal>();

  @Output() public update: EventEmitter<IMeal> = new EventEmitter<IMeal>();;

  @Output() public remove: EventEmitter<IMeal> = new EventEmitter<IMeal>();;

  public toggled = false;

  public exists = false;

  constructor(
    private fb: FormBuilder
  ) { }

  public form = this.fb.group({
    name: ['', Validators.required],
    ingredients: this.fb.array([''])
  });

  ngOnChanges(changes: SimpleChanges) {
    if (this.meal && this.meal.name) {
      //existing
      this.exists = true;
      const value : IMeal = this.meal;
      this.form.patchValue(value);

      this.emptyIngredients();

      if(value.ingredients){
        for(const item of value.ingredients){
          this.ingredients.push(
            new FormControl(item)
          );
        }
      }
    }
  }

  public emptyIngredients(){
    while(this.ingredients.controls.length){
      this.ingredients.removeAt(0);
    }
  }

  public createMeal() {
    if (this.form.valid) {
      this.create.emit(this.form.value);
    }
  }

  public updateMeal() {
    if (this.form.valid) {
      this.update.emit(this.form.value);
    }
  }

  public removeMeal() {
      this.remove.emit(this.form.value);
  }

  public addIngredient() {
    this.ingredients.push(new FormControl(''));
  }

  public get ingredients() {
    return this.form.get('ingredients') as FormArray;
  }

  public get required() {
    return (
      this.form.get('name').hasError('required') &&
      this.form.get('name').touched
    )
  }

  public removeIngredient(i: number) {
    this.ingredients.removeAt(i);
  }

  public toggle() {
    this.toggled = !this.toggled;
  }

}
