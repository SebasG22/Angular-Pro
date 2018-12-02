import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { ScheduleService } from '../../../shared/services/schedule/schedule.service';
import { Store } from '../../../../../store';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'angpro-app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit, OnDestroy {

  public destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private scheduleService: ScheduleService,
    private store: Store
  ) { }

  date$: Observable<Date>;

  ngOnInit() {
    this.date$ = this.store.select('date');

    this.scheduleService.schedule$.pipe(takeUntil(this.destroy$)).subscribe();
  }

  changeDate(date: Date) {
    console.log(date);
    this.scheduleService.updateDate(date);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    // Now let's also unsubscribe from the subject itself:
    this.destroy$.unsubscribe();
  }

}
