import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { tap } from 'rxjs/operators';

import { Store } from '../../../../../store';


@Injectable()
export class AuthService {
    constructor(
        private af: AngularFireAuth,
        private store: Store
    ) { }

    public auth$ = this.af.authState.pipe(
        tap((next) => {
            if (!next) {
                this.store.set('user', null);
                return;
            }
            const { email, uid } = next;
            this.store.set('user', { email, uid, authenticated: true });
        })
    )

    public createUser(email: string, password: string) {
        return this.af.auth.createUserWithEmailAndPassword(email, password);
    }

    public loginUser(email: string, password: string) {
        return this.af.auth.signInWithEmailAndPassword(email, password);
    }

    public logoutUser() {
        this.af.auth.signOut();
    }
}