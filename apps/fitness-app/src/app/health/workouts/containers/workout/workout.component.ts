import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WorkoutsService } from '../../../shared/services/workouts/workouts.service';
import { Subject, Observable } from 'rxjs';
import { IWorkout } from '../../../shared/models';
import { takeUntil, switchMap } from 'rxjs/operators';

@Component({
  selector: 'angpro-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss']
})
export class WorkoutComponent implements OnInit, OnDestroy {

  constructor(
    private workoutsService: WorkoutsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  public destroy$: Subject<boolean> = new Subject<boolean>();

  public workout$: Observable<IWorkout | {}>;

  ngOnInit() {

    this.workoutsService.workouts$.pipe(
      takeUntil(this.destroy$)
    ).subscribe();


    this.workout$ = this.route.params.pipe(
      switchMap((param) => this.workoutsService.getWorkout(param.id))
    )
  }

  public async addWorkout(event: IWorkout) {
    await this.workoutsService.addWorkouts(event);
    this.backToWorkouts();
  }

  public async updateWorkout(event: IWorkout) {
    await this.workoutsService.updateWorkout(this.route.snapshot.params.id, event);
    this.backToWorkouts();
  }

  public async removeWorkout(event: IWorkout) {
    await this.workoutsService.removeWorkout(this.route.snapshot.params.id);
    this.backToWorkouts();
  }

  public backToWorkouts() {
    this.router.navigate(['workouts']);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    // Now let's also unsubscribe from the subject itself:
    this.destroy$.unsubscribe();
  }

}
