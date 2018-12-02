import { Component, OnInit, Input, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'angpro-list-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {

  @Input() public item: any;

  @Output() public remove: EventEmitter<any> = new EventEmitter<any>();

  public toggled = false;

  constructor() { }

  public getRoute(item: any) {
    return [`../${item.ingredients ? 'meals' : 'workouts'}`, item.uid]
  }


  public toggle() {
    this.toggled = !this.toggled;
  }

  public removeItem() {
    this.remove.emit(this.item);
  }


}
