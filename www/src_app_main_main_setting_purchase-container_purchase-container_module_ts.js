(self["webpackChunkpic_playce"] = self["webpackChunkpic_playce"] || []).push([["src_app_main_main_setting_purchase-container_purchase-container_module_ts"],{

/***/ 16223:
/*!**********************************************************************************************!*\
  !*** ./src/app/main/main/setting/purchase-container/filter-unlocked/filter-unlocked.page.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterUnlockedPage": () => (/* binding */ FilterUnlockedPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_filter_unlocked_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./filter-unlocked.page.html */ 42745);
/* harmony import */ var _filter_unlocked_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter-unlocked.page.scss */ 29780);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let FilterUnlockedPage = class FilterUnlockedPage {
    constructor() {
        this.extractedArr = [];
    }
    ngOnInit() {
        this.filterList = JSON.parse(localStorage.getItem('filterList'));
        this.ownedList = JSON.parse(localStorage.getItem('ownedItemsList'));
        for (let i = 0; i < this.ownedList.length; i++) {
            this.getOwnedFilterList(this.ownedList[i].filter_id);
        }
    }
    getOwnedFilterList(id) {
        this.filterList.filter((v) => {
            if (v.id == id) {
                this.extractedArr.push(v);
            }
        });
        console.log('this.extractedArr', this.extractedArr);
    }
};
FilterUnlockedPage.ctorParameters = () => [];
FilterUnlockedPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-filter-unlocked',
        template: _raw_loader_filter_unlocked_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_filter_unlocked_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FilterUnlockedPage);



/***/ }),

/***/ 56002:
/*!**************************************************************************!*\
  !*** ./src/app/main/main/setting/purchase-container/items/items.page.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemsPage": () => (/* binding */ ItemsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_items_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./items.page.html */ 99893);
/* harmony import */ var _items_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./items.page.scss */ 73028);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_service_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/rest.service */ 90421);





let ItemsPage = class ItemsPage {
    constructor(restService) {
        this.restService = restService;
    }
    ngOnInit() {
        this.restService.getRequest('shop/purchase-detail').subscribe((res) => {
            this.ownedItemsList = res.message;
            this.primayFilterRemovalList = this.ownedItemsList.filter(x => x.shop_id == 3);
            this.secondaryFilterRemovalList = this.ownedItemsList.filter(x => x.shop_id == 4);
            this.addTurn = this.ownedItemsList.filter(x => x.shop_id == 5);
            this.revealList = this.ownedItemsList.filter(x => x.shop_id == 6);
            console.log('this.primayFilterRemovalList', this.primayFilterRemovalList);
            console.log('this.secondaryFilterRemovalList', this.secondaryFilterRemovalList);
            console.log('this.addTurn', this.addTurn);
            console.log('this.revealList', this.revealList);
        });
    }
};
ItemsPage.ctorParameters = () => [
    { type: src_app_service_rest_service__WEBPACK_IMPORTED_MODULE_2__.RestService }
];
ItemsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-items',
        template: _raw_loader_items_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_items_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ItemsPage);



/***/ }),

/***/ 95015:
/*!*******************************************************************************************!*\
  !*** ./src/app/main/main/setting/purchase-container/purchase-container-routing.module.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PurchaseContainerPageRoutingModule": () => (/* binding */ PurchaseContainerPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _purchase_container_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./purchase-container.page */ 48664);




const routes = [
    {
        path: '',
        component: _purchase_container_page__WEBPACK_IMPORTED_MODULE_0__.PurchaseContainerPage
    },
    {
        path: 'filter-unlocked',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_main_main_setting_purchase-container_filter-unlocked_filter-unlocked_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./filter-unlocked/filter-unlocked.module */ 48368)).then(m => m.FilterUnlockedPageModule)
    },
    {
        path: 'items',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_main_main_setting_purchase-container_items_items_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./items/items.module */ 92153)).then(m => m.ItemsPageModule)
    }
];
let PurchaseContainerPageRoutingModule = class PurchaseContainerPageRoutingModule {
};
PurchaseContainerPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PurchaseContainerPageRoutingModule);



/***/ }),

/***/ 67786:
/*!***********************************************************************************!*\
  !*** ./src/app/main/main/setting/purchase-container/purchase-container.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PurchaseContainerPageModule": () => (/* binding */ PurchaseContainerPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _purchase_container_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./purchase-container-routing.module */ 95015);
/* harmony import */ var _purchase_container_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./purchase-container.page */ 48664);
/* harmony import */ var _filter_unlocked_filter_unlocked_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter-unlocked/filter-unlocked.page */ 16223);
/* harmony import */ var _items_items_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./items/items.page */ 56002);









let PurchaseContainerPageModule = class PurchaseContainerPageModule {
};
PurchaseContainerPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _purchase_container_routing_module__WEBPACK_IMPORTED_MODULE_0__.PurchaseContainerPageRoutingModule
        ],
        declarations: [_purchase_container_page__WEBPACK_IMPORTED_MODULE_1__.PurchaseContainerPage, _filter_unlocked_filter_unlocked_page__WEBPACK_IMPORTED_MODULE_2__.FilterUnlockedPage, _items_items_page__WEBPACK_IMPORTED_MODULE_3__.ItemsPage]
    })
], PurchaseContainerPageModule);



/***/ }),

/***/ 48664:
/*!*********************************************************************************!*\
  !*** ./src/app/main/main/setting/purchase-container/purchase-container.page.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PurchaseContainerPage": () => (/* binding */ PurchaseContainerPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_purchase_container_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./purchase-container.page.html */ 58564);
/* harmony import */ var _purchase_container_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./purchase-container.page.scss */ 27721);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let PurchaseContainerPage = class PurchaseContainerPage {
    constructor() {
        this.segmentValue = 'filterList';
    }
    ngOnInit() {
    }
    segmentChanged(ev) {
        console.log('Segment changed', ev.detail.value);
        this.segmentValue = ev.detail.value;
    }
};
PurchaseContainerPage.ctorParameters = () => [];
PurchaseContainerPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-purchase-container',
        template: _raw_loader_purchase_container_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_purchase_container_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PurchaseContainerPage);



/***/ }),

/***/ 29780:
/*!************************************************************************************************!*\
  !*** ./src/app/main/main/setting/purchase-container/filter-unlocked/filter-unlocked.page.scss ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaWx0ZXItdW5sb2NrZWQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 73028:
/*!****************************************************************************!*\
  !*** ./src/app/main/main/setting/purchase-container/items/items.page.scss ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpdGVtcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 27721:
/*!***********************************************************************************!*\
  !*** ./src/app/main/main/setting/purchase-container/purchase-container.page.scss ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".top-container {\n  display: flex;\n  width: 100%;\n  min-height: 107px;\n  background: linear-gradient(180deg, #6976B9 0%, rgba(105, 118, 185, 0.76) 100%);\n  box-shadow: 0px 5px 10px rgba(73, 73, 73, 0.25);\n}\n.top-container .top-body {\n  width: 90%;\n  margin: auto;\n  display: flex;\n}\n.top-container .top-body .text {\n  margin: auto;\n}\n.body-container {\n  border-color: #E5E5E5;\n  min-height: auto;\n}\n.mt-2 {\n  margin-top: 2px;\n}\n.mt-4 {\n  margin-top: 4px;\n}\n.mt-6 {\n  margin-top: 6px;\n}\n.mt-30 {\n  margin-top: 30px;\n}\n.logout-btn {\n  text-align: center;\n}\n.logout-btn button {\n  width: 218px;\n  height: 53px;\n  background: #F29D93;\n  box-shadow: 4px 7px 20px rgba(109, 109, 109, 0.27);\n  border-radius: 90px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: 0.03em;\n  color: #FFFFFF;\n}\n.text {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 20px;\n  line-height: 30px;\n  letter-spacing: 0.03em;\n  color: #FFFFFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1cmNoYXNlLWNvbnRhaW5lci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsK0VBQUE7RUFDQSwrQ0FBQTtBQUNGO0FBQ0U7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFDSjtBQUNJO0VBQ0UsWUFBQTtBQUNOO0FBSUE7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0FBREY7QUFJQTtFQUNFLGVBQUE7QUFERjtBQUlBO0VBQ0UsZUFBQTtBQURGO0FBSUE7RUFDRSxlQUFBO0FBREY7QUFJQTtFQUNFLGdCQUFBO0FBREY7QUFJQTtFQUNFLGtCQUFBO0FBREY7QUFHRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrREFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FBREo7QUFNQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQUhGIiwiZmlsZSI6InB1cmNoYXNlLWNvbnRhaW5lci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDdweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzY5NzZCOSAwJSwgcmdiYSgxMDUsIDExOCwgMTg1LCAwLjc2KSAxMDAlKTtcbiAgYm94LXNoYWRvdzogMHB4IDVweCAxMHB4IHJnYmEoNzMsIDczLCA3MywgMC4yNSk7XG5cbiAgLnRvcC1ib2R5IHtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgLnRleHQge1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgIH1cbiAgfVxufVxuXG4uYm9keS1jb250YWluZXIge1xuICBib3JkZXItY29sb3I6ICNFNUU1RTU7XG4gIG1pbi1oZWlnaHQ6IGF1dG87XG59XG5cbi5tdC0yIHtcbiAgbWFyZ2luLXRvcDogMnB4O1xufVxuXG4ubXQtNCB7XG4gIG1hcmdpbi10b3A6IDRweDtcbn1cblxuLm10LTYge1xuICBtYXJnaW4tdG9wOiA2cHg7XG59XG5cbi5tdC0zMCB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5sb2dvdXQtYnRuIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIGJ1dHRvbiB7XG4gICAgd2lkdGg6IDIxOHB4O1xuICAgIGhlaWdodDogNTNweDtcbiAgICBiYWNrZ3JvdW5kOiAjRjI5RDkzO1xuICAgIGJveC1zaGFkb3c6IDRweCA3cHggMjBweCByZ2JhKDEwOSwgMTA5LCAxMDksIDAuMjcpO1xuICAgIGJvcmRlci1yYWRpdXM6IDkwcHg7XG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAzZW07XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gIH1cblxufVxuXG4udGV4dCB7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAzZW07XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuIl19 */");

/***/ }),

/***/ 42745:
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/main/setting/purchase-container/filter-unlocked/filter-unlocked.page.html ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-list>\n  <ion-item *ngFor=\"let filter of extractedArr\">\n    <ion-label>{{filter.name}}</ion-label>\n  </ion-item>\n\n</ion-list>");

/***/ }),

/***/ 99893:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/main/setting/purchase-container/items/items.page.html ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-list *ngIf=\"this.primayFilterRemovalList.length\">\n  <ion-item>\n    <ion-label>{{primayFilterRemovalList.length + 'Primary Filter Remover' }}</ion-label>\n  </ion-item>\n\n</ion-list>\n\n\n<ion-list *ngIf=\"this.secondaryFilterRemovalList.length\">\n  <ion-item>\n    <ion-label>{{secondaryFilterRemovalList.length + 'Primary Filter Remover' }}</ion-label>\n  </ion-item>\n\n</ion-list>\n\n<ion-list *ngIf=\"this.addTurn.length\">\n  <ion-item>\n    <ion-label>{{addTurn.length + 'Primary Filter Remover' }}</ion-label>\n  </ion-item>\n\n</ion-list>\n\n<ion-list *ngIf=\"this.addTurn.length\">\n  <ion-item>\n    <ion-label>{{addTurn.length + 'Primary Filter Remover' }}</ion-label>\n  </ion-item>\n\n</ion-list>");

/***/ }),

/***/ 58564:
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/main/setting/purchase-container/purchase-container.page.html ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"top-container\">\n    <div class=\"top-body\">\n      <div [routerLink]=\"['/main/setting']\" class=\"icon\">\n        <ion-icon src=\"assets/icon/back-icon.svg\"></ion-icon>\n      </div>\n      <div class=\"text\">PURCHASED ITEMS</div>\n    </div>\n  </div>\n\n\n  <div class=\"body-container\">\n\n    <ion-card>\n      <ion-segment (ionChange)=\"segmentChanged($event)\" [value]=\"segmentValue\">\n        <ion-segment-button value=\"filterList\">\n          <ion-label>Filters Unlocked</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"items\">\n          <ion-label>Items</ion-label>\n        </ion-segment-button>\n      </ion-segment>\n\n      <app-filter-unlocked *ngIf=\"segmentValue == 'filterList'\"></app-filter-unlocked>\n      <app-items *ngIf=\"segmentValue == 'items'\"></app-items>\n\n    </ion-card>\n\n\n  </div>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_main_main_setting_purchase-container_purchase-container_module_ts.js.map