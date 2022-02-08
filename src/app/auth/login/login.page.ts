import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestService } from 'src/app/service/rest.service';
import { LoadingController, NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { PushNotifications } from "@capacitor/push-notifications";
import Swal from 'sweetalert2';
import { UserService } from 'src/app/service/user.service';
import { DialogComponent } from 'src/app/dialog/dialog.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @ViewChild(DialogComponent) child;
  alertMessage = 'please Wait...';
  profileForm;
  passwordType = 'password';
  isSeen = false;
  showSignUpLoader = false;
  user;
  constructor(
    private fb: FormBuilder,
    private restService: RestService,
    private router: Router,
    public loadingController: LoadingController,
    public alertController: AlertController,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.profileForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  async submitLoginForm() {
    this.showSignUpLoader = true;
    const res = await this.userService.onUserLogin(this.profileForm.value);
    this.showSignUpLoader = false;
    if (res['token']) {
      localStorage.setItem('token', res['token']);
      localStorage.setItem('user', JSON.stringify(res['data'][0]));
      // this.setDeviceToken()
      this.setLastLogin();
      this.showSignUpLoader = false;
      this.router.navigate(['/main']);
    }

    if (res['error']) {
      Swal.fire({
        title: '<div><img src="assets/icon/lost.png" style="width: 20vw; height:20vw;"><br><h5>Error!</h5></div>',
        text: 'User name or Password is wrong',
        confirmButtonText: 'OK',
        confirmButtonColor: '#99C43C',
        allowOutsideClick: true,
        // backdrop: true,
      })

    }



    // // this.spinnerDialog.show();
    // this.restService
    //   .postRequest('users/login', this.profileForm.value)
    //   .subscribe(


    //     (res: any) => {
    //       if (res.error === 'Password not exist') {
    //         this.showSignUpLoader = false;
    //         // this.spinnerDialog.hide();
    //         this.router.navigate([
    //           '/reset',
    //           { email: this.profileForm.value.email },
    //         ]);
    //       }
    //       if (res.token) {
    //         localStorage.setItem('token', res.token);
    //         localStorage.setItem('user', JSON.stringify(res.data[0]));
    //         this.setDeviceToken()
    //         this.setLastLogin();
    //         this.showSignUpLoader = false;
    //         this.router.navigate(['/main']);
    //       }
    //     },
    //     error => {
    //       this.showSignUpLoader = false;
    //       Swal.fire({
    //         title: '<div><img src="assets/icon/lost.png" style="width: 20vw; height:20vw;"><br><h5>Error!</h5></div>',
    //         text: 'User name or Password is wrong',
    //         confirmButtonText: 'OK',
    //         confirmButtonColor: '#99C43C',
    //         allowOutsideClick: true,
    //         // backdrop: true,
    //       })

    //     }
    //   );
  }

  get errorControl() {
    return this.profileForm.controls;
  }

  passwordSeenStatus() {
    this.isSeen = !this.isSeen;
    if (this.isSeen) {
      this.passwordType = 'text';
    } else {
      this.passwordType = 'password';
    }
  }

  loginWithGoogle(): void { }

  loginWithfb(): void {
    //   this.facebook
    //     .login(['public_profile','email'])
    //     .then((res: FacebookLoginResponse) =>
    //       console.log('Logged into Facebook!', res)
    //     )
    //     .catch((e) => console.log('Error logging into Facebook', e));
  }

  async presentLoading() {

    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 2000,
    });
    await loading.present();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      message: this.alertMessage,
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  setLastLogin() {
    let date = new Date();

    const obj = {
      last_login: date
    }
    this.restService.postRequestToken('users/set-last-login', obj).subscribe((res: any) => {
      if (res.status) {
        console.log('Last login is set successfully');

      }
    })
  }

  setDeviceToken() {

    PushNotifications.requestPermissions().then(result => {
      if (result.receive === 'granted') {
        PushNotifications.register();
      } else {
      }
    });


    PushNotifications.addListener('registration',
      (token) => {
        this.restService.postRequestToken('users/set-device-token', { deviceToken: token }).subscribe(res => {
          console.log('Token --->', token);
        })
      }
    );
  }

  removeString(event) {
    console.log(this.profileForm.value);
    this.profileForm.get('email').setValue(event.target.value.trim());
    console.log(this.profileForm.value);
  }
}
