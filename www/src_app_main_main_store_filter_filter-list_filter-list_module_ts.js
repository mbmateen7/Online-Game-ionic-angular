(self["webpackChunkpic_playce"] = self["webpackChunkpic_playce"] || []).push([["src_app_main_main_store_filter_filter-list_filter-list_module_ts"],{

/***/ 61376:
/*!**********************************************************************************!*\
  !*** ./src/app/main/main/store/filter/filter-list/filter-list-routing.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterListPageRoutingModule": () => (/* binding */ FilterListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _filter_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter-list.page */ 4305);




const routes = [
    {
        path: '',
        component: _filter_list_page__WEBPACK_IMPORTED_MODULE_0__.FilterListPage
    }
];
let FilterListPageRoutingModule = class FilterListPageRoutingModule {
};
FilterListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FilterListPageRoutingModule);



/***/ }),

/***/ 90371:
/*!**************************************************************************!*\
  !*** ./src/app/main/main/store/filter/filter-list/filter-list.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterListPageModule": () => (/* binding */ FilterListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _filter_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter-list-routing.module */ 61376);
/* harmony import */ var _filter_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter-list.page */ 4305);







let FilterListPageModule = class FilterListPageModule {
};
FilterListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _filter_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.FilterListPageRoutingModule
        ],
        declarations: [_filter_list_page__WEBPACK_IMPORTED_MODULE_1__.FilterListPage]
    })
], FilterListPageModule);



/***/ }),

/***/ 4305:
/*!************************************************************************!*\
  !*** ./src/app/main/main/store/filter/filter-list/filter-list.page.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterListPage": () => (/* binding */ FilterListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_filter_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./filter-list.page.html */ 15247);
/* harmony import */ var _filter_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter-list.page.scss */ 95446);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_service_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/rest.service */ 90421);
/* harmony import */ var src_app_service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/user.service */ 84981);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ 88259);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);








let FilterListPage = class FilterListPage {
    constructor(restService, userService, navCtrl) {
        this.restService = restService;
        this.userService = userService;
        this.navCtrl = navCtrl;
        this.sortedFilterList = [];
    }
    ngOnInit() {
    }
    compare(a, b) {
        if (a.isPurchased > b.isPurchased) {
            return -1;
        }
        if (a.isPurchased < b.isPurchased) {
            return 1;
        }
        return 0;
    }
    ionViewDidEnter() {
        this.user = JSON.parse(localStorage.getItem('user'));
        this.filterList = JSON.parse(localStorage.getItem('filterList'));
        this.ownedItemsList = JSON.parse(localStorage.getItem('ownedItemsList'));
        let ownedFilterIds = [];
        for (let i = 0; i < this.ownedItemsList.length; i++) {
            if (this.ownedItemsList[i].filter_id) {
                ownedFilterIds.push(this.ownedItemsList[i].filter_id);
            }
        }
        for (let i = 0; i < this.filterList.length; i++) {
            if (ownedFilterIds.includes(this.filterList[i].id)) {
                this.filterList[i].isPurchased = 1;
                this.sortedFilterList.push(this.filterList[i]);
            }
            else {
                this.filterList[i].isPurchased = 0;
                this.sortedFilterList.push(this.filterList[i]);
            }
        }
        // console.log('this.sortedFilterList', this.sortedFilterList);
        this.sortedFilterList.sort(this.compare);
        // console.log('this.sortedFilterList', this.sortedFilterList);
    }
    onBuyPrimaryFilter(filter) {
        if (filter.isPurchased) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
                title: 'Error',
                text: 'You have already purchased the filter'
            });
            return;
        }
        let filterObj = {
            shop_id: filter.shop_id,
            filter_id: filter.id
        };
        this.restService.postRequestToken('shop/purchase', filterObj).subscribe((res) => {
            if (res.status) {
                this.getOwnedItemList();
                let filterObj = {
                    shop_id: null,
                    filter_id: null
                };
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
                    title: 'Success',
                    text: 'You have successfully purchased the filter'
                });
            }
        });
        this.user.puzzle_pieces = this.user.puzzle_pieces - 3000;
        this.userService.updateUser(this.user);
        localStorage.setItem('user', JSON.stringify(this.user));
        this.navCtrl.navigateBack('/main/store');
    }
    getOwnedItemList() {
        this.restService.getRequest('shop/purchase-detail').subscribe((res) => {
            this.ownedItemsList = res.message;
            localStorage.setItem('ownedItemsList', JSON.stringify(this.ownedItemsList));
        });
    }
};
FilterListPage.ctorParameters = () => [
    { type: src_app_service_rest_service__WEBPACK_IMPORTED_MODULE_2__.RestService },
    { type: src_app_service_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController }
];
FilterListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-filter-list',
        template: _raw_loader_filter_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_filter_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FilterListPage);



/***/ }),

/***/ 95446:
/*!**************************************************************************!*\
  !*** ./src/app/main/main/store/filter/filter-list/filter-list.page.scss ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".top-container {\n  display: flex;\n  width: 100%;\n  min-height: 107px;\n  background: linear-gradient(180deg, #6976B9 0%, rgba(105, 118, 185, 0.76) 100%);\n  box-shadow: 0px 5px 10px rgba(73, 73, 73, 0.25);\n}\n.top-container .top-body {\n  width: 90%;\n  margin: auto;\n  display: flex;\n}\n.top-container .top-body .text {\n  margin: auto;\n}\n.text {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 20px;\n  line-height: 30px;\n  letter-spacing: 0.03em;\n  color: #FFFFFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbHRlci1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSwrRUFBQTtFQUNBLCtDQUFBO0FBQ0Y7QUFDRTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUNKO0FBQ0k7RUFDRSxZQUFBO0FBQ047QUFJQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQURGIiwiZmlsZSI6ImZpbHRlci1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3AtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwN3B4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjNjk3NkI5IDAlLCByZ2JhKDEwNSwgMTE4LCAxODUsIDAuNzYpIDEwMCUpO1xuICBib3gtc2hhZG93OiAwcHggNXB4IDEwcHggcmdiYSg3MywgNzMsIDczLCAwLjI1KTtcblxuICAudG9wLWJvZHkge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAudGV4dCB7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgfVxuICB9XG59XG5cbi50ZXh0IHtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDNlbTtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG4iXX0= */");

/***/ }),

/***/ 15247:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/main/store/filter/filter-list/filter-list.page.html ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n\n  <div class=\"top-container\">\n    <div class=\"top-body\">\n      <div [routerLink]=\"['/main/store']\" class=\"icon\">\n        <ion-icon src=\"assets/icon/back-icon.svg\"></ion-icon>\n      </div>\n      <div class=\"text\">Filter List</div>\n    </div>\n  </div>\n\n  <ion-list>\n    <ion-item *ngFor=\"let filter of sortedFilterList\">\n      <ion-label (click)=\"onBuyPrimaryFilter(filter)\">{{filter.name}}</ion-label>\n      <ion-icon *ngIf=\"!filter.isPurchased\" slot=\"end\" name=\"lock-closed-outline\"></ion-icon>\n      <ion-icon *ngIf=\"filter.isPurchased\" slot=\"end\" name=\"lock-open-outline\"></ion-icon>\n    </ion-item>\n  </ion-list>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_main_main_store_filter_filter-list_filter-list_module_ts.js.map