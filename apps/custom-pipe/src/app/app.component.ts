import { Component, OnInit } from '@angular/core';
import { FileSizePipe } from './filesize.pipe';

@Component({
  selector: 'angpro-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ FileSizePipe ]
})
export class AppComponent implements OnInit{

  public files: IFile[];
  public mapped: IFileMapped[];

  constructor(
    private fileSizePipe: FileSizePipe
  ) {}

  ngOnInit(): void {
    this.files = [
      { name: 'logo.svg', size: 212019, type: 'image/svg'},
      { name: 'banner.jpg', size: 18029, type: 'image/svg'},
      { name: 'background.png', size: 1784562, type: 'image/png'}
    ]
    
    this.mapped = this.files.map(file => {
      return {
        ...file,
        size: this.fileSizePipe.transform(file.size)
      }
    });
  }
}
