(self["webpackChunkpic_playce"] = self["webpackChunkpic_playce"] || []).push([["src_app_main_main_setting_referrel_referrel_module_ts"],{

/***/ 95289:
/*!***********************************************************************!*\
  !*** ./src/app/main/main/setting/referrel/referrel-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReferrelPageRoutingModule": () => (/* binding */ ReferrelPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _referrel_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./referrel.page */ 72872);




const routes = [
    {
        path: '',
        component: _referrel_page__WEBPACK_IMPORTED_MODULE_0__.ReferrelPage
    }
];
let ReferrelPageRoutingModule = class ReferrelPageRoutingModule {
};
ReferrelPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ReferrelPageRoutingModule);



/***/ }),

/***/ 10796:
/*!***************************************************************!*\
  !*** ./src/app/main/main/setting/referrel/referrel.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReferrelPageModule": () => (/* binding */ ReferrelPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _referrel_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./referrel-routing.module */ 95289);
/* harmony import */ var _referrel_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./referrel.page */ 72872);







let ReferrelPageModule = class ReferrelPageModule {
};
ReferrelPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _referrel_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReferrelPageRoutingModule
        ],
        declarations: [_referrel_page__WEBPACK_IMPORTED_MODULE_1__.ReferrelPage]
    })
], ReferrelPageModule);



/***/ }),

/***/ 72872:
/*!*************************************************************!*\
  !*** ./src/app/main/main/setting/referrel/referrel.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReferrelPage": () => (/* binding */ ReferrelPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_referrel_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./referrel.page.html */ 55232);
/* harmony import */ var _referrel_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./referrel.page.scss */ 36864);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_service_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/rest.service */ 90421);







let ReferrelPage = class ReferrelPage {
    constructor(route, restService, alertController, router) {
        this.route = route;
        this.restService = restService;
        this.alertController = alertController;
        this.router = router;
    }
    ngOnInit() {
        this.code = this.route.snapshot.paramMap.get('code');
        this.shareVia();
    }
    shareVia() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                message: 'shared via email or phone',
                buttons: [{
                        text: 'Email', handler: () => {
                            this.emailorphone = "email";
                            alert.onDidDismiss();
                        }
                    },
                    {
                        text: 'Phone', handler: () => {
                            this.emailorphone = "phone";
                            alert.onDidDismiss();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    onSendCode() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (this.emailorphone == "email") {
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
                let json = {
                    email: this.email.replace(/\s/g, ''),
                    ref_code: this.code
                };
                this.restService.postRequestToken('users/referrel', json).subscribe((res) => {
                    this.presentAlert();
                });
            }
            else {
                if (!this.phone) {
                    const alert = yield this.alertController.create({
                        cssClass: 'my-custom-class',
                        message: 'phone Number Required',
                        buttons: [{
                                text: 'OK', handler: () => {
                                    alert.onDidDismiss();
                                }
                            }]
                    });
                    yield alert.present();
                }
                let json = {
                    number: this.phone,
                    ref_code: this.code
                };
                this.restService.postRequestToken('users/refertoNumber', json).subscribe((res) => {
                    this.presentAlert();
                });
            }
        });
    }
    presentAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                message: 'Code is sent Succefully',
                buttons: [{
                        text: 'OK', handler: () => {
                            this.router.navigate(['main/setting']);
                        }
                    }]
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
        });
    }
};
ReferrelPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: src_app_service_rest_service__WEBPACK_IMPORTED_MODULE_2__.RestService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
ReferrelPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-referrel',
        template: _raw_loader_referrel_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_referrel_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ReferrelPage);



/***/ }),

/***/ 36864:
/*!***************************************************************!*\
  !*** ./src/app/main/main/setting/referrel/referrel.page.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("p {\n  font-family: Poppins;\n}\n\n.danger {\n  color: red;\n}\n\n.blueBg > ion-col {\n  background-color: #707BBD;\n}\n\n:host ion-checkbox {\n  --size: 15px;\n}\n\n.mt-50 {\n  margin-top: 50px;\n}\n\n.mt-25 {\n  margin-top: 25px;\n}\n\n.mb-50 {\n  margin-bottom: 50px;\n}\n\n.w-100 {\n  width: 100% !important;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.cus-card {\n  margin-top: -50px;\n  position: relative;\n  border-radius: 50px;\n  background-color: white;\n}\n\n.mt-5 {\n  margin-top: 5px;\n}\n\n.pl-20 {\n  padding-left: 20px;\n}\n\n.cus-chip-dis {\n  background: #D6ECA6;\n  border-radius: 30px;\n  width: 330px;\n  height: 53px;\n  pointer-events: none;\n}\n\n.cus-chip {\n  background: #ABCD61;\n  border-radius: 30px;\n  width: 330px;\n  height: 53px;\n}\n\n.cus-label {\n  width: 100%;\n  color: #FFFF;\n  font-family: Poppins;\n  letter-spacing: 0.03em;\n  font-weight: 700;\n  font-size: 16px;\n}\n\n.cus-chip-social {\n  background: #FFFFFF;\n  border-radius: 30px;\n  width: 330px;\n  height: 53px;\n  border: 1px solid #DFDFDF;\n}\n\n.cus-label-social {\n  width: 100%;\n  color: #000000;\n  font-family: Poppins;\n  letter-spacing: 0.03em;\n  font-weight: 700;\n  font-size: 16px;\n}\n\n.separator {\n  display: flex;\n  align-items: center;\n}\n\n.separator .line {\n  height: 2px;\n  flex: 1;\n  background-color: #B6B6B6;\n}\n\n.separator p {\n  padding: 0 2rem;\n  color: #B6B6B6;\n  font-family: Poppins;\n}\n\nion-row > ion-col > ion-item > ion-input {\n  font-family: Poppins;\n  font-size: 14px;\n}\n\nion-item > ion-label {\n  font-family: Poppins;\n  font-size: 14px;\n}\n\nion-item > ion-icon {\n  font-size: 14px;\n}\n\n.eye {\n  position: absolute;\n  right: 10px;\n  top: 30px;\n  z-index: 10000;\n}\n\nion-col {\n  font-family: Poppins;\n}\n\n.fs-12 {\n  font-size: 12px;\n}\n\n.mt-30 {\n  margin-top: 30px;\n}\n\n.social-chip-space {\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.ml-20 {\n  margin-left: 20px;\n}\n\nion-grid {\n  padding: 0px !important;\n  overflow-y: auto;\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZmVycmVsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjQTtFQUNFLG9CQUFBO0FBYkY7O0FBZ0JBO0VBQ0UsVUFBQTtBQWJGOztBQWdCQTtFQUNFLHlCQUFBO0FBYkY7O0FBaUJFO0VBQ0UsWUFBQTtBQWRKOztBQWtCQTtFQUNFLGdCQUFBO0FBZkY7O0FBa0JBO0VBQ0UsZ0JBQUE7QUFmRjs7QUFrQkE7RUFDRSxtQkFBQTtBQWZGOztBQWtCQTtFQUNFLHNCQUFBO0FBZkY7O0FBa0JBO0VBQ0Usa0JBQUE7QUFmRjs7QUFrQkE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQWZGOztBQWtCQTtFQUNFLGVBQUE7QUFmRjs7QUFrQkE7RUFDRSxrQkFBQTtBQWZGOztBQWtCQTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FBZkY7O0FBa0JBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBZkY7O0FBa0JBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBZkY7O0FBbUJBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUFoQkY7O0FBbUJBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBaEJGOztBQW9CQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQWpCRjs7QUFvQkE7RUFDRSxXQUFBO0VBQ0EsT0FBQTtFQUNBLHlCQUFBO0FBakJGOztBQW9CQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUFqQkY7O0FBb0JBO0VBQ0Usb0JBQUE7RUFDQSxlQUFBO0FBakJGOztBQW9CQTtFQUNFLG9CQUFBO0VBQ0EsZUFBQTtBQWpCRjs7QUFvQkE7RUFFRSxlQUFBO0FBbEJGOztBQXFCQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0FBbEJGOztBQXFCQTtFQUNFLG9CQUFBO0FBbEJGOztBQXFCQTtFQUNFLGVBQUE7QUFsQkY7O0FBcUJBO0VBQ0UsZ0JBQUE7QUFsQkY7O0FBcUJBO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0FBbEJGOztBQXFCQTtFQUNFLGlCQUFBO0FBbEJGOztBQXFCQTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBbEJGIiwiZmlsZSI6InJlZmVycmVsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5yZXNldC1jb250YWluZXJ7XG4vLyAgIHdpZHRoOiA4NSU7XG4vLyAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4vLyAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuLy8gICAgIHAge1xuLy8gICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4vLyAgICAgfVxuLy8gfVxuXG5cblxuXG5cbnAge1xuICBmb250LWZhbWlseTogUG9wcGlucztcbn1cblxuLmRhbmdlciB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5ibHVlQmc+aW9uLWNvbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3MDdCQkQ7XG59XG5cbjpob3N0IHtcbiAgaW9uLWNoZWNrYm94IHtcbiAgICAtLXNpemU6IDE1cHg7XG4gIH1cbn1cblxuLm10LTUwIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuLm10LTI1IHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cblxuLm1iLTUwIHtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxuLnctMTAwIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuLnRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY3VzLWNhcmQge1xuICBtYXJnaW4tdG9wOiAtNTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLm10LTUge1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5wbC0yMCB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxuLmN1cy1jaGlwLWRpcyB7XG4gIGJhY2tncm91bmQ6ICNENkVDQTY7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIHdpZHRoOiAzMzBweDtcbiAgaGVpZ2h0OiA1M3B4O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmN1cy1jaGlwIHtcbiAgYmFja2dyb3VuZDogI0FCQ0Q2MTtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgd2lkdGg6IDMzMHB4O1xuICBoZWlnaHQ6IDUzcHg7XG59XG5cbi5jdXMtbGFiZWwge1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICNGRkZGO1xuICBmb250LWZhbWlseTogUG9wcGlucztcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDNlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuXG59XG5cbi5jdXMtY2hpcC1zb2NpYWwge1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICB3aWR0aDogMzMwcHg7XG4gIGhlaWdodDogNTNweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0RGREZERjtcbn1cblxuLmN1cy1sYWJlbC1zb2NpYWwge1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBsZXR0ZXItc3BhY2luZzogMC4wM2VtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDE2cHg7XG5cbn1cblxuLnNlcGFyYXRvciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zZXBhcmF0b3IgLmxpbmUge1xuICBoZWlnaHQ6IDJweDtcbiAgZmxleDogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0I2QjZCNjtcbn1cblxuLnNlcGFyYXRvciBwIHtcbiAgcGFkZGluZzogMCAycmVtO1xuICBjb2xvcjogI0I2QjZCNjtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG59XG5cbmlvbi1yb3c+aW9uLWNvbD5pb24taXRlbT5pb24taW5wdXQge1xuICBmb250LWZhbWlseTogUG9wcGlucztcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG5pb24taXRlbT5pb24tbGFiZWwge1xuICBmb250LWZhbWlseTogUG9wcGlucztcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG5pb24taXRlbT5pb24taWNvbiB7XG4gIC8vIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5leWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xuICB0b3A6IDMwcHg7XG4gIHotaW5kZXg6IDEwMDAwO1xufVxuXG5pb24tY29sIHtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG59XG5cbi5mcy0xMiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLm10LTMwIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLnNvY2lhbC1jaGlwLXNwYWNlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG5cbi5tbC0yMCB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG5pb24tZ3JpZCB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBtYXJnaW46IDBweFxufVxuIl19 */");

/***/ }),

/***/ 55232:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/main/setting/referrel/referrel.page.html ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <ion-grid>\n    <ion-row class=\"blueBg\">\n      <ion-col>\n        <div class=\"text-center mb-50\">\n          <img class=\"mt-50 mb-10\" width=\"277\" height=\"78\" src=\"assets/logo.png\" alt=\"\" />\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-grid class=\"cus-card\">\n\n      <ion-row>\n        <ion-col class=\"pl-20\">\n          <div>\n            <ion-icon [routerLink]=\"['/main/setting']\" size=\"large\" name=\"close-outline\"></ion-icon>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"mt-5\" *ngIf=\"emailorphone =='email'\">\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"floating\">\n              <ion-icon name=\"mail\" slot=\"start\"></ion-icon>\n              Email\n            </ion-label>\n            <ion-input name='email' [(ngModel)]=\"email\"></ion-input>\n          </ion-item>\n\n\n\n\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"mt-5\" *ngIf=\"emailorphone =='phone'\">\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"floating\">\n              <ion-icon name=\"call-outline\" slot=\"start\"></ion-icon>\n              Phone\n            </ion-label>\n            <ion-input name='email' [(ngModel)]=\"phone\" placeholder=\"Enter number with country code\"></ion-input>\n          </ion-item>\n\n\n\n\n        </ion-col>\n      </ion-row>\n\n\n\n    </ion-grid>\n\n    <ion-row class=\"mt-30\">\n      <ion-col class=\"text-center\">\n\n        <ion-chip class='cus-chip' (click)=\"onSendCode()\">\n          <ion-label class=\"text-center cus-label\">\n            send code\n          </ion-label>\n        </ion-chip>\n      </ion-col>\n    </ion-row>\n\n\n\n  </ion-grid>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_main_main_setting_referrel_referrel_module_ts.js.map