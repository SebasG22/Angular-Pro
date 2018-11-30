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
      const value = this.meal;
      this.form.patchValue(value);
    }
  }

  public createMeal() {
    if (this.form.valid) {
      this.create.emit(this.form.value);
    }
    console.log(this.form.value);
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
