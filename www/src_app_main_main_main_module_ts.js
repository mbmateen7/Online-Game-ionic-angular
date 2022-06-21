(self["webpackChunkpic_playce"] = self["webpackChunkpic_playce"] || []).push([["src_app_main_main_main_module_ts"],{

/***/ 80660:
/*!**************************************************!*\
  !*** ./src/app/main/main/main-routing.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainPageRoutingModule": () => (/* binding */ MainPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.page */ 73987);




const routes = [
    {
        path: '',
        component: _main_page__WEBPACK_IMPORTED_MODULE_0__.MainPage,
        children: [
            {
                path: 'game',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_main_main_game_game_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./game/game.module */ 73848)).then(m => m.GamePageModule)
            },
            {
                path: 'freind',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_main_main_freind_freind_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./freind/freind.module */ 67607)).then(m => m.FreindPageModule)
            },
            {
                path: 'store',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_main_main_store_store_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./store/store.module */ 75361)).then(m => m.StorePageModule)
            },
            {
                path: 'setting',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_main_main_setting_setting_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./setting/setting.module */ 86327)).then(m => m.SettingPageModule)
            },
            {
                path: '',
                redirectTo: '/main/game',
                pathMatch: 'full'
            }
        ]
    },
];
let MainPageRoutingModule = class MainPageRoutingModule {
};
MainPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MainPageRoutingModule);



/***/ }),

/***/ 42301:
/*!******************************************!*\
  !*** ./src/app/main/main/main.module.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainPageModule": () => (/* binding */ MainPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _main_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-routing.module */ 80660);
/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.page */ 73987);







let MainPageModule = class MainPageModule {
};
MainPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _main_routing_module__WEBPACK_IMPORTED_MODULE_0__.MainPageRoutingModule
        ],
        declarations: [_main_page__WEBPACK_IMPORTED_MODULE_1__.MainPage]
    })
], MainPageModule);



/***/ }),

/***/ 73987:
/*!****************************************!*\
  !*** ./src/app/main/main/main.page.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainPage": () => (/* binding */ MainPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_main_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./main.page.html */ 3495);
/* harmony import */ var _main_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.page.scss */ 52382);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_service_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/rest.service */ 90421);





let MainPage = class MainPage {
    constructor(restService) {
        this.restService = restService;
        this.activeTab = 'game';
    }
    ngOnInit() {
        this.restService.getRequest('shop/AllFilterList').subscribe((res) => {
            // this.spinnerDialog.show();
            console.log('All filters response');
            if (res.status) {
                this.filterList = [];
                this.secondaryFilterList = [];
                for (let i = 0; i < res.message.length; i++) {
                    if (res.message[i].type == 'primary') {
                        this.filterList.push(res.message[i]);
                    }
                    if (res.message[i].type == 'secondary') {
                        this.secondaryFilterList.push(res.message[i]);
                    }
                }
                localStorage.setItem('filterList', JSON.stringify(this.filterList));
                localStorage.setItem('secondaryList', JSON.stringify(this.secondaryFilterList));
                console.log('SecondatyList', this.secondaryFilterList);
            }
            this.restService.getRequest('shop/purchase-detail').subscribe((res) => {
                console.log('purchase detail reponse');
                this.ownedItemsList = res.message;
                localStorage.setItem('ownedItemsList', JSON.stringify(this.ownedItemsList));
                // console.log('this.ownedItemsList', this.ownedItemsList);
                // this.isLoading = false;
                // this.spinnerDialog.hide();
            });
        });
    }
    setCurrentTab(e) {
        console.log('This is event', e.tab);
        this.activeTab = e.tab;
    }
};
MainPage.ctorParameters = () => [
    { type: src_app_service_rest_service__WEBPACK_IMPORTED_MODULE_2__.RestService }
];
MainPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-main',
        template: _raw_loader_main_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_main_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MainPage);



/***/ }),

/***/ 52382:
/*!******************************************!*\
  !*** ./src/app/main/main/main.page.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".activeText {\n  color: #8A94C8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQUNGIiwiZmlsZSI6Im1haW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjdGl2ZVRleHQge1xuICBjb2xvcjogIzhBOTRDODtcbn1cbiJdfQ== */");

/***/ }),

/***/ 3495:
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/main/main.page.html ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\n  <ion-tabs (ionTabsDidChange)=\"setCurrentTab($event)\">\n    <ion-tab-bar slot=\"bottom\">\n      <!-- <ion-tab-button tab=\"main\">\n        <ion-icon name=\"calendar\"></ion-icon>\n        <ion-label>Schedule</ion-label>\n        <ion-badge>6</ion-badge>\n      </ion-tab-button> -->\n\n      <ion-tab-button tab=\"game\">\n        <ion-icon [src]=\"activeTab == 'game'  ? 'assets/icon/picplayce_dark.svg' : 'assets/icon/c-dull-logo.svg' \">\n        </ion-icon>\n\n        <ion-label [ngClass]=\"{'activeText': activeTab == 'game'}\">Game</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button tab=\"freind\">\n        <ion-icon [src]=\"activeTab == 'freind' ? 'assets/icon/friend_dark.svg' : 'assets/icon/friend.svg'\">\n        </ion-icon>\n        <ion-label [ngClass]=\"{'activeText': activeTab == 'freind'}\">Friends</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button tab=\"store\">\n        <ion-icon [src]=\"activeTab == 'store' ? 'assets/icon/store_dark.svg' : 'assets/icon/store.svg'\"></ion-icon>\n        <ion-label [ngClass]=\"{'activeText': activeTab == 'store'}\">Store</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button tab=\"setting\">\n        <ion-icon [src]=\"activeTab == 'setting' ? 'assets/icon/setting_dark.svg' : 'assets/icon/setting.svg'\">\n        </ion-icon>\n        <ion-label [ngClass]=\"{'activeText': activeTab == 'setting'}\">Setting</ion-label>\n      </ion-tab-button>\n    </ion-tab-bar>\n  </ion-tabs>\n</ion-app>");

/***/ })

}]);
//# sourceMappingURL=src_app_main_main_main_module_ts.js.map