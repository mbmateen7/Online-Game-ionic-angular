import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/service/rest.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-send-code',
  templateUrl: './send-code.page.html',
  styleUrls: ['./send-code.page.scss'],
})
export class SendCodePage implements OnInit {
  verficationCode;
  constructor(
    private restService: RestService,
    private alertController: AlertController,
    private router: Router
  ) {}

  ngOnInit() {}

  onSendCode() {
    this.restService
      .postRequest('users/verification', { code: this.verficationCode })
      .subscribe((res: any) => {
        if(!res.user.length){
          this.presentAlert();
        } else {
          this.router.navigate(['update-password', {user: JSON.stringify(res.user)} ]);
        }

      });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'PicPlayce',
      message: 'No User Found',
      buttons: ['Ok'],
    });

    await alert.present();
  }
}
