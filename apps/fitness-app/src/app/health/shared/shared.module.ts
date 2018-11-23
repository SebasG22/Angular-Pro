import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MealsService } from './services/meals/meals.service';

//third-party modules
import { AngularFirestoreModule } from '@angular/fire/firestore';

@NgModule({
    declarations: [

    ],
    imports: [ 
        AngularFirestoreModule,
        CommonModule,
        RouterModule
     ],
    exports: [],
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [MealsService]
        }
    }
}