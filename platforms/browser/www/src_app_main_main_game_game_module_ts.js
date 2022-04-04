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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_game_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./game.page.html */ 41324);
/* harmony import */ var _game_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game.page.scss */ 73965);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_service_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/rest.service */ 90421);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ 88259);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/push-notifications */ 98748);
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ 19342);










let GamePage = class GamePage {
    constructor(restService, router, navCtrl, activatedRoute, googlePlus) {
        this.restService = restService;
        this.router = router;
        this.navCtrl = navCtrl;
        this.activatedRoute = activatedRoute;
        this.googlePlus = googlePlus;
        this.progressPercent = 0;
        this.gameList = null;
        this.claimList = [];
        this.levelList = [];
        this.showMoveList = false;
        this.showRewardList = false;
        this.showGiveRewardList = false;
        this.showClaimBtn = false;
        this.showGiveRewardClaimBtn = false;
        _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_4__.PushNotifications.requestPermissions().then(result => {
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
                this.restService.getRequest('games/get-game').subscribe((res) => {
                    if (res.user) {
                        this.gameList = res.user;
                        console.log('this.gameList', this.gameList);
                        this.showMoveList = true;
                        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
                            title: 'Sucess',
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
        console.log('User', this.user);
    }
    ionViewWillEnter() {
        this.getCalimList();
    }
    onPlayGame(game) {
        this.router.navigate(['play-game', { game: JSON.stringify(game) }], { replaceUrl: true });
    }
    onRewardUpdate(user, i) {
        this.claimList[i].claim_reward.splice(this.claimList[i].claim_reward.indexOf(user), 1);
        const rewardObj = {
            game_id: user.game_id,
            reward_id: user.reward_id,
            player_id: user.friend_id,
        };
        console.log('calim list', this.claimList);
        this.restService.postRequestToken('claim/claim-reward', rewardObj).subscribe(res => {
            if (res) {
                this.getCalimList();
                this.restService.getRequest('users/detail').subscribe((res) => {
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
        this.restService.getRequest('users/get-level-list').subscribe((res) => {
            let baseLvl = null;
            let upLvl = null;
            this.levelList = res.message;
            this.user = localStorage.getItem('user');
            this.user = JSON.parse(this.user);
            baseLvl = this.levelList.filter(lvl => lvl.id == this.user.level_id);
            upLvl = this.levelList.filter(lvl => lvl.id == this.user.level_id + 1);
            // console.log('--', baseLvl[0]);
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
        this.restService.getRequest('claim/claim-list').subscribe((res) => {
            if (res.claim) {
                this.claimList = res.claim;
                console.log('Claim list', this.claimList);
                this.showRewardList = true;
            }
        });
    }
    claimAllReward() {
        let allClaimRewardList = [];
        this.claimList.forEach((claim) => {
            claim.claim_reward.forEach(el => {
                if (el.reward_id != 4) {
                    allClaimRewardList.push(el);
                }
            });
        });
        // console.log('allClaimRewardList', allClaimRewardList);
        this.restService.postRequestToken('claim/claim-reward-for-all', { list: allClaimRewardList }).subscribe(res => {
            if (res) {
                this.getCalimList();
                this.restService.getRequest('users/detail').subscribe((res) => {
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
            claim.give_reward.forEach(el => {
                if (el.reward_id == 4) {
                    allClaimRewardList.push(el);
                }
            });
        });
        console.log('---->', allClaimRewardList);
        this.restService.postRequestToken('claim/give-reward-to-all', { list: allClaimRewardList }).subscribe(res => {
            if (res) {
                this.getCalimList();
                this.restService.getRequest('users/detail').subscribe((res) => {
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
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_5__.GooglePlus }
];
GamePage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("p {\n  font-family: Poppins;\n}\n\nion-grid {\n  padding: 0px !important;\n  overflow-y: auto;\n  margin: 0px;\n}\n\n.top {\n  width: 100vw;\n  height: 107px;\n  background: linear-gradient(180deg, #6976b9 0%, rgba(105, 118, 185, 0.76) 100%);\n  box-shadow: 0px 5px 10px rgba(73, 73, 73, 0.25);\n}\n\n.top-box {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n\n.currency-bg {\n  width: 89px;\n  height: 26px;\n  background: #ffffff;\n  box-shadow: inset 0px 0px 6px #a7a7a7;\n  z-index: 0;\n  margin-left: -15px;\n}\n\n.box {\n  display: flex;\n  align-items: center;\n}\n\n.pl-10 {\n  padding-left: 10px;\n}\n\n.username-css {\n  letter-spacing: 0.03em;\n  color: #ffffff;\n  font-weight: 600;\n  font-size: 15px;\n  line-height: 22px;\n  font-family: Poppins;\n}\n\n.home-currency {\n  display: flex;\n  align-content: center;\n}\n\n.content-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100%;\n}\n\nspan {\n  font-family: Poppins;\n}\n\n.font-700 {\n  font-weight: 700;\n}\n\n.f-12 {\n  font-size: 12px;\n}\n\n.plus-bg {\n  width: 30px;\n  height: 30px;\n  background: #99c43c;\n  z-index: 1;\n  display: flex;\n  justify-content: center;\n}\n\n.ml--10 {\n  margin-left: -10px;\n}\n\n.mt-15 {\n  margin-top: 15px;\n}\n\n.lvl-circle {\n  background: #373b63;\n  width: 70px;\n  height: 70px;\n  border-radius: 50px;\n  border: 5px solid #c8cbe7;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.lvl-circle-y {\n  background: #f7d049;\n  width: 70px;\n  height: 70px;\n  border-radius: 50px;\n  border: 5px solid #feefb9;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.lvl-circle-y > span {\n  font-family: Poppins;\n  color: #ffffff;\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 27px;\n}\n\n.lvl-circle > span {\n  font-family: Poppins;\n  color: #ffffff;\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 27px;\n}\n\n.ml-8 {\n  margin-left: 8px;\n}\n\n.card {\n  font-family: Poppins;\n  width: 95%;\n  display: block;\n  margin: 15px auto;\n  border: 1px solid rgba(242, 157, 147, 0.45);\n  box-sizing: border-box;\n  box-shadow: 0px 4px 20px rgba(130, 130, 130, 0.25);\n  border-radius: 20px;\n  height: 172px;\n}\n\n.card .card-body {\n  height: 135px;\n  overflow: auto;\n  overflow-y: visible;\n}\n\n.card .card-body .body-header {\n  margin: 2px;\n  float: right;\n  margin-right: 13px;\n}\n\n.card .card-header {\n  height: 35px;\n  padding-left: 15px;\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n  color: white;\n  letter-spacing: 0.03em;\n  font-weight: bold;\n  font-size: 16px;\n  display: flex;\n  align-items: center;\n}\n\n.card .move {\n  background-color: #f29d93;\n}\n\n.card .reward {\n  background-color: #f7d049;\n}\n\n.card .givereward {\n  background-color: #9dcaec;\n}\n\n.mt-2 {\n  margin-top: 2px;\n}\n\n.ml-2 {\n  margin-left: 2px;\n}\n\n.mt-10 {\n  margin-top: 10px;\n}\n\n.ml-10 {\n  margin-left: 10px;\n}\n\n.ml-8 {\n  margin-left: 8px;\n}\n\n.btn-end {\n  display: flex;\n  width: 100%;\n  justify-content: end;\n  margin-right: 10px;\n}\n\n.cus-btn {\n  --background: #99c43c;\n  border-radius: 30px;\n  width: 87px;\n  height: 28px;\n  font-size: 14px;\n  letter-spacing: 0.03em;\n}\n\n.play-cus-btn {\n  display: flex;\n  justify-content: center;\n}\n\n.play-cus-btn > ion-button {\n  margin-top: -35px;\n  --background: linear-gradient(85.81deg, #99c43c 13.89%, #c5e67e 95.94%);\n  box-sizing: border-box;\n  --border-radius: 90px;\n  width: 218px;\n  height: 53px;\n  font-family: Poppins;\n  font-weight: bold;\n  font-size: 16px;\n}\n\n.loader {\n  background: linear-gradient(90deg, #8a94c8 41.94%, rgba(240, 199, 142, 0.72) 100%);\n  border-radius: 100px;\n  height: 20px;\n}\n\n.lvl-card-container {\n  display: flex;\n  width: 95%;\n  margin: auto;\n}\n\n.lvl-card-container .lvl-loader {\n  flex: 1;\n  align-self: center;\n  background: #FFFFFF;\n  box-shadow: inset 0px 0px 7px rgba(65, 65, 65, 0.25);\n  border-radius: 10px;\n}\n\n.user-container {\n  display: flex;\n  width: 95%;\n  margin: auto;\n  justify-content: space-around;\n  padding: 5px;\n}\n\n.user-container .img-container,\n.user-container .box {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.user-container .img-container {\n  flex-direction: column;\n}\n\n.blue-bg {\n  background: linear-gradient(180deg, #6976b9 0%, rgba(105, 118, 185, 0.76) 100%);\n  box-shadow: 0px 5px 10px rgba(73, 73, 73, 0.25);\n  min-height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,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QUE7RUFHQSxvQkFBQTtFQUNBLFlBQUE7QUFYRjs7QUFjQTtFQUNFLGFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQVhGOztBQWFFO0VBQ0UsT0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvREFBQTtFQUNBLG1CQUFBO0FBWEo7O0FBZUE7RUFFRSxhQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7QUFiRjs7QUFlRTs7RUFFRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQWJKOztBQWdCRTtFQUNFLHNCQUFBO0FBZEo7O0FBbUJBO0VBQ0UsK0VBQUE7RUFHQSwrQ0FBQTtFQUNBLGlCQUFBO0FBbEJGIiwiZmlsZSI6ImdhbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XHJcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbn1cclxuXHJcbmlvbi1ncmlkIHtcclxuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIG1hcmdpbjogMHB4XHJcbn1cclxuXHJcbi50b3Age1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwN3B4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsXHJcbiAgICAgICM2OTc2YjkgMCUsXHJcbiAgICAgIHJnYmEoMTA1LCAxMTgsIDE4NSwgMC43NikgMTAwJSk7XHJcbiAgYm94LXNoYWRvdzogMHB4IDVweCAxMHB4IHJnYmEoNzMsIDczLCA3MywgMC4yNSk7XHJcbn1cclxuXHJcbi50b3AtYm94IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jdXJyZW5jeS1iZyB7XHJcbiAgd2lkdGg6IDg5cHg7XHJcbiAgaGVpZ2h0OiAyNnB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCA2cHggI2E3YTdhNztcclxuICB6LWluZGV4OiAwO1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTVweDtcclxufVxyXG5cclxuLmJveCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ucGwtMTAge1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxufVxyXG5cclxuLnVzZXJuYW1lLWNzcyB7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDNlbTtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBsaW5lLWhlaWdodDogMjJweDtcclxuICBmb250LWZhbWlseTogUG9wcGlucztcclxufVxyXG5cclxuLmhvbWUtY3VycmVuY3kge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uY29udGVudC1jZW50ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5zcGFuIHtcclxuICBmb250LWZhbWlseTogUG9wcGlucztcclxufVxyXG5cclxuLmZvbnQtNzAwIHtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4uZi0xMiB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4ucGx1cy1iZyB7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGJhY2tncm91bmQ6ICM5OWM0M2M7XHJcbiAgei1pbmRleDogMTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ubWwtLTEwIHtcclxuICBtYXJnaW4tbGVmdDogLTEwcHg7XHJcbn1cclxuXHJcbi5tdC0xNSB7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG5cclxuLmx2bC1jaXJjbGUge1xyXG4gIGJhY2tncm91bmQ6ICMzNzNiNjM7XHJcbiAgd2lkdGg6IDcwcHg7XHJcbiAgaGVpZ2h0OiA3MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgYm9yZGVyOiA1cHggc29saWQgI2M4Y2JlNztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sdmwtY2lyY2xlLXkge1xyXG4gIGJhY2tncm91bmQ6ICNmN2QwNDk7XHJcbiAgd2lkdGg6IDcwcHg7XHJcbiAgaGVpZ2h0OiA3MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgYm9yZGVyOiA1cHggc29saWQgI2ZlZWZiOTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sdmwtY2lyY2xlLXk+c3BhbiB7XHJcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyN3B4O1xyXG59XHJcblxyXG4ubHZsLWNpcmNsZT5zcGFuIHtcclxuICBmb250LWZhbWlseTogUG9wcGlucztcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI3cHg7XHJcbn1cclxuXHJcbi5tbC04IHtcclxuICBtYXJnaW4tbGVmdDogOHB4O1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgd2lkdGg6IDk1JTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IDE1cHggYXV0bztcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI0MiwgMTU3LCAxNDcsIDAuNDUpO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm94LXNoYWRvdzogMHB4IDRweCAyMHB4IHJnYmEoMTMwLCAxMzAsIDEzMCwgMC4yNSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBoZWlnaHQ6IDE3MnB4O1xyXG5cclxuICAuY2FyZC1ib2R5IHtcclxuICAgIGhlaWdodDogMTM1cHg7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIG92ZXJmbG93LXk6IHZpc2libGU7XHJcblxyXG4gICAgLmJvZHktaGVhZGVyIHtcclxuICAgICAgbWFyZ2luOiAycHg7XHJcbiAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxM3B4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNhcmQtaGVhZGVyIHtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNmMjlkOTM7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wM2VtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5tb3ZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMjlkOTM7XHJcbiAgfVxyXG5cclxuICAucmV3YXJkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2QwNDk7XHJcbiAgfVxyXG5cclxuICAuZ2l2ZXJld2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWRjYWVjO1xyXG4gIH1cclxufVxyXG5cclxuLm10LTIge1xyXG4gIG1hcmdpbi10b3A6IDJweDtcclxufVxyXG5cclxuLm1sLTIge1xyXG4gIG1hcmdpbi1sZWZ0OiAycHg7XHJcbn1cclxuXHJcbi5tdC0xMCB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLm1sLTEwIHtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuLm1sLTgge1xyXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbn1cclxuXHJcbi5idG4tZW5kIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLmN1cy1idG4ge1xyXG4gIC0tYmFja2dyb3VuZDogIzk5YzQzYztcclxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gIHdpZHRoOiA4N3B4O1xyXG4gIGhlaWdodDogMjhweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDNlbTtcclxufVxyXG5cclxuLnBsYXktY3VzLWJ0biB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnBsYXktY3VzLWJ0bj5pb24tYnV0dG9uIHtcclxuICBtYXJnaW4tdG9wOiAtMzVweDtcclxuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg4NS44MWRlZywgIzk5YzQzYyAxMy44OSUsICNjNWU2N2UgOTUuOTQlKTtcclxuICAvLyBib3JkZXI6IDNweCBzb2xpZCAjYjdkZDY1O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiA5MHB4O1xyXG4gIHdpZHRoOiAyMThweDtcclxuICBoZWlnaHQ6IDUzcHg7XHJcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4ubG9hZGVyIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsXHJcbiAgICAgICM4YTk0YzggNDEuOTQlLFxyXG4gICAgICByZ2JhKDI0MCwgMTk5LCAxNDIsIDAuNzIpIDEwMCUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxufVxyXG5cclxuLmx2bC1jYXJkLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogOTUlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuXHJcbiAgLmx2bC1sb2FkZXIge1xyXG4gICAgZmxleDogMTtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDdweCByZ2IoNjUgNjUgNjUgLyAyNSUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB9XHJcbn1cclxuXHJcbi51c2VyLWNvbnRhaW5lciB7XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDk1JTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgcGFkZGluZzogNXB4O1xyXG5cclxuICAuaW1nLWNvbnRhaW5lcixcclxuICAuYm94IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuaW1nLWNvbnRhaW5lciB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi5ibHVlLWJnIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLFxyXG4gICAgICAjNjk3NmI5IDAlLFxyXG4gICAgICByZ2JhKDEwNSwgMTE4LCAxODUsIDAuNzYpIDEwMCUpO1xyXG4gIGJveC1zaGFkb3c6IDBweCA1cHggMTBweCByZ2JhKDczLCA3MywgNzMsIDAuMjUpO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG59XHJcblxyXG4vLyAubG9hZGVyMSB7XHJcbi8vICAgYm9yZGVyOiA1cHggc29saWQgI2Y4MDkwOTtcclxuLy8gICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbi8vICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkICM5YWY4MDM7XHJcbi8vICAgd2lkdGg6IDMwcHg7XHJcbi8vICAgaGVpZ2h0OiAzMHB4O1xyXG4vLyAgIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcclxuLy8gICAvKiBTYWZhcmkgKi9cclxuLy8gICBhbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xyXG4vLyB9XHJcblxyXG4vLyAvKiBTYWZhcmkgKi9cclxuLy8gQC13ZWJraXQta2V5ZnJhbWVzIHNwaW4ge1xyXG4vLyAgIDAlIHtcclxuLy8gICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbi8vICAgfVxyXG5cclxuLy8gICAxMDAlIHtcclxuLy8gICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuLy8gICB9XHJcbi8vIH1cclxuXHJcbi8vIEBrZXlmcmFtZXMgc3BpbiB7XHJcbi8vICAgMCUge1xyXG4vLyAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbi8vICAgfVxyXG5cclxuLy8gICAxMDAlIHtcclxuLy8gICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbi8vICAgfVxyXG4vLyB9XHJcbiJdfQ== */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <ion-grid>\r\n\r\n\r\n    <ion-row class=\" blue-bg\">\r\n      <div class=\"user-container\">\r\n        <div class=\"img-container\">\r\n          <img src=\"assets/dummy-user.jpg\" alt=\"\" width=\"55\" style=\"border-radius: 50%;  vertical-align: middle;\" />\r\n          <span class=\"pl-10 username-css\">{{this.user.user_name}}</span>\r\n        </div>\r\n        <div class=\"box\">\r\n          <img style=\"z-index: 1\" src=\"assets/currency-logo.svg\" alt=\"\" />\r\n          <div class=\"currency-bg\">\r\n            <div class=\"content-center font-700 f-12\">\r\n              <span>{{this.user.puzzle_pieces ? this.user.puzzle_pieces : 0 }}</span>\r\n            </div>\r\n          </div>\r\n          <div class=\"plus-bg ml--10\" [routerLink]=\"['/main/store']\">\r\n            <img width=\"15\" src=\"assets/plus.svg\" alt=\"\" />\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"mt-10\">\r\n      <div class=\"lvl-card-container\">\r\n        <div class=\"lvl-circle\">\r\n          <span>lvl{{user.level_id}}</span>\r\n        </div>\r\n\r\n        <!-- align-self: center; width: {{progressPercent}}%; -->\r\n        <div class=\"lvl-loader\">\r\n          <div class=\"loader\" style=\"align-self: center; width: {{progressPercent}}%;\"></div>\r\n        </div>\r\n\r\n        <div style=\"margin-left: auto\" class=\"lvl-circle-y\">\r\n          <span>lvl{{user.level_id+1}}</span>\r\n        </div>\r\n      </div>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header move\">Your Move</div>\r\n          <div class=\"card-body\">\r\n            <ng-container *ngFor=\"let user of gameList\">\r\n              <div class=\"top-box mt-10\" *ngFor=\"let game of user.games\">\r\n                <div class=\"loader\" *ngIf=\"!game.id\"></div>\r\n                <img *ngIf=\"game.id\" class=\"ml-10\" src=\"assets/dummy-user.jpg\" alt=\"\" width=\"55\"\r\n                  style=\"border-radius: 50%\" />\r\n                <span *ngIf=\"game.id\" class=\"ml-2\">{{user.user_name}}</span>\r\n\r\n                <div *ngIf=\"game.id\" class=\"btn-end\">\r\n                  <ion-button (click)=\"onPlayGame(game)\" class=\"cus-btn\">Play</ion-button>\r\n                </div>\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header reward\">Reward</div>\r\n          <div class=\"card-body\">\r\n            <div class=\"body-header\">\r\n              <button *ngIf=\"claimList[0]?.claim_reward?.length\" (click)=\"claimAllReward()\" class=\"cus-btn\">Calim\r\n                All</button>\r\n            </div>\r\n            <ng-container *ngFor=\"let claim of claimList; index as i\">\r\n              <ng-container *ngFor=\"let claim_reward of claim.claim_reward\">\r\n\r\n                <div class=\"top-box mt-10\">\r\n                  <img class=\"ml-10\" src=\"assets/dummy-user.jpg\" alt=\"\" width=\"55\" style=\"border-radius: 50%\" />\r\n                  <span class=\"ml-2\"\r\n                    *ngIf=\"(claim.user_id == user.id) && (claim_reward.reward_id== 3)\">{{claim.player.user_name}}\r\n                    cracked your code</span>\r\n\r\n                  <span class=\"ml-2\" *ngIf=\"(claim.player_id == user.id) && (claim_reward.reward_id == 2)\">You cracked\r\n                    {{claim.user.user_name}} Code</span>\r\n\r\n                  <span class=\"ml-2\" *ngIf=\"(claim.user_id == user.id) &&  (claim_reward.reward_id== 2)\">You cracked\r\n                    {{claim.player.user_name}}</span>\r\n\r\n                  <span class=\"ml-2\"\r\n                    *ngIf=\"(claim.player_id == user.id) && (claim_reward.reward_id == 3)\">{{claim.user.user_name}}\r\n                    Cracked your code\r\n                  </span>\r\n                  <div class=\"btn-end\">\r\n                    <ion-button (click)=\"onRewardUpdate(claim_reward, i)\" class=\"cus-btn\">Claim\r\n                    </ion-button>\r\n                  </div>\r\n                </div>\r\n              </ng-container>\r\n            </ng-container>\r\n          </div>\r\n\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header givereward\">Give Reward</div>\r\n          <div class=\"card-body\">\r\n            <div class=\"body-header\">\r\n              <button *ngIf=\"claimList[0]?.give_reward?.length\" (click)=\"giveRewardToAll()\" class=\"cus-btn\">Calim\r\n                All</button>\r\n            </div>\r\n            <ng-container *ngFor=\"let claim of claimList; index as i\">\r\n              <ng-container *ngFor=\"let give_reward of claim.give_reward\">\r\n\r\n                <div class=\"top-box mt-10\">\r\n                  <img class=\"ml-10\" src=\"assets/dummy-user.jpg\" alt=\"\" width=\"55\" style=\"border-radius: 50%\" />\r\n\r\n                  <span class=\"ml-2\" *ngIf=\"(claim.player_id == user.id) && (give_reward.reward_id== 4 )\">Give Reward to\r\n                    {{claim.user.user_name}}</span>\r\n\r\n\r\n                  <span class=\"ml-2\" *ngIf=\"(claim.user_id == user.id) && (give_reward.reward_id== 4 )\">Give Reward to\r\n                    {{claim.player.user_name}}</span>\r\n\r\n\r\n\r\n                  <div class=\"btn-end\">\r\n                    <ion-button (click)=\"onRewardUpdate(give_reward, i)\" class=\"cus-btn\">Claim</ion-button>\r\n                  </div>\r\n                </div>\r\n              </ng-container>\r\n            </ng-container>\r\n          </div>\r\n        </div>\r\n        <!-- <div class=\"loader1\"></div> -->\r\n        <div class=\"play-cus-btn\">\r\n          <ion-button (click)=\"onNewGameEvent()\">New Game\r\n          </ion-button>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_main_main_game_game_module_ts.js.map