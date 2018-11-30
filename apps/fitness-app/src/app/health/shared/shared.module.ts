import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MealsService } from './services/meals/meals.service';

//third-party modules
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ListItemComponent } from './components/list-item/list-item.component';
import { WorkoutsService } from './services/workouts/workouts.service';

@NgModule({
    declarations: [
        ListItemComponent
    ],
    imports: [ 
        AngularFirestoreModule,
        CommonModule,
        RouterModule
     ],
    exports: [
        ListItemComponent
    ],
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [MealsService, WorkoutsService]
        }
    }
}