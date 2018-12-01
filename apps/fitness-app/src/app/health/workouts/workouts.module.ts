import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutsComponent } from './containers/workouts/workouts.component';
import { WorkoutsRoutingModule } from './workouts.router';
import { WorkoutComponent } from './containers/workout/workout.component';
import { WorkoutFormComponent } from './components/workout-form/workout-form.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { WorkoutTypeComponent } from './components/workout-type/workout-type.component';

@NgModule({
    declarations: [
        WorkoutsComponent,
        WorkoutComponent,
        WorkoutFormComponent,
        WorkoutTypeComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        WorkoutsRoutingModule,
        SharedModule
    ],
})
export class WorkoutsModule { }