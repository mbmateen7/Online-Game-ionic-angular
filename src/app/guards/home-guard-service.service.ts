import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class HomeGuardServiceService implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    console.log('---->', localStorage.getItem('token'));

    if (!localStorage.getItem('token')) {
      return true;
    } else {
      this.router.navigate(['/main']);
    }
  }
}
