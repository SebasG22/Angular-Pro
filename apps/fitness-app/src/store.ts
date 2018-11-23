import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, pluck } from 'rxjs/operators';
import { IUser } from './app/auth/shared/models';
import { IMeal } from './app/health/shared/models';

export interface State {
    [key: string]: any,
    user: IUser
    meals: IMeal[]
}

const state: State = {
    user: undefined,
    meals: undefined
};

export class Store {

    private subject = new BehaviorSubject<State>(state);
    private store = this.subject.asObservable().pipe(distinctUntilChanged());

    get value() {
        return this.subject.value;
    }

    select<T>(name: string): Observable<T> {
        return this.store.pipe(pluck(name));
    }

    set(name: string, newState: any) {
        this.subject.next({ ...this.value, [name]: newState });
    }

}