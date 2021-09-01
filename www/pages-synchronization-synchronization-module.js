(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-synchronization-synchronization-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/settings/pages/synchronization/synchronization.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/settings/pages/synchronization/synchronization.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <h1>{{ 'core.settings.synchronization' | translate }}</h1>\r\n        <ion-buttons slot=\"end\">\r\n            <core-navbar-buttons>\r\n                <ion-button (click)=\"showInfo()\" [attr.aria-label]=\"'core.info' | translate\">\r\n                    <ion-icon name=\"fas-info-circle\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\r\n                </ion-button>\r\n            </core-navbar-buttons>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <core-loading [hideUntil]=\"sitesLoaded\">\r\n        <ion-item-divider>\r\n            <ion-label>\r\n                <h2>{{ 'core.settings.syncsettings' | translate }}</h2>\r\n            </ion-label>\r\n        </ion-item-divider>\r\n        <ion-item class=\"ion-text-wrap\">\r\n            <ion-label>{{ 'core.settings.enablesyncwifi' | translate }}</ion-label>\r\n            <ion-toggle slot=\"end\" [(ngModel)]=\"syncOnlyOnWifi\" (ngModelChange)=\"syncOnlyOnWifiChanged()\">\r\n            </ion-toggle>\r\n        </ion-item>\r\n        <ion-item-divider>\r\n            <ion-label>\r\n                <h2>{{ 'core.settings.sites' | translate }}</h2>\r\n            </ion-label>\r\n        </ion-item-divider>\r\n        <ion-item *ngFor=\"let site of sites\" [attr.aria-current]=\"site.id == currentSiteId ? 'page' : 'false'\" class=\"ion-text-wrap\">\r\n            <ion-label>\r\n                <p class=\"item-heading\">\r\n                    <core-format-text [text]=\"site.siteName\" clean=\"true\" [siteId]=\"site.id\"></core-format-text>\r\n                </p>\r\n                <p>{{ site.fullName }}</p>\r\n                <p>{{ site.siteUrl }}</p>\r\n            </ion-label>\r\n            <core-button-with-spinner [loading]=\"isSynchronizing(site.id)\" slot=\"end\">\r\n                <ion-button fill=\"clear\"  (click)=\"synchronize(site.id)\"\r\n                    [title]=\"site.siteName\" [attr.aria-label]=\"'core.settings.synchronizenow' | translate\">\r\n                    <ion-icon name=\"fas-sync-alt\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\r\n                </ion-button>\r\n            </core-button-with-spinner>\r\n        </ion-item>\r\n    </core-loading>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/core/features/settings/pages/synchronization/synchronization.module.ts":
/*!************************************************************************************!*\
  !*** ./src/core/features/settings/pages/synchronization/synchronization.module.ts ***!
  \************************************************************************************/
/*! exports provided: CoreSettingsSynchronizationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSettingsSynchronizationPageModule", function() { return CoreSettingsSynchronizationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _synchronization__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./synchronization */ "./src/core/features/settings/pages/synchronization/synchronization.ts");
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
        component: _synchronization__WEBPACK_IMPORTED_MODULE_4__["CoreSettingsSynchronizationPage"],
    },
];
let CoreSettingsSynchronizationPageModule = class CoreSettingsSynchronizationPageModule {
};
CoreSettingsSynchronizationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
        ],
        declarations: [
            _synchronization__WEBPACK_IMPORTED_MODULE_4__["CoreSettingsSynchronizationPage"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CoreSettingsSynchronizationPageModule);



/***/ }),

/***/ "./src/core/features/settings/pages/synchronization/synchronization.ts":
/*!*****************************************************************************!*\
  !*** ./src/core/features/settings/pages/synchronization/synchronization.ts ***!
  \*****************************************************************************/
/*! exports provided: CoreSettingsSynchronizationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSettingsSynchronizationPage", function() { return CoreSettingsSynchronizationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/core/constants */ "./src/core/constants.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/config */ "./src/core/services/config.ts");
/* harmony import */ var _features_settings_services_settings_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @features/settings/services/settings-helper */ "./src/core/features/settings/services/settings-helper.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
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
 * Page that displays the synchronization settings.
 */
let CoreSettingsSynchronizationPage = class CoreSettingsSynchronizationPage {
    constructor() {
        this.sites = [];
        this.sitesLoaded = false;
        this.currentSiteId = '';
        this.syncOnlyOnWifi = false;
        this.isDestroyed = false;
        this.currentSiteId = _services_sites__WEBPACK_IMPORTED_MODULE_4__["CoreSites"].getCurrentSiteId();
        this.sitesObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].on(_singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].SITE_UPDATED, (data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const site = yield _services_sites__WEBPACK_IMPORTED_MODULE_4__["CoreSites"].getSite(data.siteId);
            const siteEntry = this.sites.find((siteEntry) => siteEntry.id == site.id);
            if (siteEntry) {
                const siteInfo = site.getInfo();
                siteEntry.siteName = site.getSiteName();
                if (siteInfo) {
                    siteEntry.siteUrl = siteInfo.siteurl;
                    siteEntry.fullName = siteInfo.fullname;
                }
            }
        }));
    }
    /**
     * View loaded.
     */
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.sites = yield _services_sites__WEBPACK_IMPORTED_MODULE_4__["CoreSites"].getSortedSites();
            }
            catch (_a) {
                // Ignore errors.
            }
            this.sitesLoaded = true;
            this.syncOnlyOnWifi = yield _services_config__WEBPACK_IMPORTED_MODULE_6__["CoreConfig"].get(_core_constants__WEBPACK_IMPORTED_MODULE_2__["CoreConstants"].SETTINGS_SYNC_ONLY_ON_WIFI, true);
        });
    }
    /**
     * Called when sync only on wifi setting is enabled or disabled.
     */
    syncOnlyOnWifiChanged() {
        _services_config__WEBPACK_IMPORTED_MODULE_6__["CoreConfig"].set(_core_constants__WEBPACK_IMPORTED_MODULE_2__["CoreConstants"].SETTINGS_SYNC_ONLY_ON_WIFI, this.syncOnlyOnWifi ? 1 : 0);
    }
    /**
     * Syncrhonizes a site.
     *
     * @param siteId Site ID.
     */
    synchronize(siteId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Using syncOnlyOnWifi false to force manual sync.
            try {
                yield _features_settings_services_settings_helper__WEBPACK_IMPORTED_MODULE_7__["CoreSettingsHelper"].synchronizeSite(false, siteId);
            }
            catch (error) {
                if (this.isDestroyed) {
                    return;
                }
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showErrorModalDefault(error, 'core.settings.errorsyncsite', true);
            }
        });
    }
    /**
     * Returns true if site is beeing synchronized.
     *
     * @param siteId Site ID.
     * @return True if site is beeing synchronized, false otherwise.
     */
    isSynchronizing(siteId) {
        return !!_features_settings_services_settings_helper__WEBPACK_IMPORTED_MODULE_7__["CoreSettingsHelper"].getSiteSyncPromise(siteId);
    }
    /**
     * Show information about sync actions.
     */
    showInfo() {
        _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showAlert(_singletons__WEBPACK_IMPORTED_MODULE_8__["Translate"].instant('core.help'), _singletons__WEBPACK_IMPORTED_MODULE_8__["Translate"].instant('core.settings.synchronizenowhelp'));
    }
    /**
     * Page destroyed.
     */
    ngOnDestroy() {
        var _a;
        this.isDestroyed = true;
        (_a = this.sitesObserver) === null || _a === void 0 ? void 0 : _a.off();
    }
};
CoreSettingsSynchronizationPage.ctorParameters = () => [];
CoreSettingsSynchronizationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-core-app-settings-synchronization',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./synchronization.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/settings/pages/synchronization/synchronization.html")).default,
    })
], CoreSettingsSynchronizationPage);



/***/ })

}]);
//# sourceMappingURL=pages-synchronization-synchronization-module.js.map