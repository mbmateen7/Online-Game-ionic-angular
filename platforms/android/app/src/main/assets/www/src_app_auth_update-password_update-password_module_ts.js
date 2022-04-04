(self["webpackChunkpic_playce"] = self["webpackChunkpic_playce"] || []).push([["src_app_auth_update-password_update-password_module_ts"],{

/***/ 77643:
/*!************************************************************************!*\
  !*** ./src/app/auth/update-password/update-password-routing.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdatePasswordPageRoutingModule": () => (/* binding */ UpdatePasswordPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _update_password_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-password.page */ 44057);




const routes = [
    {
        path: '',
        component: _update_password_page__WEBPACK_IMPORTED_MODULE_0__.UpdatePasswordPage
    }
];
let UpdatePasswordPageRoutingModule = class UpdatePasswordPageRoutingModule {
};
UpdatePasswordPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UpdatePasswordPageRoutingModule);



/***/ }),

/***/ 15445:
/*!****************************************************************!*\
  !*** ./src/app/auth/update-password/update-password.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdatePasswordPageModule": () => (/* binding */ UpdatePasswordPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _update_password_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-password-routing.module */ 77643);
/* harmony import */ var _update_password_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-password.page */ 44057);







let UpdatePasswordPageModule = class UpdatePasswordPageModule {
};
UpdatePasswordPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _update_password_routing_module__WEBPACK_IMPORTED_MODULE_0__.UpdatePasswordPageRoutingModule
        ],
        declarations: [_update_password_page__WEBPACK_IMPORTED_MODULE_1__.UpdatePasswordPage]
    })
], UpdatePasswordPageModule);



/***/ }),

/***/ 44057:
/*!**************************************************************!*\
  !*** ./src/app/auth/update-password/update-password.page.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdatePasswordPage": () => (/* binding */ UpdatePasswordPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_update_password_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./update-password.page.html */ 74596);
/* harmony import */ var _update_password_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-password.page.scss */ 87081);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_service_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/rest.service */ 90421);







let UpdatePasswordPage = class UpdatePasswordPage {
    constructor(route, rest, alertController, router) {
        this.route = route;
        this.rest = rest;
        this.alertController = alertController;
        this.router = router;
    }
    ngOnInit() {
        this.user = this.route.snapshot.paramMap.get('user');
        this.user = JSON.parse(this.user);
        console.log('rtert', this.user);
    }
    onPasswordUpdate() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.password || !this.cpassword) {
                const alert = yield this.alertController.create({
                    cssClass: 'my-custom-class',
                    message: 'Both Field Required',
                    buttons: [{
                            text: 'OK', handler: () => {
                                alert.onDidDismiss();
                            }
                        }]
                });
                yield alert.present();
                return;
            }
            if (this.password.replace(/\s/g, '') != this.cpassword.replace(/\s/g, '')) {
                this.notMatch();
                return;
            }
            const updateObj = {
                id: this.user[0].id,
                password: this.password,
                cpassword: this.cpassword
            };
            this.rest
                .postRequest('users/update-password', updateObj)
                .subscribe((res) => {
                if (res.message) {
                    this.presentAlert();
                    this.router.navigate(['login']);
                }
            });
        });
    }
    presentAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'PicPlayce',
                message: 'Password updated Succesfully!',
                buttons: ['Ok'],
            });
            yield alert.present();
        });
    }
    notMatch() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                message: 'Password Not Matched',
                buttons: ['Ok'],
            });
            yield alert.present();
        });
    }
};
UpdatePasswordPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: src_app_service_rest_service__WEBPACK_IMPORTED_MODULE_2__.RestService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
UpdatePasswordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-update-password',
        template: _raw_loader_update_password_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_update_password_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], UpdatePasswordPage);



/***/ }),

/***/ 87081:
/*!****************************************************************!*\
  !*** ./src/app/auth/update-password/update-password.page.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("p {\n  font-family: Poppins;\n}\n\n.danger {\n  color: red;\n}\n\n.blueBg > ion-col {\n  background-color: #707BBD;\n}\n\n:host ion-checkbox {\n  --size: 15px;\n}\n\n.mt-50 {\n  margin-top: 50px;\n}\n\n.mt-25 {\n  margin-top: 25px;\n}\n\n.mb-50 {\n  margin-bottom: 50px;\n}\n\n.w-100 {\n  width: 100% !important;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.cus-card {\n  margin-top: -50px;\n  position: relative;\n  border-radius: 50px;\n  background-color: white;\n}\n\n.mt-5 {\n  margin-top: 5px;\n}\n\n.pl-20 {\n  padding-left: 20px;\n}\n\n.cus-chip-dis {\n  background: #D6ECA6;\n  border-radius: 30px;\n  width: 330px;\n  height: 53px;\n  pointer-events: none;\n}\n\n.cus-chip {\n  background: #ABCD61;\n  border-radius: 30px;\n  width: 330px;\n  height: 53px;\n}\n\n.cus-label {\n  width: 100%;\n  color: #FFFF;\n  font-family: Poppins;\n  letter-spacing: 0.03em;\n  font-weight: 700;\n  font-size: 16px;\n}\n\n.cus-chip-social {\n  background: #FFFFFF;\n  border-radius: 30px;\n  width: 330px;\n  height: 53px;\n  border: 1px solid #DFDFDF;\n}\n\n.cus-label-social {\n  width: 100%;\n  color: #000000;\n  font-family: Poppins;\n  letter-spacing: 0.03em;\n  font-weight: 700;\n  font-size: 16px;\n}\n\n.separator {\n  display: flex;\n  align-items: center;\n}\n\n.separator .line {\n  height: 2px;\n  flex: 1;\n  background-color: #B6B6B6;\n}\n\n.separator p {\n  padding: 0 2rem;\n  color: #B6B6B6;\n  font-family: Poppins;\n}\n\nion-row > ion-col > ion-item > ion-input {\n  font-family: Poppins;\n  font-size: 14px;\n}\n\nion-item > ion-label {\n  font-family: Poppins;\n  font-size: 14px;\n}\n\nion-item > ion-icon {\n  font-size: 14px;\n}\n\n.eye {\n  position: absolute;\n  right: 10px;\n  top: 30px;\n  z-index: 10000;\n}\n\nion-col {\n  font-family: Poppins;\n}\n\n.fs-12 {\n  font-size: 12px;\n}\n\n.mt-30 {\n  margin-top: 30px;\n}\n\n.social-chip-space {\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.ml-20 {\n  margin-left: 20px;\n}\n\nion-grid {\n  padding: 0px !important;\n  overflow-y: auto;\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwZGF0ZS1wYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7QUFDRjs7QUFHRTtFQUNFLFlBQUE7QUFBSjs7QUFJQTtFQUNFLGdCQUFBO0FBREY7O0FBSUE7RUFDRSxnQkFBQTtBQURGOztBQUlBO0VBQ0UsbUJBQUE7QUFERjs7QUFJQTtFQUNFLHNCQUFBO0FBREY7O0FBSUE7RUFDRSxrQkFBQTtBQURGOztBQUlBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFERjs7QUFJQTtFQUNFLGVBQUE7QUFERjs7QUFJQTtFQUNFLGtCQUFBO0FBREY7O0FBSUE7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQURGOztBQUlBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBREY7O0FBSUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFERjs7QUFLQTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FBRkY7O0FBS0E7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFGRjs7QUFNQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUhGOztBQU1BO0VBQ0UsV0FBQTtFQUNBLE9BQUE7RUFDQSx5QkFBQTtBQUhGOztBQU1BO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQUhGOztBQU1BO0VBQ0Usb0JBQUE7RUFDQSxlQUFBO0FBSEY7O0FBTUE7RUFDRSxvQkFBQTtFQUNBLGVBQUE7QUFIRjs7QUFNQTtFQUVFLGVBQUE7QUFKRjs7QUFPQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0FBSkY7O0FBT0E7RUFDRSxvQkFBQTtBQUpGOztBQU9BO0VBQ0UsZUFBQTtBQUpGOztBQU9BO0VBQ0UsZ0JBQUE7QUFKRjs7QUFPQTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtBQUpGOztBQU9BO0VBQ0UsaUJBQUE7QUFKRjs7QUFPQTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBSkYiLCJmaWxlIjoidXBkYXRlLXBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xyXG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG59XHJcblxyXG4uZGFuZ2VyIHtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4uYmx1ZUJnPmlvbi1jb2wge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM3MDdCQkQ7XHJcbn1cclxuXHJcbjpob3N0IHtcclxuICBpb24tY2hlY2tib3gge1xyXG4gICAgLS1zaXplOiAxNXB4O1xyXG4gIH1cclxufVxyXG5cclxuLm10LTUwIHtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcblxyXG4ubXQtMjUge1xyXG4gIG1hcmdpbi10b3A6IDI1cHg7XHJcbn1cclxuXHJcbi5tYi01MCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxufVxyXG5cclxuLnctMTAwIHtcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGV4dC1jZW50ZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmN1cy1jYXJkIHtcclxuICBtYXJnaW4tdG9wOiAtNTBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLm10LTUge1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuLnBsLTIwIHtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbi5jdXMtY2hpcC1kaXMge1xyXG4gIGJhY2tncm91bmQ6ICNENkVDQTY7XHJcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICB3aWR0aDogMzMwcHg7XHJcbiAgaGVpZ2h0OiA1M3B4O1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG4uY3VzLWNoaXAge1xyXG4gIGJhY2tncm91bmQ6ICNBQkNENjE7XHJcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICB3aWR0aDogMzMwcHg7XHJcbiAgaGVpZ2h0OiA1M3B4O1xyXG59XHJcblxyXG4uY3VzLWxhYmVsIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBjb2xvcjogI0ZGRkY7XHJcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDNlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuXHJcbn1cclxuXHJcbi5jdXMtY2hpcC1zb2NpYWwge1xyXG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICB3aWR0aDogMzMwcHg7XHJcbiAgaGVpZ2h0OiA1M3B4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNERkRGREY7XHJcbn1cclxuXHJcbi5jdXMtbGFiZWwtc29jaWFsIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICBmb250LWZhbWlseTogUG9wcGlucztcclxuICBsZXR0ZXItc3BhY2luZzogMC4wM2VtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG5cclxufVxyXG5cclxuLnNlcGFyYXRvciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uc2VwYXJhdG9yIC5saW5lIHtcclxuICBoZWlnaHQ6IDJweDtcclxuICBmbGV4OiAxO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNCNkI2QjY7XHJcbn1cclxuXHJcbi5zZXBhcmF0b3IgcCB7XHJcbiAgcGFkZGluZzogMCAycmVtO1xyXG4gIGNvbG9yOiAjQjZCNkI2O1xyXG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG59XHJcblxyXG5pb24tcm93Pmlvbi1jb2w+aW9uLWl0ZW0+aW9uLWlucHV0IHtcclxuICBmb250LWZhbWlseTogUG9wcGlucztcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbmlvbi1pdGVtPmlvbi1sYWJlbCB7XHJcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG5pb24taXRlbT5pb24taWNvbiB7XHJcbiAgLy8gZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uZXllIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbiAgdG9wOiAzMHB4O1xyXG4gIHotaW5kZXg6IDEwMDAwO1xyXG59XHJcblxyXG5pb24tY29sIHtcclxuICBmb250LWZhbWlseTogUG9wcGlucztcclxufVxyXG5cclxuLmZzLTEyIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5tdC0zMCB7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuLnNvY2lhbC1jaGlwLXNwYWNlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG59XHJcblxyXG4ubWwtMjAge1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG5pb24tZ3JpZCB7XHJcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBtYXJnaW46IDBweFxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 74596:
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/update-password/update-password.page.html ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- <ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>update-password</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div>\r\n    <ion-item>\r\n      <ion-label>New Password: </ion-label>\r\n      <ion-input name=\"password\" [(ngModel)]=\"password\" placeholder=\"New Password\"></ion-input>\r\n    </ion-item><br>\r\n    <ion-item>\r\n      <ion-label>Confirm Password: </ion-label>\r\n      <ion-input name=\"cpassword\" [(ngModel)]=\"cpassword\" placeholder=\"Confirm  Password\"></ion-input>\r\n    </ion-item>\r\n  </div>\r\n\r\n  <div>\r\n    <ion-button (click)=\"onPasswordUpdate()\">\r\n      Update Password\r\n    </ion-button>\r\n  </div>\r\n</ion-content> -->\r\n\r\n\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row class=\"blueBg\">\r\n      <ion-col>\r\n        <div class=\"text-center mb-50\">\r\n          <img class=\"mt-50 mb-10\" width=\"277\" height=\"78\" src=\"assets/logo.png\" alt=\"\" />\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-grid class=\"cus-card\">\r\n\r\n      <ion-row>\r\n        <ion-col class=\"pl-20\">\r\n          <div>\r\n            <ion-icon [routerLink]=\"['/home']\" size=\"large\" name=\"close-outline\"></ion-icon>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"mt-5\">\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">\r\n              Password\r\n            </ion-label>\r\n            <ion-input name=\"password\" [(ngModel)]=\"password\" placeholder=\"New Password\"></ion-input>\r\n          </ion-item>\r\n\r\n\r\n\r\n\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label position=\"floating\">\r\n              Confirm Password\r\n            </ion-label>\r\n            <ion-input name=\"cpassword\" [(ngModel)]=\"cpassword\" placeholder=\"Confirm  Password\"></ion-input>\r\n\r\n\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n\r\n    </ion-grid>\r\n\r\n    <ion-row class=\"mt-30\">\r\n      <ion-col class=\"text-center\">\r\n\r\n        <ion-chip class='cus-chip' (click)=\"onPasswordUpdate()\">\r\n          <ion-label class=\"text-center cus-label\">\r\n            Reset Password\r\n          </ion-label>\r\n        </ion-chip>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n  </ion-grid>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_auth_update-password_update-password_module_ts.js.map