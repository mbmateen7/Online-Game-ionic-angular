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
        this.friendist = [];
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
            this.friendist = res.filter(f => {
                return f.id != user['id'];
            });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".top {\n  width: 100vw;\n  height: 107px;\n  background: linear-gradient(180deg, #6976b9 0%, rgba(105, 118, 185, 0.76) 100%);\n  box-shadow: 0px 5px 10px rgba(73, 73, 73, 0.25);\n}\n\n.v-cntr {\n  display: flex;\n  align-items: center;\n  height: 100%;\n}\n\n.ml-50 {\n  margin-left: 50px;\n}\n\n.header-text {\n  letter-spacing: 0.03em;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 20px;\n  line-height: 30px;\n  color: #ffffff;\n}\n\n.box {\n  display: flex;\n  align-items: center;\n}\n\n.top-box {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n\n.v-cntr {\n  display: flex;\n  align-items: center;\n  height: 100%;\n  justify-content: space-around;\n}\n\n.header-text {\n  letter-spacing: 0.03em;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 20px;\n  line-height: 30px;\n  color: #ffffff;\n}\n\n.cus-btn-sm {\n  --color: black;\n  width: 101px;\n  height: 26px;\n  --background: #ffffff;\n  --box-shadow: 4px 7px 20px rgba(109, 109, 109, 0.27);\n  --border-radius: 90px;\n  letter-spacing: 0.03em;\n  font-size: 12px;\n}\n\n.ml-2 {\n  margin-left: 2px;\n}\n\n.ml-10 {\n  margin-left: 10px;\n}\n\n.card {\n  background: #ffffff;\n  box-shadow: 0px 4px 10px rgba(153, 153, 153, 0.37);\n  border-radius: 10px;\n  width: 129px;\n  height: 169px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.card .card-text {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 21px;\n  text-align: center;\n  letter-spacing: 0.03em;\n  color: #000000;\n}\n\n.card .card-btn {\n  width: 87px;\n  height: 28px;\n  --background: #99c43c;\n  --border-radius: 30px;\n}\n\n.card-container {\n  width: 95%;\n  margin: auto;\n  display: flex;\n  align-items: center;\n}\n\n.mt-10 {\n  margin-top: 10px;\n}\n\n.mt-15 {\n  margin-top: 15px;\n}\n\n.purple-text {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 27px;\n  letter-spacing: 0.03em;\n  color: #8892c8;\n}\n\n.ml-15 {\n  margin-left: 15px;\n}\n\n.card-lg {\n  font-family: Poppins;\n  width: 95%;\n  display: block;\n  margin: 15px auto;\n  border: 1px solid rgba(242, 157, 147, 0.45);\n  box-sizing: border-box;\n  box-shadow: 0px 4px 20px rgba(130, 130, 130, 0.25);\n  border-radius: 20px;\n  height: 330;\n}\n\n.card-lg .card-body {\n  height: 250px;\n  overflow: auto;\n}\n\n.card-lg .card-header {\n  background-color: #8892c8;\n  height: 35px;\n  padding-left: 15px;\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n  color: white;\n  letter-spacing: 0.03em;\n  font-weight: bold;\n  font-size: 16px;\n  display: flex;\n  align-items: center;\n}\n\n.card-lg .card-btn {\n  width: 87px;\n  height: 28px;\n  --background: #99c43c;\n  --border-radius: 30px;\n}\n\n.btn-end {\n  display: flex;\n  width: 100%;\n  justify-content: end;\n  margin-right: 20px;\n}\n\n.card-rect {\n  width: 95%;\n  height: 96px;\n  margin: auto;\n  background: #ffffff;\n  box-shadow: 0px 4px 20px rgba(130, 130, 130, 0.25);\n  border-radius: 20px;\n}\n\n.card-rect span {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 13px;\n  line-height: 19px;\n  letter-spacing: 0.03em;\n}\n\n.v-align {\n  height: 100%;\n  align-content: space-around;\n}\n\n.p-text {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 13px;\n  line-height: 19px;\n  letter-spacing: 0.03em;\n}\n\nion-grid {\n  padding: 0px !important;\n  overflow: auto;\n  margin: 0px;\n}\n\n.slide-wrapper .swiper-slide img {\n  width: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,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cyIsInNvdXJjZXNDb250ZW50IjpbIi50b3Age1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwN3B4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsXHJcbiAgICAgICM2OTc2YjkgMCUsXHJcbiAgICAgIHJnYmEoMTA1LCAxMTgsIDE4NSwgMC43NikgMTAwJSk7XHJcbiAgYm94LXNoYWRvdzogMHB4IDVweCAxMHB4IHJnYmEoNzMsIDczLCA3MywgMC4yNSk7XHJcbn1cclxuXHJcbi52LWNudHIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5tbC01MCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbn1cclxuXHJcbi5oZWFkZXItdGV4dCB7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDNlbTtcclxuICBmb250LWZhbWlseTogUG9wcGlucztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5ib3gge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnRvcC1ib3gge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnYtY250ciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG5cclxuLmhlYWRlci10ZXh0IHtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wM2VtO1xyXG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBsaW5lLWhlaWdodDogMzBweDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLmN1cy1idG4tc20ge1xyXG4gIC0tY29sb3I6IGJsYWNrO1xyXG4gIHdpZHRoOiAxMDFweDtcclxuICBoZWlnaHQ6IDI2cHg7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIC0tYm94LXNoYWRvdzogNHB4IDdweCAyMHB4IHJnYmEoMTA5LCAxMDksIDEwOSwgMC4yNyk7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiA5MHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAzZW07XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4ubWwtMiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDJweDtcclxufVxyXG5cclxuLm1sLTEwIHtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgYm94LXNoYWRvdzogMHB4IDRweCAxMHB4IHJnYmEoMTUzLCAxNTMsIDE1MywgMC4zNyk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB3aWR0aDogMTI5cHg7XHJcbiAgaGVpZ2h0OiAxNjlweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgLmNhcmQtdGV4dCB7XHJcbiAgICBmb250LWZhbWlseTogUG9wcGlucztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAzZW07XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICB9XHJcblxyXG4gIC5jYXJkLWJ0biB7XHJcbiAgICB3aWR0aDogODdweDtcclxuICAgIGhlaWdodDogMjhweDtcclxuICAgIC0tYmFja2dyb3VuZDogIzk5YzQzYztcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMzBweDtcclxuICB9XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDk1JTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm10LTEwIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4ubXQtMTUge1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuXHJcbi5wdXJwbGUtdGV4dCB7XHJcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyN3B4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAzZW07XHJcbiAgY29sb3I6ICM4ODkyYzg7XHJcbn1cclxuXHJcbi5tbC0xNSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbi5jYXJkLWxnIHtcclxuICBmb250LWZhbWlseTogUG9wcGlucztcclxuICB3aWR0aDogOTUlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogMTVweCBhdXRvO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjQyLCAxNTcsIDE0NywgMC40NSk7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3gtc2hhZG93OiAwcHggNHB4IDIwcHggcmdiYSgxMzAsIDEzMCwgMTMwLCAwLjI1KTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGhlaWdodDogMzMwO1xyXG5cclxuICAuY2FyZC1ib2R5IHtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICB9XHJcblxyXG4gIC5jYXJkLWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODg5MmM4O1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDNlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuY2FyZC1idG4ge1xyXG4gICAgd2lkdGg6IDg3cHg7XHJcbiAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICAtLWJhY2tncm91bmQ6ICM5OWM0M2M7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uYnRuLWVuZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5jYXJkLXJlY3Qge1xyXG4gIHdpZHRoOiA5NSU7XHJcbiAgaGVpZ2h0OiA5NnB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGJveC1zaGFkb3c6IDBweCA0cHggMjBweCByZ2JhKDEzMCwgMTMwLCAxMzAsIDAuMjUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcblxyXG4gIHNwYW4ge1xyXG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE5cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wM2VtO1xyXG4gIH1cclxufVxyXG5cclxuLnYtYWxpZ24ge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBhbGlnbi1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuXHJcbi5wLXRleHQge1xyXG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBsaW5lLWhlaWdodDogMTlweDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wM2VtO1xyXG59XHJcblxyXG5pb24tZ3JpZCB7XHJcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgbWFyZ2luOiAwcHhcclxufVxyXG5cclxuXHJcbi5zbGlkZS13cmFwcGVyIHtcclxuICAuc3dpcGVyLXNsaWRlIGltZyB7XHJcbiAgICB3aWR0aDogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iXX0= */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-grid>\r\n  <ion-row class=\"top\">\r\n    <ion-row class=\"top\">\r\n      <div class=\"top-box\">\r\n        <ion-col offset=\"1\" size=\"2\">\r\n          <div class=\"box\">\r\n            <img src=\"assets/dummy-user.jpg\" alt=\"\" width=\"55\" style=\"border-radius: 50%; margin-left: 5px\" />\r\n          </div>\r\n        </ion-col>\r\n\r\n        <ion-col offset=\"1\" size=\"7\">\r\n          <div class=\"v-cntr header-text\">\r\n            FRIENDS\r\n            <ion-button [routerLink]=\"['/add-contact']\" class=\"cus-btn-sm ml-2\">+ Add Friend </ion-button>\r\n          </div>\r\n        </ion-col>\r\n      </div>\r\n    </ion-row>\r\n  </ion-row>\r\n\r\n  <span class=\"purple-text ml-15 mt-15\">Play Random</span>\r\n  <ion-row class=\"mt-15\">\r\n    <ion-slides class=\"mt-15 slide-wrapper\" loop=\"false\" [options]=\"{slidesPerView: slidesLength}\" pager=\"false\">\r\n      <ion-slide *ngFor=\"let user of randomList\">\r\n        <div class=\"card-container\">\r\n          <div class=\"card \">\r\n            <img src=\"assets/dummy-user.jpg\" alt=\"\" width=\"55\"\r\n              style=\"border-radius: 50%; margin-left: 5px; width: 55px !important\" />\r\n            <p class=\"card-text\">{{user.user_name}}</p>\r\n            <ion-button (click)=\"selectDifficultyLevel(user.id)\" class=\"card-btn\">Play</ion-button>\r\n          </div>\r\n        </div>\r\n      </ion-slide>\r\n    </ion-slides>\r\n  </ion-row>\r\n\r\n  <ion-row class=\"mt-15\">\r\n    <ion-col size=\"12\">\r\n      <div class=\"card-lg\">\r\n        <div class=\"card-header\">My Friends</div>\r\n        <div class=\"card-body\">\r\n          <div class=\"top-box mt-10\" *ngFor=\"let friend of friendist\">\r\n            <img class=\"ml-10\" src=\"assets/dummy-user.jpg\" alt=\"\" width=\"55\" style=\"border-radius: 50%\" />\r\n            <span class=\"ml-2\">{{friend.user_name}}</span>\r\n\r\n            <div class=\"btn-end\">\r\n              <ion-button (click)=\"selectDifficultyLevel(friend.id)\" class=\"card-btn\">Play</ion-button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row class=\"mt-15\">\r\n    <ion-col size=\"12\">\r\n      <div class=\"card-rect\">\r\n        <ion-row class=\"v-align\">\r\n          <ion-col offset=\"1\" size=\"3\">\r\n            <img src=\"assets/friend-invite.svg\" alt=\"\" />\r\n          </ion-col>\r\n          <ion-col [routerLink]=\"['/add-contact']\" size=\"8\">\r\n            <span class=\"purple-text\">Invite a friend</span> <br />\r\n            <span>Gain puzzle pieces by inviting a friend! </span>\r\n          </ion-col>\r\n        </ion-row>\r\n      </div>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-grid>");

/***/ })

}]);
//# sourceMappingURL=src_app_main_main_freind_freind_module_ts.js.map