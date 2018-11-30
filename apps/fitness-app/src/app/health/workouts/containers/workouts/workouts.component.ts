import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { IWorkout } from '../../../shared/models';
import { Store } from '../../../../../store';
import { WorkoutsService } from '../../../shared/services/workouts/workouts.service';
import { takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'angpro-app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.scss']
})
export class WorkoutsComponent implements OnInit, OnDestroy {

  public destroy$: Subject<boolean> = new Subject<boolean>();

  public workouts$: Observable<IWorkout[]>;

  constructor(
    private store: Store,
    private workoutsService: WorkoutsService
  ) { }

  ngOnInit() {
    this.workouts$ = this.store.select<IWorkout[]>('workouts');
    this.workoutsService.workouts$.pipe(
      takeUntil(this.destroy$)
    ).subscribe();
  }

  public removeWorkout(event: IWorkout) {
    this.workoutsService.removeWorkout(event.uid);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    // Now let's also unsubscribe from the subject itself:
    this.destroy$.unsubscribe();
  }

}
