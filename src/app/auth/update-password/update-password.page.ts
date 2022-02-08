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
  constructor(private route: ActivatedRoute, private rest: RestService, private alertController: AlertController, private router: Router) {}

  ngOnInit() {
    this.user = this.route.snapshot.paramMap.get('user');
    this.user = JSON.parse(this.user);
    console.log('rtert', this.user);

  }

  onPasswordUpdate() {
    const updateObj = {
      id: this.user[0].id,
      password: this.password,
    };
    this.rest
      .postRequest('users/update-password', updateObj)
      .subscribe((res: any) => {
        if(res.message){
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
}
