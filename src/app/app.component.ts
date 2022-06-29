import { Component } from '@angular/core';
import { PushNotifications } from "@capacitor/push-notifications";
import { RestService } from './service/rest.service';

import { StatusBar, Style } from '@capacitor/status-bar';

import { Platform } from '@ionic/angular';
import { AudioService } from './service/audio.service';
import { Router } from '@angular/router';

const setStatusBarStyleDark = async () => {
    await StatusBar.setStyle({ style: Style.Dark });
  };

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
})
export class AppComponent {

    constructor(private restService: RestService, private platform: Platform, private audio: AudioService, private router: Router) {

        setStatusBarStyleDark().then().catch();

        this.audio.playSound();
        this.platform.pause.subscribe(async () => {
            console.log('Change', 'Pause event detected');
            this.audio.stopSound()
        });
        this.platform.resume.subscribe(async () => {
            // alert('Resume event detected');
            this.audio.playSound()
        });
        this.platform.ready().then(() => {
            if (this.platform.is('iphone')) {
                document.getElementById('main-app-ion').style.marginTop = '30px';
            }
        });
        PushNotifications.addListener('registration',
            (token) => {
                console.log('Token => ', token.value);

                this.restService.postRequestToken('users/set-device-token', { deviceToken: token }).subscribe(res => {
                    console.log('Token --->', res);
                }, error => {
                    console.log('TOken UPdate Error', error);

                })
            }
        );

        // Some issue with our setup and push will not work
        PushNotifications.addListener('registrationError',
            (error: any) => {

                alert('Error on registration: ' + JSON.stringify(error));
            }
        );

    }

}
