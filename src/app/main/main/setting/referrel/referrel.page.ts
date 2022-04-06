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
  emailorphone: any;
  phone: any;
  constructor(
    private route: ActivatedRoute,
    private restService: RestService,
    private alertController: AlertController,
    private router: Router
  ) { }

  ngOnInit() {
    this.code = this.route.snapshot.paramMap.get('code');
    this.shareVia();
  }

  async shareVia() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      message: 'shared via email or phone',
      buttons: [{
        text: 'Email', handler: () => {
          this.emailorphone = "email";
          alert.onDidDismiss()
        }
      },
      {
        text: 'Phone', handler: () => {
          this.emailorphone = "phone";
          alert.onDidDismiss()
        }
      }
      ]
    });

    await alert.present();
  }
  async onSendCode() {
    if (this.emailorphone == "email") {
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
      let json = {
        email: this.email.replace(/\s/g, ''),
        ref_code: this.code
      }

      this.restService.postRequestToken('users/referrel', json).subscribe((res) => {
        this.presentAlert();
      });
    }
    else {
      if (!this.phone) {
        const alert = await this.alertController.create({
          cssClass: 'my-custom-class',
          message: 'phone Number Required',
          buttons: [{
            text: 'OK', handler: () => {
              alert.onDidDismiss()
            }
          }]
        });

        await alert.present();
      }
      let json = {
        number: this.phone,
        ref_code: this.code
      }

      this.restService.postRequestToken('users/refertoNumber', json).subscribe((res) => {
        this.presentAlert();
      });
    }

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
