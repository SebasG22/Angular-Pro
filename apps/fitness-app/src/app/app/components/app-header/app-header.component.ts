import { Component, Output, EventEmitter, Input, ChangeDetectionStrategy } from '@angular/core';
import { IUser } from '../../../auth/shared/models/index';

@Component({
  selector: 'angpro-app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent {

  @Input() public user: IUser;

  @Output() public logout = new EventEmitter<any>();
  constructor(
  ) { }

  public logoutUser() {
    this.logout.emit();
  }

}
