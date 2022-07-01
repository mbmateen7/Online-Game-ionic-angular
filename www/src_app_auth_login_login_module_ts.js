(self["webpackChunkpic_playce"] = self["webpackChunkpic_playce"] || []).push([["src_app_auth_login_login_module_ts"],{

/***/ 85130:
/*!***********************************************************************!*\
  !*** ./node_modules/@capacitor-community/fcm/dist/esm/definitions.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=definitions.js.map

/***/ }),

/***/ 46654:
/*!*****************************************************************!*\
  !*** ./node_modules/@capacitor-community/fcm/dist/esm/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FCM": () => (/* binding */ FCM)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 68384);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 85130);

const FCM = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)("FCM", {
    web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor-community_fcm_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 33429)).then((m) => new m.FCMWeb()),
});
// export * from './web'; // @todo


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 14272:
/*!****************************************************!*\
  !*** ./src/app/auth/login/login-routing.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 61506);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 28990:
/*!********************************************!*\
  !*** ./src/app/auth/login/login.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 14272);
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ 19342);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page */ 61506);
/* harmony import */ var _awesome_cordova_plugins_sign_in_with_apple_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/sign-in-with-apple/ngx */ 20765);










let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        ],
        providers: [_ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_1__.GooglePlus, _awesome_cordova_plugins_sign_in_with_apple_ngx__WEBPACK_IMPORTED_MODULE_3__.SignInWithApple],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_2__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 61506:
/*!******************************************!*\
  !*** ./src/app/auth/login/login.page.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.page.html */ 48182);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 11894);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_service_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/rest.service */ 90421);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _capacitor_community_fcm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor-community/fcm */ 46654);
/* harmony import */ var _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/push-notifications */ 98748);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ 88259);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_service_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/user.service */ 84981);
/* harmony import */ var src_app_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/dialog/dialog.component */ 95029);
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ 19342);
/* harmony import */ var _awesome_cordova_plugins_sign_in_with_apple_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @awesome-cordova-plugins/sign-in-with-apple/ngx */ 20765);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _awesome_cordova_plugins_facebook_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @awesome-cordova-plugins/facebook/ngx */ 5901);


















// import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
// import { Facebook, FacebookLoginResponse } from '@awesome-cordova-plugins/facebook/ngx';
let LoginPage = class LoginPage {
    constructor(http, fb, restService, router, loadingController, alertController, userService, googlePlus, fbb, signInWithApple, platform, navCtrl) {
        this.http = http;
        this.fb = fb;
        this.restService = restService;
        this.router = router;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.userService = userService;
        this.googlePlus = googlePlus;
        this.fbb = fbb;
        this.signInWithApple = signInWithApple;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.isApple = false;
        this.alertMessage = 'please Wait...';
        this.passwordType = 'password';
        this.isSeen = false;
        this.showSignUpLoader = false;
        this.forgetPassword = false;
        this.platform.ready().then(() => {
            if (this.platform.is('ios')) {
                this.isApple = true;
            }
        });
    }
    ngOnInit() {
        this.profileForm = this.fb.group({
            email: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.email,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
                ],
            ],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.minLength(6)]],
        });
    }
    fblogin() {
        this.fbb
            .login(['public_profile', 'user_friends', 'email'])
            .then((res) => console.log('Logged into Facebook!'))
            .catch((e) => console.log('Error logging into Facebook', e));
        this.fbb.logEvent(this.fbb.EVENTS.EVENT_NAME_ADDED_TO_CART);
    }
    ionViewDidEnter() {
        this.forgetPassword = false;
    }
    submitLoginForm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            this.showSignUpLoader = true;
            const res = yield this.userService.onUserLogin(this.profileForm.value);
            this.showSignUpLoader = false;
            if (res['token']) {
                localStorage.setItem('token', res['token']);
                localStorage.setItem('user', JSON.stringify(res['data'][0]));
                this.setDeviceToken();
                this.setLastLogin();
                this.showSignUpLoader = false;
                this.navCtrl.setDirection('root');
                this.router.navigate(['/main']);
            }
            if (res['error']) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
                    title: '<div><img src="assets/icon/lost.png" style="width: 20vw; height:20vw;"><br><h5>Error!</h5></div>',
                    text: 'User name or Password is wrong',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#99C43C',
                    allowOutsideClick: true,
                    // backdrop: true,
                });
            }
        });
    }
    get errorControl() {
        return this.profileForm.controls;
    }
    passwordSeenStatus() {
        this.isSeen = !this.isSeen;
        if (this.isSeen) {
            this.passwordType = 'text';
        }
        else {
            this.passwordType = 'password';
        }
    }
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                duration: 2000,
            });
            yield loading.present();
        });
    }
    presentAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Alert',
                message: this.alertMessage,
                buttons: ['OK'],
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
        });
    }
    setLastLogin() {
        let date = new Date();
        const obj = {
            last_login: date,
        };
        this.restService
            .postRequestToken('users/set-last-login', obj)
            .subscribe((res) => {
            if (res.status) {
                console.log('Last login is set successfully');
            }
        });
    }
    setDeviceToken() {
        console.log("SET DEVICE TOKEN");
        _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_4__.PushNotifications.requestPermissions().then((result) => {
            console.log(result.receive);
            if (result.receive === 'granted') {
                _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_4__.PushNotifications.register();
                _capacitor_community_fcm__WEBPACK_IMPORTED_MODULE_3__.FCM.getToken().then((result) => {
                    console.log(result.token);
                    // this.remoteToken = result.token;
                }).catch((err) => console.log('i am Error', err));
            }
            else {
            }
        });
        _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_4__.PushNotifications.addListener('registration', (token) => {
            console.log("token : ", token);
            this.restService
                .postRequestToken('users/set-device-token', {
                deviceToken: token,
            })
                .subscribe((res) => { });
        }).catch((err) => {
            console.log('Token Error', err);
        });
    }
    removeString(event) {
        this.profileForm.get('email').setValue(event.target.value.trim());
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
            this.onSignUp(JSON.stringify(json));
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
                _awesome_cordova_plugins_sign_in_with_apple_ngx__WEBPACK_IMPORTED_MODULE_9__.ASAuthorizationAppleIDRequest.ASAuthorizationScopeFullName,
                _awesome_cordova_plugins_sign_in_with_apple_ngx__WEBPACK_IMPORTED_MODULE_9__.ASAuthorizationAppleIDRequest.ASAuthorizationScopeEmail,
            ],
        })
            .then((res) => {
            var _a, _b;
            var json = {
                email: res.email,
                apple_id: res.user,
                type: 'apple',
                name: res.fullName.givenName + ' ' + res.fullName.familyName,
                user_name: (((_a = res.fullName) === null || _a === void 0 ? void 0 : _a.givenName) +
                    ' ' +
                    ((_b = res.fullName) === null || _b === void 0 ? void 0 : _b.familyName)).replace(/\s/g, ''),
            };
            this.onSignUp(JSON.stringify(json));
        })
            .catch((error) => {
            console.error(error);
        });
    }
    onSignUp(data) {
        // this.showSignUpLoader = true;
        this.restService.postRequest('users/register', data).subscribe((res) => {
            if (res.token) {
                localStorage.setItem('token', res.token);
                localStorage.setItem('user', JSON.stringify(res.data));
                this.setDeviceToken();
                this.showSignUpLoader = false;
                console.log('Logged In');
                this.navCtrl.setDirection('root');
                this.router.navigate(['main']);
            }
        }, (err) => {
            this.showSignUpLoader = false;
            console.log('This is error', err.error);
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
                title: '<div><h5>Error!</h5></div>',
                html: err.error,
                confirmButtonText: 'Ok',
                confirmButtonColor: '#99C43C',
            });
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClient },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder },
    { type: src_app_service_rest_service__WEBPACK_IMPORTED_MODULE_2__.RestService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.AlertController },
    { type: src_app_service_user_service__WEBPACK_IMPORTED_MODULE_6__.UserService },
    { type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_8__.GooglePlus },
    { type: _awesome_cordova_plugins_facebook_ngx__WEBPACK_IMPORTED_MODULE_10__.Facebook },
    { type: _awesome_cordova_plugins_sign_in_with_apple_ngx__WEBPACK_IMPORTED_MODULE_9__.SignInWithApple },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.NavController }
];
LoginPage.propDecorators = {
    child: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_16__.ViewChild, args: [src_app_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_7__.DialogComponent,] }]
};
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginPage);



/***/ }),

/***/ 11894:
/*!********************************************!*\
  !*** ./src/app/auth/login/login.page.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("p {\n  font-family: Poppins;\n}\n\n.danger {\n  color: red;\n}\n\n.blueBg > ion-col {\n  background-color: #707BBD;\n}\n\n:host ion-checkbox {\n  --size: 15px;\n}\n\n.mt-50 {\n  margin-top: 50px;\n}\n\n.mt-25 {\n  margin-top: 25px;\n}\n\n.mb-50 {\n  margin-bottom: 50px;\n}\n\n.w-100 {\n  width: 100% !important;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.cus-card {\n  margin-top: -50px;\n  position: relative;\n  border-radius: 50px;\n  background-color: white;\n}\n\n.mt-5 {\n  margin-top: 5px;\n}\n\n.pl-20 {\n  padding-top: 20px;\n  padding-left: 20px;\n}\n\n.cus-chip-dis {\n  background: #D6ECA6;\n  border-radius: 30px;\n  width: 330px;\n  height: 53px;\n  pointer-events: none;\n}\n\n.cus-chip {\n  background: #ABCD61;\n  border-radius: 30px;\n  width: 330px;\n  height: 53px;\n}\n\n.cus-label {\n  width: 100%;\n  color: #FFFF;\n  font-family: Poppins;\n  letter-spacing: 0.03em;\n  font-weight: 700;\n  font-size: 16px;\n}\n\n.cus-chip-social {\n  background: #FFFFFF;\n  border-radius: 30px;\n  width: 330px;\n  height: 53px;\n  border: 1px solid #DFDFDF;\n}\n\n.cus-label-social {\n  width: 100%;\n  color: #000000;\n  font-family: Poppins;\n  letter-spacing: 0.03em;\n  font-weight: 700;\n  font-size: 16px;\n}\n\n.separator {\n  display: flex;\n  align-items: center;\n}\n\n.separator .line {\n  height: 2px;\n  flex: 1;\n  background-color: #B6B6B6;\n}\n\n.separator p {\n  padding: 0 2rem;\n  color: #B6B6B6;\n  font-family: Poppins;\n}\n\nion-row > ion-col > ion-item > ion-input {\n  font-family: Poppins;\n  font-size: 14px;\n}\n\nion-item > ion-label {\n  font-family: Poppins;\n  font-size: 14px;\n}\n\nion-item > ion-icon {\n  font-size: 14px;\n}\n\n.eye {\n  position: absolute;\n  right: 10px;\n  top: 30px;\n  z-index: 10000;\n}\n\nion-col {\n  font-family: Poppins;\n}\n\n.fs-12 {\n  font-size: 12px;\n}\n\n.mt-30 {\n  margin-top: 40px;\n}\n\n.social-chip-space {\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.ml-20 {\n  margin-left: 20px;\n}\n\nion-grid {\n  padding: 0px !important;\n  overflow-y: auto;\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDQyxVQUFBO0FBQ0Q7O0FBRUE7RUFDRSx5QkFBQTtBQUNGOztBQUVFO0VBQ0UsWUFBQTtBQUNKOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBO0VBQ0Usc0JBQUE7QUFDRjs7QUFDQTtFQUNFLGtCQUFBO0FBRUY7O0FBQUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUdGOztBQURBO0VBQ0UsZUFBQTtBQUlGOztBQUZBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQUtGOztBQUZBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUFLRjs7QUFGQTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUtGOztBQUZBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBS0Y7O0FBREE7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQUlGOztBQURBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBSUY7O0FBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFHRjs7QUFBQTtFQUNFLFdBQUE7RUFDQSxPQUFBO0VBQ0EseUJBQUE7QUFHRjs7QUFBQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUFHRjs7QUFBQTtFQUNFLG9CQUFBO0VBQ0EsZUFBQTtBQUdGOztBQUFBO0VBQ0Usb0JBQUE7RUFDQSxlQUFBO0FBR0Y7O0FBQUE7RUFFRSxlQUFBO0FBRUY7O0FBQUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtBQUdGOztBQUFBO0VBQ0Usb0JBQUE7QUFHRjs7QUFEQTtFQUNFLGVBQUE7QUFJRjs7QUFGQTtFQUNFLGdCQUFBO0FBS0Y7O0FBSEE7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7QUFNRjs7QUFKQTtFQUNFLGlCQUFBO0FBT0Y7O0FBTEE7RUFDRSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQVFGIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInB7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xufVxuXG4uZGFuZ2Vye1xuIGNvbG9yOiByZWQ7XG59XG5cbi5ibHVlQmc+IGlvbi1jb2x7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3MDdCQkQ7XG59XG46aG9zdHtcbiAgaW9uLWNoZWNrYm94e1xuICAgIC0tc2l6ZTogMTVweDtcbiAgfVxufVxuLm10LTUwe1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4ubXQtMjV7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG5cbi5tYi01MHtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxuLnctMTAwe1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxuLnRleHQtY2VudGVye1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY3VzLWNhcmR7XG4gIG1hcmdpbi10b3A6IC01MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLm10LTV7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbi5wbC0yMHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxuLmN1cy1jaGlwLWRpc3tcbiAgYmFja2dyb3VuZDogI0Q2RUNBNjtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgd2lkdGg6IDMzMHB4O1xuICBoZWlnaHQ6IDUzcHg7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uY3VzLWNoaXB7XG4gIGJhY2tncm91bmQ6ICNBQkNENjE7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIHdpZHRoOiAzMzBweDtcbiAgaGVpZ2h0OiA1M3B4O1xufVxuXG4uY3VzLWxhYmVse1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICAjRkZGRjtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAzZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcblxufVxuXG4uY3VzLWNoaXAtc29jaWFse1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICB3aWR0aDogMzMwcHg7XG4gIGhlaWdodDogNTNweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0RGREZERjtcbn1cblxuLmN1cy1sYWJlbC1zb2NpYWx7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogICMwMDAwMDA7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBsZXR0ZXItc3BhY2luZzogMC4wM2VtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDE2cHg7XG5cbn1cblxuLnNlcGFyYXRvcntcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNlcGFyYXRvciAubGluZXtcbiAgaGVpZ2h0OiAycHg7XG4gIGZsZXg6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6ICNCNkI2QjY7XG59XG5cbi5zZXBhcmF0b3IgcHtcbiAgcGFkZGluZzogMCAycmVtO1xuICBjb2xvcjogI0I2QjZCNjtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG59XG5cbmlvbi1yb3cgPmlvbi1jb2wgPiBpb24taXRlbSA+IGlvbi1pbnB1dHtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuaW9uLWl0ZW0gPiBpb24tbGFiZWx7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbmlvbi1pdGVtID4gaW9uLWljb257XG4gIC8vIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uZXlle1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xuICB0b3A6IDMwcHg7XG4gIHotaW5kZXg6IDEwMDAwO1xufVxuXG5pb24tY29se1xuICBmb250LWZhbWlseTogUG9wcGlucztcbn1cbi5mcy0xMntcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLm10LTMwe1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuLnNvY2lhbC1jaGlwLXNwYWNle1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cbi5tbC0yMHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5pb24tZ3JpZCB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBtYXJnaW46IDBweFxufVxuIl19 */");

/***/ }),

/***/ 48182:
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.page.html ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n    <ion-grid>\n        <ion-row class=\"blueBg\">\n            <ion-col>\n                <div class=\"text-center mb-50\">\n                    <img class=\"mt-50 mb-10\" width=\"277\" height=\"78\" src=\"assets/logo.png\" alt=\"\" />\n                </div>\n            </ion-col>\n        </ion-row>\n\n        <ion-grid class=\"cus-card\">\n            <form [formGroup]=\"profileForm\">\n                <ion-row>\n                    <ion-col class=\"pl-20\">\n                        <div>\n                            <ion-icon [routerLink]=\"['/home']\" size=\"large\" name=\"close-outline\"></ion-icon>\n                        </div>\n                    </ion-col>\n                </ion-row>\n                <ion-row class=\"mt-5\">\n                    <ion-col>\n                        <ion-item>\n                            <ion-label position=\"floating\">\n                                <ion-icon name=\"mail\" slot=\"start\"></ion-icon>\n                                Email\n                            </ion-label>\n                            <ion-input type=\"email\" (input)=\"removeString($event)\" formControlName=\"email\"></ion-input>\n                        </ion-item>\n                        <p class=\"ml-20 danger\" *ngIf=\"profileForm.touched && errorControl.email.errors?.required\">\n                            Email is required\n                        </p>\n                        <p class=\"ml-20 danger\" *ngIf=\"profileForm.touched && errorControl.email.status === 'INVALID' \">\n                            Email is incorrect\n                        </p>\n                    </ion-col>\n                </ion-row>\n\n                <ion-row>\n                    <ion-col>\n                        <ion-item>\n                            <ion-label position=\"floating\">\n                                <ion-icon name=\"lock-closed\"></ion-icon>\n                                Password\n                            </ion-label>\n                            <ion-input [type]=passwordType formControlName=\"password\"></ion-input>\n                            <ion-icon *ngIf=\"isSeen\" (click)=\"passwordSeenStatus()\" class=\"eye\" name=\"eye-outline\" slot=\"end\">\n                            </ion-icon>\n                            <ion-icon *ngIf=\"!isSeen\" (click)=\"passwordSeenStatus()\" class=\"eye\" name=\"eye-off-outline\" slot=\"end\">\n                            </ion-icon>\n\n                        </ion-item>\n                    </ion-col>\n                </ion-row>\n            </form>\n\n        </ion-grid>\n\n        <ion-row class=\"mt-30  margin-top\">\n            <ion-col class=\"text-center\">\n                <div *ngIf=\"showSignUpLoader\" class=\"loader1\"></div>\n                <ion-chip *ngIf=\"!showSignUpLoader\" [ngClass]=\"profileForm.valid ? 'cus-chip' : 'cus-chip-dis'\">\n                    <ion-label class=\"text-center cus-label\" (click)=\"submitLoginForm()\">\n                        LOG IN\n                    </ion-label>\n                </ion-chip>\n            </ion-col>\n        </ion-row>\n        <div class=\"ion-text-center\">\n\n            <div class=\"form-group form-check text-center ion-text-center\">\n                <a [routerLink]=\"['/reset']\">Forgot Password?</a>\n            </div>\n\n        </div>\n\n        <ion-row>\n            <ion-col>\n                <div class=\"separator\">\n                    <div class=\"line\"></div>\n                    <p>OR</p>\n                    <div class=\"line\"></div>\n                </div>\n            </ion-col>\n        </ion-row>\n\n        <ion-row>\n            <ion-col class=\"text-center\">\n                <ion-chip class=\"cus-chip-social\" (click)=\"googleSignIn()\">\n                    <ion-label class=\"text-center cus-label-social social-chip-space\">\n                        <ion-icon name=\"logo-google\"></ion-icon>\n                        CONTINUE WITH GOOGLE\n                    </ion-label>\n                </ion-chip>\n            </ion-col>\n            <ion-col class=\"text-center\" *ngIf=\"isApple\">\n                <ion-chip class=\"cus-chip-social\" (click)=\"AppleSignIn()\">\n                    <ion-label class=\"text-center cus-label-social social-chip-space\">\n                        <ion-icon name=\"logo-apple\"></ion-icon>\n                        CONTINUE WITH Apple\n                    </ion-label>\n                </ion-chip>\n            </ion-col>\n        </ion-row>\n\n        <!-- <ion-row>\n      <ion-col class=\"text-center\">\n        <ion-chip class=\"cus-chip-social\">\n          <ion-label class=\"text-center cus-label-social social-chip-space\">\n            <ion-icon src=\"assets/fb-logo.svg\"></ion-icon>\n            CONTINUE WITH FACEBOOK\n          </ion-label>\n        </ion-chip>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col class=\"text-center\">\n        <ion-chip class=\"cus-chip-social\">\n          <ion-label class=\"text-center cus-label-social social-chip-space\">\n            <ion-icon name=\"logo-apple\"></ion-icon>\n            CONTINUE WITH APPLE\n          </ion-label>\n        </ion-chip>\n      </ion-col>\n    </ion-row> -->\n    <ion-row>\n        <ion-col class=\"text-center\">\n            <div style=\"width: 100%; height: 100px;\"></div>\n         </ion-col>\n    </ion-row>\n    </ion-grid>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_auth_login_login_module_ts.js.map