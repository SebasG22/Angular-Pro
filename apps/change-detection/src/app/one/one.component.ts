import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'angpro-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OneComponent implements OnInit {

  @Input() public user: any;

  ngOnInit() {
  }

  update() {
    this.user.name = 'Matt Skiba';
  }

}
