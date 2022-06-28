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
    },
    {
        path: 'referrel/:code',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_main_main_setting_referrel_referrel_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./referrel/referrel.module */ 10796)).then(m => m.ReferrelPageModule)
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_setting_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./setting.page.html */ 37481);
/* harmony import */ var _setting_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setting.page.scss */ 6017);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ 19342);
/* harmony import */ var _awesome_cordova_plugins_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/social-sharing/ngx */ 35221);
/* harmony import */ var src_app_service_audio_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/audio.service */ 87494);
/* harmony import */ var src_app_service_rest_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/rest.service */ 90421);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _capacitor_community_admob__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor-community/admob */ 15453);











let SettingPage = class SettingPage {
    constructor(alertController, googlePlus, router, restService, audio, socialSharing) {
        this.alertController = alertController;
        this.googlePlus = googlePlus;
        this.router = router;
        this.restService = restService;
        this.audio = audio;
        this.socialSharing = socialSharing;
        this.ref_code = "";
    }
    ngOnInit() {
        this.user = JSON.parse(localStorage.getItem('user'));
    }
    ionViewDidEnter() {
        this.getUserData();
    }
    onLogout() {
        this.logout();
        this.setLastLogin();
        localStorage.clear();
        this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
        this.router.navigate(['/home'], { replaceUrl: true });
    }
    getUserData() {
        this.restService.getRequest('users/detail').subscribe((res) => {
            if (res) {
                this.ref_code = res.referal_code;
            }
        });
    }
    // async share() {
    //   const alert = await this.alertController.create({
    //     cssClass: 'my-custom-class',
    //     message: 'Email Required',
    //     buttons: [{
    //       text: 'OK', handler: () => {
    //         alert.onDidDismiss()
    //       }
    //     }]
    //   });
    //   await alert.present();
    //   const obj = {
    //     ref_code: this.ref_code,
    //     email: "aqibnwl@gmail.com"
    //   }
    //   this.restService.postRequestToken('users/set-last-login', obj).subscribe((res: any) => {
    //     if (res.status) {
    //       console.log('Last login is set successfully');
    //     }
    //   })
    // }
    logout() {
        _capacitor_community_admob__WEBPACK_IMPORTED_MODULE_6__.AdMob.hideBanner().then(() => {
            document.getElementsByTagName('ion-app')[0].style.bottom = '0';
        });
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
    shareSocial() {
        var options = {
            message: this.ref_code
        };
        this.socialSharing.shareWithOptions(options);
    }
};
SettingPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_2__.GooglePlus },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: src_app_service_rest_service__WEBPACK_IMPORTED_MODULE_5__.RestService },
    { type: src_app_service_audio_service__WEBPACK_IMPORTED_MODULE_4__.AudioService },
    { type: _awesome_cordova_plugins_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_3__.SocialSharing }
];
SettingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".top-container {\n  display: flex;\n  width: 100%;\n  min-height: 107px;\n  background: linear-gradient(180deg, #6976B9 0%, rgba(105, 118, 185, 0.76) 100%);\n  box-shadow: 0px 5px 10px rgba(73, 73, 73, 0.25);\n}\n.top-container .top-body {\n  width: 90%;\n  margin: auto;\n  display: flex;\n}\n.top-container .top-body .text {\n  margin: auto;\n}\n.body-container {\n  border-color: #E5E5E5;\n  min-height: auto;\n}\n.mt-2 {\n  margin-top: 2px;\n}\n.mt-4 {\n  margin-top: 4px;\n}\n.mt-6 {\n  margin-top: 6px;\n}\n.mt-30 {\n  margin-top: 30px;\n}\n.logout-btn {\n  text-align: center;\n}\n.logout-btn button {\n  width: 218px;\n  height: 53px;\n  background: #F29D93;\n  box-shadow: 4px 7px 20px rgba(109, 109, 109, 0.27);\n  border-radius: 90px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: 0.03em;\n  color: #FFFFFF;\n}\n.share-btn {\n  text-align: center;\n  width: 80px;\n  height: 30px;\n  background: green;\n  box-shadow: 4px 7px 20px rgba(109, 109, 109, 0.27);\n  border-radius: 90px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: 0.03em;\n  color: #FFFFFF;\n}\n.text {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 20px;\n  line-height: 30px;\n  letter-spacing: 0.03em;\n  color: #FFFFFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLCtFQUFBO0VBQ0EsK0NBQUE7QUFDRjtBQUNFO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBQ0o7QUFDSTtFQUNFLFlBQUE7QUFDTjtBQUlBO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtBQURGO0FBSUE7RUFDRSxlQUFBO0FBREY7QUFJQTtFQUNFLGVBQUE7QUFERjtBQUlBO0VBQ0UsZUFBQTtBQURGO0FBSUE7RUFDRSxnQkFBQTtBQURGO0FBSUE7RUFDRSxrQkFBQTtBQURGO0FBR0U7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0RBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQURKO0FBS0E7RUFDRSxrQkFBQTtFQUdFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrREFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FBSko7QUFTQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQU5GIiwiZmlsZSI6InNldHRpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvcC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTA3cHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICM2OTc2QjkgMCUsIHJnYmEoMTA1LCAxMTgsIDE4NSwgMC43NikgMTAwJSk7XG4gIGJveC1zaGFkb3c6IDBweCA1cHggMTBweCByZ2JhKDczLCA3MywgNzMsIDAuMjUpO1xuXG4gIC50b3AtYm9keSB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcblxuICAgIC50ZXh0IHtcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICB9XG4gIH1cbn1cblxuLmJvZHktY29udGFpbmVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjRTVFNUU1O1xuICBtaW4taGVpZ2h0OiBhdXRvO1xufVxuXG4ubXQtMiB7XG4gIG1hcmdpbi10b3A6IDJweDtcbn1cblxuLm10LTQge1xuICBtYXJnaW4tdG9wOiA0cHg7XG59XG5cbi5tdC02IHtcbiAgbWFyZ2luLXRvcDogNnB4O1xufVxuXG4ubXQtMzAge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4ubG9nb3V0LWJ0biB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBidXR0b24ge1xuICAgIHdpZHRoOiAyMThweDtcbiAgICBoZWlnaHQ6IDUzcHg7XG4gICAgYmFja2dyb3VuZDogI0YyOUQ5MztcbiAgICBib3gtc2hhZG93OiA0cHggN3B4IDIwcHggcmdiYSgxMDksIDEwOSwgMTA5LCAwLjI3KTtcbiAgICBib3JkZXItcmFkaXVzOiA5MHB4O1xuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wM2VtO1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICB9XG5cbn1cbi5zaGFyZS1idG4ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgXG4gICAgd2lkdGg6IDgwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGJhY2tncm91bmQ6IGdyZWVuO1xuICAgIGJveC1zaGFkb3c6IDRweCA3cHggMjBweCByZ2JhKDEwOSwgMTA5LCAxMDksIDAuMjcpO1xuICAgIGJvcmRlci1yYWRpdXM6IDkwcHg7XG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAzZW07XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gIFxuXG59XG5cbi50ZXh0IHtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDNlbTtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG4iXX0= */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"top-container\">\n    <div class=\"top-body\">\n      <div [routerLink]=\"['/main']\" class=\"icon\">\n        <ion-icon src=\"assets/icon/back-icon.svg\"></ion-icon>\n      </div>\n      <div class=\"text\">Setting</div>\n    </div>\n  </div>\n\n  <div class=\"body-container\">\n\n    <div class=\"mt-30\">\n      <ion-item (click)=\"onUpdateProfile()\" detail>\n        <ion-label>\n          Update Profile\n        </ion-label>\n      </ion-item>\n    </div>\n\n\n    <div class=\"mt-30\">\n      <ion-item lines=\"none\">\n        <ion-label>MUSIC & SOUNDS</ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>\n          Toggle Background Music\n        </ion-label>\n\n        <ion-toggle checked=\"true\" (ionChange)=\"changeSound($event)\" color=\"primary\"></ion-toggle>\n\n      </ion-item>\n    </div>\n\n\n    <div class=\"mt-30\">\n      <ion-item lines=\"none\">\n        <ion-label>LEGAL </ion-label>\n      </ion-item>\n      <ion-item detail>\n        <ion-label>\n          Terms Of Service\n        </ion-label>\n      </ion-item>\n      <ion-item detail>\n        <ion-label>\n          Report A Technical Issue\n        </ion-label>\n      </ion-item>\n    </div>\n\n    <div class=\"mt-30\">\n      <ion-item (click)=\"goToPurchaseDetails()\" detail>\n        <ion-label>\n          Purchased Items\n        </ion-label>\n      </ion-item>\n    </div>\n\n    <div class=\"mt-30\">\n\n      <ion-label>&nbsp;&nbsp;&nbsp;\n        Referrel Code: {{ref_code}}\n      </ion-label> &nbsp;&nbsp; &nbsp; &nbsp;\n      <button class=\"share-btn\" (click)=\"shareSocial()\">share</button>\n\n\n    </div>\n\n\n  </div>\n\n  <div class=\"mt-30 logout-btn\">\n    <button (click)=\"onLogout()\"> LOG OUT</button>\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_main_main_setting_setting_module_ts.js.map