(self["webpackChunkpic_playce"] = self["webpackChunkpic_playce"] || []).push([["src_app_main_add-contact_add-contact_module_ts"],{

/***/ 81644:
/*!****************************************************************!*\
  !*** ./src/app/main/add-contact/add-contact-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddContactPageRoutingModule": () => (/* binding */ AddContactPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _add_contact_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-contact.page */ 13051);




const routes = [
    {
        path: '',
        component: _add_contact_page__WEBPACK_IMPORTED_MODULE_0__.AddContactPage
    }
];
let AddContactPageRoutingModule = class AddContactPageRoutingModule {
};
AddContactPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AddContactPageRoutingModule);



/***/ }),

/***/ 17595:
/*!********************************************************!*\
  !*** ./src/app/main/add-contact/add-contact.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddContactPageModule": () => (/* binding */ AddContactPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _add_contact_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-contact-routing.module */ 81644);
/* harmony import */ var _add_contact_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-contact.page */ 13051);
/* harmony import */ var _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/contacts/ngx */ 57560);








let AddContactPageModule = class AddContactPageModule {
};
AddContactPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _add_contact_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddContactPageRoutingModule,
        ],
        providers: [_ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_2__.Contacts],
        declarations: [_add_contact_page__WEBPACK_IMPORTED_MODULE_1__.AddContactPage]
    })
], AddContactPageModule);



/***/ }),

/***/ 13051:
/*!******************************************************!*\
  !*** ./src/app/main/add-contact/add-contact.page.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddContactPage": () => (/* binding */ AddContactPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_add_contact_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./add-contact.page.html */ 1385);
/* harmony import */ var _add_contact_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-contact.page.scss */ 86713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/contacts/ngx */ 57560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_service_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/rest.service */ 90421);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ 88259);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);









let AddContactPage = class AddContactPage {
    constructor(contacts, restSerice, router, alertController, loadingCtrl) {
        this.contacts = contacts;
        this.restSerice = restSerice;
        this.router = router;
        this.alertController = alertController;
        this.loadingCtrl = loadingCtrl;
        this.contactList = [];
        this.showUserList = false;
        this.usernameSearchRes = [];
    }
    ngOnInit() {
    }
    presentAlert(obj, headerText, headerBody) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const friendDialogbutton = [
                {
                    text: 'No',
                    role: 'no',
                    cssClass: 'secondary',
                    handler: (blah) => {
                        console.log('Confirm Cancel: blah');
                    }
                }, {
                    text: 'yes',
                    handler: () => {
                        this.addFriendNameByUsername(obj);
                    }
                }
            ];
            const resDialogbutton = [
                {
                    text: 'OK',
                }
            ];
            let buttonArr = [];
            if (obj) {
                buttonArr = friendDialogbutton;
            }
            else {
                buttonArr = resDialogbutton;
            }
            const alert = yield this.alertController.create({
                header: headerText,
                subHeader: headerBody,
                buttons: buttonArr
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
        });
    }
    onImportContacts() {
        this.presentLoading().then(() => {
            this.contacts.find(['displayName']).then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                const list = yield res;
                this.getNumbersArrayOnly(list);
                console.log(res);
            }), err => {
                console.log(err);
            });
        });
    }
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.loader = yield this.loadingCtrl.create({
                message: 'Importing Contacts',
            });
            yield this.loader.present();
        });
    }
    getNumbersArrayOnly(list) {
        for (const element of list) {
            if (element.phoneNumbers) {
                element.phoneNumbers.forEach(el => {
                    if (el.value.replace(/ /g, '')) {
                        const str = el.value.replace(/ /g, '');
                        this.contactList.push(str);
                    }
                });
            }
        }
        this.checkContactFromServer(JSON.stringify(this.contactList));
    }
    checkContactFromServer(list) {
        this.restSerice
            .postRequestToken('contacts/contact-exist', { contacts_array: list })
            .subscribe((res) => {
            const contactList = JSON.stringify(res['save_contacts']);
            this.router.navigate(['/main/freind', { user: contactList }]);
            this.loader.dismiss();
        }, err => {
            console.log(err);
            this.loader.dismiss();
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
                title: 'Error',
                text: err.error.message,
                confirmButtonText: "OK",
            });
        });
    }
    onSearchByUsername(e) {
        let username = e.target.value;
        this.showUserList = true;
        const searchObj = {
            user_name: username
        };
        this.restSerice.postRequestToken('users/user-name', searchObj).subscribe((res) => {
            this.usernameSearchRes = res.user;
            // console.log('====>', this.usernameSearchRes);
        });
    }
    onCancelSearch() {
        this.showUserList = false;
    }
    openDialogBox(obj) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
            text: "Are you want to add as friend ",
            confirmButtonText: "Yes",
            confirmButtonColor: "#99C43C",
            showCancelButton: true,
            allowOutsideClick: false,
            cancelButtonColor: "#E86B5D",
            cancelButtonText: "Cancel",
        }).then(res => {
            if (res.isConfirmed) {
                this.addFriendNameByUsername(obj);
            }
        });
    }
    addFriendNameByUsername(obj) {
        this.restSerice.postRequestToken('contacts/add-username', { friend_id: obj.id }).subscribe((res) => {
            this.showUserList = false;
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
                title: 'Success',
                text: res.message,
                confirmButtonText: "Cool",
            });
            this.router.navigate(['/main/freind', { addFriend: true }], { replaceUrl: true });
        });
    }
};
AddContactPage.ctorParameters = () => [
    { type: _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_2__.Contacts },
    { type: src_app_service_rest_service__WEBPACK_IMPORTED_MODULE_3__.RestService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController }
];
AddContactPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-add-contact',
        template: _raw_loader_add_contact_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_add_contact_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AddContactPage);



/***/ }),

/***/ 86713:
/*!********************************************************!*\
  !*** ./src/app/main/add-contact/add-contact.page.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("h2 {\n  font-family: Poppins;\n  letter-spacing: 0.03em;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 15px;\n}\n\n.top {\n  width: 100vw;\n  height: 107px;\n  background: linear-gradient(180deg, #6976b9 0%, rgba(105, 118, 185, 0.76) 100%);\n  box-shadow: 0px 5px 10px rgba(73, 73, 73, 0.25);\n}\n\nion-button {\n  font-family: Poppins;\n}\n\n.v-cntr {\n  display: flex;\n  align-items: center;\n  height: 100%;\n}\n\n.ml-50 {\n  margin-left: 50px;\n}\n\n.header-text {\n  letter-spacing: 0.03em;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 20px;\n  line-height: 30px;\n  color: #ffffff;\n}\n\n.cus-btn {\n  --background: #99c43c;\n  --border-radius: 30px;\n  width: 87px;\n  height: 28px;\n  font-size: 14px;\n  letter-spacing: 0.03em;\n}\n\nion-item {\n  --inner-padding-bottom: 10px;\n  --inner-padding-top: 10px;\n}\n\n.card {\n  width: 95%;\n  margin: auto;\n  background: #ffffff;\n  box-shadow: 0px 4px 20px rgba(130, 130, 130, 0.25);\n  border-radius: 20px;\n  padding: 15px;\n}\n\n.mt-2 {\n  margin-top: 2px;\n}\n\n.mt-20 {\n  margin-top: 20px;\n}\n\n.mt-45 {\n  margin-top: 45px;\n}\n\n.align-end {\n  display: flex;\n  justify-content: end;\n}\n\n.cus-btn-lg {\n  --color: black;\n  width: 218px;\n  height: 53px;\n  --background: #ffffff;\n  --box-shadow: 4px 7px 20px rgba(109, 109, 109, 0.27);\n  --border-radius: 90px;\n  letter-spacing: 0.03em;\n}\n\n.fw-500 {\n  font-weight: 500;\n}\n\nion-grid {\n  padding: 0px;\n  margin: 0px;\n}\n\n.body-container {\n  border-color: #E5E5E5;\n  min-height: auto;\n}\n\n.top-container {\n  display: flex;\n  width: 100%;\n  min-height: 107px;\n  background: linear-gradient(180deg, #6976B9 0%, rgba(105, 118, 185, 0.76) 100%);\n  box-shadow: 0px 5px 10px rgba(73, 73, 73, 0.25);\n}\n\n.top-container .top-body {\n  width: 90%;\n  margin: auto;\n  display: flex;\n}\n\n.top-container .top-body .text {\n  margin: auto;\n  letter-spacing: 0.03em;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 20px;\n  color: #ffffff;\n}\n\n.cus-search-bar {\n  --border-radius: 30px;\n  --background: #FFFFFF;\n  --box-shadow: inset 0px 3px 7px rgba(166, 166, 166, 0.25);\n}\n\n.scrollDiv {\n  position: fixed;\n  top: 180px;\n  left: 2px;\n  bottom: 2px;\n  width: 100%;\n  background-color: #eee;\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1jb250YWN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSwrRUFBQTtFQUdBLCtDQUFBO0FBREY7O0FBSUE7RUFDRSxvQkFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQURGOztBQUlBO0VBQ0UsaUJBQUE7QUFERjs7QUFJQTtFQUNFLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQURGOztBQUlBO0VBQ0UscUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FBREY7O0FBSUE7RUFDRSw0QkFBQTtFQUNBLHlCQUFBO0FBREY7O0FBSUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0RBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFERjs7QUFJQTtFQUNFLGVBQUE7QUFERjs7QUFJQTtFQUNFLGdCQUFBO0FBREY7O0FBSUE7RUFDRSxnQkFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLG9CQUFBO0FBREY7O0FBSUE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLG9EQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQURGOztBQUlBO0VBQ0UsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBREY7O0FBSUE7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsK0VBQUE7RUFDQSwrQ0FBQTtBQURGOztBQUdFO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBREo7O0FBR0k7RUFDRSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUROOztBQU1BO0VBQ0UscUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlEQUFBO0FBSEY7O0FBT0E7RUFDRSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFKRiIsImZpbGUiOiJhZGQtY29udGFjdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMiB7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBsZXR0ZXItc3BhY2luZzogMC4wM2VtO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLnRvcCB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDdweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZyxcbiAgICAgICM2OTc2YjkgMCUsXG4gICAgICByZ2JhKDEwNSwgMTE4LCAxODUsIDAuNzYpIDEwMCUpO1xuICBib3gtc2hhZG93OiAwcHggNXB4IDEwcHggcmdiYSg3MywgNzMsIDczLCAwLjI1KTtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xufVxuXG4udi1jbnRyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubWwtNTAge1xuICBtYXJnaW4tbGVmdDogNTBweDtcbn1cblxuLmhlYWRlci10ZXh0IHtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDNlbTtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5jdXMtYnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiAjOTljNDNjO1xuICAtLWJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIHdpZHRoOiA4N3B4O1xuICBoZWlnaHQ6IDI4cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDNlbTtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWlubmVyLXBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAtLWlubmVyLXBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG4uY2FyZCB7XG4gIHdpZHRoOiA5NSU7XG4gIG1hcmdpbjogYXV0bztcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm94LXNoYWRvdzogMHB4IDRweCAyMHB4IHJnYmEoMTMwLCAxMzAsIDEzMCwgMC4yNSk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG5cbi5tdC0yIHtcbiAgbWFyZ2luLXRvcDogMnB4O1xufVxuXG4ubXQtMjAge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4ubXQtNDUge1xuICBtYXJnaW4tdG9wOiA0NXB4O1xufVxuXG4uYWxpZ24tZW5kIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XG59XG5cbi5jdXMtYnRuLWxnIHtcbiAgLS1jb2xvcjogYmxhY2s7XG4gIHdpZHRoOiAyMThweDtcbiAgaGVpZ2h0OiA1M3B4O1xuICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIC0tYm94LXNoYWRvdzogNHB4IDdweCAyMHB4IHJnYmEoMTA5LCAxMDksIDEwOSwgMC4yNyk7XG4gIC0tYm9yZGVyLXJhZGl1czogOTBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDNlbTtcbn1cblxuLmZ3LTUwMCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbmlvbi1ncmlkIHtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDBweDtcbn1cblxuLmJvZHktY29udGFpbmVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjRTVFNUU1O1xuICBtaW4taGVpZ2h0OiBhdXRvO1xufVxuXG4udG9wLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDdweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzY5NzZCOSAwJSwgcmdiYSgxMDUsIDExOCwgMTg1LCAwLjc2KSAxMDAlKTtcbiAgYm94LXNoYWRvdzogMHB4IDVweCAxMHB4IHJnYmEoNzMsIDczLCA3MywgMC4yNSk7XG5cbiAgLnRvcC1ib2R5IHtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgLnRleHQge1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDNlbTtcbiAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIH1cbiAgfVxufVxuXG4uY3VzLXNlYXJjaC1iYXIge1xuICAtLWJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIC0tYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgLS1ib3gtc2hhZG93OiBpbnNldCAwcHggM3B4IDdweCByZ2JhKDE2NiwgMTY2LCAxNjYsIDAuMjUpO1xuXG59XG5cbi5zY3JvbGxEaXYge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMTgwcHg7XG4gIGxlZnQ6IDJweDtcbiAgYm90dG9tOiAycHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG4iXX0= */");

/***/ }),

/***/ 1385:
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/add-contact/add-contact.page.html ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-grid>\n\n  <div class=\"top-container\">\n    <div class=\"top-body\">\n      <div [routerLink]=\"['/main']\" class=\"icon\">\n        <ion-icon src=\"assets/icon/back-icon.svg\"></ion-icon>\n      </div>\n      <div class=\"text\">Add Contact</div>\n    </div>\n  </div>\n  <!-- <ion-row class=\"top\">\n    <ion-col offset=\"1\" size=\"2\" [routerLink]=\"['/main']\">\n      <div class=\"v-cntr\">\n        <ion-icon src=\"assets/icon/back-icon.svg\"></ion-icon>\n      </div>\n    </ion-col>\n    <ion-col size=\"9\">\n      <div class=\"v-cntr ml-50 header-text\">ADD CONTACTS</div>\n    </ion-col>\n  </ion-row> -->\n\n  <ion-row>\n    <div>\n      <div>\n        <ion-searchbar show-cancel-button=\"focus\" class=\"cus-search-bar\" placeholder=\"Search by Name or User Name\"\n          (ionChange)=\"onSearchByUsername($event)\" (ionCancel)=\"onCancelSearch()\"></ion-searchbar>\n      </div>\n    </div>\n    <!-- <ion-col offset=\"1\" size=\"10\">\n      <ion-searchbar\n      show-cancel-button= \"focus\"\n        class=\"cus\"\n        placeholder=\"Search by Name or User Name\"\n        (ionChange)=\"onSearchByUsername($event.target.value)\" \n        (ionCancel)=\"onCancelSearch()\"\n      ></ion-searchbar>\n    </ion-col> -->\n  </ion-row>\n\n  <ion-row *ngIf=\"!showUserList\">\n    <ion-col size=\"12\">\n      <ion-item (click)=\"onImportContacts()\" lines=\"none\">\n        <ion-icon src=\"assets/icon/phone.svg\" slot=\"start\"> </ion-icon>\n        <ion-label>\n          <h2>Import Contacts</h2>\n          <p>Add from mobile address book</p>\n        </ion-label>\n        <ion-icon src=\"assets/icon/fwd.svg\" slot=\"end\"> </ion-icon>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n\n  <ion-row *ngIf=\"showUserList\">\n    <div class=\"scrollDiv\">\n      <ion-col size=\"12\" *ngIf=\"usernameSearchRes.length\">\n        <ion-item (click)=\"openDialogBox(name)\" *ngFor=\"let name of usernameSearchRes\">\n          <ion-label>\n            <h2>{{name.user_name}}</h2>\n          </ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col *ngIf=\"!usernameSearchRes.length\">\n        <p>No user Found</p>\n      </ion-col>\n    </div>\n  </ion-row>\n\n\n</ion-grid>");

/***/ })

}]);
//# sourceMappingURL=src_app_main_add-contact_add-contact_module_ts.js.map