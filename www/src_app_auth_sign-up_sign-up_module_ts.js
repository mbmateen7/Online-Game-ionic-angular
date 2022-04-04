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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _sign_up_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign-up-routing.module */ 32436);
/* harmony import */ var _sign_up_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-up.page */ 14230);
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ 19342);









let SignUpPageModule = class SignUpPageModule {
};
SignUpPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _sign_up_routing_module__WEBPACK_IMPORTED_MODULE_0__.SignUpPageRoutingModule
        ],
        declarations: [_sign_up_page__WEBPACK_IMPORTED_MODULE_1__.SignUpPage],
        providers: [_ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_2__.GooglePlus]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_sign_up_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./sign-up.page.html */ 37900);
/* harmony import */ var _sign_up_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-up.page.scss */ 81701);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_service_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/rest.service */ 90421);
/* harmony import */ var _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/push-notifications */ 98748);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ 88259);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ 19342);










let SignUpPage = class SignUpPage {
    constructor(restService, router, googlePlus) {
        this.restService = restService;
        this.router = router;
        this.googlePlus = googlePlus;
        this.showSignUpLoader = false;
        this.isSeen = false;
        this.passwordType = 'password';
    }
    ngOnInit() {
        this.pfCheckBox = false;
        this.profileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
            user_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(4)]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(6),
            ]),
            referal_code: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('')
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
    onSignUp2(data) {
        this.showSignUpLoader = true;
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
    getProfileFormError() {
        return this.profileForm.controls;
    }
    onSignUp() {
        this.showSignUpLoader = true;
        this.restService.postRequest('users/register', this.profileForm.value).subscribe((res) => {
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
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_5__.GooglePlus }
];
SignUpPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".blueBg > ion-col {\n  background-color: #707BBD;\n}\n\n:host ion-checkbox {\n  --size: 15px;\n}\n\n.mt-50 {\n  margin-top: 50px;\n}\n\n.mb-50 {\n  margin-bottom: 50px;\n}\n\n.w-100 {\n  width: 100% !important;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.cus-card {\n  margin-top: -50px;\n  position: relative;\n  border-radius: 50px;\n  background-color: white;\n}\n\n.mt-5 {\n  margin-top: 5px;\n}\n\n.pl-20 {\n  padding-left: 20px;\n}\n\n.cus-chip-dis {\n  background: #D6ECA6;\n  border-radius: 30px;\n  width: 330px;\n  height: 53px;\n}\n\n.cus-chip {\n  background: #ABCD61;\n  border-radius: 30px;\n  width: 330px;\n  height: 53px;\n}\n\n.cus-label {\n  width: 100%;\n  color: #FFFF;\n  font-family: Poppins;\n  letter-spacing: 0.03em;\n  font-weight: 700;\n  font-size: 16px;\n}\n\n.cus-chip-social {\n  background: #FFFFFF;\n  border-radius: 30px;\n  width: 330px;\n  height: 53px;\n  border: 1px solid #DFDFDF;\n}\n\n.cus-label-social {\n  width: 100%;\n  color: #000000;\n  font-family: Poppins;\n  letter-spacing: 0.03em;\n  font-weight: 700;\n  font-size: 16px;\n}\n\n.separator {\n  display: flex;\n  align-items: center;\n}\n\n.separator .line {\n  height: 2px;\n  flex: 1;\n  background-color: #B6B6B6;\n}\n\n.separator p {\n  padding: 0 2rem;\n  color: #B6B6B6;\n  font-family: Poppins;\n}\n\nion-row > ion-col > ion-item > ion-input {\n  font-family: Poppins;\n  font-size: 14px;\n}\n\nion-item > ion-label {\n  font-family: Poppins;\n  font-size: 14px;\n}\n\nion-item > ion-icon {\n  font-size: 14px;\n}\n\n.eye {\n  position: absolute;\n  right: 10px;\n  top: 30px;\n}\n\nion-col {\n  font-family: Poppins;\n}\n\n.fs-12 {\n  font-size: 12px;\n}\n\n.mt-30 {\n  margin-top: 30px;\n}\n\n.social-chip-space {\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.text-danger {\n  color: red;\n}\n\nion-grid {\n  padding: 0px !important;\n  overflow-y: auto;\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ24tdXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UseUJBQUE7QUFBRjs7QUFHRTtFQUNFLFlBQUE7QUFBSjs7QUFHQTtFQUNFLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxtQkFBQTtBQUFGOztBQUdBO0VBQ0Usc0JBQUE7QUFBRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUVGOztBQUFBO0VBQ0UsZUFBQTtBQUdGOztBQURBO0VBQ0Usa0JBQUE7QUFJRjs7QUFEQTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUlGOztBQUZBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBS0Y7O0FBRkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFLRjs7QUFGQTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FBS0Y7O0FBRkE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFLRjs7QUFEQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUlGOztBQURBO0VBQ0UsV0FBQTtFQUNBLE9BQUE7RUFDQSx5QkFBQTtBQUlGOztBQURBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQUlGOztBQURBO0VBQ0Usb0JBQUE7RUFDQSxlQUFBO0FBSUY7O0FBREE7RUFDRSxvQkFBQTtFQUNBLGVBQUE7QUFJRjs7QUFEQTtFQUVFLGVBQUE7QUFHRjs7QUFEQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFJRjs7QUFEQTtFQUNFLG9CQUFBO0FBSUY7O0FBRkE7RUFDRSxlQUFBO0FBS0Y7O0FBSEE7RUFDRSxnQkFBQTtBQU1GOztBQUpBO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0FBT0Y7O0FBSkE7RUFDRSxVQUFBO0FBT0Y7O0FBTEE7RUFDRSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQVFGIiwiZmlsZSI6InNpZ24tdXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5ibHVlQmc+IGlvbi1jb2x7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcwN0JCRDtcclxufVxyXG46aG9zdHtcclxuICBpb24tY2hlY2tib3h7XHJcbiAgICAtLXNpemU6IDE1cHg7XHJcbiAgfVxyXG59XHJcbi5tdC01MHtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcblxyXG4ubWItNTB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxufVxyXG5cclxuLnctMTAwe1xyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuLnRleHQtY2VudGVye1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uY3VzLWNhcmR7XHJcbiAgbWFyZ2luLXRvcDogLTUwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuLm10LTV7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcbi5wbC0yMHtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbi5jdXMtY2hpcC1kaXMge1xyXG4gIGJhY2tncm91bmQ6ICNENkVDQTY7XHJcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICB3aWR0aDogMzMwcHg7XHJcbiAgaGVpZ2h0OiA1M3B4O1xyXG59XHJcbi5jdXMtY2hpcHtcclxuICBiYWNrZ3JvdW5kOiAjQUJDRDYxO1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgd2lkdGg6IDMzMHB4O1xyXG4gIGhlaWdodDogNTNweDtcclxufVxyXG5cclxuLmN1cy1sYWJlbHtcclxuICB3aWR0aDogMTAwJTtcclxuICBjb2xvcjogICNGRkZGO1xyXG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAzZW07XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5jdXMtY2hpcC1zb2NpYWx7XHJcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gIHdpZHRoOiAzMzBweDtcclxuICBoZWlnaHQ6IDUzcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI0RGREZERjtcclxufVxyXG5cclxuLmN1cy1sYWJlbC1zb2NpYWx7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgY29sb3I6ICAjMDAwMDAwO1xyXG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAzZW07XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcblxyXG59XHJcblxyXG4uc2VwYXJhdG9ye1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnNlcGFyYXRvciAubGluZXtcclxuICBoZWlnaHQ6IDJweDtcclxuICBmbGV4OiAxO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNCNkI2QjY7XHJcbn1cclxuXHJcbi5zZXBhcmF0b3IgcHtcclxuICBwYWRkaW5nOiAwIDJyZW07XHJcbiAgY29sb3I6ICNCNkI2QjY7XHJcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbn1cclxuXHJcbmlvbi1yb3cgPmlvbi1jb2wgPiBpb24taXRlbSA+IGlvbi1pbnB1dHtcclxuICBmb250LWZhbWlseTogUG9wcGlucztcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbmlvbi1pdGVtID4gaW9uLWxhYmVse1xyXG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuaW9uLWl0ZW0gPiBpb24taWNvbntcclxuICAvLyBmb250LWZhbWlseTogUG9wcGlucztcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLmV5ZXtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbiAgdG9wOiAzMHB4O1xyXG59XHJcblxyXG5pb24tY29se1xyXG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG59XHJcbi5mcy0xMntcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLm10LTMwe1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuLnNvY2lhbC1jaGlwLXNwYWNle1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbn1cclxuXHJcbi50ZXh0LWRhbmdlcntcclxuICBjb2xvcjogcmVkO1xyXG59XHJcbmlvbi1ncmlkIHtcclxuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIG1hcmdpbjogMHB4XHJcbn1cclxuIl19 */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <ion-grid>\r\n    <ion-row class=\"blueBg\">\r\n      <ion-col>\r\n        <div class=\"text-center mb-50\">\r\n          <img class=\"mt-50 mb-10\" width=\"277\" height=\"78\" src=\"assets/logo.png\" alt=\"\" />\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-grid class=\"cus-card\">\r\n\r\n      <form [formGroup]=\"profileForm\">\r\n        <ion-row>\r\n          <ion-col class=\"pl-20\">\r\n            <div>\r\n              <ion-icon [routerLink]=\"['/home']\" size=\"large\" name=\"close-outline\"></ion-icon>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"mt-10\">\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">\r\n                <ion-icon name=\"person\" slot=\"start\"></ion-icon>\r\n                Username\r\n              </ion-label>\r\n              <ion-input formControlName=\"user_name\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n        <div *ngIf=\"getProfileFormError()?.user_name.touched && getProfileFormError()?.user_name.errors\">\r\n          <p class=\"pl-20 text-danger\" *ngIf=\"getProfileFormError()?.user_name.errors.required\">\r\n            User Name is required\r\n          </p>\r\n          <p class=\"pl-20 text-danger\" *ngIf=\"getProfileFormError()?.user_name.errors.minlength\">\r\n            Minimum Length is {{getProfileFormError()?.user_name.errors.minlength.requiredLength}}\r\n          </p>\r\n        </div>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">\r\n                <ion-icon name=\"mail\" slot=\"start\"></ion-icon>\r\n                Email\r\n              </ion-label>\r\n              <ion-input formControlName=\"email\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n        <div *ngIf=\"getProfileFormError()?.email.touched && getProfileFormError()?.email.errors\">\r\n          <p class=\"pl-20 text-danger\" *ngIf=\"getProfileFormError()?.email.errors.required\">\r\n            Email is required\r\n          </p>\r\n          <p class=\"pl-20 text-danger\" *ngIf=\"getProfileFormError()?.email.errors.email\">\r\n            Email is incorrect\r\n          </p>\r\n        </div>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">\r\n                <ion-icon name=\"lock-closed\"></ion-icon>\r\n                Password\r\n              </ion-label>\r\n              <ion-input [type]=passwordType formControlName=\"password\"></ion-input>\r\n              <ion-icon *ngIf=\"isSeen\" (click)=\"passwordSeenStatus()\" class=\"eye\" name=\"eye-outline\" slot=\"end\">\r\n              </ion-icon>\r\n              <ion-icon *ngIf=\"!isSeen\" (click)=\"passwordSeenStatus()\" class=\"eye\" name=\"eye-off-outline\" slot=\"end\">\r\n              </ion-icon>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <div *ngIf=\"getProfileFormError()?.password.touched && getProfileFormError()?.password.errors\">\r\n          <p class=\"pl-20 text-danger\" *ngIf=\"getProfileFormError()?.password.errors.required\">\r\n            Password is required\r\n          </p>\r\n          <p class=\"pl-20 text-danger\" *ngIf=\"getProfileFormError()?.password.errors.minlength\">\r\n            Minimum Length is {{getProfileFormError()?.password.errors.minlength.requiredLength}}\r\n          </p>\r\n        </div>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Referral Code (Optional)</ion-label>\r\n              <ion-input formControlName=\"referal_code\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"mt-5\">\r\n          <ion-col size=\"1\" class=\"pl-20\">\r\n            <ion-checkbox (ionChange)=\"onClick($event)\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"pfCheckBox\"\r\n              name=\"pfCheckBox\"></ion-checkbox>\r\n          </ion-col>\r\n          <ion-col class=\"pl-20 fs-12\" size=\"11\">\r\n            By creating an account, I agree to the Terms of Service and Privacy\r\n            Policy located, respectively, here and here.\r\n          </ion-col>\r\n        </ion-row>\r\n      </form>\r\n    </ion-grid>\r\n\r\n    <ion-row class=\"mt-30\">\r\n      <ion-col class=\"text-center\">\r\n        <div *ngIf=\"showSignUpLoader\" class=\"loader1\"></div>\r\n        <ion-chip *ngIf=\"!showSignUpLoader\" (click)=\"onSignUp()\"\r\n          [ngClass]=\"profileForm.valid && pfCheckBox  ? 'cus-chip' : 'cus-chip-dis'\">\r\n          <ion-label class=\"text-center cus-label\">\r\n            SIGN UP NOW\r\n          </ion-label>\r\n        </ion-chip>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <div class=\"separator\">\r\n          <div class=\"line\"></div>\r\n          <p>OR</p>\r\n          <div class=\"line\"></div>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n\r\n    <ion-row>\r\n      <ion-col class=\"text-center\">\r\n        <ion-chip class=\"cus-chip-social\" (click)=\"googleSignIn()\">\r\n          <ion-label class=\" text-center cus-label-social social-chip-space\">\r\n            <ion-icon name=\"logo-google\"></ion-icon>\r\n            CONTINUE WITH GOOGLE\r\n          </ion-label>\r\n        </ion-chip>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <!-- <ion-row>\r\n      <ion-col class=\"text-center\">\r\n        <ion-chip class=\"cus-chip-social\">\r\n          <ion-label class=\"text-center cus-label-social social-chip-space\">\r\n            <ion-icon src=\"assets/fb-logo.svg\"></ion-icon>\r\n            CONTINUE WITH FACEBOOK\r\n          </ion-label>\r\n        </ion-chip>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col class=\"text-center\">\r\n        <ion-chip class=\"cus-chip-social\">\r\n          <ion-label class=\"text-center cus-label-social social-chip-space\">\r\n            <ion-icon name=\"logo-apple\"></ion-icon>\r\n            CONTINUE WITH APPLE\r\n          </ion-label>\r\n        </ion-chip>\r\n      </ion-col>\r\n    </ion-row> -->\r\n\r\n  </ion-grid>\r\n</ion-content>\r\n\r\n<!--\r\n  <div>\r\n    <div class=\"upper\">\r\n      <img class=\"mt-50 mb-10\" width=\"277\" height=\"78\" src=\"assets/logo.png\" alt=\"\">\r\n    </div>\r\n\r\n    <div class=\"lower\">\r\n    <ion-label>asa</ion-label><br>\r\n    <ion-label>asa</ion-label><br>\r\n    <ion-label>asa</ion-label><br>\r\n    <ion-label>asa</ion-label><br>\r\n    <ion-label>asa</ion-label>\r\n    </div>\r\n  </div> -->");

/***/ })

}]);
//# sourceMappingURL=src_app_auth_sign-up_sign-up_module_ts.js.map