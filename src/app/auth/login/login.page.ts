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
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { SignInWithApple, AppleSignInResponse, AppleSignInErrorResponse, ASAuthorizationAppleIDRequest } from '@awesome-cordova-plugins/sign-in-with-apple/ngx';
import { HttpClient } from '@angular/common/http';
import { Facebook, FacebookLoginResponse } from '@awesome-cordova-plugins/facebook/ngx';
// import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
// import { Facebook, FacebookLoginResponse } from '@awesome-cordova-plugins/facebook/ngx';
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
    forgetPassword = false;
    user;
    constructor(private http: HttpClient,
        private fb: FormBuilder,
        private restService: RestService,
        private router: Router,
        public loadingController: LoadingController,
        public alertController: AlertController,
        private userService: UserService,
        private googlePlus: GooglePlus, private fbb: Facebook,
        private signInWithApple: SignInWithApple

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

    fblogin() {
        this.fbb.login(['public_profile', 'user_friends', 'email'])
            .then((res: FacebookLoginResponse) => console.log('Logged into Facebook!', res))
            .catch(e => console.log('Error logging into Facebook', e));


        this.fbb.logEvent(this.fbb.EVENTS.EVENT_NAME_ADDED_TO_CART);
    }

    ionViewDidEnter() {
        this.forgetPassword = false;
    }
    async submitLoginForm() {
        this.showSignUpLoader = true;
        const res = await this.userService.onUserLogin(this.profileForm.value);
        this.showSignUpLoader = false;
        if (res['token']) {
            localStorage.setItem('token', res['token']);
            localStorage.setItem('user', JSON.stringify(res['data'][0]));
            this.setDeviceToken()
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
                console.log('Firebase Token => ', token.value);

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
                this.onSignUp(JSON.stringify(json));
            })
            .catch(err => {
                console.log(err);
                this.user = `Error ${JSON.stringify(err)}`
            });
    }

    AppleSignIn() {
        this.signInWithApple.signin({
            requestedScopes: [
                ASAuthorizationAppleIDRequest.ASAuthorizationScopeFullName,
                ASAuthorizationAppleIDRequest.ASAuthorizationScopeEmail
            ]
        })
            .then((res: AppleSignInResponse) => {
                console.log(res);
                var json = {
                    email: res.email,
                    apple_id: res.user,
                    type: 'apple',
                    name: res.fullName.givenName + ' ' + res.fullName.familyName,
                    user_name: (res.fullName?.givenName + ' ' + res.fullName?.familyName).replace(/\s/g, '')
                }
                this.onSignUp(JSON.stringify(json));
            })
            .catch((error: AppleSignInErrorResponse) => {
                console.error(error);
            });
    }

    onSignUp(data) {
        // this.showSignUpLoader = true;
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
                console.log('This is error', err.error);
                Swal.fire({
                    title: '<div><h5>Error!</h5></div>',
                    html: err.error,
                    confirmButtonText: 'Ok',
                    confirmButtonColor: '#99C43C',

                })

            })

    }

    // login() {
    //   this.fbb.login(['public_profile', 'user_friends', 'email'])
    //     .then((res: FacebookLoginResponse) => console.log('Logged into Facebook!', res))
    //     .catch(e => console.log('Error logging into Facebook', e));
    // }
}
