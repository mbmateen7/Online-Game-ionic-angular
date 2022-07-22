(self["webpackChunkpic_playce"] = self["webpackChunkpic_playce"] || []).push([["src_app_main_filter_filter_module_ts"],{

/***/ 8668:
/*!******************************************************!*\
  !*** ./src/app/main/filter/filter-routing.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterPageRoutingModule": () => (/* binding */ FilterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _filter_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter.page */ 97643);




const routes = [
    {
        path: '',
        component: _filter_page__WEBPACK_IMPORTED_MODULE_0__.FilterPage
    }
];
let FilterPageRoutingModule = class FilterPageRoutingModule {
};
FilterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], FilterPageRoutingModule);



/***/ }),

/***/ 98938:
/*!**********************************************!*\
  !*** ./src/app/main/filter/filter.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterPageModule": () => (/* binding */ FilterPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-dragula */ 88989);
/* harmony import */ var _filter_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter-routing.module */ 8668);
/* harmony import */ var _filter_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter.page */ 97643);









let FilterPageModule = class FilterPageModule {
};
FilterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _filter_routing_module__WEBPACK_IMPORTED_MODULE_0__.FilterPageRoutingModule,
            ng2_dragula__WEBPACK_IMPORTED_MODULE_7__.DragulaModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        providers: [ng2_dragula__WEBPACK_IMPORTED_MODULE_7__.DragulaService],
        declarations: [_filter_page__WEBPACK_IMPORTED_MODULE_1__.FilterPage],
    })
], FilterPageModule);



/***/ }),

/***/ 97643:
/*!********************************************!*\
  !*** ./src/app/main/filter/filter.page.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterPage": () => (/* binding */ FilterPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_filter_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./filter.page.html */ 43536);
/* harmony import */ var _filter_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter.page.scss */ 43240);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_service_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/rest.service */ 90421);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ 91704);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng2-dragula */ 88989);
/* harmony import */ var _ionic_native_spinner_dialog_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/spinner-dialog/ngx */ 32423);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ 88259);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_service_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/user.service */ 84981);














let FilterPage = class FilterPage {
    constructor(restService, navCtrl, alertController, router, changeDetection, route, dragulaService, loadingController, spinnerDialog, userService) {
        this.restService = restService;
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.router = router;
        this.changeDetection = changeDetection;
        this.route = route;
        this.dragulaService = dragulaService;
        this.loadingController = loadingController;
        this.spinnerDialog = spinnerDialog;
        this.userService = userService;
        this.isLoading = true;
        this.filter_id = null;
        this.sequence = ['toHide', 'toHide1', 'toHide2', 'toHide3'];
        this.sequence1 = [
            'toHide',
            'toHide1',
            'toHide2',
            'toHide3',
            'toHide4',
            'toHide5',
            'toHide6',
            'toHide7',
            'toHide8',
        ];
        this.rotations = {
            toHide: 4,
            toHide1: 4,
            toHide2: 4,
            toHide3: 4,
        };
        this.rotations1 = {
            toHide: 4,
            toHide1: 4,
            toHide2: 4,
            toHide3: 4,
            toHide4: 4,
            toHide5: 4,
            toHide6: 4,
            toHide7: 4,
            toHide8: 4,
        };
        this.cameraImage = null;
        this.isPuzzleSolved = false;
        this.primaryFilter = '';
        this.buttons = 'default';
        this.selection = 'primary';
        this.secondaryValues = {
            numbers: {
                grayscale: 0,
                hue_rotate: 0,
                invert: 0,
                sepia: 0,
                saturate: 100,
                opacity: 100,
                brightness: 100,
                contrast: 100,
                blur: 0,
            },
            ranges: {
                grayscale: {
                    min: 0,
                    max: 100,
                    step: 1,
                    sliderValue: 0,
                },
                hue_rotate: {
                    min: 0,
                    max: 180,
                    step: 1,
                    sliderValue: 0,
                },
                invert: {
                    min: 0,
                    max: 90,
                    step: 30,
                },
                sepia: {
                    min: 0,
                    max: 100,
                    step: 1,
                    sliderValue: 0,
                },
                saturate: {
                    min: 0,
                    max: 200,
                    step: 1,
                    sliderValue: 0,
                },
                opacity: {
                    min: 50,
                    max: 100,
                    step: 1,
                    sliderValue: 0,
                },
                brightness: {
                    min: 50,
                    max: 200,
                    step: 1,
                    sliderValue: 0,
                },
                contrast: {
                    min: 50,
                    max: 200,
                    step: 1,
                    sliderValue: 0,
                },
                blur: {
                    min: 0,
                    max: 5,
                    step: 1,
                    sliderValue: 0,
                },
            },
        };
        this.secondaryFilterValues = [
            'grayscale(100%)',
            'hue-rotate(180deg)',
            'invert(90%)',
            'sepia(100%)',
            'saturate(200%)',
            'opacity(50%)',
            'brightness(200%)',
            'contrast(200%)',
            'blur(5px)',
        ];
        this.lastValue = 0;
        this.lettersArr = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormArray([]);
        this.type = 'easy';
        this.hintWord = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required);
        this.showWordSection = false;
        this.proSecondaryFilters = [
            'grayscale',
            'hue_rotate',
            'invert',
            'sepia',
            'saturate',
        ];
        this.primeSecondaryFilters = ['opacity', 'brightness', 'contrast', 'blur'];
        this.sendGameLoader = false;
        this.hideImage = false;
    }
    ionViewDidEnter() {
        this.dragulaService
            .drop('totalPiece')
            .subscribe(({ name, el, target, source, sibling }) => {
            if (this.gameType == 'easy') {
                const targetIndex = this.sequence.indexOf(target.className.split(' ')[0]);
                const sourceIndex = this.sequence.indexOf(source.className.split(' ')[0]);
                this.sequence[targetIndex] = source.className.split(' ')[0];
                this.sequence[sourceIndex] = target.className.split(' ')[0];
                const swappee = jquery__WEBPACK_IMPORTED_MODULE_3__(target).find('canvas').not(el);
                swappee.appendTo(source);
                let temp = source.className;
                source.className = target.className;
                target.className = temp;
                this.autoSwap();
            }
            if (this.gameType == 'medium') {
                const targetIndex = this.sequence1.indexOf(target.className.split(' ')[0]);
                const sourceIndex = this.sequence1.indexOf(source.className.split(' ')[0]);
                this.sequence1[targetIndex] =
                    source.className.split(' ')[0];
                this.sequence1[sourceIndex] =
                    target.className.split(' ')[0];
                const swappee = jquery__WEBPACK_IMPORTED_MODULE_3__(target).find('canvas').not(el);
                swappee.appendTo(source);
                let temp = source.className;
                source.className = target.className;
                target.className = temp;
                this.autoSwap1();
            }
        });
        this.userService.userData.subscribe((res) => {
            this.ownedItemsList = JSON.parse(localStorage.getItem('ownedItemsList'));
        });
        this.user = JSON.parse(localStorage.getItem('user'));
        let str1 = localStorage.getItem('base64String1');
        let str2 = localStorage.getItem('base64String2');
        this.cameraImage = str1.concat(str2);
        this.cameraImage = 'data:image/jpeg;base64,' + this.cameraImage;
        this.userId = this.route.snapshot.paramMap.get('userId');
        this.gameType = this.route.snapshot.paramMap.get('gameType');
        if (this.gameType) {
            localStorage.setItem('GameType', this.gameType);
        }
        if (!this.gameType) {
            this.gameType = localStorage.getItem('GameType');
        }
        this.compressImage(this.cameraImage, 100, 100).then((compressed) => {
            this.cameraImageThumbnail = compressed;
        });
        this.filterList = [];
        this.secondaryFilterList = [];
        this.filterList = JSON.parse(localStorage.getItem('filterList'));
        this.secondaryFilterList = JSON.parse(localStorage.getItem('secondaryList'));
        this.ownedItemsList = JSON.parse(localStorage.getItem('ownedItemsList'));
    }
    ionViewWillEnter() {
        // this.filterList = JSON.parse(localStorage.getItem('filterList'));
        // this.secondaryFilterList = JSON.parse(localStorage.getItem('secondaryList'));
        // this.ownedItemsList = JSON.parse(localStorage.getItem('ownedItemsList'));
        // console.log('ownedItemsList', this.ownedItemsList)
        // location.reload();
    }
    ngOnInit() {
        // this.restService.getRequest('shop/AllFilterList').subscribe((res: any) => {
        //   this.spinnerDialog.show();
        //   if (res.status) {
        //     this.filterList = [];
        //     this.secondaryFilterList = []
        //     for (let i = 0; i < res.message.length; i++) {
        //       if (res.message[i].type == 'primary') {
        //         this.filterList.push(res.message[i])
        //       }
        //       if (res.message[i].type == 'secondary') {
        //         this.secondaryFilterList.push(res.message[i])
        //       }
        //     }
        //     console.log('FilterList', this.filterList);
        //     console.log('SecondatyList', this.secondaryFilterList);
        //   }
        //   this.restService.getRequest('shop/purchase-detail').subscribe((res: any) => {
        //     this.ownedItemsList = res.message;
        //     console.log('this.ownedItemsList', this.ownedItemsList);
        //     this.isLoading = false;
        //     this.spinnerDialog.hide();
        //   });
        // })
    }
    presentAlertForShop(header, body, paramObj) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: header,
                message: body,
                buttons: [
                    {
                        text: 'Yes',
                        handler: () => {
                            this.router.navigate([
                                'main/store',
                                { params: JSON.stringify(paramObj) },
                            ]);
                        },
                    },
                    {
                        text: 'No',
                    },
                ],
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
        });
    }
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
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
    onSendGame() {
        this.sendGameLoader = true;
        var finalCanvas = (document.createElement('canvas'));
        var finalContext = finalCanvas.getContext('2d');
        finalCanvas.width = 360;
        finalCanvas.height = 360;
        let finalList = [];
        let children = jquery__WEBPACK_IMPORTED_MODULE_3__('.' + this.sequence[0]).children('canvas');
        let children1 = jquery__WEBPACK_IMPORTED_MODULE_3__('.' + this.sequence[1]).children('canvas');
        let children2 = jquery__WEBPACK_IMPORTED_MODULE_3__('.' + this.sequence[2]).children('canvas');
        let children3 = jquery__WEBPACK_IMPORTED_MODULE_3__('.' + this.sequence[3]).children('canvas');
        children.each(function () {
            let id = jquery__WEBPACK_IMPORTED_MODULE_3__(this).attr('id');
            finalList.push(id);
        });
        children1.each(function () {
            let id = jquery__WEBPACK_IMPORTED_MODULE_3__(this).attr('id');
            finalList.push(id);
        });
        children2.each(function () {
            let id = jquery__WEBPACK_IMPORTED_MODULE_3__(this).attr('id');
            finalList.push(id);
        });
        children3.each(function () {
            let id = jquery__WEBPACK_IMPORTED_MODULE_3__(this).attr('id');
            finalList.push(id);
        });
        // console.log('Final List', finalList)
        finalContext.drawImage(document.getElementById(finalList[0]), 0, 0);
        finalContext.drawImage(document.getElementById(finalList[1]), finalCanvas.width / 2, 0);
        finalContext.drawImage(document.getElementById(finalList[2]), 0, finalCanvas.height / 2);
        finalContext.drawImage(document.getElementById(finalList[3]), finalCanvas.width / 2, finalCanvas.height / 2);
        var finalSource = finalCanvas.toDataURL('image/jpeg');
        localStorage.setItem('puzzleImage', finalSource);
        const gameObj = {
            friend_id: this.userId,
            type: this.gameType,
            word: this.hintWord.value,
            swap_sequence: JSON.stringify(this.sequence),
            rotate_sequence: JSON.stringify(this.rotations),
            p_image: finalSource,
            image: this.cameraImage,
            filter_id: this.filter_id,
            secondary_values: JSON.stringify(this.secondaryValues),
        };
        // this.sequence = ['toHide', 'toHide1', 'toHide2', 'toHide3'];
        // this.rotations = {
        //   'toHide': 4, 'toHide1': 4, 'toHide2': 4, 'toHide3': 4
        // };
        // console.log('sendGameLoader', this.sendGameLoader)
        this.router
            .navigate(['send-game', { gameObj: JSON.stringify(gameObj) }], {
            replaceUrl: true,
        })
            .then((res) => {
            if (res) {
                this.sendGameLoader = false;
            }
        });
    }
    onSendGame1() {
        let pictureWidth;
        let pictureHeight;
        // this.audioService.play("buttonPress1");
        // var originalImage = $("#originalImage");
        let newImage = new Image();
        newImage.src = this.cameraImage;
        pictureWidth = 630;
        pictureHeight = 630;
        var w2 = pictureWidth / 3 - 10, h2 = pictureHeight / 3 - 10;
        var finalCanvas = (document.createElement('canvas'));
        var finalContext = finalCanvas.getContext('2d');
        // finalCanvas.width = this.imageWidth - 10;
        // finalCanvas.height = this.imageWidth - 10;
        finalCanvas.width = 600;
        finalCanvas.height = 600;
        let finalList = [];
        let children = jquery__WEBPACK_IMPORTED_MODULE_3__('.' + this.sequence1[0]).children('canvas');
        let children1 = jquery__WEBPACK_IMPORTED_MODULE_3__('.' + this.sequence1[1]).children('canvas');
        let children2 = jquery__WEBPACK_IMPORTED_MODULE_3__('.' + this.sequence1[2]).children('canvas');
        let children3 = jquery__WEBPACK_IMPORTED_MODULE_3__('.' + this.sequence1[3]).children('canvas');
        let children4 = jquery__WEBPACK_IMPORTED_MODULE_3__('.' + this.sequence1[4]).children('canvas');
        let children5 = jquery__WEBPACK_IMPORTED_MODULE_3__('.' + this.sequence1[5]).children('canvas');
        let children6 = jquery__WEBPACK_IMPORTED_MODULE_3__('.' + this.sequence1[6]).children('canvas');
        let children7 = jquery__WEBPACK_IMPORTED_MODULE_3__('.' + this.sequence1[7]).children('canvas');
        let children8 = jquery__WEBPACK_IMPORTED_MODULE_3__('.' + this.sequence1[8]).children('canvas');
        children.each(function () {
            let id = jquery__WEBPACK_IMPORTED_MODULE_3__(this).attr('id');
            finalList.push(id);
        });
        children1.each(function () {
            let id = jquery__WEBPACK_IMPORTED_MODULE_3__(this).attr('id');
            finalList.push(id);
        });
        children2.each(function () {
            let id = jquery__WEBPACK_IMPORTED_MODULE_3__(this).attr('id');
            finalList.push(id);
        });
        children3.each(function () {
            let id = jquery__WEBPACK_IMPORTED_MODULE_3__(this).attr('id');
            finalList.push(id);
        });
        children4.each(function () {
            let id = jquery__WEBPACK_IMPORTED_MODULE_3__(this).attr('id');
            finalList.push(id);
        });
        children5.each(function () {
            let id = jquery__WEBPACK_IMPORTED_MODULE_3__(this).attr('id');
            finalList.push(id);
        });
        children6.each(function () {
            let id = jquery__WEBPACK_IMPORTED_MODULE_3__(this).attr('id');
            finalList.push(id);
        });
        children7.each(function () {
            let id = jquery__WEBPACK_IMPORTED_MODULE_3__(this).attr('id');
            finalList.push(id);
        });
        children8.each(function () {
            let id = jquery__WEBPACK_IMPORTED_MODULE_3__(this).attr('id');
            finalList.push(id);
        });
        finalContext.drawImage(document.getElementById(finalList[0]), 0, 0);
        finalContext.drawImage(document.getElementById(finalList[1]), w2, 0);
        finalContext.drawImage(document.getElementById(finalList[2]), w2 * 2, 0);
        finalContext.drawImage(document.getElementById(finalList[3]), 0, h2);
        finalContext.drawImage(document.getElementById(finalList[4]), w2, h2);
        finalContext.drawImage(document.getElementById(finalList[5]), w2 * 2, h2);
        finalContext.drawImage(document.getElementById(finalList[6]), 0, h2 * 2);
        finalContext.drawImage(document.getElementById(finalList[7]), w2, h2 * 2);
        finalContext.drawImage(document.getElementById(finalList[8]), w2 * 2, h2 * 2);
        var finalSource = finalCanvas.toDataURL('image/jpeg');
        localStorage.setItem('puzzleImage', finalSource);
        const gameObj = {
            friend_id: this.userId,
            type: this.gameType,
            swap_sequence: JSON.stringify(this.sequence1),
            rotate_sequence: JSON.stringify(this.rotations1),
            p_image: finalSource,
            image: this.cameraImage,
            filter_id: this.filter_id,
            secondary_values: JSON.stringify(this.secondaryValues),
        };
        this.router
            .navigate(['send-game', { gameObj: JSON.stringify(gameObj) }], {
            replaceUrl: true,
        })
            .then((res) => {
            if (res) {
                this.sendGameLoader = false;
            }
        });
    }
    Crop() {
        this.hideImage = false;
        let originalImage = jquery__WEBPACK_IMPORTED_MODULE_3__('#originalImage');
        let self = this;
        let pictureWidth;
        let pictureHeight;
        let newImage = new Image();
        newImage.src = this.cameraImage;
        newImage.width = originalImage.width();
        newImage.height = originalImage.width();
        //this.imageWidth = originalImage.width();
        newImage.onload = function () {
            pictureWidth = originalImage.width();
            pictureHeight = originalImage.width();
            var w2 = pictureWidth / 2, h2 = pictureHeight / 2, parts = [];
            var count = 0;
            for (var i = 0; i < 4; i++) {
                count = i + 1;
                var canvas = (document.getElementById('canvas' + count));
                var ctx = canvas.getContext('2d');
                var x = (-w2 * i) % (w2 * 2), y = h2 * i <= h2 ? 0 : -h2;
                canvas.width = w2;
                canvas.height = h2;
                if (i == 3) {
                    self.imageWidth = canvas.width + canvas.width;
                }
                ctx.drawImage(newImage, x, y, w2 * 2, h2 * 2);
            }
        }; //end of onload function
        this.hideImage = true;
        // var x = document.getElementById("originalImage");
        // x.style.display = "none"
        // $("#originalImage").css("display", "none");
    }
    Crop1() {
        let originalImage = jquery__WEBPACK_IMPORTED_MODULE_3__('#originalImage');
        this.hideImage = false;
        let self = this;
        let pictureWidth;
        let pictureHeight;
        let newImage = new Image();
        newImage.src = this.cameraImage;
        // newImage.width = originalImage.width();
        // newImage.height = originalImage.height();
        //this.imageWidth = originalImage.width();
        newImage.onload = function () {
            pictureWidth = newImage.width;
            pictureHeight = newImage.height;
            var w2 = pictureWidth / 3, h2 = pictureHeight / 3, parts = [];
            var canvas = (document.getElementById('canvas1'));
            var ctx = canvas.getContext('2d');
            // console.log('canvas width', canvas.width, 'canvas height', canvas.height);
            ctx.drawImage(newImage, 0, 0, w2, h2, 0, 0, canvas.width, canvas.height);
            canvas = document.getElementById('canvas2');
            ctx = canvas.getContext('2d');
            // console.log('canvas width', canvas.width, 'canvas height', canvas.height);
            ctx.drawImage(newImage, w2, 0, w2, h2, 0, 0, canvas.width, canvas.height);
            (canvas = document.getElementById('canvas3')),
                (ctx = canvas.getContext('2d'));
            // console.log('canvas width', canvas.width, 'canvas height', canvas.height);
            ctx.drawImage(newImage, w2 * 2, 0, w2, h2, 0, 0, canvas.width, canvas.height);
            (canvas = document.getElementById('canvas4')),
                (ctx = canvas.getContext('2d'));
            // console.log('canvas width', canvas.width, 'canvas height', canvas.height);
            ctx.drawImage(newImage, 0, h2, w2, h2, 0, 0, canvas.width, canvas.height);
            (canvas = document.getElementById('canvas5')),
                (ctx = canvas.getContext('2d'));
            // console.log('canvas width', canvas.width, 'canvas height', canvas.height);
            ctx.drawImage(newImage, w2, h2, w2, h2, 0, 0, canvas.width, canvas.height);
            (canvas = document.getElementById('canvas6')),
                (ctx = canvas.getContext('2d'));
            // console.log('canvas width', canvas.width, 'canvas height', canvas.height);
            ctx.drawImage(newImage, w2 * 2, h2, w2, h2, 0, 0, canvas.width, canvas.height);
            (canvas = document.getElementById('canvas7')),
                (ctx = canvas.getContext('2d'));
            // console.log('canvas width', canvas.width, 'canvas height', canvas.height);
            ctx.drawImage(newImage, 0, h2 * 2, w2, h2, 0, 0, canvas.width, canvas.height);
            (canvas = document.getElementById('canvas8')),
                (ctx = canvas.getContext('2d'));
            // console.log('canvas width', canvas.width, 'canvas height', canvas.height);
            ctx.drawImage(newImage, w2, h2 * 2, w2, h2, 0, 0, canvas.width, canvas.height);
            var canvas = (document.getElementById('canvas9')), ctx = canvas.getContext('2d');
            // console.log('canvas width', canvas.width, 'canvas height', canvas.height);
            ctx.drawImage(newImage, w2 * 2, h2 * 2, w2, h2, 0, 0, canvas.width, canvas.height);
            self.imageWidth = canvas.width;
            self.imageHeight = canvas.height;
            // for (var i = 0; i < 4; i++) {
            //   var count = i + 1;
            //   var canvas: any = <HTMLCanvasElement>(
            //       document.getElementById("canvas" + count)
            //     ),
            //     ctx: any = canvas.getContext("2d");
            //   var x = (-w2 * i) % (w2 * 2),
            //     y = h2 * i <= h2 ? 0 : -h2;
            //   canvas.width = w2;
            //   canvas.height = h2;
            //   if (i == 3) {
            //     self.imageWidth = canvas.width + canvas.width;
            //   }
            //   console.log('x',x, 'y', y, 'width',  w2 * 2, 'height', h2 * 2);
            //   ctx.drawImage(newImage, x, y, w2 * 2, h2 * 2);
            // }
        };
        //end of onload function
        this.hideImage = true;
        jquery__WEBPACK_IMPORTED_MODULE_3__('#originalImage1').css('display', 'none');
    }
    Rotate(index, c) {
        this.rotations[c]++;
        var canvas = (document.getElementById('canvas' + index)), context = canvas.getContext('2d'), pictureWidth = canvas.width, pictureHeight = canvas.height;
        pictureWidth = pictureWidth * 2;
        pictureHeight = pictureHeight * 2;
        context.save();
        context.translate(pictureWidth / 4, pictureHeight / 4);
        context.rotate(Math.PI / 2);
        context.drawImage(canvas, -pictureWidth / 4, -pictureHeight / 4, pictureWidth / 2, pictureHeight / 2);
        context.restore();
    }
    Rotate1(index, c) {
        this.rotations1[c]++;
        var canvas = (document.getElementById('canvas' + index)), context = canvas.getContext('2d'), pictureWidth = canvas.width, pictureHeight = canvas.height;
        pictureWidth = pictureWidth * 2;
        pictureHeight = pictureHeight * 2;
        context.save();
        context.translate(pictureWidth / 4, pictureHeight / 4);
        context.rotate(Math.PI / 2);
        context.drawImage(canvas, -pictureWidth / 4, -pictureHeight / 4, pictureWidth / 2, pictureHeight / 2);
        context.restore();
        // this.audioService.play("rotatingTile");
    }
    checkOwnedFilter(filter) {
        return this.ownedItemsList.find((x) => x.filter_id == filter.id);
    }
    sliderChanged(event) {
        // console.log("slider event", event.detail.value);
        this.secondaryValues.numbers[this.secondaryFilterSelected] =
            event.detail.value;
        // console.log('this.secondaryValues', this.secondaryValues);
        //alert(JSON.stringify(this.secondaryValues.numbers));
        //remember to set initial value of slider to number in json object
    }
    segmentChanged(ev) {
        this.spinnerDialog.show();
        //alert(ev.value);
        this.selection = ev;
        this.changeDetection.detectChanges();
        this.spinnerDialog.hide();
    }
    revertButtons(cancel = 'no') {
        if (cancel == 'cancel') {
            this.secondaryValues.ranges[this.secondaryFilterSelected].sliderValue = this.lastValue;
            this.secondaryValues.numbers[this.secondaryFilterSelected] =
                this.lastValue;
        }
        this.buttons = 'default';
    }
    makeFormGroup(arr) {
        return this.lettersArr.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''));
    }
    compressImage(src, newX, newY) {
        return new Promise((res, rej) => {
            const img = new Image();
            img.src = src;
            img.onload = () => {
                const elem = document.createElement('canvas');
                elem.width = newX;
                elem.height = newY;
                const ctx = elem.getContext('2d');
                ctx.drawImage(img, 0, 0, newX, newY);
                const data = ctx.canvas.toDataURL();
                res(data);
            };
            img.onerror = (error) => rej(error);
        });
    }
    autoSwap() {
        const children = jquery__WEBPACK_IMPORTED_MODULE_3__('.toHide').children('canvas');
        let childrenCount = 0;
        const children1 = jquery__WEBPACK_IMPORTED_MODULE_3__('.toHide1').children('canvas');
        let children1Count = 0;
        const children2 = jquery__WEBPACK_IMPORTED_MODULE_3__('.toHide2').children('canvas');
        let children2Count = 0;
        const children3 = jquery__WEBPACK_IMPORTED_MODULE_3__('.toHide3').children('canvas');
        let children3Count = 0;
        children.each(function () {
            const id = jquery__WEBPACK_IMPORTED_MODULE_3__(this).attr('id');
            childrenCount++;
        });
        // console.log('check this count ', childrenCount);
        children1.each(function () {
            const id = jquery__WEBPACK_IMPORTED_MODULE_3__(this).attr('id');
            children1Count++;
        });
        // console.log('check this count ', children1Count);
        children2.each(function () {
            const id = jquery__WEBPACK_IMPORTED_MODULE_3__(this).attr('id');
            children2Count++;
        });
        // console.log('check this count ', children2Count);
        children3.each(function () {
            const id = jquery__WEBPACK_IMPORTED_MODULE_3__(this).attr('id');
            children3Count++;
        });
        // console.log('check this count ', children3Count);
        let swapIn;
        let swapOut;
        if (childrenCount == 0) {
            swapIn = jquery__WEBPACK_IMPORTED_MODULE_3__('.toHide');
        }
        if (children1Count == 0) {
            swapIn = jquery__WEBPACK_IMPORTED_MODULE_3__('.toHide1');
        }
        if (children2Count == 0) {
            swapIn = jquery__WEBPACK_IMPORTED_MODULE_3__('.toHide2');
        }
        if (children3Count == 0) {
            swapIn = jquery__WEBPACK_IMPORTED_MODULE_3__('.toHide3');
        }
        if (childrenCount == 2) {
            swapOut = children;
        }
        if (children1Count == 2) {
            swapOut = children1;
        }
        if (children2Count == 2) {
            swapOut = children2;
        }
        if (children3Count == 2) {
            swapOut = children3;
        }
        if (swapIn && swapOut) {
            swapIn.append(swapOut[0]);
            // console.log('swapping');
        }
    }
    autoSwap1() {
        const children = jquery__WEBPACK_IMPORTED_MODULE_3__('.toHide').children('canvas');
        let childrenCount = 0;
        const children1 = jquery__WEBPACK_IMPORTED_MODULE_3__('.toHide1').children('canvas');
        let children1Count = 0;
        const children2 = jquery__WEBPACK_IMPORTED_MODULE_3__('.toHide2').children('canvas');
        let children2Count = 0;
        const children3 = jquery__WEBPACK_IMPORTED_MODULE_3__('.toHide3').children('canvas');
        let children3Count = 0;
        const children4 = jquery__WEBPACK_IMPORTED_MODULE_3__('.toHide4').children('canvas');
        let children4Count = 0;
        const children5 = jquery__WEBPACK_IMPORTED_MODULE_3__('.toHide5').children('canvas');
        let children5Count = 0;
        const children6 = jquery__WEBPACK_IMPORTED_MODULE_3__('.toHide6').children('canvas');
        let children6Count = 0;
        const children7 = jquery__WEBPACK_IMPORTED_MODULE_3__('.toHide7').children('canvas');
        let children7Count = 0;
        const children8 = jquery__WEBPACK_IMPORTED_MODULE_3__('.toHide8').children('canvas');
        let children8Count = 0;
        children.each(function () {
            const id = jquery__WEBPACK_IMPORTED_MODULE_3__(this).attr('id');
            childrenCount++;
        });
        // console.log('check this count ', childrenCount);
        children1.each(function () {
            const id = jquery__WEBPACK_IMPORTED_MODULE_3__(this).attr('id');
            children1Count++;
        });
        // console.log('check this count ', children1Count);
        children2.each(function () {
            const id = jquery__WEBPACK_IMPORTED_MODULE_3__(this).attr('id');
            children2Count++;
        });
        // console.log('check this count ', children2Count);
        children3.each(function () {
            const id = jquery__WEBPACK_IMPORTED_MODULE_3__(this).attr('id');
            children3Count++;
        });
        // console.log('check this count ', children3Count);
        children4.each(function () {
            const id = jquery__WEBPACK_IMPORTED_MODULE_3__(this).attr('id');
            children4Count++;
        });
        // console.log('check this count ', children3Count);
        children5.each(function () {
            const id = jquery__WEBPACK_IMPORTED_MODULE_3__(this).attr('id');
            children5Count++;
        });
        // console.log('check this count ', children3Count);
        children6.each(function () {
            const id = jquery__WEBPACK_IMPORTED_MODULE_3__(this).attr('id');
            children6Count++;
        });
        // console.log('check this count ', children3Count);
        children7.each(function () {
            const id = jquery__WEBPACK_IMPORTED_MODULE_3__(this).attr('id');
            children7Count++;
        });
        // console.log('check this count ', children3Count);
        children8.each(function () {
            const id = jquery__WEBPACK_IMPORTED_MODULE_3__(this).attr('id');
            children8Count++;
        });
        // console.log('check this count ', children3Count);
        let swapIn;
        let swapOut;
        if (childrenCount == 0) {
            swapIn = jquery__WEBPACK_IMPORTED_MODULE_3__('.toHide');
        }
        if (children1Count == 0) {
            swapIn = jquery__WEBPACK_IMPORTED_MODULE_3__('.toHide1');
        }
        if (children2Count == 0) {
            swapIn = jquery__WEBPACK_IMPORTED_MODULE_3__('.toHide2');
        }
        if (children3Count == 0) {
            swapIn = jquery__WEBPACK_IMPORTED_MODULE_3__('.toHide3');
        }
        if (childrenCount == 2) {
            swapOut = children;
        }
        if (children1Count == 2) {
            swapOut = children1;
        }
        if (children2Count == 2) {
            swapOut = children2;
        }
        if (children3Count == 2) {
            swapOut = children3;
        }
        if (swapIn && swapOut) {
            swapIn.append(swapOut[0]);
            // console.log('swapping');
        }
    }
    changePrimary(filter) {
        this.spinnerDialog.show();
        let res = this.ownedItemsList.filter((x) => x.filter_id == filter.id);
        if (res.length) {
            this.spinnerDialog.hide();
            this.primaryFilter = filter.name;
            this.filter_id = filter.id;
        }
        else {
            this.spinnerDialog.hide();
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
                text: 'Would you like to purchase this filter?',
                confirmButtonText: 'Yes',
                confirmButtonColor: '#99C43C',
                allowOutsideClick: true,
                showCancelButton: true,
                // backdrop: true,
            }).then((res) => {
                if (res.isConfirmed) {
                    // this.router.navigate(['main/store', { filter: trfilter: true }])
                    this.navCtrl.navigateForward(['main/store'], {
                        queryParams: { filterData: JSON.stringify(filter) },
                    });
                }
            });
            // this.presentAlertForShop('Sorry', 'Yo do not have this filter want to buy?', filter)
        }
    }
    changeButtons(filter) {
        this.spinnerDialog.show();
        let res = this.ownedItemsList.filter((x) => x.filter_id == filter.id);
        if (res.length) {
            this.spinnerDialog.hide();
            if (filter.name == 'hue-rotate') {
                filter.name = 'hue_rotate';
            }
            this.secondaryFilterSelected = filter.name;
            jquery__WEBPACK_IMPORTED_MODULE_3__('ion-range').attr('value', this.secondaryValues.numbers[filter.name]);
            this.secondaryValues.ranges[this.secondaryFilterSelected].sliderValue =
                this.secondaryValues.numbers[this.secondaryFilterSelected];
            this.lastValue =
                this.secondaryValues.numbers[this.secondaryFilterSelected];
            this.buttons = 'secondary';
        }
        else {
            if (filter.name == 'hue-rotate') {
                filter = 'hue_rotate';
            }
            let hasItem = false;
            let selectedFilter;
            let selectedOwnedFilter;
            for (let i = 0; i < this.proSecondaryFilters.length; i++) {
                if (this.proSecondaryFilters[i] == filter.name) {
                    selectedFilter = 'proSecondaryFilter';
                    selectedOwnedFilter = 'ProSecondaryFilter';
                }
            }
            for (let i = 0; i < this.primeSecondaryFilters.length; i++) {
                if (this.primeSecondaryFilters[i] == filter.name) {
                    selectedFilter = 'primeSecondaryFilter';
                    selectedOwnedFilter = 'PrimeSecondaryFilter';
                }
            }
            for (let i = 0; i < this.ownedItemsList.length; i++) {
                if (this.ownedItemsList[i].name == selectedOwnedFilter) {
                    hasItem = true;
                }
            }
            if (hasItem == true) {
                if (filter == 'hue_rotate') {
                    filter = 'hue-rotate';
                }
            }
            else {
                if (filter == 'hue_rotate') {
                    filter = 'hue-rotate';
                }
                this.spinnerDialog.hide();
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
                    text: 'You Want to purchase?',
                    confirmButtonText: 'Yes',
                    confirmButtonColor: '#99C43C',
                    allowOutsideClick: true,
                    showCancelButton: true,
                    // backdrop: true,
                }).then((res) => {
                    if (res.isConfirmed) {
                        // this.router.navigate(['main/store', { filter: trfilter: true }])
                        this.navCtrl.navigateForward(['main/store'], {
                            queryParams: { filter: true },
                        });
                    }
                });
            }
        }
    }
    onNavigateEvent() {
        this.navCtrl.navigateBack('/contactlist');
    }
};
FilterPage.ctorParameters = () => [
    { type: src_app_service_rest_service__WEBPACK_IMPORTED_MODULE_2__.RestService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ChangeDetectorRef },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute },
    { type: ng2_dragula__WEBPACK_IMPORTED_MODULE_12__.DragulaService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.LoadingController },
    { type: _ionic_native_spinner_dialog_ngx__WEBPACK_IMPORTED_MODULE_4__.SpinnerDialog },
    { type: src_app_service_user_service__WEBPACK_IMPORTED_MODULE_6__.UserService }
];
FilterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-filter',
        template: _raw_loader_filter_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        viewProviders: [ng2_dragula__WEBPACK_IMPORTED_MODULE_12__.DragulaService],
        styles: [_filter_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FilterPage);



/***/ }),

/***/ 43240:
/*!**********************************************!*\
  !*** ./src/app/main/filter/filter.page.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("page-filters {\n  /* in-flight clone */\n  /* high-performance display:none; helper */\n  /* added to mirrorContainer (default = body) while dragging */\n  /* added to the source element while its mirror is dragged */\n}\npage-filters .slide-zoom {\n  color: #7d7d7d !important;\n  font-size: 13px !important;\n}\npage-filters .range-bar {\n  top: 27px !important;\n  height: 10px !important;\n}\npage-filters .range-knob {\n  width: 39px !important;\n  height: 39px !important;\n}\npage-filters .range-pin {\n  left: 10px !important;\n}\npage-filters .swiper-slide .slide-zoom {\n  width: auto !important;\n}\npage-filters ion-slides {\n  height: 35vh;\n}\npage-filters #back {\n  padding: 15px 15px 35px 15px;\n  position: relative;\n}\npage-filters #back-img {\n  margin: auto;\n  float: left;\n  height: auto;\n  width: 10%;\n}\npage-filters .gu-mirror {\n  position: fixed !important;\n  margin: 0 !important;\n  z-index: 9999 !important;\n  opacity: 0.8;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=80)\";\n  filter: alpha(opacity=80);\n  pointer-events: none;\n}\npage-filters .gu-hide {\n  left: -9999px !important;\n}\npage-filters .gu-unselectable {\n  -webkit-user-select: none !important;\n  user-select: none !important;\n}\npage-filters .gu-transit {\n  opacity: 0.2;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=20)\";\n  filter: alpha(opacity=20);\n}\npage-filters ion-content .scroll-content {\n  background: #000 !important;\n  overflow-y: hidden !important;\n}\n.toHide canvas:nth-child(2) {\n  display: none !important;\n}\n.toHide1 canvas:nth-child(2) {\n  display: none !important;\n}\n.toHide2 canvas:nth-child(2) {\n  display: none !important;\n}\n.toHide3 canvas:nth-child(2) {\n  display: none !important;\n}\n.spaceinrow {\n  display: flex;\n  justify-content: space-between;\n}\n#container canvas {\n  width: 100% !important;\n}\n.main-footer {\n  height: 50px;\n  width: 100%;\n  display: flex;\n  background: #8396d5 !important;\n}\n.main-footer ul {\n  display: flex;\n  width: 100%;\n  align-items: center;\n  justify-content: space-evenly;\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n.main-footer ul li a {\n  color: #fff;\n  text-decoration: none;\n  font-size: 16px;\n  font-weight: 500;\n}\n.selectedSegment {\n  font-weight: bold;\n  color: white;\n}\n.notSelected {\n  color: white;\n  opacity: 0.5;\n}\n.top-buttons-head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 20px;\n  background: linear-gradient(180deg, #6976B9 0%, rgba(105, 118, 185, 0.76) 100%);\n}\n.top-buttons-head .in-right button {\n  background: #0f77f0;\n  border-radius: 20px;\n  font-size: 14px;\n  padding: 0px 25px;\n}\n.cus-btn {\n  --background: #99c43c;\n  --border-radius: 30px;\n  width: auto;\n  font-size: 14px;\n  letter-spacing: 0.03em;\n}\n.loaderContainer {\n  min-height: 50vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbHRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUEwQ0Usb0JBQUE7RUFXQSwwQ0FBQTtFQUtBLDZEQUFBO0VBUUEsNERBQUE7QUE3REY7QUFKRTtFQUNFLHlCQUFBO0VBQ0EsMEJBQUE7QUFNSjtBQUhFO0VBQ0Usb0JBQUE7RUFDQSx1QkFBQTtBQUtKO0FBRkU7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0FBSUo7QUFERTtFQUNFLHFCQUFBO0FBR0o7QUFDSTtFQUNFLHNCQUFBO0FBQ047QUFHRTtFQUNFLFlBQUE7QUFESjtBQUlFO0VBQ0UsNEJBQUE7RUFDQSxrQkFBQTtBQUZKO0FBS0U7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBSEo7QUFPRTtFQUNFLDBCQUFBO0VBQ0Esb0JBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxpRUFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7QUFMSjtBQVNFO0VBQ0Usd0JBQUE7QUFQSjtBQVdFO0VBQ0Usb0NBQUE7RUFHQSw0QkFBQTtBQVRKO0FBYUU7RUFDRSxZQUFBO0VBQ0EsaUVBQUE7RUFDQSx5QkFBQTtBQVhKO0FBZUk7RUFDRSwyQkFBQTtFQUNBLDZCQUFBO0FBYk47QUFxQkE7RUFDRSx3QkFBQTtBQWxCRjtBQXFCQTtFQUNFLHdCQUFBO0FBbEJGO0FBcUJBO0VBQ0Usd0JBQUE7QUFsQkY7QUFxQkE7RUFDRSx3QkFBQTtBQWxCRjtBQXFCQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQWxCRjtBQXFCQTtFQUNFLHNCQUFBO0FBbEJGO0FBcUJBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUFsQkY7QUFvQkU7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBbEJKO0FBcUJNO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBbkJSO0FBd0JBO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0FBckJGO0FBeUJBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUF0QkY7QUF5QkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0VBQUE7QUF0QkY7QUE2Qkk7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBM0JOO0FBZ0NBO0VBQ0UscUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFFQSxlQUFBO0VBQ0Esc0JBQUE7QUE5QkY7QUFpQ0E7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBOUJGIiwiZmlsZSI6ImZpbHRlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwYWdlLWZpbHRlcnMge1xuICAuc2xpZGUtem9vbSB7XG4gICAgY29sb3I6ICM3ZDdkN2QgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5yYW5nZS1iYXIge1xuICAgIHRvcDogMjdweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMTBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnJhbmdlLWtub2Ige1xuICAgIHdpZHRoOiAzOXB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAzOXB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucmFuZ2UtcGluIHtcbiAgICBsZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuc3dpcGVyLXNsaWRlIHtcbiAgICAuc2xpZGUtem9vbSB7XG4gICAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuXG4gIGlvbi1zbGlkZXMge1xuICAgIGhlaWdodDogMzV2aDtcbiAgfVxuXG4gICNiYWNrIHtcbiAgICBwYWRkaW5nOiAxNXB4IDE1cHggMzVweCAxNXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gICNiYWNrLWltZyB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogMTAlO1xuICB9XG5cbiAgLyogaW4tZmxpZ2h0IGNsb25lICovXG4gIC5ndS1taXJyb3Ige1xuICAgIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgIHotaW5kZXg6IDk5OTkgIWltcG9ydGFudDtcbiAgICBvcGFjaXR5OiAwLjg7XG4gICAgLW1zLWZpbHRlcjogXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT04MClcIjtcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9ODApO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG5cbiAgLyogaGlnaC1wZXJmb3JtYW5jZSBkaXNwbGF5Om5vbmU7IGhlbHBlciAqL1xuICAuZ3UtaGlkZSB7XG4gICAgbGVmdDogLTk5OTlweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLyogYWRkZWQgdG8gbWlycm9yQ29udGFpbmVyIChkZWZhdWx0ID0gYm9keSkgd2hpbGUgZHJhZ2dpbmcgKi9cbiAgLmd1LXVuc2VsZWN0YWJsZSB7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZSAhaW1wb3J0YW50O1xuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmUgIWltcG9ydGFudDtcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmUgIWltcG9ydGFudDtcbiAgICB1c2VyLXNlbGVjdDogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLyogYWRkZWQgdG8gdGhlIHNvdXJjZSBlbGVtZW50IHdoaWxlIGl0cyBtaXJyb3IgaXMgZHJhZ2dlZCAqL1xuICAuZ3UtdHJhbnNpdCB7XG4gICAgb3BhY2l0eTogMC4yO1xuICAgIC1tcy1maWx0ZXI6IFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkFscGhhKE9wYWNpdHk9MjApXCI7XG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTIwKTtcbiAgfVxuXG4gIGlvbi1jb250ZW50IHtcbiAgICAuc2Nyb2xsLWNvbnRlbnQge1xuICAgICAgYmFja2dyb3VuZDogIzAwMCAhaW1wb3J0YW50O1xuICAgICAgb3ZlcmZsb3cteTogaGlkZGVuICFpbXBvcnRhbnQ7XG5cbiAgICB9XG4gIH1cblxufVxuXG5cbi50b0hpZGUgY2FudmFzOm50aC1jaGlsZCgyKSB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnRvSGlkZTEgY2FudmFzOm50aC1jaGlsZCgyKSB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnRvSGlkZTIgY2FudmFzOm50aC1jaGlsZCgyKSB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnRvSGlkZTMgY2FudmFzOm50aC1jaGlsZCgyKSB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnNwYWNlaW5yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbiNjb250YWluZXIgY2FudmFzIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuLm1haW4tZm9vdGVyIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYmFja2dyb3VuZDogIzgzOTZkNSAhaW1wb3J0YW50O1xuXG4gIHVsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcblxuICAgIGxpIHtcbiAgICAgIGEge1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4uc2VsZWN0ZWRTZWdtZW50IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgLy8gdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgIWltcG9ydGFudDtcbn1cblxuLm5vdFNlbGVjdGVkIHtcbiAgY29sb3I6IHdoaXRlO1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi50b3AtYnV0dG9ucy1oZWFkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICM2OTc2QjkgMCUsIHJnYmEoMTA1LCAxMTgsIDE4NSwgMC43NikgMTAwJSk7XG5cbiAgLmluLWxlZnQge1xuICAgIGltZyB7fVxuICB9XG5cbiAgLmluLXJpZ2h0IHtcbiAgICBidXR0b24ge1xuICAgICAgYmFja2dyb3VuZDogIzBmNzdmMDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBwYWRkaW5nOiAwcHggMjVweDtcbiAgICB9XG4gIH1cbn1cblxuLmN1cy1idG4ge1xuICAtLWJhY2tncm91bmQ6ICM5OWM0M2M7XG4gIC0tYm9yZGVyLXJhZGl1czogMzBweDtcbiAgd2lkdGg6IGF1dG87XG5cbiAgZm9udC1zaXplOiAxNHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wM2VtO1xufVxuXG4ubG9hZGVyQ29udGFpbmVyIHtcbiAgbWluLWhlaWdodDogNTB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4iXX0= */");

/***/ }),

/***/ 43536:
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/filter/filter.page.html ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/cssgram/0.1.10/cssgram.min.css\" />\n\n<ion-content class=\"mt-0\" *ngIf=\"!sendGameLoader\" scrollY=\"false\">\n  <div>\n    <div id=\"containertop\" style=\"width: 100%\">\n\n      <div class=\"top-buttons-head\">\n        <div class=\"in-left\" (click)=\"onNavigateEvent()\">\n          <img src=\"assets/icon/back-icon.svg\" />\n        </div>\n        <div class=\"in-right\">\n          <ion-button class=\"cus-btn\" *ngIf=\"gameType=='easy'\" ion-button (click)=\"onSendGame()\">Next\n          </ion-button>\n  \n          <ion-button class=\"cus-btn\" *ngIf=\"gameType=='medium'\" ion-button (click)=\"onSendGame1()\">Next\n          </ion-button>\n          <!-- <ion-button [disabled]=\"hintWord.invalid\" class=\"cus-btn\" *ngIf=\"type=='easy' && showWordSection\" ion-button\n            (click)=\"onSendGame1()\">Send Game</ion-button> -->\n  \n          <!-- <button *ngIf=\"type=='medium'\" ion-button (click)=\"nextPage1()\">Next</button> -->\n  \n        </div>\n      </div>\n    </div>\n\n    <!-- <img width=\"30\" height=\"30\"src=\"{{cameraImage}}\" /> -->\n  \n    <img [ngStyle]=\"{'display': hideImage ? 'none' : ''}\" width=\"360\" height=\"360\" id=\"originalImage\"\n      *ngIf=\"cameraImage && gameType =='easy'\" src=\"{{cameraImage}}\" (load)=\"Crop()\" />\n  \n    <img [ngStyle]=\"{'display': hideImage ? 'none' : ''}\" width=\"360\" height=\"360\" id=\"originalImage1\"\n      *ngIf=\"cameraImage && gameType =='medium'\" src=\"{{cameraImage}}\" (load)=\"Crop1()\" />\n  \n  \n  \n    <!-- <div>\n      <div *ngIf=\"!filterList.length\" class=\"loader1\"></div>\n    </div> -->\n  \n  \n    <ion-grid *ngIf=\"gameType == 'medium' \" class=\"ion-justify-content-center\" id=\"container\"\n      style=\"padding: 2px 5vh 0; height: 340px; overflow: hidden;\">\n      <ion-row class=\"spaceinrow\" [ngClass]=\"primaryFilter\">\n  \n        <ion-col class=\"toHide\" col-4=\"4\" dragula=\"totalPiece\" style=\"padding: 2px\">\n          <canvas id=\"canvas1\" height=\"200\" width=\"200\" style=\"display: inline-block\" [ngStyle]=\"{\n     'filter': 'grayscale(' + this.secondaryValues.numbers.grayscale + '%) ' +\n     'hue-rotate(' + this.secondaryValues.numbers.hue_rotate + 'deg) ' +\n     'invert(' + this.secondaryValues.numbers.invert + '%) ' +\n     'sepia(' + this.secondaryValues.numbers.sepia + '%) ' +\n     'saturate(' + this.secondaryValues.numbers.saturate + '%) ' +\n     'opacity(' + this.secondaryValues.numbers.opacity + '%) ' +\n     'brightness(' + this.secondaryValues.numbers.brightness + '%) ' +\n     'contrast(' + this.secondaryValues.numbers.contrast + '%) ' +\n     'blur(' + this.secondaryValues.numbers.blur + 'px)'\n  }\" (click)=\"Rotate1(1,'toHide')\">\n          </canvas>\n        </ion-col>\n  \n        <ion-col class=\"toHide1\" col-4=\"4\" dragula=\"totalPiece\" style=\"padding: 2px\">\n          <canvas id=\"canvas2\" height=\"200\" width=\"200\" style=\"display: inline-block\" [ngStyle]=\"{\n     'filter': 'grayscale(' + this.secondaryValues.numbers.grayscale + '%) ' +\n     'hue-rotate(' + this.secondaryValues.numbers.hue_rotate + 'deg) ' +\n     'invert(' + this.secondaryValues.numbers.invert + '%) ' +\n     'sepia(' + this.secondaryValues.numbers.sepia + '%) ' +\n     'saturate(' + this.secondaryValues.numbers.saturate + '%) ' +\n     'opacity(' + this.secondaryValues.numbers.opacity + '%) ' +\n     'brightness(' + this.secondaryValues.numbers.brightness + '%) ' +\n     'contrast(' + this.secondaryValues.numbers.contrast + '%) ' +\n     'blur(' + this.secondaryValues.numbers.blur + 'px)'\n  }\" (click)=\"Rotate1(2,'toHide1')\">\n          </canvas>\n        </ion-col>\n  \n        <ion-col class=\"toHide2\" col-4=\"4\" dragula=\"totalPiece\" style=\"padding: 2px\">\n          <canvas id=\"canvas3\" height=\"200\" width=\"200\" style=\"display: inline-block\" [ngStyle]=\"{\n     'filter': 'grayscale(' + this.secondaryValues.numbers.grayscale + '%) ' +\n     'hue-rotate(' + this.secondaryValues.numbers.hue_rotate + 'deg) ' +\n     'invert(' + this.secondaryValues.numbers.invert + '%) ' +\n     'sepia(' + this.secondaryValues.numbers.sepia + '%) ' +\n     'saturate(' + this.secondaryValues.numbers.saturate + '%) ' +\n     'opacity(' + this.secondaryValues.numbers.opacity + '%) ' +\n     'brightness(' + this.secondaryValues.numbers.brightness + '%) ' +\n     'contrast(' + this.secondaryValues.numbers.contrast + '%) ' +\n     'blur(' + this.secondaryValues.numbers.blur + 'px)'\n  }\" (click)=\"Rotate1(3,'toHide2')\">\n          </canvas>\n        </ion-col>\n  \n      </ion-row>\n      <ion-row class=\"spaceinrow\" [ngClass]=\"primaryFilter\">\n  \n        <ion-col class=\"toHide3\" col-4=\"4\" dragula=\"totalPiece\" style=\"padding: 2px\">\n          <canvas id=\"canvas4\" height=\"200\" width=\"200\" style=\"display: inline-block\" [ngStyle]=\"{\n     'filter': 'grayscale(' + this.secondaryValues.numbers.grayscale + '%) ' +\n     'hue-rotate(' + this.secondaryValues.numbers.hue_rotate + 'deg) ' +\n     'invert(' + this.secondaryValues.numbers.invert + '%) ' +\n     'sepia(' + this.secondaryValues.numbers.sepia + '%) ' +\n     'saturate(' + this.secondaryValues.numbers.saturate + '%) ' +\n     'opacity(' + this.secondaryValues.numbers.opacity + '%) ' +\n     'brightness(' + this.secondaryValues.numbers.brightness + '%) ' +\n     'contrast(' + this.secondaryValues.numbers.contrast + '%) ' +\n     'blur(' + this.secondaryValues.numbers.blur + 'px)'\n  }\" (click)=\"Rotate1(4,'toHide3')\">\n          </canvas>\n        </ion-col>\n  \n        <ion-col class=\"toHide4\" col-4=\"4\" dragula=\"totalPiece\" style=\"padding: 2px\">\n          <canvas id=\"canvas5\" height=\"200\" width=\"200\" style=\"display: inline-block\" [ngStyle]=\"{\n     'filter': 'grayscale(' + this.secondaryValues.numbers.grayscale + '%) ' +\n     'hue-rotate(' + this.secondaryValues.numbers.hue_rotate + 'deg) ' +\n     'invert(' + this.secondaryValues.numbers.invert + '%) ' +\n     'sepia(' + this.secondaryValues.numbers.sepia + '%) ' +\n     'saturate(' + this.secondaryValues.numbers.saturate + '%) ' +\n     'opacity(' + this.secondaryValues.numbers.opacity + '%) ' +\n     'brightness(' + this.secondaryValues.numbers.brightness + '%) ' +\n     'contrast(' + this.secondaryValues.numbers.contrast + '%) ' +\n     'blur(' + this.secondaryValues.numbers.blur + 'px)'}\" (click)=\"Rotate1(5,'toHide4')\">\n          </canvas>\n        </ion-col>\n  \n        <ion-col class=\"toHide5\" col-4=\"4\" dragula=\"totalPiece\" style=\"padding: 2px\">\n          <canvas id=\"canvas6\" height=\"200\" width=\"200\" style=\"display: inline-block\" [ngStyle]=\"{\n     'filter': 'grayscale(' + this.secondaryValues.numbers.grayscale + '%) ' +\n     'hue-rotate(' + this.secondaryValues.numbers.hue_rotate + 'deg) ' +\n     'invert(' + this.secondaryValues.numbers.invert + '%) ' +\n     'sepia(' + this.secondaryValues.numbers.sepia + '%) ' +\n     'saturate(' + this.secondaryValues.numbers.saturate + '%) ' +\n     'opacity(' + this.secondaryValues.numbers.opacity + '%) ' +\n     'brightness(' + this.secondaryValues.numbers.brightness + '%) ' +\n     'contrast(' + this.secondaryValues.numbers.contrast + '%) ' +\n     'blur(' + this.secondaryValues.numbers.blur + 'px)'}\" (click)=\"Rotate1(6,'toHide5')\">\n          </canvas>\n        </ion-col>\n      </ion-row>\n  \n      <ion-row class=\"spaceinrow\" [ngClass]=\"primaryFilter\">\n        <ion-col class=\"toHide6\" col-4=\"4\" dragula=\"totalPiece\" style=\"padding: 2px\">\n          <canvas id=\"canvas7\" height=\"200\" width=\"200\" style=\"display: inline-block\" [ngStyle]=\"{\n     'filter': 'grayscale(' + this.secondaryValues.numbers.grayscale + '%) ' +\n     'hue-rotate(' + this.secondaryValues.numbers.hue_rotate + 'deg) ' +\n     'invert(' + this.secondaryValues.numbers.invert + '%) ' +\n     'sepia(' + this.secondaryValues.numbers.sepia + '%) ' +\n     'saturate(' + this.secondaryValues.numbers.saturate + '%) ' +\n     'opacity(' + this.secondaryValues.numbers.opacity + '%) ' +\n     'brightness(' + this.secondaryValues.numbers.brightness + '%) ' +\n     'contrast(' + this.secondaryValues.numbers.contrast + '%) ' +\n     'blur(' + this.secondaryValues.numbers.blur + 'px)'\n  }\" (click)=\"Rotate1(7,'toHide6')\">\n          </canvas>\n        </ion-col>\n  \n        <ion-col class=\"toHide7\" col-4=\"4\" dragula=\"totalPiece\" style=\"padding: 2px\">\n          <canvas id=\"canvas8\" height=\"200\" width=\"200\" style=\"display: inline-block\" [ngStyle]=\"{\n     'filter': 'grayscale(' + this.secondaryValues.numbers.grayscale + '%) ' +\n     'hue-rotate(' + this.secondaryValues.numbers.hue_rotate + 'deg) ' +\n     'invert(' + this.secondaryValues.numbers.invert + '%) ' +\n     'sepia(' + this.secondaryValues.numbers.sepia + '%) ' +\n     'saturate(' + this.secondaryValues.numbers.saturate + '%) ' +\n     'opacity(' + this.secondaryValues.numbers.opacity + '%) ' +\n     'brightness(' + this.secondaryValues.numbers.brightness + '%) ' +\n     'contrast(' + this.secondaryValues.numbers.contrast + '%) ' +\n     'blur(' + this.secondaryValues.numbers.blur + 'px)'}\" (click)=\"Rotate1(8,'toHide7')\">\n          </canvas>\n        </ion-col>\n  \n        <ion-col class=\"toHide8\" col-4=\"4\" dragula=\"totalPiece\" style=\"padding: 2px\">\n          <canvas id=\"canvas9\" height=\"200\" width=\"200\" style=\"display: inline-block\" [ngStyle]=\"{\n     'filter': 'grayscale(' + this.secondaryValues.numbers.grayscale + '%) ' +\n     'hue-rotate(' + this.secondaryValues.numbers.hue_rotate + 'deg) ' +\n     'invert(' + this.secondaryValues.numbers.invert + '%) ' +\n     'sepia(' + this.secondaryValues.numbers.sepia + '%) ' +\n     'saturate(' + this.secondaryValues.numbers.saturate + '%) ' +\n     'opacity(' + this.secondaryValues.numbers.opacity + '%) ' +\n     'brightness(' + this.secondaryValues.numbers.brightness + '%) ' +\n     'contrast(' + this.secondaryValues.numbers.contrast + '%) ' +\n     'blur(' + this.secondaryValues.numbers.blur + 'px)'}\" (click)=\"Rotate1(9,'toHide8')\">\n          </canvas>\n        </ion-col>\n      </ion-row>\n  \n    </ion-grid>\n  \n    <ion-grid *ngIf=\"gameType == 'easy' \" class=\"ion-justify-content-center\" id=\"container\" style=\"padding: 2px 5vh 0\">\n      <ion-row class=\"spaceinrow\" [ngClass]=\"primaryFilter\">\n        <ion-col class=\"toHide\" col-6=\"6\" dragula=\"totalPiece\" style=\"padding: 2px\">\n          <canvas id=\"canvas1\" style=\"display: inline-block \" [ngStyle]=\"{\n  'filter': 'grayscale(' + this.secondaryValues.numbers.grayscale + '%) ' +\n  'hue-rotate(' + this.secondaryValues.numbers.hue_rotate + 'deg) ' +\n  'invert(' + this.secondaryValues.numbers.invert + '%) ' +\n  'sepia(' + this.secondaryValues.numbers.sepia + '%) ' +\n  'saturate(' + this.secondaryValues.numbers.saturate + '%) ' +\n  'opacity(' + this.secondaryValues.numbers.opacity + '%) ' +\n  'brightness(' + this.secondaryValues.numbers.brightness + '%) ' +\n  'contrast(' + this.secondaryValues.numbers.contrast + '%) ' +\n  'blur(' + this.secondaryValues.numbers.blur + 'px)'\n  }\" (click)=\"Rotate(1,'toHide')\">\n          </canvas>\n        </ion-col>\n        <ion-col class=\"toHide1\" col-6=\"6\" dragula=\"totalPiece\" style=\"padding: 2px\">\n          <canvas id=\"canvas2\" style=\"display: inline-block \" [ngStyle]=\"{\n  'filter': 'grayscale(' + this.secondaryValues.numbers.grayscale + '%) ' +\n  'hue-rotate(' + this.secondaryValues.numbers.hue_rotate + 'deg) ' +\n  'invert(' + this.secondaryValues.numbers.invert + '%) ' +\n  'sepia(' + this.secondaryValues.numbers.sepia + '%) ' +\n  'saturate(' + this.secondaryValues.numbers.saturate + '%) ' +\n  'opacity(' + this.secondaryValues.numbers.opacity + '%) ' +\n  'brightness(' + this.secondaryValues.numbers.brightness + '%) ' +\n  'contrast(' + this.secondaryValues.numbers.contrast + '%) ' +\n  'blur(' + this.secondaryValues.numbers.blur + 'px)'\n  }\" (click)=\"Rotate(2,'toHide1')\">\n          </canvas>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"spaceinrow\" [ngClass]=\"primaryFilter\">\n        <ion-col class=\"toHide2\" col-6=\"6\" dragula=\"totalPiece\" style=\"padding: 2px\">\n          <canvas id=\"canvas3\" style=\"display: inline-block  \" [ngStyle]=\"{\n  'filter': 'grayscale(' + this.secondaryValues.numbers.grayscale + '%) ' +\n  'hue-rotate(' + this.secondaryValues.numbers.hue_rotate + 'deg) ' +\n  'invert(' + this.secondaryValues.numbers.invert + '%) ' +\n  'sepia(' + this.secondaryValues.numbers.sepia + '%) ' +\n  'saturate(' + this.secondaryValues.numbers.saturate + '%) ' +\n  'opacity(' + this.secondaryValues.numbers.opacity + '%) ' +\n  'brightness(' + this.secondaryValues.numbers.brightness + '%) ' +\n  'contrast(' + this.secondaryValues.numbers.contrast + '%) ' +\n  'blur(' + this.secondaryValues.numbers.blur + 'px)'\n  }\" (click)=\"Rotate(3,'toHide2')\">\n          </canvas>\n        </ion-col>\n        <ion-col class=\"toHide3\" col-6=\"6\" dragula=\"totalPiece\" style=\"padding: 2px\">\n          <canvas id=\"canvas4\" style=\"display: inline-block \" [ngStyle]=\"{\n  'filter': 'grayscale(' + this.secondaryValues.numbers.grayscale + '%) ' +\n  'hue-rotate(' + this.secondaryValues.numbers.hue_rotate + 'deg) ' +\n  'invert(' + this.secondaryValues.numbers.invert + '%) ' +\n  'sepia(' + this.secondaryValues.numbers.sepia + '%) ' +\n  'saturate(' + this.secondaryValues.numbers.saturate + '%) ' +\n  'opacity(' + this.secondaryValues.numbers.opacity + '%) ' +\n  'brightness(' + this.secondaryValues.numbers.brightness + '%) ' +\n  'contrast(' + this.secondaryValues.numbers.contrast + '%) ' +\n  'blur(' + this.secondaryValues.numbers.blur + 'px)'}\" (click)=\"Rotate(4,'toHide3')\">\n          </canvas>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n\n    <div no-border class=\"main-footer\" *ngIf=\"!showWordSection || !sendGameLoader\">\n      <ul *ngIf=\"buttons == 'default'\">\n        <li (click)=\"segmentChanged('primary')\">\n          <a [ngClass]=\"selection == 'primary'?'selectedSegment':'notSelected'\">PRIMARY</a>\n        </li>\n        <li (click)=\"segmentChanged('secondary')\">\n          <a [ngClass]=\"selection == 'secondary'?'selectedSegment':'notSelected'\">SECONDARY</a>\n        </li>\n      </ul>\n      <ul *ngIf=\"buttons == 'secondary'\">\n        <li><a (click)=\"revertButtons('cancel')\">CANCEL</a></li>\n        <li><a (click)=\"revertButtons()\">DONE</a></li>\n      </ul>\n    </div>\n  \n    <ion-slides loop=\"false\" [options]=\"{slidesPerView: 4}\" pager=\"false\"\n      *ngIf=\"selection == 'primary'  && !showWordSection\">\n      <ion-slide *ngFor=\"let filter of filterList\" style=\"display: flex; flex-direction: column;\">\n        <div [ngClass]=\"filter.name\" style=\"margin-top: 5px;\">\n          <img *ngIf=\"cameraImageThumbnail\" src=\"{{cameraImageThumbnail}}\" (click)=\"changePrimary(filter)\"\n            style=\"width: 18vw\" />\n        </div>\n        <p style=\"word-break:break-all; margin: 0;\">{{filter.name}}\n          <!-- <ion-icon name=\"lock-closed-outline\"></ion-icon> -->\n        </p>\n        <p><ion-icon name=\"lock-closed-outline\" *ngIf=\"!checkOwnedFilter(filter)\" style=\"margin-left: 2px\"></ion-icon></p>\n      </ion-slide>\n    </ion-slides>\n  \n    <ion-slides loop=\"false\" [options]=\"{slidesPerView: 4}\"\n      *ngIf=\"selection == 'secondary' && buttons == 'default' && !showWordSection\">\n      <ion-slide *ngFor=\"let filter of secondaryFilterList; let indexElement=index;\"\n        style=\"display: flex; flex-direction: column;\">\n        \n        <div [ngStyle]=\"{'filter': this.secondaryFilterValues[indexElement]}\" style=\"margin-top: 5px;\">\n          <img *ngIf=\"cameraImageThumbnail\" src=\"{{cameraImageThumbnail}}\" (click)=\"changeButtons(filter)\"\n            style=\"width: 18vw\" />\n        </div>\n        <p style=\"word-break:break-all; margin: 0;\">{{filter.name}}\n          <!-- <ion-icon name=\"lock-closed-outline\"></ion-icon> -->\n        </p>\n        <p><ion-icon name=\"lock-closed-outline\" *ngIf=\"!checkOwnedFilter(filter) && checkOwnedFilter.length\"\n          style=\"margin-left: 2px\">\n        </ion-icon></p>\n      </ion-slide>\n    </ion-slides>\n  \n    <div *ngIf=\"showWordSection\" class=\"bottom\" style=\"text-align: center;\">\n      <ion-input [formControl]=\"hintWord\" placeholder=\"Please Enter a word\"></ion-input>\n      <!-- <ion-button [disabled]=\"hintWord.invalid\" (click)=\"sendGame()\">Send Game</ion-button> -->\n    </div>\n  \n    <div *ngIf=\"buttons == 'secondary'\">\n      <p style=\"text-align: center; font-weight: bold; color: white\">\n        {{secondaryFilterSelected}}\n      </p>\n      <ion-range pin=\"true\" [step]=\"secondaryValues.ranges[secondaryFilterSelected].step\"\n        [min]=\"secondaryValues.ranges[secondaryFilterSelected].min\"\n        [max]=\"secondaryValues.ranges[secondaryFilterSelected].max\"\n        [(ngModel)]=\"secondaryValues.ranges[secondaryFilterSelected].sliderValue\" (ionChange)=\"sliderChanged($event)\">\n      </ion-range>\n    </div>\n  </div>\n  \n</ion-content>\n\n<div *ngIf=\"sendGameLoader\" class=\"loaderContainer\">\n  <div class=\"loader1\"></div>\n</div>\n\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_main_filter_filter_module_ts.js.map