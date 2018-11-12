import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'angpro-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class TwoComponent implements OnInit {

  @Input() public user: any;

  ngOnInit() {
  }

  update() {
    this.user.name = 'Matt Skiba';
  }

}
