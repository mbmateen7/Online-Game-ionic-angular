(self["webpackChunkpic_playce"] = self["webpackChunkpic_playce"] || []).push([["src_app_auth_login_login_module_ts"],{

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 14272);
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ 19342);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page */ 61506);









let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        ],
        providers: [_ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_1__.GooglePlus],
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.page.html */ 48182);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 11894);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_service_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/rest.service */ 90421);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/push-notifications */ 98748);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ 88259);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_service_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/user.service */ 84981);
/* harmony import */ var src_app_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/dialog/dialog.component */ 95029);
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ 19342);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _awesome_cordova_plugins_facebook_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @awesome-cordova-plugins/facebook/ngx */ 5901);
















// import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
// import { Facebook, FacebookLoginResponse } from '@awesome-cordova-plugins/facebook/ngx';
let LoginPage = class LoginPage {
    constructor(http, fb, restService, router, loadingController, alertController, userService, googlePlus, fbb) {
        this.http = http;
        this.fb = fb;
        this.restService = restService;
        this.router = router;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.userService = userService;
        this.googlePlus = googlePlus;
        this.fbb = fbb;
        this.alertMessage = 'please Wait...';
        this.passwordType = 'password';
        this.isSeen = false;
        this.showSignUpLoader = false;
        this.forgetPassword = false;
    }
    ngOnInit() {
        this.profileForm = this.fb.group({
            email: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.email,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
                ],
            ],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(6)]],
        });
    }
    fblogin() {
        this.fbb.login(['public_profile', 'user_friends', 'email'])
            .then((res) => console.log('Logged into Facebook!', res))
            .catch(e => console.log('Error logging into Facebook', e));
        this.fbb.logEvent(this.fbb.EVENTS.EVENT_NAME_ADDED_TO_CART);
    }
    ionViewDidEnter() {
        this.forgetPassword = false;
    }
    submitLoginForm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            this.showSignUpLoader = true;
            const res = yield this.userService.onUserLogin(this.profileForm.value);
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
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                duration: 2000,
            });
            yield loading.present();
        });
    }
    presentAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Alert',
                message: this.alertMessage,
                buttons: ['OK']
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
        });
    }
    setLastLogin() {
        let date = new Date();
        const obj = {
            last_login: date
        };
        this.restService.postRequestToken('users/set-last-login', obj).subscribe((res) => {
            if (res.status) {
                console.log('Last login is set successfully');
            }
        });
    }
    setDeviceToken() {
        _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_3__.PushNotifications.requestPermissions().then(result => {
            if (result.receive === 'granted') {
                _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_3__.PushNotifications.register();
            }
            else {
            }
        });
        _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_3__.PushNotifications.addListener('registration', (token) => {
            this.restService.postRequestToken('users/set-device-token', { deviceToken: token }).subscribe(res => {
                console.log('Token --->', token);
            });
        });
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
            };
            this.onSignUp(JSON.stringify(json));
        })
            .catch(err => {
            console.log(err);
            this.user = `Error ${JSON.stringify(err)}`;
        });
    }
    onSignUp(data) {
        // this.showSignUpLoader = true;
        this.restService.postRequest('users/register', data).subscribe((res) => {
            if (res.token) {
                // console.log('This is res', res.data);
                localStorage.setItem('token', res.token);
                localStorage.setItem('user', JSON.stringify(res.data));
                this.setDeviceToken();
                this.showSignUpLoader = false;
                this.router.navigate(['main']);
            }
        }, err => {
            this.showSignUpLoader = false;
            // console.log('This is error', err.error);
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
                title: '<div><h5>Error!</h5></div>',
                html: err.error,
                confirmButtonText: 'Ok',
                confirmButtonColor: '#99C43C',
            });
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder },
    { type: src_app_service_rest_service__WEBPACK_IMPORTED_MODULE_2__.RestService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.AlertController },
    { type: src_app_service_user_service__WEBPACK_IMPORTED_MODULE_5__.UserService },
    { type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_7__.GooglePlus },
    { type: _awesome_cordova_plugins_facebook_ngx__WEBPACK_IMPORTED_MODULE_8__.Facebook }
];
LoginPage.propDecorators = {
    child: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild, args: [src_app_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__.DialogComponent,] }]
};
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("p {\n  font-family: Poppins;\n}\n\n.danger {\n  color: red;\n}\n\n.blueBg > ion-col {\n  background-color: #707BBD;\n}\n\n:host ion-checkbox {\n  --size: 15px;\n}\n\n.mt-50 {\n  margin-top: 50px;\n}\n\n.mt-25 {\n  margin-top: 25px;\n}\n\n.mb-50 {\n  margin-bottom: 50px;\n}\n\n.w-100 {\n  width: 100% !important;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.cus-card {\n  margin-top: -50px;\n  position: relative;\n  border-radius: 50px;\n  background-color: white;\n}\n\n.mt-5 {\n  margin-top: 5px;\n}\n\n.pl-20 {\n  padding-left: 20px;\n}\n\n.cus-chip-dis {\n  background: #D6ECA6;\n  border-radius: 30px;\n  width: 330px;\n  height: 53px;\n  pointer-events: none;\n}\n\n.cus-chip {\n  background: #ABCD61;\n  border-radius: 30px;\n  width: 330px;\n  height: 53px;\n}\n\n.cus-label {\n  width: 100%;\n  color: #FFFF;\n  font-family: Poppins;\n  letter-spacing: 0.03em;\n  font-weight: 700;\n  font-size: 16px;\n}\n\n.cus-chip-social {\n  background: #FFFFFF;\n  border-radius: 30px;\n  width: 330px;\n  height: 53px;\n  border: 1px solid #DFDFDF;\n}\n\n.cus-label-social {\n  width: 100%;\n  color: #000000;\n  font-family: Poppins;\n  letter-spacing: 0.03em;\n  font-weight: 700;\n  font-size: 16px;\n}\n\n.separator {\n  display: flex;\n  align-items: center;\n}\n\n.separator .line {\n  height: 2px;\n  flex: 1;\n  background-color: #B6B6B6;\n}\n\n.separator p {\n  padding: 0 2rem;\n  color: #B6B6B6;\n  font-family: Poppins;\n}\n\nion-row > ion-col > ion-item > ion-input {\n  font-family: Poppins;\n  font-size: 14px;\n}\n\nion-item > ion-label {\n  font-family: Poppins;\n  font-size: 14px;\n}\n\nion-item > ion-icon {\n  font-size: 14px;\n}\n\n.eye {\n  position: absolute;\n  right: 10px;\n  top: 30px;\n  z-index: 10000;\n}\n\nion-col {\n  font-family: Poppins;\n}\n\n.fs-12 {\n  font-size: 12px;\n}\n\n.mt-30 {\n  margin-top: 30px;\n}\n\n.social-chip-space {\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.ml-20 {\n  margin-left: 20px;\n}\n\nion-grid {\n  padding: 0px !important;\n  overflow-y: auto;\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDQyxVQUFBO0FBQ0Q7O0FBRUE7RUFDRSx5QkFBQTtBQUNGOztBQUVFO0VBQ0UsWUFBQTtBQUNKOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBO0VBQ0Usc0JBQUE7QUFDRjs7QUFDQTtFQUNFLGtCQUFBO0FBRUY7O0FBQUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUdGOztBQURBO0VBQ0UsZUFBQTtBQUlGOztBQUZBO0VBQ0Usa0JBQUE7QUFLRjs7QUFGQTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FBS0Y7O0FBRkE7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFLRjs7QUFGQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUtGOztBQURBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUFJRjs7QUFEQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUlGOztBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBR0Y7O0FBQUE7RUFDRSxXQUFBO0VBQ0EsT0FBQTtFQUNBLHlCQUFBO0FBR0Y7O0FBQUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FBR0Y7O0FBQUE7RUFDRSxvQkFBQTtFQUNBLGVBQUE7QUFHRjs7QUFBQTtFQUNFLG9CQUFBO0VBQ0EsZUFBQTtBQUdGOztBQUFBO0VBRUUsZUFBQTtBQUVGOztBQUFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7QUFHRjs7QUFBQTtFQUNFLG9CQUFBO0FBR0Y7O0FBREE7RUFDRSxlQUFBO0FBSUY7O0FBRkE7RUFDRSxnQkFBQTtBQUtGOztBQUhBO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0FBTUY7O0FBSkE7RUFDRSxpQkFBQTtBQU9GOztBQUxBO0VBQ0UsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFRRiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwe1xyXG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG59XHJcblxyXG4uZGFuZ2Vye1xyXG4gY29sb3I6IHJlZDtcclxufVxyXG5cclxuLmJsdWVCZz4gaW9uLWNvbHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzA3QkJEO1xyXG59XHJcbjpob3N0e1xyXG4gIGlvbi1jaGVja2JveHtcclxuICAgIC0tc2l6ZTogMTVweDtcclxuICB9XHJcbn1cclxuLm10LTUwe1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuXHJcbi5tdC0yNXtcclxuICBtYXJnaW4tdG9wOiAyNXB4O1xyXG59XHJcblxyXG4ubWItNTB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxufVxyXG5cclxuLnctMTAwe1xyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuLnRleHQtY2VudGVye1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uY3VzLWNhcmR7XHJcbiAgbWFyZ2luLXRvcDogLTUwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuLm10LTV7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcbi5wbC0yMHtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbi5jdXMtY2hpcC1kaXN7XHJcbiAgYmFja2dyb3VuZDogI0Q2RUNBNjtcclxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gIHdpZHRoOiAzMzBweDtcclxuICBoZWlnaHQ6IDUzcHg7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbi5jdXMtY2hpcHtcclxuICBiYWNrZ3JvdW5kOiAjQUJDRDYxO1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgd2lkdGg6IDMzMHB4O1xyXG4gIGhlaWdodDogNTNweDtcclxufVxyXG5cclxuLmN1cy1sYWJlbHtcclxuICB3aWR0aDogMTAwJTtcclxuICBjb2xvcjogICNGRkZGO1xyXG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAzZW07XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcblxyXG59XHJcblxyXG4uY3VzLWNoaXAtc29jaWFse1xyXG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICB3aWR0aDogMzMwcHg7XHJcbiAgaGVpZ2h0OiA1M3B4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNERkRGREY7XHJcbn1cclxuXHJcbi5jdXMtbGFiZWwtc29jaWFse1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGNvbG9yOiAgIzAwMDAwMDtcclxuICBmb250LWZhbWlseTogUG9wcGlucztcclxuICBsZXR0ZXItc3BhY2luZzogMC4wM2VtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG5cclxufVxyXG5cclxuLnNlcGFyYXRvcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zZXBhcmF0b3IgLmxpbmV7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgZmxleDogMTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjZCNkI2O1xyXG59XHJcblxyXG4uc2VwYXJhdG9yIHB7XHJcbiAgcGFkZGluZzogMCAycmVtO1xyXG4gIGNvbG9yOiAjQjZCNkI2O1xyXG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG59XHJcblxyXG5pb24tcm93ID5pb24tY29sID4gaW9uLWl0ZW0gPiBpb24taW5wdXR7XHJcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG5pb24taXRlbSA+IGlvbi1sYWJlbHtcclxuICBmb250LWZhbWlseTogUG9wcGlucztcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbmlvbi1pdGVtID4gaW9uLWljb257XHJcbiAgLy8gZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi5leWV7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG4gIHRvcDogMzBweDtcclxuICB6LWluZGV4OiAxMDAwMDtcclxufVxyXG5cclxuaW9uLWNvbHtcclxuICBmb250LWZhbWlseTogUG9wcGlucztcclxufVxyXG4uZnMtMTJ7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5tdC0zMHtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcbi5zb2NpYWwtY2hpcC1zcGFjZXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG59XHJcbi5tbC0yMHtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG5pb24tZ3JpZCB7XHJcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBtYXJnaW46IDBweFxyXG59XHJcbiJdfQ== */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <ion-grid>\r\n    <ion-row class=\"blueBg\">\r\n      <ion-col>\r\n        <div class=\"text-center mb-50\">\r\n          <img class=\"mt-50 mb-10\" width=\"277\" height=\"78\" src=\"assets/logo.png\" alt=\"\" />\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-grid class=\"cus-card\">\r\n      <form [formGroup]=\"profileForm\">\r\n        <ion-row>\r\n          <ion-col class=\"pl-20\">\r\n            <div>\r\n              <ion-icon [routerLink]=\"['/home']\" size=\"large\" name=\"close-outline\"></ion-icon>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"mt-5\">\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">\r\n                <ion-icon name=\"mail\" slot=\"start\"></ion-icon>\r\n                Email\r\n              </ion-label>\r\n              <ion-input (input)=\"removeString($event)\"></ion-input>\r\n            </ion-item>\r\n\r\n            <p class=\"ml-20 danger\" *ngIf=\"profileForm.touched && errorControl.email.errors?.required\">\r\n              Email is required\r\n            </p>\r\n\r\n            <p class=\"ml-20 danger\" *ngIf=\"profileForm.touched && errorControl.email.status === 'INVALID' \">\r\n              Email is incorrect\r\n            </p>\r\n\r\n\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">\r\n                <ion-icon name=\"lock-closed\"></ion-icon>\r\n                Password\r\n              </ion-label>\r\n              <ion-input [type]=passwordType formControlName=\"password\"></ion-input>\r\n              <ion-icon *ngIf=\"isSeen\" (click)=\"passwordSeenStatus()\" class=\"eye\" name=\"eye-outline\" slot=\"end\">\r\n              </ion-icon>\r\n              <ion-icon *ngIf=\"!isSeen\" (click)=\"passwordSeenStatus()\" class=\"eye\" name=\"eye-off-outline\" slot=\"end\">\r\n              </ion-icon>\r\n\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n      </form>\r\n\r\n    </ion-grid>\r\n\r\n    <ion-row class=\"mt-30\">\r\n      <ion-col class=\"text-center\">\r\n        <div *ngIf=\"showSignUpLoader\" class=\"loader1\"></div>\r\n        <ion-chip *ngIf=\"!showSignUpLoader\" [ngClass]=\"profileForm.valid ? 'cus-chip' : 'cus-chip-dis'\">\r\n          <ion-label class=\"text-center cus-label\" (click)=\"submitLoginForm()\">\r\n            LOG IN\r\n          </ion-label>\r\n        </ion-chip>\r\n      </ion-col>\r\n    </ion-row>\r\n    <div class=\"ion-text-center\">\r\n\r\n      <div class=\"form-group form-check text-center ion-text-center\">\r\n        <a [routerLink]=\"['/reset']\">Forgot Password?</a>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <div class=\"separator\">\r\n          <div class=\"line\"></div>\r\n          <p>OR</p>\r\n          <div class=\"line\"></div>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col class=\"text-center\">\r\n        <ion-chip class=\"cus-chip-social\" (click)=\"googleSignIn()\">\r\n          <ion-label class=\"text-center cus-label-social social-chip-space\">\r\n            <ion-icon name=\"logo-google\"></ion-icon>\r\n            CONTINUE WITH GOOGLE\r\n          </ion-label>\r\n        </ion-chip>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <!-- <ion-row>\r\n      <ion-col class=\"text-center\">\r\n        <ion-chip class=\"cus-chip-social\">\r\n          <ion-label class=\"text-center cus-label-social social-chip-space\">\r\n            <ion-icon src=\"assets/fb-logo.svg\"></ion-icon>\r\n            CONTINUE WITH FACEBOOK\r\n          </ion-label>\r\n        </ion-chip>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col class=\"text-center\">\r\n        <ion-chip class=\"cus-chip-social\">\r\n          <ion-label class=\"text-center cus-label-social social-chip-space\">\r\n            <ion-icon name=\"logo-apple\"></ion-icon>\r\n            CONTINUE WITH APPLE\r\n          </ion-label>\r\n        </ion-chip>\r\n      </ion-col>\r\n    </ion-row> -->\r\n  </ion-grid>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_auth_login_login_module_ts.js.map