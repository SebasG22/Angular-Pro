import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MealsComponent } from './containers/meals/meals.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MealsRoutingModule } from './meals.router';

import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        MealsComponent
    ],
    imports: [
         CommonModule,
         ReactiveFormsModule,
         MealsRoutingModule,
         SharedModule
         ],
})
export class MealsModule {}