import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { RestService } from 'src/app/service/rest.service';

@Component({
  selector: 'app-referrel',
  templateUrl: './referrel.page.html',
  styleUrls: ['./referrel.page.scss'],
})
export class ReferrelPage implements OnInit {

  email: string;
  code: any;

  constructor(
    private route: ActivatedRoute,
    private restService: RestService,
    private alertController: AlertController,
    private router: Router
  ) { }

  ngOnInit() {
    this.code = this.route.snapshot.paramMap.get('code');
  }

  async onSendCode() {
    if (!this.email) {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        message: 'Email Required',
        buttons: [{
          text: 'OK', handler: () => {
            alert.onDidDismiss()
          }
        }]
      });

      await alert.present();
    }
    var json = {
      email: this.email.replace(/\s/g, ''),
      ref_code: this.code
    }

    this.restService.postRequestToken('users/referrel', json).subscribe((res) => {
      this.presentAlert();
    });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      message: 'Code is sent Succefully',
      buttons: [{
        text: 'OK', handler: () => {
          this.router.navigate(['main/setting']);
        }
      }]
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

}
