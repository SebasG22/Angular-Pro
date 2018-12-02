import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'angpro-schedule-controls',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './schedule-controls.component.html',
  styleUrls: ['./schedule-controls.component.scss']
})
export class ScheduleControlsComponent {

  @Input() selected: Date;

  offset = 0;

  constructor() { }

  @Output()
  move = new EventEmitter<number>();

  moveDate(offset: number) {
    this.offset = offset;
    this.move.emit(offset);
  }

}
