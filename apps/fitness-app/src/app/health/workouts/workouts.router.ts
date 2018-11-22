import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { WorkoutsComponent } from './containers/workouts/workouts.component';

const routes: Routes = [
    { path: '', component: WorkoutsComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WorkoutsRoutingModule {}
