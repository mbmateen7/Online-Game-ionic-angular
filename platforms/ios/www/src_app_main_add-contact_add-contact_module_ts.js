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
    constructor(contacts, restSerice, router, alertController) {
        this.contacts = contacts;
        this.restSerice = restSerice;
        this.router = router;
        this.alertController = alertController;
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
        this.contacts.find(['displayName']).then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const list = yield res;
            this.getNumbersArrayOnly(list);
        }));
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
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController }
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("h2 {\n  font-family: Poppins;\n  letter-spacing: 0.03em;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 15px;\n}\n\n.top {\n  width: 100vw;\n  height: 107px;\n  background: linear-gradient(180deg, #6976b9 0%, rgba(105, 118, 185, 0.76) 100%);\n  box-shadow: 0px 5px 10px rgba(73, 73, 73, 0.25);\n}\n\nion-button {\n  font-family: Poppins;\n}\n\n.v-cntr {\n  display: flex;\n  align-items: center;\n  height: 100%;\n}\n\n.ml-50 {\n  margin-left: 50px;\n}\n\n.header-text {\n  letter-spacing: 0.03em;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 20px;\n  line-height: 30px;\n  color: #ffffff;\n}\n\n.cus-btn {\n  --background: #99c43c;\n  --border-radius: 30px;\n  width: 87px;\n  height: 28px;\n  font-size: 14px;\n  letter-spacing: 0.03em;\n}\n\nion-item {\n  --inner-padding-bottom: 10px;\n  --inner-padding-top: 10px;\n}\n\n.card {\n  width: 95%;\n  margin: auto;\n  background: #ffffff;\n  box-shadow: 0px 4px 20px rgba(130, 130, 130, 0.25);\n  border-radius: 20px;\n  padding: 15px;\n}\n\n.mt-2 {\n  margin-top: 2px;\n}\n\n.mt-20 {\n  margin-top: 20px;\n}\n\n.mt-45 {\n  margin-top: 45px;\n}\n\n.align-end {\n  display: flex;\n  justify-content: end;\n}\n\n.cus-btn-lg {\n  --color: black;\n  width: 218px;\n  height: 53px;\n  --background: #ffffff;\n  --box-shadow: 4px 7px 20px rgba(109, 109, 109, 0.27);\n  --border-radius: 90px;\n  letter-spacing: 0.03em;\n}\n\n.fw-500 {\n  font-weight: 500;\n}\n\nion-grid {\n  padding: 0px;\n  margin: 0px;\n}\n\n.body-container {\n  border-color: #E5E5E5;\n  min-height: auto;\n}\n\n.top-container {\n  display: flex;\n  width: 100%;\n  min-height: 107px;\n  background: linear-gradient(180deg, #6976B9 0%, rgba(105, 118, 185, 0.76) 100%);\n  box-shadow: 0px 5px 10px rgba(73, 73, 73, 0.25);\n}\n\n.top-container .top-body {\n  width: 90%;\n  margin: auto;\n  display: flex;\n}\n\n.top-container .top-body .text {\n  margin: auto;\n  letter-spacing: 0.03em;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 20px;\n  color: #ffffff;\n}\n\n.cus-search-bar {\n  --border-radius: 30px;\n  --background: #FFFFFF;\n  --box-shadow: inset 0px 3px 7px rgba(166, 166, 166, 0.25);\n}\n\n.scrollDiv {\n  position: fixed;\n  top: 180px;\n  left: 2px;\n  bottom: 2px;\n  width: 100%;\n  background-color: #eee;\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1jb250YWN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSwrRUFBQTtFQUdBLCtDQUFBO0FBREY7O0FBSUE7RUFDRSxvQkFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQURGOztBQUlBO0VBQ0UsaUJBQUE7QUFERjs7QUFJQTtFQUNFLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQURGOztBQUlBO0VBQ0UscUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FBREY7O0FBSUE7RUFDRSw0QkFBQTtFQUNBLHlCQUFBO0FBREY7O0FBSUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0RBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFERjs7QUFJQTtFQUNFLGVBQUE7QUFERjs7QUFJQTtFQUNFLGdCQUFBO0FBREY7O0FBSUE7RUFDRSxnQkFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLG9CQUFBO0FBREY7O0FBSUE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLG9EQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQURGOztBQUlBO0VBQ0UsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBREY7O0FBSUE7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsK0VBQUE7RUFDQSwrQ0FBQTtBQURGOztBQUdFO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBREo7O0FBR0k7RUFDRSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUROOztBQU1BO0VBQ0UscUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlEQUFBO0FBSEY7O0FBT0E7RUFDRSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFKRiIsImZpbGUiOiJhZGQtY29udGFjdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMiB7XHJcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDNlbTtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcbi50b3Age1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwN3B4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsXHJcbiAgICAgICM2OTc2YjkgMCUsXHJcbiAgICAgIHJnYmEoMTA1LCAxMTgsIDE4NSwgMC43NikgMTAwJSk7XHJcbiAgYm94LXNoYWRvdzogMHB4IDVweCAxMHB4IHJnYmEoNzMsIDczLCA3MywgMC4yNSk7XHJcbn1cclxuXHJcbmlvbi1idXR0b24ge1xyXG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG59XHJcblxyXG4udi1jbnRyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ubWwtNTAge1xyXG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG59XHJcblxyXG4uaGVhZGVyLXRleHQge1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAzZW07XHJcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4uY3VzLWJ0biB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjOTljNDNjO1xyXG4gIC0tYm9yZGVyLXJhZGl1czogMzBweDtcclxuICB3aWR0aDogODdweDtcclxuICBoZWlnaHQ6IDI4cHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAzZW07XHJcbn1cclxuXHJcbmlvbi1pdGVtIHtcclxuICAtLWlubmVyLXBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIC0taW5uZXItcGFkZGluZy10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICB3aWR0aDogOTUlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGJveC1zaGFkb3c6IDBweCA0cHggMjBweCByZ2JhKDEzMCwgMTMwLCAxMzAsIDAuMjUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgcGFkZGluZzogMTVweDtcclxufVxyXG5cclxuLm10LTIge1xyXG4gIG1hcmdpbi10b3A6IDJweDtcclxufVxyXG5cclxuLm10LTIwIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4ubXQtNDUge1xyXG4gIG1hcmdpbi10b3A6IDQ1cHg7XHJcbn1cclxuXHJcbi5hbGlnbi1lbmQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XHJcbn1cclxuXHJcbi5jdXMtYnRuLWxnIHtcclxuICAtLWNvbG9yOiBibGFjaztcclxuICB3aWR0aDogMjE4cHg7XHJcbiAgaGVpZ2h0OiA1M3B4O1xyXG4gIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAtLWJveC1zaGFkb3c6IDRweCA3cHggMjBweCByZ2JhKDEwOSwgMTA5LCAxMDksIDAuMjcpO1xyXG4gIC0tYm9yZGVyLXJhZGl1czogOTBweDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wM2VtO1xyXG59XHJcblxyXG4uZnctNTAwIHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG5pb24tZ3JpZCB7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG4uYm9keS1jb250YWluZXIge1xyXG4gIGJvcmRlci1jb2xvcjogI0U1RTVFNTtcclxuICBtaW4taGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4udG9wLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAxMDdweDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjNjk3NkI5IDAlLCByZ2JhKDEwNSwgMTE4LCAxODUsIDAuNzYpIDEwMCUpO1xyXG4gIGJveC1zaGFkb3c6IDBweCA1cHggMTBweCByZ2JhKDczLCA3MywgNzMsIDAuMjUpO1xyXG5cclxuICAudG9wLWJvZHkge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgLnRleHQge1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAzZW07XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uY3VzLXNlYXJjaC1iYXIge1xyXG4gIC0tYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAtLWJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgLS1ib3gtc2hhZG93OiBpbnNldCAwcHggM3B4IDdweCByZ2JhKDE2NiwgMTY2LCAxNjYsIDAuMjUpO1xyXG5cclxufVxyXG5cclxuLnNjcm9sbERpdiB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMTgwcHg7XHJcbiAgbGVmdDogMnB4O1xyXG4gIGJvdHRvbTogMnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcbiJdfQ== */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-grid>\r\n\r\n  <div class=\"top-container\">\r\n    <div class=\"top-body\">\r\n      <div [routerLink]=\"['/main']\" class=\"icon\">\r\n        <ion-icon src=\"assets/icon/back-icon.svg\"></ion-icon>\r\n      </div>\r\n      <div class=\"text\">Add Contact</div>\r\n    </div>\r\n  </div>\r\n  <!-- <ion-row class=\"top\">\r\n    <ion-col offset=\"1\" size=\"2\" [routerLink]=\"['/main']\">\r\n      <div class=\"v-cntr\">\r\n        <ion-icon src=\"assets/icon/back-icon.svg\"></ion-icon>\r\n      </div>\r\n    </ion-col>\r\n    <ion-col size=\"9\">\r\n      <div class=\"v-cntr ml-50 header-text\">ADD CONTACTS</div>\r\n    </ion-col>\r\n  </ion-row> -->\r\n\r\n  <ion-row>\r\n    <div>\r\n      <div>\r\n        <ion-searchbar show-cancel-button=\"focus\" class=\"cus-search-bar\" placeholder=\"Search by Name or User Name\"\r\n          (ionChange)=\"onSearchByUsername($event)\" (ionCancel)=\"onCancelSearch()\"></ion-searchbar>\r\n      </div>\r\n    </div>\r\n    <!-- <ion-col offset=\"1\" size=\"10\">\r\n      <ion-searchbar\r\n      show-cancel-button= \"focus\"\r\n        class=\"cus\"\r\n        placeholder=\"Search by Name or User Name\"\r\n        (ionChange)=\"onSearchByUsername($event.target.value)\" \r\n        (ionCancel)=\"onCancelSearch()\"\r\n      ></ion-searchbar>\r\n    </ion-col> -->\r\n  </ion-row>\r\n\r\n  <ion-row *ngIf=\"!showUserList\">\r\n    <ion-col size=\"12\">\r\n      <ion-item (click)=\"onImportContacts()\" lines=\"none\">\r\n        <ion-icon src=\"assets/icon/phone.svg\" slot=\"start\"> </ion-icon>\r\n        <ion-label>\r\n          <h2>Import Contacts</h2>\r\n          <p>Add from mobile address book</p>\r\n        </ion-label>\r\n        <ion-icon src=\"assets/icon/fwd.svg\" slot=\"end\"> </ion-icon>\r\n      </ion-item>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row *ngIf=\"showUserList\">\r\n    <div class=\"scrollDiv\">\r\n      <ion-col size=\"12\" *ngIf=\"usernameSearchRes.length\">\r\n        <ion-item (click)=\"openDialogBox(name)\" *ngFor=\"let name of usernameSearchRes\">\r\n          <ion-label>\r\n            <h2>{{name.user_name}}</h2>\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col *ngIf=\"!usernameSearchRes.length\">\r\n        <p>No user Found</p>\r\n      </ion-col>\r\n    </div>\r\n  </ion-row>\r\n\r\n\r\n</ion-grid>");

/***/ })

}]);
//# sourceMappingURL=src_app_main_add-contact_add-contact_module_ts.js.map