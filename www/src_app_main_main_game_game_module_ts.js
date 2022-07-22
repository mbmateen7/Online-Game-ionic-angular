(self["webpackChunkpic_playce"] = self["webpackChunkpic_playce"] || []).push([["src_app_main_main_game_game_module_ts"],{

/***/ 69628:
/*!*******************************************************!*\
  !*** ./src/app/main/main/game/game-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GamePageRoutingModule": () => (/* binding */ GamePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _game_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.page */ 22175);




const routes = [
    {
        path: '',
        component: _game_page__WEBPACK_IMPORTED_MODULE_0__.GamePage
    }
];
let GamePageRoutingModule = class GamePageRoutingModule {
};
GamePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], GamePageRoutingModule);



/***/ }),

/***/ 73848:
/*!***********************************************!*\
  !*** ./src/app/main/main/game/game.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GamePageModule": () => (/* binding */ GamePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _game_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game-routing.module */ 69628);
/* harmony import */ var _game_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game.page */ 22175);







let GamePageModule = class GamePageModule {
};
GamePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _game_routing_module__WEBPACK_IMPORTED_MODULE_0__.GamePageRoutingModule
        ],
        declarations: [_game_page__WEBPACK_IMPORTED_MODULE_1__.GamePage]
    })
], GamePageModule);



/***/ }),

/***/ 22175:
/*!*********************************************!*\
  !*** ./src/app/main/main/game/game.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GamePage": () => (/* binding */ GamePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_game_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./game.page.html */ 41324);
/* harmony import */ var _game_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game.page.scss */ 73965);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_service_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/rest.service */ 90421);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ 88259);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/push-notifications */ 98748);
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ 19342);










let GamePage = class GamePage {
    constructor(restService, router, navCtrl, activatedRoute, googlePlus, loading) {
        this.restService = restService;
        this.router = router;
        this.navCtrl = navCtrl;
        this.activatedRoute = activatedRoute;
        this.googlePlus = googlePlus;
        this.loading = loading;
        this.progressPercent = 0;
        this.gameList = null;
        this.claimList = [];
        this.levelList = [];
        this.showMoveList = false;
        this.showRewardList = false;
        this.showGiveRewardList = false;
        this.showClaimBtn = false;
        this.showGiveRewardClaimBtn = false;
        this.lastGameCheck = false;
        _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_4__.PushNotifications.requestPermissions().then((result) => {
            if (result.receive === 'granted') {
                _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_4__.PushNotifications.register();
            }
            else {
            }
        });
        _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_4__.PushNotifications.addListener('pushNotificationReceived', (res) => {
            let showRespnse = true;
            if (res && showRespnse) {
                showRespnse = false;
                this.showMoveList = false;
                this.gameList = [];
                this.restService
                    .getRequest('games/get-game')
                    .subscribe((res) => {
                    if (res.user) {
                        this.gameList = res.user;
                        this.showMoveList = true;
                        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
                            title: 'Success',
                            text: 'New Game Received',
                            showCloseButton: true,
                        });
                    }
                });
                this.getUserDetail();
                this.getCalimList();
            }
        });
    }
    ionViewDidEnter() {
        this.getUserDetail();
    }
    ngOnInit() {
        // console.log('Gamesent param', this.activatedRoute.snapshot.paramMap.get('gameSent'))
        this.getGameList();
        this.getUserDetail();
        this.getCalimList();
        if (this.activatedRoute.snapshot.paramMap.get('gameSent')) {
            this.getGameList();
            this.getUserDetail();
            this.getCalimList();
        }
        this.showMoveList = false;
        this.user = JSON.parse(localStorage.getItem('user'));
        this.getLevelList();
        this.showMoveList = false;
    }
    ionViewWillEnter() {
        let lastGame = localStorage.getItem('lastGame');
        if (lastGame) {
            this.lastGame = JSON.parse(lastGame);
            this.lastGameCheck = true;
        }
        this.getUserDetail();
        this.getCalimList();
        this.getLevelList();
        this.getGameList();
    }
    onPlayGame(game) {
        this.doLoading().then(() => {
            localStorage.setItem('lastGame', JSON.stringify(game));
            this.router.navigate(['play-game', { game: JSON.stringify(game) }], { replaceUrl: true });
            this.loader.dismiss();
        });
    }
    doLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.loader = yield this.loading.create({
                message: 'Loading...',
            });
            this.loader.present();
        });
    }
    onRewardUpdate(user, i) {
        const rewardObj = {
            game_id: user.game_id,
            reward_id: user.reward_id,
            player_id: user.friend_id,
        };
        this.restService
            .postRequestToken('claim/claim-reward', rewardObj)
            .subscribe((res) => {
            if (res) {
                this.restService
                    .getRequest('users/detail')
                    .subscribe((res) => {
                    this.ionViewWillEnter();
                    this.user = res;
                    localStorage.setItem('user', JSON.stringify(res));
                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
                        title: '<div><img src="assets/icon/greencheck.png" style="width: 20vw; height:20vw;"><br><h5>Claimed all!</h5></div>',
                        text: 'Reward is claimed',
                        confirmButtonText: 'Cool',
                        confirmButtonColor: '#99C43C',
                        allowOutsideClick: true,
                        // backdrop: true,
                    });
                });
            }
        });
    }
    getLevelList() {
        this.restService
            .getRequest('users/get-level-list')
            .subscribe((res) => {
            let baseLvl = null;
            let upLvl = null;
            this.levelList = res.message;
            this.user = localStorage.getItem('user');
            this.user = JSON.parse(this.user);
            baseLvl = this.levelList.filter((lvl) => lvl.id == this.user.level_id);
            upLvl = this.levelList.filter((lvl) => lvl.id == this.user.level_id + 1);
            if (baseLvl[0]) {
                const baseDiff = upLvl[0].experience - baseLvl[0].experience;
                if (this.user.experience > baseLvl[0].experience) {
                    const exp = this.user.experience - baseLvl[0].experience;
                    this.progressPercent = (exp / baseDiff) * 100;
                }
            }
            else {
                this.progressPercent = 0;
            }
        });
    }
    onNewGameEvent() {
        this.navCtrl.navigateForward('/contactlist');
    }
    onLastGameEvent() {
        this.onPlayGame(this.lastGame);
    }
    getGameList() {
        this.restService.getRequest('games/get-game').subscribe((res) => {
            if (res.user && !this.showMoveList) {
                this.gameList = res.user;
                this.showMoveList = true;
            }
        });
    }
    getUserDetail() {
        this.restService.getRequest('users/detail').subscribe((res) => {
            this.user = res;
            localStorage.setItem('user', JSON.stringify(res));
        });
    }
    getCalimList() {
        this.restService
            .getRequest('claim/claim-list')
            .subscribe((res) => {
            if (res.claim) {
                this.claimList = res.claim;
                this.showRewardList = true;
            }
        });
    }
    claimAllReward() {
        let allClaimRewardList = [];
        this.claimList.forEach((claim) => {
            claim.claim_reward.forEach((el) => {
                if (el.reward_id != 4) {
                    allClaimRewardList.push(el);
                }
            });
        });
        // console.log('allClaimRewardList', allClaimRewardList);
        this.restService
            .postRequestToken('claim/claim-reward-for-all', {
            list: allClaimRewardList,
        })
            .subscribe((res) => {
            if (res) {
                this.ionViewWillEnter();
                this.restService
                    .getRequest('users/detail')
                    .subscribe((res) => {
                    this.user = res;
                    localStorage.setItem('user', JSON.stringify(res));
                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
                        title: '<div><img src="assets/icon/greencheck.png" style="width: 20vw; height:20vw;"><br><h5>Claimed all!</h5></div>',
                        text: 'Reward is claimed',
                        confirmButtonText: 'Cool',
                        confirmButtonColor: '#99C43C',
                        allowOutsideClick: true,
                        // backdrop: true,
                    });
                });
            }
        });
    }
    giveRewardToAll() {
        let allClaimRewardList = [];
        this.claimList.forEach((claim) => {
            claim.give_reward.forEach((el) => {
                if (el.reward_id == 4) {
                    allClaimRewardList.push(el);
                }
            });
        });
        this.restService
            .postRequestToken('claim/give-reward-to-all', {
            list: allClaimRewardList,
        })
            .subscribe((res) => {
            if (res) {
                this.ionViewWillEnter();
                this.restService
                    .getRequest('users/detail')
                    .subscribe((res) => {
                    this.user = res;
                    localStorage.setItem('user', JSON.stringify(res));
                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
                        title: '<div><img src="assets/icon/greencheck.png" style="width: 20vw; height:20vw;"><br><h5>Claimed all!</h5></div>',
                        text: 'Reward is claimed',
                        confirmButtonText: 'Cool',
                        confirmButtonColor: '#99C43C',
                        allowOutsideClick: true,
                        // backdrop: true,
                    });
                });
            }
        });
    }
};
GamePage.ctorParameters = () => [
    { type: src_app_service_rest_service__WEBPACK_IMPORTED_MODULE_2__.RestService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_5__.GooglePlus },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController }
];
GamePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-game',
        template: _raw_loader_game_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_game_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], GamePage);



/***/ }),

/***/ 73965:
/*!***********************************************!*\
  !*** ./src/app/main/main/game/game.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("p {\n  font-family: Poppins;\n}\n\nion-content ion-fab-button {\n  height: auto;\n  width: 100%;\n  --border-radius:50px;\n}\n\nion-grid {\n  padding: 0px !important;\n  overflow-y: auto;\n  margin: 0px;\n}\n\n.top {\n  width: 100vw;\n  height: 107px;\n  background: linear-gradient(180deg, #6976b9 0%, rgba(105, 118, 185, 0.76) 100%);\n  box-shadow: 0px 5px 10px rgba(73, 73, 73, 0.25);\n}\n\n.top-box {\n  display: inline-flex;\n  align-items: center;\n  width: 100%;\n}\n\n.currency-bg {\n  width: 89px;\n  height: 26px;\n  background: #ffffff;\n  box-shadow: inset 0px 0px 6px #a7a7a7;\n  z-index: 0;\n  margin-left: -15px;\n}\n\n.box {\n  display: flex;\n  align-items: center;\n}\n\n.pl-10 {\n  padding-left: 10px;\n}\n\n.username-css {\n  letter-spacing: 0.03em;\n  color: #ffffff;\n  font-weight: 600;\n  font-size: 15px;\n  line-height: 22px;\n  font-family: Poppins;\n}\n\n.home-currency {\n  display: flex;\n  align-content: center;\n}\n\n.content-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100%;\n}\n\nspan {\n  font-family: Poppins;\n}\n\n.font-700 {\n  font-weight: 700;\n}\n\n.f-12 {\n  font-size: 12px;\n}\n\n.plus-bg {\n  width: 30px;\n  height: 30px;\n  background: #99c43c;\n  z-index: 1;\n  display: flex;\n  justify-content: center;\n}\n\n.ml--10 {\n  margin-left: -10px;\n}\n\n.mt-15 {\n  margin-top: 15px;\n}\n\n.lvl-circle {\n  background: #373b63;\n  width: 70px;\n  height: 70px;\n  border-radius: 50px;\n  border: 5px solid #c8cbe7;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.lvl-circle-y {\n  background: #f7d049;\n  width: 70px;\n  height: 70px;\n  border-radius: 50px;\n  border: 5px solid #feefb9;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.lvl-circle-y > span {\n  font-family: Poppins;\n  color: #ffffff;\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 27px;\n}\n\n.lvl-circle > span {\n  font-family: Poppins;\n  color: #ffffff;\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 27px;\n}\n\n.ml-8 {\n  margin-left: 8px;\n}\n\n.card {\n  font-family: Poppins;\n  width: 95%;\n  display: block;\n  margin: 15px auto;\n  border: 1px solid rgba(242, 157, 147, 0.45);\n  box-sizing: border-box;\n  box-shadow: 0px 4px 20px rgba(130, 130, 130, 0.25);\n  border-radius: 20px;\n  height: 200px;\n}\n\n.card .card-body {\n  height: 135px;\n  overflow: auto;\n  overflow-y: visible;\n}\n\n.card .card-body .body-header {\n  margin: 2px;\n  float: right;\n  margin-right: 13px;\n}\n\n.card .card-header {\n  height: 35px;\n  padding-left: 15px;\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n  color: white;\n  letter-spacing: 0.03em;\n  font-weight: bold;\n  font-size: 16px;\n  display: flex;\n  align-items: center;\n}\n\n.card .move {\n  background-color: #f29d93;\n}\n\n.card .reward {\n  background-color: #f7d049;\n}\n\n.card .givereward {\n  background-color: #9dcaec;\n}\n\n.mt-2 {\n  margin-top: 2px;\n}\n\n.ml-2 {\n  margin-left: 2px;\n}\n\n.mt-10 {\n  margin-top: 10px;\n}\n\n.ml-10 {\n  margin-left: 10px;\n}\n\n.ml-8 {\n  margin-left: 8px;\n}\n\n.btn-end {\n  display: block;\n  float: right;\n  margin-left: auto;\n  margin-right: 10px;\n}\n\n.cus-btn {\n  background: #99c43c;\n  border-radius: 30px;\n  width: auto;\n  height: 28px;\n  font-size: 14px;\n  letter-spacing: 0.03em;\n  color: white;\n}\n\n.play-cus-btn {\n  display: flex;\n  justify-content: center;\n  position: fixed;\n  margin: auto;\n  bottom: 15px;\n  left: 0;\n  right: 0;\n}\n\n.play-cus-btn.ios {\n  bottom: 15px;\n}\n\n.play-cus-btn {\n  --background: linear-gradient(85.81deg, #99c43c 13.89%, #c5e67e 95.94%);\n  box-sizing: border-box;\n  --border-radius: 90px;\n  border-radius: 90px;\n  width: 200px;\n  height: 53px;\n  font-family: Poppins;\n  font-weight: bold;\n  font-size: 16px;\n  box-shadow: 0px 0px 30px -10px black;\n}\n\n.continue-cus-btn {\n  display: flex;\n  justify-content: center;\n  margin: auto;\n  left: 0;\n  right: 0;\n}\n\n.continue-cus-btn.ios {\n  bottom: 15px;\n}\n\n.continue-cus-btn {\n  --background: linear-gradient(85.81deg, #3cabc4 13.89%, #7ea8e6 95.94%);\n  box-sizing: border-box;\n  --border-radius: 90px;\n  border-radius: 90px;\n  width: 200px;\n  height: 53px;\n  font-family: Poppins;\n  font-weight: bold;\n  font-size: 16px;\n  box-shadow: 0px 0px 30px -10px black;\n}\n\n.loader {\n  background: linear-gradient(90deg, #8a94c8 41.94%, rgba(240, 199, 142, 0.72) 100%);\n  border-radius: 100px;\n  height: 20px;\n}\n\n.lvl-card-container {\n  display: flex;\n  width: 95%;\n  margin: auto;\n}\n\n.lvl-card-container .lvl-loader {\n  flex: 1;\n  align-self: center;\n  background: #FFFFFF;\n  box-shadow: inset 0px 0px 7px rgba(65, 65, 65, 0.25);\n  border-radius: 10px;\n  margin: 0 10px;\n}\n\n.user-container {\n  display: flex;\n  width: 95%;\n  margin: auto;\n  justify-content: space-between;\n  padding: 5px;\n}\n\n.user-container .img-container,\n.user-container .box {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.user-container .img-container {\n  flex-direction: column;\n}\n\n.blue-bg {\n  background: linear-gradient(180deg, #6976b9 0%, rgba(105, 118, 185, 0.76) 100%);\n  box-shadow: 0px 5px 10px rgba(73, 73, 73, 0.25);\n  height: 107px;\n}\n\n.no-record {\n  text-align: center;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 20px;\n  color: #ccc;\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,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UkY7O0FBV0E7RUFFRSx1RUFBQTtFQUVBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtBQVZGOztBQWFBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FBVkY7O0FBWUE7RUFDRSxZQUFBO0FBVEY7O0FBWUE7RUFFRSx1RUFBQTtFQUVBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtBQVhGOztBQWNBO0VBQ0Usa0ZBQUE7RUFHQSxvQkFBQTtFQUNBLFlBQUE7QUFiRjs7QUFnQkE7RUFDRSxhQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFiRjs7QUFlRTtFQUNFLE9BQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0RBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFiSjs7QUFpQkE7RUFFRSxhQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7QUFmRjs7QUFpQkU7O0VBRUUsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFmSjs7QUFrQkU7RUFDRSxzQkFBQTtBQWhCSjs7QUFxQkE7RUFDRSwrRUFBQTtFQUdBLCtDQUFBO0VBQ0EsYUFBQTtBQXBCRjs7QUF1QkE7RUFDRSxrQkFBQTtFQUFvQixXQUFBO0VBQWEsWUFBQTtFQUFjLGFBQUE7RUFDekIsdUJBQUE7RUFDQSxtQkFBQTtFQUFxQixlQUFBO0VBQWlCLFdBQUE7RUFBYSxnQkFBQTtBQWQzRSIsImZpbGUiOiJnYW1lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xuICBmb250LWZhbWlseTogUG9wcGlucztcbn1cbmlvbi1jb250ZW50e1xuICBpb24tZmFiLWJ1dHRvbntcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLS1ib3JkZXItcmFkaXVzOjUwcHg7XG4gICAgLy8gcmlnaHQ6IDtcbiAgfVxufVxuaW9uLWdyaWQge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgbWFyZ2luOiAwcHhcbn1cblxuLnRvcCB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDdweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZyxcbiAgICAgICM2OTc2YjkgMCUsXG4gICAgICByZ2JhKDEwNSwgMTE4LCAxODUsIDAuNzYpIDEwMCUpO1xuICBib3gtc2hhZG93OiAwcHggNXB4IDEwcHggcmdiYSg3MywgNzMsIDczLCAwLjI1KTtcbn1cblxuLnRvcC1ib3gge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jdXJyZW5jeS1iZyB7XG4gIHdpZHRoOiA4OXB4O1xuICBoZWlnaHQ6IDI2cHg7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggNnB4ICNhN2E3YTc7XG4gIHotaW5kZXg6IDA7XG4gIG1hcmdpbi1sZWZ0OiAtMTVweDtcbn1cblxuLmJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wbC0xMCB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLnVzZXJuYW1lLWNzcyB7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAzZW07XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBmb250LWZhbWlseTogUG9wcGlucztcbn1cblxuLmhvbWUtY3VycmVuY3kge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jb250ZW50LWNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuXG5zcGFuIHtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG59XG5cbi5mb250LTcwMCB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5mLTEyIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ucGx1cy1iZyB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJhY2tncm91bmQ6ICM5OWM0M2M7XG4gIHotaW5kZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubWwtLTEwIHtcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xufVxuXG4ubXQtMTUge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4ubHZsLWNpcmNsZSB7XG4gIGJhY2tncm91bmQ6ICMzNzNiNjM7XG4gIHdpZHRoOiA3MHB4O1xuICBoZWlnaHQ6IDcwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJvcmRlcjogNXB4IHNvbGlkICNjOGNiZTc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubHZsLWNpcmNsZS15IHtcbiAgYmFja2dyb3VuZDogI2Y3ZDA0OTtcbiAgd2lkdGg6IDcwcHg7XG4gIGhlaWdodDogNzBweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYm9yZGVyOiA1cHggc29saWQgI2ZlZWZiOTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5sdmwtY2lyY2xlLXk+c3BhbiB7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDI3cHg7XG59XG5cbi5sdmwtY2lyY2xlPnNwYW4ge1xuICBmb250LWZhbWlseTogUG9wcGlucztcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyN3B4O1xufVxuXG4ubWwtOCB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG5cbi5jYXJkIHtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gIHdpZHRoOiA5NSU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDE1cHggYXV0bztcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNDIsIDE1NywgMTQ3LCAwLjQ1KTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNoYWRvdzogMHB4IDRweCAyMHB4IHJnYmEoMTMwLCAxMzAsIDEzMCwgMC4yNSk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGhlaWdodDogMjAwcHg7XG5cbiAgLmNhcmQtYm9keSB7XG4gICAgaGVpZ2h0OiAxMzVweDtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBvdmVyZmxvdy15OiB2aXNpYmxlO1xuXG4gICAgLmJvZHktaGVhZGVyIHtcbiAgICAgIG1hcmdpbjogMnB4O1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxM3B4O1xuICAgIH1cbiAgfVxuXG4gIC5jYXJkLWhlYWRlciB7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2YyOWQ5MztcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAzZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIC5tb3ZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjI5ZDkzO1xuICB9XG5cbiAgLnJld2FyZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZDA0OTtcbiAgfVxuXG4gIC5naXZlcmV3YXJkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWRjYWVjO1xuICB9XG59XG5cbi5tdC0yIHtcbiAgbWFyZ2luLXRvcDogMnB4O1xufVxuXG4ubWwtMiB7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG59XG5cbi5tdC0xMCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5tbC0xMCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4ubWwtOCB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG5cbi5idG4tZW5kIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmN1cy1idG4ge1xuICBiYWNrZ3JvdW5kOiAjOTljNDNjO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiAyOHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAzZW07XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnBsYXktY3VzLWJ0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIG1hcmdpbjogYXV0bztcbiAgYm90dG9tOiAxNXB4O1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cbi5wbGF5LWN1cy1idG4uaW9ze1xuICBib3R0b206MTVweFxufVxuXG4ucGxheS1jdXMtYnRuIHtcbiAgLy8gbWFyZ2luLXRvcDogLTM1cHg7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDg1LjgxZGVnLCAjOTljNDNjIDEzLjg5JSwgI2M1ZTY3ZSA5NS45NCUpO1xuICAvLyBib3JkZXI6IDNweCBzb2xpZCAjYjdkZDY1O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtLWJvcmRlci1yYWRpdXM6IDkwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDkwcHg7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiA1M3B4O1xuICBmb250LWZhbWlseTogUG9wcGlucztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAzMHB4IC0xMHB4IGJsYWNrO1xufVxuXG4uY29udGludWUtY3VzLWJ0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IGF1dG87XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuLmNvbnRpbnVlLWN1cy1idG4uaW9ze1xuICBib3R0b206MTVweFxufVxuXG4uY29udGludWUtY3VzLWJ0biB7XG4gIC8vIG1hcmdpbi10b3A6IC0zNXB4O1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg4NS44MWRlZywgIzNjYWJjNCAxMy44OSUsICM3ZWE4ZTYgOTUuOTQlKTtcbiAgLy8gYm9yZGVyOiAzcHggc29saWQgI2I3ZGQ2NTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLS1ib3JkZXItcmFkaXVzOiA5MHB4O1xuICBib3JkZXItcmFkaXVzOiA5MHB4O1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogNTNweDtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMzBweCAtMTBweCBibGFjaztcbn1cblxuLmxvYWRlciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZyxcbiAgICAgICM4YTk0YzggNDEuOTQlLFxuICAgICAgcmdiYSgyNDAsIDE5OSwgMTQyLCAwLjcyKSAxMDAlKTtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIGhlaWdodDogMjBweDtcbn1cblxuLmx2bC1jYXJkLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA5NSU7XG4gIG1hcmdpbjogYXV0bztcblxuICAubHZsLWxvYWRlciB7XG4gICAgZmxleDogMTtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDdweCByZ2IoNjUgNjUgNjUgLyAyNSUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgbWFyZ2luOiAwIDEwcHg7XG4gIH1cbn1cblxuLnVzZXItY29udGFpbmVyIHtcblxuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogOTUlO1xuICBtYXJnaW46IGF1dG87XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogNXB4O1xuXG4gIC5pbWctY29udGFpbmVyLFxuICAuYm94IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAuaW1nLWNvbnRhaW5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG59XG5cbi5ibHVlLWJnIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZyxcbiAgICAgICM2OTc2YjkgMCUsXG4gICAgICByZ2JhKDEwNSwgMTE4LCAxODUsIDAuNzYpIDEwMCUpO1xuICBib3gtc2hhZG93OiAwcHggNXB4IDEwcHggcmdiYSg3MywgNzMsIDczLCAwLjI1KTtcbiAgaGVpZ2h0OiAxMDdweDtcbn1cblxuLm5vLXJlY29yZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTsgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgZm9udC1zaXplOiAyMHB4OyBjb2xvcjogI2NjYzsgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLy8gLmxvYWRlcjEge1xuLy8gICBib3JkZXI6IDVweCBzb2xpZCAjZjgwOTA5O1xuLy8gICBib3JkZXItcmFkaXVzOiA1MCU7XG4vLyAgIGJvcmRlci10b3A6IDVweCBzb2xpZCAjOWFmODAzO1xuLy8gICB3aWR0aDogMzBweDtcbi8vICAgaGVpZ2h0OiAzMHB4O1xuLy8gICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XG4vLyAgIC8qIFNhZmFyaSAqL1xuLy8gICBhbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xuLy8gfVxuXG4vLyAvKiBTYWZhcmkgKi9cbi8vIEAtd2Via2l0LWtleWZyYW1lcyBzcGluIHtcbi8vICAgMCUge1xuLy8gICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4vLyAgIH1cblxuLy8gICAxMDAlIHtcbi8vICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4vLyAgIH1cbi8vIH1cblxuLy8gQGtleWZyYW1lcyBzcGluIHtcbi8vICAgMCUge1xuLy8gICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuLy8gICB9XG5cbi8vICAgMTAwJSB7XG4vLyAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbi8vICAgfVxuLy8gfVxuIl19 */");

/***/ }),

/***/ 41324:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/main/game/game.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n    <ion-grid class=\"header-nav\">\n        <ion-row class=\" blue-bg\">\n            <div class=\"user-container\">\n                <div class=\"img-container\">\n                    <img src=\"assets/dummy-user.jpg\" alt=\"\" width=\"55\" style=\"border-radius: 50%;  vertical-align: middle;\" />\n                    <span class=\"pl-10 username-css\">{{this.user.user_name}}</span>\n                </div>\n                <div class=\"box\">\n                    <img style=\"z-index: 1\" src=\"assets/currency-logo.svg\" alt=\"\" />\n                    <div class=\"currency-bg\">\n                        <div class=\"content-center font-700 f-12\">\n                            <span>{{this.user.puzzle_pieces ? this.user.puzzle_pieces : 0 }}</span>\n                        </div>\n                    </div>\n                    <div class=\"plus-bg ml--10\" [routerLink]=\"['/main/store']\">\n                        <img width=\"15\" src=\"assets/plus.svg\" alt=\"\" />\n                    </div>\n                </div>\n            </div>\n        </ion-row>\n\n        <ion-row class=\"mt-10\">\n            <div class=\"lvl-card-container\">\n                <div class=\"lvl-circle\">\n                    <span>lvl {{user.level_id}}</span>\n                </div>\n\n                <!-- align-self: center; width: {{progressPercent}}%; -->\n                <div class=\"lvl-loader\">\n                    <div class=\"loader\" style=\"align-self: center; width: {{progressPercent}}%;\"></div>\n                </div>\n\n                <div style=\"margin-left: auto\" class=\"lvl-circle-y\">\n                    <span>lvl {{user.level_id+1}}</span>\n                </div>\n            </div>\n        </ion-row>\n\n        <ion-row>\n            <ion-col>\n                <ion-button *ngIf=\"lastGameCheck\" class=\"continue-cus-btn\" (click)=\"onLastGameEvent()\">\n                   Continue Game\n               </ion-button>\n           </ion-col>\n            <ion-col size=\"12\">\n                <div class=\"card\">\n                    <div class=\"card-header move\">Your Move</div>\n                    <div class=\"card-body\">\n                        <div *ngIf=\"gameList === null || gameList.length === 0\" class=\"no-record\">\n                            NO GAME FOUND\n                        </div>\n                        <ng-container *ngFor=\"let user of gameList\">\n                            <div class=\"top-box mt-10\" *ngFor=\"let game of user.games\">\n                                <div class=\"loader\" *ngIf=\"!game.id\"></div>\n                                <img *ngIf=\"game.id\" class=\"ml-10\" src=\"assets/dummy-user.jpg\" alt=\"\" width=\"55\" style=\"border-radius: 50%\" />\n                                <span *ngIf=\"game.id\" class=\"ml-2\">{{user.user_name}}</span>\n\n                                <div *ngIf=\"game.id\" class=\"btn-end\">\n                                    <ion-button (click)=\"onPlayGame(game)\" class=\"cus-btn\">Play</ion-button>\n                                </div>\n                            </div>\n                            \n                        </ng-container>\n                        \n                    </div>\n                </div>\n            </ion-col>\n            \n        </ion-row>\n\n        <ion-row>\n            <ion-col size=\"12\">\n                <div class=\"card\">\n                    <div class=\"card-header reward\">Rewards</div>\n                    <div class=\"card-body\">\n                        <div class=\"body-header\">\n                            <button *ngIf=\"claimList[0]?.claim_reward?.length\" (click)=\"claimAllReward()\" class=\"cus-btn\">Claim All</button>\n                        </div>\n                        <div *ngIf=\"claimList === null || claimList.length === 0\" class=\"no-record\">\n                            NO REWARDS AVAILABLE\n                        </div>\n                        <ng-container *ngFor=\"let claim of claimList; index as i\">\n                            <ng-container *ngFor=\"let claim_reward of claim.claim_reward\">\n\n                                <div class=\"top-box mt-10\">\n                                    <img class=\"ml-10\" src=\"assets/dummy-user.jpg\" alt=\"\" width=\"55\" style=\"border-radius: 50%\" />\n                                    <span class=\"ml-2\" *ngIf=\"(claim.user_id == user.id) && (claim_reward.reward_id== 3)\">{{claim.player.user_name}}\n                                        cracked your code</span>\n\n                                    <span class=\"ml-2\" *ngIf=\"(claim.player_id == user.id) && (claim_reward.reward_id == 2)\">You cracked\n                                        {{claim.user.user_name}} Code</span>\n\n                                    <span class=\"ml-2\" *ngIf=\"(claim.user_id == user.id) &&  (claim_reward.reward_id== 2)\">You cracked\n                                        {{claim.player.user_name}}</span>\n\n                                    <span class=\"ml-2\" *ngIf=\"(claim.player_id == user.id) && (claim_reward.reward_id == 3)\">{{claim.user.user_name}}\n                                        Cracked your code\n                                    </span>\n                                    <div class=\"btn-end\">\n                                        <ion-button (click)=\"onRewardUpdate(claim_reward, i)\" class=\"cus-btn\">Claim\n                                        </ion-button>\n                                    </div>\n                                </div>\n                            </ng-container>\n                        </ng-container>\n                    </div>\n\n                </div>\n            </ion-col>\n        </ion-row>\n\n        <ion-row>\n            <ion-col size=\"12\">\n                <div class=\"card\">\n                    <div class=\"card-header givereward\">Give Rewards</div>\n                    <div class=\"card-body\">\n                        <div class=\"body-header\">\n                            <button *ngIf=\"claimList[0]?.give_reward?.length\" (click)=\"giveRewardToAll()\" class=\"cus-btn\">Give All</button>\n                        </div>\n                        <div *ngIf=\"claimList === null || claimList.length === 0\" class=\"no-record\">\n                            NO REWARDS AVAILABLE\n                        </div>\n                        <ng-container *ngFor=\"let claim of claimList; index as i\">\n                            <ng-container *ngFor=\"let give_reward of claim.give_reward\">\n\n                                <div class=\"top-box mt-10\">\n                                    <img class=\"ml-10\" src=\"assets/dummy-user.jpg\" alt=\"\" width=\"55\" style=\"border-radius: 50%\" />\n\n                                    <span class=\"ml-2\" *ngIf=\"(claim.player_id == user.id) && (give_reward.reward_id== 4 )\">Give Reward to\n                                        {{claim.user.user_name}}</span>\n\n\n                                    <span class=\"ml-2\" *ngIf=\"(claim.user_id == user.id) && (give_reward.reward_id== 4 )\">Give Reward to {{claim.player.user_name}}</span>\n                                    <div class=\"btn-end\">\n                                        <ion-button (click)=\"onRewardUpdate(give_reward, i)\" class=\"cus-btn\">Claim</ion-button>\n                                    </div>\n                                </div>\n                            </ng-container>\n                        </ng-container>\n                    </div>\n                </div>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <div style=\"width: 100%; height: 100px;\"></div>\n        </ion-row>\n    </ion-grid>\n    <ion-button class=\"play-cus-btn\" (click)=\"onNewGameEvent()\">\n        New Game\n    </ion-button>\n    <!-- <ion-button *ngIf=\"lastGameCheck\" class=\"play-cus-btn\" (click)=\"onLastGameEvent()\">\n        Continue Game\n    </ion-button> -->\n    <!-- <ion-fab class=\"play-cus-btn\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n        <ion-fab-button (click)=\"onNewGameEvent()\">New Game\n        </ion-fab-button>\n    </ion-fab> -->\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_main_main_game_game_module_ts.js.map