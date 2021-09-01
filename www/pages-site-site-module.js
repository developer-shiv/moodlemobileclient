(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-site-site-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/login/pages/site/site.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/login/pages/site/site.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n\r\n        <h1>{{ 'core.login.connecttomoodle' | translate }}</h1>\r\n\r\n        <ion-buttons slot=\"end\">\r\n            <ion-button fill=\"clear\" (click)=\"openSettings()\" [attr.aria-label]=\"'core.settings.appsettings' | translate\">\r\n                <ion-icon slot=\"icon-only\" name=\"fas-cog\" aria-hidden=\"true\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"ion-padding\">\r\n    <div class=\"ion-text-center ion-padding ion-margin-bottom core-login-site-logo\"\r\n        [class.hidden]=\"hasSites || enteredSiteUrl\">\r\n        <img src=\"assets/img/login_logo.png\" class=\"avatar-full login-logo\" role=\"presentation\" alt=\"\">\r\n    </div>\r\n    <form [formGroup]=\"siteForm\" (ngSubmit)=\"connect($event, siteForm.value.siteUrl)\" *ngIf=\"!fixedSites\" #siteFormEl>\r\n        <!-- Form to input the site URL if there are no fixed sites. -->\r\n        <ng-container *ngIf=\"siteSelector == 'url'\">\r\n            <ion-item>\r\n                <ion-label position=\"stacked\">\r\n                    <h2>{{ 'core.login.siteaddress' | translate }}</h2>\r\n                </ion-label>\r\n                <ion-input name=\"url\" type=\"url\" placeholder=\"{{ 'core.login.siteaddressplaceholder' | translate }}\"\r\n                    formControlName=\"siteUrl\" [core-auto-focus]=\"showKeyboard && !showScanQR\">\r\n                </ion-input>\r\n            </ion-item>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"siteSelector != 'url'\">\r\n            <ion-item>\r\n                <ion-label position=\"stacked\">\r\n                    <h2>{{ 'core.login.siteaddress' | translate }}</h2>\r\n                </ion-label>\r\n                <ion-input name=\"url\" placeholder=\"{{ 'core.login.siteaddressplaceholder' | translate }}\" formControlName=\"siteUrl\"\r\n                    [core-auto-focus]=\"showKeyboard && !showScanQR\" (ionChange)=\"searchSite($event, siteForm.value.siteUrl)\">\r\n                </ion-input>\r\n            </ion-item>\r\n\r\n            <ion-list [class.hidden]=\"!hasSites && !enteredSiteUrl\" class=\"core-login-site-list\">\r\n                <ion-item lines=\"none\" class=\"core-login-site-list-title\">\r\n                    <ion-label>\r\n                        <h2 class=\"item-heading\">{{ 'core.login.selectsite' | translate }}</h2>\r\n                    </ion-label>\r\n                </ion-item>\r\n                <ion-item button *ngIf=\"enteredSiteUrl\" (click)=\"connect($event, enteredSiteUrl.url)\"\r\n                    [attr.aria-label]=\"'core.login.connect' | translate\" detail=\"true\" class=\"core-login-entered-site\">\r\n                    <ion-thumbnail slot=\"start\" aria-hidden=\"true\">\r\n                        <ion-icon name=\"fas-pen\" aria-hidden=\"true\"></ion-icon>\r\n                    </ion-thumbnail>\r\n                    <ion-label>\r\n                        <h2 class=\"ion-text-wrap\">{{ 'core.login.yourenteredsite' | translate }}</h2>\r\n                        <p>{{enteredSiteUrl.noProtocolUrl}}</p>\r\n                    </ion-label>\r\n                </ion-item>\r\n\r\n                <div class=\"core-login-site-list-found\" [class.hidden]=\"!hasSites\" [class.dimmed]=\"loadingSites\">\r\n                    <div *ngIf=\"loadingSites\" class=\"core-login-site-list-loading\">\r\n                        <ion-spinner [attr.aria-label]=\"'core.loading' | translate\"></ion-spinner>\r\n                    </div>\r\n                    <ng-container *ngFor=\"let site of sites\">\r\n                        <ng-container *ngTemplateOutlet=\"sitelisting; context: {site: site}\"></ng-container>\r\n                    </ng-container>\r\n                </div>\r\n            </ion-list>\r\n\r\n            <div *ngIf=\"!hasSites && loadingSites\" class=\"core-login-site-nolist-loading\">\r\n                <ion-spinner [attr.aria-label]=\"'core.loading' | translate\"></ion-spinner>\r\n            </div>\r\n        </ng-container>\r\n\r\n        <ion-item *ngIf=\"siteSelector == 'url'\" lines=\"none\">\r\n            <ion-label>\r\n                <ion-button expand=\"block\" [disabled]=\"!siteForm.valid\" class=\"ion-text-wrap\" type=\"submit\">\r\n                    {{ 'core.login.connect' | translate }}\r\n                </ion-button>\r\n            </ion-label>\r\n        </ion-item>\r\n    </form>\r\n\r\n    <ng-container *ngIf=\"fixedSites\">\r\n        <!-- Pick the site from a list of fixed sites. -->\r\n        <ion-list *ngIf=\"siteSelector == 'list'\">\r\n            <ion-item lines=\"none\">\r\n                <ion-label>\r\n                    <h2 class=\"item-heading\">{{ 'core.login.selectsite' | translate }}</h2>\r\n                </ion-label>\r\n            </ion-item>\r\n            <ion-searchbar *ngIf=\"fixedSites.length > 4\" [(ngModel)]=\"filter\" (ionInput)=\"filterChanged($event)\"\r\n                (ionCancel)=\"filterChanged()\" [placeholder]=\"'core.login.findyoursite' | translate\">\r\n            </ion-searchbar>\r\n            <ng-container *ngFor=\"let site of filteredSites\">\r\n                <ng-container *ngTemplateOutlet=\"sitelisting; context: {site: site}\"></ng-container>\r\n            </ng-container>\r\n        </ion-list>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"showScanQR && !hasSites && !enteredSiteUrl\">\r\n        <div class=\"ion-text-center ion-padding ion-margin-top\">{{ 'core.login.or' | translate }}</div>\r\n        <ion-button expand=\"block\" color=\"light\" class=\"ion-margin\" lines=\"none\" (click)=\"showInstructionsAndScanQR()\"\r\n            aria-haspopup=\"dialog\">\r\n            <ion-icon slot=\"start\" name=\"fas-qrcode\" aria-hidden=\"true\"></ion-icon>\r\n            <ion-label>{{ 'core.scanqr' | translate }}</ion-label>\r\n        </ion-button>\r\n    </ng-container>\r\n\r\n    <!-- Help. -->\r\n    <ion-button\r\n        class=\"ion-margin-top core-login-need-help core-button-as-link ion-text-wrap\"\r\n        (click)=\"showHelp()\"\r\n        aria-haspopup=\"dialog\"\r\n        expand=\"block\"\r\n        fill=\"clear\"\r\n        color=\"dark\"\r\n    >\r\n        <ion-label>{{ 'core.needhelp' | translate }}</ion-label>\r\n    </ion-button>\r\n</ion-content>\r\n\r\n<!-- Template site selector. -->\r\n<ng-template #sitelisting let-site=\"site\">\r\n    <ion-item button (click)=\"connect($event, site.url, site)\" [attr.aria-label]=\"site.name\" detail=\"true\">\r\n        <ion-thumbnail *ngIf=\"siteFinderSettings.displayimage\" slot=\"start\">\r\n            <img [src]=\"site.imageurl\" *ngIf=\"site.imageurl\" onError=\"this.src='assets/icon/icon.png'\" alt=\"\" role=\"presentation\">\r\n            <img src=\"assets/icon/icon.png\" *ngIf=\"!site.imageurl\" class=\"core-login-default-icon\" alt=\"\" role=\"presentation\">\r\n        </ion-thumbnail>\r\n        <ion-label>\r\n            <p *ngIf=\"site.title\" class=\"item-heading ion-text-wrap\">{{site.title}}</p>\r\n            <p *ngIf=\"site.noProtocolUrl\">{{site.noProtocolUrl}}</p>\r\n            <p *ngIf=\"site.location\">{{site.location}}</p>\r\n        </ion-label>\r\n    </ion-item>\r\n</ng-template>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/settings/pages/site/site.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/settings/pages/site/site.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <h1>{{ 'core.settings.preferences' | translate}}</h1>\r\n        <ion-buttons slot=\"end\">\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <core-split-view>\r\n        <ion-refresher slot=\"fixed\" [disabled]=\"!handlers.loaded\" (ionRefresh)=\"refreshData($event.target)\">\r\n            <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\r\n        </ion-refresher>\r\n        <core-loading [hideUntil]=\"handlers.loaded\">\r\n            <ion-list>\r\n                <ion-item *ngIf=\"siteInfo\" class=\"ion-text-wrap\">\r\n                    <ion-label>\r\n                        <p class=\"item-heading\">{{siteInfo!.fullname}}</p>\r\n                        <p>\r\n                            <core-format-text [text]=\"siteName\" contextLevel=\"system\" [contextInstanceId]=\"0\"\r\n                                [wsNotFiltered]=\"true\"></core-format-text>\r\n                        </p>\r\n                        <p>{{ siteUrl }}</p>\r\n                    </ion-label>\r\n                </ion-item>\r\n                <core-spacer></core-spacer>\r\n\r\n                <ion-item *ngFor=\"let handler of handlers.items\" [ngClass]=\"['core-settings-handler', handler.class]\"\r\n                    [attr.aria-label]=\"handler.title | translate\" detail=\"true\" (click)=\"handlers.select(handler)\" button\r\n                    [attr.aria-current]=\"handlers.getItemAriaCurrent(handler)\">\r\n                    <ion-icon [name]=\"handler.icon\" slot=\"start\" *ngIf=\"handler.icon\" aria-hidden=\"true\">\r\n                    </ion-icon>\r\n                    <ion-label>\r\n                        <p class=\"item-heading\">{{ handler.title | translate}}</p>\r\n                    </ion-label>\r\n                </ion-item>\r\n\r\n                <ion-card>\r\n                    <ion-item class=\"ion-text-wrap\" *ngIf=\"spaceUsage\">\r\n                        <ion-label>\r\n                            <p class=\"item-heading ion-text-wrap\">{{ 'core.settings.spaceusage' | translate }}</p>\r\n                            <p *ngIf=\"spaceUsage.spaceUsage\">{{ spaceUsage.spaceUsage | coreBytesToSize }}</p>\r\n                        </ion-label>\r\n                        <ion-button fill=\"clear\" [attr.aria-label]=\"'core.info' | translate\" (click)=\"showSpaceInfo()\" slot=\"end\">\r\n                            <ion-icon name=\"fas-info-circle\" color=\"info\" slot=\"icon-only\"></ion-icon>\r\n                        </ion-button>\r\n                        <ion-button fill=\"clear\" color=\"danger\" slot=\"end\" (click)=\"deleteSiteStorage()\"\r\n                            [hidden]=\"spaceUsage.spaceUsage! + spaceUsage.cacheEntries! <= 0\"\r\n                            [attr.aria-label]=\"'core.settings.deletesitefilestitle' | translate\">\r\n                            <ion-icon name=\"fas-trash\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\r\n                        </ion-button>\r\n                    </ion-item>\r\n                    <ion-item class=\"ion-text-wrap\">\r\n                        <ion-label>\r\n                            <p class=\"item-heading\">{{ 'core.settings.synchronizenow' | translate }}</p>\r\n                        </ion-label>\r\n                        <ion-button fill=\"clear\" [attr.aria-label]=\"'core.info' | translate\" (click)=\"showSyncInfo()\" slot=\"end\">\r\n                            <ion-icon name=\"fas-info-circle\" color=\"info\" slot=\"icon-only\"></ion-icon>\r\n                        </ion-button>\r\n                        <core-button-with-spinner [loading]=\"isSynchronizing()\" slot=\"end\">\r\n                            <ion-button fill=\"clear\" (click)=\"synchronize()\"\r\n                                [attr.aria-label]=\"'core.settings.synchronizenow' | translate\">\r\n                                <ion-icon name=\"fas-sync-alt\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\r\n                            </ion-button>\r\n                        </core-button-with-spinner>\r\n                    </ion-item>\r\n                </ion-card>\r\n            </ion-list>\r\n        </core-loading>\r\n    </core-split-view>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/core/features/login/pages/site/site.module.ts":
/*!***********************************************************!*\
  !*** ./src/core/features/login/pages/site/site.module.ts ***!
  \***********************************************************/
/*! exports provided: CoreLoginSitePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreLoginSitePageModule", function() { return CoreLoginSitePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _site__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./site */ "./src/core/features/login/pages/site/site.ts");
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
        component: _site__WEBPACK_IMPORTED_MODULE_4__["CoreLoginSitePage"],
    },
];
let CoreLoginSitePageModule = class CoreLoginSitePageModule {
};
CoreLoginSitePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
        ],
        declarations: [
            _site__WEBPACK_IMPORTED_MODULE_4__["CoreLoginSitePage"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CoreLoginSitePageModule);



/***/ }),

/***/ "./src/core/features/login/pages/site/site.scss":
/*!******************************************************!*\
  !*** ./src/core/features/login/pages/site/site.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\n * App Global variables SCSS\n * ----------------------------------------------------------------------------\n * Place here the different files you should import to use global variables.\n */\n/*\n * App custom mixins for SCSS\n * ----------------------------------------------------------------------------\n * Place here our custom mixins.\n */\n/*\n * Imported ionic mixins for SCSS\n * ----------------------------------------------------------------------------\n * Place here our custom mixins.\n * Extracted from ionic.mixins.scss\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/themes/ionic.mixins.scss\n */\n/*\n * App Custom App variables SCSS\n * ----------------------------------------------------------------------------\n * Place here all custom app variables.\n */\n/*\n * App Global variables SCSS\n * ----------------------------------------------------------------------------\n * Place here all global variables.\n */\n/**\n * Layout Breakpoints\n *\n * https://ionicframework.com/docs/layout/grid#default-breakpoints\n */\n.item-input:last-child {\n  margin-bottom: 20px;\n}\n.item.core-login-need-help {\n  margin-top: 16px;\n}\n.item.core-login-site-qrcode .item-inner {\n  border-bottom: 0;\n}\n.core-login-site-connect {\n  margin-top: 1.4rem;\n}\n.item ion-thumbnail {\n  min-width: 50px;\n  min-height: 50px;\n  width: 50px;\n  height: 50px;\n  border-radius: 20%;\n  box-shadow: 0 0 4px #eee;\n  text-align: center;\n  overflow: hidden;\n}\n.item ion-thumbnail img {\n  max-height: 50px;\n  max-width: -webkit-fit-content;\n  max-width: fit-content;\n  width: auto;\n  height: auto;\n  margin: 0 auto;\n  margin-left: 50%;\n  transform: translateX(-50%);\n  object-fit: cover;\n  object-position: 50% 50%;\n}\n.item ion-thumbnail ion-icon {\n  margin: 0 auto;\n  font-size: 35px;\n  height: 50px;\n}\n.core-login-site-logo,\n.core-login-site-list,\n.core-login-site-list-found {\n  transition-delay: 0s;\n  visibility: visible;\n  opacity: 1;\n  transition: all 0.7s ease-in-out;\n  max-height: 9999px;\n}\n.core-login-site-logo.hidden,\n.core-login-site-list.hidden,\n.core-login-site-list-found.hidden {\n  opacity: 0;\n  visibility: hidden;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  max-height: 0;\n}\n.core-login-site-list-found.dimmed {\n  pointer-events: none;\n  position: relative;\n}\n.core-login-site-list-loading {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-content: center;\n  align-items: center;\n  background-color: rgba(255, 255, 255, 0.5);\n  z-index: 1;\n}\n.core-login-site-list-loading ion-spinner {\n  margin: 0 auto;\n}\n.core-login-site-nolist-loading {\n  margin-top: 16px;\n  text-align: center;\n}\n.item.core-login-site-list-title ion-label, .item.core-login-site-list-title ion-label h2.item-heading {\n  margin-top: 0;\n}\n@media (min-width: 768px) {\n  ion-content > * {\n    max-width: 600px;\n    margin: 0 auto;\n    width: 100%;\n  }\n\n  ion-content .core-login-site-logo {\n    margin-top: 20%;\n  }\n  ion-content .core-login-site-logo.hidden {\n    margin-top: 0;\n  }\n}\n.core-login-entered-site {\n  background-color: var(--gray-lighter);\n}\n.core-login-entered-site ion-thumbnail {\n  box-shadow: 0 0 4px #ddd;\n}\n.core-login-default-icon {\n  filter: grayscale(100%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9nbG9iYWxzLnNjc3MiLCJzcmMvdGhlbWUvZ2xvYmFscy5taXhpbnMuc2NzcyIsInNyYy90aGVtZS9nbG9iYWxzLm1peGlucy5pb25pYy5zY3NzIiwic3JjL3RoZW1lL2dsb2JhbHMuY3VzdG9tLnNjc3MiLCJzcmMvdGhlbWUvZ2xvYmFscy52YXJpYWJsZXMuc2NzcyIsInNyYy9jb3JlL2ZlYXR1cmVzL2xvZ2luL3BhZ2VzL3NpdGUvc2l0ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0VBQUE7QUNBQTs7OztFQUFBO0FDQUE7Ozs7OztFQUFBO0FDQUE7Ozs7RUFBQTtBQ0FBOzs7O0VBQUE7QUF1RkE7Ozs7RUFBQTtBQ3JGQTtFQUNJLG1CQUFBO0FBK0JKO0FBM0JJO0VBQ0ksZ0JBQUE7QUE4QlI7QUEzQlE7RUFDSSxnQkFBQTtBQTZCWjtBQWxCQTtFQUNJLGtCQUFBO0FBcUJKO0FBbEJBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQXFCSjtBQW5CSTtFQUNJLGdCQUFBO0VBQ0EsOEJBQUE7RUFBQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0FBcUJSO0FBbkJJO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBcUJSO0FBakJBOzs7RUFHSSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7QUFvQko7QUFsQkk7OztFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0FBc0JSO0FBbEJBO0VBQ0ksb0JBQUE7RUFDQSxrQkFBQTtBQXFCSjtBQWxCQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtFQUNBLFVBQUE7QUFxQko7QUFwQkk7RUFDSSxjQUFBO0FBc0JSO0FBbEJBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQXFCSjtBQWpCSTtFQUNJLGFBQUE7QUFvQlI7QUFoQkE7RUFDSTtJQUNJLGdCQUFBO0lBQ0EsY0FBQTtJQUNBLFdBQUE7RUFtQk47O0VBaEJFO0lBQ0ksZUFBQTtFQW1CTjtFQWxCTTtJQUNJLGFBQUE7RUFvQlY7QUFDRjtBQWhCQTtFQUNJLHFDQUFBO0FBa0JKO0FBakJJO0VBQ0ksd0JBQUE7QUFtQlI7QUFmQTtFQUNJLHVCQUFBO0FBa0JKIiwiZmlsZSI6InNyYy9jb3JlL2ZlYXR1cmVzL2xvZ2luL3BhZ2VzL3NpdGUvc2l0ZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogQXBwIEdsb2JhbCB2YXJpYWJsZXMgU0NTU1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIFBsYWNlIGhlcmUgdGhlIGRpZmZlcmVudCBmaWxlcyB5b3Ugc2hvdWxkIGltcG9ydCB0byB1c2UgZ2xvYmFsIHZhcmlhYmxlcy5cclxuICovXHJcblxyXG4kZm9udC1wYXRoOiBcIi4uL2Fzc2V0cy9mb250c1wiO1xyXG4kYXNzZXRzLXBhdGg6IFwiLi4vYXNzZXRzXCI7XHJcbkBpbXBvcnQgXCIuL2dsb2JhbHMubWl4aW5zLnNjc3NcIjtcclxuQGltcG9ydCBcIi4vZ2xvYmFscy5taXhpbnMuaW9uaWMuc2Nzc1wiO1xyXG5AaW1wb3J0IFwiLi9nbG9iYWxzLmN1c3RvbS5zY3NzXCI7XHJcbkBpbXBvcnQgXCIuL2dsb2JhbHMudmFyaWFibGVzLnNjc3NcIjtcclxuIiwiLypcclxuICogQXBwIGN1c3RvbSBtaXhpbnMgZm9yIFNDU1NcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBQbGFjZSBoZXJlIG91ciBjdXN0b20gbWl4aW5zLlxyXG4gKi9cclxuXHJcbiBAbWl4aW4gY29yZS1mb2N1cygpIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAmOjphZnRlciB7XHJcbiAgICAgICAgQGluY2x1ZGUgcG9zaXRpb24oMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIEBpbmNsdWRlIGNvcmUtZm9jdXMtc3R5bGUoKTtcclxuICAgIH1cclxuIH1cclxuXHJcbiBAbWl4aW4gY29yZS1mb2N1cy1zdHlsZSgpIHtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCB2YXIoLS1hMTF5LWZvY3VzLXdpZHRoKSAxcHggdmFyKC0tYTExeS1mb2N1cy1jb2xvcik7XHJcbiAgICAvLyBUaGlja2VyIG9wdGlvbjpcclxuICAgIC8vIGJvcmRlcjogdmFyKC0tYTExeS1mb2N1cy13aWR0aCkgc29saWQgdmFyKC0tYTExeS1mb2N1cy1jb2xvcik7XHJcbn1cclxuXHJcbkBtaXhpbiBjb3JlLXRyYW5zaXRpb24oJHdoZXJlOiBhbGwsICR0aW1lOiA1MDBtcykge1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAkd2hlcmUgJHRpbWUgZWFzZS1pbi1vdXQ7XHJcbiAgICAtbW96LXRyYW5zaXRpb246ICR3aGVyZSAkdGltZSBlYXNlLWluLW91dDtcclxuICAgIC1tcy10cmFuc2l0aW9uOiAkd2hlcmUgJHRpbWUgZWFzZS1pbi1vdXQ7XHJcbiAgICAtby10cmFuc2l0aW9uOiAkd2hlcmUgJHRpbWUgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiAkd2hlcmUgJHRpbWUgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbkBtaXhpbiBwdXNoLWFycm93LWNvbG9yKCRjb2xvcjogZGVkZWRlLCAkZmxpcC1ydGw6IGZhbHNlKSB7XHJcbiAgICAkc3ZnOiBcIjxzdmclMjB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTIwdmlld0JveD0nMCUyMDAlMjAxMiUyMDIwJz48cGF0aCUyMGQ9J00yLDIwbC0yLTJsOC04TDAsMmwyLTJsMTAsMTBMMiwyMHonJTIwZmlsbD0nJTIzI3skY29sb3J9Jy8+PC9zdmc+XCI7XHJcbiAgICBAaWYgJGZsaXAtcnRsICE9IHRydWUge1xyXG4gICAgICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsI3skc3ZnfVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9IEBlbHNlIHtcclxuICAgICAgICAkZmxpcHBlZC1zdmc6IFwiPHN2ZyUyMHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclMjB2aWV3Qm94PScwJTIwMCUyMDEyJTIwMjAnPjxwYXRoJTIwdHJhbnNmb3JtPSd0cmFuc2xhdGUoMjAsJTIwMCklMjBzY2FsZSgtMSwlMjAxKSclMjBkPSdNMiwyMGwtMi0ybDgtOEwwLDJsMi0ybDEwLDEwTDIsMjB6JyUyMGZpbGw9JyUyMyN7JGNvbG9yfScvPjwvc3ZnPlwiO1xyXG5cclxuICAgICAgICBAaW5jbHVkZSBsdHIgKCkge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwjeyRzdmd9XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBAaW5jbHVkZSBydGwoKSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCN7JGZsaXBwZWQtc3ZnfVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBib3JkZXItc3RhcnQoJHB4LCAkdHlwZTogbnVsbCwgJGNvbG9yOiBudWxsKSB7XHJcbiAgICBAaW5jbHVkZSBsdHIoKSB7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6ICRweCAkdHlwZSAkY29sb3I7XHJcbiAgICB9XHJcblxyXG4gICAgQGluY2x1ZGUgcnRsKCkge1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogJHB4ICR0eXBlICRjb2xvcjtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbkBtaXhpbiBib3JkZXItZW5kKCRweCwgJHR5cGU6IG51bGwsICRjb2xvcjogbnVsbCkge1xyXG4gICAgQGluY2x1ZGUgbHRyKCkge1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogJHB4ICR0eXBlICRjb2xvcjtcclxuICAgIH1cclxuXHJcbiAgICBAaW5jbHVkZSBydGwoKSB7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6ICRweCAkdHlwZSAkY29sb3I7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBzYWZlLWFyZWEtYm9yZGVyLXN0YXJ0KCRweCwgJHR5cGUsICRjb2xvcikge1xyXG4gICAgJHNhZmUtYXJlYS1wb3NpdGlvbjogY2FsYyhjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtbGVmdCkgKyAjeyRweH0pO1xyXG4gICAgJHNhZmUtYXJlYS1wb3NpdGlvbi1lbnY6IGNhbGMoZW52KHNhZmUtYXJlYS1pbnNldC1sZWZ0KSArICN7JHB4fSk7XHJcblxyXG4gICAgQGluY2x1ZGUgYm9yZGVyLXN0YXJ0KCRweCwgJHR5cGUsICRjb2xvcik7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xyXG4gICAgICAgIEBpbmNsdWRlIGJvcmRlci1zdGFydCgkc2FmZS1hcmVhLXBvc2l0aW9uLCAkdHlwZSwgJGNvbG9yKTtcclxuICAgICAgICBAaW5jbHVkZSBib3JkZXItc3RhcnQoJHNhZmUtYXJlYS1wb3NpdGlvbi1lbnYsICR0eXBlLCAkY29sb3IpO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gc2FmZS1hcmVhLWJvcmRlci1lbmQoJHB4LCAkdHlwZSwgJGNvbG9yKSB7XHJcbiAgICAkc2FmZS1hcmVhLXBvc2l0aW9uOiBjYWxjKGNvbnN0YW50KHNhZmUtYXJlYS1pbnNldC1yaWdodCkgKyAjeyRweH0pO1xyXG4gICAgJHNhZmUtYXJlYS1wb3NpdGlvbi1lbnY6IGNhbGMoZW52KHNhZmUtYXJlYS1pbnNldC1yaWdodCkgKyAjeyRweH0pO1xyXG5cclxuICAgIEBpbmNsdWRlIGJvcmRlci1lbmQoJHB4LCAkdHlwZSwgJGNvbG9yKTtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XHJcbiAgICAgICAgQGluY2x1ZGUgYm9yZGVyLWVuZCgkc2FmZS1hcmVhLXBvc2l0aW9uLCAkdHlwZSwgJGNvbG9yKTtcclxuICAgICAgICBAaW5jbHVkZSBib3JkZXItZW5kKCRzYWZlLWFyZWEtcG9zaXRpb24tZW52LCAkdHlwZSwgJGNvbG9yKTtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIHNhZmUtYXJlYS1tYXJnaW4taG9yaXpvbnRhbCgkc3RhcnQsICRlbmQ6ICRzdGFydCkge1xyXG4gICAgJHNhZmUtYXJlYS1lbmQ6IG51bGw7XHJcbiAgICAkc2FmZS1hcmVhLXN0YXJ0OiBudWxsO1xyXG4gICAgJHNhZmUtYXJlYS1zdGFydC1lbnY6IG51bGw7XHJcbiAgICAkc2FmZS1hcmVhLWVuZC1lbnY6IG51bGw7XHJcblxyXG4gICAgQGlmICgkZW5kKSB7XHJcbiAgICAgICAgJHNhZmUtYXJlYS1lbmQ6IGNhbGMoY29uc3RhbnQoc2FmZS1hcmVhLWluc2V0LXJpZ2h0KSArICN7JGVuZH0pO1xyXG4gICAgICAgICRzYWZlLWFyZWEtZW5kLWVudjogY2FsYyhlbnYoc2FmZS1hcmVhLWluc2V0LXJpZ2h0KSArICN7JGVuZH0pO1xyXG4gICAgfVxyXG4gICAgQGlmICgkc3RhcnQpIHtcclxuICAgICAgICAkc2FmZS1hcmVhLXN0YXJ0OiBjYWxjKGNvbnN0YW50KHNhZmUtYXJlYS1pbnNldC1sZWZ0KSArICN7JHN0YXJ0fSk7XHJcbiAgICAgICAgJHNhZmUtYXJlYS1zdGFydC1lbnY6IGNhbGMoZW52KHNhZmUtYXJlYS1pbnNldC1sZWZ0KSArICN7JHN0YXJ0fSk7XHJcbiAgICB9XHJcblxyXG4gICAgQGluY2x1ZGUgbWFyZ2luLWhvcml6b250YWwoJHN0YXJ0LCAkZW5kKTtcclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xyXG4gICAgICAgIEBpbmNsdWRlIG1hcmdpbi1ob3Jpem9udGFsKCRzYWZlLWFyZWEtc3RhcnQsICRzYWZlLWFyZWEtZW5kKTtcclxuICAgICAgICBAaW5jbHVkZSBtYXJnaW4taG9yaXpvbnRhbCgkc2FmZS1hcmVhLXN0YXJ0LWVudiwgJHNhZmUtYXJlYS1lbmQtZW52KTtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIHNhZmUtYXJlYS1wYWRkaW5nLXN0YXJ0KCRzdGFydCwgJGVuZCkge1xyXG4gICAgJHNhZmUtYXJlYS1zdGFydDogY2FsYyhjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtbGVmdCkgKyAjeyRzdGFydH0pO1xyXG4gICAgJHNhZmUtYXJlYS1zdGFydC1lbnY6IGNhbGMoZW52KHNhZmUtYXJlYS1pbnNldC1sZWZ0KSArICN7JHN0YXJ0fSk7XHJcblxyXG4gICAgQGluY2x1ZGUgcGFkZGluZy1ob3Jpem9udGFsKCRzdGFydCwgJGVuZCk7XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcclxuICAgICAgICBAaW5jbHVkZSBwYWRkaW5nLWhvcml6b250YWwoJHNhZmUtYXJlYS1zdGFydCwgJGVuZCk7XHJcbiAgICAgICAgQGluY2x1ZGUgcGFkZGluZy1ob3Jpem9udGFsKCRzYWZlLWFyZWEtc3RhcnQtZW52LCAkZW5kKTtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIHNhZmUtYXJlYS1wYWRkaW5nLWVuZCgkc3RhcnQsICRlbmQpIHtcclxuICAgICRzYWZlLWFyZWEtZW5kOiBjYWxjKGNvbnN0YW50KHNhZmUtYXJlYS1pbnNldC1yaWdodCkgKyAjeyRlbmR9KTtcclxuICAgICRzYWZlLWFyZWEtZW5kLWVudjogY2FsYyhlbnYoc2FmZS1hcmVhLWluc2V0LXJpZ2h0KSArICN7JGVuZH0pO1xyXG5cclxuICAgIEBpbmNsdWRlIHBhZGRpbmctaG9yaXpvbnRhbCgkc3RhcnQsICRlbmQpO1xyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XHJcbiAgICAgICAgQGluY2x1ZGUgcGFkZGluZy1ob3Jpem9udGFsKCRzdGFydCwgJHNhZmUtYXJlYS1lbmQpO1xyXG4gICAgICAgIEBpbmNsdWRlIHBhZGRpbmctaG9yaXpvbnRhbCgkc3RhcnQsICRzYWZlLWFyZWEtZW5kLWVudik7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBzYWZlLWFyZWEtcG9zaXRpb24oJHRvcDogbnVsbCwgJGVuZDogbnVsbCwgJGJvdHRvbTogbnVsbCwgJHN0YXJ0OiBudWxsKSB7XHJcbiAgICBAaW5jbHVkZSBwb3NpdGlvbi1ob3Jpem9udGFsKCRzdGFydCwgJGVuZCk7XHJcbiAgICBAaW5jbHVkZSBzYWZlLXBvc2l0aW9uLWhvcml6b250YWwoJHN0YXJ0LCAkZW5kKTtcclxuICAgIHRvcDogJHRvcDtcclxuICAgIGJvdHRvbTogJGJvdHRvbTtcclxufVxyXG5cclxuQG1peGluIGNvcmUtaGVhZGluZ3MoKSB7XHJcbiAgICBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgfVxyXG4gICAgaDIsIC5pdGVtLWhlYWRpbmcge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIH1cclxuICAgIGgzIHtcclxuICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICB9XHJcbiAgICBoNCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgaDUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxuICAgIGg2IHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBjb3JlLWFzLWl0ZW1zKCkge1xyXG4gICAgLml0ZW0tbWQuaXRlbS1ibG9jayA+IC5pdGVtLWlubmVyIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGxpc3QtbWQtYm9yZGVyLWNvbG9yO1xyXG4gICAgfVxyXG5cclxuICAgIC5pdGVtLWlvcy5pdGVtLWJsb2NrID4gLml0ZW0taW5uZXIge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206ICRoYWlybGluZXMtd2lkdGggc29saWQgJGxpc3QtaW9zLWJvcmRlci1jb2xvcjtcclxuICAgIH1cclxuXHJcbiAgICAmOmxhc3QtY2hpbGQgLml0ZW0gPiAuaXRlbS1pbm5lciB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGNvcmUtaXRlbXMoKSB7XHJcbiAgICAmLml0ZW0tbWQuaXRlbS1ibG9jayA+IC5pdGVtLWlubmVyIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGxpc3QtbWQtYm9yZGVyLWNvbG9yO1xyXG4gICAgfVxyXG5cclxuICAgICYuaXRlbS1pb3MuaXRlbS1ibG9jayA+IC5pdGVtLWlubmVyIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAkaGFpcmxpbmVzLXdpZHRoIHNvbGlkICRsaXN0LWlvcy1ib3JkZXItY29sb3I7XHJcbiAgICB9XHJcblxyXG4gICAgJi5pdGVtLWJsb2NrOmxhc3QtY2hpbGQgPiAuaXRlbS1pbm5lciB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGRhcmttb2RlKCkge1xyXG4gICAgJHJvb3Q6ICN7Jn07XHJcblxyXG4gICAgQGF0LXJvb3QgYm9keS5kYXJrIHtcclxuICAgICAgICAjeyRyb290fSB7XHJcbiAgICAgICAgICAgIEBjb250ZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGhvcml6b250YWxfc2Nyb2xsX2l0ZW0oJHdpZHRoLCAkbWluLXdpZHRoLCAkbWF4LXdpZHRoKSB7XHJcbiAgICBmbGV4OiAwIDAgJHdpZHRoO1xyXG4gICAgbWluLXdpZHRoOiAkbWluLXdpZHRoO1xyXG4gICAgbWF4LXdpZHRoOiAkbWF4LXdpZHRoO1xyXG4gICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxuICAgIGlvbi1jYXJkIHtcclxuICAgICAgICAtLXZlcnRpY2FsLW1hcmdpbjogMTBweDtcclxuICAgICAgICAtLWhvcml6b250YWwtbWFyZ2luOiAxMHB4O1xyXG5cclxuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gdmFyKC0tdmVydGljYWwtbWFyZ2luKSAtIHZhcigtLXZlcnRpY2FsLW1hcmdpbikpO1xyXG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gdmFyKC0tdmVydGljYWwtbWFyZ2luKSAtIHZhcigtLXZlcnRpY2FsLW1hcmdpbikpO1xyXG4gICAgICAgIG1hcmdpbjogdmFyKC0tdmVydGljYWwtbWFyZ2luKSB2YXIoLS1ob3Jpem9udGFsLW1hcmdpbik7XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzNjBweCkge1xyXG4gICAgICAgICAgICAtLWhvcml6b250YWwtbWFyZ2luOiA2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5pb24tdGV4dC13cmFwIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgLml0ZW0taGVhZGluZywgaDIsIHAge1xyXG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vLyBDb2xvciBtaXhpbnMuXHJcbkBmdW5jdGlvbiBnZXRfYnJpZ2h0bmVzcygkY29sb3IpIHtcclxuICAgIEByZXR1cm4gKHJlZCgkY29sb3IpICsgZ3JlZW4oJGNvbG9yKSArIGJsdWUoJGNvbG9yKSkgLyAzO1xyXG59XHJcblxyXG5AZnVuY3Rpb24gZ2V0X2NvbnRyYXN0X2NvbG9yKCRjb2xvcikge1xyXG4gICAgJGJyaWdodG5lc3M6IGdldF9icmlnaHRuZXNzKCRjb2xvcik7XHJcblxyXG4gICAgQHJldHVybiBpZigkYnJpZ2h0bmVzcyA8IDEyNywgd2hpdGUsIGJsYWNrKTtcclxufVxyXG4iLCIvKlxyXG4gKiBJbXBvcnRlZCBpb25pYyBtaXhpbnMgZm9yIFNDU1NcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBQbGFjZSBoZXJlIG91ciBjdXN0b20gbWl4aW5zLlxyXG4gKiBFeHRyYWN0ZWQgZnJvbSBpb25pYy5taXhpbnMuc2Nzc1xyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vaW9uaWMtdGVhbS9pb25pYy1mcmFtZXdvcmsvYmxvYi9tYXN0ZXIvY29yZS9zcmMvdGhlbWVzL2lvbmljLm1peGlucy5zY3NzXHJcbiAqL1xyXG5cclxuLy8gUmVzcG9uc2l2ZSBNaXhpbnNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gQ3JlYXRlcyBhIGZpeGVkIHdpZHRoIGZvciB0aGUgZ3JpZCBiYXNlZCBvbiB0aGUgc2NyZWVuIHNpemVcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkBtaXhpbiBtYWtlLWdyaWQtd2lkdGhzKCR3aWR0aHM6ICRncmlkLXdpZHRocywgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XHJcbiAgQGVhY2ggJGJyZWFrcG9pbnQsICR3aWR0aCBpbiAkd2lkdGhzIHtcclxuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGJyZWFrcG9pbnQsICRicmVha3BvaW50cykge1xyXG4gICAgICB3aWR0aDogJHdpZHRoO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4vLyBBZGRzIHBhZGRpbmcgdG8gdGhlIGVsZW1lbnQgYmFzZWQgb24gYnJlYWtwb2ludHNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkBtaXhpbiBtYWtlLWJyZWFrcG9pbnQtcGFkZGluZygkcGFkZGluZ3MpIHtcclxuICBAZWFjaCAkYnJlYWtwb2ludCBpbiBtYXAta2V5cygkcGFkZGluZ3MpIHtcclxuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGJyZWFrcG9pbnQpIHtcclxuICAgICAgJHBhZGRpbmc6IG1hcC1nZXQoJHBhZGRpbmdzLCAkYnJlYWtwb2ludCk7XHJcblxyXG4gICAgICBAaW5jbHVkZSBwYWRkaW5nKCRwYWRkaW5nKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIEdldHMgdGhlIGFjdGl2ZSBjb2xvcidzIGNzcyB2YXJpYWJsZSBmcm9tIGEgdmFyaWF0aW9uLiBBbHBoYSBpcyBvcHRpb25hbC5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gRXhhbXBsZSB1c2FnZTpcclxuLy8gY3VycmVudC1jb2xvcihiYXNlKSA9PiB2YXIoLS1pb24tY29sb3ItYmFzZSlcclxuLy8gY3VycmVudC1jb2xvcihjb250cmFzdCwgMC4xKSA9PiByZ2JhKHZhcigtLWlvbi1jb2xvci1jb250cmFzdC1yZ2IpLCAwLjEpXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkBmdW5jdGlvbiBjdXJyZW50LWNvbG9yKCR2YXJpYXRpb24sICRhbHBoYTogbnVsbCkge1xyXG4gIEBpZiAkYWxwaGEgPT0gbnVsbCB7XHJcbiAgICBAcmV0dXJuIHZhcigtLWlvbi1jb2xvci0jeyR2YXJpYXRpb259KTtcclxuICB9IEBlbHNlIHtcclxuICAgIEByZXR1cm4gcmdiYSh2YXIoLS1pb24tY29sb3ItI3skdmFyaWF0aW9ufS1yZ2IpLCAjeyRhbHBoYX0pO1xyXG4gIH1cclxufVxyXG5cclxuLy8gTWl4ZXMgYSBjb2xvciB3aXRoIGJsYWNrIHRvIGNyZWF0ZSBpdHMgc2hhZGUuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkBmdW5jdGlvbiBnZXQtY29sb3Itc2hhZGUoJGNvbG9yKSB7XHJcbiAgQHJldHVybiBtaXgoIzAwMCwgJGNvbG9yLCAxMiUpO1xyXG59XHJcblxyXG4vLyBNaXhlcyBhIGNvbG9yIHdpdGggd2hpdGUgdG8gY3JlYXRlIGl0cyB0aW50LlxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5AZnVuY3Rpb24gZ2V0LWNvbG9yLXRpbnQoJGNvbG9yKSB7XHJcbiAgQHJldHVybiBtaXgoI2ZmZiwgJGNvbG9yLCAxMCUpO1xyXG59XHJcblxyXG4vLyBDb252ZXJ0cyBhIGNvbG9yIHRvIGEgY29tbWEgc2VwYXJhdGVkIHJnYi5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuQGZ1bmN0aW9uIGNvbG9yLXRvLXJnYi1saXN0KCRjb2xvcikge1xyXG4gIEByZXR1cm4gI3tyZWQoJGNvbG9yKX0sI3tncmVlbigkY29sb3IpfSwje2JsdWUoJGNvbG9yKX07XHJcbn1cclxuXHJcblxyXG4gLy8gSW9uaWMgQ29sb3JzXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIEdlbmVyYXRlcyB0aGUgY29sb3IgY2xhc3NlcyBhbmQgdmFyaWFibGVzIGJhc2VkIG9uIHRoZVxyXG4vLyBjb2xvcnMgbWFwXHJcblxyXG5AbWl4aW4gZ2VuZXJhdGUtY29sb3IoJGNvbG9yLW5hbWUsICRjb2xvcnMpIHtcclxuICAgICRiYXNlOiBtYXAtZ2V0KCRjb2xvcnMsICRjb2xvci1uYW1lKTtcclxuXHJcbiAgICAkY29udHJhc3Q6IGdldF9jb250cmFzdF9jb2xvcigkYmFzZSk7XHJcbiAgICAkc2hhZGU6IGdldC1jb2xvci1zaGFkZSgkYmFzZSk7XHJcbiAgICAkdGludDogZ2V0LWNvbG9yLXRpbnQoJGJhc2UpO1xyXG5cclxuICAgIC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9OiB2YXIoLS0jeyRjb2xvci1uYW1lfSwgI3skYmFzZX0pO1xyXG4gICAgLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tYmFzZTogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9KTtcclxuICAgIC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LXJnYjogI3tjb2xvci10by1yZ2ItbGlzdCgkYmFzZSl9O1xyXG4gICAgLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tY29udHJhc3Q6ICN7JGNvbnRyYXN0fTtcclxuICAgIC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LWNvbnRyYXN0LXJnYjogI3tjb2xvci10by1yZ2ItbGlzdCgkY29udHJhc3QpfTtcclxuICAgIC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LXNoYWRlOiAjeyRzaGFkZX07XHJcbiAgICAtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS10aW50OiAjeyR0aW50fTtcclxuXHJcbiAgICAuaW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9IHtcclxuICAgICAgICAtLWlvbi1jb2xvcjogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9KTtcclxuICAgICAgICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tYmFzZSk7XHJcbiAgICAgICAgLS1pb24tY29sb3ItcmdiOiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tcmdiKTtcclxuICAgICAgICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LWNvbnRyYXN0KTtcclxuICAgICAgICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1jb250cmFzdC1yZ2IpO1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tc2hhZGUpO1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS10aW50KTtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGlucHV0LWNvdmVyKCkge1xyXG4gICAgQGluY2x1ZGUgcG9zaXRpb24oMCwgbnVsbCwgbnVsbCwgMCk7XHJcbiAgICBAaW5jbHVkZSBtYXJnaW4oMCk7XHJcblxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG5cclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG5cclxuICAgICY6Oi1tb3otZm9jdXMtaW5uZXIge1xyXG4gICAgICAgIGJvcmRlcjogMDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIHRleHQtaW5oZXJpdCgpIHtcclxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgZm9udC1zdHlsZTogaW5oZXJpdDtcclxuICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IGluaGVyaXQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XHJcbiAgICB0ZXh0LWluZGVudDogaW5oZXJpdDtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGluaGVyaXQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcclxuICAgIHRleHQtYWxpZ246IGluaGVyaXQ7XHJcbiAgICB3aGl0ZS1zcGFjZTogaW5oZXJpdDtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG59XHJcblxyXG5AbWl4aW4gYnV0dG9uLXN0YXRlKCkge1xyXG4gICAgQGluY2x1ZGUgcG9zaXRpb24oMCwgMCwgMCwgMCk7XHJcblxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG5cclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcblxyXG4gICAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLy8gRm9udCBzbW9vdGhpbmdcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbkBtaXhpbiBmb250LXNtb290aGluZygpIHtcclxuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxufVxyXG5cclxuLy8gR2V0IHRoZSBrZXkgZnJvbSBhIG1hcCBiYXNlZCBvbiB0aGUgaW5kZXhcclxuQGZ1bmN0aW9uIGluZGV4LXRvLWtleSgkbWFwLCAkaW5kZXgpIHtcclxuICAgICRrZXlzOiBtYXAta2V5cygkbWFwKTtcclxuXHJcbiAgICBAcmV0dXJuIG50aCgka2V5cywgJGluZGV4KTtcclxufVxyXG5cclxuXHJcbi8vIEJyZWFrcG9pbnQgTWl4aW5zXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLy8gQnJlYWtwb2ludCB2aWV3cG9ydCBzaXplcyBhbmQgbWVkaWEgcXVlcmllcy5cclxuLy9cclxuLy8gQnJlYWtwb2ludHMgYXJlIGRlZmluZWQgYXMgYSBtYXAgb2YgKG5hbWU6IG1pbmltdW0gd2lkdGgpLCBvcmRlciBmcm9tIHNtYWxsIHRvIGxhcmdlOlxyXG4vL1xyXG4vLyAgICAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpXHJcbi8vXHJcbi8vIFRoZSBtYXAgZGVmaW5lZCBpbiB0aGUgYCRzY3JlZW4tYnJlYWtwb2ludHNgIGdsb2JhbCB2YXJpYWJsZSBpcyB1c2VkIGFzIHRoZSBgJGJyZWFrcG9pbnRzYCBhcmd1bWVudCBieSBkZWZhdWx0LlxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4vLyBNaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBzbWFsbGVzdCAoZmlyc3QpIGJyZWFrcG9pbnQuXHJcbi8vXHJcbi8vICAgID4+IGJyZWFrcG9pbnQtbWluKHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxyXG4vLyAgICA1NzZweFxyXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cykge1xyXG4gICAgJG1pbjogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcclxuXHJcbiAgICBAcmV0dXJuIGlmKCRuYW1lICE9IGluZGV4LXRvLWtleSgkYnJlYWtwb2ludHMsIDEpLCAkbWluLCBudWxsKTtcclxufVxyXG5cclxuLy8gUmV0dXJucyBhIGJsYW5rIHN0cmluZyBpZiBzbWFsbGVzdCBicmVha3BvaW50LCBvdGhlcndpc2UgcmV0dXJucyB0aGUgbmFtZSB3aXRoIGEgZGFzaCBpbmZyb250LlxyXG4vLyBVc2VmdWwgZm9yIG1ha2luZyByZXNwb25zaXZlIHV0aWxpdGllcy5cclxuLy9cclxuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeCh4cywgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcclxuLy8gICAgXCJcIiAgKFJldHVybnMgYSBibGFuayBzdHJpbmcpXHJcbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXHJcbi8vICAgIFwiLXNtXCJcclxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtaW5maXgoJG5hbWUsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cykge1xyXG4gICAgQHJldHVybiBpZihicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKSA9PSBudWxsLCBcIlwiLCBcIi0jeyRuYW1lfVwiKTtcclxufVxyXG5cclxuLy8gTWVkaWEgb2YgYXQgbGVhc3QgdGhlIG1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LlxyXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIHdpZGVyLlxyXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XHJcbiAgICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcclxuICAgIEBpZiAkbWluIHtcclxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikge1xyXG4gICAgICAgICAgICBAY29udGVudDtcclxuICAgICAgICB9XHJcbiAgICB9IEBlbHNlIHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxuLy8gTmFtZSBvZiB0aGUgbmV4dCBicmVha3BvaW50LCBvciBudWxsIGZvciB0aGUgbGFzdCBicmVha3BvaW50LlxyXG4vL1xyXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20pXHJcbi8vICAgIG1kXHJcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcclxuLy8gICAgbWRcclxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAkYnJlYWtwb2ludC1uYW1lczogKHhzIHNtIG1kIGxnIHhsKSlcclxuLy8gICAgbWRcclxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludC1uYW1lczogbWFwLWtleXMoJGJyZWFrcG9pbnRzKSkge1xyXG4gICAgJG46IGluZGV4KCRicmVha3BvaW50LW5hbWVzLCAkbmFtZSk7XHJcbiAgICBAcmV0dXJuIGlmKCRuIDwgbGVuZ3RoKCRicmVha3BvaW50LW5hbWVzKSwgbnRoKCRicmVha3BvaW50LW5hbWVzLCAkbiArIDEpLCBudWxsKTtcclxufVxyXG5cclxuLy8gTWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgc21hbGxlc3QgKGZpcnN0KSBicmVha3BvaW50LlxyXG4vLyBUaGUgbWF4aW11bSB2YWx1ZSBpcyByZWR1Y2VkIGJ5IDAuMDJweCB0byB3b3JrIGFyb3VuZCB0aGUgbGltaXRhdGlvbnMgb2ZcclxuLy8gYG1pbi1gIGFuZCBgbWF4LWAgcHJlZml4ZXMgYW5kIHZpZXdwb3J0cyB3aXRoIGZyYWN0aW9uYWwgd2lkdGhzLlxyXG4vL1xyXG4vLyBTZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL21lZGlhcXVlcmllcy00LyNtcS1taW4tbWF4XHJcbi8vIFVzZXMgMC4wMnB4IHJhdGhlciB0aGFuIDAuMDFweCB0byB3b3JrIGFyb3VuZCBhIGN1cnJlbnQgcm91bmRpbmcgYnVnIGluIFNhZmFyaS5cdC8vIFVzZXMgMC4wMnB4IHJhdGhlciB0aGFuIDAuMDFweCB0byB3b3JrIGFyb3VuZCBhIGN1cnJlbnQgcm91bmRpbmcgYnVnIGluIFNhZmFyaS5cclxuLy8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzgyNjFcdC8vIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTc4MjYxXHJcbi8vXHJcbi8vICAgID4+IGJyZWFrcG9pbnQtbWF4KG1kLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxyXG4vLyAgICA3NjcuOThweFxyXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cykge1xyXG4gICAgJG1heDogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcclxuICAgIEByZXR1cm4gaWYoJG1heCBhbmQgJG1heCA+IDAsICRtYXggLSAuMDIsIG51bGwpO1xyXG59XHJcblxyXG4vLyBNZWRpYSBvZiBhdCBtb3N0IHRoZSBtYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgbGFyZ2VzdCBicmVha3BvaW50LlxyXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIG5hcnJvd2VyLlxyXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMpIHtcclxuICAgICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xyXG4gICAgQGlmICRtYXgge1xyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbWF4KSB7XHJcbiAgICAgICAgICAgIEBjb250ZW50O1xyXG4gICAgICAgIH1cclxuICAgIH0gQGVsc2Uge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLy8gVGV4dCBEaXJlY3Rpb24gLSBsdHIgLyBydGxcclxuLy9cclxuLy8gQ1NTIGRlZmF1bHRzIHRvIHVzZSB0aGUgbHRyIGNzcywgYW5kIGFkZHMgW2Rpcj1ydGxdIHNlbGVjdG9yc1xyXG4vLyB0byBvdmVycmlkZSBsdHIgZGVmYXVsdHMuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbkBtaXhpbiBtdWx0aS1kaXIoKSB7XHJcbiAgICBAY29udGVudDtcclxuXHJcbiAgICAvLyAkcm9vdDogI3smfTtcclxuICAgIC8vIEBhdC1yb290IFtkaXJdIHtcclxuICAgIC8vICAgI3skcm9vdH0ge1xyXG4gICAgLy8gICAgIEBjb250ZW50O1xyXG4gICAgLy8gICB9XHJcbiAgICAvLyB9XHJcbn1cclxuXHJcbkBtaXhpbiBydGwoKSB7XHJcbiAgICAkcm9vdDogI3smfTtcclxuXHJcbiAgICBAYXQtcm9vdCBbZGlyPXJ0bF0ge1xyXG4gICAgICAgICN7JHJvb3R9IHtcclxuICAgICAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gbHRyKCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbn1cclxuXHJcblxyXG4vLyBTVkcgQmFja2dyb3VuZCBJbWFnZSBNaXhpblxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN2Z1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkBtaXhpbiBzdmctYmFja2dyb3VuZC1pbWFnZSgkc3ZnLCAkZmxpcC1ydGw6IGZhbHNlKSB7XHJcbiAgICAkdXJsOiB1cmwtZW5jb2RlKCRzdmcpO1xyXG4gICAgJHZpZXdCb3g6IHN0ci1zcGxpdChzdHItZXh0cmFjdCgkc3ZnLCBcInZpZXdCb3g9J1wiLCBcIidcIiksIFwiIFwiKTtcclxuXHJcbiAgICBAaWYgJGZsaXAtcnRsICE9IHRydWUgb3IgJHZpZXdCb3ggPT0gbnVsbCB7XHJcbiAgICAgICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwjeyR1cmx9XCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0gQGVsc2Uge1xyXG4gICAgICAgICR0cmFuc2Zvcm06IFwidHJhbnNmb3JtPSd0cmFuc2xhdGUoI3tudGgoJHZpZXdCb3gsIDMpfSwgMCkgc2NhbGUoLTEsIDEpJ1wiO1xyXG4gICAgICAgICRmbGlwcGVkLXVybDogJHN2ZztcclxuICAgICAgICAkZmxpcHBlZC11cmw6IHN0ci1yZXBsYWNlKCRmbGlwcGVkLXVybCwgXCI8cGF0aFwiLCBcIjxwYXRoICN7JHRyYW5zZm9ybX1cIik7XHJcbiAgICAgICAgJGZsaXBwZWQtdXJsOiBzdHItcmVwbGFjZSgkZmxpcHBlZC11cmwsIFwiPGxpbmVcIiwgXCI8bGluZSAjeyR0cmFuc2Zvcm19XCIpO1xyXG4gICAgICAgICRmbGlwcGVkLXVybDogc3RyLXJlcGxhY2UoJGZsaXBwZWQtdXJsLCBcIjxwb2x5Z29uXCIsIFwiPHBvbHlnb24gI3skdHJhbnNmb3JtfVwiKTtcclxuICAgICAgICAkZmxpcHBlZC11cmw6IHVybC1lbmNvZGUoJGZsaXBwZWQtdXJsKTtcclxuXHJcbiAgICAgICAgQGluY2x1ZGUgbHRyICgpIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsI3skdXJsfVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgQGluY2x1ZGUgcnRsKCkge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwjeyRmbGlwcGVkLXVybH1cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBBZGQgcHJvcGVydHkgaG9yaXpvbnRhbFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuQG1peGluIHByb3BlcnR5LWhvcml6b250YWwoJHByb3AsICRzdGFydCwgJGVuZDogJHN0YXJ0KSB7XHJcbiAgICBAaWYgJHN0YXJ0ID09IDAgYW5kICRlbmQgPT0gMCB7XHJcbiAgICAgICAgI3skcHJvcH0tbGVmdDogJHN0YXJ0O1xyXG4gICAgICAgICN7JHByb3B9LXJpZ2h0OiAkZW5kO1xyXG5cclxuICAgIH0gQGVsc2Uge1xyXG4gICAgICAgICN7JHByb3B9LWxlZnQ6ICRzdGFydDtcclxuICAgICAgICAjeyRwcm9wfS1yaWdodDogJGVuZDtcclxuXHJcbiAgICAgICAgQGF0LXJvb3Qge1xyXG4gICAgICAgICAgICBAc3VwcG9ydHMgKChtYXJnaW4taW5saW5lLXN0YXJ0OiAwKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDApKSB7XHJcbiAgICAgICAgICAgICAgICAmIHtcclxuICAgICAgICAgICAgICAgICAgICBAaWYgJHN0YXJ0ICE9IG51bGwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAjeyRwcm9wfS1sZWZ0OiB1bnNldDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgQGlmICRlbmQgIT0gbnVsbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICN7JHByb3B9LXJpZ2h0OiB1bnNldDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtI3skcHJvcH0tc3RhcnQ6ICRzdGFydDtcclxuICAgICAgICAgICAgICAgICAgICAjeyRwcm9wfS1pbmxpbmUtc3RhcnQ6ICRzdGFydDtcclxuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LSN7JHByb3B9LWVuZDogJGVuZDtcclxuICAgICAgICAgICAgICAgICAgICAjeyRwcm9wfS1pbmxpbmUtZW5kOiAkZW5kO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBBZGQgcHJvcGVydHkgZm9yIGFsbCBkaXJlY3Rpb25zXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkcHJvcFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbVxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XHJcbi8vIEBwYXJhbSB7Ym9vbGVhbn0gJGNvbnRlbnQgaW5jbHVkZSBjb250ZW50IG9yIHVzZSBkZWZhdWx0XHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuQG1peGluIHByb3BlcnR5KCRwcm9wLCAkdG9wLCAkZW5kOiAkdG9wLCAkYm90dG9tOiAkdG9wLCAkc3RhcnQ6ICRlbmQpIHtcclxuICAgIEBpbmNsdWRlIHByb3BlcnR5LWhvcml6b250YWwoJHByb3AsICRzdGFydCwgJGVuZCk7XHJcbiAgICAjeyRwcm9wfS10b3A6ICR0b3A7XHJcbiAgICAjeyRwcm9wfS1ib3R0b206ICRib3R0b207XHJcbn1cclxuXHJcbi8vIEFkZCBwYWRkaW5nIGhvcml6b250YWxcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkBtaXhpbiBwYWRkaW5nLWhvcml6b250YWwoJHN0YXJ0LCAkZW5kOiAkc3RhcnQpIHtcclxuICAgIEBpbmNsdWRlIHByb3BlcnR5LWhvcml6b250YWwocGFkZGluZywgJHN0YXJ0LCAkZW5kKTtcclxufVxyXG5cclxuLy8gQWRkIHBhZGRpbmcgZm9yIGFsbCBkaXJlY3Rpb25zXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5AbWl4aW4gcGFkZGluZygkdG9wLCAkZW5kOiAkdG9wLCAkYm90dG9tOiAkdG9wLCAkc3RhcnQ6ICRlbmQpIHtcclxuICAgIEBpbmNsdWRlIHByb3BlcnR5KHBhZGRpbmcsICR0b3AsICRlbmQsICRib3R0b20sICRzdGFydCk7XHJcbn1cclxuXHJcbi8vIEFkZCBtYXJnaW4gaG9yaXpvbnRhbFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuQG1peGluIG1hcmdpbi1ob3Jpem9udGFsKCRzdGFydCwgJGVuZDogJHN0YXJ0KSB7XHJcbiAgICBAaW5jbHVkZSBwcm9wZXJ0eS1ob3Jpem9udGFsKG1hcmdpbiwgJHN0YXJ0LCAkZW5kKTtcclxufVxyXG5cclxuLy8gQWRkIG1hcmdpbiBmb3IgYWxsIGRpcmVjdGlvbnNcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3BcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b21cclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkBtaXhpbiBtYXJnaW4oJHRvcCwgJGVuZDogJHRvcCwgJGJvdHRvbTogJHRvcCwgJHN0YXJ0OiAkZW5kKSB7XHJcbiAgICBAaW5jbHVkZSBwcm9wZXJ0eShtYXJnaW4sICR0b3AsICRlbmQsICRib3R0b20sICRzdGFydCk7XHJcbn1cclxuXHJcbi8vIEFkZCBwb3NpdGlvbiBob3Jpem9udGFsXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnQgLSBhbW91bnQgdG8gcG9zaXRpb24gc3RhcnRcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmQgLSBhbW91bnQgdG8gbGVmdDogMDsgZW5kXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuQG1peGluIHBvc2l0aW9uLWhvcml6b250YWwoJHN0YXJ0OiBudWxsLCAkZW5kOiBudWxsKSB7XHJcbiAgICBAaWYgJHN0YXJ0ID09ICRlbmQge1xyXG4gICAgICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcclxuICAgICAgICAgICAgbGVmdDogJHN0YXJ0O1xyXG4gICAgICAgICAgICByaWdodDogJGVuZDtcclxuICAgICAgICB9XHJcbiAgICB9IEBlbHNlIHtcclxuICAgICAgICBAaW5jbHVkZSBsdHIoKSB7XHJcbiAgICAgICAgICAgIGxlZnQ6ICRzdGFydDtcclxuICAgICAgICAgICAgcmlnaHQ6ICRlbmQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBpbmNsdWRlIHJ0bCgpIHtcclxuICAgICAgICAgICAgbGVmdDogdW5zZXQ7XHJcbiAgICAgICAgICAgIHJpZ2h0OiB1bnNldDtcclxuXHJcbiAgICAgICAgICAgIGxlZnQ6ICRlbmQ7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAkc3RhcnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBBZGQgcG9zaXRpb24gZm9yIGFsbCBkaXJlY3Rpb25zXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5AbWl4aW4gcG9zaXRpb24oJHRvcDogbnVsbCwgJGVuZDogbnVsbCwgJGJvdHRvbTogbnVsbCwgJHN0YXJ0OiBudWxsKSB7XHJcbiAgICBAaW5jbHVkZSBwb3NpdGlvbi1ob3Jpem9udGFsKCRzdGFydCwgJGVuZCk7XHJcbiAgICB0b3A6ICR0b3A7XHJcbiAgICBib3R0b206ICRib3R0b207XHJcbn1cclxuXHJcbi8vIEFkZCBib3JkZXIgZm9yIGFsbCBkaXJlY3Rpb25zXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5AbWl4aW4gYm9yZGVyKCR0b3AsICRlbmQ6ICR0b3AsICRib3R0b206ICR0b3AsICRzdGFydDogJGVuZCkge1xyXG4gICAgQGluY2x1ZGUgcHJvcGVydHkoYm9yZGVyLCAkdG9wLCAkZW5kLCAkYm90dG9tLCAkc3RhcnQpO1xyXG59XHJcblxyXG4vLyBBZGQgYm9yZGVyIHJhZGl1cyBmb3IgYWxsIGRpcmVjdGlvbnNcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3Atc3RhcnRcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3AtZW5kXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tLWVuZFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbS1zdGFydFxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkBtaXhpbiBib3JkZXItcmFkaXVzKCR0b3Atc3RhcnQsICR0b3AtZW5kOiAkdG9wLXN0YXJ0LCAkYm90dG9tLWVuZDogJHRvcC1zdGFydCwgJGJvdHRvbS1zdGFydDogJHRvcC1lbmQpIHtcclxuICAgIEBpZiAkdG9wLXN0YXJ0ID09ICR0b3AtZW5kIGFuZCAkdG9wLXN0YXJ0ID09ICRib3R0b20tZW5kIGFuZCAkdG9wLXN0YXJ0ID09ICRib3R0b20tc3RhcnQge1xyXG4gICAgICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogJHRvcC1zdGFydDtcclxuICAgICAgICB9XHJcbiAgICB9IEBlbHNlIHtcclxuICAgICAgICBAaW5jbHVkZSBsdHIoKSB7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6ICR0b3Atc3RhcnQ7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAkdG9wLWVuZDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICRib3R0b20tZW5kO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkYm90dG9tLXN0YXJ0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQGluY2x1ZGUgcnRsKCkge1xyXG4gICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAkdG9wLWVuZDtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICR0b3Atc3RhcnQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkYm90dG9tLXN0YXJ0O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkYm90dG9tLWVuZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIEFkZCBkaXJlY3Rpb24gZm9yIGFsbCBkaXJlY3Rpb25zXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZGlyIC0gRGlyZWN0aW9uIG9uIExUUlxyXG5AbWl4aW4gZGlyZWN0aW9uKCRkaXIpIHtcclxuICAgICRvdGhlci1kaXI6IG51bGw7XHJcblxyXG4gICAgQGlmICRkaXIgPT0gbHRyIHtcclxuICAgICAgICAkb3RoZXItZGlyOiBydGw7XHJcbiAgICB9IEBlbHNlIHtcclxuICAgICAgICAkb3RoZXItZGlyOiBsdHI7XHJcbiAgICB9XHJcblxyXG4gICAgQGluY2x1ZGUgbHRyKCkge1xyXG4gICAgICAgIGRpcmVjdGlvbjogJGRpcjtcclxuICAgIH1cclxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcclxuICAgICAgICBkaXJlY3Rpb246ICRvdGhlci1kaXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIEFkZCBmbG9hdCBmb3IgYWxsIGRpcmVjdGlvbnNcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzaWRlXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZGVjb3JhdG9yIC0gIWltcG9ydGFudFxyXG5AbWl4aW4gZmxvYXQoJHNpZGUsICRkZWNvcmF0b3I6IG51bGwpIHtcclxuICAgIEBpZiAkc2lkZSA9PSBzdGFydCB7XHJcbiAgICAgICAgQGluY2x1ZGUgbHRyKCkge1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdCAkZGVjb3JhdG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgICBAaW5jbHVkZSBydGwoKSB7XHJcbiAgICAgICAgICAgIGZsb2F0OiByaWdodCAkZGVjb3JhdG9yO1xyXG4gICAgICAgIH1cclxuICAgIH0gQGVsc2UgaWYgJHNpZGUgPT0gZW5kIHtcclxuICAgICAgICBAaW5jbHVkZSBsdHIoKSB7XHJcbiAgICAgICAgICAgIGZsb2F0OiByaWdodCAkZGVjb3JhdG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgICBAaW5jbHVkZSBydGwoKSB7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0ICRkZWNvcmF0b3I7XHJcbiAgICAgICAgfVxyXG4gICAgfSBAZWxzZSB7XHJcbiAgICAgICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xyXG4gICAgICAgICAgICBmbG9hdDogJHNpZGUgJGRlY29yYXRvcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBiYWNrZ3JvdW5kLXBvc2l0aW9uKCRob3Jpem9udGFsLCAkaG9yaXpvbnRhbC1hbW91bnQ6IG51bGwsICR2ZXJ0aWNhbDogbnVsbCwgJHZlcnRpY2FsLWFtb3VudDogbnVsbCkge1xyXG4gICAgQGlmICRob3Jpem9udGFsID09IHN0YXJ0IG9yICRob3Jpem9udGFsID09IGVuZCB7XHJcbiAgICAgICAgJGhvcml6b250YWwtbHRyOiBudWxsO1xyXG4gICAgICAgICRob3Jpem9udGFsLXJ0bDogbnVsbDtcclxuICAgICAgICBAaWYgJGhvcml6b250YWwgPT0gc3RhcnQge1xyXG4gICAgICAgICAgICAkaG9yaXpvbnRhbC1sdHI6IGxlZnQ7XHJcbiAgICAgICAgICAgICRob3Jpem9udGFsLXJ0bDogcmlnaHQ7XHJcbiAgICAgICAgfSBAZWxzZSB7XHJcbiAgICAgICAgICAgICRob3Jpem9udGFsLWx0cjogcmlnaHQ7XHJcbiAgICAgICAgICAgICRob3Jpem9udGFsLXJ0bDogbGVmdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBpbmNsdWRlIGx0cigpIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogJGhvcml6b250YWwtbHRyICRob3Jpem9udGFsLWFtb3VudCAkdmVydGljYWwgJHZlcnRpY2FsLWFtb3VudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgQGluY2x1ZGUgcnRsKCkge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAkaG9yaXpvbnRhbC1ydGwgJGhvcml6b250YWwtYW1vdW50ICR2ZXJ0aWNhbCAkdmVydGljYWwtYW1vdW50O1xyXG4gICAgICAgIH1cclxuICAgIH0gQGVsc2Uge1xyXG4gICAgICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogJGhvcml6b250YWwgJGhvcml6b250YWwtYW1vdW50ICR2ZXJ0aWNhbCAkdmVydGljYWwtYW1vdW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIHRyYW5zZm9ybS1vcmlnaW4oJHgtYXhpcywgJHktYXhpczogbnVsbCkge1xyXG4gICAgQGlmICR4LWF4aXMgPT0gc3RhcnQge1xyXG4gICAgICAgIEBpbmNsdWRlIGx0cigpIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCAkeS1heGlzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBAaW5jbHVkZSBydGwoKSB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0ICR5LWF4aXM7XHJcbiAgICAgICAgfVxyXG4gICAgfSBAZWxzZSBpZiAkeC1heGlzID09IGVuZCB7XHJcbiAgICAgICAgQGluY2x1ZGUgbHRyKCkge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCAkeS1heGlzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBAaW5jbHVkZSBydGwoKSB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgJHktYXhpcztcclxuICAgICAgICB9XHJcbiAgICB9IEBlbHNlIGlmICR4LWF4aXMgPT0gbGVmdCBvciAkeC1heGlzID09IHJpZ2h0IHtcclxuICAgICAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46ICR4LWF4aXMgJHktYXhpcztcclxuICAgICAgICB9XHJcbiAgICB9IEBlbHNlIHtcclxuICAgICAgICBAaW5jbHVkZSBsdHIoKSB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46ICR4LWF4aXMgJHktYXhpcztcclxuICAgICAgICB9XHJcbiAgICAgICAgQGluY2x1ZGUgcnRsKCkge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjYWxjKDEwMCUgLSAjeyR4LWF4aXN9KSAkeS1heGlzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy8gQWRkIHRyYW5zZm9ybSBmb3IgYWxsIGRpcmVjdGlvbnNcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICR0cmFuc2Zvcm1zIC0gY29tbWEgc2VwYXJhdGVkIGxpc3Qgb2YgdHJhbnNmb3Jtc1xyXG5AbWl4aW4gdHJhbnNmb3JtKCR0cmFuc2Zvcm1zLi4uKSB7XHJcbiAgICAkZXh0cmE6IG51bGw7XHJcblxyXG4gICAgJHg6IG51bGw7XHJcbiAgICAkbHRyLXRyYW5zbGF0ZTogbnVsbDtcclxuICAgICRydGwtdHJhbnNsYXRlOiBudWxsO1xyXG5cclxuICAgIEBlYWNoICR0cmFuc2Zvcm0gaW4gJHRyYW5zZm9ybXMge1xyXG4gICAgICAgIEBpZiAoc3RyLWluZGV4KCR0cmFuc2Zvcm0sIHRyYW5zbGF0ZTNkKSkge1xyXG4gICAgICAgICAgICAkdHJhbnNmb3JtOiBzdHItcmVwbGFjZSgkdHJhbnNmb3JtLCAndHJhbnNsYXRlM2QoJyk7XHJcbiAgICAgICAgICAgICR0cmFuc2Zvcm06IHN0ci1yZXBsYWNlKCR0cmFuc2Zvcm0sICcpJyk7XHJcblxyXG4gICAgICAgICAgICAkY29vcmRpbmF0ZXM6IHN0ci1zcGxpdCgkdHJhbnNmb3JtLCAnLCcpO1xyXG5cclxuICAgICAgICAgICAgJHg6IG50aCgkY29vcmRpbmF0ZXMsIDEpO1xyXG4gICAgICAgICAgICAkeTogbnRoKCRjb29yZGluYXRlcywgMik7XHJcbiAgICAgICAgICAgICR6OiBudGgoJGNvb3JkaW5hdGVzLCAzKTtcclxuXHJcbiAgICAgICAgICAgICRsdHItdHJhbnNsYXRlOiB0cmFuc2xhdGUzZCgkeCwgJHksICR6KTtcclxuICAgICAgICAgICAgJHJ0bC10cmFuc2xhdGU6IHRyYW5zbGF0ZTNkKGNhbGMoLTEgKiAjeyR4fSksICR5LCAkeik7XHJcbiAgICAgICAgfSBAZWxzZSB7XHJcbiAgICAgICAgICAgIEBpZiAkZXh0cmEgPT0gbnVsbCB7XHJcbiAgICAgICAgICAgICAgICAkZXh0cmE6ICR0cmFuc2Zvcm07XHJcbiAgICAgICAgICAgIH0gQGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJGV4dHJhOiAkZXh0cmEgJHRyYW5zZm9ybTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAaWYgJHggPT0gJzAnIG9yICR4ID09IG51bGwge1xyXG4gICAgICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiAkbHRyLXRyYW5zbGF0ZSAkZXh0cmE7XHJcbiAgICAgICAgfVxyXG4gICAgfSBAZWxzZSB7XHJcbiAgICAgICAgQGluY2x1ZGUgbHRyKCkge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06ICRsdHItdHJhbnNsYXRlICRleHRyYTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBpbmNsdWRlIHJ0bCgpIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiAkcnRsLXRyYW5zbGF0ZSAkZXh0cmE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiAqIEFwcCBDdXN0b20gQXBwIHZhcmlhYmxlcyBTQ1NTXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogUGxhY2UgaGVyZSBhbGwgY3VzdG9tIGFwcCB2YXJpYWJsZXMuXHJcbiAqL1xyXG4iLCIvKlxyXG4gKiBBcHAgR2xvYmFsIHZhcmlhYmxlcyBTQ1NTXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogUGxhY2UgaGVyZSBhbGwgZ2xvYmFsIHZhcmlhYmxlcy5cclxuICovXHJcblxyXG4kYmxhY2s6ICAgICAgICAgICAjMjgyODI4ICFkZWZhdWx0OyAvLyBIZWFkaW5ncywgc3RhbmRhcmQgdGV4dC5cclxuJGdyYXktZGFya2VyOiAgICAgIzY4NjU2NiAhZGVmYXVsdDtcclxuJGdyYXktZGFyazogICAgICAgIzllOWU5ZSAhZGVmYXVsdDtcclxuJGdyYXk6ICAgICAgICAgICAgI2RkZGRkZCAhZGVmYXVsdDtcclxuJGdyYXktbGlnaHQ6ICAgICAgI2U5ZTllOSAhZGVmYXVsdDsgLy8gQmFja2dyb3VuZC5cclxuJGdyYXktbGlnaHRlcjogICAgI2Y1ZjVmNSAhZGVmYXVsdDtcclxuJHdoaXRlOiAgICAgICAgICAgI2ZmZmZmZiAhZGVmYXVsdDsgLy8gQmFja2dyb3VuZCwgcmV2ZXJzZWQgdGV4dC5cclxuXHJcbiRibHVlOiAgICAgICAgICAgICMwMDY0ZDIgIWRlZmF1bHQ7IC8vIExpbmssIGJhY2tncm91bmQuXHJcbiRibHVlLWxpZ2h0OiAgICAgIG1peCgkYmx1ZSwgd2hpdGUsIDIwJSkgIWRlZmF1bHQ7IC8vIEJhY2tncm91bmQuXHJcbiRibHVlLWRhcms6ICAgICAgIGRhcmtlbigkYmx1ZSwgMTAlKSAhZGVmYXVsdDtcclxuXHJcbiRncmVlbjogICAgICAgICAgICM1ZTgxMDAgIWRlZmF1bHQ7IC8vIEFjY2VudC5cclxuJGdyZWVuLWxpZ2h0OiAgICAgbWl4KCRncmVlbiwgd2hpdGUsIDIwJSkgIWRlZmF1bHQ7XHJcbiRncmVlbi1kYXJrOiAgICAgIGRhcmtlbigkZ3JlZW4sIDEwJSkgIWRlZmF1bHQ7XHJcblxyXG4kcmVkOiAgICAgICAgICAgICAjY2IzZDRkICFkZWZhdWx0O1xyXG4kcmVkLWxpZ2h0OiAgICAgICBtaXgoJHJlZCwgd2hpdGUsIDIwJSkgIWRlZmF1bHQ7XHJcbiRyZWQtZGFyazogICAgICAgIGRhcmtlbigkcmVkLCAxMCUpICFkZWZhdWx0O1xyXG5cclxuJHllbGxvdzogICAgICAgICAgI2ZiYWQxYSAhZGVmYXVsdDsgLy8gQWNjZW50IChuZXZlciB0ZXh0KS5cclxuJHllbGxvdy1saWdodDogICAgbWl4KCR5ZWxsb3csIHdoaXRlLCAyMCUpICFkZWZhdWx0O1xyXG4keWVsbG93LWRhcms6ICAgICBtaXgoJHllbGxvdywgYmxhY2ssIDQwJSkgIWRlZmF1bHQ7XHJcblxyXG4kYnJhbmQtY29sb3I6ICAgICNmOTgwMTIgIWRlZmF1bHQ7XHJcblxyXG4kdGV4dC1jb2xvcjogICAgICAgICAgICAgICAkYmxhY2sgIWRlZmF1bHQ7XHJcbiR0ZXh0LWNvbG9yLXJnYjogICAgICAgICAgIGNvbG9yLXRvLXJnYi1saXN0KCR0ZXh0LWNvbG9yKSAhZGVmYXVsdDtcclxuJHRleHQtY29sb3ItZGFyazogICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xyXG4kdGV4dC1jb2xvci1kYXJrLXJnYjogICAgICBjb2xvci10by1yZ2ItbGlzdCgkdGV4dC1jb2xvci1kYXJrKSAhZGVmYXVsdDtcclxuXHJcbiRiYWNrZ3JvdW5kLWNvbG9yOiAgICAgICAgICAkZ3JheS1saWdodCAhZGVmYXVsdDtcclxuJGJhY2tncm91bmQtY29sb3ItcmdiOiAgICAgIGNvbG9yLXRvLXJnYi1saXN0KCRiYWNrZ3JvdW5kLWNvbG9yKSAhZGVmYXVsdDtcclxuJGJhY2tncm91bmQtY29sb3ItZGFyazogICAgIG1peCgjZmZmZmZmLCAjMDAwMDAwLCAxMCUpICFkZWZhdWx0OyAvLyAjMWExYTFhXHJcbiRiYWNrZ3JvdW5kLWNvbG9yLWRhcmstcmdiOiBjb2xvci10by1yZ2ItbGlzdCgkYmFja2dyb3VuZC1jb2xvci1kYXJrKSAhZGVmYXVsdDtcclxuXHJcbiRpb24taXRlbS1iYWNrZ3JvdW5kOiAgICAgICR3aGl0ZSAhZGVmYXVsdDtcclxuJGlvbi1pdGVtLWJhY2tncm91bmQtcmdiOiAgY29sb3ItdG8tcmdiLWxpc3QoJGlvbi1pdGVtLWJhY2tncm91bmQpICFkZWZhdWx0O1xyXG4kaW9uLWl0ZW0tYmFja2dyb3VuZC1kYXJrOiBtaXgoI2ZmZmZmZiwgIzAwMDAwMCwgMjAlKSAhZGVmYXVsdDsgLy8gIzMzMzMzM1xyXG4kaW9uLWl0ZW0tYmFja2dyb3VuZC1kYXJrLXJnYjogY29sb3ItdG8tcmdiLWxpc3QoJGlvbi1pdGVtLWJhY2tncm91bmQtZGFyaykgIWRlZmF1bHQ7XHJcblxyXG4kcHJpbWFyeTogICAgJGJyYW5kLWNvbG9yICFkZWZhdWx0O1xyXG4kZGFuZ2VyOiAgICAgJHJlZCAhZGVmYXVsdDtcclxuJHdhcm5pbmc6ICAgICR5ZWxsb3cgIWRlZmF1bHQ7XHJcbiRzdWNjZXNzOiAgICAkZ3JlZW4gIWRlZmF1bHQ7XHJcbiRpbmZvOiAgICAgICAkYmx1ZSAhZGVmYXVsdDtcclxuJGxpZ2h0OiAgICAgICRncmF5LWxpZ2h0ZXIgIWRlZmF1bHQ7XHJcbiRtZWRpdW06ICAgICAkZ3JheS1saWdodCAhZGVmYXVsdDtcclxuJGRhcms6ICAgICAgICRibGFjayAhZGVmYXVsdDtcclxuXHJcbiRjb2xvcnM6ICAoXHJcbiAgICBwcmltYXJ5OiAkcHJpbWFyeSxcclxuICAgIHN1Y2Nlc3M6ICRzdWNjZXNzLFxyXG4gICAgd2FybmluZzogJHdhcm5pbmcsXHJcbiAgICBkYW5nZXI6ICAkZGFuZ2VyLFxyXG4gICAgaW5mbzogJGluZm8sXHJcbiAgICBsaWdodDogJGxpZ2h0LFxyXG4gICAgbWVkaXVtOiAkbWVkaXVtLFxyXG4gICAgZGFyazogJGRhcmtcclxuKSAhZGVmYXVsdDtcclxuXHJcbiRwcmltYXJ5LWRhcms6ICAgICRicmFuZC1jb2xvciAhZGVmYXVsdDtcclxuJGRhbmdlci1kYXJrOiAgICAgbWl4KCRyZWQsIHdoaXRlLCA0MCUpICFkZWZhdWx0O1xyXG4kd2FybmluZy1kYXJrOiAgICBtaXgoJHllbGxvdywgd2hpdGUsIDQwJSkgIWRlZmF1bHQ7XHJcbiRzdWNjZXNzLWRhcms6ICAgIG1peCgkZ3JlZW4sIHdoaXRlLCA0MCUpICFkZWZhdWx0O1xyXG4kaW5mby1kYXJrOiAgICAgICBtaXgoJGJsdWUsIHdoaXRlLCA0MCUpICFkZWZhdWx0O1xyXG4kbGlnaHQtZGFyazogICAgICAkZGFyayAhZGVmYXVsdDtcclxuJG1lZGl1bS1kYXJrOiAgICAgJGdyYXktbGlnaHQgIWRlZmF1bHQ7XHJcbiRkYXJrLWRhcms6ICAgICAgICRsaWdodCAhZGVmYXVsdDtcclxuXHJcbiRjb2xvcnMtZGFyazogIChcclxuICAgIHByaW1hcnk6ICRwcmltYXJ5LWRhcmssXHJcbiAgICBzdWNjZXNzOiAkc3VjY2Vzcy1kYXJrLFxyXG4gICAgd2FybmluZzogJHdhcm5pbmctZGFyayxcclxuICAgIGRhbmdlcjogJGRhbmdlci1kYXJrLFxyXG4gICAgaW5mbzogJGluZm8tZGFyayxcclxuICAgIGxpZ2h0OiAkbGlnaHQtZGFyayxcclxuICAgIG1lZGl1bTogJG1lZGl1bS1kYXJrLFxyXG4gICAgZGFyazogJGRhcmstZGFyayxcclxuKSAhZGVmYXVsdDtcclxuXHJcbi8qKlxyXG4gKiBMYXlvdXQgQnJlYWtwb2ludHNcclxuICpcclxuICogaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy9sYXlvdXQvZ3JpZCNkZWZhdWx0LWJyZWFrcG9pbnRzXHJcbiAqL1xyXG5cclxuLy8gVGhlIG1pbmltdW0gZGltZW5zaW9ucyBhdCB3aGljaCB5b3VyIGxheW91dCB3aWxsIGNoYW5nZSxcclxuLy8gYWRhcHRpbmcgdG8gZGlmZmVyZW50IHNjcmVlbiBzaXplcywgZm9yIHVzZSBpbiBtZWRpYSBxdWVyaWVzXHJcbiRzY3JlZW4tYnJlYWtwb2ludHM6IChcclxuICAgIHhzOiAwLFxyXG4gICAgc206IDU3NnB4LFxyXG4gICAgbWQ6IDc2OHB4LFxyXG4gICAgbGc6IDk5MnB4LFxyXG4gICAgdGFibGV0OiA5OTJweCxcclxuICAgIHhsOiAxMjAwcHhcclxuKSAhZGVmYXVsdDtcclxuXHJcbiRjb3JlLWNvdXJzZS1pbWFnZS1iYWNrZ3JvdW5kOiAjODFlY2VjLCAjNzRiOWZmLCAjYTI5YmZlLCAjZGZlNmU5LCAjMDBiODk0LCAjMDk4NGUzLCAjYjJiZWMzLCAjZmRjYjZlLCAjZmQ3OWE4LCAjNmM1Y2U3ICFkZWZhdWx0O1xyXG4kY29yZS1kZC1xdWVzdGlvbi1jb2xvcnM6ICNGRkZGRkYsICNCMEM0REUsICNEQ0RDREMsICNEOEJGRDgsICM4N0NFRkEsICNEQUE1MjAsICNGRkQ3MDAsICNGMEU2OEMgIWRlZmF1bHQ7XHJcbiRjb3JlLXRleHQtaGlnaHRsaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCRibHVlLCA0MCUpICFkZWZhdWx0O1xyXG5cclxuJGNvcmUtZml4ZWQtdXJsOiBmYWxzZSAhZGVmYXVsdDtcclxuJGNvcmUtZGFzaGJvYXJkLWxvZ286IGZhbHNlICFkZWZhdWx0O1xyXG4kY29yZS1hbHdheXMtc2hvdy1tYWluLW1lbnU6IGZhbHNlICFkZWZhdWx0O1xyXG4kY29yZS1mb3JtYXQtdGV4dC1uZXZlci1zaG9ydGVuOiBmYWxzZSAhZGVmYXVsdDtcclxuXHJcbiRjb3JlLXNob3ctY291cnNlaW1hZ2Utb24tY291cnNlOiBmYWxzZSAhZGVmYXVsdDtcclxuJGNvcmUtaGlkZS1wcm9ncmVzcy1vbi1jb3Vyc2U6IGZhbHNlICFkZWZhdWx0O1xyXG4kY29yZS1oaWRlLXByb2dyZXNzLW9uLXNlY3Rpb24tc2VsZWN0b3I6IGZhbHNlICFkZWZhdWx0O1xyXG5cclxuJGNvcmUtY291cnNlLWhpZGUtdGh1bWItb24tY2FyZHM6IGZhbHNlICFkZWZhdWx0O1xyXG4kY29yZS1jb3Vyc2UtdGh1bWItb24tY2FyZHMtYmFja2dyb3VuZDogbnVsbCAhZGVmYXVsdDtcclxuJGNvcmUtY291cnNlLWhpZGUtcHJvZ3Jlc3Mtb24tY2FyZHM6IGZhbHNlICFkZWZhdWx0O1xyXG5cclxuLy8gQ29uZmlndXJhdGlvbiBvcHRpb25zIGZvciBsb2dpbiBwYWdlLlxyXG4kY29yZS1sb2dpbi1idXR0b24tb3V0bGluZTogZmFsc2UgIWRlZmF1bHQ7XHJcbiRjb3JlLWxvZ2luLWJ1dHRvbi1vdXRsaW5lLWRhcms6ICRjb3JlLWxvZ2luLWJ1dHRvbi1vdXRsaW5lICFkZWZhdWx0O1xyXG4kY29yZS1sb2dpbi1sb2FkaW5nLWNvbG9yOiBmYWxzZSAhZGVmYXVsdDtcclxuJGNvcmUtbG9naW4tbG9hZGluZy1jb2xvci1kYXJrOiAkdGV4dC1jb2xvci1kYXJrICFkZWZhdWx0O1xyXG4kY29yZS1sb2dpbi1oaWRlLWZvcmdvdC1wYXNzd29yZDogZmFsc2UgIWRlZmF1bHQ7XHJcbiRjb3JlLWxvZ2luLWhpZGUtbmVlZC1oZWxwOiBmYWxzZSAhZGVmYXVsdDtcclxuXHJcbi8vIENvbmZpZ3VyYXRpb24gb3B0aW9ucyBmb3IgbW9yZSBwYWdlLlxyXG4kY29yZS1tb3JlLWhpZGUtc2l0ZWluZm86IGZhbHNlICFkZWZhdWx0O1xyXG4kY29yZS1tb3JlLWhpZGUtc2l0ZW5hbWU6IGZhbHNlICFkZWZhdWx0O1xyXG4kY29yZS1tb3JlLWhpZGUtc2l0ZXVybDogZmFsc2UgIWRlZmF1bHQ7XHJcbiIsIkBpbXBvcnQgXCJ+dGhlbWUvZ2xvYmFsc1wiO1xyXG5cclxuLml0ZW0taW5wdXQ6bGFzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uaXRlbSB7XHJcbiAgICAmLmNvcmUtbG9naW4tbmVlZC1oZWxwIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgfVxyXG4gICAgJi5jb3JlLWxvZ2luLXNpdGUtcXJjb2RlIHtcclxuICAgICAgICAuaXRlbS1pbm5lciB7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AaWYgKCRjb3JlLWxvZ2luLWhpZGUtbmVlZC1oZWxwKSB7XHJcbiAgICAuY29yZS1sb2dpbi1uZWVkLWhlbHAge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jb3JlLWxvZ2luLXNpdGUtY29ubmVjdCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxLjRyZW07XHJcbn1cclxuXHJcbi5pdGVtIGlvbi10aHVtYm5haWwge1xyXG4gICAgbWluLXdpZHRoOiA1MHB4O1xyXG4gICAgbWluLWhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjAlO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDRweCAjZWVlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiA1MCUgNTAlO1xyXG4gICAgfVxyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jb3JlLWxvZ2luLXNpdGUtbG9nbyxcclxuLmNvcmUtbG9naW4tc2l0ZS1saXN0LFxyXG4uY29yZS1sb2dpbi1zaXRlLWxpc3QtZm91bmQge1xyXG4gICAgdHJhbnNpdGlvbi1kZWxheTogMHM7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjdzIGVhc2UtaW4tb3V0O1xyXG4gICAgbWF4LWhlaWdodDogOTk5OXB4O1xyXG5cclxuICAgICYuaGlkZGVuIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4uY29yZS1sb2dpbi1zaXRlLWxpc3QtZm91bmQuZGltbWVkIHtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uY29yZS1sb2dpbi1zaXRlLWxpc3QtbG9hZGluZyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGlvbi1zcGlubmVyIHtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIH1cclxufVxyXG5cclxuLmNvcmUtbG9naW4tc2l0ZS1ub2xpc3QtbG9hZGluZyB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaXRlbS5jb3JlLWxvZ2luLXNpdGUtbGlzdC10aXRsZSB7XHJcbiAgICBpb24tbGFiZWwsIGlvbi1sYWJlbCBoMi5pdGVtLWhlYWRpbmcge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgaW9uLWNvbnRlbnQgPiAqIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1jb250ZW50IC5jb3JlLWxvZ2luLXNpdGUtbG9nbyB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjAlO1xyXG4gICAgICAgICYuaGlkZGVuIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jb3JlLWxvZ2luLWVudGVyZWQtc2l0ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5LWxpZ2h0ZXIpO1xyXG4gICAgaW9uLXRodW1ibmFpbCB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDRweCAjZGRkO1xyXG4gICAgfVxyXG59XHJcblxyXG4uY29yZS1sb2dpbi1kZWZhdWx0LWljb24ge1xyXG4gICAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/core/features/login/pages/site/site.ts":
/*!****************************************************!*\
  !*** ./src/core/features/login/pages/site/site.ts ***!
  \****************************************************/
/*! exports provided: CoreLoginSitePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreLoginSitePage", function() { return CoreLoginSitePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/app */ "./src/core/services/app.ts");
/* harmony import */ var _services_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/config */ "./src/core/services/config.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @features/login/services/login-helper */ "./src/core/features/login/services/login-helper.ts");
/* harmony import */ var _classes_site__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @classes/site */ "./src/core/classes/site.ts");
/* harmony import */ var _classes_errors_error__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @classes/errors/error */ "./src/core/classes/errors/error.ts");
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/core/constants */ "./src/core/constants.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _singletons_url__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @singletons/url */ "./src/core/singletons/url.ts");
/* harmony import */ var _services_utils_url__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @services/utils/url */ "./src/core/services/utils/url.ts");
/* harmony import */ var _features_login_components_site_help_site_help__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @features/login/components/site-help/site-help */ "./src/core/features/login/components/site-help/site-help.ts");
/* harmony import */ var _features_login_components_site_onboarding_site_onboarding__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @features/login/components/site-onboarding/site-onboarding */ "./src/core/features/login/components/site-onboarding/site-onboarding.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_urlschemes__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @services/urlschemes */ "./src/core/services/urlschemes.ts");
/* harmony import */ var _services_utils_text__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @services/utils/text */ "./src/core/services/utils/text.ts");
/* harmony import */ var _singletons_form__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @singletons/form */ "./src/core/singletons/form.ts");
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
 * Page that displays a "splash screen" while the app is being initialized.
 */
let CoreLoginSitePage = class CoreLoginSitePage {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.siteSelector = 'sitefinder';
        this.showKeyboard = false;
        this.filter = '';
        this.sites = [];
        this.hasSites = false;
        this.loadingSites = false;
        let url = '';
        this.siteSelector = _core_constants__WEBPACK_IMPORTED_MODULE_11__["CoreConstants"].CONFIG.multisitesdisplay;
        const siteFinderSettings = _core_constants__WEBPACK_IMPORTED_MODULE_11__["CoreConstants"].CONFIG.sitefindersettings || {};
        this.siteFinderSettings = Object.assign({ displaysitename: true, displayimage: true, displayalias: true, displaycity: true, displaycountry: true, displayurl: true }, siteFinderSettings);
        // Load fixed sites if they're set.
        if (_features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_8__["CoreLoginHelper"].hasSeveralFixedSites()) {
            url = this.initSiteSelector();
        }
        else if (_core_constants__WEBPACK_IMPORTED_MODULE_11__["CoreConstants"].CONFIG.enableonboarding && !_services_app__WEBPACK_IMPORTED_MODULE_3__["CoreApp"].isIOS()) {
            this.initOnboarding();
        }
        this.showScanQR = _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_8__["CoreLoginHelper"].displayQRInSiteScreen();
        this.siteForm = this.formBuilder.group({
            siteUrl: [url, this.moodleUrlValidator()],
        });
        this.searchFunction = _services_utils_utils__WEBPACK_IMPORTED_MODULE_6__["CoreUtils"].debounce((search) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            search = search.trim();
            if (search.length >= 3) {
                // Update the sites list.
                const sites = yield _services_sites__WEBPACK_IMPORTED_MODULE_5__["CoreSites"].findSites(search);
                // Add UI tweaks.
                this.sites = this.extendCoreLoginSiteInfo(sites);
                this.hasSites = !!this.sites.length;
            }
            else {
                // Not reseting the array to allow animation to be displayed.
                this.hasSites = false;
            }
            this.loadingSites = false;
        }), 1000);
    }
    /**
     * Initialize the component.
     */
    ngOnInit() {
        this.showKeyboard = !!_services_navigator__WEBPACK_IMPORTED_MODULE_17__["CoreNavigator"].getRouteBooleanParam('showKeyboard');
    }
    /**
     * Initialize the site selector.
     *
     * @return URL of the first site.
     */
    initSiteSelector() {
        this.fixedSites = this.extendCoreLoginSiteInfo(_features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_8__["CoreLoginHelper"].getFixedSites());
        this.siteSelector = 'list'; // In case it's not defined
        // Do not show images if none are set.
        if (!this.fixedSites.some((site) => !!site.imageurl)) {
            this.siteFinderSettings.displayimage = false;
        }
        this.filteredSites = this.fixedSites;
        return this.fixedSites[0].url;
    }
    /**
     * Initialize and show onboarding if needed.
     *
     * @return Promise resolved when done.
     */
    initOnboarding() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const onboardingDone = yield _services_config__WEBPACK_IMPORTED_MODULE_4__["CoreConfig"].get(_features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_8__["CoreLoginHelperProvider"].ONBOARDING_DONE, false);
            if (!onboardingDone) {
                // Check onboarding.
                this.showOnboarding();
            }
        });
    }
    /**
     * Extend info of Login Site Info to get UI tweaks.
     *
     * @param sites Sites list.
     * @return Sites list with extended info.
     */
    extendCoreLoginSiteInfo(sites) {
        return sites.map((site) => {
            site.noProtocolUrl = this.siteFinderSettings.displayurl && site.url ? _singletons_url__WEBPACK_IMPORTED_MODULE_13__["CoreUrl"].removeProtocol(site.url) : '';
            const name = this.siteFinderSettings.displaysitename ? site.name : '';
            const alias = this.siteFinderSettings.displayalias && site.alias ? site.alias : '';
            // Set title with parenthesis if both name and alias are present.
            site.title = name && alias ? name + ' (' + alias + ')' : name + alias;
            const country = this.siteFinderSettings.displaycountry && site.countrycode ?
                _services_utils_utils__WEBPACK_IMPORTED_MODULE_6__["CoreUtils"].getCountryName(site.countrycode) : '';
            const city = this.siteFinderSettings.displaycity && site.city ?
                site.city : '';
            // Separate location with hiphen if both country and city are present.
            site.location = city && country ? city + ' - ' + country : city + country;
            return site;
        });
    }
    /**
     * Validate Url.
     *
     * @return {ValidatorFn} Validation results.
     */
    moodleUrlValidator() {
        return (control) => {
            const value = control.value.trim();
            let valid = value.length >= 3 && _singletons_url__WEBPACK_IMPORTED_MODULE_13__["CoreUrl"].isValidMoodleUrl(value);
            if (!valid) {
                const demo = !!_services_sites__WEBPACK_IMPORTED_MODULE_5__["CoreSites"].getDemoSiteData(value);
                if (demo) {
                    valid = true;
                }
            }
            return valid ? null : { siteUrl: { value: control.value } };
        };
    }
    /**
     * Show a help modal.
     */
    showHelp() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_7__["CoreDomUtils"].openModal({
                component: _features_login_components_site_help_site_help__WEBPACK_IMPORTED_MODULE_15__["CoreLoginSiteHelpComponent"],
                cssClass: 'core-modal-fullscreen',
            });
        });
    }
    /**
     * Show an onboarding modal.
     */
    showOnboarding() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_7__["CoreDomUtils"].openModal({
                component: _features_login_components_site_onboarding_site_onboarding__WEBPACK_IMPORTED_MODULE_16__["CoreLoginSiteOnboardingComponent"],
                cssClass: 'core-modal-fullscreen',
            });
        });
    }
    /**
     * Try to connect to a site.
     *
     * @param e Event.
     * @param url The URL to connect to.
     * @param foundSite The site clicked, if any, from the found sites list.
     * @return Promise resolved when done.
     */
    connect(e, url, foundSite) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            e.preventDefault();
            e.stopPropagation();
            _services_app__WEBPACK_IMPORTED_MODULE_3__["CoreApp"].closeKeyboard();
            if (!url) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_7__["CoreDomUtils"].showErrorModal('core.login.siteurlrequired', true);
                return;
            }
            if (!_services_app__WEBPACK_IMPORTED_MODULE_3__["CoreApp"].isOnline()) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_7__["CoreDomUtils"].showErrorModal('core.networkerrormsg', true);
                return;
            }
            url = url.trim();
            if (url.match(/^(https?:\/\/)?campus\.example\.edu/)) {
                this.showLoginIssue(null, new _classes_errors_error__WEBPACK_IMPORTED_MODULE_10__["CoreError"](_singletons__WEBPACK_IMPORTED_MODULE_12__["Translate"].instant('core.login.errorexampleurl')));
                return;
            }
            const siteData = _services_sites__WEBPACK_IMPORTED_MODULE_5__["CoreSites"].getDemoSiteData(url);
            if (siteData) {
                // It's a demo site.
                yield this.loginDemoSite(siteData);
            }
            else {
                // Not a demo site.
                const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_7__["CoreDomUtils"].showModalLoading();
                let checkResult;
                try {
                    checkResult = yield _services_sites__WEBPACK_IMPORTED_MODULE_5__["CoreSites"].checkSite(url);
                }
                catch (error) {
                    // Attempt guessing the domain if the initial check failed
                    const domain = _singletons_url__WEBPACK_IMPORTED_MODULE_13__["CoreUrl"].guessMoodleDomain(url);
                    if (domain && domain != url) {
                        try {
                            checkResult = yield _services_sites__WEBPACK_IMPORTED_MODULE_5__["CoreSites"].checkSite(domain);
                        }
                        catch (secondError) {
                            // Try to use the first error.
                            modal.dismiss();
                            return this.showLoginIssue(url, error || secondError);
                        }
                    }
                    else {
                        modal.dismiss();
                        return this.showLoginIssue(url, error);
                    }
                }
                yield this.login(checkResult, foundSite);
                modal.dismiss();
            }
        });
    }
    /**
     * Authenticate in a demo site.
     *
     * @param siteData Site data.
     * @return Promise resolved when done.
     */
    loginDemoSite(siteData) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_7__["CoreDomUtils"].showModalLoading();
            try {
                const data = yield _services_sites__WEBPACK_IMPORTED_MODULE_5__["CoreSites"].getUserToken(siteData.url, siteData.username, siteData.password);
                yield _services_sites__WEBPACK_IMPORTED_MODULE_5__["CoreSites"].newSite(data.siteUrl, data.token, data.privateToken);
                _singletons_form__WEBPACK_IMPORTED_MODULE_20__["CoreForms"].triggerFormSubmittedEvent(this.formElement, true);
                yield _services_navigator__WEBPACK_IMPORTED_MODULE_17__["CoreNavigator"].navigateToSiteHome();
                return;
            }
            catch (error) {
                _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_8__["CoreLoginHelper"].treatUserTokenError(siteData.url, error, siteData.username, siteData.password);
                if (error.loggedout) {
                    _services_navigator__WEBPACK_IMPORTED_MODULE_17__["CoreNavigator"].navigate('/login/sites', { reset: true });
                }
            }
            finally {
                modal.dismiss();
            }
        });
    }
    /**
     * Process login to a site.
     *
     * @param response Response obtained from the site check request.
     * @param foundSite The site clicked, if any, from the found sites list.
     *
     * @return Promise resolved after logging in.
     */
    login(response, foundSite) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield _services_sites__WEBPACK_IMPORTED_MODULE_5__["CoreSites"].checkApplication(response.config);
                _singletons_form__WEBPACK_IMPORTED_MODULE_20__["CoreForms"].triggerFormSubmittedEvent(this.formElement, true);
                if (response.warning) {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_7__["CoreDomUtils"].showErrorModal(response.warning, true, 4000);
                }
                if (_features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_8__["CoreLoginHelper"].isSSOLoginNeeded(response.code)) {
                    // SSO. User needs to authenticate in a browser.
                    _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_8__["CoreLoginHelper"].confirmAndOpenBrowserForSSOLogin(response.siteUrl, response.code, response.service, (_a = response.config) === null || _a === void 0 ? void 0 : _a.launchurl);
                }
                else {
                    const pageParams = { siteUrl: response.siteUrl, siteConfig: response.config };
                    if (foundSite && !this.fixedSites) {
                        pageParams['siteName'] = foundSite.name;
                        pageParams['logoUrl'] = foundSite.imageurl;
                    }
                    _services_navigator__WEBPACK_IMPORTED_MODULE_17__["CoreNavigator"].navigate('/login/credentials', {
                        params: pageParams,
                    });
                }
            }
            catch (error) {
                // Ignore errors.
            }
        });
    }
    /**
     * Show an error that aims people to solve the issue.
     *
     * @param url The URL the user was trying to connect to.
     * @param error Error to display.
     */
    showLoginIssue(url, error) {
        let errorMessage = _services_utils_dom__WEBPACK_IMPORTED_MODULE_7__["CoreDomUtils"].getErrorMessage(error);
        if (errorMessage == _singletons__WEBPACK_IMPORTED_MODULE_12__["Translate"].instant('core.cannotconnecttrouble')) {
            const found = this.sites.find((site) => site.url == url);
            if (!found) {
                errorMessage += ' ' + _singletons__WEBPACK_IMPORTED_MODULE_12__["Translate"].instant('core.cannotconnectverify');
            }
        }
        let message = '<p>' + errorMessage + '</p>';
        if (url) {
            const fullUrl = _services_utils_url__WEBPACK_IMPORTED_MODULE_14__["CoreUrlUtils"].isAbsoluteURL(url) ? url : 'https://' + url;
            message += '<p padding><a href="' + fullUrl + '" core-link>' + url + '</a></p>';
        }
        const buttons = [
            {
                text: _singletons__WEBPACK_IMPORTED_MODULE_12__["Translate"].instant('core.needhelp'),
                handler: () => {
                    this.showHelp();
                },
            },
            {
                text: _singletons__WEBPACK_IMPORTED_MODULE_12__["Translate"].instant('core.tryagain'),
                role: 'cancel',
            },
        ];
        // @TODO: Remove CoreSite.MINIMUM_MOODLE_VERSION, not used on translations since 3.9.0.
        _services_utils_dom__WEBPACK_IMPORTED_MODULE_7__["CoreDomUtils"].showAlertWithOptions({
            header: _singletons__WEBPACK_IMPORTED_MODULE_12__["Translate"].instant('core.cannotconnect', { $a: _classes_site__WEBPACK_IMPORTED_MODULE_9__["CoreSite"].MINIMUM_MOODLE_VERSION }),
            message,
            buttons,
        });
    }
    /**
     * The filter has changed.
     *
     * @param event Received Event.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    filterChanged(event) {
        var _a;
        const newValue = (_a = event === null || event === void 0 ? void 0 : event.target.value) === null || _a === void 0 ? void 0 : _a.trim().toLowerCase();
        if (!newValue || !this.fixedSites) {
            this.filteredSites = this.fixedSites;
        }
        else {
            this.filteredSites = this.fixedSites.filter((site) => site.title.toLowerCase().indexOf(newValue) > -1 || site.noProtocolUrl.toLowerCase().indexOf(newValue) > -1 ||
                site.location.toLowerCase().indexOf(newValue) > -1);
        }
    }
    /**
     * Find a site on the backend.
     *
     * @param e Event.
     * @param search Text to search.
     */
    searchSite(e, search) {
        this.loadingSites = true;
        search = search.trim();
        if (this.siteForm.valid && search.length >= 3) {
            this.enteredSiteUrl = {
                url: search,
                name: 'connect',
                title: '',
                location: '',
                noProtocolUrl: _singletons_url__WEBPACK_IMPORTED_MODULE_13__["CoreUrl"].removeProtocol(search),
            };
        }
        else {
            this.enteredSiteUrl = undefined;
        }
        this.searchFunction(search.trim());
    }
    /**
     * Show instructions and scan QR code.
     *
     * @return Promise resolved when done.
     */
    showInstructionsAndScanQR() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield _features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_8__["CoreLoginHelper"].showScanQRInstructions();
                yield this.scanQR();
            }
            catch (_a) {
                // Ignore errors.
            }
        });
    }
    /**
     * Scan a QR code and put its text in the URL input.
     *
     * @return Promise resolved when done.
     */
    scanQR() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Scan for a QR code.
            const text = yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_6__["CoreUtils"].scanQR();
            if (!text) {
                return;
            }
            if (_services_urlschemes__WEBPACK_IMPORTED_MODULE_18__["CoreCustomURLSchemes"].isCustomURL(text)) {
                try {
                    yield _services_urlschemes__WEBPACK_IMPORTED_MODULE_18__["CoreCustomURLSchemes"].handleCustomURL(text);
                }
                catch (error) {
                    if (error && error.data && error.data.isAuthenticationURL && error.data.siteUrl) {
                        // An error ocurred, but it's an authentication URL and we have the site URL.
                        this.treatErrorInAuthenticationCustomURL(text, error);
                    }
                    else {
                        _services_urlschemes__WEBPACK_IMPORTED_MODULE_18__["CoreCustomURLSchemes"].treatHandleCustomURLError(error);
                    }
                }
                return;
            }
            // Not a custom URL scheme, check if it's a URL scheme to another app.
            const scheme = _services_utils_url__WEBPACK_IMPORTED_MODULE_14__["CoreUrlUtils"].getUrlProtocol(text);
            if (scheme && scheme != 'http' && scheme != 'https') {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_7__["CoreDomUtils"].showErrorModal(_singletons__WEBPACK_IMPORTED_MODULE_12__["Translate"].instant('core.errorurlschemeinvalidscheme', { $a: text }));
            }
            else if (_features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_8__["CoreLoginHelper"].isSiteUrlAllowed(text)) {
                // Put the text in the field (if present).
                this.siteForm.controls.siteUrl.setValue(text);
                this.connect(new Event('click'), text);
            }
            else {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_7__["CoreDomUtils"].showErrorModal('core.errorurlschemeinvalidsite', true);
            }
        });
    }
    /**
     * Treat an error while handling a custom URL meant to perform an authentication.
     * If the site doesn't use SSO, the user will be sent to the credentials screen.
     *
     * @param customURL Custom URL handled.
     * @param error Error data.
     * @return Promise resolved when done.
     */
    treatErrorInAuthenticationCustomURL(customURL, error) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const siteUrl = ((_a = error.data) === null || _a === void 0 ? void 0 : _a.siteUrl) || '';
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_7__["CoreDomUtils"].showModalLoading();
            // Set the site URL in the input.
            this.siteForm.controls.siteUrl.setValue(siteUrl);
            try {
                // Check if site uses SSO.
                const response = yield _services_sites__WEBPACK_IMPORTED_MODULE_5__["CoreSites"].checkSite(siteUrl);
                yield _services_sites__WEBPACK_IMPORTED_MODULE_5__["CoreSites"].checkApplication(response.config);
                if (!_features_login_services_login_helper__WEBPACK_IMPORTED_MODULE_8__["CoreLoginHelper"].isSSOLoginNeeded(response.code)) {
                    // No SSO, go to credentials page.
                    yield _services_navigator__WEBPACK_IMPORTED_MODULE_17__["CoreNavigator"].navigate('/login/credentials', {
                        params: {
                            siteUrl: response.siteUrl,
                            siteConfig: response.config,
                        },
                    });
                }
            }
            catch (error) {
                // Ignore errors.
            }
            finally {
                modal.dismiss();
            }
            // Now display the error.
            error.error = _services_utils_text__WEBPACK_IMPORTED_MODULE_19__["CoreTextUtils"].addTextToError(error.error, '<br><br>' + _singletons__WEBPACK_IMPORTED_MODULE_12__["Translate"].instant('core.login.youcanstillconnectwithcredentials'));
            _services_urlschemes__WEBPACK_IMPORTED_MODULE_18__["CoreCustomURLSchemes"].treatHandleCustomURLError(error);
        });
    }
    /**
     * Open settings page.
     */
    openSettings() {
        _services_navigator__WEBPACK_IMPORTED_MODULE_17__["CoreNavigator"].navigate('/settings');
    }
};
CoreLoginSitePage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
CoreLoginSitePage.propDecorators = {
    formElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['siteFormEl',] }]
};
CoreLoginSitePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-core-login-site',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./site.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/login/pages/site/site.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./site.scss */ "./src/core/features/login/pages/site/site.scss")).default, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ../../login.scss */ "./src/core/features/login/login.scss")).default]
    })
], CoreLoginSitePage);



/***/ }),

/***/ "./src/core/features/settings/pages/site/site.module.ts":
/*!**************************************************************!*\
  !*** ./src/core/features/settings/pages/site/site.module.ts ***!
  \**************************************************************/
/*! exports provided: CoreSitePreferencesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSitePreferencesPageModule", function() { return CoreSitePreferencesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _site__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./site */ "./src/core/features/settings/pages/site/site.ts");
/* harmony import */ var _app_app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _site_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./site-routing */ "./src/core/features/settings/pages/site/site-routing.ts");
/* harmony import */ var _services_screen__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/screen */ "./src/core/services/screen.ts");
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








function buildRoutes(injector) {
    const routes = Object(_app_app_routing_module__WEBPACK_IMPORTED_MODULE_5__["resolveModuleRoutes"])(injector, _site_routing__WEBPACK_IMPORTED_MODULE_6__["SITE_PREFERENCES_ROUTES"]);
    const mobileRoutes = [
        {
            path: '',
            component: _site__WEBPACK_IMPORTED_MODULE_4__["CoreSitePreferencesPage"],
        },
        ...routes.siblings,
    ];
    const tabletRoutes = [
        {
            path: '',
            component: _site__WEBPACK_IMPORTED_MODULE_4__["CoreSitePreferencesPage"],
            children: routes.siblings,
        },
    ];
    return [
        ...Object(_app_app_routing_module__WEBPACK_IMPORTED_MODULE_5__["conditionalRoutes"])(mobileRoutes, () => _services_screen__WEBPACK_IMPORTED_MODULE_7__["CoreScreen"].isMobile),
        ...Object(_app_app_routing_module__WEBPACK_IMPORTED_MODULE_5__["conditionalRoutes"])(tabletRoutes, () => _services_screen__WEBPACK_IMPORTED_MODULE_7__["CoreScreen"].isTablet),
    ];
}
let CoreSitePreferencesPageModule = class CoreSitePreferencesPageModule {
};
CoreSitePreferencesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        providers: [
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ROUTES"], multi: true, useFactory: buildRoutes, deps: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]] },
        ],
        declarations: [
            _site__WEBPACK_IMPORTED_MODULE_4__["CoreSitePreferencesPage"],
        ],
        imports: [
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CoreSitePreferencesPageModule);



/***/ }),

/***/ "./src/core/features/settings/pages/site/site.ts":
/*!*******************************************************!*\
  !*** ./src/core/features/settings/pages/site/site.ts ***!
  \*******************************************************/
/*! exports provided: CoreSitePreferencesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSitePreferencesPage", function() { return CoreSitePreferencesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_settings_delegate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/settings-delegate */ "./src/core/features/settings/services/settings-delegate.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_settings_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/settings-helper */ "./src/core/features/settings/services/settings-helper.ts");
/* harmony import */ var _services_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/app */ "./src/core/services/app.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _classes_page_items_list_manager__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @classes/page-items-list-manager */ "./src/core/classes/page-items-list-manager.ts");
/* harmony import */ var _components_split_view_split_view__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @components/split-view/split-view */ "./src/core/components/split-view/split-view.ts");
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
var CoreSitePreferencesPage_1;












/**
 * Page that displays the list of site settings pages.
 */
let CoreSitePreferencesPage = CoreSitePreferencesPage_1 = class CoreSitePreferencesPage {
    constructor() {
        this.spaceUsage = {
            cacheEntries: 0,
            spaceUsage: 0,
        };
        this.isDestroyed = false;
        this.isIOS = _services_app__WEBPACK_IMPORTED_MODULE_7__["CoreApp"].isIOS();
        this.siteId = _services_sites__WEBPACK_IMPORTED_MODULE_4__["CoreSites"].getCurrentSiteId();
        this.handlers = new CoreSettingsSitePreferencesManager(CoreSitePreferencesPage_1);
        this.sitesObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].on(_singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].SITE_UPDATED, (data) => {
            if (data.siteId == this.siteId) {
                this.refreshData();
            }
        });
    }
    /**
     * View loaded.
     */
    ngAfterViewInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const pageToOpen = _services_navigator__WEBPACK_IMPORTED_MODULE_9__["CoreNavigator"].getRouteParam('page');
            try {
                yield this.fetchData();
            }
            finally {
                const handler = pageToOpen ? this.handlers.items.find(handler => handler.page == pageToOpen) : undefined;
                if (handler) {
                    this.handlers.select(handler);
                    this.handlers.watchSplitViewOutlet(this.splitView);
                }
                else {
                    this.handlers.start(this.splitView);
                }
            }
        });
    }
    /**
     * Fetch Data.
     */
    fetchData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.handlers.setItems(_services_settings_delegate__WEBPACK_IMPORTED_MODULE_2__["CoreSettingsDelegate"].getHandlers());
            const currentSite = _services_sites__WEBPACK_IMPORTED_MODULE_4__["CoreSites"].getCurrentSite();
            this.siteInfo = currentSite.getInfo();
            this.siteName = currentSite.getSiteName();
            this.siteUrl = currentSite.getURL();
            this.spaceUsage = yield _services_settings_helper__WEBPACK_IMPORTED_MODULE_6__["CoreSettingsHelper"].getSiteSpaceUsage(this.siteId);
        });
    }
    /**
     * Syncrhonizes the site.
     */
    synchronize() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                // Using syncOnlyOnWifi false to force manual sync.
                yield _services_settings_helper__WEBPACK_IMPORTED_MODULE_6__["CoreSettingsHelper"].synchronizeSite(false, this.siteId);
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
     * @return True if site is beeing synchronized, false otherwise.
     */
    isSynchronizing() {
        return !!_services_settings_helper__WEBPACK_IMPORTED_MODULE_6__["CoreSettingsHelper"].getSiteSyncPromise(this.siteId);
    }
    /**
     * Refresh the data.
     *
     * @param refresher Refresher.
     */
    refreshData(refresher) {
        this.fetchData().finally(() => {
            refresher === null || refresher === void 0 ? void 0 : refresher.complete();
        });
    }
    /**
     * Deletes files of a site and the tables that can be cleared.
     *
     * @param siteData Site object with space usage.
     */
    deleteSiteStorage() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.spaceUsage = yield _services_settings_helper__WEBPACK_IMPORTED_MODULE_6__["CoreSettingsHelper"].deleteSiteStorage(this.siteName || '', this.siteId);
            }
            catch (_a) {
                // Ignore cancelled confirmation modal.
            }
        });
    }
    /**
     * Show information about space usage actions.
     */
    showSpaceInfo() {
        _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showAlert(_singletons__WEBPACK_IMPORTED_MODULE_8__["Translate"].instant('core.help'), _singletons__WEBPACK_IMPORTED_MODULE_8__["Translate"].instant('core.settings.spaceusagehelp'));
    }
    /**
     * Show information about sync actions.
     */
    showSyncInfo() {
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
CoreSitePreferencesPage.ctorParameters = () => [];
CoreSitePreferencesPage.propDecorators = {
    splitView: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_components_split_view_split_view__WEBPACK_IMPORTED_MODULE_11__["CoreSplitViewComponent"],] }]
};
CoreSitePreferencesPage = CoreSitePreferencesPage_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-core-site-preferences',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./site.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/settings/pages/site/site.html")).default,
    })
], CoreSitePreferencesPage);

/**
 * Helper class to manage sections.
 */
class CoreSettingsSitePreferencesManager extends _classes_page_items_list_manager__WEBPACK_IMPORTED_MODULE_10__["CorePageItemsListManager"] {
    /**
     * @inheritdoc
     */
    getItemPath(handler) {
        return handler.page;
    }
    /**
     * @inheritdoc
     */
    getItemQueryParams(handler) {
        return handler.params || {};
    }
}


/***/ })

}]);
//# sourceMappingURL=pages-site-site-module.js.map