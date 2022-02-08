import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { RestService } from './rest.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  userSource: BehaviorSubject<any>;
  userData: Observable<any>;
  constructor(private restService: RestService) {
    this.userSource = new BehaviorSubject(localStorage.getItem('user'));
    this.userData = this.userSource.asObservable();
  }



  get userSourceValue() {
    return this.userSource.value
  }

  updateUser(user) {
    this.restService.putRequestToken('users/update', user).subscribe((res: any) => {
      if (res.message) {
        this.restService.getRequest('users/detail').subscribe((res: any) => {
          localStorage.setItem('user', JSON.stringify(res));
          console.log('Detail response');

          this.userSource.next(localStorage.getItem('user'))

        })
      }

    })
  }

  onUserLogin(obj) {
    return new Promise((resolve, reject) => {
      this.restService.postRequest('users/login', obj).subscribe(
        (res: any) => {
          resolve(res);
        },
        error => {
          resolve(error);
        }
      );
    })
  }
}
