(self["webpackChunkpic_playce"] = self["webpackChunkpic_playce"] || []).push([["src_app_main_contactlist_contactlist_module_ts"],{

/***/ 49287:
/*!****************************************************************!*\
  !*** ./src/app/main/contactlist/contactlist-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactlistPageRoutingModule": () => (/* binding */ ContactlistPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _contactlist_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contactlist.page */ 52802);




const routes = [
    {
        path: '',
        component: _contactlist_page__WEBPACK_IMPORTED_MODULE_0__.ContactlistPage
    }
];
let ContactlistPageRoutingModule = class ContactlistPageRoutingModule {
};
ContactlistPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ContactlistPageRoutingModule);



/***/ }),

/***/ 72943:
/*!********************************************************!*\
  !*** ./src/app/main/contactlist/contactlist.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactlistPageModule": () => (/* binding */ ContactlistPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _contactlist_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contactlist-routing.module */ 49287);
/* harmony import */ var _contactlist_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contactlist.page */ 52802);
/* harmony import */ var _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/contacts/ngx */ 57560);








let ContactlistPageModule = class ContactlistPageModule {
};
ContactlistPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _contactlist_routing_module__WEBPACK_IMPORTED_MODULE_0__.ContactlistPageRoutingModule,
        ],
        declarations: [_contactlist_page__WEBPACK_IMPORTED_MODULE_1__.ContactlistPage],
        providers: [_ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_2__.Contacts]
    })
], ContactlistPageModule);



/***/ }),

/***/ 52802:
/*!******************************************************!*\
  !*** ./src/app/main/contactlist/contactlist.page.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactlistPage": () => (/* binding */ ContactlistPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_contactlist_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./contactlist.page.html */ 10522);
/* harmony import */ var _contactlist_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contactlist.page.scss */ 40469);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_service_photo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/photo.service */ 65263);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/camera */ 37673);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_service_rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/rest.service */ 90421);
/* harmony import */ var _ionic_native_spinner_dialog_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/spinner-dialog/ngx */ 32423);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ 88259);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);












let ContactlistPage = class ContactlistPage {
    constructor(photoService, alertController, router, activatedRoute, restService, loadingController, spinnerDialog) {
        this.photoService = photoService;
        this.alertController = alertController;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.restService = restService;
        this.loadingController = loadingController;
        this.spinnerDialog = spinnerDialog;
        this.freindList = [];
        this.showUserList = false;
        this.usernameSearchRes = [];
        this.gameType = 'easy';
        this.gameLevel = 4;
        this.showFilterPageLoader = false;
    }
    ngOnInit() {
        console.log(this.activatedRoute.snapshot.paramMap.get('friend_id'));
        this.user = JSON.parse(localStorage.getItem('user'));
        const friendId = this.activatedRoute.snapshot.paramMap.get('friend_id');
        if (friendId) {
            console.log('--------------->');
            this.cameraOrGallery(friendId);
        }
        this.getFriendList();
    }
    ionViewDidEnter() {
        console.log(this.activatedRoute.snapshot.paramMap.get('friend_id'));
        this.user = JSON.parse(localStorage.getItem('user'));
        const friendId = this.activatedRoute.snapshot.paramMap.get('friend_id');
        if (friendId) {
            this.cameraOrGallery(friendId);
        }
        this.getFriendList();
    }
    cameraOrGallery(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            // const alert = await this.alertController.create({
            //   // cssClass: 'my-custom-class',
            //   // header: 'Alert',
            //   // subHeader: 'Please Select',
            //   message: 'Please Select.',
            //   buttons: [
            //     {
            //       text: 'Gallery',
            //       role: 'gallery',
            //       cssClass: 'secondary',
            //       handler: () => {
            //         this.getPicture(CameraSource.Photos, id);
            //       },
            //     },
            //     {
            //       text: 'Camera',
            //       role: 'camera',
            //       handler: () => {
            //         this.getPicture(CameraSource.Camera, id);
            //       },
            //     },
            //   ],
            // });
            // await alert.present();
            if (this.gameType == "") {
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
                        }
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
                                this.getPicture(_capacitor_camera__WEBPACK_IMPORTED_MODULE_3__.CameraSource.Photos, id);
                            },
                        },
                        {
                            text: 'Camera',
                            role: 'camera',
                            handler: () => {
                                this.getPicture(_capacitor_camera__WEBPACK_IMPORTED_MODULE_3__.CameraSource.Camera, id);
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.showFilterPageLoader = true;
            const res = yield this.photoService.addNewToGallery(src);
            if (res.base64String) {
                localStorage.setItem('base64String1', '');
                localStorage.setItem('base64String2', '');
                localStorage.setItem('puzzleImage', '');
                this.showFilterPageLoader = true;
                var firstHalfLength = res.base64String.length / 2;
                localStorage.setItem('base64String1', res.base64String.substr(0, firstHalfLength));
                localStorage.setItem('base64String2', res.base64String.substr(firstHalfLength));
                this.router.navigate(['filter', { userId: id, gameType: this.gameType }], { replaceUrl: true });
            }
            else {
                this.showFilterPageLoader = false;
            }
        });
    }
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
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
    onSearchByUsername(e) {
        let username = e.target.value;
        this.showUserList = true;
        const searchObj = {
            user_name: username
        };
        this.restService.postRequestToken('users/user-name', searchObj).subscribe((res) => {
            this.usernameSearchRes = res.user;
        });
    }
    onCancelSearch() {
        this.showUserList = false;
    }
    openDialogBox(obj) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({
            text: "Are you want to add as friend ",
            confirmButtonText: "Yes",
            confirmButtonColor: "#99C43C",
            showCancelButton: true,
            allowOutsideClick: false,
            // backdrop: true,
            cancelButtonColor: "#E86B5D",
            cancelButtonText: "Cancel",
        }).then(res => {
            if (res.isConfirmed) {
                this.addFriendNameByUsername(obj);
            }
        });
    }
    selectDifficultyLevel(id) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({
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
            cancelButtonColor: this.user.level_id < 4 ? "#ccc" : "#ebb434",
            cancelButtonText: this.user.level_id < 4 ? "Medium (Unlock at level 5)" : "Medium"
        }).then((result) => {
            console.log('swal-result', result);
            if (result.dismiss == "backdrop") {
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
                result.value == true ? this.gameType = 'easy' : this.gameType = '';
            }
            this.cameraOrGallery(id);
        });
    }
    onRandomPlay() {
        this.spinnerDialog.show();
        this.restService.getRequest('users/play-random').subscribe((res) => {
            if (res.status) {
                let index = this.getRandomInt(res.message.length);
                if (index < 0) {
                    this.spinnerDialog.hide();
                    sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({
                        title: '<img src="assets/icon/questionmark.png" style="width: 20vw; height:20vw;">',
                        text: "No User is Found ",
                        cancelButtonColor: "#E86B5D",
                        cancelButtonText: "Cancel",
                    });
                }
                else {
                    this.spinnerDialog.hide();
                    sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({
                        title: '<img src="assets/icon/questionmark.png" style="width: 20vw; height:20vw;">',
                        text: "Match found with " + res.message[index].user_name,
                        confirmButtonText: "Let's play!",
                        confirmButtonColor: "#99C43C",
                        showCancelButton: true,
                        allowOutsideClick: false,
                        // backdrop: true,
                        cancelButtonColor: "#E86B5D",
                        cancelButtonText: "Cancel",
                    }).then((result) => {
                        if (result.value) {
                            this.selectDifficultyLevel(res.message[index].id);
                        }
                        else {
                        }
                    });
                }
            }
        });
    }
    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    onDelFriend(id) {
        const friendObj = { friend_id: id };
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({
            title: 'Remove',
            text: 'Are you sure to remove this user?',
            showCancelButton: true,
            showConfirmButton: true,
        }).then(res => {
            if (res.isConfirmed) {
                this.restService.delRequest('contacts/delete', friendObj).subscribe(res => {
                    const frndArr = this.freindList.filter(x => { return x.id != id; });
                    this.freindList = frndArr;
                    // console.log(' This is ffriend Object', frndArr);
                });
            }
        });
    }
    addFriendNameByUsername(obj) {
        this.restService.postRequestToken('contacts/add-username', { friend_id: obj.id }).subscribe((res) => {
            if (res) {
                this.showUserList = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({
                    title: 'Success',
                    text: "Friend Added",
                    confirmButtonText: "Cool",
                });
                this.getFriendList();
            }
        });
    }
    getFriendList() {
        this.restService.getRequest('contacts/listing').subscribe((res) => {
            this.freindList = res.filter(x => x.id != this.user.id);
            if (!this.freindList.length) {
                this.showFilterPageLoader = false;
            }
        });
    }
};
ContactlistPage.ctorParameters = () => [
    { type: src_app_service_photo_service__WEBPACK_IMPORTED_MODULE_2__.PhotoService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute },
    { type: src_app_service_rest_service__WEBPACK_IMPORTED_MODULE_4__.RestService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController },
    { type: _ionic_native_spinner_dialog_ngx__WEBPACK_IMPORTED_MODULE_5__.SpinnerDialog }
];
ContactlistPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-contactlist',
        template: _raw_loader_contactlist_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_contactlist_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ContactlistPage);



/***/ }),

/***/ 40469:
/*!********************************************************!*\
  !*** ./src/app/main/contactlist/contactlist.page.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("h2 {\n  font-family: Poppins;\n  letter-spacing: 0.03em;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 15px;\n}\n\n.top {\n  width: 100vw;\n  height: 107px;\n  background: linear-gradient(180deg, #6976b9 0%, rgba(105, 118, 185, 0.76) 100%);\n  box-shadow: 0px 5px 10px rgba(73, 73, 73, 0.25);\n}\n\nion-button {\n  font-family: Poppins;\n}\n\n.v-cntr {\n  display: flex;\n  align-items: center;\n  height: 100%;\n}\n\n.ml-50 {\n  margin-left: 50px;\n}\n\n.header-text {\n  letter-spacing: 0.03em;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 20px;\n  line-height: 30px;\n  color: #ffffff;\n}\n\n.cus-btn {\n  --background: #99c43c;\n  --border-radius: 30px;\n  width: 87px;\n  height: 28px;\n  font-size: 14px;\n  letter-spacing: 0.03em;\n}\n\nion-item {\n  --inner-padding-bottom: 10px;\n  --inner-padding-top: 10px;\n}\n\n.card {\n  width: 95%;\n  margin: auto;\n  background: #ffffff;\n  box-shadow: 0px 4px 20px rgba(130, 130, 130, 0.25);\n  border-radius: 20px;\n  padding: 15px;\n}\n\n.mt-2 {\n  margin-top: 2px;\n}\n\n.mt-20 {\n  margin-top: 20px;\n}\n\n.mt-45 {\n  margin-top: 45px;\n}\n\n.align-end {\n  display: flex;\n  justify-content: end;\n}\n\n.cus-btn-lg {\n  --color: black;\n  width: 218px;\n  height: 53px;\n  --background: #ffffff;\n  --box-shadow: 4px 7px 20px rgba(109, 109, 109, 0.27);\n  --border-radius: 90px;\n  letter-spacing: 0.03em;\n}\n\n.fw-500 {\n  font-weight: 500;\n}\n\n.top-container {\n  display: flex;\n  width: 100%;\n  min-height: 107px;\n  background: linear-gradient(180deg, #6976B9 0%, rgba(105, 118, 185, 0.76) 100%);\n  box-shadow: 0px 5px 10px rgba(73, 73, 73, 0.25);\n}\n\n.top-container .top-body {\n  width: 90%;\n  margin: auto;\n  display: flex;\n}\n\n.top-container .top-body .text {\n  margin: auto;\n  letter-spacing: 0.03em;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 20px;\n  color: #ffffff;\n}\n\n.cus-search-bar {\n  --border-radius: 30px;\n  --background: #FFFFFF;\n  --box-shadow: inset 0px 3px 7px rgba(166, 166, 166, 0.25);\n}\n\nion-grid {\n  padding: 0px;\n  margin: 0px;\n}\n\n.loaderContainer {\n  min-height: 50vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.scrollDiv {\n  position: fixed;\n  top: 180px;\n  left: 2px;\n  bottom: 2px;\n  width: 100%;\n  background-color: #eee;\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3RsaXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSwrRUFBQTtFQUdBLCtDQUFBO0FBREY7O0FBSUE7RUFDRSxvQkFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQURGOztBQUlBO0VBQ0UsaUJBQUE7QUFERjs7QUFJQTtFQUNFLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQURGOztBQUlBO0VBQ0UscUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FBREY7O0FBSUE7RUFDRSw0QkFBQTtFQUNBLHlCQUFBO0FBREY7O0FBSUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0RBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFERjs7QUFJQTtFQUNFLGVBQUE7QUFERjs7QUFJQTtFQUNFLGdCQUFBO0FBREY7O0FBSUE7RUFDRSxnQkFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLG9CQUFBO0FBREY7O0FBSUE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLG9EQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQURGOztBQUtBO0VBQ0UsZ0JBQUE7QUFGRjs7QUFLQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSwrRUFBQTtFQUNBLCtDQUFBO0FBRkY7O0FBSUU7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFGSjs7QUFJSTtFQUNFLFlBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBRk47O0FBT0E7RUFDRSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EseURBQUE7QUFKRjs7QUFRQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBTEY7O0FBUUE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBTEY7O0FBU0E7RUFDRSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFORiIsImZpbGUiOiJjb250YWN0bGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMiB7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBsZXR0ZXItc3BhY2luZzogMC4wM2VtO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLnRvcCB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDdweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZyxcbiAgICAgICM2OTc2YjkgMCUsXG4gICAgICByZ2JhKDEwNSwgMTE4LCAxODUsIDAuNzYpIDEwMCUpO1xuICBib3gtc2hhZG93OiAwcHggNXB4IDEwcHggcmdiYSg3MywgNzMsIDczLCAwLjI1KTtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xufVxuXG4udi1jbnRyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubWwtNTAge1xuICBtYXJnaW4tbGVmdDogNTBweDtcbn1cblxuLmhlYWRlci10ZXh0IHtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDNlbTtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5jdXMtYnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiAjOTljNDNjO1xuICAtLWJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIHdpZHRoOiA4N3B4O1xuICBoZWlnaHQ6IDI4cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDNlbTtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWlubmVyLXBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAtLWlubmVyLXBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG4uY2FyZCB7XG4gIHdpZHRoOiA5NSU7XG4gIG1hcmdpbjogYXV0bztcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm94LXNoYWRvdzogMHB4IDRweCAyMHB4IHJnYmEoMTMwLCAxMzAsIDEzMCwgMC4yNSk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG5cbi5tdC0yIHtcbiAgbWFyZ2luLXRvcDogMnB4O1xufVxuXG4ubXQtMjAge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4ubXQtNDUge1xuICBtYXJnaW4tdG9wOiA0NXB4O1xufVxuXG4uYWxpZ24tZW5kIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XG59XG5cbi5jdXMtYnRuLWxnIHtcbiAgLS1jb2xvcjogYmxhY2s7XG4gIHdpZHRoOiAyMThweDtcbiAgaGVpZ2h0OiA1M3B4O1xuICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIC0tYm94LXNoYWRvdzogNHB4IDdweCAyMHB4IHJnYmEoMTA5LCAxMDksIDEwOSwgMC4yNyk7XG4gIC0tYm9yZGVyLXJhZGl1czogOTBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDNlbTtcbn1cblxuXG4uZnctNTAwIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnRvcC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTA3cHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICM2OTc2QjkgMCUsIHJnYmEoMTA1LCAxMTgsIDE4NSwgMC43NikgMTAwJSk7XG4gIGJveC1zaGFkb3c6IDBweCA1cHggMTBweCByZ2JhKDczLCA3MywgNzMsIDAuMjUpO1xuXG4gIC50b3AtYm9keSB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcblxuICAgIC50ZXh0IHtcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAzZW07XG4gICAgICBmb250LWZhbWlseTogUG9wcGlucztcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICB9XG4gIH1cbn1cblxuLmN1cy1zZWFyY2gtYmFyIHtcbiAgLS1ib3JkZXItcmFkaXVzOiAzMHB4O1xuICAtLWJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIC0tYm94LXNoYWRvdzogaW5zZXQgMHB4IDNweCA3cHggcmdiYSgxNjYsIDE2NiwgMTY2LCAwLjI1KTtcblxufVxuXG5pb24tZ3JpZCB7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5sb2FkZXJDb250YWluZXIge1xuICBtaW4taGVpZ2h0OiA1MHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuXG4uc2Nyb2xsRGl2IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDE4MHB4O1xuICBsZWZ0OiAycHg7XG4gIGJvdHRvbTogMnB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuIl19 */");

/***/ }),

/***/ 10522:
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/contactlist/contactlist.page.html ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-grid>\n  <div class=\"top-container\">\n    <div class=\"top-body\">\n      <div [routerLink]=\"['/main']\" class=\"icon\">\n        <ion-icon src=\"assets/icon/back-icon.svg\"></ion-icon>\n      </div>\n      <div class=\"text\">Play Game</div>\n    </div>\n  </div>\n\n\n  <ion-row>\n    <ion-searchbar show-cancel-button=\"focus\" class=\"cus-search-bar\" placeholder=\"  Search by Name or User Name\"\n    (ionChange)=\"onSearchByUsername($event)\" (ionCancel)=\"onCancelSearch()\"></ion-searchbar>\n  </ion-row>\n\n\n  <div *ngIf=\"showFilterPageLoader\" class=\"loaderContainer\">\n    <div class=\"loader1\"></div>\n    <!-- <div *ngIf=\"!freindList.length\">No Record Found</div> -->\n\n  </div>\n\n  <ion-row *ngIf=\"!showUserList && !showFilterPageLoader\">\n    <ion-col size=\"12\">\n      <div class=\"card\" style=\"max-height: 60vh; overflow-y: auto;\">\n        <ion-list style=\"margin-bottom: 70px;\">\n          <ion-item-sliding id=\"item100\" class=\"mt-2\" *ngFor=\"let friend of freindList\">\n            <ion-item>\n              <ion-label>\n                <h2>{{friend.user_name}}</h2>\n              </ion-label>\n              <ion-button class=\"cus-btn\" slot=\"end\" (click)=\"selectDifficultyLevel(friend.id)\"> Play </ion-button>\n            </ion-item>\n\n            <ion-item-options side=\"end\">\n              <ion-item-option color=\"danger\" (click)=\"onDelFriend(friend.id)\">\n                <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n              </ion-item-option>\n            </ion-item-options>\n          </ion-item-sliding>\n        </ion-list>\n\n        <div class=\"mt-45 align-end\" style=\"position: absolute; bottom:10px; right:25px;\">\n          <ion-button (click)=\"onRandomPlay()\" class=\"cus-btn-lg \"><b>+ Play Random</b> </ion-button>\n        </div>\n      </div>\n    </ion-col>\n  </ion-row>\n\n  <ion-row *ngIf=\"showUserList\">\n    <ion-col size=\"12\" *ngIf=\"usernameSearchRes.length\">\n      <div class=\"scrollDiv\">\n        <ion-item (click)=\"openDialogBox(name)\" *ngFor=\"let name of usernameSearchRes\">\n          <ion-label>\n            <h2>{{name.user_name}}</h2>\n          </ion-label>\n        </ion-item>\n      </div>\n    </ion-col>\n    <ion-col *ngIf=\"!usernameSearchRes.length\">\n      <p>No user Found</p>\n    </ion-col>\n  </ion-row>\n</ion-grid>");

/***/ })

}]);
//# sourceMappingURL=src_app_main_contactlist_contactlist_module_ts.js.map