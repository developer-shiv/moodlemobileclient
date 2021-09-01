(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-about-about-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/settings/pages/about/about.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/settings/pages/about/about.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <h1>\r\n            {{ 'core.settings.about' | translate}}\r\n        </h1>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-item class=\"ion-text-wrap\">\r\n        <ion-label><h2>{{ appName }} {{ versionName }}</h2></ion-label>\r\n    </ion-item>\r\n    <ion-item button class=\"ion-text-wrap\" (click)=\"openPage('deviceinfo')\" detail=\"true\">\r\n        <ion-icon name=\"fas-mobile\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\r\n        <ion-label>{{ 'core.settings.deviceinfo' | translate }}</ion-label>\r\n    </ion-item>\r\n    <ion-item button class=\"ion-text-wrap\" (click)=\"openPage('licenses')\" detail=\"true\">\r\n        <ion-icon name=\"far-copyright\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\r\n        <ion-label>{{ 'core.settings.opensourcelicenses' | translate }}</ion-label>\r\n    </ion-item>\r\n    <ion-item\r\n        *ngIf=\"privacyPolicy\"\r\n        class=\"ion-text-wrap\"\r\n        button core-link auto-login=\"no\" [href]=\"privacyPolicy\"\r\n        detail=\"true\" detailIcon=\"open-outline\"\r\n    >\r\n        <ion-icon name=\"fas-user-shield\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\r\n        <ion-label>{{ 'core.settings.privacypolicy' | translate }}</ion-label>\r\n    </ion-item>\r\n    <ion-item\r\n        *ngIf=\"feedbackFormUrl\"\r\n        class=\"ion-text-wrap\"\r\n        button core-link [href]=\"feedbackFormUrl\"\r\n        detail=\"true\" detailIcon=\"open-outline\"\r\n    >\r\n        <ion-icon name=\"fas-bullhorn\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\r\n        <ion-label>{{ 'core.settings.helpusimprove' | translate }}</ion-label>\r\n    </ion-item>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/user/pages/about/about.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/user/pages/about/about.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <h1 *ngIf=\"title\">{{ title }}</h1>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <ion-refresher slot=\"fixed\" [disabled]=\"!userLoaded\" (ionRefresh)=\"refreshUser($event.target)\">\r\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\r\n    </ion-refresher>\r\n    <core-loading [hideUntil]=\"userLoaded\">\r\n        <ion-list *ngIf=\"user\">\r\n            <ion-item-group *ngIf=\"hasContact\">\r\n                <ion-item-divider><ion-label><h2>{{ 'core.user.contact' | translate}}</h2></ion-label></ion-item-divider>\r\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"user.email\">\r\n                    <ion-label>\r\n                        <h2>{{ 'core.user.email' | translate }}</h2>\r\n                        <p><a class=\"core-anchor\" href=\"mailto:{{user.email}}\" core-link auto-login=\"no\">\r\n                            {{ user.email }}\r\n                        </a></p>\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"user.phone1\">\r\n                    <ion-label>\r\n                        <h2>{{ 'core.user.phone1' | translate}}</h2>\r\n                        <p><a class=\"core-anchor\" href=\"tel:{{user.phone1}}\" core-link auto-login=\"no\">\r\n                            {{ user.phone1 }}\r\n                        </a></p>\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"user.phone2\">\r\n                    <ion-label>\r\n                        <h2>{{ 'core.user.phone2' | translate}}</h2>\r\n                        <p><a class=\"core-anchor\" href=\"tel:{{user.phone2}}\" core-link auto-login=\"no\">\r\n                            {{ user.phone2 }}\r\n                        </a></p>\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"formattedAddress\">\r\n                    <ion-label>\r\n                        <h2>{{ 'core.user.address' | translate}}</h2>\r\n                        <p><a class=\"core-anchor\" [href]=\"encodedAddress\" core-link auto-login=\"no\">\r\n                            {{ formattedAddress }}\r\n                        </a></p>\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"user.city && !formattedAddress\">\r\n                    <ion-label>\r\n                        <h2>{{ 'core.user.city' | translate}}</h2>\r\n                        <p>{{ user.city }}</p>\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"user.country && !formattedAddress\">\r\n                    <ion-label>\r\n                        <h2>{{ 'core.user.country' | translate}}</h2>\r\n                        <p>{{ user.country }}</p>\r\n                    </ion-label>\r\n                </ion-item>\r\n            </ion-item-group>\r\n            <ion-item-group *ngIf=\"hasDetails\">\r\n                <ion-item-divider><ion-label><h2>{{ 'core.userdetails' | translate}}</h2></ion-label></ion-item-divider>\r\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"user.url\">\r\n                    <ion-label>\r\n                        <h2>{{ 'core.user.webpage' | translate}}</h2>\r\n                        <p><a class=\"core-anchor\" href=\"{{user.url}}\" core-link>\r\n                            {{ user.url }}\r\n                        </a></p>\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"user.interests\">\r\n                    <ion-label>\r\n                        <h2>{{ 'core.user.interests' | translate}}</h2>\r\n                        <p>{{ user.interests }}</p>\r\n                    </ion-label>\r\n                </ion-item>\r\n                <core-user-profile-field *ngFor=\"let field of user.customfields\" [field]=\"field\" contextLevel=\"course\"\r\n                    [contextInstanceId]=\"courseId\" [courseId]=\"courseId\">\r\n                </core-user-profile-field>\r\n            </ion-item-group>\r\n            <ion-item-group *ngIf=\"user.description\">\r\n                <ion-item-divider><ion-label><h2>{{ 'core.user.description' | translate}}</h2></ion-label></ion-item-divider>\r\n                <ion-item class=\"ion-text-wrap\">\r\n                    <ion-label>\r\n                        <p><core-format-text [text]=\"user.description\" contextLevel=\"user\" [contextInstanceId]=\"user.id\">\r\n                        </core-format-text></p>\r\n                    </ion-label>\r\n                </ion-item>\r\n            </ion-item-group>\r\n        </ion-list>\r\n\r\n        <core-empty-box *ngIf=\"!user || (!hasContact && !hasDetails && !user.description)\" icon=\"fas-user\"\r\n            [message]=\" 'core.user.detailsnotavailable' | translate\">\r\n        </core-empty-box>\r\n    </core-loading>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/core/features/settings/pages/about/about.module.ts":
/*!****************************************************************!*\
  !*** ./src/core/features/settings/pages/about/about.module.ts ***!
  \****************************************************************/
/*! exports provided: CoreSettingsAboutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSettingsAboutPageModule", function() { return CoreSettingsAboutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about */ "./src/core/features/settings/pages/about/about.ts");
// (C) Copyright 2015 Moodle Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.





const routes = [
    {
        path: '',
        component: _about__WEBPACK_IMPORTED_MODULE_4__["CoreSettingsAboutPage"],
    },
];
let CoreSettingsAboutPageModule = class CoreSettingsAboutPageModule {
};
CoreSettingsAboutPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
        ],
        declarations: [
            _about__WEBPACK_IMPORTED_MODULE_4__["CoreSettingsAboutPage"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CoreSettingsAboutPageModule);



/***/ }),

/***/ "./src/core/features/settings/pages/about/about.ts":
/*!*********************************************************!*\
  !*** ./src/core/features/settings/pages/about/about.ts ***!
  \*********************************************************/
/*! exports provided: CoreSettingsAboutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSettingsAboutPage", function() { return CoreSettingsAboutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/core/constants */ "./src/core/constants.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
// (C) Copyright 2015 Moodle Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.





/**
 * App settings about menu page.
 */
let CoreSettingsAboutPage = class CoreSettingsAboutPage {
    constructor() {
        var _a;
        this.feedbackFormUrl = (_a = _core_constants__WEBPACK_IMPORTED_MODULE_2__["CoreConstants"].CONFIG.feedbackFormUrl) !== null && _a !== void 0 ? _a : 'https://feedback.moodle.org/mobileapp';
        const currentSite = _services_sites__WEBPACK_IMPORTED_MODULE_3__["CoreSites"].getCurrentSite();
        this.appName = _core_constants__WEBPACK_IMPORTED_MODULE_2__["CoreConstants"].CONFIG.appname;
        this.versionName = _core_constants__WEBPACK_IMPORTED_MODULE_2__["CoreConstants"].CONFIG.versionname;
        // Calculate the privacy policy to use.
        this.privacyPolicy = (currentSite && (currentSite.getStoredConfig('tool_mobile_apppolicy') ||
            currentSite.getStoredConfig('sitepolicy'))) || _core_constants__WEBPACK_IMPORTED_MODULE_2__["CoreConstants"].CONFIG.privacypolicy;
    }
    /**
     * Opens a page.
     *
     * @param page The component deeplink name you want to push onto the navigation stack.
     */
    openPage(page) {
        // const navCtrl = this.svComponent ? this.svComponent.getMasterNav() : this.navCtrl;
        // navCtrl.push(page);
        _services_navigator__WEBPACK_IMPORTED_MODULE_4__["CoreNavigator"].navigate(page);
    }
};
CoreSettingsAboutPage.ctorParameters = () => [];
CoreSettingsAboutPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-core-app-settings-about',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./about.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/settings/pages/about/about.html")).default,
    })
], CoreSettingsAboutPage);



/***/ }),

/***/ "./src/core/features/user/pages/about/about.module.ts":
/*!************************************************************!*\
  !*** ./src/core/features/user/pages/about/about.module.ts ***!
  \************************************************************/
/*! exports provided: CoreUserAboutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreUserAboutPageModule", function() { return CoreUserAboutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _features_user_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @features/user/components/components.module */ "./src/core/features/user/components/components.module.ts");
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about.page */ "./src/core/features/user/pages/about/about.page.ts");
// (C) Copyright 2015 Moodle Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.






const routes = [
    {
        path: '',
        component: _about_page__WEBPACK_IMPORTED_MODULE_5__["CoreUserAboutPage"],
    },
];
let CoreUserAboutPageModule = class CoreUserAboutPageModule {
};
CoreUserAboutPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
            _features_user_components_components_module__WEBPACK_IMPORTED_MODULE_4__["CoreUserComponentsModule"],
        ],
        declarations: [
            _about_page__WEBPACK_IMPORTED_MODULE_5__["CoreUserAboutPage"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CoreUserAboutPageModule);



/***/ }),

/***/ "./src/core/features/user/pages/about/about.page.ts":
/*!**********************************************************!*\
  !*** ./src/core/features/user/pages/about/about.page.ts ***!
  \**********************************************************/
/*! exports provided: CoreUserAboutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreUserAboutPage", function() { return CoreUserAboutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/utils/text */ "./src/core/services/utils/text.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _features_user_services_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @features/user/services/user */ "./src/core/features/user/services/user.ts");
/* harmony import */ var _features_user_services_user_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @features/user/services/user-helper */ "./src/core/features/user/services/user-helper.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
// (C) Copyright 2015 Moodle Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.










/**
 * Page that displays info about a user.
 */
let CoreUserAboutPage = class CoreUserAboutPage {
    constructor() {
        this.userLoaded = false;
        this.hasContact = false;
        this.hasDetails = false;
        this.siteId = _services_sites__WEBPACK_IMPORTED_MODULE_2__["CoreSites"].getCurrentSiteId();
    }
    /**
     * On init.
     *
     * @return Promise resolved when done.
     */
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.userId = _services_navigator__WEBPACK_IMPORTED_MODULE_9__["CoreNavigator"].getRouteNumberParam('userId') || 0;
            this.courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_9__["CoreNavigator"].getRouteNumberParam('courseId') || 0;
            this.fetchUser().finally(() => {
                this.userLoaded = true;
            });
        });
    }
    /**
     * Fetches the user data.
     *
     * @return Promise resolved when done.
     */
    fetchUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const user = yield _features_user_services_user__WEBPACK_IMPORTED_MODULE_7__["CoreUser"].getProfile(this.userId, this.courseId);
                if (user.address) {
                    this.formattedAddress = _features_user_services_user_helper__WEBPACK_IMPORTED_MODULE_8__["CoreUserHelper"].formatAddress(user.address, user.city, user.country);
                    this.encodedAddress = _services_utils_text__WEBPACK_IMPORTED_MODULE_4__["CoreTextUtils"].buildAddressURL(this.formattedAddress);
                }
                this.hasContact = !!(user.email || user.phone1 || user.phone2 || user.city || user.country || user.address);
                this.hasDetails = !!(user.url || user.interests || (user.customfields && user.customfields.length > 0));
                this.user = user;
                this.title = user.fullname;
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__["CoreDomUtils"].showErrorModalDefault(error, 'core.user.errorloaduser', true);
            }
        });
    }
    /**
     * Refresh the user data.
     *
     * @param event Event.
     * @return Promise resolved when done.
     */
    refreshUser(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_5__["CoreUtils"].ignoreErrors(_features_user_services_user__WEBPACK_IMPORTED_MODULE_7__["CoreUser"].invalidateUserCache(this.userId));
            yield this.fetchUser();
            event === null || event === void 0 ? void 0 : event.complete();
            if (this.user) {
                _singletons_events__WEBPACK_IMPORTED_MODULE_6__["CoreEvents"].trigger(_features_user_services_user__WEBPACK_IMPORTED_MODULE_7__["CoreUserProvider"].PROFILE_REFRESHED, {
                    courseId: this.courseId,
                    userId: this.userId,
                    user: this.user,
                }, this.siteId);
            }
        });
    }
};
CoreUserAboutPage.ctorParameters = () => [];
CoreUserAboutPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-core-user-about',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./about.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/user/pages/about/about.html")).default,
    })
], CoreUserAboutPage);



/***/ })

}]);
//# sourceMappingURL=pages-about-about-module.js.map