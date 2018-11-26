import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'angpro-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  
  @Input() public item: any;

  constructor() { }
  
  
  ngOnInit() {
  }

}
