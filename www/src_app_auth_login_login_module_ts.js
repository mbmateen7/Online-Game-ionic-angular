(self["webpackChunkpic_playce"] = self["webpackChunkpic_playce"] || []).push([["src_app_auth_login_login_module_ts"],{

/***/ 20765:
/*!********************************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/sign-in-with-apple/__ivy_ngcc__/ngx/index.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ASAuthorizationAppleIDRequest": () => (/* binding */ ASAuthorizationAppleIDRequest),
/* harmony export */   "SignInWithApple": () => (/* binding */ SignInWithApple)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @awesome-cordova-plugins/core */ 16887);




var ASAuthorizationAppleIDRequest = /** @class */ (function () {
    function ASAuthorizationAppleIDRequest() {
    }
    ASAuthorizationAppleIDRequest.ASAuthorizationScopeFullName = 0;
    ASAuthorizationAppleIDRequest.ASAuthorizationScopeEmail = 1;
    return ASAuthorizationAppleIDRequest;
}());

var SignInWithApple = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(SignInWithApple, _super);
    function SignInWithApple() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SignInWithApple.prototype.signin = function (options) {
        if (options === void 0) { options = {}; }
        return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "signin", {}, arguments);
    };
    SignInWithApple.pluginName = "Sign in with Apple";
    SignInWithApple.plugin = "cordova-plugin-sign-in-with-apple";
    SignInWithApple.pluginRef = "cordova.plugins.SignInWithApple";
    SignInWithApple.repo = "https://github.com/twogate/cordova-plugin-sign-in-with-apple";
    SignInWithApple.platforms = ["iOS"];
SignInWithApple.ɵfac = /*@__PURE__*/ function () { var ɵSignInWithApple_BaseFactory; return function SignInWithApple_Factory(t) { return (ɵSignInWithApple_BaseFactory || (ɵSignInWithApple_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](SignInWithApple)))(t || SignInWithApple); }; }();
SignInWithApple.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: SignInWithApple, factory: function (t) { return SignInWithApple.ɵfac(t); } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](SignInWithApple, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable
    }], null, null); })();
    return SignInWithApple;
}(_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.AwesomeCordovaNativePlugin));


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvcGx1Z2lucy9zaWduLWluLXdpdGgtYXBwbGUvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0FBQzVGO0FBRTREO0FBRTVEO0FBQU0sSUFDWSwwREFBNEIsR0FBRyxDQUFDLENBQUM7QUFDbkQsSUFBa0IsdURBQXlCLEdBQUcsQ0FBQyxDQUFDO0FBQ2hELHdDQVRBO0FBQUU7QUFBTSxTQU1LLDZCQUE2QjtBQUN6QztBQUNLLElBMEorQixtQ0FBMEI7QUFBQztBQUV2QztBQUVQO0FBQU0sSUFNdEIsZ0NBQU0sYUFBQyxPQUEyQztBQUFJLFFBQS9DLHdCQUFBLEVBQUEsWUFBMkM7QUFBSTtBQUlqRDtBQUFPO0FBQXVEO0FBQWtFO0FBQW1FO0FBQTJGO21EQWZwUyxVQUFVOzs7OzBCQUNMO0FBQUMsMEJBbEtQO0FBQUUsRUFrS21DLDBCQUEwQjtBQUM5RCxTQURZLGVBQWU7QUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5cbi8qKlxuICogQHNlZSBodHRwczovL2RldmVsb3Blci5hcHBsZS5jb20vZG9jdW1lbnRhdGlvbi9hdXRoZW50aWNhdGlvbnNlcnZpY2VzL2FzYXV0aG9yaXphdGlvbmFwcGxlaWRyZXF1ZXN0XG4gKi9cbmV4cG9ydCBjbGFzcyBBU0F1dGhvcml6YXRpb25BcHBsZUlEUmVxdWVzdCB7XG4gIHN0YXRpYyByZWFkb25seSBBU0F1dGhvcml6YXRpb25TY29wZUZ1bGxOYW1lID0gMDtcbiAgc3RhdGljIHJlYWRvbmx5IEFTQXV0aG9yaXphdGlvblNjb3BlRW1haWwgPSAxO1xuXG4gIHJlcXVlc3RlZFNjb3Blcz86IG51bWJlcltdO1xufVxuXG4vKipcbiAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuYXBwbGUuY29tL2RvY3VtZW50YXRpb24vZm91bmRhdGlvbi9uc3BlcnNvbm5hbWVjb21wb25lbnRzLzE0MTIxOTMtcGhvbmV0aWNyZXByZXNlbnRhdGlvblxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5TUGVyc29uTmFtZUNvbXBvbmVudHMge1xuICAvKipcbiAgICogVGhlIHBvcnRpb24gb2YgYSBuYW1l4oCZcyBmdWxsIGZvcm0gb2YgYWRkcmVzcyB0aGF0IHByZWNlZGVzIHRoZSBuYW1lIGl0c2VsZiAoZm9yIGV4YW1wbGUsIFwiRHIuLFwiIFwiTXIuLFwiIFwiTXMuXCIpXG4gICAqL1xuICBuYW1lUHJlZml4Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBOYW1lIGJlc3Rvd2VkIHVwb24gYW4gaW5kaXZpZHVhbCB0byBkaWZmZXJlbnRpYXRlIHRoZW0gZnJvbSBvdGhlciBtZW1iZXJzIG9mIGEgZ3JvdXAgdGhhdCBzaGFyZSBhIGZhbWlseSBuYW1lIChmb3IgZXhhbXBsZSwgXCJKb2huYXRoYW5cIilcbiAgICovXG4gIGdpdmVuTmFtZT86IHN0cmluZztcblxuICAvKipcbiAgICogU2Vjb25kYXJ5IG5hbWUgYmVzdG93ZWQgdXBvbiBhbiBpbmRpdmlkdWFsIHRvIGRpZmZlcmVudGlhdGUgdGhlbSBmcm9tIG90aGVycyB0aGF0IGhhdmUgdGhlIHNhbWUgZ2l2ZW4gbmFtZSAoZm9yIGV4YW1wbGUsIFwiTWFwbGVcIilcbiAgICovXG4gIG1pZGRsZU5hbWU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE5hbWUgYmVzdG93ZWQgdXBvbiBhbiBpbmRpdmlkdWFsIHRvIGRlbm90ZSBtZW1iZXJzaGlwIGluIGEgZ3JvdXAgb3IgZmFtaWx5LiAoZm9yIGV4YW1wbGUsIFwiQXBwbGVzZWVkXCIpXG4gICAqL1xuICBmYW1pbHlOYW1lPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgcG9ydGlvbiBvZiBhIG5hbWXigJlzIGZ1bGwgZm9ybSBvZiBhZGRyZXNzIHRoYXQgZm9sbG93cyB0aGUgbmFtZSBpdHNlbGYgKGZvciBleGFtcGxlLCBcIkVzcS4sXCIgXCJKci4sXCIgXCJQaC5ELlwiKVxuICAgKi9cbiAgbmFtZVN1ZmZpeD86IHN0cmluZztcblxuICAvKipcbiAgICogTmFtZSBzdWJzdGl0dXRlZCBmb3IgdGhlIHB1cnBvc2VzIG9mIGZhbWlsaWFyaXR5IChmb3IgZXhhbXBsZSwgXCJKb2hubnlcIilcbiAgICovXG4gIG5pY2tuYW1lPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgcGhvbmV0aWMgcmVwcmVzZW50YXRpb24gbmFtZSBjb21wb25lbnRzIG9mIHRoZSByZWNlaXZlclxuICAgKi9cbiAgcGhvbmV0aWNSZXByZXNlbnRhdGlvbj86IE5TUGVyc29uTmFtZUNvbXBvbmVudHM7XG59XG5cbi8qKlxuICogQHNlZSBodHRwczovL2RldmVsb3Blci5hcHBsZS5jb20vZG9jdW1lbnRhdGlvbi9hdXRoZW50aWNhdGlvbnNlcnZpY2VzL2FzYXV0aG9yaXphdGlvbmFwcGxlaWRjcmVkZW50aWFsXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbGVTaWduSW5SZXNwb25zZSB7XG4gIC8qKlxuICAgKiBUaGUgdXNlcuKAmXMgZW1haWwgYWRkcmVzcyBpLmUuIGFiY0Bwcml2YXRlcmVsYXkuYXBwbGVpZC5jb21cbiAgICovXG4gIGVtYWlsPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBbiBhcmJpdHJhcnkgc3RyaW5nIHRoYXQgeW91ciBhcHAgcHJvdmlkZWQgdG8gdGhlIHJlcXVlc3QgdGhhdCBnZW5lcmF0ZWQgdGhlIGNyZWRlbnRpYWxcbiAgICovXG4gIHN0YXRlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBIEpTT04gV2ViIFRva2VuIChKV1QpIHRoYXQgc2VjdXJlbHkgY29tbXVuaWNhdGVzIGluZm9ybWF0aW9uIGFib3V0IHRoZSB1c2VyIHRvIHlvdXIgYXBwXG4gICAqL1xuICBpZGVudGl0eVRva2VuOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEEgc2hvcnQtbGl2ZWQgdG9rZW4gdXNlZCBieSB5b3VyIGFwcCBmb3IgcHJvb2Ygb2YgYXV0aG9yaXphdGlvbiB3aGVuIGludGVyYWN0aW5nIHdpdGggdGhlIGFwcCdzIHNlcnZlciBjb3VudGVycGFydFxuICAgKi9cbiAgYXV0aG9yaXphdGlvbkNvZGU6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIHVzZXIncyBuYW1lXG4gICAqXG4gICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuYXBwbGUuY29tL2RvY3VtZW50YXRpb24vZm91bmRhdGlvbi9uc3BlcnNvbm5hbWVjb21wb25lbnRzP2xhbmd1YWdlPW9iamNcbiAgICovXG4gIGZ1bGxOYW1lPzogTlNQZXJzb25OYW1lQ29tcG9uZW50cztcblxuICAvKipcbiAgICogQW4gaWRlbnRpZmllciBhc3NvY2lhdGVkIHdpdGggdGhlIGF1dGhlbnRpY2F0ZWQgdXNlclxuICAgKi9cbiAgdXNlcj86IHN0cmluZztcbn1cblxuLyoqXG4gKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmFwcGxlLmNvbS9kb2N1bWVudGF0aW9uL2ZvdW5kYXRpb24vbnNlcnJvclxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5TRXJyb3Ige1xuICAvKipcbiAgICogVGhlIGVycm9yIGNvZGVcbiAgICovXG4gIGNvZGU/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEEgc3RyaW5nIGNvbnRhaW5pbmcgdGhlIGxvY2FsaXplZCBkZXNjcmlwdGlvbiBvZiB0aGUgZXJyb3JcbiAgICovXG4gIGxvY2FsaXplZERlc2NyaXB0aW9uPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBIHN0cmluZyBjb250YWluaW5nIHRoZSBsb2NhbGl6ZWQgZXhwbGFuYXRpb24gb2YgdGhlIHJlYXNvbiBmb3IgdGhlIGVycm9yXG4gICAqL1xuICBsb2NhbGl6ZWRGYWlsdXJlUmVhc29uPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFwcGxlU2lnbkluRXJyb3JSZXNwb25zZSBleHRlbmRzIE5TRXJyb3Ige1xuICAvKipcbiAgICogVGhlIGVycm9yIGkuZS4gXCJBU0FVVEhPUklaQVRJT05fRVJST1JcIlxuICAgKi9cbiAgZXJyb3I/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogQG5hbWUgU2lnbiBJbiBXaXRoIEFwcGxlXG4gKiBAZGVzY3JpcHRpb25cbiAqIFNpZ24gaW4gd2l0aCBBcHBsZSBtYWtlcyBpdCBlYXN5IGZvciB1c2VycyB0byBzaWduIGluIHRvIHlvdXIgYXBwcyBhbmQgd2Vic2l0ZXMgdXNpbmcgdGhlaXIgQXBwbGUgSUQuXG4gKiBJbnN0ZWFkIG9mIGZpbGxpbmcgb3V0IGZvcm1zLCB2ZXJpZnlpbmcgZW1haWwgYWRkcmVzc2VzLCBhbmQgY2hvb3NpbmcgbmV3IHBhc3N3b3JkcyxcbiAqIHRoZXkgY2FuIHVzZSBTaWduIGluIHdpdGggQXBwbGUgdG8gc2V0IHVwIGFuIGFjY291bnQgYW5kIHN0YXJ0IHVzaW5nIHlvdXIgYXBwIHJpZ2h0IGF3YXkuXG4gKiBBbGwgYWNjb3VudHMgYXJlIHByb3RlY3RlZCB3aXRoIHR3by1mYWN0b3IgYXV0aGVudGljYXRpb24gZm9yIHN1cGVyaW9yIHNlY3VyaXR5LFxuICogYW5kIEFwcGxlIHdpbGwgbm90IHRyYWNrIHVzZXJz4oCZIGFjdGl2aXR5IGluIHlvdXIgYXBwIG9yIHdlYnNpdGUuXG4gKiBTb3VyY2U6KiBodHRwczovL2RldmVsb3Blci5hcHBsZS5jb20vc2lnbi1pbi13aXRoLWFwcGxlL1xuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBTaWduSW5XaXRoQXBwbGUsIEFwcGxlU2lnbkluUmVzcG9uc2UsIEFwcGxlU2lnbkluRXJyb3JSZXNwb25zZSwgQVNBdXRob3JpemF0aW9uQXBwbGVJRFJlcXVlc3QgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvc2lnbi1pbi13aXRoLWFwcGxlL25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgc2lnbkluV2l0aEFwcGxlOiBTaWduSW5XaXRoQXBwbGUpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiAgIHRoaXMuc2lnbkluV2l0aEFwcGxlLnNpZ25pbih7XG4gKiAgICAgcmVxdWVzdGVkU2NvcGVzOiBbXG4gKiAgICAgICBBU0F1dGhvcml6YXRpb25BcHBsZUlEUmVxdWVzdC5BU0F1dGhvcml6YXRpb25TY29wZUZ1bGxOYW1lLFxuICogICAgICAgQVNBdXRob3JpemF0aW9uQXBwbGVJRFJlcXVlc3QuQVNBdXRob3JpemF0aW9uU2NvcGVFbWFpbFxuICogICAgIF1cbiAqICAgfSlcbiAqICAgLnRoZW4oKHJlczogQXBwbGVTaWduSW5SZXNwb25zZSkgPT4ge1xuICogICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLmFwcGxlLmNvbS9kb2N1bWVudGF0aW9uL3NpZ25pbndpdGhhcHBsZXJlc3RhcGkvdmVyaWZ5aW5nX2FfdXNlclxuICogICAgIGFsZXJ0KCdTZW5kIHRva2VuIHRvIGFwcGxlIGZvciB2ZXJpZmljYXRpb246ICcgKyByZXMuaWRlbnRpdHlUb2tlbik7XG4gKiAgICAgY29uc29sZS5sb2cocmVzKTtcbiAqICAgfSlcbiAqICAgLmNhdGNoKChlcnJvcjogQXBwbGVTaWduSW5FcnJvclJlc3BvbnNlKSA9PiB7XG4gKiAgICAgYWxlcnQoZXJyb3IuY29kZSArICcgJyArIGVycm9yLmxvY2FsaXplZERlc2NyaXB0aW9uKTtcbiAqICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAqICAgfSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnU2lnbiBpbiB3aXRoIEFwcGxlJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tc2lnbi1pbi13aXRoLWFwcGxlJyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLlNpZ25JbldpdGhBcHBsZScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vdHdvZ2F0ZS9jb3Jkb3ZhLXBsdWdpbi1zaWduLWluLXdpdGgtYXBwbGUnLFxuICBwbGF0Zm9ybXM6IFsnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNpZ25JbldpdGhBcHBsZSBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFN0YXJ0cyB0aGUgYXV0aG9yaXphdGlvbiBmbG93cyBuYW1lZCBkdXJpbmcgY29udHJvbGxlciBpbml0aWFsaXphdGlvblxuICAgKlxuICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmFwcGxlLmNvbS9kb2N1bWVudGF0aW9uL2F1dGhlbnRpY2F0aW9uc2VydmljZXMvYXNhdXRob3JpemF0aW9uY29udHJvbGxlci8zMTUzMDQ3LXBlcmZvcm1yZXF1ZXN0c1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxBcHBsZVNpZ25JblJlc3BvbnNlPn0gUmV0dXJucyBhIHByb21pc2Ugd2hlbiBhdXRob3JpemF0aW9uIHN1Y2NlZWRzXG4gICAqIEBwYXJhbSB7QVNBdXRob3JpemF0aW9uQXBwbGVJRFJlcXVlc3R9IG9wdGlvbnNcbiAgICogQHRocm93cyBBcHBsZVNpZ25JbkVycm9yUmVzcG9uc2VcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2lnbmluKG9wdGlvbnM6IEFTQXV0aG9yaXphdGlvbkFwcGxlSURSZXF1ZXN0ID0ge30pOiBQcm9taXNlPEFwcGxlU2lnbkluUmVzcG9uc2U+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==

/***/ }),

/***/ 14272:
/*!****************************************************!*\
  !*** ./src/app/auth/login/login-routing.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 61506);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 28990:
/*!********************************************!*\
  !*** ./src/app/auth/login/login.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 14272);
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ 19342);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page */ 61506);
/* harmony import */ var _awesome_cordova_plugins_sign_in_with_apple_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/sign-in-with-apple/ngx */ 20765);










let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        ],
        providers: [_ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_1__.GooglePlus, _awesome_cordova_plugins_sign_in_with_apple_ngx__WEBPACK_IMPORTED_MODULE_3__.SignInWithApple],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_2__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 61506:
/*!******************************************!*\
  !*** ./src/app/auth/login/login.page.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.page.html */ 48182);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 11894);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_service_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/rest.service */ 90421);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/push-notifications */ 98748);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ 88259);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_service_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/user.service */ 84981);
/* harmony import */ var src_app_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/dialog/dialog.component */ 95029);
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ 19342);
/* harmony import */ var _awesome_cordova_plugins_sign_in_with_apple_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @awesome-cordova-plugins/sign-in-with-apple/ngx */ 20765);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _awesome_cordova_plugins_facebook_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @awesome-cordova-plugins/facebook/ngx */ 5901);

















// import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
// import { Facebook, FacebookLoginResponse } from '@awesome-cordova-plugins/facebook/ngx';
let LoginPage = class LoginPage {
    constructor(http, fb, restService, router, loadingController, alertController, userService, googlePlus, fbb, signInWithApple) {
        this.http = http;
        this.fb = fb;
        this.restService = restService;
        this.router = router;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.userService = userService;
        this.googlePlus = googlePlus;
        this.fbb = fbb;
        this.signInWithApple = signInWithApple;
        this.alertMessage = 'please Wait...';
        this.passwordType = 'password';
        this.isSeen = false;
        this.showSignUpLoader = false;
        this.forgetPassword = false;
    }
    ngOnInit() {
        this.profileForm = this.fb.group({
            email: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.email,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
                ],
            ],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.minLength(6)]],
        });
    }
    fblogin() {
        this.fbb.login(['public_profile', 'user_friends', 'email'])
            .then((res) => console.log('Logged into Facebook!', res))
            .catch(e => console.log('Error logging into Facebook', e));
        this.fbb.logEvent(this.fbb.EVENTS.EVENT_NAME_ADDED_TO_CART);
    }
    ionViewDidEnter() {
        this.forgetPassword = false;
    }
    submitLoginForm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.showSignUpLoader = true;
            const res = yield this.userService.onUserLogin(this.profileForm.value);
            this.showSignUpLoader = false;
            if (res['token']) {
                localStorage.setItem('token', res['token']);
                localStorage.setItem('user', JSON.stringify(res['data'][0]));
                this.setDeviceToken();
                this.setLastLogin();
                this.showSignUpLoader = false;
                this.router.navigate(['/main']);
            }
            if (res['error']) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
                    title: '<div><img src="assets/icon/lost.png" style="width: 20vw; height:20vw;"><br><h5>Error!</h5></div>',
                    text: 'User name or Password is wrong',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#99C43C',
                    allowOutsideClick: true,
                    // backdrop: true,
                });
            }
        });
    }
    get errorControl() {
        return this.profileForm.controls;
    }
    passwordSeenStatus() {
        this.isSeen = !this.isSeen;
        if (this.isSeen) {
            this.passwordType = 'text';
        }
        else {
            this.passwordType = 'password';
        }
    }
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                duration: 2000,
            });
            yield loading.present();
        });
    }
    presentAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Alert',
                message: this.alertMessage,
                buttons: ['OK']
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
        });
    }
    setLastLogin() {
        let date = new Date();
        const obj = {
            last_login: date
        };
        this.restService.postRequestToken('users/set-last-login', obj).subscribe((res) => {
            if (res.status) {
                console.log('Last login is set successfully');
            }
        });
    }
    setDeviceToken() {
        _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_3__.PushNotifications.requestPermissions().then(result => {
            if (result.receive === 'granted') {
                _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_3__.PushNotifications.register();
            }
            else {
            }
        });
        _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_3__.PushNotifications.addListener('registration', (token) => {
            console.log('Firebase Token => ', token.value);
            this.restService.postRequestToken('users/set-device-token', { deviceToken: token }).subscribe(res => {
                console.log('Token --->', token);
            });
        });
    }
    removeString(event) {
        console.log(this.profileForm.value);
        this.profileForm.get('email').setValue(event.target.value.trim());
        console.log(this.profileForm.value);
    }
    googleSignIn() {
        this.googlePlus.login({})
            .then(result => {
            this.user = result;
            console.log(this.user);
            var json = {
                user_name: this.user.givenName.replace(/\s/g, ''),
                email: this.user.email,
                id: this.user.userId
            };
            this.onSignUp(JSON.stringify(json));
        })
            .catch(err => {
            console.log(err);
            this.user = `Error ${JSON.stringify(err)}`;
        });
    }
    AppleSignIn() {
        this.signInWithApple.signin({
            requestedScopes: [
                _awesome_cordova_plugins_sign_in_with_apple_ngx__WEBPACK_IMPORTED_MODULE_8__.ASAuthorizationAppleIDRequest.ASAuthorizationScopeFullName,
                _awesome_cordova_plugins_sign_in_with_apple_ngx__WEBPACK_IMPORTED_MODULE_8__.ASAuthorizationAppleIDRequest.ASAuthorizationScopeEmail
            ]
        })
            .then((res) => {
            console.log(res);
            var json = {
                token: res.identityToken,
            };
            this.onSignUp(JSON.stringify(json));
        })
            .catch((error) => {
            console.error(error);
        });
    }
    onSignUp(data) {
        // this.showSignUpLoader = true;
        this.restService.postRequest('users/register', data).subscribe((res) => {
            if (res.token) {
                // console.log('This is res', res.data);
                localStorage.setItem('token', res.token);
                localStorage.setItem('user', JSON.stringify(res.data));
                this.setDeviceToken();
                this.showSignUpLoader = false;
                this.router.navigate(['main']);
            }
        }, err => {
            this.showSignUpLoader = false;
            // console.log('This is error', err.error);
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
                title: '<div><h5>Error!</h5></div>',
                html: err.error,
                confirmButtonText: 'Ok',
                confirmButtonColor: '#99C43C',
            });
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClient },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder },
    { type: src_app_service_rest_service__WEBPACK_IMPORTED_MODULE_2__.RestService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.AlertController },
    { type: src_app_service_user_service__WEBPACK_IMPORTED_MODULE_5__.UserService },
    { type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_7__.GooglePlus },
    { type: _awesome_cordova_plugins_facebook_ngx__WEBPACK_IMPORTED_MODULE_9__.Facebook },
    { type: _awesome_cordova_plugins_sign_in_with_apple_ngx__WEBPACK_IMPORTED_MODULE_8__.SignInWithApple }
];
LoginPage.propDecorators = {
    child: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.ViewChild, args: [src_app_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__.DialogComponent,] }]
};
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginPage);



/***/ }),

/***/ 11894:
/*!********************************************!*\
  !*** ./src/app/auth/login/login.page.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("p {\n  font-family: Poppins;\n}\n\n.danger {\n  color: red;\n}\n\n.blueBg > ion-col {\n  background-color: #707BBD;\n}\n\n:host ion-checkbox {\n  --size: 15px;\n}\n\n.mt-50 {\n  margin-top: 50px;\n}\n\n.mt-25 {\n  margin-top: 25px;\n}\n\n.mb-50 {\n  margin-bottom: 50px;\n}\n\n.w-100 {\n  width: 100% !important;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.cus-card {\n  margin-top: -50px;\n  position: relative;\n  border-radius: 50px;\n  background-color: white;\n}\n\n.mt-5 {\n  margin-top: 5px;\n}\n\n.pl-20 {\n  padding-left: 20px;\n}\n\n.cus-chip-dis {\n  background: #D6ECA6;\n  border-radius: 30px;\n  width: 330px;\n  height: 53px;\n  pointer-events: none;\n}\n\n.cus-chip {\n  background: #ABCD61;\n  border-radius: 30px;\n  width: 330px;\n  height: 53px;\n}\n\n.cus-label {\n  width: 100%;\n  color: #FFFF;\n  font-family: Poppins;\n  letter-spacing: 0.03em;\n  font-weight: 700;\n  font-size: 16px;\n}\n\n.cus-chip-social {\n  background: #FFFFFF;\n  border-radius: 30px;\n  width: 330px;\n  height: 53px;\n  border: 1px solid #DFDFDF;\n}\n\n.cus-label-social {\n  width: 100%;\n  color: #000000;\n  font-family: Poppins;\n  letter-spacing: 0.03em;\n  font-weight: 700;\n  font-size: 16px;\n}\n\n.separator {\n  display: flex;\n  align-items: center;\n}\n\n.separator .line {\n  height: 2px;\n  flex: 1;\n  background-color: #B6B6B6;\n}\n\n.separator p {\n  padding: 0 2rem;\n  color: #B6B6B6;\n  font-family: Poppins;\n}\n\nion-row > ion-col > ion-item > ion-input {\n  font-family: Poppins;\n  font-size: 14px;\n}\n\nion-item > ion-label {\n  font-family: Poppins;\n  font-size: 14px;\n}\n\nion-item > ion-icon {\n  font-size: 14px;\n}\n\n.eye {\n  position: absolute;\n  right: 10px;\n  top: 30px;\n  z-index: 10000;\n}\n\nion-col {\n  font-family: Poppins;\n}\n\n.fs-12 {\n  font-size: 12px;\n}\n\n.mt-30 {\n  margin-top: 30px;\n}\n\n.social-chip-space {\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.ml-20 {\n  margin-left: 20px;\n}\n\nion-grid {\n  padding: 0px !important;\n  overflow-y: auto;\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDQyxVQUFBO0FBQ0Q7O0FBRUE7RUFDRSx5QkFBQTtBQUNGOztBQUVFO0VBQ0UsWUFBQTtBQUNKOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBO0VBQ0Usc0JBQUE7QUFDRjs7QUFDQTtFQUNFLGtCQUFBO0FBRUY7O0FBQUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUdGOztBQURBO0VBQ0UsZUFBQTtBQUlGOztBQUZBO0VBQ0Usa0JBQUE7QUFLRjs7QUFGQTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FBS0Y7O0FBRkE7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFLRjs7QUFGQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUtGOztBQURBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUFJRjs7QUFEQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUlGOztBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBR0Y7O0FBQUE7RUFDRSxXQUFBO0VBQ0EsT0FBQTtFQUNBLHlCQUFBO0FBR0Y7O0FBQUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FBR0Y7O0FBQUE7RUFDRSxvQkFBQTtFQUNBLGVBQUE7QUFHRjs7QUFBQTtFQUNFLG9CQUFBO0VBQ0EsZUFBQTtBQUdGOztBQUFBO0VBRUUsZUFBQTtBQUVGOztBQUFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7QUFHRjs7QUFBQTtFQUNFLG9CQUFBO0FBR0Y7O0FBREE7RUFDRSxlQUFBO0FBSUY7O0FBRkE7RUFDRSxnQkFBQTtBQUtGOztBQUhBO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0FBTUY7O0FBSkE7RUFDRSxpQkFBQTtBQU9GOztBQUxBO0VBQ0UsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFRRiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwe1xuICBmb250LWZhbWlseTogUG9wcGlucztcbn1cblxuLmRhbmdlcntcbiBjb2xvcjogcmVkO1xufVxuXG4uYmx1ZUJnPiBpb24tY29se1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzA3QkJEO1xufVxuOmhvc3R7XG4gIGlvbi1jaGVja2JveHtcbiAgICAtLXNpemU6IDE1cHg7XG4gIH1cbn1cbi5tdC01MHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuLm10LTI1e1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG4ubWItNTB7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cbi53LTEwMHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cbi50ZXh0LWNlbnRlcntcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmN1cy1jYXJke1xuICBtYXJnaW4tdG9wOiAtNTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5tdC01e1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4ucGwtMjB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxuLmN1cy1jaGlwLWRpc3tcbiAgYmFja2dyb3VuZDogI0Q2RUNBNjtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgd2lkdGg6IDMzMHB4O1xuICBoZWlnaHQ6IDUzcHg7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uY3VzLWNoaXB7XG4gIGJhY2tncm91bmQ6ICNBQkNENjE7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIHdpZHRoOiAzMzBweDtcbiAgaGVpZ2h0OiA1M3B4O1xufVxuXG4uY3VzLWxhYmVse1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICAjRkZGRjtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAzZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcblxufVxuXG4uY3VzLWNoaXAtc29jaWFse1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICB3aWR0aDogMzMwcHg7XG4gIGhlaWdodDogNTNweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0RGREZERjtcbn1cblxuLmN1cy1sYWJlbC1zb2NpYWx7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogICMwMDAwMDA7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBsZXR0ZXItc3BhY2luZzogMC4wM2VtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDE2cHg7XG5cbn1cblxuLnNlcGFyYXRvcntcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNlcGFyYXRvciAubGluZXtcbiAgaGVpZ2h0OiAycHg7XG4gIGZsZXg6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6ICNCNkI2QjY7XG59XG5cbi5zZXBhcmF0b3IgcHtcbiAgcGFkZGluZzogMCAycmVtO1xuICBjb2xvcjogI0I2QjZCNjtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG59XG5cbmlvbi1yb3cgPmlvbi1jb2wgPiBpb24taXRlbSA+IGlvbi1pbnB1dHtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuaW9uLWl0ZW0gPiBpb24tbGFiZWx7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbmlvbi1pdGVtID4gaW9uLWljb257XG4gIC8vIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uZXlle1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xuICB0b3A6IDMwcHg7XG4gIHotaW5kZXg6IDEwMDAwO1xufVxuXG5pb24tY29se1xuICBmb250LWZhbWlseTogUG9wcGlucztcbn1cbi5mcy0xMntcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLm10LTMwe1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuLnNvY2lhbC1jaGlwLXNwYWNle1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cbi5tbC0yMHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5pb24tZ3JpZCB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBtYXJnaW46IDBweFxufVxuIl19 */");

/***/ }),

/***/ 48182:
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.page.html ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <ion-grid>\n    <ion-row class=\"blueBg\">\n      <ion-col>\n        <div class=\"text-center mb-50\">\n          <img class=\"mt-50 mb-10\" width=\"277\" height=\"78\" src=\"assets/logo.png\" alt=\"\" />\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-grid class=\"cus-card\">\n      <form [formGroup]=\"profileForm\">\n        <ion-row>\n          <ion-col class=\"pl-20\">\n            <div>\n              <ion-icon [routerLink]=\"['/home']\" size=\"large\" name=\"close-outline\"></ion-icon>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"mt-5\">\n          <ion-col>\n            <ion-item>\n              <ion-label position=\"floating\">\n                <ion-icon name=\"mail\" slot=\"start\"></ion-icon>\n                Email\n              </ion-label>\n              <ion-input (input)=\"removeString($event)\"></ion-input>\n            </ion-item>\n\n            <p class=\"ml-20 danger\" *ngIf=\"profileForm.touched && errorControl.email.errors?.required\">\n              Email is required\n            </p>\n\n            <p class=\"ml-20 danger\" *ngIf=\"profileForm.touched && errorControl.email.status === 'INVALID' \">\n              Email is incorrect\n            </p>\n\n\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label position=\"floating\">\n                <ion-icon name=\"lock-closed\"></ion-icon>\n                Password\n              </ion-label>\n              <ion-input [type]=passwordType formControlName=\"password\"></ion-input>\n              <ion-icon *ngIf=\"isSeen\" (click)=\"passwordSeenStatus()\" class=\"eye\" name=\"eye-outline\" slot=\"end\">\n              </ion-icon>\n              <ion-icon *ngIf=\"!isSeen\" (click)=\"passwordSeenStatus()\" class=\"eye\" name=\"eye-off-outline\" slot=\"end\">\n              </ion-icon>\n\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </form>\n\n    </ion-grid>\n\n    <ion-row class=\"mt-30\">\n      <ion-col class=\"text-center\">\n        <div *ngIf=\"showSignUpLoader\" class=\"loader1\"></div>\n        <ion-chip *ngIf=\"!showSignUpLoader\" [ngClass]=\"profileForm.valid ? 'cus-chip' : 'cus-chip-dis'\">\n          <ion-label class=\"text-center cus-label\" (click)=\"submitLoginForm()\">\n            LOG IN\n          </ion-label>\n        </ion-chip>\n      </ion-col>\n    </ion-row>\n    <div class=\"ion-text-center\">\n\n      <div class=\"form-group form-check text-center ion-text-center\">\n        <a [routerLink]=\"['/reset']\">Forgot Password?</a>\n      </div>\n\n    </div>\n\n    <ion-row>\n      <ion-col>\n        <div class=\"separator\">\n          <div class=\"line\"></div>\n          <p>OR</p>\n          <div class=\"line\"></div>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col class=\"text-center\">\n        <ion-chip class=\"cus-chip-social\" (click)=\"googleSignIn()\">\n          <ion-label class=\"text-center cus-label-social social-chip-space\">\n            <ion-icon name=\"logo-google\"></ion-icon>\n            CONTINUE WITH GOOGLE\n          </ion-label>\n        </ion-chip>\n      </ion-col>\n      <ion-col class=\"text-center\">\n        <ion-chip class=\"cus-chip-social\" (click)=\"AppleSignIn()\">\n          <ion-label class=\"text-center cus-label-social social-chip-space\">\n            <ion-icon name=\"logo-apple\"></ion-icon>\n            CONTINUE WITH Apple\n          </ion-label>\n        </ion-chip>\n      </ion-col>\n    </ion-row>\n\n    <!-- <ion-row>\n      <ion-col class=\"text-center\">\n        <ion-chip class=\"cus-chip-social\">\n          <ion-label class=\"text-center cus-label-social social-chip-space\">\n            <ion-icon src=\"assets/fb-logo.svg\"></ion-icon>\n            CONTINUE WITH FACEBOOK\n          </ion-label>\n        </ion-chip>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col class=\"text-center\">\n        <ion-chip class=\"cus-chip-social\">\n          <ion-label class=\"text-center cus-label-social social-chip-space\">\n            <ion-icon name=\"logo-apple\"></ion-icon>\n            CONTINUE WITH APPLE\n          </ion-label>\n        </ion-chip>\n      </ion-col>\n    </ion-row> -->\n  </ion-grid>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_auth_login_login_module_ts.js.map