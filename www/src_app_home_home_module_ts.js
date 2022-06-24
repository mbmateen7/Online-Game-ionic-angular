(self["webpackChunkpic_playce"] = self["webpackChunkpic_playce"] || []).push([["src_app_home_home_module_ts"],{

/***/ 52003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 62267);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 62267);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 52003);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 62267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.page.html */ 49764);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 2610);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 80476);





let HomePage = class HomePage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePage);



/***/ }),

/***/ 2610:
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host ion-content {\n  background-image: url('landingBg.png') !important;\n  --background: null !important;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.land-text {\n  color: #FFF;\n  font-family: Poppins;\n  letter-spacing: 0.03em;\n  margin-top: 10px;\n}\n\n.mt-190 {\n  margin-top: 190px;\n}\n\n.mt-165 {\n  margin-top: 165px;\n}\n\n.cus-chip {\n  background: #FFFFFF;\n  border-radius: 30px;\n  width: 330px;\n  height: 53px;\n}\n\n.cus-label {\n  color: #697DBD;\n  font-family: Poppins;\n  letter-spacing: 0.03em;\n  font-weight: 700;\n  font-size: 16px;\n  width: 100%;\n}\n\n.separator {\n  display: flex;\n  align-items: center;\n}\n\n.separator .line {\n  height: 2px;\n  flex: 1;\n  background-color: #fff;\n}\n\n.separator p {\n  padding: 0 2rem;\n  color: #FFF;\n  font-family: Poppins;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.cus-login {\n  font-family: Poppins;\n  letter-spacing: 0.03em;\n  color: #FFFFFF;\n  font-weight: 600;\n}\n\n.w-100 {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0UsaURBQUE7RUFDQSw2QkFBQTtBQUROOztBQU1BO0VBQ0Usa0JBQUE7QUFIRjs7QUFLQTtFQUNFLFdBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUFGRjs7QUFJQTtFQUNFLGlCQUFBO0FBREY7O0FBSUE7RUFDRSxpQkFBQTtBQURGOztBQUdBO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBQUo7O0FBSUE7RUFDRyxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFESDs7QUFJQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQURGOztBQUlBO0VBQ0UsV0FBQTtFQUNBLE9BQUE7RUFDQSxzQkFBQTtBQURGOztBQUlBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtBQURGOztBQUdBO0VBQ0Usa0JBQUE7QUFBRjs7QUFFQTtFQUNFLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7QUFDRiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICA6aG9zdHtcbiAgICBpb24tY29udGVudHtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2xhbmRpbmdCZy5wbmcnKSAhaW1wb3J0YW50O1xuICAgICAgLS1iYWNrZ3JvdW5kOiBudWxsICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG5cblxuLnRleHQtY2VudGVye1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubGFuZC10ZXh0e1xuICBjb2xvcjogI0ZGRjtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gIGxldHRlci1zcGFjaW5nOiAgMC4wM2VtO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLm10LTE5MHtcbiAgbWFyZ2luLXRvcDogMTkwcHg7XG59XG5cbi5tdC0xNjV7XG4gIG1hcmdpbi10b3A6IDE2NXB4O1xufVxuLmN1cy1jaGlwe1xuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICB3aWR0aDogMzMwcHg7XG4gICAgaGVpZ2h0OiA1M3B4O1xuXG59XG5cbi5jdXMtbGFiZWx7XG4gICBjb2xvcjogICM2OTdEQkQ7XG4gICBmb250LWZhbWlseTogUG9wcGlucztcbiAgIGxldHRlci1zcGFjaW5nOiAwLjAzZW07XG4gICBmb250LXdlaWdodDogNzAwO1xuICAgZm9udC1zaXplOiAxNnB4O1xuICAgd2lkdGg6IDEwMCU7XG59XG5cbi5zZXBhcmF0b3J7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zZXBhcmF0b3IgLmxpbmV7XG4gIGhlaWdodDogMnB4O1xuICBmbGV4OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4uc2VwYXJhdG9yIHB7XG4gIHBhZGRpbmc6IDAgMnJlbTtcbiAgY29sb3I6ICNGRkY7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xufVxuLnRleHQtY2VudGVye1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY3VzLWxvZ2lue1xuICBmb250LWZhbWlseTogUG9wcGlucztcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDNlbTtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi53LTEwMHtcbiAgd2lkdGg6MTAwJSA7XG59XG4iXX0= */");

/***/ }),

/***/ 49764:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <ion-grid>\n    <ion-row>\n      <div class=\"text-center mt-165 w-100\">\n        <img width=\"277px\" height=\"78px\" src=\"assets/logo.png\" alt=\"\">\n        <div class=\"text-center land-text\">\n          Turn your pictures into puzzles <br> and stump your friends!x\n        </div>\n      </div>\n    </ion-row>\n\n    <ion-row>\n      <div [routerLink]=\"['/sign-up']\" class=\"mt-190  text-center w-100\">\n        <ion-chip class=\"cus-chip\">\n          <ion-label class=\"cus-label\">Sign Up Now</ion-label>\n        </ion-chip>\n      </div>\n\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <div class=\"separator\">\n          <div class=\"line\"></div>\n          <p>OR</p>\n          <div class=\"line\"></div>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <div [routerLink]=\"['/login']\" class=\"text-center cus-login\">LOG IN</div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map