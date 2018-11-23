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

    public meals$: Observable<IMeal[]> = this.db.collection<IMeal>(`meals`).doc<[]>(`${this.uid}`).valueChanges()
    .pipe(
        map((next) =>  (next) ? next : []),
        tap((next) => this.store.set('meals',next))
    );


    get uid(){
        return this.authService.user.uid;
    }
}