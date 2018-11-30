import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IWorkout } from '../../models';
import { AngularFirestore } from '@angular/fire/firestore';
import { map, tap, filter } from 'rxjs/operators';
import { Store } from '../../../../../store';
import { AuthService } from '../../../../auth/shared/services';

@Injectable()
export class WorkoutsService {

    public workouts$: Observable<any[]> = this.db.collection(`health`).doc(`workouts`).collection<IWorkout[]>(`${this.uid}`).valueChanges()
    .pipe(
        map((next) => (next) ? next : []),
        tap((next) => this.store.set('workouts', next))
    );

constructor(
    private store: Store,
    private db: AngularFirestore,
    private authService: AuthService
) { }

public get uid() {
    return this.authService.user.uid;
}

public getWorkout(uid: string) {
    if (!uid) {
        return of({})
    }
    return this.store.select<IWorkout[]>('workouts')
        .pipe(
            filter(Boolean),
            map((workouts: IWorkout[]) => workouts.find((workout: IWorkout) => workout.uid === uid))
        )
}

public addWorkouts(workout: IWorkout) {
    const uid = this.db.createId();
    return this.db.collection(`health`).doc(`workouts`).collection(`${this.uid}`).doc(uid).set({
        uid,
        ...workout
    });
}

public updateWorkout(uid: string, workout: IWorkout) {
    return this.db.collection(`health`).doc(`workouts`).collection(`${this.uid}`).doc(uid).update({
        uid,
        ...workout
    });
}

public removeWorkout(uid: string) {
    return this.db.collection(`health`).doc(`workouts`).collection(`${this.uid}`).doc(uid).delete();
}

}
