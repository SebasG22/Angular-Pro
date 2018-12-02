import { Component, EventEmitter, Input, Output, OnChanges } from '@angular/core';

@Component({
  selector: 'angpro-schedule-calendar',
  templateUrl: './schedule-calendar.component.html',
  styleUrls: ['./schedule-calendar.component.scss']
})
export class ScheduleCalendarComponent implements OnChanges {

  @Input() set date(date: Date) {
    this.selectedDay = new Date(date.getTime())
  };

  @Output() change = new EventEmitter<Date>();

  selectedDayIndex: number;
  selectedDay: Date;
  selectedWeek: Date;

  constructor() { }

  ngOnChanges() {
    this.selectedDayIndex = this.getToday(this.selectedDay);
    this.selectedWeek = this.getStartOfWeek(new Date(this.selectedDay));
  }

  selectDay(index: number) {
    const selectedDay = new Date(this.selectedWeek);
    this.selectedDay.setDate(selectedDay.getDate() + index);
    this.change.emit(this.selectDay);
  }

  onChange(weekOffset: number) {
    const startOfWeek = this.getStartOfWeek(new Date());

    const startDate = (
      new Date(startOfWeek.getFullYear(), startOfWeek.getMonth(), startOfWeek.getDate())
    )

    startDate.setDate(startDate.getDate() + (weekOffset) * 7);
    this.change.emit(startDate);
  }

  private getToday(date: Date) {
    let today = date.getDay() - 1;
    if (today < 0) {
      today = 6;
    }
    return today;
  }

  private getStartOfWeek(date: Date) {
    const day = date.getDay();
    const diff = date.getDay() - day + (day === 0 ? -6 : 1);
    return new Date(date.setDate(diff));
  }



}
