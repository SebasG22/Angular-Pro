import { Component, OnInit, DoCheck, NgZone, ChangeDetectorRef, ApplicationRef } from '@angular/core';

@Component({
  selector: 'angpro-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, DoCheck {

  constructor(
    private ngZone: NgZone,
    private applicationRef: ApplicationRef,
    private cd: ChangeDetectorRef
  ) { }

  public counter = 0;
  public isOpened = false;
  ngOnInit(): void {
    this.ngZone.runOutsideAngular(() => {
      for (let i = 0; i < 100; i++) {
        setTimeout(() => {
          this.counter++
        }, 40000);
      }
    });
    this.ngZone.onMicrotaskEmpty.subscribe(() => {
      console.log('Not tasks');
      this.ngZone.run(() => {
        this.applicationRef.tick();
        // this.cd.detectChanges();
      });
    });

    // this.ngZone.run(() => {
    //   setTimeout(() => this.counter = this.counter, 1000);
    // })
  }

  ngDoCheck() {
    console.warn('Change detection running');
  }

  public change() {
    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        this.isOpened = !this.isOpened;
        console.log(`%c Is it angular zone ${NgZone.isInAngularZone()}`, 'background: orange; color: black');
        console.log(`%c Is it open ${this.isOpened}`, 'background: orange; color: black');
        // this.cd.detectChanges();
      }, 2000);
    });

    // this.ngZone.run(() => {
    //   setTimeout(() => {
    //     this.isOpened = this.isOpened;
    //     console.log(`%c RETURNING Is it angular zone ${NgZone.isInAngularZone()}`, 'background: green; color: white');
    //     console.log(`%c RETURNING Is it open ${this.isOpened}`, 'background: green; color: white');
    //   }, 1000);
    // });


  }

}
