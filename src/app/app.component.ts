import { Component, OnInit, ViewChild } from '@angular/core';
import { PushNotifications } from '@capacitor/push-notifications';
import { RestService } from './service/rest.service';


import { StatusBar, Style } from '@capacitor/status-bar';

import { Platform } from '@ionic/angular';
import { AudioService } from './service/audio.service';
import { Router, RouterOutlet , ActivationStart } from '@angular/router';
import { StorageService } from './service/storage.service';

const setStatusBarStyleDark = async () => {
    await StatusBar.setStyle({ style: Style.Dark });
};

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
    @ViewChild(RouterOutlet) outlet: RouterOutlet;
    playAudio;

    ngOnInit(){
        // this.router.events.subscribe(e => {
        //     if (e instanceof ActivationStart && e.snapshot.outlet === "app")
        //       this.outlet.deactivate();
        //   });
    }

    constructor(
        private restService: RestService,
        private platform: Platform,
        private audio: AudioService,
        private router: Router,
        private db:StorageService
    ) {

        

        setStatusBarStyleDark().then().catch();

        this.db.getItem('playAudio').then(res => {
             this.playAudio = res
        });

        this.playAudio ? this.audio.playSound() : null;
        this.platform.pause.subscribe(async () => {
            console.log('Change', 'Pause event detected');
            this.audio.stopSound();
        });
        this.platform.resume.subscribe(async () => {
            console.log('Resume event detected');

            // let playAudio = JSON.parse(localStorage.getItem('playAudio'));
            this.db.getItem('playAudio').then(res => {
                this.playAudio = res
           });

            this.playAudio ? this.audio.playSound() : null;
        });
        this.platform.ready().then(() => {
            if (this.platform.is('iphone')) {
                document.getElementById('main-app-ion').style.marginTop =
                    '30px';
            }
            // this.db.remove();
        });
        PushNotifications.addListener('registration', (token) => {
            this.restService
                .postRequestToken('users/set-device-token', {
                    deviceToken: token,
                })
                .subscribe(
                    (res) => {},
                    (error) => {
                        console.log('Token UPdate Error', error);
                    }
                );
        });

        // Some issue with our setup and push will not work
        PushNotifications.addListener('registrationError', (error: any) => {
            alert('Error on registration: ' + JSON.stringify(error));
        });
    }
}
