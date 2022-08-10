import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StorageService } from './storage.service';
import { RestService } from './rest.service';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    userSource: BehaviorSubject<any>;
    userData: Observable<any>;
    constructor(
        private restService: RestService,
        private db: StorageService
    ) {
        this.db.getItem('user').then((res) => {
            this.userSource = new BehaviorSubject(res);
            this.userData = this.userSource.asObservable();
        });
    }

    get userSourceValue() {        
        return this.userSource?.value || false;
    }

    updateUser(user) {
        this.restService
            .putRequestToken('users/update', user)
            .subscribe((res: any) => {
                if (res.message) {
                    this.restService
                        .getRequest('users/detail')
                        .subscribe((res: any) => {
                            this.db.setItem('user', res);
                            console.log('Detail response');

                            this.userSource.next(res);
                        });
                }
            });
    }

    onUserLogin(obj) {
        return new Promise((resolve, reject) => {
            this.restService.postRequest('users/login', obj).subscribe(
                (res: any) => {
                    resolve(res);
                },
                (error) => {
                    resolve(error);
                }
            );
        });
    }
}
