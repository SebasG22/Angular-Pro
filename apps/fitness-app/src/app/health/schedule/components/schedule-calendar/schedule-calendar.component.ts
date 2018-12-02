import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'angpro-schedule-calendar',
  templateUrl: './schedule-calendar.component.html',
  styleUrls: ['./schedule-calendar.component.scss']
})
export class ScheduleCalendarComponent {

  @Input() set date(date: Date) {
    this.selectedDay = new Date(date.getTime())
  };

  @Output() change = new EventEmitter<Date>();

  selectedDay: Date;

  constructor() { }

  onChange(weekOffset: number) {
    const startOfWeek = this.getStartOfWeek(new Date());

    const startDate = (
      new Date(startOfWeek.getFullYear(), startOfWeek.getMonth(), startOfWeek.getDate())
    )

    startDate.setDate(startDate.getDate() + (weekOffset) * 7);
    this.change.emit(startDate);
  }

  private getStartOfWeek(date: Date) {
    const day = date.getDay();
    const diff = date.getDay() - day + (day === 0 ? -6 : 1);
    return new Date(date.setDate(diff));
  }

}
