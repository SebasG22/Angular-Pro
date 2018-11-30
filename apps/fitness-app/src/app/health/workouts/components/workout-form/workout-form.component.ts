import { Component, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IWorkout } from '../../../shared/models';

@Component({
  selector: 'angpro-workout-form',
  templateUrl: './workout-form.component.html',
  styleUrls: ['./workout-form.component.scss']
})
export class WorkoutFormComponent implements OnChanges{

  @Input() public workout: IWorkout;

  @Output() public create: EventEmitter<IWorkout> = new EventEmitter<IWorkout>();

  @Output() public update: EventEmitter<IWorkout> = new EventEmitter<IWorkout>();;

  @Output() public remove: EventEmitter<IWorkout> = new EventEmitter<IWorkout>();;

  public toggled = false;

  public exists = false;

  constructor(
    private fb: FormBuilder
  ) { }

  public form = this.fb.group({
    name: ['', Validators.required],
  });

  ngOnChanges(changes: SimpleChanges) {
    if (this.workout && this.workout.name) {
      //existing
      this.exists = true;
      const value: IWorkout = this.workout;
      this.form.patchValue(value); 
  }
}

  public createWorkout() {
    if (this.form.valid) {
      this.create.emit(this.form.value);
    }
  }

  public updateWorkout() {
    if (this.form.valid) {
      this.update.emit(this.form.value);
    }
  }

  public removeWorkout() {
    this.remove.emit(this.form.value);
  }


  public get required() {
    return (
      this.form.get('name').hasError('required') &&
      this.form.get('name').touched
    )
  }

  public toggle() {
    this.toggled = !this.toggled;
  }

}
