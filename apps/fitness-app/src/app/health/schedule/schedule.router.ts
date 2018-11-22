import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ScheduleComponent } from './containers/schedule/schedule.component';

const routes: Routes = [
    { path: '', component: ScheduleComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ScheduleRoutingModule {}
