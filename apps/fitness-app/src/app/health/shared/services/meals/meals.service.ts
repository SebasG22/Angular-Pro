import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { tap, map, filter } from 'rxjs/operators';

import { Store } from '../../../../../store';

import { AuthService } from '../../../../auth/shared/services';
import { IMeal } from '../../models';

@Injectable()
export class MealsService {

    constructor(
        private store: Store,
        private db: AngularFirestore,
        private authService: AuthService
    ) { }

    public meals$: Observable<any[]> = this.db.collection(`health`).doc(`meals`).collection<IMeal[]>(`${this.uid}`).valueChanges()
        .pipe(
            map((next) => (next) ? next : []),
            tap((next) => this.store.set('meals', next))
        );


    public get uid() {
        return this.authService.user.uid;
    }

    public getMeal(uid: string) {
        if (!uid) {
            return of({})
        }
        return this.store.select<IMeal[]>('meals')
            .pipe(
                filter(Boolean),
                map((meals: IMeal[]) => meals.find((meal: IMeal) => meal.uid === uid))
            )
    }

    public addMeal(meal: IMeal) {
        const uid = this.db.createId();
        return this.db.collection(`health`).doc(`meals`).collection(`${this.uid}`).doc(uid).set({
            uid,
            ...meal
        });
    }

    public updateMeal(uid: string, meal: IMeal) {
        return this.db.collection(`health`).doc(`meals`).collection(`${this.uid}`).doc(uid).update({
            uid,
            ...meal
        });
    }

    public removeMeal(uid: string) {
        return this.db.collection(`health`).doc(`meals`).collection(`${this.uid}`).doc(uid).delete();
    }

}