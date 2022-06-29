(self["webpackChunkpic_playce"] = self["webpackChunkpic_playce"] || []).push([["src_app_main_play-game_play-game_module_ts"],{

/***/ 4329:
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic-native/keyboard/__ivy_ngcc__/ngx/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KeyboardStyle": () => (/* binding */ KeyboardStyle),
/* harmony export */   "KeyboardResizeMode": () => (/* binding */ KeyboardResizeMode),
/* harmony export */   "Keyboard": () => (/* binding */ Keyboard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/core */ 60399);





var KeyboardStyle;
(function (KeyboardStyle) {
    KeyboardStyle["Light"] = "light";
    KeyboardStyle["Dark"] = "dark";
})(KeyboardStyle || (KeyboardStyle = {}));
var KeyboardResizeMode;
(function (KeyboardResizeMode) {
    KeyboardResizeMode["Native"] = "native";
    KeyboardResizeMode["Ionic"] = "ionic";
    KeyboardResizeMode["Body"] = "body";
    KeyboardResizeMode["None"] = "none";
})(KeyboardResizeMode || (KeyboardResizeMode = {}));
var Keyboard = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(Keyboard, _super);
    function Keyboard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Keyboard.prototype.hideFormAccessoryBar = function (hide) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "hideFormAccessoryBar", { "sync": true, "platforms": ["iOS"] }, arguments); };
    Keyboard.prototype.hide = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "hide", { "sync": true, "platforms": ["iOS", "Android"] }, arguments); };
    Keyboard.prototype.show = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "show", { "sync": true, "platforms": ["Android"] }, arguments); };
    Keyboard.prototype.setResizeMode = function (mode) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "setResizeMode", { "sync": true, "platforms": ["iOS"] }, arguments); };
    Keyboard.prototype.setKeyboardStyle = function (style) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "setKeyboardStyle", { "sync": true, "platforms": ["iOS"] }, arguments); };
    Keyboard.prototype.disableScroll = function (disable) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "disableScroll", { "sync": true, "platforms": ["iOS"] }, arguments); };
    Keyboard.prototype.onKeyboardShow = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "onKeyboardShow", { "eventObservable": true, "event": "native.keyboardshow", "platforms": ["iOS", "Android"] }, arguments); };
    Keyboard.prototype.onKeyboardWillShow = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "onKeyboardWillShow", { "eventObservable": true, "event": "keyboardWillShow", "platforms": ["iOS", "Android"] }, arguments); };
    Keyboard.prototype.onKeyboardDidShow = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "onKeyboardDidShow", { "eventObservable": true, "event": "keyboardDidShow", "platforms": ["iOS", "Android"] }, arguments); };
    Keyboard.prototype.onKeyboardHide = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "onKeyboardHide", { "eventObservable": true, "event": "native.keyboardhide", "platforms": ["iOS", "Android"] }, arguments); };
    Keyboard.prototype.onKeyboardWillHide = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "onKeyboardWillHide", { "eventObservable": true, "event": "keyboardWillHide", "platforms": ["iOS", "Android"] }, arguments); };
    Keyboard.prototype.onKeyboardDidHide = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "onKeyboardDidHide", { "eventObservable": true, "event": "keyboardDidHide", "platforms": ["iOS", "Android"] }, arguments); };
    Object.defineProperty(Keyboard.prototype, "isVisible", {
        get: function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "isVisible"); },
        set: function (value) { (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "isVisible", value); },
        enumerable: false,
        configurable: true
    });
    Keyboard.pluginName = "Keyboard";
    Keyboard.plugin = "cordova-plugin-ionic-keyboard";
    Keyboard.pluginRef = "window.Keyboard";
    Keyboard.repo = "https://github.com/ionic-team/cordova-plugin-ionic-keyboard";
    Keyboard.platforms = ["Android", "iOS"];
Keyboard.ɵfac = /*@__PURE__*/ function () { var ɵKeyboard_BaseFactory; return function Keyboard_Factory(t) { return (ɵKeyboard_BaseFactory || (ɵKeyboard_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](Keyboard)))(t || Keyboard); }; }();
Keyboard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: Keyboard, factory: function (t) { return Keyboard.ɵfac(t); } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](Keyboard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable
    }], null, null); })();
    return Keyboard;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.IonicNativePlugin));


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMva2V5Ym9hcmQvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sc0VBQXVELE1BQU0sb0JBQW9CLENBQUM7QUFDekYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFFbEMsTUFBTSxDQUFOLElBQVksYUFHWDtBQUhELFdBQVksYUFBYTtBQUN4QixJQUFDLGdDQUFlLENBQUE7QUFBQyxJQUNoQiw4QkFBYSxDQUFBO0FBQ2YsQ0FBQyxFQUhXLGFBQWEsS0FBYixhQUFhLFFBR3hCO0FBRUQsTUFBTSxDQUFOLElBQVksa0JBS1g7QUFMRCxXQUFZLGtCQUFrQjtBQUM3QixJQUFDLHVDQUFpQixDQUFBO0FBQUMsSUFDbEIscUNBQWUsQ0FBQTtBQUFDLElBQ2hCLG1DQUFhLENBQUE7QUFBQyxJQUNkLG1DQUFhLENBQUE7QUFDZixDQUFDLEVBTFcsa0JBQWtCLEtBQWxCLGtCQUFrQixRQUs3QjtBQUNEO0FBSU0sSUE0QndCLDRCQUFpQjtBQUFDO0FBRTlCO0FBR0E7QUFDZixJQVVELHVDQUFvQixhQUFDLElBQWE7QUFPbEIsSUFFaEIsdUJBQUk7QUFPbUIsSUFFdkIsdUJBQUk7QUFPTixJQUdFLGdDQUFhLGFBQUMsSUFBd0I7QUFNakMsSUFJTCxtQ0FBZ0IsYUFBQyxLQUFvQjtBQUlmLElBTXRCLGdDQUFhLGFBQUMsT0FBZ0I7QUFHK0MsSUFRN0UsaUNBQWM7QUFLd0csSUFRdEgscUNBQWtCO0FBS3FHLElBUXZILG9DQUFpQjtBQUtvRyxJQVFySCxpQ0FBYztBQUt3RyxJQVF0SCxxQ0FBa0I7QUFLcUcsSUFRdkgsb0NBQWlCO0FBSXlHLDBCQTFJMUgsK0JBQVM7QUFBSTtBQUcrQztBQUs1RDtBQUVGO0FBQTJCO0FBQVE7QUFHaEI7QUFJYjtBQUVJO0FBT1Y7NENBakNDLFVBQVU7Ozs7MEJBQ0w7QUFBQyxtQkEvQ1A7QUFBRSxFQStDNEIsaUJBQWlCO0FBQzlDLFNBRFksUUFBUTtBQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIENvcmRvdmFQcm9wZXJ0eSwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGVudW0gS2V5Ym9hcmRTdHlsZSB7XG4gIExpZ2h0ID0gJ2xpZ2h0JyxcbiAgRGFyayA9ICdkYXJrJyxcbn1cblxuZXhwb3J0IGVudW0gS2V5Ym9hcmRSZXNpemVNb2RlIHtcbiAgTmF0aXZlID0gJ25hdGl2ZScsXG4gIElvbmljID0gJ2lvbmljJyxcbiAgQm9keSA9ICdib2R5JyxcbiAgTm9uZSA9ICdub25lJyxcbn1cblxuLyoqXG4gKiBAbmFtZSBLZXlib2FyZFxuICogQHByZW1pZXIga2V5Ym9hcmRcbiAqIEBjYXBhY2l0b3JpbmNvbXBhdGlibGUgdHJ1ZVxuICogQGRlc2NyaXB0aW9uXG4gKiBLZXlib2FyZCBwbHVnaW4gZm9yIENvcmRvdmEuXG4gKlxuICogUmVxdWlyZXMgQ29yZG92YSBwbHVnaW46IGBjb3Jkb3ZhLXBsdWdpbi1pb25pYy1rZXlib2FyZGAuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIFtLZXlib2FyZCBwbHVnaW4gZG9jc10oaHR0cHM6Ly9naXRodWIuY29tL2lvbmljLXRlYW0vY29yZG92YS1wbHVnaW4taW9uaWMta2V5Ym9hcmQpLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgS2V5Ym9hcmQgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2tleWJvYXJkL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBrZXlib2FyZDogS2V5Ym9hcmQpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMua2V5Ym9hcmQuc2hvdygpO1xuICpcbiAqIHRoaXMua2V5Ym9hcmQuaGlkZSgpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0tleWJvYXJkJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4taW9uaWMta2V5Ym9hcmQnLFxuICBwbHVnaW5SZWY6ICd3aW5kb3cuS2V5Ym9hcmQnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2lvbmljLXRlYW0vY29yZG92YS1wbHVnaW4taW9uaWMta2V5Ym9hcmQnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgS2V5Ym9hcmQgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBDaGVjayBrZXlib2FyZCBzdGF0dXMgdmlzaWJsZSBvciBub3QuXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIGlzVmlzaWJsZTogYm9vbGVhbjtcblxuICAvKipcbiAgICogSGlkZSB0aGUga2V5Ym9hcmQgYWNjZXNzb3J5IGJhciB3aXRoIHRoZSBuZXh0LCBwcmV2aW91cyBhbmQgZG9uZSBidXR0b25zLlxuICAgKiBAcGFyYW0gaGlkZSB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICAgIHBsYXRmb3JtczogWydpT1MnXSxcbiAgfSlcbiAgaGlkZUZvcm1BY2Nlc3NvcnlCYXIoaGlkZTogYm9vbGVhbik6IHZvaWQge31cblxuICAvKipcbiAgICogSGlkZSB0aGUga2V5Ym9hcmQgaWYgc2hvd24uXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJywgJ0FuZHJvaWQnXSxcbiAgfSlcbiAgaGlkZSgpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIEZvcmNlIGtleWJvYXJkIHRvIGJlIHNob3duLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcbiAgfSlcbiAgc2hvdygpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFByb2dyYW1hdGljYWxseSBzZXQgdGhlIHJlc2l6ZSBtb2RlXG4gICAqIEBwYXJhbSBtb2RlIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJ10sXG4gIH0pXG4gIHNldFJlc2l6ZU1vZGUobW9kZTogS2V5Ym9hcmRSZXNpemVNb2RlKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBQcm9ncmFtYXRpY2FsbHkgc2V0IEtleWJvYXJkIHN0eWxlXG4gICAqIEBwYXJhbSBtb2RlIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJ10sXG4gIH0pXG4gIHNldEtleWJvYXJkU3R5bGUoc3R5bGU6IEtleWJvYXJkU3R5bGUpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFByb2dyYW1hdGljYWxseSBlbmFibGUgb3IgZGlzYWJsZSB0aGUgV2ViVmlldyBzY3JvbGxcbiAgICogQHBhcmFtIG1vZGUge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICAgIHBsYXRmb3JtczogWydpT1MnXSxcbiAgfSlcbiAgZGlzYWJsZVNjcm9sbChkaXNhYmxlOiBib29sZWFuKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9ic2VydmFibGUgdGhhdCBub3RpZmllcyB5b3Ugd2hlbiB0aGUga2V5Ym9hcmQgaXMgc2hvd24uIFVuc3Vic2NyaWJlIHRvIG9ic2VydmFibGUgdG8gY2FuY2VsIGV2ZW50IHdhdGNoLlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGV2ZW50T2JzZXJ2YWJsZTogdHJ1ZSxcbiAgICBldmVudDogJ25hdGl2ZS5rZXlib2FyZHNob3cnLFxuICAgIHBsYXRmb3JtczogWydpT1MnLCAnQW5kcm9pZCddLFxuICB9KVxuICBvbktleWJvYXJkU2hvdygpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9ic2VydmFibGUgdGhhdCBub3RpZmllcyB5b3Ugd2hlbiB0aGUga2V5Ym9hcmQgd2lsbCBzaG93LiBVbnN1YnNjcmliZSB0byBvYnNlcnZhYmxlIHRvIGNhbmNlbCBldmVudCB3YXRjaC5cbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBldmVudE9ic2VydmFibGU6IHRydWUsXG4gICAgZXZlbnQ6ICdrZXlib2FyZFdpbGxTaG93JyxcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJywgJ0FuZHJvaWQnXSxcbiAgfSlcbiAgb25LZXlib2FyZFdpbGxTaG93KCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JzZXJ2YWJsZSB0aGF0IG5vdGlmaWVzIHlvdSB3aGVuIHRoZSBrZXlib2FyZCBkaWQgc2hvdy4gVW5zdWJzY3JpYmUgdG8gb2JzZXJ2YWJsZSB0byBjYW5jZWwgZXZlbnQgd2F0Y2guXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgZXZlbnRPYnNlcnZhYmxlOiB0cnVlLFxuICAgIGV2ZW50OiAna2V5Ym9hcmREaWRTaG93JyxcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJywgJ0FuZHJvaWQnXSxcbiAgfSlcbiAgb25LZXlib2FyZERpZFNob3coKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYnNlcnZhYmxlIHRoYXQgbm90aWZpZXMgeW91IHdoZW4gdGhlIGtleWJvYXJkIGlzIGhpZGRlbi4gVW5zdWJzY3JpYmUgdG8gb2JzZXJ2YWJsZSB0byBjYW5jZWwgZXZlbnQgd2F0Y2guXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgZXZlbnRPYnNlcnZhYmxlOiB0cnVlLFxuICAgIGV2ZW50OiAnbmF0aXZlLmtleWJvYXJkaGlkZScsXG4gICAgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJ10sXG4gIH0pXG4gIG9uS2V5Ym9hcmRIaWRlKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JzZXJ2YWJsZSB0aGF0IG5vdGlmaWVzIHlvdSB3aGVuIHRoZSBrZXlib2FyZCB3aWxsIGhpZGUuIFVuc3Vic2NyaWJlIHRvIG9ic2VydmFibGUgdG8gY2FuY2VsIGV2ZW50IHdhdGNoLlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGV2ZW50T2JzZXJ2YWJsZTogdHJ1ZSxcbiAgICBldmVudDogJ2tleWJvYXJkV2lsbEhpZGUnLFxuICAgIHBsYXRmb3JtczogWydpT1MnLCAnQW5kcm9pZCddLFxuICB9KVxuICBvbktleWJvYXJkV2lsbEhpZGUoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYnNlcnZhYmxlIHRoYXQgbm90aWZpZXMgeW91IHdoZW4gdGhlIGtleWJvYXJkIGRpZCBoaWRlLiBVbnN1YnNjcmliZSB0byBvYnNlcnZhYmxlIHRvIGNhbmNlbCBldmVudCB3YXRjaC5cbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBldmVudE9ic2VydmFibGU6IHRydWUsXG4gICAgZXZlbnQ6ICdrZXlib2FyZERpZEhpZGUnLFxuICAgIHBsYXRmb3JtczogWydpT1MnLCAnQW5kcm9pZCddLFxuICB9KVxuICBvbktleWJvYXJkRGlkSGlkZSgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19

/***/ }),

/***/ 87877:
/*!************************************************************!*\
  !*** ./src/app/main/play-game/play-game-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayGamePageRoutingModule": () => (/* binding */ PlayGamePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _play_game_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./play-game.page */ 7399);




const routes = [
    {
        path: '',
        component: _play_game_page__WEBPACK_IMPORTED_MODULE_0__.PlayGamePage
    }
];
let PlayGamePageRoutingModule = class PlayGamePageRoutingModule {
};
PlayGamePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PlayGamePageRoutingModule);



/***/ }),

/***/ 36165:
/*!****************************************************!*\
  !*** ./src/app/main/play-game/play-game.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayGamePageModule": () => (/* binding */ PlayGamePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _play_game_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./play-game-routing.module */ 87877);
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ 4329);
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-dragula */ 88989);
/* harmony import */ var _play_game_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./play-game.page */ 7399);










let PlayGamePageModule = class PlayGamePageModule {
};
PlayGamePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _play_game_routing_module__WEBPACK_IMPORTED_MODULE_0__.PlayGamePageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            ng2_dragula__WEBPACK_IMPORTED_MODULE_8__.DragulaModule,
        ],
        providers: [_ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_1__.Keyboard, ng2_dragula__WEBPACK_IMPORTED_MODULE_8__.DragulaService],
        declarations: [_play_game_page__WEBPACK_IMPORTED_MODULE_2__.PlayGamePage]
    })
], PlayGamePageModule);



/***/ }),

/***/ 7399:
/*!**************************************************!*\
  !*** ./src/app/main/play-game/play-game.page.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayGamePage": () => (/* binding */ PlayGamePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_play_game_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./play-game.page.html */ 15349);
/* harmony import */ var _play_game_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./play-game.page.scss */ 698);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-dragula */ 88989);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ 91704);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_service_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/rest.service */ 90421);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ 88259);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ionic_native_spinner_dialog_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/spinner-dialog/ngx */ 32423);













let PlayGamePage = class PlayGamePage {
    constructor(route, dragulaService, restService, loadingController, router, fb, navCtrl, alertController, changeDetection, spinnerDialog) {
        // this.router.events.subscribe((event) => console.log(event))
        this.route = route;
        this.dragulaService = dragulaService;
        this.restService = restService;
        this.loadingController = loadingController;
        this.router = router;
        this.fb = fb;
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.changeDetection = changeDetection;
        this.spinnerDialog = spinnerDialog;
        this.currentInput = 0;
        this.changedValues = [];
        this.addTurnItem = 0;
        this.revealItem = 0;
        this.isPuzzleSolved = false;
        this.gameType = 'easy';
        this.canvasArray = [1, 2, 3, 4];
        this.sequence = ['toHide', 'toHide1', 'toHide2', 'toHide3'];
        // sequenceUpdated = ['toHide', 'toHide1', 'toHide2', 'toHide3'];
        this.rotations = {
            toHide: 4,
            toHide1: 4,
            toHide2: 4,
            toHide3: 4,
        };
        this.hintWord = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
        this.lettersArr = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormArray([]);
        this.puzzleWordCount = 10;
        this.filterList = [];
        this.ownedItemsList = [];
        this.isLoading = true;
        this.selection = "primary";
        this.buttons = "default";
        this.lastValue = 0;
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
        this.normalSecondaryValues = {
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
        this.played = [];
        this.geusses = [];
        this.countWord = 10;
        this.primayFilterRemovalList = [];
        this.secondaryFilterRemovalList = [];
        this.addTurn = [];
        this.revealList = [];
        this.revealCount = 0;
        this.dragulaService
            .drop('totalPiece')
            .subscribe(({ name, el, target, source, sibling }) => {
            const targetIndex = this.sequence.indexOf(target.className.split(' ')[0]);
            const sourceIndex = this.sequence.indexOf(source.className.split(' ')[0]);
            this.sequence[targetIndex] = source.className.split(' ')[0];
            this.sequence[sourceIndex] = target.className.split(' ')[0];
            console.log('finalSequence', this.sequence);
            const swappee = jquery__WEBPACK_IMPORTED_MODULE_2__(target).find('canvas').not(el);
            swappee.appendTo(source);
            let temp = source.className;
            source.className = target.className;
            target.className = temp;
            this.checkGameWin();
            this.autoSwap();
        });
    }
    ngOnInit() {
        let THIS = this;
        this.getOwnedItemList();
        this.lettersArr = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormArray([]);
        this.userId = this.route.snapshot.paramMap.get('userId');
        this.gameObj = this.route.snapshot.paramMap.get('game');
        this.gameObj = JSON.parse(this.gameObj);
        this.restService.postRequest('filter/get-filter-by-id', { filter_id: this.gameObj.filter_id }).subscribe((res) => {
            if (res.filter.length) {
                this.primaryFilter = res.filter[0].name;
            }
        });
        if (this.gameObj.status == 1) {
            this.cameraImage = this.gameObj.image;
        }
        if (this.gameObj.status == 0) {
            this.cameraImage = this.gameObj.p_image;
        }
        this.sequence = JSON.parse(this.gameObj.swap_sequence);
        this.rotations = JSON.parse(this.gameObj.rotate_sequence);
        let secondaryVal = JSON.parse(this.gameObj.secondary_values);
        this.secondaryValues.numbers.blur = secondaryVal.numbers.blur;
        this.secondaryValues.numbers.grayscale = secondaryVal.numbers.grayscale;
        this.secondaryValues.numbers.hue_rotate = secondaryVal.numbers.hue_rotate;
        this.secondaryValues.numbers.invert = secondaryVal.numbers.invert;
        this.secondaryValues.numbers.sepia = secondaryVal.numbers.sepia;
        this.secondaryValues.numbers.saturate = secondaryVal.numbers.saturate;
        this.secondaryValues.numbers.opacity = secondaryVal.numbers.opacity;
        this.secondaryValues.numbers.brightness = secondaryVal.numbers.brightness;
        this.secondaryValues.numbers.contrast = secondaryVal.numbers.contrast;
        this.tl = this.sequence[0];
        this.tr = this.sequence[1];
        this.bl = this.sequence[2];
        this.br = this.sequence[3];
        let word = this.gameObj.word.split('');
        for (let i = 0; i < word.length; i++) {
            this.makeFormGroup(word);
        }
        var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
            'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
            't', 'u', 'v', 'w', 'x', 'y', 'z'];
        var list;
        var buttons = function () {
            let myButtons = document.getElementById('buttons');
            let letters = document.createElement('ul');
            for (var i = 0; i < alphabet.length; i++) {
                letters.id = 'alphabet';
                letters.classList.add('alphabet');
                list = document.createElement('li');
                list.id = 'letter' + i;
                list.innerHTML = alphabet[i];
                list.style.border = '1px solid black';
                list.style.minWidth = '10vw';
                list.style.minHeight = '10vw';
                list.style.marginRight = '3vw';
                check();
                myButtons.appendChild(letters);
                letters.appendChild(list);
                if (alphabet[i] == 'm') {
                    letters.appendChild(document.createElement('br'));
                    letters.appendChild(document.createElement('br'));
                }
            }
        };
        let check = function () {
            list.onclick = function () {
                btnUpdate(this);
            };
        };
        buttons();
        function btnUpdate(that) {
            // console.log('this.lettersArr', THIS.lettersArr);
            if (THIS.countWord) {
                THIS.countWord--;
                that.setAttribute("class", "active");
                for (let index = 0; index < THIS.gameObj.word.length; index++) {
                    if (THIS.gameObj.word[index].toLowerCase() == that.innerHTML.toLowerCase()) {
                        THIS.lettersArr.controls[index].setValue(that.innerHTML);
                    }
                    if (THIS.lettersArr.status == 'VALID') {
                        let str = THIS.lettersArr.value.toString().replace(/,/g, '').toLowerCase();
                        if (str == THIS.gameObj.word.toLowerCase()) {
                            const gameResult = {
                                game_id: THIS.gameObj.id,
                                status: 2
                            };
                            THIS.restService.postRequestToken('games/result', gameResult).subscribe(res => {
                                if (res) {
                                    jquery__WEBPACK_IMPORTED_MODULE_2__('#originalImage').css('display', 'block');
                                    jquery__WEBPACK_IMPORTED_MODULE_2__('#canvas-grid').css('display', 'none');
                                }
                            });
                            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
                                title: '<div><img src="assets/icon/won.png" style="width: 20vw; height:20vw;"><br><h5>You Won!</h5></div>',
                                text: "It's your turn! Would you like to send a game back?",
                                confirmButtonText: 'Send',
                                confirmButtonColor: '#99C43C',
                                showCancelButton: true, allowOutsideClick: true,
                                // backdrop: true,
                                cancelButtonColor: '#E86B5D',
                                cancelButtonText: "Cancel"
                            }).then((result) => {
                                console.log('--->', result);
                                if (result.isConfirmed) {
                                    THIS.router.navigate(['contactlist', { friend_id: THIS.gameObj.user_id }], { replaceUrl: true });
                                    // window.location.reload();
                                    // console.log('Game Object', THIS.gameObj);
                                }
                                else {
                                    THIS.router.navigate(['main'], { replaceUrl: true });
                                }
                            });
                        }
                        if (str != THIS.gameObj.word.toLowerCase()) {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
                                title: '<div><img src="assets/icon/lost.png" style="width: 20vw; height:20vw;"><br><h5>You lost!</h5></div>',
                                html: "The correct answer was: " + THIS.gameObj.word + "<br>It's your turn! Would you like to send a game back?",
                                confirmButtonText: 'Send',
                                confirmButtonColor: '#99C43C',
                                showCancelButton: true, allowOutsideClick: true,
                                // backdrop: true,
                                cancelButtonColor: '#E86B5D',
                                cancelButtonText: "Cancel"
                            }).then((result) => {
                                const gameResult = {
                                    game_id: THIS.gameObj.id,
                                    status: 3
                                };
                                THIS.restService.postRequestToken('games/result', gameResult).subscribe(res => {
                                    if (res) {
                                        THIS.getUserData();
                                    }
                                });
                                if (result.isConfirmed) {
                                    THIS.router.navigate(['contactlist', { friend_id: THIS.gameObj.user_id }], { replaceUrl: true });
                                }
                                else {
                                    THIS.router.navigate(['main', { gameSent: true }], { replaceUrl: true });
                                }
                            });
                        }
                    }
                }
                ;
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
                    title: '<div><img src="assets/icon/notice.png" style="width: 20vw; height:20vw;"><br><h5>Oh no!</h5></div>',
                    text: 'You dont have extra turn. Do you want to go to store and buy from there?',
                    confirmButtonText: 'Yes',
                    confirmButtonColor: '#99C43C',
                    showCancelButton: true, allowOutsideClick: true,
                    // backdrop: true,
                    cancelButtonColor: '#E86B5D',
                    cancelButtonText: "No"
                }).then(result => {
                    if (result.isConfirmed) {
                    }
                    if (!result.isConfirmed) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
                            title: '<div><img src="assets/icon/lost.png" style="width: 20vw; height:20vw;"><br><h5>You lost!</h5></div>',
                            html: "The correct answer was: " + THIS.gameObj.word + "<br>It's your turn! Would you like to send a game back?",
                            confirmButtonText: 'Send',
                            confirmButtonColor: '#99C43C',
                            showCancelButton: true, allowOutsideClick: true,
                            // backdrop: true,
                            cancelButtonColor: '#E86B5D',
                            cancelButtonText: "Cancel"
                        }).then((result) => {
                            const gameResult = {
                                game_id: THIS.gameObj.id,
                                status: 3
                            };
                            THIS.restService.postRequestToken('games/result', gameResult).subscribe(res => {
                                if (res) {
                                    THIS.getUserData();
                                }
                            });
                            if (result.isConfirmed) {
                                THIS.router.navigate(['contactlist', { friend_id: THIS.gameObj.user_id }], { replaceUrl: true });
                            }
                            else {
                                THIS.router.navigate(['main', { gameSent: true }], { replaceUrl: true });
                            }
                            // if (result.value) {
                            //   THIS.router.navigate(['main/store', { replceUrl: true }])
                            // } else {
                            //   THIS.router.navigate(['main', { replceUrl: true }])
                            // }
                        });
                    }
                    // console.log('This is result', result);
                });
            }
        }
    }
    presentAlert(header, body) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: header,
                message: body,
                buttons: [
                    {
                        text: 'OK',
                        handler: () => {
                            this.navCtrl.navigateBack('main');
                        }
                    }
                ]
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
        });
    }
    presentAlertForShop(header, body, paramObj) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: header,
                message: body,
                buttons: [
                    {
                        text: 'Yes',
                        handler: () => {
                            this.router.navigate(['main/store', { params: JSON.stringify(paramObj) }]);
                        }
                    },
                    {
                        text: 'No',
                    }
                ]
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
        });
    }
    Rotate(index, c) {
        this.rotations[c]++;
        var canvas = document.getElementById('canvas' + index), context = canvas.getContext('2d'), pictureWidth = canvas.width, pictureHeight = canvas.height;
        pictureWidth = (pictureWidth) * 2;
        pictureHeight = (pictureHeight) * 2;
        context.save();
        context.translate(pictureWidth / 4, pictureHeight / 4);
        context.rotate(Math.PI / 2);
        context.drawImage(canvas, -pictureWidth / 4, -pictureHeight / 4, pictureWidth / 2, pictureHeight / 2);
        context.restore();
        // this.audioService.play('rotatingTile');
        this.checkGameWin();
    }
    Crop() {
        if (!this.isPuzzleSolved && this.gameObj.status == 0) {
            console.log('Game Obj', this.gameObj);
            let originalImage = jquery__WEBPACK_IMPORTED_MODULE_2__("#originalImage");
            let self = this;
            let pictureWidth;
            let pictureHeight;
            let newImage = new Image();
            newImage.src = this.cameraImage;
            newImage.width = originalImage.width();
            console.log('Width', newImage.width);
            newImage.height = originalImage.width();
            //this.imageWidth = originalImage.width();
            newImage.onload = function () {
                pictureWidth = originalImage.width();
                pictureHeight = originalImage.width();
                var w2 = pictureWidth / 2, h2 = pictureHeight / 2, parts = [];
                for (var i = 0; i < 4; i++) {
                    var count = i + 1;
                    var canvas = (document.getElementById("canvas" + count)), ctx = canvas.getContext("2d");
                    var x = (-w2 * i) % (w2 * 2), y = h2 * i <= h2 ? 0 : -h2;
                    canvas.width = w2;
                    canvas.height = h2;
                    if (i == 3) {
                        self.imageWidth = canvas.width + canvas.width;
                    }
                    ctx.drawImage(newImage, x, y, w2 * 2, h2 * 2);
                }
            }; //end of onload function
            jquery__WEBPACK_IMPORTED_MODULE_2__('#originalImage').css('display', 'none');
            jquery__WEBPACK_IMPORTED_MODULE_2__('#gamewindiv').css('display', 'none');
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_2__('#originalImage').css('display', 'show');
            jquery__WEBPACK_IMPORTED_MODULE_2__('#gamewindiv').css('display', 'block');
        }
    }
    Crop1() {
        if (!this.isPuzzleSolved && this.gameObj.status == 0) {
            console.log('Game Obj', this.gameObj);
            let originalImage = jquery__WEBPACK_IMPORTED_MODULE_2__("#originalImage1");
            let self = this;
            let pictureWidth;
            let pictureHeight;
            let newImage = new Image();
            newImage.src = this.cameraImage;
            var oWidth = newImage.width;
            var oHeight = newImage.height;
            // newImage.width = oWidth - 10;
            // newImage.height = oHeight - 10;
            // newImage.width = originalImage.width();
            // newImage.height = originalImage.height();
            //this.imageWidth = originalImage.width();
            newImage.onload = function () {
                pictureWidth = oWidth;
                pictureHeight = oHeight;
                var gridSize = 3;
                //   var marginValueW = (oWidth / gridSize) - 200;
                //   var marginValueH = (oHeight / gridSize) - 200;
                var w2 = pictureWidth / gridSize, h2 = pictureHeight / gridSize, parts = [];
                for (let i = 0; i < gridSize; i++) {
                    for (let j = 0; j < gridSize; j++) {
                        let cnvs = "canvas" + ((j + 1) + (i * gridSize));
                        var canvas = document.getElementById(cnvs);
                        var ctx = canvas.getContext("2d");
                        ctx.drawImage(newImage, (w2 * j), (h2 * i), w2, h2, 0, 0, canvas.width, canvas.height);
                    }
                }
            };
            jquery__WEBPACK_IMPORTED_MODULE_2__('#originalImage').css('display', 'none');
            jquery__WEBPACK_IMPORTED_MODULE_2__('#gamewindiv').css('display', 'none');
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_2__('#originalImage').css('display', 'show');
            jquery__WEBPACK_IMPORTED_MODULE_2__('#gamewindiv').css('display', 'block');
        }
    }
    makeFormGroup(arr) {
        return this.lettersArr.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required));
    }
    autoSwap() {
        const children = jquery__WEBPACK_IMPORTED_MODULE_2__('.toHide').children('canvas');
        let childrenCount = 0;
        const children1 = jquery__WEBPACK_IMPORTED_MODULE_2__('.toHide1').children('canvas');
        let children1Count = 0;
        const children2 = jquery__WEBPACK_IMPORTED_MODULE_2__('.toHide2').children('canvas');
        let children2Count = 0;
        const children3 = jquery__WEBPACK_IMPORTED_MODULE_2__('.toHide3').children('canvas');
        let children3Count = 0;
        children.each(function () {
            const id = jquery__WEBPACK_IMPORTED_MODULE_2__(this).attr('id');
            childrenCount++;
        });
        // console.log('check this count ', childrenCount);
        children1.each(function () {
            const id = jquery__WEBPACK_IMPORTED_MODULE_2__(this).attr('id');
            children1Count++;
        });
        // console.log('check this count ', children1Count);
        children2.each(function () {
            const id = jquery__WEBPACK_IMPORTED_MODULE_2__(this).attr('id');
            children2Count++;
        });
        // console.log('check this count ', children2Count);
        children3.each(function () {
            const id = jquery__WEBPACK_IMPORTED_MODULE_2__(this).attr('id');
            children3Count++;
        });
        // console.log('check this count ', children3Count);
        console.log('check this final sequence', this.sequence);
        let swapIn;
        let swapOut;
        if (childrenCount == 0) {
            swapIn = jquery__WEBPACK_IMPORTED_MODULE_2__('.toHide');
        }
        if (children1Count == 0) {
            swapIn = jquery__WEBPACK_IMPORTED_MODULE_2__('.toHide1');
        }
        if (children2Count == 0) {
            swapIn = jquery__WEBPACK_IMPORTED_MODULE_2__('.toHide2');
        }
        if (children3Count == 0) {
            swapIn = jquery__WEBPACK_IMPORTED_MODULE_2__('.toHide3');
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
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                duration: 2000,
            });
            yield loading.present();
        });
    }
    checkGameWin() {
        console.log('Gameee win ', this.gameObj);
        const gameResult = {
            game_id: this.gameObj.id,
            status: 1
        };
        if (this.gameObj.type == 'easy') {
            if (this.rotations['toHide'] % 4 === 0 &&
                this.rotations['toHide1'] % 4 === 0 &&
                this.rotations['toHide2'] % 4 === 0 &&
                this.rotations['toHide3'] % 4 === 0 && !this.isPuzzleSolved) {
                if (this.sequence[0] === 'toHide' &&
                    this.sequence[1] === 'toHide1' &&
                    this.sequence[2] === 'toHide2' &&
                    this.sequence[3] === 'toHide3') {
                    this.isPuzzleSolved = true;
                    this.gameObj.status = 1;
                    this.restService.postRequestToken('games/result', gameResult).subscribe(res => {
                        if (res) {
                            this.getUserData();
                        }
                    });
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
                        title: '<div><img src="assets/icon/greencheck.png" style="width: 20vw; height:20vw;"><br><h5>You Solved Puzzle!</h5></div>',
                        text: 'You got 50 exp and 3 Puzzle Pieces!',
                        confirmButtonText: 'Cool',
                        confirmButtonColor: '#99C43C',
                    }).then(result => {
                        this.router.navigate(['/main', { gameSent: true }], { replaceUrl: true, });
                        jquery__WEBPACK_IMPORTED_MODULE_2__('#originalImage').css('display', 'block');
                        jquery__WEBPACK_IMPORTED_MODULE_2__('#canvas-grid').css('display', 'none');
                    });
                }
            }
        }
        if (this.gameObj.type == 'medium') {
            console.log(this.sequence);
            console.log(this.rotations);
            if ((this.rotations['toHide'] % 4 === 0 &&
                this.rotations['toHide1'] % 4 === 0 &&
                this.rotations['toHide2'] % 4 === 0 &&
                this.rotations['toHide3'] % 4 === 0 &&
                this.rotations['toHide4'] % 4 === 0 &&
                this.rotations['toHide5'] % 4 === 0 &&
                this.rotations['toHide5'] % 4 === 0 &&
                this.rotations['toHide5'] % 4 === 0 &&
                this.rotations['toHide5'] % 4 === 0 &&
                this.rotations['toHide5'] % 4 === 0 &&
                this.rotations['toHide5'] % 4 === 0) && !this.isPuzzleSolved) {
                if (this.sequence[0] === 'toHide' &&
                    this.sequence[1] === 'toHide1' &&
                    this.sequence[2] === 'toHide2' &&
                    this.sequence[3] === 'toHide3' &&
                    this.sequence[4] === 'toHide4' &&
                    this.sequence[5] === 'toHide5' &&
                    this.sequence[6] === 'toHide6' &&
                    this.sequence[7] === 'toHide7' &&
                    this.sequence[8] === 'toHide8') {
                    this.isPuzzleSolved = true;
                    this.gameObj.status = 1;
                    this.restService.postRequestToken('games/result', gameResult).subscribe(res => {
                        if (res) {
                            this.getUserData();
                        }
                    });
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
                        title: '<div><img src="assets/icon/greencheck.png" style="width: 20vw; height:20vw;"><br><h5>You Solved Puzzle!</h5></div>',
                        text: 'You got 50 exp and 3 Puzzle Pieces!',
                        confirmButtonText: 'Cool',
                        confirmButtonColor: '#99C43C',
                    }).then(result => {
                        this.router.navigate(['/main', { gameSent: true }], { replaceUrl: true, });
                        jquery__WEBPACK_IMPORTED_MODULE_2__('#originalImage').css('display', 'block');
                        jquery__WEBPACK_IMPORTED_MODULE_2__('#canvas-grid').css('display', 'none');
                    });
                }
            }
        }
    }
    nextInputFocus(index, event) {
        console.log('event', event.innerHTML);
        if (this.puzzleWordCount) {
            this.puzzleWordCount--;
            if (event.innerHTML != 'backSpace') {
                this.currentInput = index + 1;
                jquery__WEBPACK_IMPORTED_MODULE_2__('#puzzle-word-' + (index + 1)).focus();
            }
            // console.log(event.keyCode);
            if (event.innerHTML == 'backSpace') {
                this.currentInput = index - 1;
                jquery__WEBPACK_IMPORTED_MODULE_2__('#puzzle-word-' + (index - 1)).focus();
                jquery__WEBPACK_IMPORTED_MODULE_2__('#puzzle-word-' + (index - 1)).val('');
            }
            const gameResult = {
                game_id: this.gameObj.id,
                status: 2
            };
            if (this.lettersArr.controls.length == index + 1) {
                let str = this.lettersArr.value.toString().replace(/,/g, '').toLowerCase();
                if (str == this.gameObj.word.toLowerCase()) {
                    this.presentAlert('Congratulations', 'youwin');
                    // this.restService.postRequestToken('games/result', gameResult).subscribe(res => {
                    //   if (res) {
                    //     $('#originalImage').css('display', 'block');
                    //     $('#canvas-grid').css('display', 'none');
                    //   }
                    // })
                }
            }
        }
        else {
            const gameResult = {
                game_id: this.gameObj.id,
                status: 3
            };
            // this.restService.postRequestToken('games/result', gameResult).subscribe(res => {
            //   if (res) {
            //     $('#originalImage').css('display', 'block');
            //     $('#canvas-grid').css('display', 'none');
            //   }
            // })
            this.presentAlert('Sorry', 'youlost');
        }
    }
    checkOwnedFilter(filter) {
        console.log(this.ownedItemsList.find(x => x.filter_id == filter.id));
        return this.ownedItemsList.find(x => x.filter_id == filter.id);
        // !ownedItemsList[0].includes(filter.id)
    }
    segmentChanged(ev) {
        //alert(ev.value);
        this.selection = ev;
        this.changeDetection.detectChanges();
    }
    revertButtons(cancel = "no") {
        if (cancel == "cancel") {
            this.secondaryValues.ranges[this.secondaryFilterSelected].sliderValue =
                this.lastValue;
            this.secondaryValues.numbers[this.secondaryFilterSelected] =
                this.lastValue;
        }
        this.buttons = "default";
    }
    getOwnedItemList() {
        this.restService.getRequest('shop/purchase-detail').subscribe((res) => {
            this.ownedItemsList = res.message;
            this.primayFilterRemovalList = this.ownedItemsList.filter(x => x.shop_id == 3);
            this.secondaryFilterRemovalList = this.ownedItemsList.filter(x => x.shop_id == 4);
            this.addTurn = this.ownedItemsList.filter(x => x.shop_id == 5);
            this.revealList = this.ownedItemsList.filter(x => x.shop_id == 6);
        });
    }
    hideKeyboard(event) {
        return false;
    }
    focusInput(event) {
        event.preventDefault();
        return false;
    }
    onremovalPrimaryFilter() {
        if (!this.primaryFilter.length) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
                title: 'Alert',
                text: 'There are no filters to remove.',
                confirmButtonText: 'OK'
            });
            return;
        }
        if (this.primayFilterRemovalList.length > 0) {
            this.itemUsageConsentDialog('RemovePrimary', 'It will remove the primary filter from puzzle').then((res) => {
                if (res.isConfirmed) {
                    this.primaryFilter = '';
                    this.primayFilterRemovalList.shift();
                    this.restService.postRequestToken('shop/update-item', { user_shop_id: this.primayFilterRemovalList[0].id }).subscribe((res) => {
                        if (res.status) {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
                                title: 'Success',
                                text: 'You have Consumed Primary Filter',
                                confirmButtonText: 'OK'
                            });
                        }
                    });
                }
            }).catch(err => {
                console.log('Error', err);
            });
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
                title: 'Do you want to purchase primary removal Filter?',
                showDenyButton: true,
                confirmButtonText: 'Yes',
                denyButtonText: `Not`,
            }).then(res => {
                if (res.isConfirmed) {
                    this.router.navigate(['main/store'], { replaceUrl: true });
                }
            });
        }
    }
    onremovalSecondaryFilter() {
        if (!this.secondaryFilterRemovalList.length) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
                title: 'Alert',
                text: 'There are no filters to remove.',
                confirmButtonText: 'OK'
            });
            return;
        }
        if (this.secondaryFilterRemovalList.length > 0) {
            this.itemUsageConsentDialog('RemoveSecondary', 'It will remove the secondary filter from the puzzle').then(res => {
                console.log('Responsee', res);
            }).catch(err => {
                console.log('Error', err);
            });
            this.secondaryValues = this.normalSecondaryValues;
            this.secondaryFilterRemovalList.shift();
            this.restService.postRequestToken('shop/update-item', { user_shop_id: this.secondaryFilterRemovalList[0].id }).subscribe(res => {
                console.log('====>', res);
            });
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
                title: 'Do you want to purchase secondary removal Filter?',
                showDenyButton: true,
                confirmButtonText: 'Yes',
                denyButtonText: `Not`,
            }).then(res => {
                if (res.isConfirmed) {
                    this.router.navigate(['main/store'], { replaceUrl: true });
                }
            });
        }
    }
    onApplyingAddTurn() {
        if (this.addTurn.length) {
            this.itemUsageConsentDialog('AddTurn', 'It will add an extra guess').then((res) => {
                if (res.isConfirmed) {
                    this.countWord++;
                    this.restService.postRequestToken('shop/update-item', { user_shop_id: this.addTurn[0].id }).subscribe(res => {
                        this.addTurn.shift();
                    });
                }
            }).catch(err => {
                console.log('This is error of extra guess', err);
            });
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
                title: '<div><img src="assets/icon/notice.png" style="width: 20vw; height:20vw;"><br><h5>Oh no!</h5></div>',
                text: 'You dont have extra AddTurn. Do you want to go to store and buy from there?',
                confirmButtonText: 'Yes',
                confirmButtonColor: '#99C43C',
                showCancelButton: true, allowOutsideClick: true,
                // backdrop: true,
                cancelButtonColor: '#E86B5D',
                cancelButtonText: "No"
            }).then((result) => {
                if (result.isConfirmed) {
                    this.router.navigate(['main/store'], { replaceUrl: true });
                }
            });
        }
    }
    onApplyingReveal() {
        if (this.revealList.length) {
            this.itemUsageConsentDialog('Reveal', 'It will reveal a letter').then((res) => {
                if (res.isConfirmed) {
                    this.revealCount++;
                    for (let i = 0; i < this.revealCount; i++) {
                        this.lettersArr.controls[i].setValue(this.gameObj.word[i]);
                    }
                    this.restService.postRequestToken('shop/update-item', { user_shop_id: this.revealList[0].id }).subscribe(res => {
                        if (res) {
                            this.revealList.shift();
                        }
                    });
                }
            }).catch(err => {
                console.log('This is error of applying reveal', err);
            });
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
                title: '<div><img src="assets/icon/notice.png" style="width: 20vw; height:20vw;"><br><h5>Oh no!</h5></div>',
                text: 'You dont have extra reveal. Do you want to go to store and buy from there?',
                confirmButtonText: 'Yes',
                confirmButtonColor: '#99C43C',
                showCancelButton: true, allowOutsideClick: true,
                // backdrop: true,
                cancelButtonColor: '#E86B5D',
                cancelButtonText: "No"
            }).then((result) => {
                if (result.isConfirmed) {
                    this.router.navigate(['main/store'], { replaceUrl: true });
                }
            });
        }
    }
    itemUsageConsentDialog(item, itemdesc) {
        return new Promise(((resolve, reject) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
                title: '<div><img src="assets/icon/questionmark.png" style="width: 20vw; height:20vw;">',
                text: 'Are you sure you want to use ' + item + '? ' + itemdesc + '.',
                confirmButtonText: 'Yes',
                confirmButtonColor: '#99C43C',
                showCancelButton: true, allowOutsideClick: true,
                // backdrop: true,
                cancelButtonColor: '#E86B5D',
                cancelButtonText: "No"
            }).then((result) => {
                console.log('consent result1', result);
                if (result.value) {
                    resolve(result);
                }
                else {
                    reject(false);
                }
            }).catch(res => {
                console.log('consent result', res);
                reject(res);
            });
        }));
    }
    getUserData() {
        this.restService.getRequest('users/detail').subscribe((res) => {
            if (res.token) {
                // this.user = res.data[0];
                localStorage.setItem('token', res.token);
                localStorage.setItem('user', JSON.stringify(res.data[0]));
            }
        });
    }
    autoSwap1() {
        const children = jquery__WEBPACK_IMPORTED_MODULE_2__('.toHide').children('canvas');
        let childrenCount = 0;
        const children1 = jquery__WEBPACK_IMPORTED_MODULE_2__('.toHide1').children('canvas');
        let children1Count = 0;
        const children2 = jquery__WEBPACK_IMPORTED_MODULE_2__('.toHide2').children('canvas');
        let children2Count = 0;
        const children3 = jquery__WEBPACK_IMPORTED_MODULE_2__('.toHide3').children('canvas');
        let children3Count = 0;
        const children4 = jquery__WEBPACK_IMPORTED_MODULE_2__('.toHide4').children('canvas');
        let children4Count = 0;
        const children5 = jquery__WEBPACK_IMPORTED_MODULE_2__('.toHide5').children('canvas');
        let children5Count = 0;
        const children6 = jquery__WEBPACK_IMPORTED_MODULE_2__('.toHide6').children('canvas');
        let children6Count = 0;
        const children7 = jquery__WEBPACK_IMPORTED_MODULE_2__('.toHide7').children('canvas');
        let children7Count = 0;
        const children8 = jquery__WEBPACK_IMPORTED_MODULE_2__('.toHide8').children('canvas');
        let children8Count = 0;
        children.each(function () {
            const id = jquery__WEBPACK_IMPORTED_MODULE_2__(this).attr('id');
            childrenCount++;
        });
        // console.log('check this count ', childrenCount);
        children1.each(function () {
            const id = jquery__WEBPACK_IMPORTED_MODULE_2__(this).attr('id');
            children1Count++;
        });
        // console.log('check this count ', children1Count);
        children2.each(function () {
            const id = jquery__WEBPACK_IMPORTED_MODULE_2__(this).attr('id');
            children2Count++;
        });
        // console.log('check this count ', children2Count);
        children3.each(function () {
            const id = jquery__WEBPACK_IMPORTED_MODULE_2__(this).attr('id');
            children3Count++;
        });
        // console.log('check this count ', children3Count);
        children4.each(function () {
            const id = jquery__WEBPACK_IMPORTED_MODULE_2__(this).attr('id');
            children4Count++;
        });
        // console.log('check this count ', children3Count);
        children5.each(function () {
            const id = jquery__WEBPACK_IMPORTED_MODULE_2__(this).attr('id');
            children5Count++;
        });
        // console.log('check this count ', children3Count);
        children6.each(function () {
            const id = jquery__WEBPACK_IMPORTED_MODULE_2__(this).attr('id');
            children6Count++;
        });
        // console.log('check this count ', children3Count);
        children7.each(function () {
            const id = jquery__WEBPACK_IMPORTED_MODULE_2__(this).attr('id');
            children7Count++;
        });
        // console.log('check this count ', children3Count);
        children8.each(function () {
            const id = jquery__WEBPACK_IMPORTED_MODULE_2__(this).attr('id');
            children8Count++;
        });
        // console.log('check this count ', children3Count);
        // console.log('check this final sequence', this.sequence1);
        let swapIn;
        let swapOut;
        if (childrenCount == 0) {
            swapIn = jquery__WEBPACK_IMPORTED_MODULE_2__('.toHide');
        }
        if (children1Count == 0) {
            swapIn = jquery__WEBPACK_IMPORTED_MODULE_2__('.toHide1');
        }
        if (children2Count == 0) {
            swapIn = jquery__WEBPACK_IMPORTED_MODULE_2__('.toHide2');
        }
        if (children3Count == 0) {
            swapIn = jquery__WEBPACK_IMPORTED_MODULE_2__('.toHide3');
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
};
PlayGamePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: ng2_dragula__WEBPACK_IMPORTED_MODULE_9__.DragulaService },
    { type: src_app_service_rest_service__WEBPACK_IMPORTED_MODULE_3__.RestService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.LoadingController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ChangeDetectorRef },
    { type: _ionic_native_spinner_dialog_ngx__WEBPACK_IMPORTED_MODULE_5__.SpinnerDialog }
];
PlayGamePage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-play-game',
        template: _raw_loader_play_game_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_play_game_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PlayGamePage);



/***/ }),

/***/ 698:
/*!****************************************************!*\
  !*** ./src/app/main/play-game/play-game.page.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("page-filters {\n  /* in-flight clone */\n  /* high-performance display:none; helper */\n  /* added to mirrorContainer (default = body) while dragging */\n  /* added to the source element while its mirror is dragged */\n}\npage-filters .slide-zoom {\n  color: #7d7d7d !important;\n  font-size: 13px !important;\n}\npage-filters .range-bar {\n  top: 27px !important;\n  height: 10px !important;\n}\npage-filters .range-knob {\n  width: 39px !important;\n  height: 39px !important;\n}\npage-filters .range-pin {\n  left: 10px !important;\n}\npage-filters .swiper-slide .slide-zoom {\n  width: auto !important;\n}\npage-filters ion-slides {\n  height: 35vh;\n}\npage-filters #back {\n  padding: 15px 15px 35px 15px;\n  position: relative;\n}\npage-filters #back-img {\n  margin: auto;\n  float: left;\n  height: auto;\n  width: 10%;\n}\npage-filters .gu-mirror {\n  position: fixed !important;\n  margin: 0 !important;\n  z-index: 9999 !important;\n  opacity: 0.8;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=80)\";\n  filter: alpha(opacity=80);\n  pointer-events: none;\n}\npage-filters .gu-hide {\n  left: -9999px !important;\n}\npage-filters .gu-unselectable {\n  -webkit-user-select: none !important;\n  user-select: none !important;\n}\npage-filters .gu-transit {\n  opacity: 0.2;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=20)\";\n  filter: alpha(opacity=20);\n}\npage-filters ion-content .scroll-content {\n  background: #000 !important;\n  overflow-y: hidden !important;\n}\npage-filters .selectedSegment {\n  font-weight: bold;\n  color: white;\n}\npage-filters .notSelected {\n  color: white;\n  opacity: 0.5;\n}\n.toHide canvas:nth-child(2) {\n  display: none !important;\n}\n.toHide1 canvas:nth-child(2) {\n  display: none !important;\n}\n.toHide2 canvas:nth-child(2) {\n  display: none !important;\n}\n.toHide3 canvas:nth-child(2) {\n  display: none !important;\n}\n.spaceinrow {\n  display: flex;\n  justify-content: space-between;\n}\n#container canvas {\n  width: 100% !important;\n}\n.main-footer {\n  background: #000 !important;\n}\n.main-footer ul {\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n.main-footer ul li a {\n  color: #fff;\n  text-decoration: none;\n  font-size: 16px;\n  font-weight: 500;\n}\n.top-buttons-head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 20px;\n  background: linear-gradient(180deg, #6976B9 0%, rgba(105, 118, 185, 0.76) 100%);\n}\n.top-buttons-head .in-right button {\n  background: #0f77f0;\n  border-radius: 20px;\n  font-size: 14px;\n  padding: 0px 25px;\n}\n.cus-btn {\n  --background: #99c43c;\n  --border-radius: 30px;\n  width: auto;\n  font-size: 14px;\n  letter-spacing: 0.03em;\n}\n.iconsdiv {\n  background: rgba(101, 121, 183, 0.41) !important;\n  display: flex;\n  padding: 10px 20px !important;\n}\n.iconsdiv .in-left ul {\n  display: flex;\n  align-items: center;\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n.iconsdiv .in-left ul li {\n  display: flex;\n  align-items: flex-end;\n  margin-right: 20px;\n}\n.iconsdiv .in-left ul li img {\n  width: 24px;\n  height: 22px;\n  object-fit: contain;\n}\n.iconsdiv .in-left ul li h6 {\n  font-size: 12px;\n  margin: 0 0 0 8px;\n  color: #000;\n}\n.iconsdiv .in-right p {\n  margin: 0 !important;\n  padding: 0 !important;\n  font-size: 12px !important;\n  color: #000 !important;\n  position: static !important;\n}\n.input-number {\n  display: flex;\n  justify-content: space-evenly;\n  margin-top: 10px;\n}\n.input-number input {\n  width: 25px;\n  height: 20px;\n  border-radius: 0px;\n  border: none;\n  border-bottom: 1px solid black;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0px;\n}\n.input-number input:focus {\n  outline: none;\n}\nion-col canvas {\n  height: 20vh;\n  width: 20vw;\n}\n#originalImage {\n  height: 40vh;\n  width: 80vw;\n  display: block;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXktZ2FtZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUEwQ0Usb0JBQUE7RUFXQSwwQ0FBQTtFQUtBLDZEQUFBO0VBUUEsNERBQUE7QUE3REY7QUFKRTtFQUNFLHlCQUFBO0VBQ0EsMEJBQUE7QUFNSjtBQUhFO0VBQ0Usb0JBQUE7RUFDQSx1QkFBQTtBQUtKO0FBRkU7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0FBSUo7QUFERTtFQUNFLHFCQUFBO0FBR0o7QUFDSTtFQUNFLHNCQUFBO0FBQ047QUFHRTtFQUNFLFlBQUE7QUFESjtBQUlFO0VBQ0UsNEJBQUE7RUFDQSxrQkFBQTtBQUZKO0FBS0U7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBSEo7QUFPRTtFQUNFLDBCQUFBO0VBQ0Esb0JBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxpRUFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7QUFMSjtBQVNFO0VBQ0Usd0JBQUE7QUFQSjtBQVdFO0VBQ0Usb0NBQUE7RUFHQSw0QkFBQTtBQVRKO0FBYUU7RUFDRSxZQUFBO0VBQ0EsaUVBQUE7RUFDQSx5QkFBQTtBQVhKO0FBZUk7RUFDRSwyQkFBQTtFQUNBLDZCQUFBO0FBYk47QUFrQkU7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUFoQko7QUFtQkU7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQWpCSjtBQXNCQTtFQUNFLHdCQUFBO0FBbkJGO0FBc0JBO0VBQ0Usd0JBQUE7QUFuQkY7QUFzQkE7RUFDRSx3QkFBQTtBQW5CRjtBQXNCQTtFQUNFLHdCQUFBO0FBbkJGO0FBc0JBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FBbkJGO0FBc0JBO0VBQ0Usc0JBQUE7QUFuQkY7QUFzQkE7RUFDRSwyQkFBQTtBQW5CRjtBQXFCRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQW5CSjtBQXNCTTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQXBCUjtBQTBCQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrRUFBQTtBQXZCRjtBQThCSTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUE1Qk47QUFpQ0E7RUFDRSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUVBLGVBQUE7RUFDQSxzQkFBQTtBQS9CRjtBQW1DQTtFQUNFLGdEQUFBO0VBQ0EsYUFBQTtFQUlBLDZCQUFBO0FBbkNGO0FBc0NJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQXBDTjtBQXNDTTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBcENSO0FBc0NRO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQXBDVjtBQXVDUTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFyQ1Y7QUE0Q0k7RUFDRSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0FBMUNOO0FBaURBO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7QUE5Q0Y7QUFnREU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUE5Q0o7QUFpREU7RUFDRSxhQUFBO0FBL0NKO0FBa0ZJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUEvRVI7QUFtRkE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBaEZKIiwiZmlsZSI6InBsYXktZ2FtZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwYWdlLWZpbHRlcnMge1xuICAuc2xpZGUtem9vbSB7XG4gICAgY29sb3I6ICM3ZDdkN2QgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5yYW5nZS1iYXIge1xuICAgIHRvcDogMjdweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMTBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnJhbmdlLWtub2Ige1xuICAgIHdpZHRoOiAzOXB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAzOXB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucmFuZ2UtcGluIHtcbiAgICBsZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuc3dpcGVyLXNsaWRlIHtcbiAgICAuc2xpZGUtem9vbSB7XG4gICAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuXG4gIGlvbi1zbGlkZXMge1xuICAgIGhlaWdodDogMzV2aDtcbiAgfVxuXG4gICNiYWNrIHtcbiAgICBwYWRkaW5nOiAxNXB4IDE1cHggMzVweCAxNXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gICNiYWNrLWltZyB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogMTAlO1xuICB9XG5cbiAgLyogaW4tZmxpZ2h0IGNsb25lICovXG4gIC5ndS1taXJyb3Ige1xuICAgIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgIHotaW5kZXg6IDk5OTkgIWltcG9ydGFudDtcbiAgICBvcGFjaXR5OiAwLjg7XG4gICAgLW1zLWZpbHRlcjogXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT04MClcIjtcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9ODApO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG5cbiAgLyogaGlnaC1wZXJmb3JtYW5jZSBkaXNwbGF5Om5vbmU7IGhlbHBlciAqL1xuICAuZ3UtaGlkZSB7XG4gICAgbGVmdDogLTk5OTlweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLyogYWRkZWQgdG8gbWlycm9yQ29udGFpbmVyIChkZWZhdWx0ID0gYm9keSkgd2hpbGUgZHJhZ2dpbmcgKi9cbiAgLmd1LXVuc2VsZWN0YWJsZSB7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZSAhaW1wb3J0YW50O1xuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmUgIWltcG9ydGFudDtcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmUgIWltcG9ydGFudDtcbiAgICB1c2VyLXNlbGVjdDogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLyogYWRkZWQgdG8gdGhlIHNvdXJjZSBlbGVtZW50IHdoaWxlIGl0cyBtaXJyb3IgaXMgZHJhZ2dlZCAqL1xuICAuZ3UtdHJhbnNpdCB7XG4gICAgb3BhY2l0eTogMC4yO1xuICAgIC1tcy1maWx0ZXI6IFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkFscGhhKE9wYWNpdHk9MjApXCI7XG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTIwKTtcbiAgfVxuXG4gIGlvbi1jb250ZW50IHtcbiAgICAuc2Nyb2xsLWNvbnRlbnQge1xuICAgICAgYmFja2dyb3VuZDogIzAwMCAhaW1wb3J0YW50O1xuICAgICAgb3ZlcmZsb3cteTogaGlkZGVuICFpbXBvcnRhbnQ7XG5cbiAgICB9XG4gIH1cblxuICAuc2VsZWN0ZWRTZWdtZW50IHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cblxuICAubm90U2VsZWN0ZWQge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBvcGFjaXR5OiAwLjU7XG4gIH1cbn1cblxuXG4udG9IaWRlIGNhbnZhczpudGgtY2hpbGQoMikge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi50b0hpZGUxIGNhbnZhczpudGgtY2hpbGQoMikge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi50b0hpZGUyIGNhbnZhczpudGgtY2hpbGQoMikge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi50b0hpZGUzIGNhbnZhczpudGgtY2hpbGQoMikge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5zcGFjZWlucm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4jY29udGFpbmVyIGNhbnZhcyB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi5tYWluLWZvb3RlciB7XG4gIGJhY2tncm91bmQ6ICMwMDAgIWltcG9ydGFudDtcblxuICB1bCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG5cbiAgICBsaSB7XG4gICAgICBhIHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4udG9wLWJ1dHRvbnMtaGVhZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjNjk3NkI5IDAlLCByZ2JhKDEwNSwgMTE4LCAxODUsIDAuNzYpIDEwMCUpO1xuXG4gIC5pbi1sZWZ0IHtcbiAgICBpbWcge31cbiAgfVxuXG4gIC5pbi1yaWdodCB7XG4gICAgYnV0dG9uIHtcbiAgICAgIGJhY2tncm91bmQ6ICMwZjc3ZjA7XG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgcGFkZGluZzogMHB4IDI1cHg7XG4gICAgfVxuICB9XG59XG5cbi5jdXMtYnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiAjOTljNDNjO1xuICAtLWJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIHdpZHRoOiBhdXRvO1xuXG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDNlbTtcbn1cblxuXG4uaWNvbnNkaXYge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDEwMSwgMTIxLCAxODMsIDAuNDEpICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC8vIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgLy8ganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweCAyMHB4ICFpbXBvcnRhbnQ7XG5cbiAgLmluLWxlZnQge1xuICAgIHVsIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG5cbiAgICAgIGxpIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG5cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICB3aWR0aDogMjRweDtcbiAgICAgICAgICBoZWlnaHQ6IDIycHg7XG4gICAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGg2IHtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgbWFyZ2luOiAwIDAgMCA4cHg7XG4gICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuaW4tcmlnaHQge1xuICAgIHAge1xuICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgICAgIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG4gICAgICBwb3NpdGlvbjogc3RhdGljICFpbXBvcnRhbnQ7XG4gICAgICAvL2ZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgfVxuICB9XG59XG5cblxuLmlucHV0LW51bWJlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuXG4gIGlucHV0IHtcbiAgICB3aWR0aDogMjVweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwcHg7XG4gIH1cblxuICBpbnB1dDpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxufVxuXG5wYWdlLXBsYXktZ2FtZSB7XG4gIEBtaXhpbiBjbGVhciB7XG4gICAgJjphZnRlciB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgZGlzcGxheTogdGFibGU7XG4gICAgICBjbGVhcjogYm90aDtcbiAgICB9XG4gIH1cbn1cblxuLy8gLmFjdGl2ZSB7XG4vLyAgIEBpbmNsdWRlIG9wYWNpdHk7XG4vLyAgIGN1cnNvcjogZGVmYXVsdDtcblxuLy8gICAmOmhvdmVyIHtcbi8vICAgICBAaW5jbHVkZSBmYWRlO1xuLy8gICAgIEBpbmNsdWRlIG9wYWNpdHk7XG4vLyAgIH1cbi8vIH1cblxuXG5cbi8vIC5idXR0b25zLXdyYXBwZXIge1xuLy8gICB1bCNhbHBoYWJldCB7XG4vLyAgICAgcGFkZGluZzogMjBweCAyMHB4ICFpbXBvcnRhbnQ7XG4vLyAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4vLyAgICAgbGlzdC1zdHlsZTogbm9uZTtcbi8vICAgfVxuLy8gfVxuXG5pb24tY29sIHtcbiAgICBjYW52YXN7XG4gICAgICAgIGhlaWdodDogMjB2aDtcbiAgICAgICAgd2lkdGg6IDIwdnc7XG4gICAgfVxufVxuXG4jb3JpZ2luYWxJbWFnZXtcbiAgICBoZWlnaHQ6IDQwdmg7XG4gICAgd2lkdGg6IDgwdnc7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuIl19 */");

/***/ }),

/***/ 15349:
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/play-game/play-game.page.html ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/cssgram/0.1.10/cssgram.min.css\" />\n\n<ion-content class=\"mt-0\" no-bounce has-bouncing=\"false\" forceOverscroll=\"false\">\n\n  <div id=\"containertop\" style=\"width: 100%\">\n\n    <div class=\"top-buttons-head\">\n      <div class=\"in-left\" [replaceUrl]=\"true\" [routerLink]=\"['/main']\">\n        <img src=\"assets/icon/back-icon.svg\" />\n      </div>\n      <div class=\"in-right\">\n        <ion-button class=\"cus-btn\" *ngIf=\"gameObj.type=='easy' \" (click)=\"presentLoading()\" ion-button>Next\n        </ion-button>\n      </div>\n    </div>\n  </div>\n  <div id=\"page-container\">\n\n    <img id=\"originalImage\" *ngIf=\"cameraImage && gameObj.type =='easy'\" src=\"{{cameraImage}}\" (load)=\"Crop()\" />\n\n    <img id=\"originalImage\" *ngIf=\"cameraImage && gameObj.type == 'medium'\" src=\"{{cameraImage}}\" (load)=\"Crop1()\" />\n\n    <ion-grid *ngIf=\"gameObj.type == 'easy' && gameObj.status == 0\" class=\"ion-justify-content-center\" id=\"container\" style=\"padding: 2px 5vh 0\">\n      <ion-row class=\"spaceinrow\" [ngClass]=\"primaryFilter\">\n        <ion-col class=\"toHide\" col-6=\"6\" dragula=\"totalPiece\" style=\"padding: 2px\">\n          <canvas id=\"canvas1\" style=\"display: inline-block \" [ngStyle]=\"{\n    'filter': 'grayscale(' + this.secondaryValues.numbers.grayscale + '%) ' +\n    'hue-rotate(' + this.secondaryValues.numbers.hue_rotate + 'deg) ' +\n    'invert(' + this.secondaryValues.numbers.invert + '%) ' +\n    'sepia(' + this.secondaryValues.numbers.sepia + '%) ' +\n    'saturate(' + this.secondaryValues.numbers.saturate + '%) ' +\n    'opacity(' + this.secondaryValues.numbers.opacity + '%) ' +\n    'brightness(' + this.secondaryValues.numbers.brightness + '%) ' +\n    'contrast(' + this.secondaryValues.numbers.contrast + '%) ' +\n    'blur(' + this.secondaryValues.numbers.blur + 'px)'\n    }\" (click)=\"Rotate(1,'toHide')\">\n          </canvas>\n        </ion-col>\n        <ion-col class=\"toHide1\" col-6=\"6\" dragula=\"totalPiece\" style=\"padding: 2px\">\n          <canvas id=\"canvas2\" style=\"display: inline-block \" [ngStyle]=\"{\n    'filter': 'grayscale(' + this.secondaryValues.numbers.grayscale + '%) ' +\n    'hue-rotate(' + this.secondaryValues.numbers.hue_rotate + 'deg) ' +\n    'invert(' + this.secondaryValues.numbers.invert + '%) ' +\n    'sepia(' + this.secondaryValues.numbers.sepia + '%) ' +\n    'saturate(' + this.secondaryValues.numbers.saturate + '%) ' +\n    'opacity(' + this.secondaryValues.numbers.opacity + '%) ' +\n    'brightness(' + this.secondaryValues.numbers.brightness + '%) ' +\n    'contrast(' + this.secondaryValues.numbers.contrast + '%) ' +\n    'blur(' + this.secondaryValues.numbers.blur + 'px)'\n    }\" (click)=\"Rotate(2,'toHide1')\">\n          </canvas>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"spaceinrow\" [ngClass]=\"primaryFilter\">\n        <ion-col class=\"toHide2\" col-6=\"6\" dragula=\"totalPiece\" style=\"padding: 2px\">\n          <canvas id=\"canvas3\" style=\"display: inline-block  \" [ngStyle]=\"{\n    'filter': 'grayscale(' + this.secondaryValues.numbers.grayscale + '%) ' +\n    'hue-rotate(' + this.secondaryValues.numbers.hue_rotate + 'deg) ' +\n    'invert(' + this.secondaryValues.numbers.invert + '%) ' +\n    'sepia(' + this.secondaryValues.numbers.sepia + '%) ' +\n    'saturate(' + this.secondaryValues.numbers.saturate + '%) ' +\n    'opacity(' + this.secondaryValues.numbers.opacity + '%) ' +\n    'brightness(' + this.secondaryValues.numbers.brightness + '%) ' +\n    'contrast(' + this.secondaryValues.numbers.contrast + '%) ' +\n    'blur(' + this.secondaryValues.numbers.blur + 'px)'\n    }\" (click)=\"Rotate(3,'toHide2')\">\n          </canvas>\n        </ion-col>\n        <ion-col class=\"toHide3\" col-6=\"6\" dragula=\"totalPiece\" style=\"padding: 2px\">\n          <canvas id=\"canvas4\" style=\"display: inline-block \" [ngStyle]=\"{\n    'filter': 'grayscale(' + this.secondaryValues.numbers.grayscale + '%) ' +\n    'hue-rotate(' + this.secondaryValues.numbers.hue_rotate + 'deg) ' +\n    'invert(' + this.secondaryValues.numbers.invert + '%) ' +\n    'sepia(' + this.secondaryValues.numbers.sepia + '%) ' +\n    'saturate(' + this.secondaryValues.numbers.saturate + '%) ' +\n    'opacity(' + this.secondaryValues.numbers.opacity + '%) ' +\n    'brightness(' + this.secondaryValues.numbers.brightness + '%) ' +\n    'contrast(' + this.secondaryValues.numbers.contrast + '%) ' +\n    'blur(' + this.secondaryValues.numbers.blur + 'px)'}\" (click)=\"Rotate(4,'toHide3')\">\n          </canvas>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid *ngIf=\"gameObj.type == 'medium' && gameObj.status == 0\" class=\"ion-justify-content-center\" id=\"container\" style=\"padding: 0px 13% 0\">\n      <ion-row class=\"spaceinrow\" [ngClass]=\"primaryFilter\">\n        <ion-col class=\"{{sequence[0]}}\" col-4=\"4\" dragula=\"totalPiece\" style=\"padding: 2px\">\n          <canvas id=\"canvas1\" style=\"display: inline-block\" [ngStyle]=\"{\n   'filter': 'grayscale(' + this.secondaryValues.numbers.grayscale + '%) ' +\n   'hue-rotate(' + this.secondaryValues.numbers.hue_rotate + 'deg) ' +\n   'invert(' + this.secondaryValues.numbers.invert + '%) ' +\n   'sepia(' + this.secondaryValues.numbers.sepia + '%) ' +\n   'saturate(' + this.secondaryValues.numbers.saturate + '%) ' +\n   'opacity(' + this.secondaryValues.numbers.opacity + '%) ' +\n   'brightness(' + this.secondaryValues.numbers.brightness + '%) ' +\n   'contrast(' + this.secondaryValues.numbers.contrast + '%) ' +\n   'blur(' + this.secondaryValues.numbers.blur + 'px)'\n}\" (click)=\"Rotate(1,sequence[0])\">\n          </canvas>\n        </ion-col>\n\n        <ion-col class=\"{{sequence[1]}}\" col-4=\"4\" dragula=\"totalPiece\" style=\"padding: 2px\">\n          <canvas id=\"canvas2\" style=\"display: inline-block\" [ngStyle]=\"{\n   'filter': 'grayscale(' + this.secondaryValues.numbers.grayscale + '%) ' +\n   'hue-rotate(' + this.secondaryValues.numbers.hue_rotate + 'deg) ' +\n   'invert(' + this.secondaryValues.numbers.invert + '%) ' +\n   'sepia(' + this.secondaryValues.numbers.sepia + '%) ' +\n   'saturate(' + this.secondaryValues.numbers.saturate + '%) ' +\n   'opacity(' + this.secondaryValues.numbers.opacity + '%) ' +\n   'brightness(' + this.secondaryValues.numbers.brightness + '%) ' +\n   'contrast(' + this.secondaryValues.numbers.contrast + '%) ' +\n   'blur(' + this.secondaryValues.numbers.blur + 'px)'\n}\" (click)=\"Rotate(2,sequence[1])\">\n          </canvas>\n        </ion-col>\n\n        <ion-col class=\"{{sequence[2]}}\" col-4=\"4\" dragula=\"totalPiece\" style=\"padding: 2px\">\n          <canvas id=\"canvas3\" style=\"display: inline-block\" [ngStyle]=\"{\n 'filter': 'grayscale(' + this.secondaryValues.numbers.grayscale + '%) ' +\n 'hue-rotate(' + this.secondaryValues.numbers.hue_rotate + 'deg) ' +\n 'invert(' + this.secondaryValues.numbers.invert + '%) ' +\n 'sepia(' + this.secondaryValues.numbers.sepia + '%) ' +\n 'saturate(' + this.secondaryValues.numbers.saturate + '%) ' +\n 'opacity(' + this.secondaryValues.numbers.opacity + '%) ' +\n 'brightness(' + this.secondaryValues.numbers.brightness + '%) ' +\n 'contrast(' + this.secondaryValues.numbers.contrast + '%) ' +\n 'blur(' + this.secondaryValues.numbers.blur + 'px)'\n}\" (click)=\"Rotate(3,sequence[2])\">\n          </canvas>\n        </ion-col>\n      </ion-row>\n\n      <ion-row class=\"spaceinrow\" [ngClass]=\"primaryFilter\">\n\n        <ion-col class=\"{{sequence[3]}}\" col-4=\"4\" dragula=\"totalPiece\" style=\"padding: 2px\">\n          <canvas id=\"canvas4\" style=\"display: inline-block\" [ngStyle]=\"{\n 'filter': 'grayscale(' + this.secondaryValues.numbers.grayscale + '%) ' +\n 'hue-rotate(' + this.secondaryValues.numbers.hue_rotate + 'deg) ' +\n 'invert(' + this.secondaryValues.numbers.invert + '%) ' +\n 'sepia(' + this.secondaryValues.numbers.sepia + '%) ' +\n 'saturate(' + this.secondaryValues.numbers.saturate + '%) ' +\n 'opacity(' + this.secondaryValues.numbers.opacity + '%) ' +\n 'brightness(' + this.secondaryValues.numbers.brightness + '%) ' +\n 'contrast(' + this.secondaryValues.numbers.contrast + '%) ' +\n 'blur(' + this.secondaryValues.numbers.blur + 'px)'\n}\" (click)=\"Rotate(4,sequence[3])\">\n          </canvas>\n        </ion-col>\n\n        <ion-col class=\"{{sequence[4]}}\" col-4=\"4\" dragula=\"totalPiece\" style=\"padding: 2px\">\n          <canvas id=\"canvas5\" style=\"display: inline-block\" [ngStyle]=\"{\n   'filter': 'grayscale(' + this.secondaryValues.numbers.grayscale + '%) ' +\n   'hue-rotate(' + this.secondaryValues.numbers.hue_rotate + 'deg) ' +\n   'invert(' + this.secondaryValues.numbers.invert + '%) ' +\n   'sepia(' + this.secondaryValues.numbers.sepia + '%) ' +\n   'saturate(' + this.secondaryValues.numbers.saturate + '%) ' +\n   'opacity(' + this.secondaryValues.numbers.opacity + '%) ' +\n   'brightness(' + this.secondaryValues.numbers.brightness + '%) ' +\n   'contrast(' + this.secondaryValues.numbers.contrast + '%) ' +\n   'blur(' + this.secondaryValues.numbers.blur + 'px)'}\" (click)=\"Rotate(5,sequence[4])\">\n          </canvas>\n        </ion-col>\n\n        <ion-col class=\"{{sequence[5]}}\" col-4=\"4\" dragula=\"totalPiece\" style=\"padding: 2px\">\n          <canvas id=\"canvas6\" style=\"display: inline-block\" [ngStyle]=\"{\n   'filter': 'grayscale(' + this.secondaryValues.numbers.grayscale + '%) ' +\n   'hue-rotate(' + this.secondaryValues.numbers.hue_rotate + 'deg) ' +\n   'invert(' + this.secondaryValues.numbers.invert + '%) ' +\n   'sepia(' + this.secondaryValues.numbers.sepia + '%) ' +\n   'saturate(' + this.secondaryValues.numbers.saturate + '%) ' +\n   'opacity(' + this.secondaryValues.numbers.opacity + '%) ' +\n   'brightness(' + this.secondaryValues.numbers.brightness + '%) ' +\n   'contrast(' + this.secondaryValues.numbers.contrast + '%) ' +\n   'blur(' + this.secondaryValues.numbers.blur + 'px)'}\" (click)=\"Rotate(6,sequence[5])\">\n          </canvas>\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row class=\"spaceinrow\" [ngClass]=\"primaryFilter\">\n        <ion-col class=\"{{sequence[6]}}\" col-4=\"4\" dragula=\"totalPiece\" style=\"padding: 2px\">\n          <canvas id=\"canvas7\" style=\"display: inline-block\" [ngStyle]=\"{\n   'filter': 'grayscale(' + this.secondaryValues.numbers.grayscale + '%) ' +\n   'hue-rotate(' + this.secondaryValues.numbers.hue_rotate + 'deg) ' +\n   'invert(' + this.secondaryValues.numbers.invert + '%) ' +\n   'sepia(' + this.secondaryValues.numbers.sepia + '%) ' +\n   'saturate(' + this.secondaryValues.numbers.saturate + '%) ' +\n   'opacity(' + this.secondaryValues.numbers.opacity + '%) ' +\n   'brightness(' + this.secondaryValues.numbers.brightness + '%) ' +\n   'contrast(' + this.secondaryValues.numbers.contrast + '%) ' +\n   'blur(' + this.secondaryValues.numbers.blur + 'px)'\n}\" (click)=\"Rotate(7,sequence[6])\">\n          </canvas>\n        </ion-col>\n\n        <ion-col class=\"{{sequence[7]}}\" col-4=\"4\" dragula=\"totalPiece\" style=\"padding: 2px\">\n          <canvas id=\"canvas8\" style=\"display: inline-block\" [ngStyle]=\"{\n   'filter': 'grayscale(' + this.secondaryValues.numbers.grayscale + '%) ' +\n   'hue-rotate(' + this.secondaryValues.numbers.hue_rotate + 'deg) ' +\n   'invert(' + this.secondaryValues.numbers.invert + '%) ' +\n   'sepia(' + this.secondaryValues.numbers.sepia + '%) ' +\n   'saturate(' + this.secondaryValues.numbers.saturate + '%) ' +\n   'opacity(' + this.secondaryValues.numbers.opacity + '%) ' +\n   'brightness(' + this.secondaryValues.numbers.brightness + '%) ' +\n   'contrast(' + this.secondaryValues.numbers.contrast + '%) ' +\n   'blur(' + this.secondaryValues.numbers.blur + 'px)'}\" (click)=\"Rotate(8,sequence[7])\">\n          </canvas>\n        </ion-col>\n\n        <ion-col class=\"{{sequence[8]}}\" col-4=\"4\" dragula=\"totalPiece\" style=\"padding: 2px\">\n          <canvas id=\"canvas9\" style=\"display: inline-block\" [ngStyle]=\"{\n   'filter': 'grayscale(' + this.secondaryValues.numbers.grayscale + '%) ' +\n   'hue-rotate(' + this.secondaryValues.numbers.hue_rotate + 'deg) ' +\n   'invert(' + this.secondaryValues.numbers.invert + '%) ' +\n   'sepia(' + this.secondaryValues.numbers.sepia + '%) ' +\n   'saturate(' + this.secondaryValues.numbers.saturate + '%) ' +\n   'opacity(' + this.secondaryValues.numbers.opacity + '%) ' +\n   'brightness(' + this.secondaryValues.numbers.brightness + '%) ' +\n   'contrast(' + this.secondaryValues.numbers.contrast + '%) ' +\n   'blur(' + this.secondaryValues.numbers.blur + 'px)'}\" (click)=\"Rotate(9,sequence[8])\">\n          </canvas>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n\n\n\n\n\n    <div *ngIf=\"gameObj\" class=\"input-number\">\n      <input type=\"text\" readonly minlength=\"1\" *ngFor=\"let control of lettersArr.controls;index as i\" [formControl]=\"lettersArr.controls[i]\" id=\"puzzle-word-{{i}}\" />\n    </div>\n\n\n    <div id=\"hold\"></div>\n\n    <div class=\"iconsdiv\">\n      <div class=\"in-left\">\n        <ul>\n          <li (click)=\"onremovalPrimaryFilter()\">\n            <img id=\"removePrimary\" class=\"useItem\" src=\"assets/icon/primary.png\" />\n            <h6>{{primayFilterRemovalList.length ? primayFilterRemovalList.length : 0 }}</h6>\n          </li>\n\n          <li (click)=\"onremovalSecondaryFilter()\">\n            <img id=\"removeSecondary\" class=\"useItem\" src=\"assets/icon/secondary.png\" />\n            <h6>{{secondaryFilterRemovalList.length ? secondaryFilterRemovalList.length : 0}}</h6>\n          </li>\n\n          <li (click)=\"onApplyingAddTurn()\">\n            <img id=\"addTurn\" class=\"useItem\" src=\"assets/icon/addturn.png\" />\n            <h6>{{addTurn.length ? addTurn.length : '0'}}</h6>\n          </li>\n          <li (click)=\"onApplyingReveal()\">\n            <img id=\"reveal\" class=\"useItem\" src=\"assets/icon/reveal.png\" />\n            <h6>{{revealList.length ? revealList.length : '0'}}</h6>\n          </li>\n        </ul>\n      </div>\n\n      <div class=\"in-right\">\n        <!-- <img id=\"reveal\" class=\"useItem\" src=\"assets/icon/reveal.png\" /> -->\n        <p>Remaining: {{countWord ? countWord : '0'}}</p>\n      </div>\n\n    </div>\n\n\n  </div>\n  <div class=\"buttons-wrapper\">\n    <div id=\"buttons\"></div>\n  </div>\n\n\n  <!-- <div id=\"page-container\">\n    <div class=\"app-history-back\">\n      <h3>Your Turn</h3>\n    </div>\n    <img *ngIf=\"cameraImage && (gameObj.type=='easy' )\" id=\"originalImage\" src=\"{{cameraImage}}\" (load)=\"Crop()\" />\n\n      <div id=\"hold\"></div>\n\n      <div class=\"iconsdiv\">\n        <div class=\"in-left\">\n          <ul>\n            <li>\n              <img id=\"removePrimary\" class=\"useItem\" src=\"assets/icon/primary.png\" />\n              <h6>{{removePrimaryItem}}</h6>\n            </li>\n            <li>\n\n              <img id=\"removeSecondary\" class=\"useItem\" src=\"assets/icon/secondary.png\" />\n              <h6>{{removeSecondaryItem}}</h6>\n            </li>\n\n            <li>\n              <img id=\"addTurn\" class=\"useItem\" src=\"assets/icon/addturn.png\" />\n              <h6>{{addTurnItem ? addTurnItem : '0'}}</h6>\n            </li>\n            <li>\n              <img id=\"reveal\" class=\"useItem\" src=\"assets/icon/reveal.png\" />\n              <h6>{{revealItem ? revealItem : '0'}}</h6>\n            </li>\n          </ul>\n        </div>\n        <div class=\"in-right\">\n          <p id=\"mylives\"></p>\n        </div>\n      </div>\n\n      <div class=\"buttons-wrapper\">\n        <div id=\"buttons\"></div>\n      </div>\n    </div>\n\n\n  </div> -->\n</ion-content>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/cssgram/0.1.10/cssgram.min.css\" />\n\n<ion-content>\n\n  <div id=\"containertop\" style=\"width: 100%\">\n\n    <div class=\"top-buttons-head\">\n      <div class=\"in-left\">\n        <ion-icon [routerLink]=\"['/main']\" name=\"arrow-back-outline\"></ion-icon>\n      </div>\n      <div class=\"in-right\" *ngIf=\"!gameObj\">\n        <button (click)=\"sendGame()\" ion-button>sendGame</button>\n\n      </div>\n    </div>\n  </div>\n  \n\n  <img id=\"originalImage\" [src]=\"cameraImage\" (load)=\"onCrop()\" />\n\n\n  <div class=\"canvas-grid\">\n\n    <div class=\"space-between\">\n      <div class=\"toHide\" dragula=\"totalPiece\">\n        <canvas  (click)=\"onRotate(1,'toHide')\" id=\"canvas1\">\n        </canvas>\n      </div>\n\n      <div class=\"toHide1\" dragula=\"totalPiece\">\n        <canvas  (click)=\"onRotate(2,'toHide1')\" id=\"canvas2\">\n        </canvas>\n      </div>\n    </div>\n\n    <div class=\"space-between\">\n      <div class=\"toHide2\" dragula=\"totalPiece\">\n        <canvas  (click)=\"onRotate(3,'toHide2')\" id=\"canvas3\">\n        </canvas>\n      </div>\n      <div class=\"toHide3\" dragula=\"totalPiece\">\n        <canvas  (click)=\"onRotate(4,'toHide3')\" id=\"canvas4\">\n        </canvas>\n      </div>\n    </div>\n\n  </div>\n\n  <div *ngIf=\"gameObj\" class=\"input-number\">\n    <input type=\"text\" (keyup)=\"nextInputFocus(i,$event)\" minlength=\"1\"\n      *ngFor=\"let control of lettersArr.controls;index as i\" [formControl]=\"lettersArr.controls[i]\"\n      id=\"puzzle-word-{{i}}\" />\n  </div>\n\n  <div *ngIf=\"gameObj\">\n    <div>\n      Remaining : {{puzzleWordCount}}\n    </div>\n  </div>\n</ion-content> -->\n");

/***/ })

}]);
//# sourceMappingURL=src_app_main_play-game_play-game_module_ts.js.map