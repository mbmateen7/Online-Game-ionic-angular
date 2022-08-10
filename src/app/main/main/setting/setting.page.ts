import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';
import { AudioService } from 'src/app/service/audio.service';
import { RestService } from 'src/app/service/rest.service';
import { AlertController, NavController } from '@ionic/angular';
import { AdMob } from '@capacitor-community/admob';
import { StorageService } from 'src/app/service/storage.service';
import { UserService } from 'src/app/service/user.service';

@Component({
    selector: 'app-setting',
    templateUrl: './setting.page.html',
    styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {
    user;
    ref_code: any = '';
    playAudio = true;
    constructor(
        private alertController: AlertController,
        private googlePlus: GooglePlus,
        private router: Router,
        private restService: RestService,
        private audio: AudioService,
        private socialSharing: SocialSharing,
        private navCtrl: NavController,
        private db:StorageService,
        private _user:UserService
    ) {}

    ngOnInit() {
        this.user = this._user.userSourceValue;
    }
    ionViewDidEnter() {
        // this.playAudio = JSON.parse(localStorage.getItem('playAudio'));
        this.db.getItem('playAudio').then(res => {
            this.playAudio= res
        });
        if (!this.playAudio) this.playAudio = false;
        this.getUserData();
    }

    onLogout() {
        this.logout();
        this.setLastLogin();
        let lastClaim = this.db.getItem('LastLoginClaim');
        this.db.remove();
        this.db.setItem('LastLoginClaim',lastClaim)
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
        this.navCtrl.setDirection('root');
        this.router.navigate(['/home'], { replaceUrl: true });
    }
    getUserData() {
        this.restService.getRequest('users/detail').subscribe((res: any) => {
            if (res) {
                this.ref_code = res.referal_code;
            }
        });
    }

    // async share() {
    //   const alert = await this.alertController.create({
    //     cssClass: 'my-custom-class',
    //     message: 'Email Required',
    //     buttons: [{
    //       text: 'OK', handler: () => {
    //         alert.onDidDismiss()
    //       }
    //     }]
    //   });

    //   await alert.present();
    //   const obj = {
    //     ref_code: this.ref_code,
    //     email: "aqibnwl@gmail.com"
    //   }
    //   this.restService.postRequestToken('users/set-last-login', obj).subscribe((res: any) => {
    //     if (res.status) {
    //       console.log('Last login is set successfully');

    //     }
    //   })
    // }

    logout() {
        AdMob.hideBanner().then(() => {
            document.getElementsByTagName('ion-app')[0].style.bottom = '0';
        });
        this.googlePlus
            .logout()
            .then((res) => {})
            .catch((err) => console.error(err));
    }

    setLastLogin() {
        let date = new Date();
        const obj = {
            last_login: date,
        };
        this.restService
            .postRequestToken('users/set-last-login', obj)
            .subscribe((res: any) => {
                if (res.status) {
                    console.log('Last login is set successfully');
                }
            });
    }
    changeSound(e) {
        this.db.setItem('playAudio', JSON.stringify(e.detail.checked));
        if (e.detail.checked) {
            this.audio.stopSound();
            this.audio.playSound();
        } else this.audio.stopSound();
    }

    onUpdateProfile() {
        this.router.navigate(['/update-profile']);
        // console.log('---------------')
        // this.router.navigate(['../../update-profile'], { replaceUrl: true })
    }

    goToPurchaseDetails() {
        this.router.navigate(['/main/setting/purchase-container']);
    }

    shareSocial() {
        var options = {
            message: "PicPlayce is a fun, interactive game to play with friends! Download now, for Android and IOS, so we can play! (https://www.picplayce.com)   Signup using this code to get bonus points. Code: " + this.ref_code,
        };
        this.socialSharing.shareWithOptions(options);
    }

    openMail() {
        location.href = 'mailto:feedback@picplayce.com?subject=Report an Issue';
    }
}
