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
        this.restService.getRequest('users/play-random').subscribe((res) => {
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
                duration: 2000
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
            console.log('Loading dismissed!');
        });
    }
    selectDifficultyLevel(id) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
            customClass: {
                actions: 'vertical-buttons',
                cancelButton: this.gameLevel > 4 ? 'top-margin' : 'top-margin disable',
                confirmButton: 'font-size1'
            },
            title: "Select Difficulty Level",
            confirmButtonText: "Easy",
            confirmButtonColor: "#99C43C",
            showCancelButton: true,
            // allowOutsideClick: true,
            cancelButtonColor: "#ebb434",
            cancelButtonText: this.user.level_id < 4 ? "Medium (Unlock at level 5)" : "Medium"
        }).then((result) => {
            if (!result.isConfirmed) {
                return;
            }
            result.dismiss == 'cancel' ? this.gameType = 'medium' : result.value == true ? this.gameType = 'easy' : this.gameType = '';
            this.cameraOrGallery(id);
        });
    }
    getFriendList() {
        let user = localStorage.getItem('user');
        user = JSON.parse(user);
        this.restService.getRequest('contacts/listing').subscribe((res) => {
            this.friendList = res.filter(f => {
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
        }).then(res => {
            if (res.isConfirmed) {
                this.restService.delRequest('contacts/delete', friendInstance).subscribe(res => {
                    const friendDetail = this.friendList.filter(x => {
                        return x.id != id;
                    });
                    this.friendList = friendDetail;
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".top {\n  width: 100vw;\n  height: 107px;\n  background: linear-gradient(180deg, #8b98dd 0%, rgba(105, 118, 185, 0.76) 100%);\n}\n\n.v-cntr {\n  display: flex;\n  align-items: center;\n  height: 100%;\n}\n\n.ml-50 {\n  margin-left: 50px;\n}\n\n.header-text {\n  letter-spacing: 0.03em;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 20px;\n  line-height: 30px;\n  color: #ffffff;\n}\n\n.box {\n  display: flex;\n  align-items: center;\n}\n\n.top-box {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n\n.v-cntr {\n  display: flex;\n  align-items: center;\n  height: 100%;\n  justify-content: space-around;\n}\n\n.header-text {\n  letter-spacing: 0.03em;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 20px;\n  line-height: 30px;\n  color: #ffffff;\n}\n\n.cus-btn-sm {\n  --color: black;\n  width: 101px;\n  height: 26px;\n  --background: #ffffff;\n  --box-shadow: 4px 7px 20px rgba(109, 109, 109, 0.27);\n  --border-radius: 90px;\n  letter-spacing: 0.03em;\n  font-size: 12px;\n}\n\n.ml-2 {\n  margin-left: 2px;\n}\n\n.ml-10 {\n  margin-left: 10px;\n}\n\n.card {\n  background: #ffffff;\n  box-shadow: 0px 4px 10px rgba(153, 153, 153, 0.37);\n  border-radius: 10px;\n  width: 129px;\n  height: 169px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.card .card-text {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 21px;\n  text-align: center;\n  letter-spacing: 0.03em;\n  color: #000000;\n}\n\n.card .card-btn {\n  width: 87px;\n  height: 28px;\n  --background: #99c43c;\n  --border-radius: 30px;\n}\n\n.card-container {\n  width: 95%;\n  margin: auto;\n  display: flex;\n  align-items: center;\n}\n\n.mt-10 {\n  margin-top: 10px;\n}\n\n.mt-15 {\n  margin-top: 15px;\n}\n\n.purple-text {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 27px;\n  letter-spacing: 0.03em;\n  color: #8892c8;\n}\n\n.ml-15 {\n  margin-left: 15px;\n}\n\n.card-lg {\n  font-family: Poppins;\n  width: 95%;\n  display: block;\n  margin: 15px auto;\n  border: 1px solid rgba(242, 157, 147, 0.45);\n  box-sizing: border-box;\n  box-shadow: 0px 4px 20px rgba(130, 130, 130, 0.25);\n  border-radius: 20px;\n  height: 330;\n}\n\n.card-lg .card-body {\n  height: 250px;\n  overflow: auto;\n}\n\n.card-lg .card-header {\n  background-color: #8892c8;\n  height: 35px;\n  padding-left: 15px;\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n  color: white;\n  letter-spacing: 0.03em;\n  font-weight: bold;\n  font-size: 16px;\n  display: flex;\n  align-items: center;\n}\n\n.card-lg .card-btn {\n  width: 87px;\n  height: 28px;\n  --background: #99c43c;\n  --border-radius: 30px;\n}\n\n.btn-end {\n  display: flex;\n  width: 100%;\n  justify-content: end;\n  margin-right: 20px;\n}\n\n.card-rect {\n  width: 95%;\n  height: 96px;\n  margin: auto;\n  background: #ffffff;\n  box-shadow: 0px 4px 20px rgba(130, 130, 130, 0.25);\n  border-radius: 20px;\n}\n\n.card-rect span {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 13px;\n  line-height: 19px;\n  letter-spacing: 0.03em;\n}\n\n.v-align {\n  height: 100%;\n  align-content: space-around;\n}\n\n.p-text {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 13px;\n  line-height: 19px;\n  letter-spacing: 0.03em;\n}\n\nion-grid {\n  padding: 0px !important;\n  overflow: auto;\n  margin: 0px;\n}\n\n.slide-wrapper .swiper-slide img {\n  width: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,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Q29udGVudCI6WyIudG9wIHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwN3B4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLFxuICAgICAgIzhiOThkZCAwJSxcbiAgICAgIHJnYmEoMTA1LCAxMTgsIDE4NSwgMC43NikgMTAwJSk7XG59XG5cbi52LWNudHIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5tbC01MCB7XG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xufVxuXG4uaGVhZGVyLXRleHQge1xuICBsZXR0ZXItc3BhY2luZzogMC4wM2VtO1xuICBmb250LWZhbWlseTogUG9wcGlucztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50b3AtYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi52LWNudHIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG4uaGVhZGVyLXRleHQge1xuICBsZXR0ZXItc3BhY2luZzogMC4wM2VtO1xuICBmb250LWZhbWlseTogUG9wcGlucztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmN1cy1idG4tc20ge1xuICAtLWNvbG9yOiBibGFjaztcbiAgd2lkdGg6IDEwMXB4O1xuICBoZWlnaHQ6IDI2cHg7XG4gIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgLS1ib3gtc2hhZG93OiA0cHggN3B4IDIwcHggcmdiYSgxMDksIDEwOSwgMTA5LCAwLjI3KTtcbiAgLS1ib3JkZXItcmFkaXVzOiA5MHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wM2VtO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5tbC0yIHtcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbn1cblxuLm1sLTEwIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5jYXJkIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm94LXNoYWRvdzogMHB4IDRweCAxMHB4IHJnYmEoMTUzLCAxNTMsIDE1MywgMC4zNyk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHdpZHRoOiAxMjlweDtcbiAgaGVpZ2h0OiAxNjlweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgLmNhcmQtdGV4dCB7XG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wM2VtO1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICB9XG5cbiAgLmNhcmQtYnRuIHtcbiAgICB3aWR0aDogODdweDtcbiAgICBoZWlnaHQ6IDI4cHg7XG4gICAgLS1iYWNrZ3JvdW5kOiAjOTljNDNjO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMzBweDtcbiAgfVxufVxuXG4uY2FyZC1jb250YWluZXIge1xuICB3aWR0aDogOTUlO1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG5cbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm10LTEwIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLm10LTE1IHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLnB1cnBsZS10ZXh0IHtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMjdweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDNlbTtcbiAgY29sb3I6ICM4ODkyYzg7XG59XG5cbi5tbC0xNSB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG4uY2FyZC1sZyB7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICB3aWR0aDogOTUlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAxNXB4IGF1dG87XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjQyLCAxNTcsIDE0NywgMC40NSk7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggMjBweCByZ2JhKDEzMCwgMTMwLCAxMzAsIDAuMjUpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBoZWlnaHQ6IDMzMDtcblxuICAuY2FyZC1ib2R5IHtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICB9XG5cbiAgLmNhcmQtaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODg5MmM4O1xuICAgIGhlaWdodDogMzVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDNlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgLmNhcmQtYnRuIHtcbiAgICB3aWR0aDogODdweDtcbiAgICBoZWlnaHQ6IDI4cHg7XG4gICAgLS1iYWNrZ3JvdW5kOiAjOTljNDNjO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMzBweDtcbiAgfVxufVxuXG4uYnRuLWVuZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4uY2FyZC1yZWN0IHtcbiAgd2lkdGg6IDk1JTtcbiAgaGVpZ2h0OiA5NnB4O1xuICBtYXJnaW46IGF1dG87XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggMjBweCByZ2JhKDEzMCwgMTMwLCAxMzAsIDAuMjUpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuXG4gIHNwYW4ge1xuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsaW5lLWhlaWdodDogMTlweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wM2VtO1xuICB9XG59XG5cbi52LWFsaWduIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBhbGlnbi1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbi5wLXRleHQge1xuICBmb250LWZhbWlseTogUG9wcGlucztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wM2VtO1xufVxuXG5pb24tZ3JpZCB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogYXV0bztcbiAgbWFyZ2luOiAwcHhcbn1cblxuXG4uc2xpZGUtd3JhcHBlciB7XG4gIC5zd2lwZXItc2xpZGUgaW1nIHtcbiAgICB3aWR0aDogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG4iXX0= */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-grid>\n  <ion-row class=\"top\">\n    <ion-row class=\"top\">\n      <div class=\"top-box\">\n        <ion-col offset=\"1\" size=\"2\">\n          <div class=\"box\">\n            <img src=\"assets/dummy-user.jpg\" alt=\"\" width=\"55\" style=\"border-radius: 50%; margin-left: 5px\" />\n          </div>\n        </ion-col>\n\n        <ion-col offset=\"1\" size=\"7\">\n          <div class=\"v-cntr header-text\">\n            FRIENDS\n            <ion-button [routerLink]=\"['/add-contact']\" class=\"cus-btn-sm ml-2\">+ Add Friend </ion-button>\n          </div>\n        </ion-col>\n      </div>\n    </ion-row>\n  </ion-row>\n\n  <span class=\"purple-text ml-15 mt-15\">Play Random</span>\n  <ion-row class=\"mt-15\">\n    <ion-slides class=\"mt-15 slide-wrapper\" loop=\"false\" [options]=\"{slidesPerView: slidesLength}\" pager=\"false\">\n      <ion-slide *ngFor=\"let user of randomList\">\n        <div class=\"card-container\">\n          <div class=\"card \">\n            <img src=\"assets/dummy-user.jpg\" alt=\"\" width=\"55\"\n              style=\"border-radius: 50%; margin-left: 5px; width: 55px !important\" />\n            <p class=\"card-text\">{{user.user_name}}</p>\n            <ion-button (click)=\"selectDifficultyLevel(user.id)\" class=\"card-btn\">Play</ion-button>\n          </div>\n        </div>\n      </ion-slide>\n    </ion-slides>\n  </ion-row>\n\n  <ion-row class=\"mt-15\">\n    <ion-col size=\"12\">\n      <div class=\"card-lg\">\n        <div class=\"card-header\">My Friends</div>\n        <div class=\"card-body\">\n          <div class=\"top-box mt-10\" *ngFor=\"let friend of friendList\">\n            <img class=\"ml-10\" src=\"assets/dummy-user.jpg\" alt=\"\" width=\"55\" style=\"border-radius: 50%\" />\n            <span class=\"ml-2\">{{friend.user_name}}</span>\n\n            <div class=\"btn-end\">\n              <ion-button (click)=\"selectDifficultyLevel(friend.id)\" class=\"card-btn\">Play</ion-button>\n              <ion-button (click)=\"deleteFriend(friend.id)\" class=\"card-btn\">Delete</ion-button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </ion-col>\n  </ion-row>\n\n  <ion-row class=\"mt-15\">\n    <ion-col size=\"12\">\n      <div class=\"card-rect\">\n        <ion-row class=\"v-align\">\n          <ion-col offset=\"1\" size=\"3\">\n            <img src=\"assets/friend-invite.svg\" alt=\"\" />\n          </ion-col>\n          <ion-col [routerLink]=\"['/add-contact']\" size=\"8\">\n            <span class=\"purple-text\">Invite a friend</span> <br />\n            <span>Gain puzzle pieces by inviting a friend! </span>\n          </ion-col>\n        </ion-row>\n      </div>\n    </ion-col>\n  </ion-row>\n</ion-grid>");

/***/ })

}]);
//# sourceMappingURL=src_app_main_main_freind_freind_module_ts.js.map