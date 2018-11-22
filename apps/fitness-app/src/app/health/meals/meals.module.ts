import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MealsComponent } from './containers/meals/meals.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MealsRoutingModule } from './meals.router';

@NgModule({
    declarations: [
        MealsComponent
    ],
    imports: [
         CommonModule,
         ReactiveFormsModule,
         MealsRoutingModule
         ],
})
export class MealsModule {}