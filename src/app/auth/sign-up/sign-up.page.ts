import { Component, OnInit } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { RestService } from 'src/app/service/rest.service';
import { PushNotifications } from '@capacitor/push-notifications';
import Swal from 'sweetalert2';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import {
    AppleSignInErrorResponse,
    AppleSignInResponse,
    ASAuthorizationAppleIDRequest,
    SignInWithApple,
} from '@awesome-cordova-plugins/sign-in-with-apple/ngx';
import { Platform, NavController } from '@ionic/angular';
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
    isApple: boolean = false;
    constructor(
        private restService: RestService,
        private router: Router,
        private googlePlus: GooglePlus,
        private signInWithApple: SignInWithApple,
        public platform: Platform,
        private navCtrl: NavController
    ) {
        this.platform.ready().then(() => {
            if (this.platform.is('ios')) {
                this.isApple = true;
            }
        });
    }

    ngOnInit() {
        this.pfCheckBox = false;
        this.profileForm = new FormGroup({
            user_name: new FormControl('', [
                Validators.required,
                Validators.minLength(4),
                Validators.maxLength(10),
            ]),
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [
                Validators.required,
                Validators.minLength(6),
            ]),
            referal_code: new FormControl(''),
        });
    }

    googleSignIn() {
        this.googlePlus
            .login({})
            .then((result) => {
                this.user = result;
                var json = {
                    user_name: this.user.givenName.replace(/\s/g, ''),
                    email: this.user.email,
                    id: this.user.userId,
                };
                this.onSignUp2(JSON.stringify(json));
            })
            .catch((err) => {
                console.log(err);
                this.user = `Error ${JSON.stringify(err)}`;
            });
    }
    AppleSignIn() {
        this.signInWithApple
            .signin({
                requestedScopes: [
                    ASAuthorizationAppleIDRequest.ASAuthorizationScopeFullName,
                    ASAuthorizationAppleIDRequest.ASAuthorizationScopeEmail,
                ],
            })
            .then((res: AppleSignInResponse) => {
                var json = {
                    email: res.email,
                    apple_id: res.user,
                    type: 'apple',
                    name:
                        res.fullName.givenName + ' ' + res.fullName.familyName,
                    user_name: (
                        res.fullName?.givenName +
                        ' ' +
                        res.fullName?.familyName
                    ).replace(/\s/g, ''),
                };
                this.onSignUp2(JSON.stringify(json));
            })
            .catch((error: AppleSignInErrorResponse) => {
                console.error(error);
            });
    }

    onSignUp2(data) {
        this.showSignUpLoader = true;
        this.restService.postRequest('users/register', data).subscribe(
            (res: any) => {
                if (res.token) {
                    localStorage.setItem('token', res.token);
                    localStorage.setItem('user', JSON.stringify(res.data));
                    this.setDeviceToken();
                    this.showSignUpLoader = false;
                    this.navCtrl.setDirection('root');
                    this.router.navigate(['main']);
                }
            },
            (err) => {
                this.showSignUpLoader = false;
                // console.log('This is error', err.error);
                Swal.fire({
                    title: '<div><h5>Error!</h5></div>',
                    html: err.error,
                    confirmButtonText: 'Ok',
                    confirmButtonColor: '#99C43C',
                });
            }
        );
    }

    getProfileFormError() {
        return this.profileForm.controls;
    }

    onSignUp() {
        this.showSignUpLoader = true;
        this.restService
            .postRequest('users/register', this.profileForm.value)
            .subscribe(
                (res: any) => {
                    // if ()
                    // {

                    //     this.showSignUpLoader = false;
                    //     // console.log('This is error', err.error);
                    //     Swal.fire({
                    //       title: '<div><h5>Error!</h5></div>',
                    //       html: 'userName is too long',
                    //       confirmButtonText: 'Ok',
                    //       confirmButtonColor: '#99C43C',

                    //     })
                    //     this.router.navigate(['sign-up']);

                    // }

                    if (res.data.user_name.length <= 10) {
                        if (res.token) {
                            // console.log('This is res tipu', res.data.user_name.maxLength);

                            localStorage.setItem('token', res.token);
                            localStorage.setItem(
                                'user',
                                JSON.stringify(res.data)
                            );

                            this.setDeviceToken();

                            this.showSignUpLoader = false;
                            this.navCtrl.setDirection('root');
                            this.router.navigate(['main']);
                        }
                    }
                },
                (err) => {
                    this.showSignUpLoader = false;
                    // console.log('This is error', err.error);
                    Swal.fire({
                        title: '<div><h5>Error!</h5></div>',
                        html: 'Email already Exist',
                        confirmButtonText: 'Ok',
                        confirmButtonColor: '#99C43C',
                    });
                }
            );
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
        PushNotifications.requestPermissions().then((result) => {
            if (result.receive === 'granted') {
                PushNotifications.register();
            } else {
            }
        });

        PushNotifications.addListener('registration', (token) => {
            this.restService
                .postRequestToken('users/set-device-token', {
                    deviceToken: token,
                })
                .subscribe((res) => {});
        });
    }
}
