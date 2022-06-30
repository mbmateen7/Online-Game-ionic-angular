(self["webpackChunkpic_playce"] = self["webpackChunkpic_playce"] || []).push([["src_app_main_send-game_send-game_module_ts"],{

/***/ 93298:
/*!************************************************************!*\
  !*** ./src/app/main/send-game/send-game-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SendGamePageRoutingModule": () => (/* binding */ SendGamePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _send_game_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./send-game.page */ 7765);




const routes = [
    {
        path: '',
        component: _send_game_page__WEBPACK_IMPORTED_MODULE_0__.SendGamePage
    }
];
let SendGamePageRoutingModule = class SendGamePageRoutingModule {
};
SendGamePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SendGamePageRoutingModule);



/***/ }),

/***/ 39278:
/*!****************************************************!*\
  !*** ./src/app/main/send-game/send-game.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SendGamePageModule": () => (/* binding */ SendGamePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _send_game_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./send-game-routing.module */ 93298);
/* harmony import */ var _send_game_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./send-game.page */ 7765);







let SendGamePageModule = class SendGamePageModule {
};
SendGamePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _send_game_routing_module__WEBPACK_IMPORTED_MODULE_0__.SendGamePageRoutingModule
        ],
        declarations: [_send_game_page__WEBPACK_IMPORTED_MODULE_1__.SendGamePage]
    })
], SendGamePageModule);



/***/ }),

/***/ 7765:
/*!**************************************************!*\
  !*** ./src/app/main/send-game/send-game.page.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SendGamePage": () => (/* binding */ SendGamePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_send_game_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./send-game.page.html */ 33740);
/* harmony import */ var _send_game_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./send-game.page.scss */ 77317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_service_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/rest.service */ 90421);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ 88259);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);








let SendGamePage = class SendGamePage {
    constructor(route, restService, router, navCtrl) {
        this.route = route;
        this.restService = restService;
        this.router = router;
        this.navCtrl = navCtrl;
        this.gameObj = null;
        this.hintWord = null;
    }
    ngOnInit() {
        this.puzzleImage = localStorage.getItem('puzzleImage');
        this.gameObj = JSON.parse(this.route.snapshot.paramMap.get('gameObj'));
    }
    ionViewWillEnter() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
            title: '<h5>Please enter a hint:</h5>',
            input: 'text',
            inputValidator: (value) => {
                if (!value) {
                    return 'You need to write something!';
                }
                if (value.includes(' ')) {
                    return 'Spaces are not allowed';
                }
                if (value.length > 4) {
                    return 'You write Only 4 Letters';
                }
            },
            confirmButtonText: 'SEND GAME',
            confirmButtonColor: '#99C43C',
            allowOutsideClick: true,
            // backdrop: true,
        }).then(res => {
            this.gameObj.word = res.value;
            if (res.isConfirmed) {
                this.onSendGame();
            }
        });
    }
    onSendGame() {
        this.restService.postRequestToken('games/send-game', this.gameObj).subscribe(res => {
            localStorage.setItem('puzzleImage', null);
            localStorage.setItem('base64String1', null);
            localStorage.setItem('base64String2', null);
        });
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
            title: '<div><img src="assets/icon/greencheck.png" style="width: 20vw; height:20vw;"><br><h5>Sucess!</h5></div>',
            text: 'Game has been sent',
            confirmButtonText: 'OK',
            confirmButtonColor: '#99C43C',
            allowOutsideClick: true,
            // backdrop: true,
        }).then(res => {
            this.navCtrl.setDirection('root');
            this.router.navigate(['/main/game', { gameSent: true }]);
        });
    }
    sendGameGoBtn(e) {
        this.onSendGame();
    }
};
SendGamePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: src_app_service_rest_service__WEBPACK_IMPORTED_MODULE_2__.RestService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController }
];
SendGamePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-send-game',
        template: _raw_loader_send_game_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_send_game_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SendGamePage);



/***/ }),

/***/ 77317:
/*!****************************************************!*\
  !*** ./src/app/main/send-game/send-game.page.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".top-buttons-head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 20px;\n  background: linear-gradient(180deg, #6976B9 0%, rgba(105, 118, 185, 0.76) 100%);\n}\n.top-buttons-head .in-right button {\n  background: #0f77f0;\n  border-radius: 20px;\n  font-size: 14px;\n  padding: 0px 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbmQtZ2FtZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0VBQUE7QUFDRjtBQU1JO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUpOIiwiZmlsZSI6InNlbmQtZ2FtZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wLWJ1dHRvbnMtaGVhZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjNjk3NkI5IDAlLCByZ2JhKDEwNSwgMTE4LCAxODUsIDAuNzYpIDEwMCUpO1xuXG4gIC5pbi1sZWZ0IHtcbiAgICBpbWcge31cbiAgfVxuXG4gIC5pbi1yaWdodCB7XG4gICAgYnV0dG9uIHtcbiAgICAgIGJhY2tncm91bmQ6ICMwZjc3ZjA7XG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgcGFkZGluZzogMHB4IDI1cHg7XG4gICAgfVxuICB9XG59XG4iXX0= */");

/***/ }),

/***/ 33740:
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/send-game/send-game.page.html ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/cssgram/0.1.10/cssgram.min.css\" />\n\n<ion-content class=\"mt-0\" no-bounce has-bouncing=\"false\" forceOverscroll=\"false\">\n\n  <div id=\"containertop\" style=\"width: 100%\">\n\n    <div class=\"top-buttons-head\">\n      <div class=\"in-left\" [replaceUrl]=\"true\" [routerLink]=\"['/filter']\">\n        <img src=\"assets/icon/back-icon.svg\" />\n      </div>\n      <!-- <div class=\"in-right\">\n        <ion-button class=\"cus-btn\" ion-button (click)=\"onSendGame()\">SendGame\n        </ion-button>\n      </div> -->\n    </div>\n  </div>\n  <div id=\"page-container\">\n    <img width=\"360\" height=\"360\" id=\"originalImageSG\" *ngIf=\"puzzleImage\" src=\"{{puzzleImage}}\" />\n  </div>\n  <!-- <div>\n    <div>\n      <ion-item>\n        <ion-label>Please Enter text:</ion-label>\n        <ion-input type=\"text\" (keyup.enter)='sendGameGoBtn($event)' [(ngModel)]=\"hintWord\" maxlength=\"4\" minlength=\"1\"\n          #hword=\"ngModel\"></ion-input>\n      </ion-item>\n      <ion-item *ngIf=\"hword.errors?.minlength\">\n        <ion-label class=\"alert alert-danger\">Max Length is 4</ion-label>\n      </ion-item>\n    </div>\n  </div> -->\n  <!-- <div class=\"buttons-wrapper\">\n    <div id=\"buttons\"></div>\n  </div> -->\n\n\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_main_send-game_send-game_module_ts.js.map