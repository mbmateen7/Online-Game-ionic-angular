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
        console.log('User', this.user);
        // console.log('User Data', JSON.parse(localStorage.getItem('user')))
        this.pfCheckBox = false;
        this.profileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            // user_name: new FormControl('', [Validators.required, Validators.minLength(4)]),
            // email: new FormControl('', [Validators.required, Validators.email]),
            // password: new FormControl('', [
            //   Validators.required,
            //   Validators.minLength(6),
            // ]),
            referal_code: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            phone_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('')
        });
        this.profileForm.patchValue({
            // user_name: this.user.user_name,
            // email: this.user.email,
            phone_number: this.user.phone_number
        });
    }
    getProfileFormError() {
        return this.profileForm.controls;
    }
    onSignUp() {
        this.showSignUpLoader = true;
        console.log('profileForm', this.profileForm.value);
        this.restService.putRequestToken('users/update', this.profileForm.value).subscribe((res) => {
            if (res) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
                    title: '<div><h5>Success!</h5></div>',
                    text: "Updated",
                    confirmButtonText: 'Ok',
                    confirmButtonColor: '#99C43C',
                });
                // console.log('This is res', res.data);
                // localStorage.setItem('token', res.token);
                // localStorage.setItem('user', JSON.stringify(res.data));
                this.showSignUpLoader = false;
                this.router.navigate(['main/setting']);
            }
        }, err => {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".blueBg > ion-col {\n  background-color: #707BBD;\n}\n\n:host ion-checkbox {\n  --size: 15px;\n}\n\n.mt-50 {\n  margin-top: 50px;\n}\n\n.mb-50 {\n  margin-bottom: 50px;\n}\n\n.w-100 {\n  width: 100% !important;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.cus-card {\n  margin-top: -50px;\n  position: relative;\n  border-radius: 50px;\n  background-color: white;\n}\n\n.mt-5 {\n  margin-top: 5px;\n}\n\n.pl-20 {\n  padding-left: 20px;\n}\n\n.cus-chip-dis {\n  background: #D6ECA6;\n  border-radius: 30px;\n  width: 330px;\n  height: 53px;\n}\n\n.cus-chip {\n  background: #ABCD61;\n  border-radius: 30px;\n  width: 330px;\n  height: 53px;\n}\n\n.cus-label {\n  width: 100%;\n  color: #FFFF;\n  font-family: Poppins;\n  letter-spacing: 0.03em;\n  font-weight: 700;\n  font-size: 16px;\n}\n\n.cus-chip-social {\n  background: #FFFFFF;\n  border-radius: 30px;\n  width: 330px;\n  height: 53px;\n  border: 1px solid #DFDFDF;\n}\n\n.cus-label-social {\n  width: 100%;\n  color: #000000;\n  font-family: Poppins;\n  letter-spacing: 0.03em;\n  font-weight: 700;\n  font-size: 16px;\n}\n\n.separator {\n  display: flex;\n  align-items: center;\n}\n\n.separator .line {\n  height: 2px;\n  flex: 1;\n  background-color: #B6B6B6;\n}\n\n.separator p {\n  padding: 0 2rem;\n  color: #B6B6B6;\n  font-family: Poppins;\n}\n\nion-row > ion-col > ion-item > ion-input {\n  font-family: Poppins;\n  font-size: 14px;\n}\n\nion-item > ion-label {\n  font-family: Poppins;\n  font-size: 14px;\n}\n\nion-item > ion-icon {\n  font-size: 14px;\n}\n\n.eye {\n  position: absolute;\n  right: 10px;\n  top: 30px;\n}\n\nion-col {\n  font-family: Poppins;\n}\n\n.fs-12 {\n  font-size: 12px;\n}\n\n.mt-30 {\n  margin-top: 30px;\n}\n\n.social-chip-space {\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.text-danger {\n  color: red;\n}\n\nion-grid {\n  padding: 0px !important;\n  overflow-y: auto;\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwZGF0ZS1wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0FBQ0Y7O0FBR0U7RUFDRSxZQUFBO0FBQUo7O0FBSUE7RUFDRSxnQkFBQTtBQURGOztBQUlBO0VBQ0UsbUJBQUE7QUFERjs7QUFJQTtFQUNFLHNCQUFBO0FBREY7O0FBSUE7RUFDRSxrQkFBQTtBQURGOztBQUlBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFERjs7QUFJQTtFQUNFLGVBQUE7QUFERjs7QUFJQTtFQUNFLGtCQUFBO0FBREY7O0FBSUE7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFERjs7QUFJQTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQURGOztBQUlBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBREY7O0FBSUE7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQURGOztBQUlBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBREY7O0FBS0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFGRjs7QUFLQTtFQUNFLFdBQUE7RUFDQSxPQUFBO0VBQ0EseUJBQUE7QUFGRjs7QUFLQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUFGRjs7QUFLQTtFQUNFLG9CQUFBO0VBQ0EsZUFBQTtBQUZGOztBQUtBO0VBQ0Usb0JBQUE7RUFDQSxlQUFBO0FBRkY7O0FBS0E7RUFFRSxlQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBSEY7O0FBTUE7RUFDRSxvQkFBQTtBQUhGOztBQU1BO0VBQ0UsZUFBQTtBQUhGOztBQU1BO0VBQ0UsZ0JBQUE7QUFIRjs7QUFNQTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtBQUhGOztBQU1BO0VBQ0UsVUFBQTtBQUhGOztBQU1BO0VBQ0UsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFIRiIsImZpbGUiOiJ1cGRhdGUtcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmx1ZUJnPmlvbi1jb2wge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM3MDdCQkQ7XHJcbn1cclxuXHJcbjpob3N0IHtcclxuICBpb24tY2hlY2tib3gge1xyXG4gICAgLS1zaXplOiAxNXB4O1xyXG4gIH1cclxufVxyXG5cclxuLm10LTUwIHtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcblxyXG4ubWItNTAge1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbi53LTEwMCB7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRleHQtY2VudGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jdXMtY2FyZCB7XHJcbiAgbWFyZ2luLXRvcDogLTUwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5tdC01IHtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuXHJcbi5wbC0yMCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG4uY3VzLWNoaXAtZGlzIHtcclxuICBiYWNrZ3JvdW5kOiAjRDZFQ0E2O1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgd2lkdGg6IDMzMHB4O1xyXG4gIGhlaWdodDogNTNweDtcclxufVxyXG5cclxuLmN1cy1jaGlwIHtcclxuICBiYWNrZ3JvdW5kOiAjQUJDRDYxO1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgd2lkdGg6IDMzMHB4O1xyXG4gIGhlaWdodDogNTNweDtcclxufVxyXG5cclxuLmN1cy1sYWJlbCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgY29sb3I6ICNGRkZGO1xyXG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAzZW07XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5jdXMtY2hpcC1zb2NpYWwge1xyXG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICB3aWR0aDogMzMwcHg7XHJcbiAgaGVpZ2h0OiA1M3B4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNERkRGREY7XHJcbn1cclxuXHJcbi5jdXMtbGFiZWwtc29jaWFsIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICBmb250LWZhbWlseTogUG9wcGlucztcclxuICBsZXR0ZXItc3BhY2luZzogMC4wM2VtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG5cclxufVxyXG5cclxuLnNlcGFyYXRvciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uc2VwYXJhdG9yIC5saW5lIHtcclxuICBoZWlnaHQ6IDJweDtcclxuICBmbGV4OiAxO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNCNkI2QjY7XHJcbn1cclxuXHJcbi5zZXBhcmF0b3IgcCB7XHJcbiAgcGFkZGluZzogMCAycmVtO1xyXG4gIGNvbG9yOiAjQjZCNkI2O1xyXG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG59XHJcblxyXG5pb24tcm93Pmlvbi1jb2w+aW9uLWl0ZW0+aW9uLWlucHV0IHtcclxuICBmb250LWZhbWlseTogUG9wcGlucztcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbmlvbi1pdGVtPmlvbi1sYWJlbCB7XHJcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG5pb24taXRlbT5pb24taWNvbiB7XHJcbiAgLy8gZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uZXllIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbiAgdG9wOiAzMHB4O1xyXG59XHJcblxyXG5pb24tY29sIHtcclxuICBmb250LWZhbWlseTogUG9wcGlucztcclxufVxyXG5cclxuLmZzLTEyIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5tdC0zMCB7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuLnNvY2lhbC1jaGlwLXNwYWNlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG59XHJcblxyXG4udGV4dC1kYW5nZXIge1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbmlvbi1ncmlkIHtcclxuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIG1hcmdpbjogMHB4XHJcbn1cclxuIl19 */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <ion-grid>\r\n    <ion-row class=\"blueBg\">\r\n      <ion-col>\r\n        <div class=\"text-center mb-50\">\r\n          <img class=\"mt-50 mb-10\" width=\"277\" height=\"78\" src=\"assets/logo.png\" alt=\"\" />\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-grid class=\"cus-card\">\r\n\r\n      <form [formGroup]=\"profileForm\">\r\n        <ion-row>\r\n          <ion-col class=\"pl-20\">\r\n            <div>\r\n              <ion-icon (click)=\"onGoToSettingPage()\" size=\"large\" name=\"close-outline\"></ion-icon>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <!-- <ion-row class=\"mt-10\">\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">\r\n                <ion-icon name=\"person\" slot=\"start\"></ion-icon>\r\n                Username\r\n              </ion-label>\r\n              <ion-input formControlName=\"user_name\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n        <div *ngIf=\"getProfileFormError()?.user_name.touched && getProfileFormError()?.user_name.errors\">\r\n          <p class=\"pl-20 text-danger\" *ngIf=\"getProfileFormError()?.user_name.errors.required\">\r\n            User Name is required\r\n          </p>\r\n          <p class=\"pl-20 text-danger\" *ngIf=\"getProfileFormError()?.user_name.errors.minlength\">\r\n            Minimum Length is {{getProfileFormError()?.user_name.errors.minlength.requiredLength}}\r\n          </p>\r\n        </div>\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">\r\n                <ion-icon name=\"mail\" slot=\"start\"></ion-icon>\r\n                Email\r\n              </ion-label>\r\n              <ion-input formControlName=\"email\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n        <div *ngIf=\"getProfileFormError()?.email.touched && getProfileFormError()?.email.errors\">\r\n          <p class=\"pl-20 text-danger\" *ngIf=\"getProfileFormError()?.email.errors.required\">\r\n            Email is required\r\n          </p>\r\n          <p class=\"pl-20 text-danger\" *ngIf=\"getProfileFormError()?.email.errors.email\">\r\n            Email is incorrect\r\n          </p>\r\n        </div> -->\r\n\r\n        <!-- <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">\r\n                <ion-icon name=\"lock-closed\"></ion-icon>\r\n                Password\r\n              </ion-label>\r\n              <ion-icon class=\"eye\" name=\"eye-off-outline\" slot=\"end\"></ion-icon>\r\n              <ion-input formControlName=\"password\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <div *ngIf=\"getProfileFormError()?.password.touched && getProfileFormError()?.password.errors\">\r\n          <p class=\"pl-20 text-danger\" *ngIf=\"getProfileFormError()?.password.errors.required\">\r\n            Password is required\r\n          </p>\r\n          <p class=\"pl-20 text-danger\" *ngIf=\"getProfileFormError()?.password.errors.minlength\">\r\n            Minimum Length is {{getProfileFormError()?.password.errors.minlength.requiredLength}}\r\n          </p>\r\n        </div> -->\r\n\r\n\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">\r\n                <ion-icon name=\"call-outline\"></ion-icon>\r\n                Phone Number\r\n              </ion-label>\r\n              <!-- <ion-icon class=\"eye\" name=\"eye-off-outline\" slot=\"end\"></ion-icon> -->\r\n              <ion-input formControlName=\"phone_number\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n\r\n        <!-- <div *ngIf=\"getProfileFormError()?.password.touched && getProfileFormError()?.password.errors\">\r\n          <p class=\"pl-20 text-danger\" *ngIf=\"getProfileFormError()?.password.errors.required\">\r\n            Password is required\r\n          </p>\r\n          <p class=\"pl-20 text-danger\" *ngIf=\"getProfileFormError()?.password.errors.minlength\">\r\n            Minimum Length is {{getProfileFormError()?.password.errors.minlength.requiredLength}}\r\n          </p>\r\n        </div> -->\r\n\r\n\r\n\r\n\r\n\r\n\r\n        <ion-row class=\"mt-5\">\r\n          <ion-col size=\"1\" class=\"pl-20\">\r\n            <ion-checkbox (ionChange)=\"onClick($event)\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"pfCheckBox\"\r\n              name=\"pfCheckBox\"></ion-checkbox>\r\n          </ion-col>\r\n          <ion-col class=\"pl-20 fs-12\" size=\"11\">\r\n            By creating an account, I agree to the Terms of Service and Privacy\r\n            Policy located, respectively, here and here.\r\n          </ion-col>\r\n        </ion-row>\r\n      </form>\r\n    </ion-grid>\r\n\r\n    <ion-row class=\"mt-30\">\r\n      <ion-col class=\"text-center\">\r\n        <div *ngIf=\"showSignUpLoader\" class=\"loader1\"></div>\r\n        <ion-chip *ngIf=\"!showSignUpLoader\" (click)=\"onSignUp()\"\r\n          [ngClass]=\"profileForm.valid && pfCheckBox  ? 'cus-chip' : 'cus-chip-dis'\">\r\n          <ion-label class=\"text-center cus-label\">\r\n            Update\r\n          </ion-label>\r\n        </ion-chip>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n\r\n\r\n\r\n  </ion-grid>\r\n</ion-content>\r\n\r\n<!--\r\n  <div>\r\n    <div class=\"upper\">\r\n      <img class=\"mt-50 mb-10\" width=\"277\" height=\"78\" src=\"assets/logo.png\" alt=\"\">\r\n    </div>\r\n\r\n    <div class=\"lower\">\r\n    <ion-label>asa</ion-label><br>\r\n    <ion-label>asa</ion-label><br>\r\n    <ion-label>asa</ion-label><br>\r\n    <ion-label>asa</ion-label><br>\r\n    <ion-label>asa</ion-label>\r\n    </div>\r\n  </div> -->");

/***/ })

}]);
//# sourceMappingURL=src_app_auth_update-profile_update-profile_module_ts.js.map