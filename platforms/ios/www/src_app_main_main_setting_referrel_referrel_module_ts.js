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
            var json = {
                email: this.email.replace(/\s/g, ''),
                ref_code: this.code
            };
            this.restService.postRequestToken('users/referrel', json).subscribe((res) => {
                this.presentAlert();
            });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("p {\n  font-family: Poppins;\n}\n\n.danger {\n  color: red;\n}\n\n.blueBg > ion-col {\n  background-color: #707BBD;\n}\n\n:host ion-checkbox {\n  --size: 15px;\n}\n\n.mt-50 {\n  margin-top: 50px;\n}\n\n.mt-25 {\n  margin-top: 25px;\n}\n\n.mb-50 {\n  margin-bottom: 50px;\n}\n\n.w-100 {\n  width: 100% !important;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.cus-card {\n  margin-top: -50px;\n  position: relative;\n  border-radius: 50px;\n  background-color: white;\n}\n\n.mt-5 {\n  margin-top: 5px;\n}\n\n.pl-20 {\n  padding-left: 20px;\n}\n\n.cus-chip-dis {\n  background: #D6ECA6;\n  border-radius: 30px;\n  width: 330px;\n  height: 53px;\n  pointer-events: none;\n}\n\n.cus-chip {\n  background: #ABCD61;\n  border-radius: 30px;\n  width: 330px;\n  height: 53px;\n}\n\n.cus-label {\n  width: 100%;\n  color: #FFFF;\n  font-family: Poppins;\n  letter-spacing: 0.03em;\n  font-weight: 700;\n  font-size: 16px;\n}\n\n.cus-chip-social {\n  background: #FFFFFF;\n  border-radius: 30px;\n  width: 330px;\n  height: 53px;\n  border: 1px solid #DFDFDF;\n}\n\n.cus-label-social {\n  width: 100%;\n  color: #000000;\n  font-family: Poppins;\n  letter-spacing: 0.03em;\n  font-weight: 700;\n  font-size: 16px;\n}\n\n.separator {\n  display: flex;\n  align-items: center;\n}\n\n.separator .line {\n  height: 2px;\n  flex: 1;\n  background-color: #B6B6B6;\n}\n\n.separator p {\n  padding: 0 2rem;\n  color: #B6B6B6;\n  font-family: Poppins;\n}\n\nion-row > ion-col > ion-item > ion-input {\n  font-family: Poppins;\n  font-size: 14px;\n}\n\nion-item > ion-label {\n  font-family: Poppins;\n  font-size: 14px;\n}\n\nion-item > ion-icon {\n  font-size: 14px;\n}\n\n.eye {\n  position: absolute;\n  right: 10px;\n  top: 30px;\n  z-index: 10000;\n}\n\nion-col {\n  font-family: Poppins;\n}\n\n.fs-12 {\n  font-size: 12px;\n}\n\n.mt-30 {\n  margin-top: 30px;\n}\n\n.social-chip-space {\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.ml-20 {\n  margin-left: 20px;\n}\n\nion-grid {\n  padding: 0px !important;\n  overflow-y: auto;\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZmVycmVsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjQTtFQUNFLG9CQUFBO0FBYkY7O0FBZ0JBO0VBQ0UsVUFBQTtBQWJGOztBQWdCQTtFQUNFLHlCQUFBO0FBYkY7O0FBaUJFO0VBQ0UsWUFBQTtBQWRKOztBQWtCQTtFQUNFLGdCQUFBO0FBZkY7O0FBa0JBO0VBQ0UsZ0JBQUE7QUFmRjs7QUFrQkE7RUFDRSxtQkFBQTtBQWZGOztBQWtCQTtFQUNFLHNCQUFBO0FBZkY7O0FBa0JBO0VBQ0Usa0JBQUE7QUFmRjs7QUFrQkE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQWZGOztBQWtCQTtFQUNFLGVBQUE7QUFmRjs7QUFrQkE7RUFDRSxrQkFBQTtBQWZGOztBQWtCQTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FBZkY7O0FBa0JBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBZkY7O0FBa0JBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBZkY7O0FBbUJBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUFoQkY7O0FBbUJBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBaEJGOztBQW9CQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQWpCRjs7QUFvQkE7RUFDRSxXQUFBO0VBQ0EsT0FBQTtFQUNBLHlCQUFBO0FBakJGOztBQW9CQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUFqQkY7O0FBb0JBO0VBQ0Usb0JBQUE7RUFDQSxlQUFBO0FBakJGOztBQW9CQTtFQUNFLG9CQUFBO0VBQ0EsZUFBQTtBQWpCRjs7QUFvQkE7RUFFRSxlQUFBO0FBbEJGOztBQXFCQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0FBbEJGOztBQXFCQTtFQUNFLG9CQUFBO0FBbEJGOztBQXFCQTtFQUNFLGVBQUE7QUFsQkY7O0FBcUJBO0VBQ0UsZ0JBQUE7QUFsQkY7O0FBcUJBO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0FBbEJGOztBQXFCQTtFQUNFLGlCQUFBO0FBbEJGOztBQXFCQTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBbEJGIiwiZmlsZSI6InJlZmVycmVsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5yZXNldC1jb250YWluZXJ7XHJcbi8vICAgd2lkdGg6IDg1JTtcclxuLy8gICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbi8vICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbi8vICAgICBwIHtcclxuLy8gICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5wIHtcclxuICBmb250LWZhbWlseTogUG9wcGlucztcclxufVxyXG5cclxuLmRhbmdlciB7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLmJsdWVCZz5pb24tY29sIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzA3QkJEO1xyXG59XHJcblxyXG46aG9zdCB7XHJcbiAgaW9uLWNoZWNrYm94IHtcclxuICAgIC0tc2l6ZTogMTVweDtcclxuICB9XHJcbn1cclxuXHJcbi5tdC01MCB7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxufVxyXG5cclxuLm10LTI1IHtcclxuICBtYXJnaW4tdG9wOiAyNXB4O1xyXG59XHJcblxyXG4ubWItNTAge1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbi53LTEwMCB7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRleHQtY2VudGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jdXMtY2FyZCB7XHJcbiAgbWFyZ2luLXRvcDogLTUwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5tdC01IHtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuXHJcbi5wbC0yMCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG4uY3VzLWNoaXAtZGlzIHtcclxuICBiYWNrZ3JvdW5kOiAjRDZFQ0E2O1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgd2lkdGg6IDMzMHB4O1xyXG4gIGhlaWdodDogNTNweDtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuLmN1cy1jaGlwIHtcclxuICBiYWNrZ3JvdW5kOiAjQUJDRDYxO1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgd2lkdGg6IDMzMHB4O1xyXG4gIGhlaWdodDogNTNweDtcclxufVxyXG5cclxuLmN1cy1sYWJlbCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgY29sb3I6ICNGRkZGO1xyXG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAzZW07XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcblxyXG59XHJcblxyXG4uY3VzLWNoaXAtc29jaWFsIHtcclxuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgd2lkdGg6IDMzMHB4O1xyXG4gIGhlaWdodDogNTNweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjREZERkRGO1xyXG59XHJcblxyXG4uY3VzLWxhYmVsLXNvY2lhbCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDNlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuXHJcbn1cclxuXHJcbi5zZXBhcmF0b3Ige1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnNlcGFyYXRvciAubGluZSB7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgZmxleDogMTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjZCNkI2O1xyXG59XHJcblxyXG4uc2VwYXJhdG9yIHAge1xyXG4gIHBhZGRpbmc6IDAgMnJlbTtcclxuICBjb2xvcjogI0I2QjZCNjtcclxuICBmb250LWZhbWlseTogUG9wcGlucztcclxufVxyXG5cclxuaW9uLXJvdz5pb24tY29sPmlvbi1pdGVtPmlvbi1pbnB1dCB7XHJcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG5pb24taXRlbT5pb24tbGFiZWwge1xyXG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuaW9uLWl0ZW0+aW9uLWljb24ge1xyXG4gIC8vIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLmV5ZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG4gIHRvcDogMzBweDtcclxuICB6LWluZGV4OiAxMDAwMDtcclxufVxyXG5cclxuaW9uLWNvbCB7XHJcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbn1cclxuXHJcbi5mcy0xMiB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4ubXQtMzAge1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuXHJcbi5zb2NpYWwtY2hpcC1zcGFjZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxufVxyXG5cclxuLm1sLTIwIHtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG5cclxuaW9uLWdyaWQge1xyXG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgbWFyZ2luOiAwcHhcclxufVxyXG4iXX0= */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <ion-grid>\n    <ion-row class=\"blueBg\">\n      <ion-col>\n        <div class=\"text-center mb-50\">\n          <img class=\"mt-50 mb-10\" width=\"277\" height=\"78\" src=\"assets/logo.png\" alt=\"\" />\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-grid class=\"cus-card\">\n\n      <ion-row>\n        <ion-col class=\"pl-20\">\n          <div>\n            <ion-icon [routerLink]=\"['/main/setting']\" size=\"large\" name=\"close-outline\"></ion-icon>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"mt-5\">\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"floating\">\n              <ion-icon name=\"mail\" slot=\"start\"></ion-icon>\n              Email\n            </ion-label>\n            <ion-input name='email' [(ngModel)]=\"email\"></ion-input>\n          </ion-item>\n\n\n\n\n        </ion-col>\n      </ion-row>\n\n\n\n\n    </ion-grid>\n\n    <ion-row class=\"mt-30\">\n      <ion-col class=\"text-center\">\n\n        <ion-chip class='cus-chip' (click)=\"onSendCode()\">\n          <ion-label class=\"text-center cus-label\">\n            send code\n          </ion-label>\n        </ion-chip>\n      </ion-col>\n    </ion-row>\n\n\n\n  </ion-grid>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_main_main_setting_referrel_referrel_module_ts.js.map