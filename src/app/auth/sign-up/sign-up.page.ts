import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { RestService } from 'src/app/service/rest.service';
import { PushNotifications } from "@capacitor/push-notifications";
import Swal from 'sweetalert2';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  profileForm;
  pfCheckBox;
  showSignUpLoader = false;
  isSeen = false;
  passwordType = 'password';
  user: any;
  constructor(private restService: RestService, private router: Router, private googlePlus: GooglePlus) { }

  ngOnInit() {
    this.pfCheckBox = false;
    this.profileForm = new FormGroup({
      user_name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      referal_code: new FormControl('')
    });
  }

  googleSignIn() {
    this.googlePlus.login({})
      .then(result => {
        this.user = result;
        console.log(this.user);
        var json = {
          user_name: this.user.givenName.replace(/\s/g, ''),
          email: this.user.email,
          id: this.user.userId

        }
        this.onSignUp2(JSON.stringify(json));
      })
      .catch(err => {
        console.log(err);
        this.user = `Error ${JSON.stringify(err)}`
      });
  }

  onSignUp2(data) {
    this.showSignUpLoader = true;
    this.restService.postRequest('users/register', data).subscribe(
      (res: any) => {
        if (res.token) {
          // console.log('This is res', res.data);
          localStorage.setItem('token', res.token);
          localStorage.setItem('user', JSON.stringify(res.data));


          this.setDeviceToken();




          this.showSignUpLoader = false;
          this.router.navigate(['main'])
        }
      },
      err => {
        this.showSignUpLoader = false;
        // console.log('This is error', err.error);
        Swal.fire({
          title: '<div><h5>Error!</h5></div>',
          html: err.error,
          confirmButtonText: 'Ok',
          confirmButtonColor: '#99C43C',

        })

      })

  }

  getProfileFormError() {
    return this.profileForm.controls;
  }

  onSignUp() {
    this.showSignUpLoader = true;
    this.restService.postRequest('users/register', this.profileForm.value).subscribe(
      (res: any) => {
        if (res.token) {
          // console.log('This is res', res.data);
          localStorage.setItem('token', res.token);
          localStorage.setItem('user', JSON.stringify(res.data));


          this.setDeviceToken();




          this.showSignUpLoader = false;
          this.router.navigate(['main'])
        }
      },
      err => {
        this.showSignUpLoader = false;
        // console.log('This is error', err.error);
        Swal.fire({
          title: '<div><h5>Error!</h5></div>',
          html: err.error,
          confirmButtonText: 'Ok',
          confirmButtonColor: '#99C43C',

        })

      })

  }

  onClick(x) {
    // this.pfCheckBox = !this.pfCheckBox;
    this.pfCheckBox = x.detail.checked;
    // console.log('====>', x.detail.checked);

  }

  passwordSeenStatus() {
    this.isSeen = !this.isSeen;
    if (this.isSeen) {
      this.passwordType = 'text';
    } else {
      this.passwordType = 'password';
    }
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
}
