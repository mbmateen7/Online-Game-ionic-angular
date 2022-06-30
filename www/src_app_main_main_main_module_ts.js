(self["webpackChunkpic_playce"] = self["webpackChunkpic_playce"] || []).push([["src_app_main_main_main_module_ts"],{

/***/ 54987:
/*!************************************************************************************************!*\
  !*** ./node_modules/@capacitor-community/admob/dist/esm/banner/banner-ad-options.interface.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=banner-ad-options.interface.js.map

/***/ }),

/***/ 89794:
/*!*************************************************************************************************!*\
  !*** ./node_modules/@capacitor-community/admob/dist/esm/banner/banner-ad-plugin-events.enum.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BannerAdPluginEvents": () => (/* binding */ BannerAdPluginEvents)
/* harmony export */ });
// This enum should be keep in sync with their native equivalents with the same name
var BannerAdPluginEvents;
(function (BannerAdPluginEvents) {
    BannerAdPluginEvents["SizeChanged"] = "bannerAdSizeChanged";
    BannerAdPluginEvents["Loaded"] = "bannerAdLoaded";
    BannerAdPluginEvents["FailedToLoad"] = "bannerAdFailedToLoad";
    /**
     * Open "Adsense" Event after user click banner
     */
    BannerAdPluginEvents["Opened"] = "bannerAdOpened";
    /**
     * Close "Adsense" Event after user click banner
     */
    BannerAdPluginEvents["Closed"] = "bannerAdClosed";
    /**
     * Similarly, this method should be called when an impression is recorded for the ad by the mediated SDK.
     */
    BannerAdPluginEvents["AdImpression"] = "bannerAdImpression";
})(BannerAdPluginEvents || (BannerAdPluginEvents = {}));
//# sourceMappingURL=banner-ad-plugin-events.enum.js.map

/***/ }),

/***/ 60378:
/*!********************************************************************************************!*\
  !*** ./node_modules/@capacitor-community/admob/dist/esm/banner/banner-ad-position.enum.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BannerAdPosition": () => (/* binding */ BannerAdPosition)
/* harmony export */ });
/**
 * @see https://developer.android.com/reference/android/widget/LinearLayout#attr_android:gravity
 */
var BannerAdPosition;
(function (BannerAdPosition) {
    /**
     * Banner position be top-center
     */
    BannerAdPosition["TOP_CENTER"] = "TOP_CENTER";
    /**
     * Banner position be center
     */
    BannerAdPosition["CENTER"] = "CENTER";
    /**
     * Banner position be bottom-center(default)
     */
    BannerAdPosition["BOTTOM_CENTER"] = "BOTTOM_CENTER";
})(BannerAdPosition || (BannerAdPosition = {}));
//# sourceMappingURL=banner-ad-position.enum.js.map

/***/ }),

/***/ 81592:
/*!****************************************************************************************!*\
  !*** ./node_modules/@capacitor-community/admob/dist/esm/banner/banner-ad-size.enum.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BannerAdSize": () => (/* binding */ BannerAdSize)
/* harmony export */ });
/**
 *  For more information:
 *  https://developers.google.com/admob/ios/banner#banner_sizes
 *  https://developers.google.com/android/reference/com/google/android/gms/ads/AdSize
 *
 * */
var BannerAdSize;
(function (BannerAdSize) {
    /**
     * Mobile Marketing Association (MMA)
     * banner ad size (320x50 density-independent pixels).
     */
    BannerAdSize["BANNER"] = "BANNER";
    /**
     * Interactive Advertising Bureau (IAB)
     * full banner ad size (468x60 density-independent pixels).
     */
    BannerAdSize["FULL_BANNER"] = "FULL_BANNER";
    /**
     * Large banner ad size (320x100 density-independent pixels).
     */
    BannerAdSize["LARGE_BANNER"] = "LARGE_BANNER";
    /**
     * Interactive Advertising Bureau (IAB)
     * medium rectangle ad size (300x250 density-independent pixels).
     */
    BannerAdSize["MEDIUM_RECTANGLE"] = "MEDIUM_RECTANGLE";
    /**
     * Interactive Advertising Bureau (IAB)
     * leaderboard ad size (728x90 density-independent pixels).
     */
    BannerAdSize["LEADERBOARD"] = "LEADERBOARD";
    /**
     * A dynamically sized banner that is full-width and auto-height.
     */
    BannerAdSize["ADAPTIVE_BANNER"] = "ADAPTIVE_BANNER";
    /**
     * @deprecated
     * Will be removed in next AdMob versions use `ADAPTIVE_BANNER`
     * Screen width x 32|50|90
     */
    BannerAdSize["SMART_BANNER"] = "SMART_BANNER";
})(BannerAdSize || (BannerAdSize = {}));
//# sourceMappingURL=banner-ad-size.enum.js.map

/***/ }),

/***/ 50658:
/*!*************************************************************************************************!*\
  !*** ./node_modules/@capacitor-community/admob/dist/esm/banner/banner-definitions.interface.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=banner-definitions.interface.js.map

/***/ }),

/***/ 17245:
/*!******************************************************************************************!*\
  !*** ./node_modules/@capacitor-community/admob/dist/esm/banner/banner-size.interface.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=banner-size.interface.js.map

/***/ }),

/***/ 76457:
/*!**************************************************************************!*\
  !*** ./node_modules/@capacitor-community/admob/dist/esm/banner/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BannerAdPluginEvents": () => (/* reexport safe */ _banner_ad_plugin_events_enum__WEBPACK_IMPORTED_MODULE_1__.BannerAdPluginEvents),
/* harmony export */   "BannerAdPosition": () => (/* reexport safe */ _banner_ad_position_enum__WEBPACK_IMPORTED_MODULE_2__.BannerAdPosition),
/* harmony export */   "BannerAdSize": () => (/* reexport safe */ _banner_ad_size_enum__WEBPACK_IMPORTED_MODULE_3__.BannerAdSize)
/* harmony export */ });
/* harmony import */ var _banner_ad_options_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./banner-ad-options.interface */ 54987);
/* harmony import */ var _banner_ad_plugin_events_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./banner-ad-plugin-events.enum */ 89794);
/* harmony import */ var _banner_ad_position_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./banner-ad-position.enum */ 60378);
/* harmony import */ var _banner_ad_size_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./banner-ad-size.enum */ 81592);
/* harmony import */ var _banner_definitions_interface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./banner-definitions.interface */ 50658);
/* harmony import */ var _banner_size_interface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./banner-size.interface */ 17245);






//# sourceMappingURL=index.js.map

/***/ }),

/***/ 14653:
/*!*************************************************************************!*\
  !*** ./node_modules/@capacitor-community/admob/dist/esm/definitions.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaxAdContentRating": () => (/* binding */ MaxAdContentRating)
/* harmony export */ });
var MaxAdContentRating;
(function (MaxAdContentRating) {
    /**
     * Content suitable for general audiences, including families.
     */
    MaxAdContentRating["General"] = "General";
    /**
     * Content suitable for most audiences with parental guidance.
     */
    MaxAdContentRating["ParentalGuidance"] = "ParentalGuidance";
    /**
     * Content suitable for teen and older audiences.
     */
    MaxAdContentRating["Teen"] = "Teen";
    /**
     * Content suitable only for mature audiences.
     */
    MaxAdContentRating["MatureAudience"] = "MatureAudience";
})(MaxAdContentRating || (MaxAdContentRating = {}));
//# sourceMappingURL=definitions.js.map

/***/ }),

/***/ 15453:
/*!*******************************************************************!*\
  !*** ./node_modules/@capacitor-community/admob/dist/esm/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaxAdContentRating": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.MaxAdContentRating),
/* harmony export */   "BannerAdPluginEvents": () => (/* reexport safe */ _banner_index__WEBPACK_IMPORTED_MODULE_2__.BannerAdPluginEvents),
/* harmony export */   "BannerAdPosition": () => (/* reexport safe */ _banner_index__WEBPACK_IMPORTED_MODULE_2__.BannerAdPosition),
/* harmony export */   "BannerAdSize": () => (/* reexport safe */ _banner_index__WEBPACK_IMPORTED_MODULE_2__.BannerAdSize),
/* harmony export */   "InterstitialAdPluginEvents": () => (/* reexport safe */ _interstitial_index__WEBPACK_IMPORTED_MODULE_3__.InterstitialAdPluginEvents),
/* harmony export */   "RewardAdPluginEvents": () => (/* reexport safe */ _reward_index__WEBPACK_IMPORTED_MODULE_4__.RewardAdPluginEvents),
/* harmony export */   "AdMob": () => (/* binding */ AdMob)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 68384);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 14653);
/* harmony import */ var _banner_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./banner/index */ 76457);
/* harmony import */ var _interstitial_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interstitial/index */ 22665);
/* harmony import */ var _reward_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reward/index */ 55323);
/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/index */ 26485);

const AdMob = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('AdMob', {
    web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor-community_admob_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 35494)).then(m => new m.AdMobWeb()),
});






//# sourceMappingURL=index.js.map

/***/ }),

/***/ 22665:
/*!********************************************************************************!*\
  !*** ./node_modules/@capacitor-community/admob/dist/esm/interstitial/index.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InterstitialAdPluginEvents": () => (/* reexport safe */ _interstitial_ad_plugin_events_enum__WEBPACK_IMPORTED_MODULE_0__.InterstitialAdPluginEvents)
/* harmony export */ });
/* harmony import */ var _interstitial_ad_plugin_events_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interstitial-ad-plugin-events.enum */ 89237);
/* harmony import */ var _interstitial_definitions_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interstitial-definitions.interface */ 90939);


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 89237:
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@capacitor-community/admob/dist/esm/interstitial/interstitial-ad-plugin-events.enum.js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InterstitialAdPluginEvents": () => (/* binding */ InterstitialAdPluginEvents)
/* harmony export */ });
// This enum should be keep in sync with their native equivalents with the same name
var InterstitialAdPluginEvents;
(function (InterstitialAdPluginEvents) {
    /**
     * Emits after trying to prepare and Interstitial, when it is loaded and ready to be show
     */
    InterstitialAdPluginEvents["Loaded"] = "interstitialAdLoaded";
    /**
     * Emits after trying to prepare and Interstitial, when it could not be loaded
     */
    InterstitialAdPluginEvents["FailedToLoad"] = "interstitialAdFailedToLoad";
    /**
     * Emits when the Interstitial ad is visible to the user
     */
    InterstitialAdPluginEvents["Showed"] = "interstitialAdShowed";
    /**
     * Emits when the Interstitial ad is failed to show
     */
    InterstitialAdPluginEvents["FailedToShow"] = "interstitialAdFailedToShow";
    /**
     * Emits when the Interstitial ad is not visible to the user anymore.
     */
    InterstitialAdPluginEvents["Dismissed"] = "interstitialAdDismissed";
})(InterstitialAdPluginEvents || (InterstitialAdPluginEvents = {}));
//# sourceMappingURL=interstitial-ad-plugin-events.enum.js.map

/***/ }),

/***/ 90939:
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@capacitor-community/admob/dist/esm/interstitial/interstitial-definitions.interface.js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=interstitial-definitions.interface.js.map

/***/ }),

/***/ 55323:
/*!**************************************************************************!*\
  !*** ./node_modules/@capacitor-community/admob/dist/esm/reward/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RewardAdPluginEvents": () => (/* reexport safe */ _reward_ad_plugin_events_enum__WEBPACK_IMPORTED_MODULE_0__.RewardAdPluginEvents)
/* harmony export */ });
/* harmony import */ var _reward_ad_plugin_events_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reward-ad-plugin-events.enum */ 16537);
/* harmony import */ var _reward_definitions_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reward-definitions.interface */ 20555);
/* harmony import */ var _reward_item_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reward-item.interface */ 6650);
/* harmony import */ var _reward_ad_options_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reward-ad-options.interface */ 81980);




//# sourceMappingURL=index.js.map

/***/ }),

/***/ 81980:
/*!************************************************************************************************!*\
  !*** ./node_modules/@capacitor-community/admob/dist/esm/reward/reward-ad-options.interface.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=reward-ad-options.interface.js.map

/***/ }),

/***/ 16537:
/*!*************************************************************************************************!*\
  !*** ./node_modules/@capacitor-community/admob/dist/esm/reward/reward-ad-plugin-events.enum.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RewardAdPluginEvents": () => (/* binding */ RewardAdPluginEvents)
/* harmony export */ });
// This enum should be keep in sync with their native equivalents with the same name
var RewardAdPluginEvents;
(function (RewardAdPluginEvents) {
    /**
     * Emits after trying to prepare a RewardAd and the Video is loaded and ready to be show
     */
    RewardAdPluginEvents["Loaded"] = "onRewardedVideoAdLoaded";
    /**
     * Emits after trying to prepare a RewardAd when it could not be loaded
     */
    RewardAdPluginEvents["FailedToLoad"] = "onRewardedVideoAdFailedToLoad";
    /**
     * Emits when the AdReward video is visible to the user
     */
    RewardAdPluginEvents["Showed"] = "onRewardedVideoAdShowed";
    /**
     * Emits when the AdReward video is failed to show
     */
    RewardAdPluginEvents["FailedToShow"] = "onRewardedVideoAdFailedToShow";
    /**
     * Emits when the AdReward video is not visible to the user anymore.
     *
     * **Important**: This has nothing to do with the reward it self. This event
     * will emits in this two cases:
     * 1. The user starts the video ad but close it before the reward emit.
     * 2. The user start the video and see it until end, then gets the reward
     * and after that the ad is closed.
     */
    RewardAdPluginEvents["Dismissed"] = "onRewardedVideoAdDismissed";
    /**
     * Emits when user get rewarded from AdReward
     */
    RewardAdPluginEvents["Rewarded"] = "onRewardedVideoAdReward";
})(RewardAdPluginEvents || (RewardAdPluginEvents = {}));
//# sourceMappingURL=reward-ad-plugin-events.enum.js.map

/***/ }),

/***/ 20555:
/*!*************************************************************************************************!*\
  !*** ./node_modules/@capacitor-community/admob/dist/esm/reward/reward-definitions.interface.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=reward-definitions.interface.js.map

/***/ }),

/***/ 6650:
/*!******************************************************************************************!*\
  !*** ./node_modules/@capacitor-community/admob/dist/esm/reward/reward-item.interface.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=reward-item.interface.js.map

/***/ }),

/***/ 98502:
/*!*******************************************************************************************!*\
  !*** ./node_modules/@capacitor-community/admob/dist/esm/shared/ad-load-info.interface.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=ad-load-info.interface.js.map

/***/ }),

/***/ 56359:
/*!*****************************************************************************************!*\
  !*** ./node_modules/@capacitor-community/admob/dist/esm/shared/ad-options.interface.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=ad-options.interface.js.map

/***/ }),

/***/ 64539:
/*!******************************************************************************************!*\
  !*** ./node_modules/@capacitor-community/admob/dist/esm/shared/admob-error.interface.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=admob-error.interface.js.map

/***/ }),

/***/ 26485:
/*!**************************************************************************!*\
  !*** ./node_modules/@capacitor-community/admob/dist/esm/shared/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ad_load_info_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ad-load-info.interface */ 98502);
/* harmony import */ var _ad_options_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ad-options.interface */ 56359);
/* harmony import */ var _admob_error_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admob-error.interface */ 64539);



//# sourceMappingURL=index.js.map

/***/ }),

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
/* harmony export */   "MainPage": () => (/* binding */ MainPage),
/* harmony export */   "banner": () => (/* binding */ banner),
/* harmony export */   "initialize": () => (/* binding */ initialize)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_main_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./main.page.html */ 3495);
/* harmony import */ var _main_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.page.scss */ 52382);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_service_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/rest.service */ 90421);
/* harmony import */ var _capacitor_community_admob__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor-community/admob */ 15453);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);







let MainPage = class MainPage {
    constructor(restService, loading) {
        this.restService = restService;
        this.loading = loading;
        this.activeTab = 'game';
    }
    ngOnInit() {
        this.restService
            .getRequest('shop/AllFilterList')
            .subscribe((res) => {
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
            }
            this.restService
                .getRequest('shop/purchase-detail')
                .subscribe((res) => {
                console.log('purchase detail reponse');
                this.ownedItemsList = res.message;
                localStorage.setItem('ownedItemsList', JSON.stringify(this.ownedItemsList));
                // console.log('this.ownedItemsList', this.ownedItemsList);
                // this.isLoading = false;
                // this.spinnerDialog.hide();
            });
        });
        initialize().then((r) => {
            banner().then((x) => {
                let tabBar = document.getElementsByTagName('ion-app');
                tabBar[0].style.bottom = '60px';
            });
        });
    }
    setCurrentTab(e) {
        console.log('This is event', e.tab);
        this.activeTab = e.tab;
    }
    doLoading() {
        let loader = this.loading.create({
            message: 'Loading...',
        });
    }
};
MainPage.ctorParameters = () => [
    { type: src_app_service_rest_service__WEBPACK_IMPORTED_MODULE_2__.RestService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController }
];
MainPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-main',
        template: _raw_loader_main_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_main_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MainPage);

function banner() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
        _capacitor_community_admob__WEBPACK_IMPORTED_MODULE_3__.AdMob.addListener(_capacitor_community_admob__WEBPACK_IMPORTED_MODULE_3__.BannerAdPluginEvents.Loaded, () => {
            // Subscribe Banner Event Listener
        });
        _capacitor_community_admob__WEBPACK_IMPORTED_MODULE_3__.AdMob.addListener(_capacitor_community_admob__WEBPACK_IMPORTED_MODULE_3__.BannerAdPluginEvents.SizeChanged, (size) => {
            // Subscribe Change Banner Size
        });
        const options = {
            adId: 'ca-app-pub-3940256099942544/6300978111',
            adSize: _capacitor_community_admob__WEBPACK_IMPORTED_MODULE_3__.BannerAdSize.ADAPTIVE_BANNER,
            position: _capacitor_community_admob__WEBPACK_IMPORTED_MODULE_3__.BannerAdPosition.BOTTOM_CENTER,
            margin: 0,
            // isTesting: true
            // npa: true
        };
        _capacitor_community_admob__WEBPACK_IMPORTED_MODULE_3__.AdMob.showBanner(options);
    });
}
function initialize() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
        const { status } = yield _capacitor_community_admob__WEBPACK_IMPORTED_MODULE_3__.AdMob.trackingAuthorizationStatus();
        if (status === 'notDetermined') {
            /**
             * If you want to explain TrackingAuthorization before showing the iOS dialog,
             * you can show the modal here.
             * ex)
             * const modal = await this.modalCtrl.create({
             *   component: RequestTrackingPage,
             * });
             * await modal.present();
             * await modal.onDidDismiss();  // Wait for close modal
             **/
        }
        _capacitor_community_admob__WEBPACK_IMPORTED_MODULE_3__.AdMob.initialize({
            requestTrackingAuthorization: true,
            testingDevices: ['2077ef9a63d2b398840261c8221a0c9b'],
            initializeForTesting: true,
        });
    });
}


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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".activeText {\n  color: #8A94C8;\n}\n\nion-tabs {\n  margin-bottom: 90px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQUNGOztBQUNBO0VBQ0ksbUJBQUE7QUFFSiIsImZpbGUiOiJtYWluLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3RpdmVUZXh0IHtcbiAgY29sb3I6ICM4QTk0Qzg7XG59XG5pb24tdGFic3tcbiAgICBtYXJnaW4tYm90dG9tOiA5MHB4O1xufVxuIl19 */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\n  <ion-tabs (ionTabsDidChange)=\"setCurrentTab($event)\">\n    <ion-tab-bar slot=\"bottom\" id=\"tabs-bar\">\n      <!-- <ion-tab-button tab=\"main\">\n        <ion-icon name=\"calendar\"></ion-icon>\n        <ion-label>Schedule</ion-label>\n        <ion-badge>6</ion-badge>\n      </ion-tab-button> -->\n\n      <ion-tab-button tab=\"game\" (click)=\"doLoading()\">\n        <ion-icon [src]=\"activeTab == 'game'  ? 'assets/icon/picplayce_dark.svg' : 'assets/icon/c-dull-logo.svg' \">\n        </ion-icon>\n\n        <ion-label [ngClass]=\"{'activeText': activeTab == 'game'}\">Game</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button tab=\"freind\" (click)=\"doLoading()\" >\n        <ion-icon [src]=\"activeTab == 'freind' ? 'assets/icon/friend_dark.svg' : 'assets/icon/friend.svg'\">\n        </ion-icon>\n        <ion-label [ngClass]=\"{'activeText': activeTab == 'freind'}\">Friends</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button tab=\"store\" (click)=\"doLoading()\" >\n        <ion-icon [src]=\"activeTab == 'store' ? 'assets/icon/store_dark.svg' : 'assets/icon/store.svg'\"></ion-icon>\n        <ion-label [ngClass]=\"{'activeText': activeTab == 'store'}\">Store</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button tab=\"setting\">\n        <ion-icon [src]=\"activeTab == 'setting' ? 'assets/icon/setting_dark.svg' : 'assets/icon/setting.svg'\">\n        </ion-icon>\n        <ion-label [ngClass]=\"{'activeText': activeTab == 'setting'}\">Setting</ion-label>\n      </ion-tab-button>\n    </ion-tab-bar>\n  </ion-tabs>\n</ion-app>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_main_main_main_module_ts.js.map