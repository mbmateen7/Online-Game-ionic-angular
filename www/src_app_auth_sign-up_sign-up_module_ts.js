(self["webpackChunkpic_playce"] = self["webpackChunkpic_playce"] || []).push([["src_app_auth_sign-up_sign-up_module_ts"],{

/***/ 32436:
/*!********************************************************!*\
  !*** ./src/app/auth/sign-up/sign-up-routing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpPageRoutingModule": () => (/* binding */ SignUpPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _sign_up_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign-up.page */ 14230);




const routes = [
    {
        path: '',
        component: _sign_up_page__WEBPACK_IMPORTED_MODULE_0__.SignUpPage
    }
];
let SignUpPageRoutingModule = class SignUpPageRoutingModule {
};
SignUpPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SignUpPageRoutingModule);



/***/ }),

/***/ 87222:
/*!************************************************!*\
  !*** ./src/app/auth/sign-up/sign-up.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpPageModule": () => (/* binding */ SignUpPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _sign_up_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign-up-routing.module */ 32436);
/* harmony import */ var _sign_up_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-up.page */ 14230);
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ 19342);
/* harmony import */ var _awesome_cordova_plugins_sign_in_with_apple_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/sign-in-with-apple/ngx */ 20765);










let SignUpPageModule = class SignUpPageModule {
};
SignUpPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _sign_up_routing_module__WEBPACK_IMPORTED_MODULE_0__.SignUpPageRoutingModule
        ],
        declarations: [_sign_up_page__WEBPACK_IMPORTED_MODULE_1__.SignUpPage],
        providers: [_ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_2__.GooglePlus, _awesome_cordova_plugins_sign_in_with_apple_ngx__WEBPACK_IMPORTED_MODULE_3__.SignInWithApple]
    })
], SignUpPageModule);



/***/ }),

/***/ 14230:
/*!**********************************************!*\
  !*** ./src/app/auth/sign-up/sign-up.page.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpPage": () => (/* binding */ SignUpPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_sign_up_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./sign-up.page.html */ 37900);
/* harmony import */ var _sign_up_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-up.page.scss */ 81701);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_service_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/rest.service */ 90421);
/* harmony import */ var _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/push-notifications */ 98748);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ 88259);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ 19342);
/* harmony import */ var _awesome_cordova_plugins_sign_in_with_apple_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @awesome-cordova-plugins/sign-in-with-apple/ngx */ 20765);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);












let SignUpPage = class SignUpPage {
    constructor(restService, router, googlePlus, signInWithApple, platform, navCtrl) {
        this.restService = restService;
        this.router = router;
        this.googlePlus = googlePlus;
        this.signInWithApple = signInWithApple;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.showSignUpLoader = false;
        this.isSeen = false;
        this.passwordType = 'password';
        this.isApple = false;
        this.platform.ready().then(() => {
            if (this.platform.is('ios')) {
                this.isApple = true;
            }
        });
    }
    ngOnInit() {
        this.pfCheckBox = false;
        this.profileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
            user_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(10)]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(6),
            ]),
            referal_code: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('')
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
            };
            this.onSignUp2(JSON.stringify(json));
        })
            .catch(err => {
            console.log(err);
            this.user = `Error ${JSON.stringify(err)}`;
        });
    }
    AppleSignIn() {
        this.signInWithApple.signin({
            requestedScopes: [
                _awesome_cordova_plugins_sign_in_with_apple_ngx__WEBPACK_IMPORTED_MODULE_6__.ASAuthorizationAppleIDRequest.ASAuthorizationScopeFullName,
                _awesome_cordova_plugins_sign_in_with_apple_ngx__WEBPACK_IMPORTED_MODULE_6__.ASAuthorizationAppleIDRequest.ASAuthorizationScopeEmail
            ]
        })
            .then((res) => {
            var _a, _b;
            console.log(res);
            var json = {
                email: res.email,
                apple_id: res.user,
                type: 'apple',
                name: res.fullName.givenName + ' ' + res.fullName.familyName,
                user_name: (((_a = res.fullName) === null || _a === void 0 ? void 0 : _a.givenName) + ' ' + ((_b = res.fullName) === null || _b === void 0 ? void 0 : _b.familyName)).replace(/\s/g, '')
            };
            this.onSignUp2(JSON.stringify(json));
        })
            .catch((error) => {
            console.error(error);
        });
    }
    onSignUp2(data) {
        this.showSignUpLoader = true;
        this.restService.postRequest('users/register', data).subscribe((res) => {
            if (res.token) {
                // console.log('This is res', res.data);
                localStorage.setItem('token', res.token);
                localStorage.setItem('user', JSON.stringify(res.data));
                this.setDeviceToken();
                this.showSignUpLoader = false;
                this.navCtrl.setDirection('root');
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
    getProfileFormError() {
        return this.profileForm.controls;
    }
    onSignUp() {
        this.showSignUpLoader = true;
        this.restService.postRequest('users/register', this.profileForm.value).subscribe((res) => {
            console.log('This is res tipu', res.data.user_name.length);
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
                    localStorage.setItem('user', JSON.stringify(res.data));
                    this.setDeviceToken();
                    this.showSignUpLoader = false;
                    this.navCtrl.setDirection('root');
                    this.router.navigate(['main']);
                }
            }
        }, err => {
            this.showSignUpLoader = false;
            // console.log('This is error', err.error);
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
                title: '<div><h5>Error!</h5></div>',
                html: 'Email already Exist',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#99C43C',
            });
        });
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
        }
        else {
            this.passwordType = 'password';
        }
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
};
SignUpPage.ctorParameters = () => [
    { type: src_app_service_rest_service__WEBPACK_IMPORTED_MODULE_2__.RestService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_5__.GooglePlus },
    { type: _awesome_cordova_plugins_sign_in_with_apple_ngx__WEBPACK_IMPORTED_MODULE_6__.SignInWithApple },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavController }
];
SignUpPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-sign-up',
        template: _raw_loader_sign_up_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_sign_up_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SignUpPage);



/***/ }),

/***/ 81701:
/*!************************************************!*\
  !*** ./src/app/auth/sign-up/sign-up.page.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".blueBg > ion-col {\n  background-color: #707BBD;\n}\n\n:host ion-checkbox {\n  --size: 15px;\n}\n\n.mt-50 {\n  margin-top: 50px;\n}\n\n.mb-50 {\n  margin-bottom: 50px;\n}\n\n.w-100 {\n  width: 100% !important;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.cus-card {\n  margin-top: -50px;\n  position: relative;\n  border-radius: 50px;\n  background-color: white;\n}\n\n.mt-5 {\n  margin-top: 5px;\n}\n\n.pl-20 {\n  padding-left: 20px;\n  padding-top: 20px;\n}\n\n.cus-chip-dis {\n  background: #D6ECA6;\n  border-radius: 30px;\n  width: 330px;\n  height: 53px;\n}\n\n.cus-chip {\n  background: #ABCD61;\n  border-radius: 30px;\n  width: 330px;\n  height: 53px;\n}\n\n.cus-label {\n  width: 100%;\n  color: #FFFF;\n  font-family: Poppins;\n  letter-spacing: 0.03em;\n  font-weight: 700;\n  font-size: 16px;\n}\n\n.cus-chip-social {\n  background: #FFFFFF;\n  border-radius: 30px;\n  width: 330px;\n  height: 53px;\n  border: 1px solid #DFDFDF;\n}\n\n.cus-label-social {\n  width: 100%;\n  color: #000000;\n  font-family: Poppins;\n  letter-spacing: 0.03em;\n  font-weight: 700;\n  font-size: 16px;\n}\n\n.separator {\n  display: flex;\n  align-items: center;\n}\n\n.separator .line {\n  height: 2px;\n  flex: 1;\n  background-color: #B6B6B6;\n}\n\n.separator p {\n  padding: 0 2rem;\n  color: #B6B6B6;\n  font-family: Poppins;\n}\n\nion-row > ion-col > ion-item > ion-input {\n  font-family: Poppins;\n  font-size: 14px;\n}\n\nion-item > ion-label {\n  font-family: Poppins;\n  font-size: 14px;\n}\n\nion-item > ion-icon {\n  font-size: 14px;\n}\n\n.eye {\n  position: absolute;\n  right: 10px;\n  top: 30px;\n}\n\nion-col {\n  font-family: Poppins;\n}\n\n.fs-12 {\n  font-size: 12px;\n}\n\n.mt-30 {\n  margin-top: 30px;\n}\n\n.social-chip-space {\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.text-danger {\n  color: red;\n}\n\nion-grid {\n  padding: 0px !important;\n  overflow-y: auto;\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ24tdXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UseUJBQUE7QUFBRjs7QUFHRTtFQUNFLFlBQUE7QUFBSjs7QUFHQTtFQUNFLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxtQkFBQTtBQUFGOztBQUdBO0VBQ0Usc0JBQUE7QUFBRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUVGOztBQUFBO0VBQ0UsZUFBQTtBQUdGOztBQURBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQUlGOztBQURBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBSUY7O0FBRkE7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFLRjs7QUFGQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUtGOztBQUZBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUFLRjs7QUFGQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUtGOztBQURBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBSUY7O0FBREE7RUFDRSxXQUFBO0VBQ0EsT0FBQTtFQUNBLHlCQUFBO0FBSUY7O0FBREE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FBSUY7O0FBREE7RUFDRSxvQkFBQTtFQUNBLGVBQUE7QUFJRjs7QUFEQTtFQUNFLG9CQUFBO0VBQ0EsZUFBQTtBQUlGOztBQURBO0VBRUUsZUFBQTtBQUdGOztBQURBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQUlGOztBQURBO0VBQ0Usb0JBQUE7QUFJRjs7QUFGQTtFQUNFLGVBQUE7QUFLRjs7QUFIQTtFQUNFLGdCQUFBO0FBTUY7O0FBSkE7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7QUFPRjs7QUFKQTtFQUNFLFVBQUE7QUFPRjs7QUFMQTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBUUYiLCJmaWxlIjoic2lnbi11cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5ibHVlQmc+IGlvbi1jb2x7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3MDdCQkQ7XG59XG46aG9zdHtcbiAgaW9uLWNoZWNrYm94e1xuICAgIC0tc2l6ZTogMTVweDtcbiAgfVxufVxuLm10LTUwe1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4ubWItNTB7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cbi53LTEwMHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cbi50ZXh0LWNlbnRlcntcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmN1cy1jYXJke1xuICBtYXJnaW4tdG9wOiAtNTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5tdC01e1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4ucGwtMjB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG5cbi5jdXMtY2hpcC1kaXMge1xuICBiYWNrZ3JvdW5kOiAjRDZFQ0E2O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICB3aWR0aDogMzMwcHg7XG4gIGhlaWdodDogNTNweDtcbn1cbi5jdXMtY2hpcHtcbiAgYmFja2dyb3VuZDogI0FCQ0Q2MTtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgd2lkdGg6IDMzMHB4O1xuICBoZWlnaHQ6IDUzcHg7XG59XG5cbi5jdXMtbGFiZWx7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogICNGRkZGO1xuICBmb250LWZhbWlseTogUG9wcGlucztcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDNlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uY3VzLWNoaXAtc29jaWFse1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICB3aWR0aDogMzMwcHg7XG4gIGhlaWdodDogNTNweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0RGREZERjtcbn1cblxuLmN1cy1sYWJlbC1zb2NpYWx7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogICMwMDAwMDA7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBsZXR0ZXItc3BhY2luZzogMC4wM2VtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDE2cHg7XG5cbn1cblxuLnNlcGFyYXRvcntcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNlcGFyYXRvciAubGluZXtcbiAgaGVpZ2h0OiAycHg7XG4gIGZsZXg6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6ICNCNkI2QjY7XG59XG5cbi5zZXBhcmF0b3IgcHtcbiAgcGFkZGluZzogMCAycmVtO1xuICBjb2xvcjogI0I2QjZCNjtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG59XG5cbmlvbi1yb3cgPmlvbi1jb2wgPiBpb24taXRlbSA+IGlvbi1pbnB1dHtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuaW9uLWl0ZW0gPiBpb24tbGFiZWx7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbmlvbi1pdGVtID4gaW9uLWljb257XG4gIC8vIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uZXlle1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xuICB0b3A6IDMwcHg7XG59XG5cbmlvbi1jb2x7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xufVxuLmZzLTEye1xuICBmb250LXNpemU6IDEycHg7XG59XG4ubXQtMzB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG4uc29jaWFsLWNoaXAtc3BhY2V7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuXG4udGV4dC1kYW5nZXJ7XG4gIGNvbG9yOiByZWQ7XG59XG5pb24tZ3JpZCB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBtYXJnaW46IDBweFxufVxuIl19 */");

/***/ }),

/***/ 37900:
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/sign-up/sign-up.page.html ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n    <ion-grid>\n        <ion-row class=\"blueBg\">\n            <ion-col>\n                <div class=\"text-center mb-50\">\n                    <img class=\"mt-50 mb-10\" width=\"277\" height=\"78\" src=\"assets/logo.png\" alt=\"\" />\n                </div>\n            </ion-col>\n        </ion-row>\n\n        <ion-grid class=\"cus-card\">\n\n            <form [formGroup]=\"profileForm\">\n                <ion-row>\n                    <ion-col class=\"pl-20\">\n                        <div>\n                            <ion-icon [routerLink]=\"['/home']\" size=\"large\" name=\"close-outline\"></ion-icon>\n                        </div>\n                    </ion-col>\n                </ion-row>\n\n                <ion-row class=\"mt-10\">\n                    <ion-col>\n                        <ion-item>\n                            <ion-label position=\"floating\">\n                                <ion-icon name=\"person\" slot=\"start\"></ion-icon>\n                                Username\n                            </ion-label>\n                            <ion-input formControlName=\"user_name\"></ion-input>\n                        </ion-item>\n                    </ion-col>\n                </ion-row>\n                <div *ngIf=\"getProfileFormError()?.user_name.touched && getProfileFormError()?.user_name.errors\">\n                    <p class=\"pl-20 text-danger\" *ngIf=\"getProfileFormError()?.user_name.errors.required\">\n                        User Name is required\n                    </p>\n                    <p class=\"pl-20 text-danger\" *ngIf=\"getProfileFormError()?.user_name.errors.minlength\">\n                        Minimum Length is {{getProfileFormError()?.user_name.errors.minlength.requiredLength}}\n                    </p>\n                    <p class=\"pl-20 text-danger\" *ngIf=\"getProfileFormError()?.user_name.errors.maxlength\">\n                        Maximum Length is {{getProfileFormError()?.user_name.errors.maxlength.requiredLength}}\n                    </p>\n                </div>\n\n                <ion-row>\n                    <ion-col>\n                        <ion-item>\n                            <ion-label position=\"floating\">\n                                <ion-icon name=\"mail\" slot=\"start\"></ion-icon>\n                                Email\n                            </ion-label>\n                            <ion-input type=\"email\" formControlName=\"email\"></ion-input>\n                        </ion-item>\n                    </ion-col>\n                </ion-row>\n                <div *ngIf=\"getProfileFormError()?.email.touched && getProfileFormError()?.email.errors\">\n                    <p class=\"pl-20 text-danger\" *ngIf=\"getProfileFormError()?.email.errors.required\">\n                        Email is required\n                    </p>\n                    <p class=\"pl-20 text-danger\" *ngIf=\"getProfileFormError()?.email.errors.email\">\n                        Email is incorrect\n                    </p>\n                </div>\n\n                <ion-row>\n                    <ion-col>\n                        <ion-item>\n                            <ion-label position=\"floating\">\n                                <ion-icon name=\"lock-closed\"></ion-icon>\n                                Password\n                            </ion-label>\n                            <ion-input [type]=passwordType formControlName=\"password\"></ion-input>\n                            <ion-icon *ngIf=\"isSeen\" (click)=\"passwordSeenStatus()\" class=\"eye\" name=\"eye-outline\" slot=\"end\">\n                            </ion-icon>\n                            <ion-icon *ngIf=\"!isSeen\" (click)=\"passwordSeenStatus()\" class=\"eye\" name=\"eye-off-outline\" slot=\"end\">\n                            </ion-icon>\n                        </ion-item>\n                    </ion-col>\n                </ion-row>\n\n                <div *ngIf=\"getProfileFormError()?.password.touched && getProfileFormError()?.password.errors\">\n                    <p class=\"pl-20 text-danger\" *ngIf=\"getProfileFormError()?.password.errors.required\">\n                        Password is required\n                    </p>\n                    <p class=\"pl-20 text-danger\" *ngIf=\"getProfileFormError()?.password.errors.minlength\">\n                        Minimum Length is {{getProfileFormError()?.password.errors.minlength.requiredLength}}\n                    </p>\n                </div>\n\n                <ion-row>\n                    <ion-col>\n                        <ion-item>\n                            <ion-label position=\"floating\">Referral Code (Optional)</ion-label>\n                            <ion-input formControlName=\"referal_code\"></ion-input>\n                        </ion-item>\n                    </ion-col>\n                </ion-row>\n\n                <ion-row class=\"mt-5\">\n                    <ion-col size=\"1\" class=\"pl-20\">\n                        <ion-checkbox (ionChange)=\"onClick($event)\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"pfCheckBox\" name=\"pfCheckBox\"></ion-checkbox>\n                    </ion-col>\n                    <ion-col class=\"pl-20 fs-12\" size=\"11\">\n                        By creating an account, I agree to the Terms of Service and Privacy\n                        Policy located, respectively, here.\n                    </ion-col>\n                </ion-row>\n            </form>\n        </ion-grid>\n\n        <ion-row class=\"mt-30\">\n            <ion-col class=\"text-center\">\n                <div *ngIf=\"showSignUpLoader\" class=\"loader1\"></div>\n                <ion-chip *ngIf=\"!showSignUpLoader\" (click)=\"onSignUp()\" [ngClass]=\"profileForm.valid && pfCheckBox  ? 'cus-chip' : 'cus-chip-dis'\">\n                    <ion-label class=\"text-center cus-label\">\n                        SIGN UP NOW\n                    </ion-label>\n                </ion-chip>\n            </ion-col>\n        </ion-row>\n\n\n        <ion-row>\n            <ion-col>\n                <div class=\"separator\">\n                    <div class=\"line\"></div>\n                    <p>OR</p>\n                    <div class=\"line\"></div>\n                </div>\n            </ion-col>\n        </ion-row>\n\n\n        <ion-row>\n            <ion-col class=\"text-center\">\n                <ion-chip class=\"cus-chip-social\" (click)=\"googleSignIn()\">\n                    <ion-label class=\" text-center cus-label-social social-chip-space\">\n                        <ion-icon name=\"logo-google\"></ion-icon>\n                        CONTINUE WITH GOOGLE\n                    </ion-label>\n                </ion-chip>\n            </ion-col>\n            <ion-col class=\"text-center\" *ngIf=\"isApple\">\n                <ion-chip class=\"cus-chip-social\" (click)=\"AppleSignIn()\">\n                    <ion-label class=\"text-center cus-label-social social-chip-space\">\n                        <ion-icon name=\"logo-apple\"></ion-icon>\n                        CONTINUE WITH Apple\n                    </ion-label>\n                </ion-chip>\n            </ion-col>\n            <ion-col class=\"text-center\">\n               <div style=\"width: 100%; height: 200px;\"></div>\n            </ion-col>\n        </ion-row>\n\n        <!-- <ion-row>\n      <ion-col class=\"text-center\">\n        <ion-chip class=\"cus-chip-social\">\n          <ion-label class=\"text-center cus-label-social social-chip-space\">\n            <ion-icon src=\"assets/fb-logo.svg\"></ion-icon>\n            CONTINUE WITH FACEBOOK\n          </ion-label>\n        </ion-chip>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col class=\"text-center\">\n        <ion-chip class=\"cus-chip-social\">\n          <ion-label class=\"text-center cus-label-social social-chip-space\">\n            <ion-icon name=\"logo-apple\"></ion-icon>\n            CONTINUE WITH APPLE\n          </ion-label>\n        </ion-chip>\n      </ion-col>\n    </ion-row> -->\n\n    </ion-grid>\n</ion-content>\n\n<!--\n  <div>\n    <div class=\"upper\">\n      <img class=\"mt-50 mb-10\" width=\"277\" height=\"78\" src=\"assets/logo.png\" alt=\"\">\n    </div>\n\n    <div class=\"lower\">\n    <ion-label>asa</ion-label><br>\n    <ion-label>asa</ion-label><br>\n    <ion-label>asa</ion-label><br>\n    <ion-label>asa</ion-label><br>\n    <ion-label>asa</ion-label>\n    </div>\n  </div> -->\n");

/***/ })

}]);
//# sourceMappingURL=src_app_auth_sign-up_sign-up_module_ts.js.map