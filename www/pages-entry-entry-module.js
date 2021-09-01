(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-entry-entry-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/glossary/pages/entry/entry.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/glossary/pages/entry/entry.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <h1 *ngIf=\"entry\">\r\n            <core-format-text [text]=\"entry.concept\" contextLevel=\"module\" [contextInstanceId]=\"componentId\" [courseId]=\"courseId\">\r\n            </core-format-text>\r\n        </h1>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <ion-refresher slot=\"fixed\" [disabled]=\"!loaded\" (ionRefresh)=\"doRefresh($event.target)\">\r\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\r\n    </ion-refresher>\r\n\r\n    <core-loading [hideUntil]=\"loaded\">\r\n        <ng-container *ngIf=\"entry && loaded\">\r\n            <ion-item class=\"ion-text-wrap\" *ngIf=\"showAuthor\">\r\n                <core-user-avatar [user]=\"entry\" slot=\"start\"></core-user-avatar>\r\n                <ion-label>\r\n                    <h2>\r\n                        <core-format-text [text]=\"entry.concept\" contextLevel=\"module\" [contextInstanceId]=\"componentId\"\r\n                            [courseId]=\"courseId\">\r\n                        </core-format-text>\r\n                    </h2>\r\n                    <p>{{ entry.userfullname }}</p>\r\n                </ion-label>\r\n                <ion-note slot=\"end\" *ngIf=\"showDate\">{{ entry.timemodified | coreDateDayOrTime }}</ion-note>\r\n            </ion-item>\r\n            <ion-item class=\"ion-text-wrap\" *ngIf=\"!showAuthor\">\r\n                <ion-label>\r\n                    <p class=\"item-heading\">\r\n                        <core-format-text [text]=\"entry.concept\" contextLevel=\"module\" [contextInstanceId]=\"componentId\">\r\n                        </core-format-text>\r\n                    </p>\r\n                </ion-label>\r\n                <ion-note slot=\"end\" *ngIf=\"showDate\">{{ entry.timemodified | coreDateDayOrTime }}</ion-note>\r\n            </ion-item>\r\n            <ion-item class=\"ion-text-wrap\">\r\n                <ion-label>\r\n                    <core-format-text [component]=\"component\" [componentId]=\"componentId\" [text]=\"entry.definition\"\r\n                        contextLevel=\"module\" [contextInstanceId]=\"componentId\" [courseId]=\"courseId\">\r\n                    </core-format-text>\r\n                </ion-label>\r\n            </ion-item>\r\n            <div *ngIf=\"entry.attachment\" lines=\"none\">\r\n                <core-file *ngFor=\"let file of entry.attachments\" [file]=\"file\" [component]=\"component\"\r\n                    [componentId]=\"componentId\">\r\n                </core-file>\r\n            </div>\r\n            <ion-item class=\"ion-text-wrap\" *ngIf=\"tagsEnabled && entry && entry.tags && entry.tags.length > 0\">\r\n                <ion-label>\r\n                    <div slot=\"start\">{{ 'core.tag.tags' | translate }}:</div>\r\n                    <core-tag-list [tags]=\"entry.tags\"></core-tag-list>\r\n                </ion-label>\r\n            </ion-item>\r\n            <ion-item class=\"ion-text-wrap\" *ngIf=\"!entry.approved\">\r\n                <ion-label><p><em>{{ 'addon.mod_glossary.entrypendingapproval' | translate }}</em></p></ion-label>\r\n            </ion-item>\r\n            <core-comments *ngIf=\"glossary && glossary.allowcomments && entry && entry.id > 0 && commentsEnabled\"\r\n                contextLevel=\"module\" [instanceId]=\"glossary.coursemodule\" component=\"mod_glossary\"\r\n                [itemId]=\"entry.id\" area=\"glossary_entry\" [courseId]=\"glossary.course\" [showItem]=\"true\">\r\n            </core-comments>\r\n            <core-rating-rate *ngIf=\"glossary && ratingInfo\" [ratingInfo]=\"ratingInfo\" contextLevel=\"module\"\r\n                [instanceId]=\"glossary.coursemodule\" [itemId]=\"entry.id\" [itemSetId]=\"0\" [courseId]=\"glossary.course\"\r\n                [aggregateMethod]=\"glossary.assessed\" [scaleId]=\"glossary.scale\" [userId]=\"entry.userid\"\r\n                (onUpdate)=\"ratingUpdated()\">\r\n            </core-rating-rate>\r\n            <core-rating-aggregate *ngIf=\"glossary && ratingInfo\" [ratingInfo]=\"ratingInfo\" contextLevel=\"module\"\r\n                [instanceId]=\"glossary.coursemodule\" [itemId]=\"entry.id\" [courseId]=\"glossary.course\"\r\n                [aggregateMethod]=\"glossary.assessed\" [scaleId]=\"glossary.scale\">\r\n            </core-rating-aggregate>\r\n        </ng-container>\r\n\r\n        <ion-card *ngIf=\"!entry\" class=\"core-warning-card\">\r\n            <ion-item>\r\n                <ion-label>{{ 'addon.mod_glossary.errorloadingentry' | translate }}</ion-label>\r\n            </ion-item>\r\n        </ion-card>\r\n    </core-loading>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/addons/mod/glossary/pages/entry/entry.module.ts":
/*!*************************************************************!*\
  !*** ./src/addons/mod/glossary/pages/entry/entry.module.ts ***!
  \*************************************************************/
/*! exports provided: AddonModGlossaryEntryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModGlossaryEntryPageModule", function() { return AddonModGlossaryEntryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _entry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./entry */ "./src/addons/mod/glossary/pages/entry/entry.ts");
/* harmony import */ var _features_comments_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @features/comments/components/components.module */ "./src/core/features/comments/components/components.module.ts");
/* harmony import */ var _features_rating_components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @features/rating/components/components.module */ "./src/core/features/rating/components/components.module.ts");
/* harmony import */ var _features_tag_components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @features/tag/components/components.module */ "./src/core/features/tag/components/components.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
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








const routes = [{
        path: '',
        component: _entry__WEBPACK_IMPORTED_MODULE_3__["AddonModGlossaryEntryPage"],
    }];
let AddonModGlossaryEntryPageModule = class AddonModGlossaryEntryPageModule {
};
AddonModGlossaryEntryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _entry__WEBPACK_IMPORTED_MODULE_3__["AddonModGlossaryEntryPage"],
        ],
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_2__["CoreSharedModule"],
            _features_comments_components_components_module__WEBPACK_IMPORTED_MODULE_4__["CoreCommentsComponentsModule"],
            _features_rating_components_components_module__WEBPACK_IMPORTED_MODULE_5__["CoreRatingComponentsModule"],
            _features_tag_components_components_module__WEBPACK_IMPORTED_MODULE_6__["CoreTagComponentsModule"],
        ],
    })
], AddonModGlossaryEntryPageModule);



/***/ }),

/***/ "./src/addons/mod/glossary/pages/entry/entry.ts":
/*!******************************************************!*\
  !*** ./src/addons/mod/glossary/pages/entry/entry.ts ***!
  \******************************************************/
/*! exports provided: AddonModGlossaryEntryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModGlossaryEntryPage", function() { return AddonModGlossaryEntryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _features_comments_components_comments_comments__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @features/comments/components/comments/comments */ "./src/core/features/comments/components/comments/comments.ts");
/* harmony import */ var _features_comments_services_comments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @features/comments/services/comments */ "./src/core/features/comments/services/comments.ts");
/* harmony import */ var _features_tag_services_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @features/tag/services/tag */ "./src/core/features/tag/services/tag.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _services_glossary__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/glossary */ "./src/addons/mod/glossary/services/glossary.ts");
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
 * Page that displays a glossary entry.
 */
let AddonModGlossaryEntryPage = class AddonModGlossaryEntryPage {
    constructor() {
        this.component = _services_glossary__WEBPACK_IMPORTED_MODULE_8__["AddonModGlossaryProvider"].COMPONENT;
        this.loaded = false;
        this.showAuthor = false;
        this.showDate = false;
        this.tagsEnabled = false;
        this.commentsEnabled = false;
    }
    /**
     * @inheritdoc
     */
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].getRouteNumberParam('courseId');
            this.entryId = _services_navigator__WEBPACK_IMPORTED_MODULE_5__["CoreNavigator"].getRouteNumberParam('entryId');
            this.tagsEnabled = _features_tag_services_tag__WEBPACK_IMPORTED_MODULE_4__["CoreTag"].areTagsAvailableInSite();
            this.commentsEnabled = !_features_comments_services_comments__WEBPACK_IMPORTED_MODULE_3__["CoreComments"].areCommentsDisabledInSite();
            try {
                yield this.fetchEntry();
                if (!this.glossary) {
                    return;
                }
                yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_7__["CoreUtils"].ignoreErrors(_services_glossary__WEBPACK_IMPORTED_MODULE_8__["AddonModGlossary"].logEntryView(this.entryId, this.componentId, this.glossary.name));
            }
            finally {
                this.loaded = true;
            }
        });
    }
    /**
     * Refresh the data.
     *
     * @param refresher Refresher.
     * @return Promise resolved when done.
     */
    doRefresh(refresher) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (((_a = this.glossary) === null || _a === void 0 ? void 0 : _a.allowcomments) && this.entry && this.entry.id > 0 && this.commentsEnabled && this.comments) {
                // Refresh comments. Don't add it to promises because we don't want the comments fetch to block the entry fetch.
                _services_utils_utils__WEBPACK_IMPORTED_MODULE_7__["CoreUtils"].ignoreErrors(this.comments.doRefresh());
            }
            try {
                yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_7__["CoreUtils"].ignoreErrors(_services_glossary__WEBPACK_IMPORTED_MODULE_8__["AddonModGlossary"].invalidateEntry(this.entryId));
                yield this.fetchEntry();
            }
            finally {
                refresher === null || refresher === void 0 ? void 0 : refresher.complete();
            }
        });
    }
    /**
     * Convenience function to get the glossary entry.
     *
     * @return Promise resolved when done.
     */
    fetchEntry() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const result = yield _services_glossary__WEBPACK_IMPORTED_MODULE_8__["AddonModGlossary"].getEntry(this.entryId);
                this.entry = result.entry;
                this.ratingInfo = result.ratinginfo;
                if (this.glossary) {
                    // Glossary already loaded, nothing else to load.
                    return;
                }
                // Load the glossary.
                this.glossary = yield _services_glossary__WEBPACK_IMPORTED_MODULE_8__["AddonModGlossary"].getGlossaryById(this.courseId, this.entry.glossaryid);
                this.componentId = this.glossary.coursemodule;
                switch (this.glossary.displayformat) {
                    case 'fullwithauthor':
                    case 'encyclopedia':
                        this.showAuthor = true;
                        this.showDate = true;
                        break;
                    case 'fullwithoutauthor':
                        this.showAuthor = false;
                        this.showDate = true;
                        break;
                    default: // Default, and faq, simple, entrylist, continuous.
                        this.showAuthor = false;
                        this.showDate = false;
                }
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_6__["CoreDomUtils"].showErrorModalDefault(error, 'addon.mod_glossary.errorloadingentry', true);
            }
        });
    }
    /**
     * Function called when rating is updated online.
     */
    ratingUpdated() {
        _services_glossary__WEBPACK_IMPORTED_MODULE_8__["AddonModGlossary"].invalidateEntry(this.entryId);
    }
};
AddonModGlossaryEntryPage.propDecorators = {
    comments: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_features_comments_components_comments_comments__WEBPACK_IMPORTED_MODULE_2__["CoreCommentsCommentsComponent"],] }]
};
AddonModGlossaryEntryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-mod-glossary-entry',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./entry.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/glossary/pages/entry/entry.html")).default,
    })
], AddonModGlossaryEntryPage);



/***/ })

}]);
//# sourceMappingURL=pages-entry-entry-module.js.map