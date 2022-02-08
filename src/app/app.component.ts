import { Component } from '@angular/core';
import { PushNotifications } from "@capacitor/push-notifications";
import { RestService } from './service/rest.service';


import { Platform } from '@ionic/angular';
import { AudioService } from './service/audio.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {




  constructor(private restService: RestService, private platform: Platform, private audio: AudioService, private router: Router) {

    this.audio.playSound();
    this.platform.pause.subscribe(async () => {
      console.log('Change', 'Pause event detected');
      this.audio.stopSound()
    });
    this.platform.resume.subscribe(async () => {
      // alert('Resume event detected');
      this.audio.playSound()
    });
    PushNotifications.requestPermissions().then(result => {
      if (result.receive === 'granted') {
        PushNotifications.register();
      } else {
      }
    });


    // PushNotifications.getDeliveredNotifications().then(res => {
    //   console.log('----->', res);
    //   window.location.reload()

    // })




    // PushNotifications.addListener('registration',
    //   (token) => {
    //     this.restService.postRequestToken('users/set-device-token', { deviceToken: token }).subscribe(res => {
    //       console.log('Token --->', token);
    //     })
    //   }
    // );

    // Some issue with our setup and push will not work
    PushNotifications.addListener('registrationError',
      (error: any) => {

        alert('Error on registration: ' + JSON.stringify(error));
      }
    );

    // PushNotifications.addListener('pushNotificationReceived', (res) => {
    //   console.log('Resss', res);
    //   this.router.navigate(['/main/game'], { replaceUrl: true })
    // })



  }

}
