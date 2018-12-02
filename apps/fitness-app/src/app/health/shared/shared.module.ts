import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//third-party modules
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ListItemComponent } from './components/list-item/list-item.component';

// services
import { MealsService } from './services/meals/meals.service';
import { ScheduleService } from './services/schedule/schedule.service';
import { WorkoutsService } from './services/workouts/workouts.service';

//pipes
import { JoinPipe } from './pipes/join.pipe';
import { WorkoutPipe } from './pipes/workout.pipe';

@NgModule({
    declarations: [
        ListItemComponent,
        JoinPipe,
        WorkoutPipe
    ],
    imports: [
        AngularFirestoreModule,
        CommonModule,
        RouterModule
    ],
    exports: [
        ListItemComponent,
        JoinPipe,
        WorkoutPipe
    ],
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [MealsService, WorkoutsService, ScheduleService]
        }
    }
}