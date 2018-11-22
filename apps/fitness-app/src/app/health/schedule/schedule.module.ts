import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleComponent } from './containers/schedule/schedule.component';
import { ScheduleRoutingModule } from './schedule.router';

@NgModule({
    declarations: [
        ScheduleComponent
    ],
    imports: [ 
        CommonModule,
        ScheduleRoutingModule
     ],
    exports: [],
    providers: [],
})
export class ScheduleModule {}