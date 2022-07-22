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
    onBuyFilter() {
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
                text: 'You don’t have enough puzzle pieces to purchase this item'
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
        this.restService
            .getRequest('shop/get-bundle-list')
            .subscribe((res) => {
            this.shopList = res.data;
        });
    }
    onBuyBundle(shop) {
        if (this.user.puzzle_pieces > shop.price) {
            this.restService
                .postRequestToken('shop/purchase', { shop_id: shop.id })
                .subscribe((res) => {
                if (res.status) {
                    this.getOwnedItemList();
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
                        title: 'Success',
                        text: 'You have successfully purchased',
                        timer: 2000,
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
                text: 'You don’t have enough puzzle pieces to purchase this item',
            }).then((res) => {
                if (res.isConfirmed) {
                    this.messageEvent.emit(true);
                }
            });
        }
    }
    getOwnedItemList() {
        this.restService
            .getRequest('shop/purchase-detail')
            .subscribe((res) => {
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_store_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./store.page.html */ 24791);
/* harmony import */ var _store_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store.page.scss */ 43505);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/user.service */ 84981);
/* harmony import */ var _filter_filter_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filter/filter.page */ 2500);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ 88259);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);









let StorePage = class StorePage {
    constructor(route, userService, loading, navCtrl, router) {
        this.route = route;
        this.userService = userService;
        this.loading = loading;
        this.navCtrl = navCtrl;
        this.router = router;
        this.dateCounter = 1;
        this.isFilterOpened = true;
        this.isItemOpened = false;
        this.isBundleOpened = false;
        this.filterPage = false;
        this.lastGameCheck = false;
        this.userService.userSourceValue;
        this.userService.userData.subscribe(res => {
            console.log(res);
            this.user = JSON.parse(res);
        });
    }
    ngOnInit() {
        this.buttonDisabled = false;
        this.user = JSON.parse(localStorage.getItem('user'));
        this.lastClaimDate = localStorage.getItem('LastLoginClaim');
        let ClaimDate = JSON.parse(this.lastClaimDate);
        let savedClaimDate = new Date(ClaimDate.date).getDate();
        let inDateCount = ClaimDate.dateCount;
        this.lastLogin = new Date(this.user.last_login);
        let LoginClaimDate = (this.lastLogin).getDate();
        let claimDateSum = LoginClaimDate - savedClaimDate;
        console.log("1->" + LoginClaimDate, "2->" + savedClaimDate);
        if (LoginClaimDate == savedClaimDate) {
            this.buttonDisabled = true;
        }
        if (inDateCount == 5 || claimDateSum > 1) {
            for (let index = 1; index <= inDateCount; index++) {
                const element = document.getElementById('claim-image-' + index).style.opacity = '1';
            }
        }
        else {
            for (let index = 1; index <= inDateCount; index++) {
                const element = document.getElementById('claim-image-' + index).style.opacity = '0.5';
            }
        }
        // this.lastClaimDate = localStorage.getItem('LastLoginClaim');
        //  let ClaimDate = JSON.parse(this.lastClaimDate);
        //   let inDateCount = ClaimDate.dateCount;
        //   for (let index = 1; index <= inDateCount; index++) {
        //     const element = document.getElementById('claim-image-'+index).style.opacity='0.5';
        //   }
    }
    ionViewWillEnter() {
        let lastGame = localStorage.getItem('lastGame');
        if (lastGame) {
            this.lastGame = JSON.parse(lastGame);
            this.lastGameCheck = true;
        }
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
    claimDailyReward() {
        this.lastLogin = new Date(this.user.last_login);
        this.lastClaimDate = localStorage.getItem('LastLoginClaim');
        console.log("First Claimdate Full:" + this.lastClaimDate);
        //  let ClaimDate = JSON.parse(this.lastClaimDate);
        //   let inDateCount = ClaimDate.dateCount;
        //   console.log(inDateCount);
        //   for (let index = 1; index <= inDateCount; index++) {
        //     const element = document.getElementById('claim-image-'+index).style.opacity='0.5';
        //   }
        //   this.updateUser();
        if (!this.lastClaimDate || this.lastClaimDate === 'null') {
            console.log("if");
            this.dateCounter = 1;
            localStorage.setItem('LastLoginClaim', JSON.stringify({ date: this.lastLogin, dateCount: this.dateCounter, userId: this.user.id }));
            this.lastClaimDate = localStorage.getItem('LastLoginClaim');
            let ClaimDate = JSON.parse(this.lastClaimDate);
            let savedClaimDate = (this.lastLogin).getDate();
            let lastSavedClaimDate = (new Date(ClaimDate.date).getDate());
            let inDateCount = ClaimDate.dateCount;
            if (lastSavedClaimDate == savedClaimDate) {
                console.log("i got 10 points in if");
                this.updateUser(10);
                this.buttonDisabled = true;
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
                    title: '<div><img src="assets/icon/greencheck.png" style="width: 20vw; height:20vw;"><br><h5>Claimed!</h5></div>',
                    text: 'Daily Puzzle Pieces Rewarded!',
                    confirmButtonText: 'Cool',
                    confirmButtonColor: '#99C43C',
                    allowOutsideClick: true,
                });
                for (let index = 1; index <= inDateCount; index++) {
                    const element = document.getElementById('claim-image-' + index).style.opacity = '0.5';
                }
            }
        }
        else {
            console.log("else");
            let ClaimDate = JSON.parse(this.lastClaimDate);
            let signInUser = this.user.id;
            let localsignedUser = ClaimDate.userId;
            if (signInUser != localsignedUser) {
                this.dateCounter = 1;
                localStorage.setItem('LastLoginClaim', JSON.stringify({ date: this.lastLogin, dateCount: this.dateCounter, userId: this.user.id }));
                this.lastClaimDate = localStorage.getItem('LastLoginClaim');
                let ClaimDate = JSON.parse(this.lastClaimDate);
                let savedClaimDate = (this.lastLogin).getDate();
                let lastSavedClaimDate = (new Date(ClaimDate.date).getDate());
                if (lastSavedClaimDate == savedClaimDate) {
                    console.log("i got 10 points in if");
                    this.updateUser(10);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
                        title: '<div><img src="assets/icon/greencheck.png" style="width: 20vw; height:20vw;"><br><h5>Claimed!</h5></div>',
                        text: 'Daily Puzzle Pieces Rewarded!',
                        confirmButtonText: 'Cool',
                        confirmButtonColor: '#99C43C',
                        allowOutsideClick: true,
                    });
                }
            }
            else {
                this.lastClaimDate = localStorage.getItem('LastLoginClaim');
                let ClaimDate = JSON.parse(this.lastClaimDate);
                let savedClaimDate = new Date(ClaimDate.date).getDate();
                let inDateCount = ClaimDate.dateCount;
                console.log("inDateCount:" + inDateCount);
                console.log("else last user login :" + (this.lastLogin).getDate());
                console.log("localstorage last user login" + savedClaimDate);
                let claimDateSum = ((this.lastLogin).getDate()) - savedClaimDate;
                console.log("sum of different date" + claimDateSum);
                if (claimDateSum <= 1 && inDateCount <= 4) {
                    let inDateCount = ClaimDate.dateCount;
                    console.log("inDateCount:" + inDateCount);
                    this.dateCounter = inDateCount;
                    this.dateCounter++;
                    localStorage.setItem('LastLoginClaim', JSON.stringify({ date: this.lastLogin, dateCount: this.dateCounter, userId: this.user.id }));
                    console.log("counter in else if" + this.dateCounter);
                    for (let index = 1; index <= inDateCount + 1; index++) {
                        const element = document.getElementById('claim-image-' + index).style.opacity = '0.5';
                    }
                    switch (this.dateCounter) {
                        case 1:
                            this.updateUser(10);
                            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
                                title: '<div><img src="assets/icon/greencheck.png" style="width: 20vw; height:20vw;"><br><h5>Claimed!</h5></div>',
                                text: 'Daily Puzzle Pieces Rewarded!',
                                confirmButtonText: 'Cool',
                                confirmButtonColor: '#99C43C',
                                allowOutsideClick: true,
                            });
                            this.buttonDisabled = true;
                            break;
                        case 2:
                            this.updateUser(20);
                            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
                                title: '<div><img src="assets/icon/greencheck.png" style="width: 20vw; height:20vw;"><br><h5>Claimed!</h5></div>',
                                text: 'Daily Puzzle Pieces Rewarded!',
                                confirmButtonText: 'Cool',
                                confirmButtonColor: '#99C43C',
                                allowOutsideClick: true,
                            });
                            this.buttonDisabled = true;
                            break;
                        case 3:
                            this.updateUser(30);
                            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
                                title: '<div><img src="assets/icon/greencheck.png" style="width: 20vw; height:20vw;"><br><h5>Claimed!</h5></div>',
                                text: 'Daily Puzzle Pieces Rewarded!',
                                confirmButtonText: 'Cool',
                                confirmButtonColor: '#99C43C',
                                allowOutsideClick: true,
                            });
                            this.buttonDisabled = true;
                            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
                                title: '<div><img src="assets/icon/greencheck.png" style="width: 20vw; height:20vw;"><br><h5>Claimed!</h5></div>',
                                text: 'Daily Puzzle Pieces Rewarded!',
                                confirmButtonText: 'Cool',
                                confirmButtonColor: '#99C43C',
                                allowOutsideClick: true,
                            });
                            break;
                        case 4:
                            this.updateUser(40);
                            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
                                title: '<div><img src="assets/icon/greencheck.png" style="width: 20vw; height:20vw;"><br><h5>Claimed!</h5></div>',
                                text: 'Daily Puzzle Pieces Rewarded!',
                                confirmButtonText: 'Cool',
                                confirmButtonColor: '#99C43C',
                                allowOutsideClick: true,
                            });
                            this.buttonDisabled = true;
                            break;
                        case 5:
                            this.updateUser(50);
                            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
                                title: '<div><img src="assets/icon/greencheck.png" style="width: 20vw; height:20vw;"><br><h5>Claimed!</h5></div>',
                                text: 'Daily Puzzle Pieces Rewarded!',
                                confirmButtonText: 'Cool',
                                confirmButtonColor: '#99C43C',
                                allowOutsideClick: true,
                            });
                            this.buttonDisabled = true;
                            for (let index = 1; index <= 5; index++) {
                                const element = document.getElementById('claim-image-' + index).style.opacity = '0.5';
                            }
                            break;
                    }
                }
                else {
                    console.log("start from begining");
                    this.dateCounter = 1;
                    localStorage.setItem('LastLoginClaim', JSON.stringify({ date: this.lastLogin, dateCount: this.dateCounter, userId: this.user.id }));
                    for (let index = 1; index <= 5; index++) {
                        const element = document.getElementById('claim-image-' + index).style.opacity = '0.5';
                    }
                    this.updateUser(10);
                    this.buttonDisabled = true;
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
                        title: '<div><img src="assets/icon/greencheck.png" style="width: 20vw; height:20vw;"><br><h5>Claimed!</h5></div>',
                        text: 'Daily Puzzle Pieces Rewarded!',
                        confirmButtonText: 'Cool',
                        confirmButtonColor: '#99C43C',
                        allowOutsideClick: true,
                    });
                    // for (let index = 1; index <= inDateCount; index++) {
                    //   const element = document.getElementById('claim-image-'+index).style.opacity='0.5';
                    //                               }
                }
                this.ngOnInit();
            }
        }
    }
    updateUser(num) {
        this.user.puzzle_pieces += num;
        this.userService.updateUser(this.user);
    }
    onLastGameEvent() {
        this.onPlayGame(this.lastGame);
    }
    onPlayGame(game) {
        this.doLoading().then(() => {
            localStorage.setItem('lastGame', JSON.stringify(game));
            this.router.navigate(['play-game', { game: JSON.stringify(game) }], { replaceUrl: true });
            this.loader.dismiss();
        });
    }
    doLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.loader = yield this.loading.create({
                message: 'Loading...',
            });
            this.loader.present();
        });
    }
    backToGame() {
        this.navCtrl.navigateBack(['filter']);
    }
};
StorePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: src_app_service_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
StorePage.propDecorators = {
    child: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: [_filter_filter_page__WEBPACK_IMPORTED_MODULE_3__.FilterPage,] }]
};
StorePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".main-container {\n  width: 95%;\n  margin: auto;\n}\n.main-container .list {\n  display: flex;\n  justify-content: space-between;\n}\n.main-container .list img {\n  vertical-align: middle;\n}\nspan {\n  font-family: Poppins;\n}\n.filter-text {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 15px;\n  line-height: 22px;\n  color: #000000;\n}\n.cus-btn {\n  width: 90px;\n  height: 28px;\n  background: #9dcaec;\n  border-radius: 30px;\n  text-align: center;\n}\n.cus-btn .wh-text {\n  font-family: Poppins;\n  font-size: 12px;\n  line-height: 25px;\n  letter-spacing: 0.03em;\n  color: #ffffff;\n  padding-left: 5px;\n}\n.pl-5 {\n  padding-left: 5px;\n}\n.mt-10 {\n  margin-top: 10px;\n}\n.mt-15 {\n  margin-top: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1bmRsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtBQUNGO0FBQ0U7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUFDSjtBQUNJO0VBQ0Usc0JBQUE7QUFDTjtBQUlBO0VBQ0Usb0JBQUE7QUFERjtBQUlBO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBR0EsY0FBQTtBQUhGO0FBTUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUhGO0FBS0U7RUFDRSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBSEo7QUFPQTtFQUNFLGlCQUFBO0FBSkY7QUFPQTtFQUNFLGdCQUFBO0FBSkY7QUFPQTtFQUNFLGdCQUFBO0FBSkYiLCJmaWxlIjoiYnVuZGxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA5NSU7XG4gIG1hcmdpbjogYXV0bztcblxuICAubGlzdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICBpbWcge1xuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB9XG4gIH1cbn1cblxuc3BhbiB7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xufVxuXG4uZmlsdGVyLXRleHQge1xuICBmb250LWZhbWlseTogUG9wcGlucztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuXG5cbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi5jdXMtYnRuIHtcbiAgd2lkdGg6IDkwcHg7XG4gIGhlaWdodDogMjhweDtcbiAgYmFja2dyb3VuZDogIzlkY2FlYztcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIC53aC10ZXh0IHtcbiAgICBmb250LWZhbWlseTogUG9wcGlucztcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDNlbTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgfVxufVxuXG4ucGwtNSB7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xufVxuXG4ubXQtMTAge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4ubXQtMTUge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufSJdfQ== */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".main-container {\n  width: 95%;\n  margin: auto;\n}\n.main-container .list {\n  display: flex;\n  justify-content: space-between;\n}\n.main-container .list img {\n  vertical-align: middle;\n}\nspan {\n  font-family: Poppins;\n}\n.filter-text {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 15px;\n  line-height: 22px;\n  letter-spacing: 0.03em;\n  color: #000000;\n}\n.cus-btn {\n  width: 90px;\n  height: 28px;\n  background: #9dcaec;\n  border-radius: 30px;\n  text-align: center;\n}\n.cus-btn .wh-text {\n  font-family: Poppins;\n  font-size: 12px;\n  line-height: 25px;\n  letter-spacing: 0.03em;\n  color: #ffffff;\n  padding-left: 5px;\n}\n.pl-5 {\n  padding-left: 5px;\n}\n.mt-10 {\n  margin-top: 10px;\n}\n.mt-15 {\n  margin-top: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbHRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtBQUNGO0FBQUU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUFFSjtBQURJO0VBQ0Usc0JBQUE7QUFHTjtBQUVBO0VBQ0Usb0JBQUE7QUFDRjtBQUVBO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFFQSxjQUFBO0FBQUY7QUFHQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNDLGtCQUFBO0FBQUg7QUFFRTtFQUNFLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFBSjtBQUlBO0VBQ0UsaUJBQUE7QUFERjtBQUdBO0VBQ0UsZ0JBQUE7QUFBRjtBQUdBO0VBQ0UsZ0JBQUE7QUFBRiIsImZpbGUiOiJmaWx0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tY29udGFpbmVyIHtcbiAgd2lkdGg6IDk1JTtcbiAgbWFyZ2luOiBhdXRvO1xuICAubGlzdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgaW1nIHtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgfVxuICB9XG59XG5cbnNwYW4ge1xuICBmb250LWZhbWlseTogUG9wcGlucztcbn1cblxuLmZpbHRlci10ZXh0IHtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDNlbTtcblxuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLmN1cy1idG4ge1xuICB3aWR0aDogOTBweDtcbiAgaGVpZ2h0OiAyOHB4O1xuICBiYWNrZ3JvdW5kOiAjOWRjYWVjO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIC53aC10ZXh0IHtcbiAgICBmb250LWZhbWlseTogUG9wcGlucztcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDNlbTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgfVxufVxuXG4ucGwtNSB7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xufVxuLm10LTEwIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLm10LTE1IHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cbiJdfQ== */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".main-container {\n  width: 95%;\n  margin: auto;\n}\n.main-container .list {\n  display: flex;\n  justify-content: space-between;\n}\n.main-container .list img {\n  vertical-align: middle;\n}\nspan {\n  font-family: Poppins;\n}\n.filter-text {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 15px;\n  line-height: 22px;\n  letter-spacing: 0.03em;\n  color: #000000;\n}\n.cus-btn {\n  width: 90px;\n  height: 28px;\n  background: #9dcaec;\n  border-radius: 30px;\n  text-align: center;\n}\n.cus-btn .wh-text {\n  font-family: Poppins;\n  font-size: 12px;\n  line-height: 25px;\n  letter-spacing: 0.03em;\n  color: #ffffff;\n  padding-left: 5px;\n}\n.pl-5 {\n  padding-left: 5px;\n}\n.mt-10 {\n  margin-top: 10px;\n}\n.mt-15 {\n  margin-top: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7QUFDRjtBQUFFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FBRUo7QUFESTtFQUNFLHNCQUFBO0FBR047QUFFQTtFQUNFLG9CQUFBO0FBQ0Y7QUFFQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBRUEsY0FBQTtBQUFGO0FBR0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQyxrQkFBQTtBQUFIO0FBRUU7RUFDRSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBQUo7QUFJQTtFQUNFLGlCQUFBO0FBREY7QUFHQTtFQUNFLGdCQUFBO0FBQUY7QUFFQTtFQUNFLGdCQUFBO0FBQ0YiLCJmaWxlIjoiaXRlbS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jb250YWluZXIge1xuICB3aWR0aDogOTUlO1xuICBtYXJnaW46IGF1dG87XG4gIC5saXN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBpbWcge1xuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB9XG4gIH1cbn1cblxuc3BhbiB7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xufVxuXG4uZmlsdGVyLXRleHQge1xuICBmb250LWZhbWlseTogUG9wcGlucztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wM2VtO1xuXG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4uY3VzLWJ0biB7XG4gIHdpZHRoOiA5MHB4O1xuICBoZWlnaHQ6IDI4cHg7XG4gIGJhY2tncm91bmQ6ICM5ZGNhZWM7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgLndoLXRleHQge1xuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wM2VtO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICB9XG59XG5cbi5wbC01IHtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG4ubXQtMTAge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLm10LTE1IHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cbiJdfQ== */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("p {\n  font-family: Poppins;\n}\n\nion-grid {\n  padding: 0px !important;\n  overflow-y: auto;\n}\n\n.top {\n  width: 100vw;\n  height: 107px;\n  background: linear-gradient(180deg, #6976b9 0%, rgba(105, 118, 185, 0.76) 100%);\n  box-shadow: 0px 5px 10px rgba(73, 73, 73, 0.25);\n}\n\n.top-box {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  justify-content: space-between;\n}\n\n.img-container {\n  flex-direction: column;\n}\n\n.username-css {\n  letter-spacing: 0.03em;\n  color: #ffffff;\n  font-weight: 600;\n  font-size: 15px;\n  line-height: 22px;\n  font-family: Poppins;\n}\n\n.currency-bg {\n  width: 89px;\n  height: 26px;\n  background: #ffffff;\n  box-shadow: inset 0px 0px 6px #a7a7a7;\n  z-index: 0;\n  margin-left: -15px;\n}\n\n.box {\n  display: flex;\n  align-items: center;\n}\n\n.pl-10 {\n  padding-left: 10px;\n}\n\n.pl-5 {\n  padding-left: 5px;\n}\n\n.v-cntr {\n  display: flex;\n  align-items: center;\n  height: 100%;\n}\n\n.header-text {\n  letter-spacing: 0.03em;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 20px;\n  line-height: 30px;\n  color: #ffffff;\n}\n\n.home-currency {\n  display: flex;\n  align-content: center;\n}\n\n.content-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100%;\n}\n\nspan {\n  font-family: Poppins;\n}\n\n.font-700 {\n  font-weight: 700;\n}\n\n.f-12 {\n  font-size: 12px;\n}\n\n.plus-bg {\n  width: 30px;\n  height: 30px;\n  background: #99c43c;\n  z-index: 1;\n  display: flex;\n  justify-content: center;\n}\n\n.ml--10 {\n  margin-left: -10px;\n}\n\n.mt-15 {\n  margin-top: 15px;\n}\n\n.mt-25 {\n  margin-top: 25px;\n}\n\n.lvl-circle {\n  background: #373b63;\n  width: 70px;\n  height: 70px;\n  border-radius: 50px;\n  border: 5px solid #c8cbe7;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.lvl-circle-y {\n  background: #f7d049;\n  width: 70px;\n  height: 70px;\n  border-radius: 50px;\n  border: 5px solid #feefb9;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.lvl-circle-y > span {\n  font-family: Poppins;\n  color: #ffffff;\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 27px;\n}\n\n.lvl-circle > span {\n  font-family: Poppins;\n  color: #ffffff;\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 27px;\n}\n\n.ml-8 {\n  margin-left: 8px;\n}\n\n.mt-2 {\n  margin-top: 2px;\n}\n\n.ml-2 {\n  margin-left: 2px;\n}\n\n.mt-10 {\n  margin-top: 10px;\n}\n\n.ml-10 {\n  margin-left: 10px;\n}\n\n.ml-8 {\n  margin-left: 8px;\n}\n\n.btn-end {\n  display: flex;\n  width: 100%;\n  justify-content: end;\n  margin-right: 10px;\n}\n\n.cus-btn {\n  --background: #99c43c;\n  border-radius: 30px;\n  width: 87px;\n  height: 28px;\n  font-size: 14px;\n  letter-spacing: 0.03em;\n}\n\n.play-cus-btn {\n  display: flex;\n  justify-content: center;\n}\n\n.play-cus-btn > ion-button {\n  margin-top: -35px;\n  --background: linear-gradient(85.81deg, #99c43c 13.89%, #c5e67e 95.94%);\n  box-sizing: border-box;\n  --border-radius: 90px;\n  width: 218px;\n  height: 53px;\n  font-family: Poppins;\n  font-weight: bold;\n  font-size: 16px;\n}\n\n.store-bg {\n  background-image: url('store-bg.svg');\n  background-repeat: no-repeat;\n  height: 155px;\n  background-size: cover;\n  background-position: center;\n}\n\n.store-bg .store-body {\n  display: flex;\n  flex-direction: column;\n  margin-left: 20px;\n  min-height: 100%;\n  justify-content: space-around;\n  margin: auto;\n  width: calc(100% - 50px);\n}\n\n.store-bg .store-body p {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 27px;\n  margin: 0px;\n  letter-spacing: 0.03em;\n  color: #ffffff;\n}\n\n.store-bg .store-body .logo-bg {\n  display: flex;\n  justify-content: space-between;\n}\n\n.card {\n  width: calc(100% - 50px);\n  margin: auto;\n  min-height: 391px;\n  background: #ffffff;\n  box-shadow: 0px 4px 10px rgba(130, 130, 130, 0.25);\n  border-radius: 20px;\n}\n\n.card .card-header {\n  padding-top: 25px;\n  display: flex;\n  justify-content: space-around;\n  font-size: 16px;\n}\n\n.card .card-header > span:nth-child(1) {\n  color: #f29d93;\n}\n\n.card .card-header > span:nth-child(2) {\n  color: #f5aa40;\n}\n\n.card .card-header > span:nth-child(2) {\n  color: #876baf;\n}\n\n.selected-tab {\n  text-decoration: underline;\n  font-weight: bold;\n  font-size: 20px;\n}\n\nion-back-button {\n  position: fixed;\n  left: -12px;\n  color: white;\n  --icon-font-size: 35px;\n}\n\n.play-cus-btn {\n  display: flex;\n  justify-content: center;\n  position: fixed;\n  margin: auto;\n  bottom: 15px;\n  left: 0;\n  right: 0;\n}\n\n.play-cus-btn.ios {\n  bottom: 15px;\n}\n\n.play-cus-btn {\n  --background: linear-gradient(85.81deg, #3cabc4 13.89%, #7ea8e6 95.94%);\n  box-sizing: border-box;\n  --border-radius: 90px;\n  border-radius: 90px;\n  width: 200px;\n  height: 53px;\n  font-family: Poppins;\n  font-weight: bold;\n  font-size: 16px;\n  box-shadow: 0px 0px 30px -10px black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3JlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSx1QkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLCtFQUFBO0VBR0EsK0NBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtBQURGOztBQUlBO0VBQ0Usc0JBQUE7QUFERjs7QUFJQTtFQUNFLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFERjs7QUFLQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQ0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQUZGOztBQUtBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBRkY7O0FBS0E7RUFDRSxrQkFBQTtBQUZGOztBQUtBO0VBQ0UsaUJBQUE7QUFGRjs7QUFLQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFGRjs7QUFLQTtFQUNFLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUZGOztBQUtBO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0FBRkY7O0FBS0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBRkY7O0FBS0E7RUFDRSxvQkFBQTtBQUZGOztBQUtBO0VBQ0UsZ0JBQUE7QUFGRjs7QUFLQTtFQUNFLGVBQUE7QUFGRjs7QUFLQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBRkY7O0FBS0E7RUFDRSxrQkFBQTtBQUZGOztBQUtBO0VBQ0UsZ0JBQUE7QUFGRjs7QUFLQTtFQUNFLGdCQUFBO0FBRkY7O0FBS0E7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBRkY7O0FBS0E7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBRkY7O0FBS0E7RUFDRSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUZGOztBQUtBO0VBQ0Usb0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFGRjs7QUFLQTtFQUNFLGdCQUFBO0FBRkY7O0FBTUE7RUFDRSxlQUFBO0FBSEY7O0FBTUE7RUFDRSxnQkFBQTtBQUhGOztBQU1BO0VBQ0UsZ0JBQUE7QUFIRjs7QUFNQTtFQUNFLGlCQUFBO0FBSEY7O0FBTUE7RUFDRSxnQkFBQTtBQUhGOztBQU1BO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FBSEY7O0FBTUE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUFIRjs7QUFNQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQUhGOztBQU1BO0VBQ0UsaUJBQUE7RUFDQSx1RUFBQTtFQUVBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBSkY7O0FBT0E7RUFDRSxxQ0FBQTtFQUVBLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7QUFMRjs7QUFPRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtBQUxKOztBQU9JO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBRUEsY0FBQTtBQU5OOztBQVNJO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FBUE47O0FBWUE7RUFDRSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0RBQUE7RUFDQSxtQkFBQTtBQVRGOztBQVdFO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0FBVEo7O0FBWUU7RUFDRSxjQUFBO0FBVko7O0FBYUU7RUFDRSxjQUFBO0FBWEo7O0FBY0U7RUFDRSxjQUFBO0FBWko7O0FBZ0JBO0VBRUUsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFkRjs7QUFrQkE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQWZGOztBQWtCQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FBZkY7O0FBaUJBO0VBQ0UsWUFBQTtBQWRGOztBQWlCQTtFQUVFLHVFQUFBO0VBRUEsc0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0FBaEJGIiwiZmlsZSI6InN0b3JlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xuICBmb250LWZhbWlseTogUG9wcGlucztcbn1cblxuaW9uLWdyaWQge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLnRvcCB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDdweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZyxcbiAgICAgICM2OTc2YjkgMCUsXG4gICAgICByZ2JhKDEwNSwgMTE4LCAxODUsIDAuNzYpIDEwMCUpO1xuICBib3gtc2hhZG93OiAwcHggNXB4IDEwcHggcmdiYSg3MywgNzMsIDczLCAwLjI1KTtcbn1cblxuLnRvcC1ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uaW1nLWNvbnRhaW5lciB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi51c2VybmFtZS1jc3Mge1xuICBsZXR0ZXItc3BhY2luZzogMC4wM2VtO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG59XG5cblxuLmN1cnJlbmN5LWJnIHtcbiAgd2lkdGg6IDg5cHg7XG4gIGhlaWdodDogMjZweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCA2cHggI2E3YTdhNztcbiAgei1pbmRleDogMDtcbiAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xufVxuXG4uYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnBsLTEwIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4ucGwtNSB7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xufVxuXG4udi1jbnRyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uaGVhZGVyLXRleHQge1xuICBsZXR0ZXItc3BhY2luZzogMC4wM2VtO1xuICBmb250LWZhbWlseTogUG9wcGlucztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmhvbWUtY3VycmVuY3kge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jb250ZW50LWNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuXG5zcGFuIHtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG59XG5cbi5mb250LTcwMCB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5mLTEyIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ucGx1cy1iZyB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJhY2tncm91bmQ6ICM5OWM0M2M7XG4gIHotaW5kZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubWwtLTEwIHtcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xufVxuXG4ubXQtMTUge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4ubXQtMjUge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG4ubHZsLWNpcmNsZSB7XG4gIGJhY2tncm91bmQ6ICMzNzNiNjM7XG4gIHdpZHRoOiA3MHB4O1xuICBoZWlnaHQ6IDcwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJvcmRlcjogNXB4IHNvbGlkICNjOGNiZTc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubHZsLWNpcmNsZS15IHtcbiAgYmFja2dyb3VuZDogI2Y3ZDA0OTtcbiAgd2lkdGg6IDcwcHg7XG4gIGhlaWdodDogNzBweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYm9yZGVyOiA1cHggc29saWQgI2ZlZWZiOTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5sdmwtY2lyY2xlLXk+c3BhbiB7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDI3cHg7XG59XG5cbi5sdmwtY2lyY2xlPnNwYW4ge1xuICBmb250LWZhbWlseTogUG9wcGlucztcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyN3B4O1xufVxuXG4ubWwtOCB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG5cblxuLm10LTIge1xuICBtYXJnaW4tdG9wOiAycHg7XG59XG5cbi5tbC0yIHtcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbn1cblxuLm10LTEwIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLm1sLTEwIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5tbC04IHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cblxuLmJ0bi1lbmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmN1cy1idG4ge1xuICAtLWJhY2tncm91bmQ6ICM5OWM0M2M7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIHdpZHRoOiA4N3B4O1xuICBoZWlnaHQ6IDI4cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDNlbTtcbn1cblxuLnBsYXktY3VzLWJ0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ucGxheS1jdXMtYnRuPmlvbi1idXR0b24ge1xuICBtYXJnaW4tdG9wOiAtMzVweDtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoODUuODFkZWcsICM5OWM0M2MgMTMuODklLCAjYzVlNjdlIDk1Ljk0JSk7XG4gIC8vIGJvcmRlcjogM3B4IHNvbGlkICNiN2RkNjU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC0tYm9yZGVyLXJhZGl1czogOTBweDtcbiAgd2lkdGg6IDIxOHB4O1xuICBoZWlnaHQ6IDUzcHg7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uc3RvcmUtYmcge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvc3RvcmUtYmcuc3ZnXCIpO1xuXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGhlaWdodDogMTU1cHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcblxuICAuc3RvcmUtYm9keSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA1MHB4KTtcblxuICAgIHAge1xuICAgICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDI3cHg7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAzZW07XG5cbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIH1cblxuICAgIC5sb2dvLWJnIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgfVxuICB9XG59XG5cbi5jYXJkIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDUwcHgpO1xuICBtYXJnaW46IGF1dG87XG4gIG1pbi1oZWlnaHQ6IDM5MXB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3gtc2hhZG93OiAwcHggNHB4IDEwcHggcmdiYSgxMzAsIDEzMCwgMTMwLCAwLjI1KTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcblxuICAuY2FyZC1oZWFkZXIge1xuICAgIHBhZGRpbmctdG9wOiAyNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG5cbiAgLmNhcmQtaGVhZGVyPnNwYW46bnRoLWNoaWxkKDEpIHtcbiAgICBjb2xvcjogI2YyOWQ5MztcbiAgfVxuXG4gIC5jYXJkLWhlYWRlcj5zcGFuOm50aC1jaGlsZCgyKSB7XG4gICAgY29sb3I6ICNmNWFhNDA7XG4gIH1cblxuICAuY2FyZC1oZWFkZXI+c3BhbjpudGgtY2hpbGQoMikge1xuICAgIGNvbG9yOiAjODc2YmFmO1xuICB9XG59XG5cbi5zZWxlY3RlZC10YWIge1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZjI5ZDkzOyBwYWRkaW5nOiAxMHB4OyBjb2xvcjogI2ZmZjsgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cblxuaW9uLWJhY2stYnV0dG9uIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAtMTJweDtcbiAgY29sb3I6IHdoaXRlO1xuICAtLWljb24tZm9udC1zaXplOiAzNXB4O1xufVxuXG4ucGxheS1jdXMtYnRuIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbWFyZ2luOiBhdXRvO1xuICBib3R0b206IDE1cHg7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuLnBsYXktY3VzLWJ0bi5pb3N7XG4gIGJvdHRvbToxNXB4XG59XG5cbi5wbGF5LWN1cy1idG4ge1xuICAvLyBtYXJnaW4tdG9wOiAtMzVweDtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoODUuODFkZWcsICMzY2FiYzQgMTMuODklLCAjN2VhOGU2IDk1Ljk0JSk7XG4gIC8vIGJvcmRlcjogM3B4IHNvbGlkICNiN2RkNjU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC0tYm9yZGVyLXJhZGl1czogOTBweDtcbiAgYm9yZGVyLXJhZGl1czogOTBweDtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDUzcHg7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDMwcHggLTEwcHggYmxhY2s7XG59XG5cbi8vIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuLy8gZm9udC1zdHlsZTogbm9ybWFsO1xuLy8gZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyBmb250LXNpemU6IDE4cHg7XG4vLyBsaW5lLWhlaWdodDogMjdweDtcbi8vIGRpc3BsYXk6IGZsZXg7XG4vLyBhbGlnbi1pdGVtczogY2VudGVyO1xuLy8gdGV4dC1hbGlnbjogY2VudGVyO1xuLy8gbGV0dGVyLXNwYWNpbmc6IDAuMDNlbTtcblxuLy8gY29sb3I6ICNGMjlEOTM7XG4iXX0= */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"main-container\">\n  <div class=\"mt-15\" *ngFor=\"let item of data\">\n    <div class=\"list\" (click)=\"onBuyBundle(item.name)\">\n      <div>\n        <img src=\"assets/icon/filter-icon.svg\" />\n        <span class=\"pl-5 filter-text\">{{item.name}}</span>\n      </div>\n      <div class=\"cus-btn\">\n        <img width=\"15\" src=\"assets/currency-log-w.svg\" alt=\"\">\n        <span class=\"wh-text\">{{item.price}}</span>\n      </div>\n    </div>\n  </div>\n</div>");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"main-container\">\n  <div class=\"list mt-15\" (click)=\"onBuyFilter()\">\n    <div>\n      <img src=\"assets/icon/filter-icon.svg\" />\n      <span class=\"pl-5 filter-text\">Primary Filter</span>\n    </div>\n    <div class=\"cus-btn\">\n      <img width=\"15\" src=\"assets/currency-log-w.svg\" alt=\"\">\n      <span class=\"wh-text\">3000</span>\n    </div>\n  </div>\n  <div class=\"list mt-15\" (click)=\"onBuyFilter()\">\n    <div>\n      <img src=\"assets/icon/filter-icon.svg\" />\n      <span class=\"pl-5 filter-text\">Secondary Filter</span>\n    </div>\n    <div class=\"cus-btn\">\n      <img width=\"15\" src=\"assets/currency-log-w.svg\" alt=\"\">\n      <span class=\"wh-text\">3000</span>\n    </div>\n  </div>\n</div>");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"main-container\">\n  <div class=\"mt-15\" *ngFor=\"let shop of shopList\">\n    <div class=\"list\" (click)=\"onBuyBundle(shop)\">\n      <div>\n        <img src=\"assets/icon/filter-icon.svg\" />\n        <span class=\"pl-5 filter-text\" style=\"word-break:break-all;\">{{shop.name}}</span>\n      </div>\n      <div class=\"cus-btn\">\n        <img width=\"15\" src=\"assets/currency-log-w.svg\" alt=\"\">\n        <span class=\"wh-text\">{{shop.price}}</span>\n      </div>\n    </div>\n  </div>\n</div>");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-grid>\n  <ion-row class=\"top\">\n      <ion-col>\n        <ion-row class=\"top-box\">\n          <ion-col >\n            <div class=\"box img-container\">\n              <!-- <ion-back-button defaultHref=\"filter\" *ngIf=\"filterPage\" icon=\"chevron-back-outline\"></ion-back-button> -->\n              <img src=\"assets/dummy-user.jpg\" alt=\"\" width=\"55\" style=\"border-radius: 50%; margin-left: 5px\" />\n              <span class=\"pl-10 username-css\">{{this.user.user_name}}</span>\n            </div>\n          </ion-col>\n          <ion-col style=\"display: flex; align-items: center; justify-content: center;\">\n            <div class=\"box\">\n              <span class=\"v-cntr header-text\">STORE</span>\n            </div>\n          </ion-col>\n          <ion-col>\n            <div class=\"box\">\n              <img class=\"ml--10\" style=\"z-index: 1\" src=\"assets/currency-logo.svg\" alt=\"\" />\n              <div class=\"currency-bg\">\n                <div class=\"content-center font-700 f-12\">\n                  <span>{{user.puzzle_pieces}}</span>\n                </div>\n              </div>\n              <div class=\"plus-bg ml--10\">\n                <img width=\"15\" src=\"assets/plus.svg\" alt=\"\" />\n              </div>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n      \n  </ion-row>\n\n  <ion-row>\n    <ion-col class=\"store-bg\" size=\"12\">\n      <div class=\"store-body\">\n        <p>Claim daily puzzle pieces!</p>\n        <div class=\"logo-bg\">\n          <div>\n            <img id=\"claim-image-1\" width=\"38\" src=\"assets/currency-logo-b.svg\" alt=\"\">\n            <br>\n            <div style=\"text-align: center; color: white;\">10</div>\n          </div>\n          <div>\n            <img id=\"claim-image-2\" width=\"38\" src=\"assets/currency-logo-b.svg\" alt=\"\">\n            <br>\n            <div style=\"text-align: center; color: white;\">20</div>\n          </div>\n          <div>\n            <img id=\"claim-image-3\" width=\"38\" src=\"assets/currency-logo-b.svg\" alt=\"\">\n            <br>\n            <div style=\"text-align: center; color: white;\">30</div>\n          </div>\n          <div>\n            <img id=\"claim-image-4\" width=\"38\" src=\"assets/currency-logo-b.svg\" alt=\"\">\n            <br>\n            <div style=\"text-align: center; color: white;\">40</div>\n          </div>\n          <div>\n            <img id=\"claim-image-5\" width=\"38\" src=\"assets/currency-logo-b.svg\" alt=\"\">\n            <br>\n            <div style=\"text-align: center; color: white;\">50</div>\n          </div>\n          \n          <!-- <img id=\"claim-image-2\" width=\"38\" src=\"assets/currency-logo-b.svg\" alt=\"\"> 20\n          <img id=\"claim-image-3\" width=\"38\" src=\"assets/currency-logo-b.svg\" alt=\"\"> 30\n          <img id=\"claim-image-4\" width=\"38\" src=\"assets/currency-logo-b.svg\" alt=\"\"> 40\n          <img id=\"claim-image-5\" width=\"38\" src=\"assets/currency-logo-b.svg\" alt=\"\"> 50 -->\n        </div>\n        <ion-button  disabled=\"{{ buttonDisabled }}\" id=\"claim-btn\" class=\"cus-btn\" (click)=\"claimDailyReward()\"  >CLAIM</ion-button>\n      </div>\n\n    </ion-col>\n  </ion-row>\n\n  <ion-row class=\"mt-25\">\n    <div class=\"card \">\n      <div class=\"card-header\">\n        <span (click)=\"changeTab('f')\" [ngClass]=\"isFilterOpened ? 'selected-tab' : null\">Filters</span>\n        <span (click)=\"changeTab('b')\" [ngClass]=\"isBundleOpened ? 'selected-tab' : null\">Bundles</span>\n        <span (click)=\"changeTab('i')\" [ngClass]=\"isItemOpened ? 'selected-tab' : null\">Items</span>\n      </div>\n\n      <div class=\"card-body mt-2\">\n\n        <app-filter [getFilterData]=\"filterData\" (messageEvent)=\"receiveMessage($event)\" *ngIf=\"isFilterOpened\">\n        </app-filter>\n        <app-item *ngIf=\"isItemOpened\"></app-item>\n        <app-bundle *ngIf=\"isBundleOpened\"></app-bundle>\n      </div>\n    </div>\n  </ion-row>\n\n\n  <ion-row class=\"text-center\">\n    <div style=\"width: 100%; height: 50px;\"></div>\n </ion-row>\n</ion-grid>\n<ion-button *ngIf=\"lastGameCheck\" class=\"play-cus-btn\" (click)=\"onLastGameEvent()\">\n  Continue Game\n</ion-button>\n<ion-button *ngIf=\"filterPage\" class=\"play-cus-btn\" (click)=\"backToGame()\">\n  Back to Game\n</ion-button>");

/***/ })

}]);
//# sourceMappingURL=src_app_main_main_store_store_module_ts.js.map