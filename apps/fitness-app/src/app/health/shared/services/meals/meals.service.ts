import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

import { Store } from '../../../../../store';

import { AuthService } from '../../../../auth/shared/services';
import { IMeal } from '../../models';

@Injectable()
export class MealsService {

    constructor(
        private store: Store,
        private db: AngularFirestore,
        private authService: AuthService
    ){}

    public meals$: Observable<any[]> = this.db.collection(`health`).doc(`meals`).collection<IMeal[]>(`${this.uid}`).valueChanges()
    .pipe(
        map((next) =>  (next) ? next : []),
        tap((next) => this.store.set('meals',next))
    );


    public get uid(){
        return this.authService.user.uid;
    }

    public addMeal(meal: IMeal){
        const uid = this.db.createId();
        return this.db.collection(`health`).doc(`meals`).collection(`${this.uid}`).add(meal);
    }

    
}