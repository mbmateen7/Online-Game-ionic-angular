(self["webpackChunkpic_playce"] = self["webpackChunkpic_playce"] || []).push([["src_app_auth_send-code_send-code_module_ts"],{

/***/ 24303:
/*!************************************************************!*\
  !*** ./src/app/auth/send-code/send-code-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SendCodePageRoutingModule": () => (/* binding */ SendCodePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _send_code_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./send-code.page */ 88397);




const routes = [
    {
        path: '',
        component: _send_code_page__WEBPACK_IMPORTED_MODULE_0__.SendCodePage
    }
];
let SendCodePageRoutingModule = class SendCodePageRoutingModule {
};
SendCodePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SendCodePageRoutingModule);



/***/ }),

/***/ 26722:
/*!****************************************************!*\
  !*** ./src/app/auth/send-code/send-code.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SendCodePageModule": () => (/* binding */ SendCodePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _send_code_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./send-code-routing.module */ 24303);
/* harmony import */ var _send_code_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./send-code.page */ 88397);







let SendCodePageModule = class SendCodePageModule {
};
SendCodePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _send_code_routing_module__WEBPACK_IMPORTED_MODULE_0__.SendCodePageRoutingModule
        ],
        declarations: [_send_code_page__WEBPACK_IMPORTED_MODULE_1__.SendCodePage]
    })
], SendCodePageModule);



/***/ }),

/***/ 88397:
/*!**************************************************!*\
  !*** ./src/app/auth/send-code/send-code.page.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SendCodePage": () => (/* binding */ SendCodePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_send_code_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./send-code.page.html */ 74763);
/* harmony import */ var _send_code_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./send-code.page.scss */ 18740);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_service_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/rest.service */ 90421);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);







let SendCodePage = class SendCodePage {
    constructor(restService, alertController, router) {
        this.restService = restService;
        this.alertController = alertController;
        this.router = router;
    }
    ngOnInit() { }
    onSendCode() {
        this.restService
            .postRequest('users/verification', { code: this.verficationCode })
            .subscribe((res) => {
            if (!res.user.length) {
                this.presentAlert();
            }
            else {
                this.router.navigate(['update-password', { user: JSON.stringify(res.user) }]);
            }
        });
    }
    presentAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                message: 'Incorrect Otp',
                buttons: ['Ok'],
            });
            yield alert.present();
        });
    }
};
SendCodePage.ctorParameters = () => [
    { type: src_app_service_rest_service__WEBPACK_IMPORTED_MODULE_2__.RestService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
SendCodePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-send-code',
        template: _raw_loader_send_code_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_send_code_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SendCodePage);



/***/ }),

/***/ 18740:
/*!****************************************************!*\
  !*** ./src/app/auth/send-code/send-code.page.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("p {\n  font-family: Poppins;\n}\n\n.danger {\n  color: red;\n}\n\n.blueBg > ion-col {\n  background-color: #707BBD;\n}\n\n:host ion-checkbox {\n  --size: 15px;\n}\n\n.mt-50 {\n  margin-top: 50px;\n}\n\n.mt-25 {\n  margin-top: 25px;\n}\n\n.mb-50 {\n  margin-bottom: 50px;\n}\n\n.w-100 {\n  width: 100% !important;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.cus-card {\n  margin-top: -50px;\n  position: relative;\n  border-radius: 50px;\n  background-color: white;\n}\n\n.mt-5 {\n  margin-top: 5px;\n}\n\n.pl-20 {\n  padding-left: 20px;\n  padding-top: 20px;\n}\n\n.cus-chip-dis {\n  background: #D6ECA6;\n  border-radius: 30px;\n  width: 330px;\n  height: 53px;\n  pointer-events: none;\n}\n\n.cus-chip {\n  background: #ABCD61;\n  border-radius: 30px;\n  width: 330px;\n  height: 53px;\n}\n\n.cus-label {\n  width: 100%;\n  color: #FFFF;\n  font-family: Poppins;\n  letter-spacing: 0.03em;\n  font-weight: 700;\n  font-size: 16px;\n}\n\n.cus-chip-social {\n  background: #FFFFFF;\n  border-radius: 30px;\n  width: 330px;\n  height: 53px;\n  border: 1px solid #DFDFDF;\n}\n\n.cus-label-social {\n  width: 100%;\n  color: #000000;\n  font-family: Poppins;\n  letter-spacing: 0.03em;\n  font-weight: 700;\n  font-size: 16px;\n}\n\n.separator {\n  display: flex;\n  align-items: center;\n}\n\n.separator .line {\n  height: 2px;\n  flex: 1;\n  background-color: #B6B6B6;\n}\n\n.separator p {\n  padding: 0 2rem;\n  color: #B6B6B6;\n  font-family: Poppins;\n}\n\nion-row > ion-col > ion-item > ion-input {\n  font-family: Poppins;\n  font-size: 14px;\n}\n\nion-item > ion-label {\n  font-family: Poppins;\n  font-size: 14px;\n}\n\nion-item > ion-icon {\n  font-size: 14px;\n}\n\n.eye {\n  position: absolute;\n  right: 10px;\n  top: 30px;\n  z-index: 10000;\n}\n\nion-col {\n  font-family: Poppins;\n}\n\n.fs-12 {\n  font-size: 12px;\n}\n\n.mt-30 {\n  margin-top: 30px;\n}\n\n.social-chip-space {\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.ml-20 {\n  margin-left: 20px;\n}\n\nion-grid {\n  padding: 0px !important;\n  overflow-y: auto;\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbmQtY29kZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7QUFDRjs7QUFHRTtFQUNFLFlBQUE7QUFBSjs7QUFJQTtFQUNFLGdCQUFBO0FBREY7O0FBSUE7RUFDRSxnQkFBQTtBQURGOztBQUlBO0VBQ0UsbUJBQUE7QUFERjs7QUFJQTtFQUNFLHNCQUFBO0FBREY7O0FBSUE7RUFDRSxrQkFBQTtBQURGOztBQUlBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFERjs7QUFJQTtFQUNFLGVBQUE7QUFERjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUFERjs7QUFJQTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FBREY7O0FBSUE7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFERjs7QUFJQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQURGOztBQUtBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUFGRjs7QUFLQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUZGOztBQU1BO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxXQUFBO0VBQ0EsT0FBQTtFQUNBLHlCQUFBO0FBSEY7O0FBTUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FBSEY7O0FBTUE7RUFDRSxvQkFBQTtFQUNBLGVBQUE7QUFIRjs7QUFNQTtFQUNFLG9CQUFBO0VBQ0EsZUFBQTtBQUhGOztBQU1BO0VBRUUsZUFBQTtBQUpGOztBQU9BO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7QUFKRjs7QUFPQTtFQUNFLG9CQUFBO0FBSkY7O0FBT0E7RUFDRSxlQUFBO0FBSkY7O0FBT0E7RUFDRSxnQkFBQTtBQUpGOztBQU9BO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0FBSkY7O0FBT0E7RUFDRSxpQkFBQTtBQUpGOztBQU9BO0VBQ0UsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFKRiIsImZpbGUiOiJzZW5kLWNvZGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xufVxuXG4uZGFuZ2VyIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmJsdWVCZz5pb24tY29sIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcwN0JCRDtcbn1cblxuOmhvc3Qge1xuICBpb24tY2hlY2tib3gge1xuICAgIC0tc2l6ZTogMTVweDtcbiAgfVxufVxuXG4ubXQtNTAge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4ubXQtMjUge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG4ubWItNTAge1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG4udy0xMDAge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG4udGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jdXMtY2FyZCB7XG4gIG1hcmdpbi10b3A6IC01MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4ubXQtNSB7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLnBsLTIwIHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuLmN1cy1jaGlwLWRpcyB7XG4gIGJhY2tncm91bmQ6ICNENkVDQTY7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIHdpZHRoOiAzMzBweDtcbiAgaGVpZ2h0OiA1M3B4O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmN1cy1jaGlwIHtcbiAgYmFja2dyb3VuZDogI0FCQ0Q2MTtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgd2lkdGg6IDMzMHB4O1xuICBoZWlnaHQ6IDUzcHg7XG59XG5cbi5jdXMtbGFiZWwge1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICNGRkZGO1xuICBmb250LWZhbWlseTogUG9wcGlucztcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDNlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuXG59XG5cbi5jdXMtY2hpcC1zb2NpYWwge1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICB3aWR0aDogMzMwcHg7XG4gIGhlaWdodDogNTNweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0RGREZERjtcbn1cblxuLmN1cy1sYWJlbC1zb2NpYWwge1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBsZXR0ZXItc3BhY2luZzogMC4wM2VtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDE2cHg7XG5cbn1cblxuLnNlcGFyYXRvciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zZXBhcmF0b3IgLmxpbmUge1xuICBoZWlnaHQ6IDJweDtcbiAgZmxleDogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0I2QjZCNjtcbn1cblxuLnNlcGFyYXRvciBwIHtcbiAgcGFkZGluZzogMCAycmVtO1xuICBjb2xvcjogI0I2QjZCNjtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG59XG5cbmlvbi1yb3c+aW9uLWNvbD5pb24taXRlbT5pb24taW5wdXQge1xuICBmb250LWZhbWlseTogUG9wcGlucztcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG5pb24taXRlbT5pb24tbGFiZWwge1xuICBmb250LWZhbWlseTogUG9wcGlucztcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG5pb24taXRlbT5pb24taWNvbiB7XG4gIC8vIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5leWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xuICB0b3A6IDMwcHg7XG4gIHotaW5kZXg6IDEwMDAwO1xufVxuXG5pb24tY29sIHtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG59XG5cbi5mcy0xMiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLm10LTMwIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLnNvY2lhbC1jaGlwLXNwYWNlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG5cbi5tbC0yMCB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG5pb24tZ3JpZCB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBtYXJnaW46IDBweFxufVxuIl19 */");

/***/ }),

/***/ 74763:
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/send-code/send-code.page.html ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>send-code</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div>\n    <ion-item>\n      <ion-label></ion-label>\n      <ion-input [(ngModel)]=\"verficationCode\" placeholder=\"Enter Code\"  minlength=\"4\"></ion-input>\n    </ion-item>\n\n    <ion-button (click)=\"onSendCode()\">Send Code</ion-button>\n  </div>\n</ion-content> -->\n\n\n\n<ion-content>\n  <ion-grid>\n    <ion-row class=\"blueBg\">\n      <ion-col>\n        <div class=\"text-center mb-50\">\n          <img class=\"mt-50 mb-10\" width=\"277\" height=\"78\" src=\"assets/logo.png\" alt=\"\" />\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-grid class=\"cus-card\">\n\n      <ion-row>\n        <ion-col class=\"pl-20\">\n          <div>\n            <ion-icon [routerLink]=\"['/home']\" size=\"large\" name=\"close-outline\"></ion-icon>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"mt-5\">\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"floating\">\n              <!-- <ion-icon name=\"mail\" slot=\"start\"></ion-icon> -->\n              OTP\n            </ion-label>\n            <ion-input [(ngModel)]=\"verficationCode\" placeholder=\"Enter Code\" minlength=\"4\"></ion-input>\n          </ion-item>\n\n\n\n\n        </ion-col>\n      </ion-row>\n\n\n\n\n    </ion-grid>\n\n    <ion-row class=\"mt-30\">\n      <ion-col class=\"text-center\">\n\n        <ion-chip class='cus-chip' (click)=\"onSendCode()\">\n          <ion-label class=\"text-center cus-label\">\n            Verify Code\n          </ion-label>\n        </ion-chip>\n      </ion-col>\n    </ion-row>\n\n\n\n  </ion-grid>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_auth_send-code_send-code_module_ts.js.map