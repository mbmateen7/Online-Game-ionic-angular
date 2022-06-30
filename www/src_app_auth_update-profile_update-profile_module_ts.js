(self["webpackChunkpic_playce"] = self["webpackChunkpic_playce"] || []).push([["src_app_auth_update-profile_update-profile_module_ts"],{

/***/ 61632:
/*!**********************************************************************!*\
  !*** ./src/app/auth/update-profile/update-profile-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateProfilePageRoutingModule": () => (/* binding */ UpdateProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _update_profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-profile.page */ 15053);




const routes = [
    {
        path: '',
        component: _update_profile_page__WEBPACK_IMPORTED_MODULE_0__.UpdateProfilePage
    }
];
let UpdateProfilePageRoutingModule = class UpdateProfilePageRoutingModule {
};
UpdateProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UpdateProfilePageRoutingModule);



/***/ }),

/***/ 17351:
/*!**************************************************************!*\
  !*** ./src/app/auth/update-profile/update-profile.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateProfilePageModule": () => (/* binding */ UpdateProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _update_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-profile-routing.module */ 61632);
/* harmony import */ var _update_profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-profile.page */ 15053);








let UpdateProfilePageModule = class UpdateProfilePageModule {
};
UpdateProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _update_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.UpdateProfilePageRoutingModule
        ],
        declarations: [_update_profile_page__WEBPACK_IMPORTED_MODULE_1__.UpdateProfilePage]
    })
], UpdateProfilePageModule);



/***/ }),

/***/ 15053:
/*!************************************************************!*\
  !*** ./src/app/auth/update-profile/update-profile.page.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateProfilePage": () => (/* binding */ UpdateProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_update_profile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./update-profile.page.html */ 29636);
/* harmony import */ var _update_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-profile.page.scss */ 52689);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_service_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/rest.service */ 90421);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ 88259);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);








let UpdateProfilePage = class UpdateProfilePage {
    constructor(restService, router) {
        this.restService = restService;
        this.router = router;
        this.showSignUpLoader = false;
    }
    ngOnInit() {
        this.user = JSON.parse(localStorage.getItem('user'));
        this.pfCheckBox = false;
        this.profileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            // user_name: new FormControl('', [Validators.required, Validators.minLength(4)]),
            // email: new FormControl('', [Validators.required, Validators.email]),
            // password: new FormControl('', [
            //   Validators.required,
            //   Validators.minLength(6),
            // ]),
            referal_code: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            phone_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
        });
        this.profileForm.patchValue({
            // user_name: this.user.user_name,
            // email: this.user.email,
            phone_number: this.user.phone_number,
        });
    }
    getProfileFormError() {
        return this.profileForm.controls;
    }
    onSignUp() {
        this.showSignUpLoader = true;
        this.restService
            .putRequestToken('users/update', this.profileForm.value)
            .subscribe((res) => {
            if (res) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
                    title: '<div><h5>Success!</h5></div>',
                    text: 'Updated',
                    confirmButtonText: 'Ok',
                    confirmButtonColor: '#99C43C',
                });
                // console.log('This is res', res.data);
                // localStorage.setItem('token', res.token);
                // localStorage.setItem('user', JSON.stringify(res.data));
                this.showSignUpLoader = false;
                this.router.navigate(['main/setting']);
            }
        }, (err) => {
            this.showSignUpLoader = false;
            // console.log('This is error', err.error);
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
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
    onGoToSettingPage() {
        this.router.navigate(['main/setting']);
    }
};
UpdateProfilePage.ctorParameters = () => [
    { type: src_app_service_rest_service__WEBPACK_IMPORTED_MODULE_2__.RestService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
UpdateProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-update-profile',
        template: _raw_loader_update_profile_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_update_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], UpdateProfilePage);



/***/ }),

/***/ 52689:
/*!**************************************************************!*\
  !*** ./src/app/auth/update-profile/update-profile.page.scss ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".blueBg > ion-col {\n  background-color: #707BBD;\n}\n\n:host ion-checkbox {\n  --size: 15px;\n}\n\n.mt-50 {\n  margin-top: 50px;\n}\n\n.mb-50 {\n  margin-bottom: 50px;\n}\n\n.w-100 {\n  width: 100% !important;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.cus-card {\n  margin-top: -50px;\n  position: relative;\n  border-radius: 50px;\n  background-color: white;\n}\n\n.mt-5 {\n  margin-top: 5px;\n}\n\n.pl-20 {\n  padding-left: 20px;\n}\n\n.cus-chip-dis {\n  background: #D6ECA6;\n  border-radius: 30px;\n  width: 330px;\n  height: 53px;\n}\n\n.cus-chip {\n  background: #ABCD61;\n  border-radius: 30px;\n  width: 330px;\n  height: 53px;\n}\n\n.cus-label {\n  width: 100%;\n  color: #FFFF;\n  font-family: Poppins;\n  letter-spacing: 0.03em;\n  font-weight: 700;\n  font-size: 16px;\n}\n\n.cus-chip-social {\n  background: #FFFFFF;\n  border-radius: 30px;\n  width: 330px;\n  height: 53px;\n  border: 1px solid #DFDFDF;\n}\n\n.cus-label-social {\n  width: 100%;\n  color: #000000;\n  font-family: Poppins;\n  letter-spacing: 0.03em;\n  font-weight: 700;\n  font-size: 16px;\n}\n\n.separator {\n  display: flex;\n  align-items: center;\n}\n\n.separator .line {\n  height: 2px;\n  flex: 1;\n  background-color: #B6B6B6;\n}\n\n.separator p {\n  padding: 0 2rem;\n  color: #B6B6B6;\n  font-family: Poppins;\n}\n\nion-row > ion-col > ion-item > ion-input {\n  font-family: Poppins;\n  font-size: 14px;\n}\n\nion-item > ion-label {\n  font-family: Poppins;\n  font-size: 14px;\n}\n\nion-item > ion-icon {\n  font-size: 14px;\n}\n\n.eye {\n  position: absolute;\n  right: 10px;\n  top: 30px;\n}\n\nion-col {\n  font-family: Poppins;\n}\n\n.fs-12 {\n  font-size: 12px;\n}\n\n.mt-30 {\n  margin-top: 30px;\n}\n\n.social-chip-space {\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.text-danger {\n  color: red;\n}\n\nion-grid {\n  padding: 0px !important;\n  overflow-y: auto;\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwZGF0ZS1wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0FBQ0Y7O0FBR0U7RUFDRSxZQUFBO0FBQUo7O0FBSUE7RUFDRSxnQkFBQTtBQURGOztBQUlBO0VBQ0UsbUJBQUE7QUFERjs7QUFJQTtFQUNFLHNCQUFBO0FBREY7O0FBSUE7RUFDRSxrQkFBQTtBQURGOztBQUlBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFERjs7QUFJQTtFQUNFLGVBQUE7QUFERjs7QUFJQTtFQUNFLGtCQUFBO0FBREY7O0FBSUE7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFERjs7QUFJQTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQURGOztBQUlBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBREY7O0FBSUE7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQURGOztBQUlBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBREY7O0FBS0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFGRjs7QUFLQTtFQUNFLFdBQUE7RUFDQSxPQUFBO0VBQ0EseUJBQUE7QUFGRjs7QUFLQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUFGRjs7QUFLQTtFQUNFLG9CQUFBO0VBQ0EsZUFBQTtBQUZGOztBQUtBO0VBQ0Usb0JBQUE7RUFDQSxlQUFBO0FBRkY7O0FBS0E7RUFFRSxlQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBSEY7O0FBTUE7RUFDRSxvQkFBQTtBQUhGOztBQU1BO0VBQ0UsZUFBQTtBQUhGOztBQU1BO0VBQ0UsZ0JBQUE7QUFIRjs7QUFNQTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtBQUhGOztBQU1BO0VBQ0UsVUFBQTtBQUhGOztBQU1BO0VBQ0UsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFIRiIsImZpbGUiOiJ1cGRhdGUtcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmx1ZUJnPmlvbi1jb2wge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzA3QkJEO1xufVxuXG46aG9zdCB7XG4gIGlvbi1jaGVja2JveCB7XG4gICAgLS1zaXplOiAxNXB4O1xuICB9XG59XG5cbi5tdC01MCB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbi5tYi01MCB7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cbi53LTEwMCB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0LWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmN1cy1jYXJkIHtcbiAgbWFyZ2luLXRvcDogLTUwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5tdC01IHtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4ucGwtMjAge1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG5cbi5jdXMtY2hpcC1kaXMge1xuICBiYWNrZ3JvdW5kOiAjRDZFQ0E2O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICB3aWR0aDogMzMwcHg7XG4gIGhlaWdodDogNTNweDtcbn1cblxuLmN1cy1jaGlwIHtcbiAgYmFja2dyb3VuZDogI0FCQ0Q2MTtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgd2lkdGg6IDMzMHB4O1xuICBoZWlnaHQ6IDUzcHg7XG59XG5cbi5jdXMtbGFiZWwge1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICNGRkZGO1xuICBmb250LWZhbWlseTogUG9wcGlucztcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDNlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uY3VzLWNoaXAtc29jaWFsIHtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgd2lkdGg6IDMzMHB4O1xuICBoZWlnaHQ6IDUzcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNERkRGREY7XG59XG5cbi5jdXMtbGFiZWwtc29jaWFsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBmb250LWZhbWlseTogUG9wcGlucztcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDNlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuXG59XG5cbi5zZXBhcmF0b3Ige1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2VwYXJhdG9yIC5saW5lIHtcbiAgaGVpZ2h0OiAycHg7XG4gIGZsZXg6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6ICNCNkI2QjY7XG59XG5cbi5zZXBhcmF0b3IgcCB7XG4gIHBhZGRpbmc6IDAgMnJlbTtcbiAgY29sb3I6ICNCNkI2QjY7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xufVxuXG5pb24tcm93Pmlvbi1jb2w+aW9uLWl0ZW0+aW9uLWlucHV0IHtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuaW9uLWl0ZW0+aW9uLWxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuaW9uLWl0ZW0+aW9uLWljb24ge1xuICAvLyBmb250LWZhbWlseTogUG9wcGlucztcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uZXllIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgdG9wOiAzMHB4O1xufVxuXG5pb24tY29sIHtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG59XG5cbi5mcy0xMiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLm10LTMwIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLnNvY2lhbC1jaGlwLXNwYWNlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG5cbi50ZXh0LWRhbmdlciB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbmlvbi1ncmlkIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIG1hcmdpbjogMHB4XG59XG4iXX0= */");

/***/ }),

/***/ 29636:
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/update-profile/update-profile.page.html ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <ion-grid>\n    <ion-row class=\"blueBg\">\n      <ion-col>\n        <div class=\"text-center mb-50\">\n          <img class=\"mt-50 mb-10\" width=\"277\" height=\"78\" src=\"assets/logo.png\" alt=\"\" />\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-grid class=\"cus-card\">\n\n      <form [formGroup]=\"profileForm\">\n        <ion-row>\n          <ion-col class=\"pl-20\">\n            <div>\n              <ion-icon (click)=\"onGoToSettingPage()\" size=\"large\" name=\"close-outline\"></ion-icon>\n            </div>\n          </ion-col>\n        </ion-row>\n\n        <!-- <ion-row class=\"mt-10\">\n          <ion-col>\n            <ion-item>\n              <ion-label position=\"floating\">\n                <ion-icon name=\"person\" slot=\"start\"></ion-icon>\n                Username\n              </ion-label>\n              <ion-input formControlName=\"user_name\"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <div *ngIf=\"getProfileFormError()?.user_name.touched && getProfileFormError()?.user_name.errors\">\n          <p class=\"pl-20 text-danger\" *ngIf=\"getProfileFormError()?.user_name.errors.required\">\n            User Name is required\n          </p>\n          <p class=\"pl-20 text-danger\" *ngIf=\"getProfileFormError()?.user_name.errors.minlength\">\n            Minimum Length is {{getProfileFormError()?.user_name.errors.minlength.requiredLength}}\n          </p>\n        </div>\n\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label position=\"floating\">\n                <ion-icon name=\"mail\" slot=\"start\"></ion-icon>\n                Email\n              </ion-label>\n              <ion-input formControlName=\"email\"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <div *ngIf=\"getProfileFormError()?.email.touched && getProfileFormError()?.email.errors\">\n          <p class=\"pl-20 text-danger\" *ngIf=\"getProfileFormError()?.email.errors.required\">\n            Email is required\n          </p>\n          <p class=\"pl-20 text-danger\" *ngIf=\"getProfileFormError()?.email.errors.email\">\n            Email is incorrect\n          </p>\n        </div> -->\n\n        <!-- <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label position=\"floating\">\n                <ion-icon name=\"lock-closed\"></ion-icon>\n                Password\n              </ion-label>\n              <ion-icon class=\"eye\" name=\"eye-off-outline\" slot=\"end\"></ion-icon>\n              <ion-input formControlName=\"password\"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <div *ngIf=\"getProfileFormError()?.password.touched && getProfileFormError()?.password.errors\">\n          <p class=\"pl-20 text-danger\" *ngIf=\"getProfileFormError()?.password.errors.required\">\n            Password is required\n          </p>\n          <p class=\"pl-20 text-danger\" *ngIf=\"getProfileFormError()?.password.errors.minlength\">\n            Minimum Length is {{getProfileFormError()?.password.errors.minlength.requiredLength}}\n          </p>\n        </div> -->\n\n\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label position=\"floating\">\n                <ion-icon name=\"call-outline\"></ion-icon>\n                Phone Number\n              </ion-label>\n              <!-- <ion-icon class=\"eye\" name=\"eye-off-outline\" slot=\"end\"></ion-icon> -->\n              <ion-input formControlName=\"phone_number\"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n\n        <!-- <div *ngIf=\"getProfileFormError()?.password.touched && getProfileFormError()?.password.errors\">\n          <p class=\"pl-20 text-danger\" *ngIf=\"getProfileFormError()?.password.errors.required\">\n            Password is required\n          </p>\n          <p class=\"pl-20 text-danger\" *ngIf=\"getProfileFormError()?.password.errors.minlength\">\n            Minimum Length is {{getProfileFormError()?.password.errors.minlength.requiredLength}}\n          </p>\n        </div> -->\n\n\n\n\n\n\n      \n      </form>\n    </ion-grid>\n\n    <ion-row class=\"mt-30\">\n      <ion-col class=\"text-center\">\n        <div *ngIf=\"showSignUpLoader\" class=\"loader1\"></div>\n        <ion-chip *ngIf=\"!showSignUpLoader\" (click)=\"onSignUp()\"\n          [ngClass]=\"profileForm.valid && pfCheckBox  ? 'cus-chip' : 'cus-chip-dis'\">\n          <ion-label class=\"text-center cus-label\">\n            Update\n          </ion-label>\n        </ion-chip>\n      </ion-col>\n    </ion-row>\n\n\n\n\n  </ion-grid>\n</ion-content>\n\n<!--\n  <div>\n    <div class=\"upper\">\n      <img class=\"mt-50 mb-10\" width=\"277\" height=\"78\" src=\"assets/logo.png\" alt=\"\">\n    </div>\n\n    <div class=\"lower\">\n    <ion-label>asa</ion-label><br>\n    <ion-label>asa</ion-label><br>\n    <ion-label>asa</ion-label><br>\n    <ion-label>asa</ion-label><br>\n    <ion-label>asa</ion-label>\n    </div>\n  </div> -->");

/***/ })

}]);
//# sourceMappingURL=src_app_auth_update-profile_update-profile_module_ts.js.map