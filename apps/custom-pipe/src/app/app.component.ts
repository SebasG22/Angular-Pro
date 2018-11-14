import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'angpro-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public files: IFile[];

  ngOnInit(): void {
    this.files = [
      { name: 'logo.svg', size: 212019, type: 'image/svg'},
      { name: 'banner.jpg', size: 18029, type: 'image/svg'},
      { name: 'background.png', size: 1784562, type: 'image/png'}
    ]
  }
}
