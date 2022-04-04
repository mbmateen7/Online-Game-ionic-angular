(self["webpackChunkpic_playce"] = self["webpackChunkpic_playce"] || []).push([["src_app_main_main_setting_setting_module_ts"],{

/***/ 99160:
/*!*************************************************************!*\
  !*** ./src/app/main/main/setting/setting-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingPageRoutingModule": () => (/* binding */ SettingPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _setting_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setting.page */ 87005);




const routes = [
    {
        path: '',
        component: _setting_page__WEBPACK_IMPORTED_MODULE_0__.SettingPage
    },
    {
        path: 'purchase-container',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_main_main_setting_purchase-container_purchase-container_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./purchase-container/purchase-container.module */ 67786)).then(m => m.PurchaseContainerPageModule)
    }
];
let SettingPageRoutingModule = class SettingPageRoutingModule {
};
SettingPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SettingPageRoutingModule);



/***/ }),

/***/ 86327:
/*!*****************************************************!*\
  !*** ./src/app/main/main/setting/setting.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingPageModule": () => (/* binding */ SettingPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _setting_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setting-routing.module */ 99160);
/* harmony import */ var _setting_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setting.page */ 87005);







let SettingPageModule = class SettingPageModule {
};
SettingPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _setting_routing_module__WEBPACK_IMPORTED_MODULE_0__.SettingPageRoutingModule
        ],
        declarations: [_setting_page__WEBPACK_IMPORTED_MODULE_1__.SettingPage]
    })
], SettingPageModule);



/***/ }),

/***/ 87005:
/*!***************************************************!*\
  !*** ./src/app/main/main/setting/setting.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingPage": () => (/* binding */ SettingPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_setting_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./setting.page.html */ 37481);
/* harmony import */ var _setting_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setting.page.scss */ 6017);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ 19342);
/* harmony import */ var src_app_service_audio_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/audio.service */ 87494);
/* harmony import */ var src_app_service_rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/rest.service */ 90421);








let SettingPage = class SettingPage {
    constructor(googlePlus, router, restService, audio) {
        this.googlePlus = googlePlus;
        this.router = router;
        this.restService = restService;
        this.audio = audio;
    }
    ngOnInit() {
        this.user = JSON.parse(localStorage.getItem('user'));
    }
    onLogout() {
        this.logout();
        this.setLastLogin();
        localStorage.clear();
        this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
        this.router.navigate(['/home'], { replaceUrl: true });
    }
    logout() {
        this.googlePlus.logout()
            .then(res => {
            console.log(res);
        })
            .catch(err => console.error(err));
    }
    setLastLogin() {
        let date = new Date();
        const obj = {
            last_login: date
        };
        this.restService.postRequestToken('users/set-last-login', obj).subscribe((res) => {
            if (res.status) {
                console.log('Last login is set successfully');
            }
        });
    }
    changeSound(e) {
        if (e.detail.checked) {
            this.audio.playSound();
        }
        else
            this.audio.stopSound();
    }
    onUpdateProfile() {
        this.router.navigate(['/update-profile']);
        // console.log('---------------')
        // this.router.navigate(['../../update-profile'], { replaceUrl: true })
    }
    goToPurchaseDetails() {
        this.router.navigate(['/main/setting/purchase-container']);
    }
};
SettingPage.ctorParameters = () => [
    { type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_2__.GooglePlus },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_service_rest_service__WEBPACK_IMPORTED_MODULE_4__.RestService },
    { type: src_app_service_audio_service__WEBPACK_IMPORTED_MODULE_3__.AudioService }
];
SettingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-setting',
        template: _raw_loader_setting_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_setting_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SettingPage);



/***/ }),

/***/ 6017:
/*!*****************************************************!*\
  !*** ./src/app/main/main/setting/setting.page.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".top-container {\n  display: flex;\n  width: 100%;\n  min-height: 107px;\n  background: linear-gradient(180deg, #6976B9 0%, rgba(105, 118, 185, 0.76) 100%);\n  box-shadow: 0px 5px 10px rgba(73, 73, 73, 0.25);\n}\n.top-container .top-body {\n  width: 90%;\n  margin: auto;\n  display: flex;\n}\n.top-container .top-body .text {\n  margin: auto;\n}\n.body-container {\n  border-color: #E5E5E5;\n  min-height: auto;\n}\n.mt-2 {\n  margin-top: 2px;\n}\n.mt-4 {\n  margin-top: 4px;\n}\n.mt-6 {\n  margin-top: 6px;\n}\n.mt-30 {\n  margin-top: 30px;\n}\n.logout-btn {\n  text-align: center;\n}\n.logout-btn button {\n  width: 218px;\n  height: 53px;\n  background: #F29D93;\n  box-shadow: 4px 7px 20px rgba(109, 109, 109, 0.27);\n  border-radius: 90px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: 0.03em;\n  color: #FFFFFF;\n}\n.text {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 20px;\n  line-height: 30px;\n  letter-spacing: 0.03em;\n  color: #FFFFFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLCtFQUFBO0VBQ0EsK0NBQUE7QUFDRjtBQUNFO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBQ0o7QUFDSTtFQUNFLFlBQUE7QUFDTjtBQUlBO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtBQURGO0FBSUE7RUFDRSxlQUFBO0FBREY7QUFJQTtFQUNFLGVBQUE7QUFERjtBQUlBO0VBQ0UsZUFBQTtBQURGO0FBSUE7RUFDRSxnQkFBQTtBQURGO0FBSUE7RUFDRSxrQkFBQTtBQURGO0FBR0U7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0RBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQURKO0FBTUE7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUFIRiIsImZpbGUiOiJzZXR0aW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3AtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDEwN3B4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICM2OTc2QjkgMCUsIHJnYmEoMTA1LCAxMTgsIDE4NSwgMC43NikgMTAwJSk7XHJcbiAgYm94LXNoYWRvdzogMHB4IDVweCAxMHB4IHJnYmEoNzMsIDczLCA3MywgMC4yNSk7XHJcblxyXG4gIC50b3AtYm9keSB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAudGV4dCB7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5ib2R5LWNvbnRhaW5lciB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjRTVFNUU1O1xyXG4gIG1pbi1oZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5tdC0yIHtcclxuICBtYXJnaW4tdG9wOiAycHg7XHJcbn1cclxuXHJcbi5tdC00IHtcclxuICBtYXJnaW4tdG9wOiA0cHg7XHJcbn1cclxuXHJcbi5tdC02IHtcclxuICBtYXJnaW4tdG9wOiA2cHg7XHJcbn1cclxuXHJcbi5tdC0zMCB7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuLmxvZ291dC1idG4ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgYnV0dG9uIHtcclxuICAgIHdpZHRoOiAyMThweDtcclxuICAgIGhlaWdodDogNTNweDtcclxuICAgIGJhY2tncm91bmQ6ICNGMjlEOTM7XHJcbiAgICBib3gtc2hhZG93OiA0cHggN3B4IDIwcHggcmdiYSgxMDksIDEwOSwgMTA5LCAwLjI3KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDkwcHg7XHJcbiAgICBmb250LWZhbWlseTogUG9wcGlucztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAzZW07XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICB9XHJcblxyXG59XHJcblxyXG4udGV4dCB7XHJcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAzZW07XHJcbiAgY29sb3I6ICNGRkZGRkY7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 37481:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/main/setting/setting.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"top-container\">\r\n    <div class=\"top-body\">\r\n      <div [routerLink]=\"['/main']\" class=\"icon\">\r\n        <ion-icon src=\"assets/icon/back-icon.svg\"></ion-icon>\r\n      </div>\r\n      <div class=\"text\">Setting</div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"body-container\">\r\n\r\n    <div class=\"mt-30\">\r\n      <ion-item (click)=\"onUpdateProfile()\" detail>\r\n        <ion-label>\r\n          Update Profile\r\n        </ion-label>\r\n      </ion-item>\r\n    </div>\r\n\r\n\r\n    <div class=\"mt-30\">\r\n      <ion-item lines=\"none\">\r\n        <ion-label>MUSIC & SOUNDS</ion-label>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label>\r\n          Toggle Background Music\r\n        </ion-label>\r\n\r\n        <ion-toggle checked=\"true\" (ionChange)=\"changeSound($event)\" color=\"primary\"></ion-toggle>\r\n\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label>\r\n          Toggle Sfx.Music\r\n        </ion-label>\r\n        <ion-toggle (ionChange)=\"changeSound($event)\" color=\"primary\"></ion-toggle>\r\n      </ion-item>\r\n    </div>\r\n\r\n\r\n    <div class=\"mt-30\">\r\n      <ion-item lines=\"none\">\r\n        <ion-label>LEGAL </ion-label>\r\n      </ion-item>\r\n      <ion-item detail>\r\n        <ion-label>\r\n          Terms Of Service\r\n        </ion-label>\r\n      </ion-item>\r\n      <ion-item detail>\r\n        <ion-label>\r\n          Report A Technical Issue\r\n        </ion-label>\r\n      </ion-item>\r\n    </div>\r\n\r\n    <div class=\"mt-30\">\r\n      <ion-item (click)=\"goToPurchaseDetails()\" detail>\r\n        <ion-label>\r\n          Purchased Items\r\n        </ion-label>\r\n      </ion-item>\r\n    </div>\r\n\r\n\r\n\r\n\r\n  </div>\r\n\r\n  <div class=\"mt-30 logout-btn\">\r\n    <button (click)=\"onLogout()\"> LOG OUT</button>\r\n  </div>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_main_main_setting_setting_module_ts.js.map