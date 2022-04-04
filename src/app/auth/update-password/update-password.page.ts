import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { RestService } from 'src/app/service/rest.service';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.page.html',
  styleUrls: ['./update-password.page.scss'],
})
export class UpdatePasswordPage implements OnInit {
  user;
  password;
  cpassword;
  constructor(private route: ActivatedRoute, private rest: RestService, private alertController: AlertController, private router: Router) { }

  ngOnInit() {
    this.user = this.route.snapshot.paramMap.get('user');
    this.user = JSON.parse(this.user);
    console.log('rtert', this.user);

  }

  async onPasswordUpdate() {
    if (!this.password || !this.cpassword) {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        message: 'Both Field Required',
        buttons: [{
          text: 'OK', handler: () => {
            alert.onDidDismiss()
          }
        }]
      });

      await alert.present();
      return;
    }
    if (this.password.replace(/\s/g, '') != this.cpassword.replace(/\s/g, '')) {
      this.notMatch();
      return;
    }

    const updateObj = {
      id: this.user[0].id,
      password: this.password,
      cpassword: this.cpassword
    };
    this.rest
      .postRequest('users/update-password', updateObj)
      .subscribe((res: any) => {
        if (res.message) {
          this.presentAlert();
          this.router.navigate(['login'])
        }
      });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'PicPlayce',
      message: 'Password updated Succesfully!',
      buttons: ['Ok'],
    });

    await alert.present();
  }


  async notMatch() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      message: 'Password Not Matched',
      buttons: ['Ok'],
    });

    await alert.present();
  }
}
