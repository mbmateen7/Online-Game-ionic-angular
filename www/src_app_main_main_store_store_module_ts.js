(self["webpackChunkpic_playce"] = self["webpackChunkpic_playce"] || []).push([["src_app_main_main_store_store_module_ts"],{

/***/ 82197:
/*!*******************************************************!*\
  !*** ./src/app/main/main/store/bundle/bundle.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BundlePage": () => (/* binding */ BundlePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_bundle_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./bundle.page.html */ 55258);
/* harmony import */ var _bundle_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bundle.page.scss */ 43534);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_service_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/rest.service */ 90421);
/* harmony import */ var _ionic_native_in_app_purchase_2_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/in-app-purchase-2/ngx */ 73532);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);







let BundlePage = class BundlePage {
    constructor(restService, platform, store, ref) {
        this.restService = restService;
        this.platform = platform;
        this.store = store;
        this.ref = ref;
        this.data = [
            {
                name: '100 PuzzlePieces',
                image1: 'bundleshop.png',
                image2: 'buy099.png',
                selector: 'bundles', price: '$0.99'
            },
            {
                name: '550 PuzzlePieces',
                image1: 'bundleshop.png',
                image2: 'buy499.png',
                selector: 'bundles', price: '$4.99'
            },
            {
                name: '1,200 PuzzlePieces',
                image1: 'bundleshop.png',
                image2: 'buy999.png',
                selector: 'bundles', price: '$9.99'
            },
            {
                name: '2,600 PuzzlePieces',
                image1: 'bundleshop.png',
                image2: 'buy1999.png',
                selector: 'bundles', price: '$19.99'
            },
            {
                name: '7,000 PuzzlePieces',
                image1: 'bundleshop.png',
                image2: 'buy4999.png',
                selector: 'bundles', price: '$49.99'
            },
            {
                name: '15,000 PuzzlePieces',
                image1: 'bundleshop.png',
                image2: 'buy9999.png',
                selector: 'bundles', price: '$99.99'
            }
        ];
        this.platform.ready().then(() => {
            this.store.verbosity = this.store.DEBUG;
            this.registerProducts();
            this.setupListeners();
        });
    }
    ngOnInit() {
    }
    registerProducts() {
        let productIds = [
            'com.picplayce.game.100pp',
            'com.picplayce.game.550pp',
            'com.picplayce.game.1200pp',
            'com.picplayce.game.2600pp',
            'com.picplayce.game.7000pp',
            'com.picplayce.game.15000pp'
        ];
        for (let i = 0; i < productIds.length; i++) {
            this.store.register({
                id: productIds[i],
                type: this.store.CONSUMABLE
            });
        }
        this.store.refresh();
    }
    setupListeners() {
        this.store.when('product')
            .approved((p) => {
            // console.log('Approved', p);
            this.ref.detectChanges();
            return p.verify();
        }).verified((p) => p.finish());
    }
    onBuyBundle(item) {
        let productId;
        let productIds = ['com.picplayce.game.100pp', 'com.picplayce.game.550pp', 'com.picplayce.game.1200pp',
            'com.picplayce.game.2600pp', 'com.picplayce.game.7000pp', 'com.picplayce.game.15000pp'];
        let comparison = ['100 PuzzlePieces', '550 PuzzlePieces', '1,200 PuzzlePieces', '2,600 PuzzlePieces', '7,000 PuzzlePieces', '15,000 PuzzlePieces'];
        for (let i = 0; i < 6; i++) {
            if (item == comparison[i]) {
                productId = productIds[i];
                console.log('tried to buy this', item, comparison[i], productId);
                ////alert(productId);
                break;
            }
        }
        // alert('Coming Soon!');
        this.buyItems(productId);
    }
    buyItems(productId) {
        this.store.order(productId).then(res => {
            console.log('THis is response of product purchase', res);
            productId = productId.split('com.picplayce.game.').pop();
            productId = productId.split('.');
            productId = productId[0].split('pp');
            productId = parseInt(productId[0]);
            this.purchaseItem('', productId, 'currency');
        }).catch((err) => {
            console.log('Error while purchase', err);
            alert('Please try again');
        });
    }
    purchaseItem(cost, itemName, type) {
        console.log('Item Name', itemName);
    }
};
BundlePage.ctorParameters = () => [
    { type: src_app_service_rest_service__WEBPACK_IMPORTED_MODULE_2__.RestService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.Platform },
    { type: _ionic_native_in_app_purchase_2_ngx__WEBPACK_IMPORTED_MODULE_3__.InAppPurchase2 },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef }
];
BundlePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-bundle',
        template: _raw_loader_bundle_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_bundle_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], BundlePage);



/***/ }),

/***/ 2500:
/*!*******************************************************!*\
  !*** ./src/app/main/main/store/filter/filter.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterPage": () => (/* binding */ FilterPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_filter_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./filter.page.html */ 87386);
/* harmony import */ var _filter_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter.page.scss */ 5780);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_service_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/rest.service */ 90421);
/* harmony import */ var src_app_service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/user.service */ 84981);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ 88259);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);









let FilterPage = class FilterPage {
    constructor(route, restService, userService, navCtrl, router) {
        this.route = route;
        this.restService = restService;
        this.userService = userService;
        this.navCtrl = navCtrl;
        this.router = router;
        this.messageEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        this.filterData = null;
    }
    ngOnInit() {
        this.user = JSON.parse(localStorage.getItem('user'));
        // console.log('getFilterData', this.getFilterData)
    }
    getOwnedItemList() {
        this.restService.getRequest('shop/purchase-detail').subscribe((res) => {
            this.ownedItemsList = res.message;
            localStorage.setItem('ownedItemsList', JSON.stringify(this.ownedItemsList));
        });
    }
    onBuyPrimaryFilter() {
        var _a, _b;
        if (this.user.puzzle_pieces > 3000) {
            if (((_a = this.getFilterData) === null || _a === void 0 ? void 0 : _a.shop_id) && ((_b = this.getFilterData) === null || _b === void 0 ? void 0 : _b.id)) {
                let filterObj = {
                    shop_id: this.getFilterData.shop_id,
                    filter_id: this.getFilterData.id
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
                this.navCtrl.navigateBack('filter');
            }
            else {
                this.navCtrl.navigateForward('main/store/filter/filter-list');
            }
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
                title: 'Error',
                text: 'You Donot have enough puzzle pieces. want to buy?'
            }).then(res => {
                if (res.isConfirmed) {
                    this.messageEvent.emit(true);
                }
            });
        }
    }
};
FilterPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: src_app_service_rest_service__WEBPACK_IMPORTED_MODULE_2__.RestService },
    { type: src_app_service_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
FilterPage.propDecorators = {
    getFilterData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    messageEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output }]
};
FilterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-filter',
        template: _raw_loader_filter_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_filter_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FilterPage);



/***/ }),

/***/ 95795:
/*!***************************************************!*\
  !*** ./src/app/main/main/store/item/item.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemPage": () => (/* binding */ ItemPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_item_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./item.page.html */ 80297);
/* harmony import */ var _item_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item.page.scss */ 92619);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_service_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/rest.service */ 90421);
/* harmony import */ var src_app_service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/user.service */ 84981);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ 88259);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);







let ItemPage = class ItemPage {
    constructor(restService, userService) {
        this.restService = restService;
        this.userService = userService;
        this.messageEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        this.shopList = [];
    }
    ngOnInit() {
        this.user = JSON.parse(localStorage.getItem('user'));
        this.restService.getRequest('shop/get-bundle-list').subscribe((res) => {
            console.log(res.data);
            this.shopList = res.data;
        });
    }
    onBuyBundle(shop) {
        if (this.user.puzzle_pieces > shop.price) {
            this.restService.postRequestToken('shop/purchase', { shop_id: shop.id }).subscribe((res) => {
                if (res.status) {
                    this.getOwnedItemList();
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
                        title: 'Success',
                        text: 'You have successfully purchased',
                        timer: 2000
                    });
                }
            });
            this.user.puzzle_pieces = this.user.puzzle_pieces - shop.price;
            this.userService.updateUser(this.user);
            localStorage.setItem('user', JSON.stringify(this.user));
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
                title: 'Error',
                text: 'You Donot have enough puzzle pieces. want to buy?'
            }).then(res => {
                if (res.isConfirmed) {
                    this.messageEvent.emit(true);
                }
            });
        }
    }
    getOwnedItemList() {
        this.restService.getRequest('shop/purchase-detail').subscribe((res) => {
            this.ownedItemsList = res.message;
            localStorage.setItem('ownedItemsList', JSON.stringify(this.ownedItemsList));
        });
    }
};
ItemPage.ctorParameters = () => [
    { type: src_app_service_rest_service__WEBPACK_IMPORTED_MODULE_2__.RestService },
    { type: src_app_service_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService }
];
ItemPage.propDecorators = {
    getFilterData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    messageEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output }]
};
ItemPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-item',
        template: _raw_loader_item_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_item_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ItemPage);



/***/ }),

/***/ 90605:
/*!*********************************************************!*\
  !*** ./src/app/main/main/store/store-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorePageRoutingModule": () => (/* binding */ StorePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _store_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store.page */ 46824);




const routes = [
    {
        path: '',
        component: _store_page__WEBPACK_IMPORTED_MODULE_0__.StorePage
    }
];
let StorePageRoutingModule = class StorePageRoutingModule {
};
StorePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], StorePageRoutingModule);



/***/ }),

/***/ 75361:
/*!*************************************************!*\
  !*** ./src/app/main/main/store/store.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorePageModule": () => (/* binding */ StorePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _store_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store-routing.module */ 90605);
/* harmony import */ var _store_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store.page */ 46824);
/* harmony import */ var _filter_filter_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter/filter.page */ 2500);
/* harmony import */ var _item_item_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./item/item.page */ 95795);
/* harmony import */ var _bundle_bundle_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bundle/bundle.page */ 82197);










let StorePageModule = class StorePageModule {
};
StorePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _store_routing_module__WEBPACK_IMPORTED_MODULE_0__.StorePageRoutingModule,
        ],
        declarations: [_store_page__WEBPACK_IMPORTED_MODULE_1__.StorePage, _filter_filter_page__WEBPACK_IMPORTED_MODULE_2__.FilterPage, _item_item_page__WEBPACK_IMPORTED_MODULE_3__.ItemPage, _bundle_bundle_page__WEBPACK_IMPORTED_MODULE_4__.BundlePage],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_6__.CUSTOM_ELEMENTS_SCHEMA]
    })
], StorePageModule);



/***/ }),

/***/ 46824:
/*!***********************************************!*\
  !*** ./src/app/main/main/store/store.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorePage": () => (/* binding */ StorePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_store_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./store.page.html */ 24791);
/* harmony import */ var _store_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store.page.scss */ 43505);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/user.service */ 84981);
/* harmony import */ var _filter_filter_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filter/filter.page */ 2500);







let StorePage = class StorePage {
    constructor(route, userService) {
        this.route = route;
        this.userService = userService;
        this.isFilterOpened = true;
        this.isItemOpened = false;
        this.isBundleOpened = false;
        this.filterPage = false;
        this.userService.userSourceValue;
        this.userService.userData.subscribe(res => {
            console.log(res);
            this.user = JSON.parse(res);
        });
    }
    ngOnInit() {
        this.user = JSON.parse(localStorage.getItem('user'));
    }
    ionViewWillEnter() {
        this.filterData = JSON.parse(this.route.snapshot.queryParamMap.get('filterData'));
        console.log('FilterData', this.filterData);
        this.filterPage = this.filterData.id ? true : false;
    }
    changeTab(x) {
        if (x === 'f') {
            this.isFilterOpened = true;
            this.isItemOpened = false;
            this.isBundleOpened = false;
        }
        if (x === 'i') {
            this.isFilterOpened = false;
            this.isItemOpened = true;
            this.isBundleOpened = false;
        }
        if (x === 'b') {
            this.isFilterOpened = false;
            this.isItemOpened = false;
            this.isBundleOpened = true;
        }
    }
    receiveMessage($event) {
        // this.message = $event
        console.log('Eventt', $event);
        this.isFilterOpened = false;
        this.isItemOpened = false;
        this.isBundleOpened = true;
    }
};
StorePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: src_app_service_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService }
];
StorePage.propDecorators = {
    child: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: [_filter_filter_page__WEBPACK_IMPORTED_MODULE_3__.FilterPage,] }]
};
StorePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-store',
        template: _raw_loader_store_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_store_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], StorePage);



/***/ }),

/***/ 43534:
/*!*********************************************************!*\
  !*** ./src/app/main/main/store/bundle/bundle.page.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".main-container {\n  width: 95%;\n  margin: auto;\n}\n.main-container .list {\n  display: flex;\n  justify-content: space-between;\n}\n.main-container .list img {\n  vertical-align: middle;\n}\nspan {\n  font-family: Poppins;\n}\n.filter-text {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 15px;\n  line-height: 22px;\n  color: #000000;\n}\n.cus-btn {\n  width: 90px;\n  height: 28px;\n  background: #9dcaec;\n  border-radius: 30px;\n  text-align: center;\n}\n.cus-btn .wh-text {\n  font-family: Poppins;\n  font-size: 12px;\n  line-height: 25px;\n  letter-spacing: 0.03em;\n  color: #ffffff;\n  padding-left: 5px;\n}\n.pl-5 {\n  padding-left: 5px;\n}\n.mt-10 {\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1bmRsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtBQUNGO0FBQ0U7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUFDSjtBQUNJO0VBQ0Usc0JBQUE7QUFDTjtBQUlBO0VBQ0Usb0JBQUE7QUFERjtBQUlBO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBR0EsY0FBQTtBQUhGO0FBTUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUhGO0FBS0U7RUFDRSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBSEo7QUFPQTtFQUNFLGlCQUFBO0FBSkY7QUFPQTtFQUNFLGdCQUFBO0FBSkYiLCJmaWxlIjoiYnVuZGxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA5NSU7XG4gIG1hcmdpbjogYXV0bztcblxuICAubGlzdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICBpbWcge1xuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB9XG4gIH1cbn1cblxuc3BhbiB7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xufVxuXG4uZmlsdGVyLXRleHQge1xuICBmb250LWZhbWlseTogUG9wcGlucztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuXG5cbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi5jdXMtYnRuIHtcbiAgd2lkdGg6IDkwcHg7XG4gIGhlaWdodDogMjhweDtcbiAgYmFja2dyb3VuZDogIzlkY2FlYztcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIC53aC10ZXh0IHtcbiAgICBmb250LWZhbWlseTogUG9wcGlucztcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDNlbTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgfVxufVxuXG4ucGwtNSB7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xufVxuXG4ubXQtMTAge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuIl19 */");

/***/ }),

/***/ 5780:
/*!*********************************************************!*\
  !*** ./src/app/main/main/store/filter/filter.page.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".main-container {\n  width: 95%;\n  margin: auto;\n}\n.main-container .list {\n  display: flex;\n  justify-content: space-between;\n}\n.main-container .list img {\n  vertical-align: middle;\n}\nspan {\n  font-family: Poppins;\n}\n.filter-text {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 15px;\n  line-height: 22px;\n  letter-spacing: 0.03em;\n  color: #000000;\n}\n.cus-btn {\n  width: 90px;\n  height: 28px;\n  background: #9dcaec;\n  border-radius: 30px;\n  text-align: center;\n}\n.cus-btn .wh-text {\n  font-family: Poppins;\n  font-size: 12px;\n  line-height: 25px;\n  letter-spacing: 0.03em;\n  color: #ffffff;\n  padding-left: 5px;\n}\n.pl-5 {\n  padding-left: 5px;\n}\n.mt-10 {\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbHRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtBQUNGO0FBQUU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUFFSjtBQURJO0VBQ0Usc0JBQUE7QUFHTjtBQUVBO0VBQ0Usb0JBQUE7QUFDRjtBQUVBO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFFQSxjQUFBO0FBQUY7QUFHQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNDLGtCQUFBO0FBQUg7QUFFRTtFQUNFLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFBSjtBQUlBO0VBQ0UsaUJBQUE7QUFERjtBQUdBO0VBQ0UsZ0JBQUE7QUFBRiIsImZpbGUiOiJmaWx0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tY29udGFpbmVyIHtcbiAgd2lkdGg6IDk1JTtcbiAgbWFyZ2luOiBhdXRvO1xuICAubGlzdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgaW1nIHtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgfVxuICB9XG59XG5cbnNwYW4ge1xuICBmb250LWZhbWlseTogUG9wcGlucztcbn1cblxuLmZpbHRlci10ZXh0IHtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDNlbTtcblxuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLmN1cy1idG4ge1xuICB3aWR0aDogOTBweDtcbiAgaGVpZ2h0OiAyOHB4O1xuICBiYWNrZ3JvdW5kOiAjOWRjYWVjO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIC53aC10ZXh0IHtcbiAgICBmb250LWZhbWlseTogUG9wcGlucztcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDNlbTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgfVxufVxuXG4ucGwtNSB7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xufVxuLm10LTEwIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ 92619:
/*!*****************************************************!*\
  !*** ./src/app/main/main/store/item/item.page.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".main-container {\n  width: 95%;\n  margin: auto;\n}\n.main-container .list {\n  display: flex;\n  justify-content: space-between;\n}\n.main-container .list img {\n  vertical-align: middle;\n}\nspan {\n  font-family: Poppins;\n}\n.filter-text {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 15px;\n  line-height: 22px;\n  letter-spacing: 0.03em;\n  color: #000000;\n}\n.cus-btn {\n  width: 90px;\n  height: 28px;\n  background: #9dcaec;\n  border-radius: 30px;\n  text-align: center;\n}\n.cus-btn .wh-text {\n  font-family: Poppins;\n  font-size: 12px;\n  line-height: 25px;\n  letter-spacing: 0.03em;\n  color: #ffffff;\n  padding-left: 5px;\n}\n.pl-5 {\n  padding-left: 5px;\n}\n.mt-10 {\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7QUFDRjtBQUFFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FBRUo7QUFESTtFQUNFLHNCQUFBO0FBR047QUFFQTtFQUNFLG9CQUFBO0FBQ0Y7QUFFQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBRUEsY0FBQTtBQUFGO0FBR0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQyxrQkFBQTtBQUFIO0FBRUU7RUFDRSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBQUo7QUFJQTtFQUNFLGlCQUFBO0FBREY7QUFHQTtFQUNFLGdCQUFBO0FBQUYiLCJmaWxlIjoiaXRlbS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jb250YWluZXIge1xuICB3aWR0aDogOTUlO1xuICBtYXJnaW46IGF1dG87XG4gIC5saXN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBpbWcge1xuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB9XG4gIH1cbn1cblxuc3BhbiB7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xufVxuXG4uZmlsdGVyLXRleHQge1xuICBmb250LWZhbWlseTogUG9wcGlucztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wM2VtO1xuXG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4uY3VzLWJ0biB7XG4gIHdpZHRoOiA5MHB4O1xuICBoZWlnaHQ6IDI4cHg7XG4gIGJhY2tncm91bmQ6ICM5ZGNhZWM7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgLndoLXRleHQge1xuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wM2VtO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICB9XG59XG5cbi5wbC01IHtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG4ubXQtMTAge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuIl19 */");

/***/ }),

/***/ 43505:
/*!*************************************************!*\
  !*** ./src/app/main/main/store/store.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("p {\n  font-family: Poppins;\n}\n\nion-grid {\n  padding: 0px !important;\n  overflow-y: auto;\n}\n\n.top {\n  width: 100vw;\n  height: 107px;\n  background: linear-gradient(180deg, #6976b9 0%, rgba(105, 118, 185, 0.76) 100%);\n  box-shadow: 0px 5px 10px rgba(73, 73, 73, 0.25);\n}\n\n.top-box {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n\n.currency-bg {\n  width: 89px;\n  height: 26px;\n  background: #ffffff;\n  box-shadow: inset 0px 0px 6px #a7a7a7;\n  z-index: 0;\n  margin-left: -15px;\n}\n\n.box {\n  display: flex;\n  align-items: center;\n}\n\n.pl-10 {\n  padding-left: 10px;\n}\n\n.pl-5 {\n  padding-left: 5px;\n}\n\n.username-css {\n  letter-spacing: 0.03em;\n  color: #ffffff;\n  font-weight: 600;\n  font-size: 15px;\n  line-height: 22px;\n  font-family: Poppins;\n}\n\n.home-currency {\n  display: flex;\n  align-content: center;\n}\n\n.content-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100%;\n}\n\nspan {\n  font-family: Poppins;\n}\n\n.font-700 {\n  font-weight: 700;\n}\n\n.f-12 {\n  font-size: 12px;\n}\n\n.plus-bg {\n  width: 30px;\n  height: 30px;\n  background: #99c43c;\n  z-index: 1;\n  display: flex;\n  justify-content: center;\n}\n\n.ml--10 {\n  margin-left: -10px;\n}\n\n.mt-15 {\n  margin-top: 15px;\n}\n\n.mt-25 {\n  margin-top: 25px;\n}\n\n.lvl-circle {\n  background: #373b63;\n  width: 70px;\n  height: 70px;\n  border-radius: 50px;\n  border: 5px solid #c8cbe7;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.lvl-circle-y {\n  background: #f7d049;\n  width: 70px;\n  height: 70px;\n  border-radius: 50px;\n  border: 5px solid #feefb9;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.lvl-circle-y > span {\n  font-family: Poppins;\n  color: #ffffff;\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 27px;\n}\n\n.lvl-circle > span {\n  font-family: Poppins;\n  color: #ffffff;\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 27px;\n}\n\n.ml-8 {\n  margin-left: 8px;\n}\n\n.mt-2 {\n  margin-top: 2px;\n}\n\n.ml-2 {\n  margin-left: 2px;\n}\n\n.mt-10 {\n  margin-top: 10px;\n}\n\n.ml-10 {\n  margin-left: 10px;\n}\n\n.ml-8 {\n  margin-left: 8px;\n}\n\n.btn-end {\n  display: flex;\n  width: 100%;\n  justify-content: end;\n  margin-right: 10px;\n}\n\n.cus-btn {\n  --background: #99c43c;\n  border-radius: 30px;\n  width: 87px;\n  height: 28px;\n  font-size: 14px;\n  letter-spacing: 0.03em;\n}\n\n.play-cus-btn {\n  display: flex;\n  justify-content: center;\n}\n\n.play-cus-btn > ion-button {\n  margin-top: -35px;\n  --background: linear-gradient(85.81deg, #99c43c 13.89%, #c5e67e 95.94%);\n  box-sizing: border-box;\n  --border-radius: 90px;\n  width: 218px;\n  height: 53px;\n  font-family: Poppins;\n  font-weight: bold;\n  font-size: 16px;\n}\n\n.store-bg {\n  background-image: url('store-bg.svg');\n  background-repeat: no-repeat;\n  height: 155px;\n  background-size: cover;\n  background-position: center;\n}\n\n.store-bg .store-body {\n  display: flex;\n  flex-direction: column;\n  margin-left: 20px;\n  min-height: 100%;\n  justify-content: space-around;\n  margin: auto;\n  width: calc(100% - 50px);\n}\n\n.store-bg .store-body p {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 27px;\n  margin: 0px;\n  letter-spacing: 0.03em;\n  color: #ffffff;\n}\n\n.store-bg .store-body .logo-bg {\n  display: flex;\n  justify-content: space-between;\n}\n\n.card {\n  width: calc(100% - 50px);\n  margin: auto;\n  min-height: 491px;\n  background: #ffffff;\n  box-shadow: 0px 4px 10px rgba(130, 130, 130, 0.25);\n  border-radius: 20px;\n}\n\n.card .card-header {\n  padding-top: 25px;\n  display: flex;\n  justify-content: space-around;\n  font-weight: bold;\n  font-size: 18px;\n}\n\n.card .card-header > span:nth-child(1) {\n  color: #f29d93;\n}\n\n.card .card-header > span:nth-child(2) {\n  color: #f5aa40;\n}\n\n.card .card-header > span:nth-child(2) {\n  color: #876baf;\n}\n\nion-back-button {\n  position: fixed;\n  left: -12px;\n  color: white;\n  --icon-font-size: 35px;\n}\n/*# sourceMappingURL=data:application/json;base64,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Rjs7QUFVRTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBUko7O0FBV0U7RUFDRSxjQUFBO0FBVEo7O0FBWUU7RUFDRSxjQUFBO0FBVko7O0FBYUU7RUFDRSxjQUFBO0FBWEo7O0FBZ0JBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUFiRiIsImZpbGUiOiJzdG9yZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG59XG5cbmlvbi1ncmlkIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi50b3Age1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTA3cHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsXG4gICAgICAjNjk3NmI5IDAlLFxuICAgICAgcmdiYSgxMDUsIDExOCwgMTg1LCAwLjc2KSAxMDAlKTtcbiAgYm94LXNoYWRvdzogMHB4IDVweCAxMHB4IHJnYmEoNzMsIDczLCA3MywgMC4yNSk7XG59XG5cbi50b3AtYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jdXJyZW5jeS1iZyB7XG4gIHdpZHRoOiA4OXB4O1xuICBoZWlnaHQ6IDI2cHg7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggNnB4ICNhN2E3YTc7XG4gIHotaW5kZXg6IDA7XG4gIG1hcmdpbi1sZWZ0OiAtMTVweDtcbn1cblxuLmJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wbC0xMCB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLnBsLTUge1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cblxuLnVzZXJuYW1lLWNzcyB7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAzZW07XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBmb250LWZhbWlseTogUG9wcGlucztcbn1cblxuLmhvbWUtY3VycmVuY3kge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jb250ZW50LWNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuXG5zcGFuIHtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG59XG5cbi5mb250LTcwMCB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5mLTEyIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ucGx1cy1iZyB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJhY2tncm91bmQ6ICM5OWM0M2M7XG4gIHotaW5kZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubWwtLTEwIHtcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xufVxuXG4ubXQtMTUge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4ubXQtMjUge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG4ubHZsLWNpcmNsZSB7XG4gIGJhY2tncm91bmQ6ICMzNzNiNjM7XG4gIHdpZHRoOiA3MHB4O1xuICBoZWlnaHQ6IDcwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJvcmRlcjogNXB4IHNvbGlkICNjOGNiZTc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubHZsLWNpcmNsZS15IHtcbiAgYmFja2dyb3VuZDogI2Y3ZDA0OTtcbiAgd2lkdGg6IDcwcHg7XG4gIGhlaWdodDogNzBweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYm9yZGVyOiA1cHggc29saWQgI2ZlZWZiOTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5sdmwtY2lyY2xlLXk+c3BhbiB7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDI3cHg7XG59XG5cbi5sdmwtY2lyY2xlPnNwYW4ge1xuICBmb250LWZhbWlseTogUG9wcGlucztcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyN3B4O1xufVxuXG4ubWwtOCB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG5cblxuLm10LTIge1xuICBtYXJnaW4tdG9wOiAycHg7XG59XG5cbi5tbC0yIHtcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbn1cblxuLm10LTEwIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLm1sLTEwIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5tbC04IHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cblxuLmJ0bi1lbmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmN1cy1idG4ge1xuICAtLWJhY2tncm91bmQ6ICM5OWM0M2M7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIHdpZHRoOiA4N3B4O1xuICBoZWlnaHQ6IDI4cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDNlbTtcbn1cblxuLnBsYXktY3VzLWJ0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ucGxheS1jdXMtYnRuPmlvbi1idXR0b24ge1xuICBtYXJnaW4tdG9wOiAtMzVweDtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoODUuODFkZWcsICM5OWM0M2MgMTMuODklLCAjYzVlNjdlIDk1Ljk0JSk7XG4gIC8vIGJvcmRlcjogM3B4IHNvbGlkICNiN2RkNjU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC0tYm9yZGVyLXJhZGl1czogOTBweDtcbiAgd2lkdGg6IDIxOHB4O1xuICBoZWlnaHQ6IDUzcHg7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uc3RvcmUtYmcge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvc3RvcmUtYmcuc3ZnXCIpO1xuXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGhlaWdodDogMTU1cHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcblxuICAuc3RvcmUtYm9keSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA1MHB4KTtcblxuICAgIHAge1xuICAgICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDI3cHg7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAzZW07XG5cbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIH1cblxuICAgIC5sb2dvLWJnIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgfVxuICB9XG59XG5cbi5jYXJkIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDUwcHgpO1xuICBtYXJnaW46IGF1dG87XG4gIG1pbi1oZWlnaHQ6IDQ5MXB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3gtc2hhZG93OiAwcHggNHB4IDEwcHggcmdiYSgxMzAsIDEzMCwgMTMwLCAwLjI1KTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcblxuICAuY2FyZC1oZWFkZXIge1xuICAgIHBhZGRpbmctdG9wOiAyNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG5cbiAgLmNhcmQtaGVhZGVyPnNwYW46bnRoLWNoaWxkKDEpIHtcbiAgICBjb2xvcjogI2YyOWQ5MztcbiAgfVxuXG4gIC5jYXJkLWhlYWRlcj5zcGFuOm50aC1jaGlsZCgyKSB7XG4gICAgY29sb3I6ICNmNWFhNDA7XG4gIH1cblxuICAuY2FyZC1oZWFkZXI+c3BhbjpudGgtY2hpbGQoMikge1xuICAgIGNvbG9yOiAjODc2YmFmO1xuICB9XG59XG5cblxuaW9uLWJhY2stYnV0dG9uIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAtMTJweDtcbiAgY29sb3I6IHdoaXRlO1xuICAtLWljb24tZm9udC1zaXplOiAzNXB4O1xufVxuXG4vLyBmb250LWZhbWlseTogUG9wcGlucztcbi8vIGZvbnQtc3R5bGU6IG5vcm1hbDtcbi8vIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gZm9udC1zaXplOiAxOHB4O1xuLy8gbGluZS1oZWlnaHQ6IDI3cHg7XG4vLyBkaXNwbGF5OiBmbGV4O1xuLy8gYWxpZ24taXRlbXM6IGNlbnRlcjtcbi8vIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vIGxldHRlci1zcGFjaW5nOiAwLjAzZW07XG5cbi8vIGNvbG9yOiAjRjI5RDkzO1xuIl19 */");

/***/ }),

/***/ 55258:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/main/store/bundle/bundle.page.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"main-container\">\n  <div class=\"mt-10\" *ngFor=\"let item of data\">\n    <div class=\"list\" (click)=\"onBuyBundle(item.name)\">\n      <div>\n        <img src=\"assets/icon/filter-icon.svg\" />\n        <span class=\"pl-5 filter-text\">{{item.name}}</span>\n      </div>\n      <div class=\"cus-btn\">\n        <img width=\"15\" src=\"assets/currency-log-w.svg\" alt=\"\">\n        <span class=\"wh-text\">{{item.price}}</span>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ 87386:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/main/store/filter/filter.page.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"main-container\">\n  <div class=\"list mt-10\" (click)=\"onBuyPrimaryFilter()\">\n    <div>\n      <img src=\"assets/icon/filter-icon.svg\" />\n      <span class=\"pl-5 filter-text\">Primary Filter</span>\n    </div>\n    <div class=\"cus-btn\">\n      <img width=\"15\" src=\"assets/currency-log-w.svg\" alt=\"\">\n      <span class=\"wh-text\">3000</span>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ 80297:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/main/store/item/item.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"main-container\">\n  <div class=\"mt-10\" *ngFor=\"let shop of shopList\">\n    <div class=\"list\" (click)=\"onBuyBundle(shop)\">\n      <div>\n        <img src=\"assets/icon/filter-icon.svg\" />\n        <span class=\"pl-5 filter-text\">{{shop.name}}</span>\n      </div>\n      <div class=\"cus-btn\">\n        <img width=\"15\" src=\"assets/currency-log-w.svg\" alt=\"\">\n        <span class=\"wh-text\">{{shop.price}}</span>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ 24791:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/main/store/store.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-grid>\n  <ion-row class=\"top\">\n    <div class=\"top-box\">\n      <ion-col offset=\"1\" size=\"3\">\n        <div class=\"box\">\n          <ion-back-button defaultHref=\"filter\" *ngIf=\"filterPage\" icon=\"chevron-back-outline\"></ion-back-button>\n          <img src=\"assets/dummy-user.jpg\" alt=\"\" width=\"55\" style=\"border-radius: 50%; margin-left: 5px\" />\n        </div>\n      </ion-col>\n\n      <ion-col size=\"8\">\n        <div class=\"box\">\n          <span class=\"username-css\">STORE</span>\n          <img class=\"pl-5\" style=\"z-index: 1\" src=\"assets/currency-logo.svg\" alt=\"\" />\n          <div class=\"currency-bg\">\n            <div class=\"content-center font-700 f-12\">\n              <span>{{user.puzzle_pieces}}</span>\n            </div>\n          </div>\n          <div class=\"plus-bg ml--10\">\n            <img width=\"15\" src=\"assets/plus.svg\" alt=\"\" />\n          </div>\n        </div>\n      </ion-col>\n    </div>\n  </ion-row>\n\n  <ion-row>\n    <ion-col class=\"store-bg\" size=\"12\">\n      <div class=\"store-body\">\n        <p>Claim daily puzzle pieces!</p>\n        <div class=\"logo-bg\">\n          <img width=\"38\" src=\"assets/currency-logo-b.svg\" alt=\"\">\n          <img width=\"38\" src=\"assets/currency-logo-b.svg\" alt=\"\">\n          <img width=\"38\" src=\"assets/currency-logo-b.svg\" alt=\"\">\n          <img width=\"38\" src=\"assets/currency-logo-b.svg\" alt=\"\">\n          <img width=\"38\" src=\"assets/currency-logo-b.svg\" alt=\"\">\n        </div>\n        <ion-button class=\"cus-btn\">CLAIM</ion-button>\n      </div>\n\n    </ion-col>\n  </ion-row>\n\n  <ion-row class=\"mt-25\">\n    <div class=\"card \">\n      <div class=\"card-header\">\n        <span (click)=\"changeTab('f')\">Filters</span>\n        <span (click)=\"changeTab('b')\">Bundles</span>\n        <span (click)=\"changeTab('i')\">item</span>\n      </div>\n\n      <div class=\"card-body mt-2\">\n\n        <app-filter [getFilterData]=\"filterData\" (messageEvent)=\"receiveMessage($event)\" *ngIf=\"isFilterOpened\">\n        </app-filter>\n        <app-item *ngIf=\"isItemOpened\"></app-item>\n        <app-bundle *ngIf=\"isBundleOpened\"></app-bundle>\n      </div>\n    </div>\n  </ion-row>\n\n\n</ion-grid>");

/***/ })

}]);
//# sourceMappingURL=src_app_main_main_store_store_module_ts.js.map