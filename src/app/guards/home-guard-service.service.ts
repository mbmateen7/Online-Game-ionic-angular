import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
@Injectable({
    providedIn: 'root',
})
export class HomeGuardServiceService implements CanActivate {
    constructor(private router: Router, private navCtrl: NavController) {}

    canActivate(): boolean {
        if (!localStorage.getItem('token')) {
            return true;
        } else {
            this.navCtrl.setDirection('root');
            this.router.navigate(['/main']);
        }
    }
}
