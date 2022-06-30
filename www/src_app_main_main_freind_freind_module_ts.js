(self["webpackChunkpic_playce"] = self["webpackChunkpic_playce"] || []).push([["src_app_main_main_freind_freind_module_ts"],{

/***/ 43380:
/*!***********************************************************!*\
  !*** ./src/app/main/main/freind/freind-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FreindPageRoutingModule": () => (/* binding */ FreindPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _freind_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./freind.page */ 21668);




const routes = [
    {
        path: '',
        component: _freind_page__WEBPACK_IMPORTED_MODULE_0__.FreindPage
    }
];
let FreindPageRoutingModule = class FreindPageRoutingModule {
};
FreindPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FreindPageRoutingModule);



/***/ }),

/***/ 67607:
/*!***************************************************!*\
  !*** ./src/app/main/main/freind/freind.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FreindPageModule": () => (/* binding */ FreindPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _freind_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./freind-routing.module */ 43380);
/* harmony import */ var _freind_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./freind.page */ 21668);







let FreindPageModule = class FreindPageModule {
};
FreindPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _freind_routing_module__WEBPACK_IMPORTED_MODULE_0__.FreindPageRoutingModule
        ],
        declarations: [_freind_page__WEBPACK_IMPORTED_MODULE_1__.FreindPage]
    })
], FreindPageModule);



/***/ }),

/***/ 21668:
/*!*************************************************!*\
  !*** ./src/app/main/main/freind/freind.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FreindPage": () => (/* binding */ FreindPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_freind_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./freind.page.html */ 68034);
/* harmony import */ var _freind_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./freind.page.scss */ 12668);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_service_photo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/photo.service */ 65263);
/* harmony import */ var src_app_service_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/rest.service */ 90421);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/camera */ 37673);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ 88259);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);










let FreindPage = class FreindPage {
    constructor(restService, photoService, alertController, loadingController, router, activatedRoute) {
        this.restService = restService;
        this.photoService = photoService;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.friendList = [];
        this.gameLevel = 4;
        this.slidesLength = 3;
        this.gameType = 'easy';
        // levelCheck = [1, 2, 3]
        this.randomList = [];
    }
    ngOnInit() {
        // console.log('Add Friend', this.activatedRoute.snapshot.paramMap.get('addFriend'));
        this.user = JSON.parse(localStorage.getItem('user'));
        if (this.activatedRoute.snapshot.paramMap.get('addFriend')) {
            this.getFriendList();
        }
        this.restService
            .getRequest('users/play-random')
            .subscribe((res) => {
            if (res.status) {
                this.randomList = res.message;
                if (this.randomList.length <= 2) {
                    this.slidesLength = this.randomList.length;
                }
            }
        });
        let user = localStorage.getItem('user');
        user = JSON.parse(user);
        this.getFriendList();
    }
    ionViewWillEnter() {
        this.getFriendList();
    }
    cameraOrGallery(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (this.gameType == '') {
                const alert = yield this.alertController.create({
                    message: 'Oops! Medium difficulty will unlock at level 5.',
                    buttons: [
                        {
                            text: 'Okay',
                            role: 'Okay',
                            cssClass: 'secondary',
                            handler: () => {
                                // this.getPicture(CameraSource.Photos, id);
                            },
                        },
                    ],
                });
                yield alert.present();
            }
            else {
                const alert = yield this.alertController.create({
                    // cssClass: 'my-custom-class',
                    // header: 'Alert',
                    // subHeader: 'Please Select',
                    message: 'Please Select.',
                    buttons: [
                        {
                            text: 'Gallery',
                            role: 'gallery',
                            cssClass: 'secondary',
                            handler: () => {
                                this.getPicture(_capacitor_camera__WEBPACK_IMPORTED_MODULE_4__.CameraSource.Photos, id);
                            },
                        },
                        {
                            text: 'Camera',
                            role: 'camera',
                            handler: () => {
                                this.getPicture(_capacitor_camera__WEBPACK_IMPORTED_MODULE_4__.CameraSource.Camera, id);
                            },
                        },
                    ],
                });
                yield alert.present();
            }
            // const { role } = await alert.onDidDismiss();
            // console.log('onDidDismiss resolved with role', role);
        });
    }
    getPicture(src, id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.presentLoading();
            const res = yield this.photoService.addNewToGallery(src);
            if (res.base64String) {
                // this.loadingController.dismiss();
                var firstHalfLength = res.base64String.length / 2;
                localStorage.setItem('base64String1', res.base64String.substr(0, firstHalfLength));
                localStorage.setItem('base64String2', res.base64String.substr(firstHalfLength));
                this.router.navigate(['filter', { userId: id, gameType: this.gameType }], { replaceUrl: true });
                // this.router.navigate(['filter', { image: res.base64String, userId: id, gameType: this.gameType }], { replaceUrl: true });
            }
        });
    }
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                duration: 2000,
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
            console.log('Loading dismissed!');
        });
    }
    doLoading() {
        let loader = this.loadingController.create({
            message: 'Loading...',
        });
        return loader;
    }
    selectDifficultyLevel(id) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
            customClass: {
                actions: 'vertical-buttons',
                cancelButton: this.gameLevel > 4 ? 'top-margin' : 'top-margin disable',
                confirmButton: 'font-size1',
            },
            title: 'Select Difficulty Level',
            confirmButtonText: 'Easy',
            confirmButtonColor: '#99C43C',
            showCancelButton: true,
            // allowOutsideClick: true,
            cancelButtonColor: this.user.level_id < 4 ? '#ccc' : '#ebb434',
            cancelButtonText: this.user.level_id < 4
                ? 'Medium (Unlock at level 5)'
                : 'Medium',
        }).then((result) => {
            if (result.dismiss == 'backdrop') {
                return;
            }
            if (result.dismiss == 'cancel') {
                if (this.user.level_id < 4) {
                    this.gameType = '';
                }
                else {
                    this.gameType = 'medium';
                }
            }
            else {
                result.value == true
                    ? (this.gameType = 'easy')
                    : (this.gameType = '');
            }
            this.cameraOrGallery(id);
        });
    }
    getFriendList() {
        let user = localStorage.getItem('user');
        user = JSON.parse(user);
        this.restService
            .getRequest('contacts/listing')
            .subscribe((res) => {
            this.friendList = res.filter((f) => {
                return f.id != user['id'];
            });
        });
    }
    deleteFriend(id) {
        const friendInstance = { friend_id: id };
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
            title: 'Remove',
            text: 'Are you sure to remove this Friend?',
            showCancelButton: true,
            showConfirmButton: true,
        }).then((res) => {
            if (res.isConfirmed) {
                this.doLoading()
                    .present()
                    .then(() => {
                    this.restService
                        .delRequest('contacts/delete', friendInstance)
                        .subscribe((res) => {
                        const friendDetail = this.friendList.filter((x) => {
                            return x.id != id;
                        });
                        this.friendList = friendDetail;
                    });
                    this.doLoading().dismiss();
                });
            }
        });
    }
};
FreindPage.ctorParameters = () => [
    { type: src_app_service_rest_service__WEBPACK_IMPORTED_MODULE_3__.RestService },
    { type: src_app_service_photo_service__WEBPACK_IMPORTED_MODULE_2__.PhotoService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute }
];
FreindPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-freind',
        template: _raw_loader_freind_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_freind_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FreindPage);



/***/ }),

/***/ 12668:
/*!***************************************************!*\
  !*** ./src/app/main/main/freind/freind.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".top {\n  width: 100vw;\n  height: 107px;\n  background: linear-gradient(180deg, #8b98dd 0%, rgba(105, 118, 185, 0.76) 100%);\n}\n\n.v-cntr {\n  display: flex;\n  align-items: center;\n  height: 100%;\n}\n\n.delete-icon {\n  margin-left: 10px;\n  margin-top: 10px;\n  color: red;\n}\n\n.ml-50 {\n  margin-left: 50px;\n}\n\n.header-text {\n  letter-spacing: 0.03em;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 20px;\n  line-height: 30px;\n  color: #ffffff;\n}\n\n.box {\n  display: flex;\n  align-items: center;\n}\n\n.top-box {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  justify-content: space-between;\n}\n\n.img-container {\n  flex-direction: column;\n}\n\n.username-css {\n  letter-spacing: 0.03em;\n  color: #ffffff;\n  font-weight: 600;\n  font-size: 15px;\n  line-height: 22px;\n  font-family: Poppins;\n}\n\n.v-cntr {\n  display: flex;\n  align-items: center;\n  height: 100%;\n  justify-content: space-around;\n}\n\n.header-text {\n  letter-spacing: 0.03em;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 20px;\n  line-height: 30px;\n  color: #ffffff;\n}\n\n.cus-btn-sm {\n  --color: black;\n  width: 101px;\n  height: 26px;\n  --background: #ffffff;\n  --box-shadow: 4px 7px 20px rgba(109, 109, 109, 0.27);\n  --border-radius: 90px;\n  letter-spacing: 0.03em;\n  font-size: 12px;\n}\n\n.ml-2 {\n  margin-left: 2px;\n}\n\n.ml-10 {\n  margin-left: 10px;\n}\n\n.card {\n  background: #ffffff;\n  box-shadow: 0px 0px 10px rgba(153, 153, 153, 0.37);\n  border-radius: 10px;\n  width: 129px;\n  height: 169px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.card .card-text {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 21px;\n  text-align: center;\n  letter-spacing: 0.03em;\n  color: #000000;\n}\n\n.card .card-btn {\n  width: 87px;\n  height: 28px;\n  --background: #99c43c;\n  --border-radius: 30px;\n}\n\n.card-container {\n  width: 90%;\n  margin: auto;\n  display: flex;\n  align-items: center;\n}\n\n.mt-10 {\n  margin-top: 10px;\n}\n\n.mt-15 {\n  margin-top: 15px;\n}\n\n.m-20 {\n  margin: 0px 20px;\n}\n\n.purple-text {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 29px;\n  letter-spacing: 0.03em;\n  color: #8892c8;\n}\n\n.ml-15 {\n  margin-left: 15px;\n}\n\n.card-lg {\n  font-family: Poppins;\n  width: 95%;\n  display: block;\n  margin: 15px auto;\n  border: 1px solid rgba(242, 157, 147, 0.45);\n  box-sizing: border-box;\n  box-shadow: 0px 4px 20px rgba(130, 130, 130, 0.25);\n  border-radius: 20px;\n  height: 330;\n}\n\n.card-lg .card-body {\n  height: 250px;\n  overflow: auto;\n}\n\n.card-lg .card-header {\n  background-color: #8892c8;\n  height: 35px;\n  padding-left: 15px;\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n  color: white;\n  letter-spacing: 0.03em;\n  font-weight: bold;\n  font-size: 16px;\n  display: flex;\n  align-items: center;\n}\n\n.card-lg .card-btn {\n  width: 87px;\n  height: 28px;\n  --background: #99c43c;\n  --border-radius: 30px;\n}\n\n.btn-end {\n  display: flex;\n  width: 100%;\n  justify-content: end;\n  margin-right: 20px;\n}\n\n.card-rect {\n  width: 95%;\n  height: 96px;\n  margin: auto;\n  background: #ffffff;\n  box-shadow: 0px 4px 20px rgba(130, 130, 130, 0.25);\n  border-radius: 20px;\n}\n\n.card-rect span {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 13px;\n  line-height: 19px;\n  letter-spacing: 0.03em;\n}\n\n.v-align {\n  height: 100%;\n  align-content: space-around;\n}\n\n.p-text {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 13px;\n  line-height: 19px;\n  letter-spacing: 0.03em;\n}\n\nion-grid {\n  padding: 0px !important;\n  overflow: auto;\n  margin: 0px;\n}\n\n.slide-wrapper {\n  padding: 10px 0px;\n}\n\n.slide-wrapper .swiper-slide img {\n  width: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,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QVlBO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7QUFURjs7QUFZQTtFQUNFLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFURjs7QUFhQTtFQUNJLGlCQUFBO0FBVko7O0FBV0U7RUFDRSxzQkFBQTtBQVRKIiwiZmlsZSI6ImZyZWluZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wIHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwN3B4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLFxuICAgICAgIzhiOThkZCAwJSxcbiAgICAgIHJnYmEoMTA1LCAxMTgsIDE4NSwgMC43NikgMTAwJSk7XG59XG5cbi52LWNudHIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cblxuLmRlbGV0ZS1pY29uIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5tbC01MCB7XG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xufVxuXG4uaGVhZGVyLXRleHQge1xuICBsZXR0ZXItc3BhY2luZzogMC4wM2VtO1xuICBmb250LWZhbWlseTogUG9wcGlucztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50b3AtYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmltZy1jb250YWluZXIge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4udXNlcm5hbWUtY3NzIHtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDNlbTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xufVxuXG4udi1jbnRyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuLmhlYWRlci10ZXh0IHtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDNlbTtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5jdXMtYnRuLXNtIHtcbiAgLS1jb2xvcjogYmxhY2s7XG4gIHdpZHRoOiAxMDFweDtcbiAgaGVpZ2h0OiAyNnB4O1xuICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIC0tYm94LXNoYWRvdzogNHB4IDdweCAyMHB4IHJnYmEoMTA5LCAxMDksIDEwOSwgMC4yNyk7XG4gIC0tYm9yZGVyLXJhZGl1czogOTBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDNlbTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ubWwtMiB7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG59XG5cbi5tbC0xMCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uY2FyZCB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCByZ2JhKDE1MywgMTUzLCAxNTMsIDAuMzcpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB3aWR0aDogMTI5cHg7XG4gIGhlaWdodDogMTY5cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIC5jYXJkLXRleHQge1xuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMjFweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDNlbTtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgfVxuXG4gIC5jYXJkLWJ0biB7XG4gICAgd2lkdGg6IDg3cHg7XG4gICAgaGVpZ2h0OiAyOHB4O1xuICAgIC0tYmFja2dyb3VuZDogIzk5YzQzYztcbiAgICAtLWJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIH1cbn1cblxuLmNhcmQtY29udGFpbmVyIHtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5tdC0xMCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5tdC0xNSB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5tLTIwIHtcbiAgbWFyZ2luOiAwcHggMjBweDtcbn1cblxuLnB1cnBsZS10ZXh0IHtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMjlweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDNlbTtcbiAgY29sb3I6ICM4ODkyYzg7XG59XG5cbi5tbC0xNSB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG4uY2FyZC1sZyB7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICB3aWR0aDogOTUlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAxNXB4IGF1dG87XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjQyLCAxNTcsIDE0NywgMC40NSk7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggMjBweCByZ2JhKDEzMCwgMTMwLCAxMzAsIDAuMjUpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBoZWlnaHQ6IDMzMDtcblxuICAuY2FyZC1ib2R5IHtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICB9XG5cbiAgLmNhcmQtaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODg5MmM4O1xuICAgIGhlaWdodDogMzVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDNlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgLmNhcmQtYnRuIHtcbiAgICB3aWR0aDogODdweDtcbiAgICBoZWlnaHQ6IDI4cHg7XG4gICAgLS1iYWNrZ3JvdW5kOiAjOTljNDNjO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMzBweDtcbiAgfVxufVxuXG4uYnRuLWVuZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4uY2FyZC1yZWN0IHtcbiAgd2lkdGg6IDk1JTtcbiAgaGVpZ2h0OiA5NnB4O1xuICBtYXJnaW46IGF1dG87XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggMjBweCByZ2JhKDEzMCwgMTMwLCAxMzAsIDAuMjUpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuXG4gIHNwYW4ge1xuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsaW5lLWhlaWdodDogMTlweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wM2VtO1xuICB9XG59XG5cbi52LWFsaWduIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBhbGlnbi1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbi5wLXRleHQge1xuICBmb250LWZhbWlseTogUG9wcGlucztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wM2VtO1xufVxuXG5pb24tZ3JpZCB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogYXV0bztcbiAgbWFyZ2luOiAwcHhcbn1cblxuXG4uc2xpZGUtd3JhcHBlciB7XG4gICAgcGFkZGluZzogMTBweCAwcHg7XG4gIC5zd2lwZXItc2xpZGUgaW1nIHtcbiAgICB3aWR0aDogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG4iXX0= */");

/***/ }),

/***/ 68034:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/main/freind/freind.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-grid>\n    <ion-row class=\"top\">\n        <ion-row class=\"top\">\n            <div class=\"top-box\">\n                <ion-col>\n                    <div class=\"box img-container\">\n                        <img src=\"assets/dummy-user.jpg\" alt=\"\" width=\"55\" style=\"border-radius: 50%; margin-left: 5px\" />\n                        <span class=\"pl-10 username-css\">{{this.user.user_name}}</span>\n                    </div>\n                </ion-col>\n\n                <ion-col >\n                    <div class=\"v-cntr header-text\">\n                        FRIENDS\n                    </div>\n                </ion-col>\n                <ion-col>\n                    <ion-button [routerLink]=\"['/add-contact']\" class=\"cus-btn-sm ml-2\">+ Add Friend </ion-button>\n                </ion-col>\n            </div>\n        </ion-row>\n    </ion-row>\n    <ion-row class=\"mt-15\">\n        <span class=\"purple-text m-20\">Play Random</span>\n    </ion-row>\n    <ion-row class=\"m-20\">\n        <ion-slides class=\"mt-15 slide-wrapper\" loop=\"false\" [options]=\"{slidesPerView: slidesLength}\" pager=\"false\">\n            <ion-slide *ngFor=\"let user of randomList\">\n                <div class=\"card-container\">\n                    <div class=\"card \">\n                        <img src=\"assets/dummy-user.jpg\" alt=\"\" width=\"55\" style=\"border-radius: 50%; margin-left: 5px; width: 55px !important\" />\n                        <p  class=\"card-text\" style=\"word-wrap:break-word;\">{{user.user_name.substr(0,8)}}</p>\n                        <ion-button (click)=\"selectDifficultyLevel(user.id)\" class=\"card-btn\">Play</ion-button>\n                    </div>\n                </div>\n            </ion-slide>\n        </ion-slides>\n    </ion-row>\n\n    <ion-row class=\"mt-15\">\n        <ion-col size=\"12\">\n            <div class=\"card-lg\">\n                <div class=\"card-header\">My Friends</div>\n                <div class=\"card-body\">\n                    <div class=\"top-box mt-10\" *ngFor=\"let friend of friendList\">\n                        <img class=\"ml-10\" src=\"assets/dummy-user.jpg\" alt=\"\" width=\"55\" style=\"border-radius: 50%\" />\n                        <span class=\"ml-2\" *ngIf=\"friend.user_name.length < 12; else shortName\">\n                            {{ friend.user_name}}\n                        </span>\n                        <ng-template #shortName>\n                            {{ friend.user_name.substr(0,11) }}...\n                        </ng-template>\n\n                        <div class=\"btn-end\">\n                            <ion-button (click)=\"selectDifficultyLevel(friend.id)\" class=\"card-btn\">Play</ion-button>\n                            <ion-icon class=\"delete-icon\" (click)=\"deleteFriend(friend.id)\" name=\"trash-outline\"></ion-icon>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </ion-col>\n    </ion-row>\n\n    <ion-row class=\"mt-15\">\n        <ion-col size=\"12\">\n            <div class=\"card-rect\">\n                <ion-row class=\"v-align\">\n                    <ion-col offset=\"1\" size=\"3\">\n                        <img src=\"assets/friend-invite.svg\" alt=\"\" />\n                    </ion-col>\n                    <ion-col [routerLink]=\"['/add-contact']\" size=\"8\">\n                        <span class=\"purple-text\">Invite a friend</span> <br />\n                        <span>Gain puzzle pieces by inviting a friend! </span>\n                    </ion-col>\n                </ion-row>\n            </div>\n        </ion-col>\n        <ion-col class=\"text-center\">\n            <div style=\"width: 100%; height: 50px;\"></div>\n         </ion-col>\n    </ion-row>\n</ion-grid>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_main_main_freind_freind_module_ts.js.map