(self["webpackChunkpic_playce"] = self["webpackChunkpic_playce"] || []).push([["src_app_auth_reset_reset_module_ts"],{

/***/ 5825:
/*!****************************************************!*\
  !*** ./src/app/auth/reset/reset-routing.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetPageRoutingModule": () => (/* binding */ ResetPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _reset_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset.page */ 64569);




const routes = [
    {
        path: '',
        component: _reset_page__WEBPACK_IMPORTED_MODULE_0__.ResetPage
    }
];
let ResetPageRoutingModule = class ResetPageRoutingModule {
};
ResetPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ResetPageRoutingModule);



/***/ }),

/***/ 88403:
/*!********************************************!*\
  !*** ./src/app/auth/reset/reset.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetPageModule": () => (/* binding */ ResetPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _reset_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset-routing.module */ 5825);
/* harmony import */ var _reset_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reset.page */ 64569);







let ResetPageModule = class ResetPageModule {
};
ResetPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _reset_routing_module__WEBPACK_IMPORTED_MODULE_0__.ResetPageRoutingModule
        ],
        declarations: [_reset_page__WEBPACK_IMPORTED_MODULE_1__.ResetPage]
    })
], ResetPageModule);



/***/ }),

/***/ 64569:
/*!******************************************!*\
  !*** ./src/app/auth/reset/reset.page.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetPage": () => (/* binding */ ResetPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_reset_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./reset.page.html */ 92585);
/* harmony import */ var _reset_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reset.page.scss */ 91647);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_service_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/rest.service */ 90421);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);







let ResetPage = class ResetPage {
    constructor(route, restService, alertController, router) {
        this.route = route;
        this.restService = restService;
        this.alertController = alertController;
        this.router = router;
    }
    ngOnInit() {
        this.email = this.route.snapshot.paramMap.get('email');
    }
    onSendCode() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.email) {
                const alert = yield this.alertController.create({
                    cssClass: 'my-custom-class',
                    message: 'Email Required',
                    buttons: [{
                            text: 'OK', handler: () => {
                                alert.onDidDismiss();
                            }
                        }]
                });
                yield alert.present();
            }
            this.restService.postRequest('users/reset', {
                email: this.email.replace(/\s/g, '')
            }).subscribe((res) => {
                this.presentAlert();
            });
        });
    }
    presentAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'PicPlayce',
                message: 'Code is sent Successfully! Please check Your mail',
                buttons: [{
                        text: 'OK', handler: () => {
                            this.router.navigate(['send-code']);
                        }
                    }]
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
        });
    }
};
ResetPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: src_app_service_rest_service__WEBPACK_IMPORTED_MODULE_2__.RestService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
ResetPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-reset',
        template: _raw_loader_reset_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_reset_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ResetPage);



/***/ }),

/***/ 91647:
/*!********************************************!*\
  !*** ./src/app/auth/reset/reset.page.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("p {\n  font-family: Poppins;\n}\n\n.danger {\n  color: red;\n}\n\n.blueBg > ion-col {\n  background-color: #707BBD;\n}\n\n:host ion-checkbox {\n  --size: 15px;\n}\n\n.mt-50 {\n  margin-top: 50px;\n}\n\n.mt-25 {\n  margin-top: 25px;\n}\n\n.mb-50 {\n  margin-bottom: 50px;\n}\n\n.w-100 {\n  width: 100% !important;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.cus-card {\n  margin-top: -50px;\n  position: relative;\n  border-radius: 50px;\n  background-color: white;\n}\n\n.mt-5 {\n  margin-top: 5px;\n}\n\n.pl-20 {\n  padding-left: 20px;\n  padding-top: 20px;\n}\n\n.cus-chip-dis {\n  background: #D6ECA6;\n  border-radius: 30px;\n  width: 330px;\n  height: 53px;\n  pointer-events: none;\n}\n\n.cus-chip {\n  background: #ABCD61;\n  border-radius: 30px;\n  width: 330px;\n  height: 53px;\n}\n\n.cus-label {\n  width: 100%;\n  color: #FFFF;\n  font-family: Poppins;\n  letter-spacing: 0.03em;\n  font-weight: 700;\n  font-size: 16px;\n}\n\n.cus-chip-social {\n  background: #FFFFFF;\n  border-radius: 30px;\n  width: 330px;\n  height: 53px;\n  border: 1px solid #DFDFDF;\n}\n\n.cus-label-social {\n  width: 100%;\n  color: #000000;\n  font-family: Poppins;\n  letter-spacing: 0.03em;\n  font-weight: 700;\n  font-size: 16px;\n}\n\n.separator {\n  display: flex;\n  align-items: center;\n}\n\n.separator .line {\n  height: 2px;\n  flex: 1;\n  background-color: #B6B6B6;\n}\n\n.separator p {\n  padding: 0 2rem;\n  color: #B6B6B6;\n  font-family: Poppins;\n}\n\nion-row > ion-col > ion-item > ion-input {\n  font-family: Poppins;\n  font-size: 14px;\n}\n\nion-item > ion-label {\n  font-family: Poppins;\n  font-size: 14px;\n}\n\nion-item > ion-icon {\n  font-size: 14px;\n}\n\n.eye {\n  position: absolute;\n  right: 10px;\n  top: 30px;\n  z-index: 10000;\n}\n\nion-col {\n  font-family: Poppins;\n}\n\n.fs-12 {\n  font-size: 12px;\n}\n\n.mt-30 {\n  margin-top: 30px;\n}\n\n.social-chip-space {\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.ml-20 {\n  margin-left: 20px;\n}\n\nion-grid {\n  padding: 0px !important;\n  overflow-y: auto;\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc2V0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjQTtFQUNFLG9CQUFBO0FBYkY7O0FBZ0JBO0VBQ0UsVUFBQTtBQWJGOztBQWdCQTtFQUNFLHlCQUFBO0FBYkY7O0FBaUJFO0VBQ0UsWUFBQTtBQWRKOztBQWtCQTtFQUNFLGdCQUFBO0FBZkY7O0FBa0JBO0VBQ0UsZ0JBQUE7QUFmRjs7QUFrQkE7RUFDRSxtQkFBQTtBQWZGOztBQWtCQTtFQUNFLHNCQUFBO0FBZkY7O0FBa0JBO0VBQ0Usa0JBQUE7QUFmRjs7QUFrQkE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQWZGOztBQWtCQTtFQUNFLGVBQUE7QUFmRjs7QUFrQkE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FBZkY7O0FBa0JBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUFmRjs7QUFrQkE7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFmRjs7QUFrQkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFmRjs7QUFtQkE7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQWhCRjs7QUFtQkE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFoQkY7O0FBb0JBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBakJGOztBQW9CQTtFQUNFLFdBQUE7RUFDQSxPQUFBO0VBQ0EseUJBQUE7QUFqQkY7O0FBb0JBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQWpCRjs7QUFvQkE7RUFDRSxvQkFBQTtFQUNBLGVBQUE7QUFqQkY7O0FBb0JBO0VBQ0Usb0JBQUE7RUFDQSxlQUFBO0FBakJGOztBQW9CQTtFQUVFLGVBQUE7QUFsQkY7O0FBcUJBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7QUFsQkY7O0FBcUJBO0VBQ0Usb0JBQUE7QUFsQkY7O0FBcUJBO0VBQ0UsZUFBQTtBQWxCRjs7QUFxQkE7RUFDRSxnQkFBQTtBQWxCRjs7QUFxQkE7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7QUFsQkY7O0FBcUJBO0VBQ0UsaUJBQUE7QUFsQkY7O0FBcUJBO0VBQ0UsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFsQkYiLCJmaWxlIjoicmVzZXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLnJlc2V0LWNvbnRhaW5lcntcbi8vICAgd2lkdGg6IDg1JTtcbi8vICAgZGlzcGxheTogZmxleDtcbi8vICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbi8vICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4vLyAgICAgcCB7XG4vLyAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbi8vICAgICB9XG4vLyB9XG5cblxuXG5cblxucCB7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xufVxuXG4uZGFuZ2VyIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmJsdWVCZz5pb24tY29sIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcwN0JCRDtcbn1cblxuOmhvc3Qge1xuICBpb24tY2hlY2tib3gge1xuICAgIC0tc2l6ZTogMTVweDtcbiAgfVxufVxuXG4ubXQtNTAge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4ubXQtMjUge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG4ubWItNTAge1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG4udy0xMDAge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG4udGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jdXMtY2FyZCB7XG4gIG1hcmdpbi10b3A6IC01MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4ubXQtNSB7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLnBsLTIwIHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuLmN1cy1jaGlwLWRpcyB7XG4gIGJhY2tncm91bmQ6ICNENkVDQTY7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIHdpZHRoOiAzMzBweDtcbiAgaGVpZ2h0OiA1M3B4O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmN1cy1jaGlwIHtcbiAgYmFja2dyb3VuZDogI0FCQ0Q2MTtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgd2lkdGg6IDMzMHB4O1xuICBoZWlnaHQ6IDUzcHg7XG59XG5cbi5jdXMtbGFiZWwge1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICNGRkZGO1xuICBmb250LWZhbWlseTogUG9wcGlucztcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDNlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuXG59XG5cbi5jdXMtY2hpcC1zb2NpYWwge1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICB3aWR0aDogMzMwcHg7XG4gIGhlaWdodDogNTNweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0RGREZERjtcbn1cblxuLmN1cy1sYWJlbC1zb2NpYWwge1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBsZXR0ZXItc3BhY2luZzogMC4wM2VtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDE2cHg7XG5cbn1cblxuLnNlcGFyYXRvciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zZXBhcmF0b3IgLmxpbmUge1xuICBoZWlnaHQ6IDJweDtcbiAgZmxleDogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0I2QjZCNjtcbn1cblxuLnNlcGFyYXRvciBwIHtcbiAgcGFkZGluZzogMCAycmVtO1xuICBjb2xvcjogI0I2QjZCNjtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG59XG5cbmlvbi1yb3c+aW9uLWNvbD5pb24taXRlbT5pb24taW5wdXQge1xuICBmb250LWZhbWlseTogUG9wcGlucztcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG5pb24taXRlbT5pb24tbGFiZWwge1xuICBmb250LWZhbWlseTogUG9wcGlucztcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG5pb24taXRlbT5pb24taWNvbiB7XG4gIC8vIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5leWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xuICB0b3A6IDMwcHg7XG4gIHotaW5kZXg6IDEwMDAwO1xufVxuXG5pb24tY29sIHtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG59XG5cbi5mcy0xMiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLm10LTMwIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLnNvY2lhbC1jaGlwLXNwYWNlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG5cbi5tbC0yMCB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG5pb24tZ3JpZCB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBtYXJnaW46IDBweFxufVxuIl19 */");

/***/ }),

/***/ 92585:
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/reset/reset.page.html ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <ion-grid>\n    <ion-row class=\"blueBg\">\n      <ion-col>\n        <div class=\"text-center mb-50\">\n          <img class=\"mt-50 mb-10\" width=\"277\" height=\"78\" src=\"assets/logo.png\" alt=\"\" />\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-grid class=\"cus-card\">\n\n      <ion-row>\n        <ion-col class=\"pl-20\">\n          <div>\n            <ion-icon [routerLink]=\"['/home']\" size=\"large\" name=\"close-outline\"></ion-icon>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"mt-5\">\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"floating\">\n              <ion-icon name=\"mail\" slot=\"start\"></ion-icon>\n              Email\n            </ion-label>\n            <ion-input name='email' type=\"email\" [(ngModel)]=\"email\"></ion-input>\n          </ion-item>\n\n\n\n\n        </ion-col>\n      </ion-row>\n\n\n\n\n    </ion-grid>\n\n    <ion-row class=\"mt-30\">\n      <ion-col class=\"text-center\">\n\n        <ion-chip class='cus-chip' (click)=\"onSendCode()\">\n          <ion-label class=\"text-center cus-label\">\n            Reset Password\n          </ion-label>\n        </ion-chip>\n      </ion-col>\n    </ion-row>\n\n\n\n  </ion-grid>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_auth_reset_reset_module_ts.js.map