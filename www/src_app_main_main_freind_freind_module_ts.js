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
    doLoading() {
        let loader = this.loadingController.create({
            message: 'Loading...'
        });
        return loader;
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
                this.doLoading().present().then(() => {
                    this.restService.delRequest('contacts/delete', friendInstance).subscribe(res => {
                        const friendDetail = this.friendList.filter(x => {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".top {\n  width: 100vw;\n  height: 107px;\n  background: linear-gradient(180deg, #8b98dd 0%, rgba(105, 118, 185, 0.76) 100%);\n}\n\n.v-cntr {\n  display: flex;\n  align-items: center;\n  height: 100%;\n}\n\n.delete-icon {\n  margin-left: 20px;\n  margin-top: 10px;\n  color: red;\n}\n\n.ml-50 {\n  margin-left: 50px;\n}\n\n.header-text {\n  letter-spacing: 0.03em;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 20px;\n  line-height: 30px;\n  color: #ffffff;\n}\n\n.box {\n  display: flex;\n  align-items: center;\n}\n\n.top-box {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n\n.v-cntr {\n  display: flex;\n  align-items: center;\n  height: 100%;\n  justify-content: space-around;\n}\n\n.header-text {\n  letter-spacing: 0.03em;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 20px;\n  line-height: 30px;\n  color: #ffffff;\n}\n\n.cus-btn-sm {\n  --color: black;\n  width: 101px;\n  height: 26px;\n  --background: #ffffff;\n  --box-shadow: 4px 7px 20px rgba(109, 109, 109, 0.27);\n  --border-radius: 90px;\n  letter-spacing: 0.03em;\n  font-size: 12px;\n}\n\n.ml-2 {\n  margin-left: 2px;\n}\n\n.ml-10 {\n  margin-left: 10px;\n}\n\n.card {\n  background: #ffffff;\n  box-shadow: 0px 4px 10px rgba(153, 153, 153, 0.37);\n  border-radius: 10px;\n  width: 129px;\n  height: 169px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.card .card-text {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 21px;\n  text-align: center;\n  letter-spacing: 0.03em;\n  color: #000000;\n}\n\n.card .card-btn {\n  width: 87px;\n  height: 28px;\n  --background: #99c43c;\n  --border-radius: 30px;\n}\n\n.card-container {\n  width: 95%;\n  margin: auto;\n  display: flex;\n  align-items: center;\n}\n\n.mt-10 {\n  margin-top: 10px;\n}\n\n.mt-15 {\n  margin-top: 15px;\n}\n\n.purple-text {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 27px;\n  letter-spacing: 0.03em;\n  color: #8892c8;\n}\n\n.ml-15 {\n  margin-left: 15px;\n}\n\n.card-lg {\n  font-family: Poppins;\n  width: 95%;\n  display: block;\n  margin: 15px auto;\n  border: 1px solid rgba(242, 157, 147, 0.45);\n  box-sizing: border-box;\n  box-shadow: 0px 4px 20px rgba(130, 130, 130, 0.25);\n  border-radius: 20px;\n  height: 330;\n}\n\n.card-lg .card-body {\n  height: 250px;\n  overflow: auto;\n}\n\n.card-lg .card-header {\n  background-color: #8892c8;\n  height: 35px;\n  padding-left: 15px;\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n  color: white;\n  letter-spacing: 0.03em;\n  font-weight: bold;\n  font-size: 16px;\n  display: flex;\n  align-items: center;\n}\n\n.card-lg .card-btn {\n  width: 87px;\n  height: 28px;\n  --background: #99c43c;\n  --border-radius: 30px;\n}\n\n.btn-end {\n  display: flex;\n  width: 100%;\n  justify-content: end;\n  margin-right: 20px;\n}\n\n.card-rect {\n  width: 95%;\n  height: 96px;\n  margin: auto;\n  background: #ffffff;\n  box-shadow: 0px 4px 20px rgba(130, 130, 130, 0.25);\n  border-radius: 20px;\n}\n\n.card-rect span {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 13px;\n  line-height: 19px;\n  letter-spacing: 0.03em;\n}\n\n.v-align {\n  height: 100%;\n  align-content: space-around;\n}\n\n.p-text {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 13px;\n  line-height: 19px;\n  letter-spacing: 0.03em;\n}\n\nion-grid {\n  padding: 0px !important;\n  overflow: auto;\n  margin: 0px;\n}\n\n.slide-wrapper .swiper-slide img {\n  width: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyZWluZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLCtFQUFBO0FBQ0Y7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBREY7O0FBS0E7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQUZGOztBQUtBO0VBQ0UsaUJBQUE7QUFGRjs7QUFLQTtFQUNFLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUZGOztBQUtBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBRkY7O0FBS0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBRkY7O0FBS0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7QUFGRjs7QUFLQTtFQUNFLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUZGOztBQUtBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxvREFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FBRkY7O0FBS0E7RUFDRSxnQkFBQTtBQUZGOztBQUtBO0VBQ0UsaUJBQUE7QUFGRjs7QUFLQTtFQUNFLG1CQUFBO0VBQ0Esa0RBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUZGOztBQUlFO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUFGSjs7QUFLRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtBQUhKOztBQU9BO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBRUEsbUJBQUE7QUFMRjs7QUFRQTtFQUNFLGdCQUFBO0FBTEY7O0FBUUE7RUFDRSxnQkFBQTtBQUxGOztBQVFBO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FBTEY7O0FBUUE7RUFDRSxpQkFBQTtBQUxGOztBQVFBO0VBQ0Usb0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsMkNBQUE7RUFDQSxzQkFBQTtFQUNBLGtEQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBTEY7O0FBT0U7RUFDRSxhQUFBO0VBQ0EsY0FBQTtBQUxKOztBQVFFO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBTko7O0FBU0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7QUFQSjs7QUFXQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQVJGOztBQVdBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrREFBQTtFQUNBLG1CQUFBO0FBUkY7O0FBVUU7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBQVJKOztBQVlBO0VBQ0UsWUFBQTtFQUNBLDJCQUFBO0FBVEY7O0FBWUE7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBQVRGOztBQVlBO0VBQ0UsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQVRGOztBQWNFO0VBQ0Usc0JBQUE7QUFYSiIsImZpbGUiOiJmcmVpbmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvcCB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDdweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZyxcbiAgICAgICM4Yjk4ZGQgMCUsXG4gICAgICByZ2JhKDEwNSwgMTE4LCAxODUsIDAuNzYpIDEwMCUpO1xufVxuXG4udi1jbnRyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5cbi5kZWxldGUtaWNvbiB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBjb2xvcjogcmVkO1xufVxuXG4ubWwtNTAge1xuICBtYXJnaW4tbGVmdDogNTBweDtcbn1cblxuLmhlYWRlci10ZXh0IHtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDNlbTtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udG9wLWJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udi1jbnRyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuLmhlYWRlci10ZXh0IHtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDNlbTtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5jdXMtYnRuLXNtIHtcbiAgLS1jb2xvcjogYmxhY2s7XG4gIHdpZHRoOiAxMDFweDtcbiAgaGVpZ2h0OiAyNnB4O1xuICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIC0tYm94LXNoYWRvdzogNHB4IDdweCAyMHB4IHJnYmEoMTA5LCAxMDksIDEwOSwgMC4yNyk7XG4gIC0tYm9yZGVyLXJhZGl1czogOTBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDNlbTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ubWwtMiB7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG59XG5cbi5tbC0xMCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uY2FyZCB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggMTBweCByZ2JhKDE1MywgMTUzLCAxNTMsIDAuMzcpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB3aWR0aDogMTI5cHg7XG4gIGhlaWdodDogMTY5cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIC5jYXJkLXRleHQge1xuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMjFweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDNlbTtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgfVxuXG4gIC5jYXJkLWJ0biB7XG4gICAgd2lkdGg6IDg3cHg7XG4gICAgaGVpZ2h0OiAyOHB4O1xuICAgIC0tYmFja2dyb3VuZDogIzk5YzQzYztcbiAgICAtLWJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIH1cbn1cblxuLmNhcmQtY29udGFpbmVyIHtcbiAgd2lkdGg6IDk1JTtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5tdC0xMCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5tdC0xNSB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5wdXJwbGUtdGV4dCB7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDI3cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAzZW07XG4gIGNvbG9yOiAjODg5MmM4O1xufVxuXG4ubWwtMTUge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cblxuLmNhcmQtbGcge1xuICBmb250LWZhbWlseTogUG9wcGlucztcbiAgd2lkdGg6IDk1JTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMTVweCBhdXRvO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI0MiwgMTU3LCAxNDcsIDAuNDUpO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2hhZG93OiAwcHggNHB4IDIwcHggcmdiYSgxMzAsIDEzMCwgMTMwLCAwLjI1KTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgaGVpZ2h0OiAzMzA7XG5cbiAgLmNhcmQtYm9keSB7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgfVxuXG4gIC5jYXJkLWhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg4OTJjODtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAzZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIC5jYXJkLWJ0biB7XG4gICAgd2lkdGg6IDg3cHg7XG4gICAgaGVpZ2h0OiAyOHB4O1xuICAgIC0tYmFja2dyb3VuZDogIzk5YzQzYztcbiAgICAtLWJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIH1cbn1cblxuLmJ0bi1lbmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLmNhcmQtcmVjdCB7XG4gIHdpZHRoOiA5NSU7XG4gIGhlaWdodDogOTZweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3gtc2hhZG93OiAwcHggNHB4IDIwcHggcmdiYSgxMzAsIDEzMCwgMTMwLCAwLjI1KTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcblxuICBzcGFuIHtcbiAgICBmb250LWZhbWlseTogUG9wcGlucztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDNlbTtcbiAgfVxufVxuXG4udi1hbGlnbiB7XG4gIGhlaWdodDogMTAwJTtcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG4ucC10ZXh0IHtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMTlweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDNlbTtcbn1cblxuaW9uLWdyaWQge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIG1hcmdpbjogMHB4XG59XG5cblxuLnNsaWRlLXdyYXBwZXIge1xuICAuc3dpcGVyLXNsaWRlIGltZyB7XG4gICAgd2lkdGg6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuIl19 */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-grid>\n  <ion-row class=\"top\">\n    <ion-row class=\"top\">\n      <div class=\"top-box\">\n        <ion-col offset=\"1\" size=\"2\">\n          <div class=\"box\">\n            <img src=\"assets/dummy-user.jpg\" alt=\"\" width=\"55\" style=\"border-radius: 50%; margin-left: 5px\" />\n          </div>\n        </ion-col>\n\n        <ion-col offset=\"1\" size=\"7\">\n          <div class=\"v-cntr header-text\">\n            FRIENDS\n            <ion-button [routerLink]=\"['/add-contact']\" class=\"cus-btn-sm ml-2\">+ Add Friend </ion-button>\n          </div>\n        </ion-col>\n      </div>\n    </ion-row>\n  </ion-row>\n\n  <span class=\"purple-text ml-15 mt-15\">Play Random</span>\n  <ion-row class=\"mt-15\">\n    <ion-slides class=\"mt-15 slide-wrapper\" loop=\"false\" [options]=\"{slidesPerView: slidesLength}\" pager=\"false\">\n      <ion-slide *ngFor=\"let user of randomList\">\n        <div class=\"card-container\">\n          <div class=\"card \">\n            <img src=\"assets/dummy-user.jpg\" alt=\"\" width=\"55\"\n              style=\"border-radius: 50%; margin-left: 5px; width: 55px !important\" />\n            <p class=\"card-text\">{{user.user_name}}</p>\n            <ion-button (click)=\"selectDifficultyLevel(user.id)\" class=\"card-btn\">Play</ion-button>\n          </div>\n        </div>\n      </ion-slide>\n    </ion-slides>\n  </ion-row>\n\n  <ion-row class=\"mt-15\">\n    <ion-col size=\"12\">\n      <div class=\"card-lg\">\n        <div class=\"card-header\">My Friends</div>\n        <div class=\"card-body\">\n          <div class=\"top-box mt-10\" *ngFor=\"let friend of friendList\">\n            <img class=\"ml-10\" src=\"assets/dummy-user.jpg\" alt=\"\" width=\"55\" style=\"border-radius: 50%\" />\n            <span class=\"ml-2\" *ngIf=\"friend.user_name.length < 12; else shortName\" >\n              {{ friend.user_name}}\n            </span>\n            <ng-template #shortName>\n              {{ friend.user_name.substr(0,11) }}...\n            </ng-template>\n\n            <div class=\"btn-end\">\n              <ion-button (click)=\"selectDifficultyLevel(friend.id)\" class=\"card-btn\">Play</ion-button>\n                <ion-icon class=\"delete-icon\"  (click)=\"deleteFriend(friend.id)\" name=\"trash-outline\"></ion-icon>\n            </div>\n          </div>\n        </div>\n      </div>\n    </ion-col>\n  </ion-row>\n\n  <ion-row class=\"mt-15\">\n    <ion-col size=\"12\">\n      <div class=\"card-rect\">\n        <ion-row class=\"v-align\">\n          <ion-col offset=\"1\" size=\"3\">\n            <img src=\"assets/friend-invite.svg\" alt=\"\" />\n          </ion-col>\n          <ion-col [routerLink]=\"['/add-contact']\" size=\"8\">\n            <span class=\"purple-text\">Invite a friend</span> <br />\n            <span>Gain puzzle pieces by inviting a friend! </span>\n          </ion-col>\n        </ion-row>\n      </div>\n    </ion-col>\n  </ion-row>\n</ion-grid>");

/***/ })

}]);
//# sourceMappingURL=src_app_main_main_freind_freind_module_ts.js.map