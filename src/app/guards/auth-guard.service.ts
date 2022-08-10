import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { StorageService } from '../service/storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(private router: Router,private navCtrl: NavController,private db:StorageService) {}

  canActivate(): boolean {
    console.log('Guard Auth',this.db.tokenSourceValue);
    return true;
    if (this.db.tokenSourceValue.length) {
      return true;
    } else {
      this.navCtrl.setDirection('root');
      this.router.navigate(['home']);
      return false;
    }
  }
}
