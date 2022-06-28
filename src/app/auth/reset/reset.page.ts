import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from 'src/app/service/rest.service';
import { AlertController, Platform } from '@ionic/angular';

@Component({
    selector: 'app-reset',
    templateUrl: './reset.page.html',
    styleUrls: ['./reset.page.scss'],
})
export class ResetPage implements OnInit {
    email: string;
    constructor(
        private route: ActivatedRoute,
        private restService: RestService,
        private alertController: AlertController,
        private router: Router,
    ) {
    }

    ngOnInit() {
        this.email = this.route.snapshot.paramMap.get('email');
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
        this.restService.postRequest('users/reset', {
            email: this.email.replace(/\s/g, '')
        }).subscribe((res) => {
            this.presentAlert();
        });
    }

    async presentAlert() {
        const alert = await this.alertController.create({
            cssClass: 'my-custom-class',
            header: 'PicPlayce',
            message: 'Code is sent Successfully! Please check Your mail',
            buttons: [{
                text: 'OK', handler: () => {
                    this.router.navigate(['send-code']);
                }
            }]
        });

        await alert.present();

        const { role } = await alert.onDidDismiss();
    }
}
