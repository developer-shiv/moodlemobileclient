(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-index-index-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/privatefiles/pages/index/index.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/privatefiles/pages/index/index.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <h1>{{ title }}</h1>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <ion-refresher slot=\"fixed\" [disabled]=\"!filesLoaded || (!showPrivateFiles && !showSiteFiles)\"\r\n        (ionRefresh)=\"refreshData($event.target)\">\r\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\r\n    </ion-refresher>\r\n\r\n    <core-loading [hideUntil]=\"filesLoaded\" *ngIf=\"showPrivateFiles || showSiteFiles\">\r\n        <!-- Allow selecting the files to see: private or site. -->\r\n        <core-combobox [selection]=\"root\" (onChange)=\"rootChanged($event)\" *ngIf=\"showPrivateFiles && showSiteFiles && !path\">\r\n            <ion-select-option class=\"ion-text-wrap\" value=\"my\">\r\n                {{ 'addon.privatefiles.privatefiles' | translate }}\r\n            </ion-select-option>\r\n            <ion-select-option class=\"ion-text-wrap\" value=\"site\">\r\n                {{ 'addon.privatefiles.sitefiles' | translate }}\r\n            </ion-select-option>\r\n        </core-combobox>\r\n\r\n        <!-- Display info about space used and space left. -->\r\n        <ion-card class=\"core-info-card\" *ngIf=\"userQuota && filesInfo && filesInfo.filecount > 0\">\r\n            <ion-item><ion-label>\r\n            {{ 'core.quotausage' | translate:{$a: {used: spaceUsed, total: userQuotaReadable} } }}\r\n            </ion-label></ion-item>\r\n        </ion-card>\r\n\r\n        <!-- List of files. -->\r\n        <ion-list *ngIf=\"files && files.length > 0\">\r\n            <ng-container *ngFor=\"let file of files\">\r\n                <ion-item button *ngIf=\"file.isdir\" class=\"item-file\" (click)=\"openFolder(file)\" detail=\"true\">\r\n                    <ion-thumbnail slot=\"start\">\r\n                        <img [src]=\"file.imgPath\" alt=\"\" role=\"presentation\">\r\n                    </ion-thumbnail>\r\n                    <ion-label>{{file.filename}}</ion-label>\r\n                </ion-item>\r\n                <core-file *ngIf=\"!file.isdir\" [file]=\"file\" [component]=\"component\" [componentId]=\"file.contextid\"></core-file>\r\n            </ng-container>\r\n        </ion-list>\r\n\r\n        <!-- Message telling there are no files. -->\r\n        <core-empty-box *ngIf=\"!files || !files.length\" icon=\"far-folder-open\" [message]=\"'addon.privatefiles.emptyfilelist' | translate\">\r\n        </core-empty-box>\r\n    </core-loading>\r\n\r\n    <!-- Upload a private file. -->\r\n    <ion-fab slot=\"fixed\" core-fab vertical=\"bottom\" horizontal=\"end\" *ngIf=\"showUpload && root != 'site' && !path\">\r\n        <ion-fab-button (click)=\"uploadFile()\" [attr.aria-label]=\"'core.fileuploader.uploadafile' | translate\">\r\n            <ion-icon name=\"fas-plus\" aria-hidden=\"true\"></ion-icon>\r\n            <span class=\"sr-only\">{{ 'core.fileuploader.uploadafile' | translate }}</span>\r\n        </ion-fab-button>\r\n    </ion-fab>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/course/pages/index/index.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/course/pages/index/index.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <h1>\r\n            <core-format-text [text]=\"title\" contextLevel=\"course\" [contextInstanceId]=\"course?.id\"></core-format-text>\r\n        </h1>\r\n\r\n        <ion-buttons slot=\"end\"></ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<core-tabs-outlet [tabs]=\"tabs\" [hideUntil]=\"loaded\" (ionChange)=\"tabSelected()\"></core-tabs-outlet>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/sitehome/pages/index/index.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/sitehome/pages/index/index.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<core-navbar-buttons slot=\"end\">\r\n    <ion-button *ngIf=\"searchEnabled\" (click)=\"openSearch()\" [attr.aria-label]=\"'core.courses.searchcourses' | translate\">\r\n        <ion-icon name=\"fas-search\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\r\n    </ion-button>\r\n    <core-context-menu>\r\n        <core-context-menu-item *ngIf=\"(downloadCourseEnabled || downloadCoursesEnabled)\" [priority]=\"1000\"\r\n        [content]=\"'core.settings.showdownloadoptions' | translate\" (action)=\"toggleDownload()\"\r\n        [iconAction]=\"downloadEnabledIcon\"></core-context-menu-item>\r\n        <core-context-menu-item *ngIf=\"(downloadCourseEnabled || downloadCoursesEnabled)\" [priority]=\"500\"\r\n        [content]=\"'addon.storagemanager.managestorage' | translate\"\r\n        (action)=\"manageCoursesStorage()\" iconAction=\"fas-archive\"></core-context-menu-item>\r\n    </core-context-menu>\r\n</core-navbar-buttons>\r\n<ion-content>\r\n    <ion-refresher slot=\"fixed\" [disabled]=\"!dataLoaded\" (ionRefresh)=\"doRefresh($event.target)\">\r\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\r\n    </ion-refresher>\r\n    <core-block-course-blocks [courseId]=\"siteHomeId\" [downloadEnabled]=\"downloadEnabled\">\r\n        <core-loading [hideUntil]=\"dataLoaded\">\r\n                <ion-list>\r\n                    <!-- Site home main contents. -->\r\n                    <ng-container *ngIf=\"section && section.hasContent\">\r\n                        <ion-item class=\"ion-text-wrap\" *ngIf=\"section.summary\">\r\n                            <ion-label><core-format-text [text]=\"section.summary\" contextLevel=\"course\" [contextInstanceId]=\"siteHomeId\">\r\n                            </core-format-text></ion-label>\r\n                        </ion-item>\r\n\r\n                        <core-course-module *ngFor=\"let module of section.modules\" [module]=\"module\" [courseId]=\"siteHomeId\"\r\n                            [downloadEnabled]=\"downloadEnabled\" [section]=\"section\"></core-course-module>\r\n                    </ng-container>\r\n\r\n                    <!-- Site home items: news, categories, courses, etc. -->\r\n                    <ng-container *ngIf=\"items.length > 0\">\r\n                        <core-spacer *ngIf=\"section && section!.hasContent\"></core-spacer>\r\n                        <ng-container *ngFor=\"let item of items\">\r\n                            <ng-container [ngSwitch]=\"item\">\r\n                                <ng-container *ngSwitchCase=\"'LIST_OF_COURSE'\">\r\n                                    <ng-template *ngTemplateOutlet=\"allCourseList\"></ng-template>\r\n                                </ng-container>\r\n                                <ng-container *ngSwitchCase=\"'LIST_OF_CATEGORIES'\">\r\n                                    <ng-template *ngTemplateOutlet=\"categories\"></ng-template>\r\n                                </ng-container>\r\n                                <ng-container *ngSwitchCase=\"'COURSE_SEARCH_BOX'\">\r\n                                    <ng-template *ngTemplateOutlet=\"courseSearch\"></ng-template>\r\n                                </ng-container>\r\n                                <ng-container *ngSwitchCase=\"'ENROLLED_COURSES'\">\r\n                                    <ng-template *ngTemplateOutlet=\"enrolledCourseList\"></ng-template>\r\n                                </ng-container>\r\n                                <ng-container *ngSwitchCase=\"'NEWS_ITEMS'\">\r\n                                    <ng-template *ngTemplateOutlet=\"news\"></ng-template>\r\n                                </ng-container>\r\n                            </ng-container>\r\n                        </ng-container>\r\n                    </ng-container>\r\n                </ion-list>\r\n            <core-empty-box *ngIf=\"!hasContent\" icon=\"fas-box-open\" [message]=\"'core.course.nocontentavailable' | translate\">\r\n\r\n            </core-empty-box>\r\n        </core-loading>\r\n    </core-block-course-blocks>\r\n</ion-content>\r\n\r\n<ng-template #allCourseList>\r\n    <ion-item button class=\"ion-text-wrap\" (click)=\"openAvailableCourses()\" detail=\"true\">\r\n        <ion-icon name=\"fas-graduation-cap\" fixed-width slot=\"start\" aria-hidden=\"true\"></ion-icon>\r\n        <ion-label>\r\n            <h2>{{ 'core.courses.availablecourses' | translate}}</h2>\r\n        </ion-label>\r\n    </ion-item>\r\n</ng-template>\r\n\r\n<ng-template #news>\r\n    <core-course-module class=\"core-sitehome-news\" *ngIf=\"newsForumModule\" [module]=\"newsForumModule\" [courseId]=\"siteHomeId\">\r\n    </core-course-module>\r\n</ng-template>\r\n\r\n<ng-template #categories>\r\n    <ion-item button class=\"ion-text-wrap\" (click)=\"openCourseCategories()\" detail=\"true\">\r\n        <ion-icon name=\"fas-folder\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\r\n        <ion-label>\r\n            <h2>{{ 'core.courses.categories' | translate}}</h2>\r\n        </ion-label>\r\n    </ion-item>\r\n</ng-template>\r\n\r\n<ng-template #enrolledCourseList>\r\n    <ion-item button class=\"ion-text-wrap\" (click)=\"openMyCourses()\" detail=\"true\">\r\n        <ion-icon name=\"fas-graduation-cap\" fixed-width slot=\"start\" aria-hidden=\"true\">\r\n        </ion-icon>\r\n        <ion-label><h2>{{ 'core.courses.mycourses' | translate}}</h2></ion-label>\r\n    </ion-item>\r\n</ng-template>\r\n\r\n<ng-template #courseSearch>\r\n    <ion-item button class=\"ion-text-wrap\" (click)=\"openSearch()\" detail=\"true\">\r\n        <ion-icon name=\"fas-search\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\r\n        <ion-label><h2>{{ 'core.courses.searchcourses' | translate}}</h2></ion-label>\r\n    </ion-item>\r\n</ng-template>\r\n");

/***/ }),

/***/ "./src/addons/privatefiles/pages/index/index.module.ts":
/*!*************************************************************!*\
  !*** ./src/addons/privatefiles/pages/index/index.module.ts ***!
  \*************************************************************/
/*! exports provided: AddonPrivateFilesIndexPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonPrivateFilesIndexPageModule", function() { return AddonPrivateFilesIndexPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! . */ "./src/addons/privatefiles/pages/index/index.ts");
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
        component: ___WEBPACK_IMPORTED_MODULE_4__["AddonPrivateFilesIndexPage"],
    },
];
let AddonPrivateFilesIndexPageModule = class AddonPrivateFilesIndexPageModule {
};
AddonPrivateFilesIndexPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
        ],
        declarations: [
            ___WEBPACK_IMPORTED_MODULE_4__["AddonPrivateFilesIndexPage"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddonPrivateFilesIndexPageModule);



/***/ }),

/***/ "./src/addons/privatefiles/pages/index/index.ts":
/*!******************************************************!*\
  !*** ./src/addons/privatefiles/pages/index/index.ts ***!
  \******************************************************/
/*! exports provided: AddonPrivateFilesIndexPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonPrivateFilesIndexPage", function() { return AddonPrivateFilesIndexPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ts-md5/dist/md5 */ "./node_modules/ts-md5/dist/md5.js");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/app */ "./src/core/services/app.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/utils/text */ "./src/core/services/utils/text.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _addons_privatefiles_services_privatefiles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/addons/privatefiles/services/privatefiles */ "./src/addons/privatefiles/services/privatefiles.ts");
/* harmony import */ var _addons_privatefiles_services_privatefiles_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/addons/privatefiles/services/privatefiles-helper */ "./src/addons/privatefiles/services/privatefiles-helper.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
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
 * Page that displays the list of files.
 */
let AddonPrivateFilesIndexPage = class AddonPrivateFilesIndexPage {
    constructor() {
        this.filesLoaded = false; // Whether the files are loaded.
        // Update visibility if current site info is updated.
        this.updateSiteObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_8__["CoreEvents"].on(_singletons_events__WEBPACK_IMPORTED_MODULE_8__["CoreEvents"].SITE_UPDATED, () => {
            this.setVisibility();
        }, _services_sites__WEBPACK_IMPORTED_MODULE_4__["CoreSites"].getCurrentSiteId());
    }
    /**
     * Component being initialized.
     */
    ngOnInit() {
        var _a, _b, _c;
        this.root = _services_navigator__WEBPACK_IMPORTED_MODULE_12__["CoreNavigator"].getRouteParam('root');
        const contextId = _services_navigator__WEBPACK_IMPORTED_MODULE_12__["CoreNavigator"].getRouteNumberParam('contextid');
        if (contextId) {
            // Loading a certain folder.
            this.path = {
                contextid: contextId,
                component: _services_navigator__WEBPACK_IMPORTED_MODULE_12__["CoreNavigator"].getRouteParam('component'),
                filearea: _services_navigator__WEBPACK_IMPORTED_MODULE_12__["CoreNavigator"].getRouteParam('filearea'),
                itemid: _services_navigator__WEBPACK_IMPORTED_MODULE_12__["CoreNavigator"].getRouteNumberParam('itemid'),
                filepath: _services_navigator__WEBPACK_IMPORTED_MODULE_12__["CoreNavigator"].getRouteParam('filepath'),
                filename: _services_navigator__WEBPACK_IMPORTED_MODULE_12__["CoreNavigator"].getRouteParam('filename'),
            };
        }
        this.title = ((_a = this.path) === null || _a === void 0 ? void 0 : _a.filename) || _singletons__WEBPACK_IMPORTED_MODULE_7__["Translate"].instant('addon.privatefiles.files');
        this.setVisibility();
        this.userQuota = (_c = (_b = _services_sites__WEBPACK_IMPORTED_MODULE_4__["CoreSites"].getCurrentSite()) === null || _b === void 0 ? void 0 : _b.getInfo()) === null || _c === void 0 ? void 0 : _c.userquota;
        if (!this.root) {
            // Load private files by default.
            if (this.showPrivateFiles) {
                this.root = 'my';
            }
            else if (this.showSiteFiles) {
                this.root = 'site';
            }
        }
        if (this.root) {
            this.rootChanged(this.root);
        }
        else {
            this.filesLoaded = true;
        }
    }
    /**
     * Set visibility of some items based on site data.
     */
    setVisibility() {
        this.showPrivateFiles = _addons_privatefiles_services_privatefiles__WEBPACK_IMPORTED_MODULE_9__["AddonPrivateFiles"].canViewPrivateFiles();
        this.showSiteFiles = _addons_privatefiles_services_privatefiles__WEBPACK_IMPORTED_MODULE_9__["AddonPrivateFiles"].canViewSiteFiles();
        this.showUpload = _addons_privatefiles_services_privatefiles__WEBPACK_IMPORTED_MODULE_9__["AddonPrivateFiles"].canUploadFiles();
    }
    /**
     * Refresh the data.
     *
     * @param refresher Refresher.
     */
    refreshData(event) {
        this.refreshFiles().finally(() => {
            event === null || event === void 0 ? void 0 : event.complete();
        });
    }
    /**
     * Function called when the root has changed.
     *
     * @param root New root.
     */
    rootChanged(root) {
        this.root = root;
        this.filesLoaded = false;
        this.component = this.root == 'my' ? _addons_privatefiles_services_privatefiles__WEBPACK_IMPORTED_MODULE_9__["AddonPrivateFilesProvider"].PRIVATE_FILES_COMPONENT :
            _addons_privatefiles_services_privatefiles__WEBPACK_IMPORTED_MODULE_9__["AddonPrivateFilesProvider"].SITE_FILES_COMPONENT;
        this.fetchFiles().finally(() => {
            this.filesLoaded = true;
        });
    }
    /**
     * Upload a new file.
     */
    uploadFile() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const canUpload = yield _addons_privatefiles_services_privatefiles__WEBPACK_IMPORTED_MODULE_9__["AddonPrivateFiles"].versionCanUploadFiles();
            if (!canUpload) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showAlertTranslated('core.notice', 'addon.privatefiles.erroruploadnotworking');
                return;
            }
            if (!_services_app__WEBPACK_IMPORTED_MODULE_3__["CoreApp"].isOnline()) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showErrorModal('core.fileuploader.errormustbeonlinetoupload', true);
                return;
            }
            try {
                yield _addons_privatefiles_services_privatefiles_helper__WEBPACK_IMPORTED_MODULE_10__["AddonPrivateFilesHelper"].uploadPrivateFile(this.filesInfo);
                // File uploaded, refresh the list.
                this.filesLoaded = false;
                yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_11__["CoreUtils"].ignoreErrors(this.refreshFiles());
                this.filesLoaded = true;
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showErrorModalDefault(error, 'core.fileuploader.errorwhileuploading', true);
            }
        });
    }
    /**
     * Fetch the files.
     *
     * @return Promise resolved when done.
     */
    fetchFiles() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                if (this.path) {
                    // Path is set, serve the files the user requested.
                    this.files = yield _addons_privatefiles_services_privatefiles__WEBPACK_IMPORTED_MODULE_9__["AddonPrivateFiles"].getFiles(this.path);
                    return;
                }
                // The path is unknown, the user must be requesting a root.
                if (this.root == 'site') {
                    this.title = _singletons__WEBPACK_IMPORTED_MODULE_7__["Translate"].instant('addon.privatefiles.sitefiles');
                    this.files = yield _addons_privatefiles_services_privatefiles__WEBPACK_IMPORTED_MODULE_9__["AddonPrivateFiles"].getSiteFiles();
                }
                else if (this.root == 'my') {
                    this.title = _singletons__WEBPACK_IMPORTED_MODULE_7__["Translate"].instant('addon.privatefiles.files');
                    this.files = yield _addons_privatefiles_services_privatefiles__WEBPACK_IMPORTED_MODULE_9__["AddonPrivateFiles"].getPrivateFiles();
                    if (this.showUpload && _addons_privatefiles_services_privatefiles__WEBPACK_IMPORTED_MODULE_9__["AddonPrivateFiles"].canGetPrivateFilesInfo() && this.userQuota &&
                        this.userQuota > 0) {
                        // Get the info to calculate the available size.
                        this.filesInfo = yield _addons_privatefiles_services_privatefiles__WEBPACK_IMPORTED_MODULE_9__["AddonPrivateFiles"].getPrivateFilesInfo();
                        this.spaceUsed = _services_utils_text__WEBPACK_IMPORTED_MODULE_6__["CoreTextUtils"].bytesToSize(this.filesInfo.filesizewithoutreferences, 1);
                        this.userQuotaReadable = _services_utils_text__WEBPACK_IMPORTED_MODULE_6__["CoreTextUtils"].bytesToSize(this.userQuota, 1);
                    }
                    else {
                        // User quota isn't useful, delete it.
                        delete this.userQuota;
                    }
                }
                else {
                    // Unknown root.
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showErrorModal('addon.privatefiles.couldnotloadfiles', true);
                }
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showErrorModalDefault(error, 'addon.privatefiles.couldnotloadfiles', true);
            }
        });
    }
    /**
     * Refresh the displayed files.
     *
     * @return Promise resolved when done.
     */
    refreshFiles() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield Promise.all([
                    _addons_privatefiles_services_privatefiles__WEBPACK_IMPORTED_MODULE_9__["AddonPrivateFiles"].invalidateDirectory(this.root, this.path),
                    _addons_privatefiles_services_privatefiles__WEBPACK_IMPORTED_MODULE_9__["AddonPrivateFiles"].invalidatePrivateFilesInfoForUser(),
                ]);
            }
            finally {
                yield this.fetchFiles();
            }
        });
    }
    /**
     * Open a folder.
     *
     * @param folder Folder to open.
     */
    openFolder(folder) {
        const params = {
            contextid: folder.contextid,
            component: folder.component || '',
            filearea: folder.filearea || '',
            itemid: folder.itemid || 0,
            filepath: folder.filepath || '',
            filename: folder.filename || '',
        };
        if (folder.component) {
            // Delete unused elements that may break the request.
            params.filename = '';
        }
        const hash = ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_2__["Md5"].hashAsciiStr(JSON.stringify(params));
        _services_navigator__WEBPACK_IMPORTED_MODULE_12__["CoreNavigator"].navigate(`../${hash}`, { params });
    }
    /**
     * Page destroyed.
     */
    ngOnDestroy() {
        var _a;
        (_a = this.updateSiteObserver) === null || _a === void 0 ? void 0 : _a.off();
    }
};
AddonPrivateFilesIndexPage.ctorParameters = () => [];
AddonPrivateFilesIndexPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-privatefiles-index',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./index.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/privatefiles/pages/index/index.html")).default,
    })
], AddonPrivateFilesIndexPage);



/***/ }),

/***/ "./src/core/features/course/pages/index/index.module.ts":
/*!**************************************************************!*\
  !*** ./src/core/features/course/pages/index/index.module.ts ***!
  \**************************************************************/
/*! exports provided: CoreCourseIndexPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCourseIndexPageModule", function() { return CoreCourseIndexPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _index_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.page */ "./src/core/features/course/pages/index/index.page.ts");
/* harmony import */ var _index_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index-routing.module */ "./src/core/features/course/pages/index/index-routing.module.ts");
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
    const routes = Object(_app_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["resolveModuleRoutes"])(injector, _index_routing_module__WEBPACK_IMPORTED_MODULE_6__["COURSE_INDEX_ROUTES"]);
    return [
        {
            path: '',
            component: _index_page__WEBPACK_IMPORTED_MODULE_5__["CoreCourseIndexPage"],
            data: {
                isCourseIndex: true,
            },
            children: routes.children,
        },
        ...routes.siblings,
    ];
}
let CoreCourseIndexPageModule = class CoreCourseIndexPageModule {
};
CoreCourseIndexPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        providers: [
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ROUTES"], multi: true, useFactory: buildRoutes, deps: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]] },
        ],
        imports: [
            _core_shared_module__WEBPACK_IMPORTED_MODULE_4__["CoreSharedModule"],
        ],
        declarations: [
            _index_page__WEBPACK_IMPORTED_MODULE_5__["CoreCourseIndexPage"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CoreCourseIndexPageModule);



/***/ }),

/***/ "./src/core/features/course/pages/index/index.page.ts":
/*!************************************************************!*\
  !*** ./src/core/features/course/pages/index/index.page.ts ***!
  \************************************************************/
/*! exports provided: CoreCourseIndexPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCourseIndexPage", function() { return CoreCourseIndexPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_tabs_outlet_tabs_outlet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/tabs-outlet/tabs-outlet */ "./src/core/components/tabs-outlet/tabs-outlet.ts");
/* harmony import */ var _services_format_delegate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/format-delegate */ "./src/core/features/course/services/format-delegate.ts");
/* harmony import */ var _services_course_options_delegate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/course-options-delegate */ "./src/core/features/course/services/course-options-delegate.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _features_course_services_course__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @features/course/services/course */ "./src/core/features/course/services/course.ts");
/* harmony import */ var _features_course_services_course_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @features/course/services/course-helper */ "./src/core/features/course/services/course-helper.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _services_utils_text__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @services/utils/text */ "./src/core/services/utils/text.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _features_course_course_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @features/course/course.module */ "./src/core/features/course/course.module.ts");
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
 * Page that displays the list of courses the user is enrolled in.
 */
let CoreCourseIndexPage = class CoreCourseIndexPage {
    constructor(route) {
        this.route = route;
        this.tabs = [];
        this.loaded = false;
        this.currentPagePath = '';
        this.contentsTab = {
            page: _features_course_course_module__WEBPACK_IMPORTED_MODULE_12__["CONTENTS_PAGE_NAME"],
            title: 'core.course.contents',
            pageParams: {},
        };
        this.selectTabObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_6__["CoreEvents"].on(_singletons_events__WEBPACK_IMPORTED_MODULE_6__["CoreEvents"].SELECT_COURSE_TAB, (data) => {
            var _a, _b;
            if (!data.name) {
                // If needed, set sectionId and sectionNumber. They'll only be used if the content tabs hasn't been loaded yet.
                if (data.sectionId) {
                    this.contentsTab.pageParams.sectionId = data.sectionId;
                }
                if (data.sectionNumber) {
                    this.contentsTab.pageParams.sectionNumber = data.sectionNumber;
                }
                // Select course contents.
                (_a = this.tabsComponent) === null || _a === void 0 ? void 0 : _a.selectByIndex(0);
            }
            else if (this.tabs) {
                const index = this.tabs.findIndex((tab) => tab.name == data.name);
                if (index >= 0) {
                    (_b = this.tabsComponent) === null || _b === void 0 ? void 0 : _b.selectByIndex(index);
                }
            }
        });
    }
    /**
     * Component being initialized.
     */
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Increase route depth.
            const path = _services_navigator__WEBPACK_IMPORTED_MODULE_11__["CoreNavigator"].getRouteFullPath(this.route.snapshot);
            _services_navigator__WEBPACK_IMPORTED_MODULE_11__["CoreNavigator"].increaseRouteDepth(path.replace(/(\/deep)+/, ''));
            // Get params.
            this.course = _services_navigator__WEBPACK_IMPORTED_MODULE_11__["CoreNavigator"].getRouteParam('course');
            this.firstTabName = _services_navigator__WEBPACK_IMPORTED_MODULE_11__["CoreNavigator"].getRouteParam('selectedTab');
            this.module = _services_navigator__WEBPACK_IMPORTED_MODULE_11__["CoreNavigator"].getRouteParam('module');
            this.modParams = _services_navigator__WEBPACK_IMPORTED_MODULE_11__["CoreNavigator"].getRouteParam('modParams');
            this.isGuest = _services_navigator__WEBPACK_IMPORTED_MODULE_11__["CoreNavigator"].getRouteBooleanParam('isGuest');
            this.currentPagePath = _services_navigator__WEBPACK_IMPORTED_MODULE_11__["CoreNavigator"].getCurrentPath();
            this.contentsTab.page = _services_utils_text__WEBPACK_IMPORTED_MODULE_10__["CoreTextUtils"].concatenatePaths(this.currentPagePath, this.contentsTab.page);
            this.contentsTab.pageParams = {
                course: this.course,
                sectionId: _services_navigator__WEBPACK_IMPORTED_MODULE_11__["CoreNavigator"].getRouteNumberParam('sectionId'),
                sectionNumber: _services_navigator__WEBPACK_IMPORTED_MODULE_11__["CoreNavigator"].getRouteNumberParam('sectionNumber'),
                isGuest: this.isGuest,
            };
            if (this.module) {
                this.contentsTab.pageParams.moduleId = this.module.id;
            }
            this.tabs.push(this.contentsTab);
            this.loaded = true;
            yield Promise.all([
                this.loadCourseHandlers(),
                this.loadTitle(),
            ]);
        });
    }
    /**
     * A tab was selected.
     */
    tabSelected() {
        if (this.module) {
            // Now that the first tab has been selected we can load the module.
            _features_course_services_course_helper__WEBPACK_IMPORTED_MODULE_8__["CoreCourseHelper"].openModule(this.module, this.course.id, this.contentsTab.pageParams.sectionId, this.modParams);
            delete this.module;
        }
    }
    /**
     * Load course option handlers.
     *
     * @return Promise resolved when done.
     */
    loadCourseHandlers() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Load the course handlers.
            const handlers = yield _services_course_options_delegate__WEBPACK_IMPORTED_MODULE_5__["CoreCourseOptionsDelegate"].getHandlersToDisplay(this.course, false, this.isGuest);
            let tabToLoad;
            // Create the full path.
            handlers.forEach((handler, index) => {
                handler.data.page = _services_utils_text__WEBPACK_IMPORTED_MODULE_10__["CoreTextUtils"].concatenatePaths(this.currentPagePath, handler.data.page);
                handler.data.pageParams = handler.data.pageParams || {};
                // Check if this handler should be the first selected tab.
                if (this.firstTabName && handler.name == this.firstTabName) {
                    tabToLoad = index + 1;
                }
            });
            this.tabs = [...this.tabs, ...handlers.map(handler => (Object.assign(Object.assign({}, handler.data), { name: handler.name })))];
            // Select the tab if needed.
            this.firstTabName = undefined;
            if (tabToLoad) {
                setTimeout(() => {
                    var _a;
                    (_a = this.tabsComponent) === null || _a === void 0 ? void 0 : _a.selectByIndex(tabToLoad);
                });
            }
        });
    }
    /**
     * Load title for the page.
     *
     * @return Promise resolved when done.
     */
    loadTitle() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Get the title to display initially.
            this.title = _services_format_delegate__WEBPACK_IMPORTED_MODULE_4__["CoreCourseFormatDelegate"].getCourseTitle(this.course);
            // Load sections.
            const sections = yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_9__["CoreUtils"].ignoreErrors(_features_course_services_course__WEBPACK_IMPORTED_MODULE_7__["CoreCourse"].getSections(this.course.id, false, true));
            if (!sections) {
                return;
            }
            // Get the title again now that we have sections.
            this.title = _services_format_delegate__WEBPACK_IMPORTED_MODULE_4__["CoreCourseFormatDelegate"].getCourseTitle(this.course, sections);
        });
    }
    /**
     * Page destroyed.
     */
    ngOnDestroy() {
        var _a;
        const path = _services_navigator__WEBPACK_IMPORTED_MODULE_11__["CoreNavigator"].getRouteFullPath(this.route.snapshot);
        _services_navigator__WEBPACK_IMPORTED_MODULE_11__["CoreNavigator"].decreaseRouteDepth(path.replace(/(\/deep)+/, ''));
        (_a = this.selectTabObserver) === null || _a === void 0 ? void 0 : _a.off();
    }
    /**
     * User entered the page.
     */
    ionViewDidEnter() {
        var _a;
        (_a = this.tabsComponent) === null || _a === void 0 ? void 0 : _a.ionViewDidEnter();
    }
    /**
     * User left the page.
     */
    ionViewDidLeave() {
        var _a;
        (_a = this.tabsComponent) === null || _a === void 0 ? void 0 : _a.ionViewDidLeave();
    }
};
CoreCourseIndexPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
CoreCourseIndexPage.propDecorators = {
    tabsComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_components_tabs_outlet_tabs_outlet__WEBPACK_IMPORTED_MODULE_3__["CoreTabsOutletComponent"],] }]
};
CoreCourseIndexPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-core-course-index',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./index.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/course/pages/index/index.html")).default,
    })
], CoreCourseIndexPage);



/***/ }),

/***/ "./src/core/features/sitehome/pages/index/index.module.ts":
/*!****************************************************************!*\
  !*** ./src/core/features/sitehome/pages/index/index.module.ts ***!
  \****************************************************************/
/*! exports provided: CoreSiteHomeIndexPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSiteHomeIndexPageModule", function() { return CoreSiteHomeIndexPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _core_features_block_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/core/features/block/components/components.module */ "./src/core/features/block/components/components.module.ts");
/* harmony import */ var _features_course_components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @features/course/components/components.module */ "./src/core/features/course/components/components.module.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! . */ "./src/core/features/sitehome/pages/index/index.ts");
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
        component: ___WEBPACK_IMPORTED_MODULE_6__["CoreSiteHomeIndexPage"],
    },
];
let CoreSiteHomeIndexPageModule = class CoreSiteHomeIndexPageModule {
};
CoreSiteHomeIndexPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
            _core_features_block_components_components_module__WEBPACK_IMPORTED_MODULE_4__["CoreBlockComponentsModule"],
            _features_course_components_components_module__WEBPACK_IMPORTED_MODULE_5__["CoreCourseComponentsModule"],
        ],
        declarations: [
            ___WEBPACK_IMPORTED_MODULE_6__["CoreSiteHomeIndexPage"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CoreSiteHomeIndexPageModule);



/***/ }),

/***/ "./src/core/features/sitehome/pages/index/index.ts":
/*!*********************************************************!*\
  !*** ./src/core/features/sitehome/pages/index/index.ts ***!
  \*********************************************************/
/*! exports provided: CoreSiteHomeIndexPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSiteHomeIndexPage", function() { return CoreSiteHomeIndexPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _features_course_services_course__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @features/course/services/course */ "./src/core/features/course/services/course.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _features_sitehome_services_sitehome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @features/sitehome/services/sitehome */ "./src/core/features/sitehome/services/sitehome.ts");
/* harmony import */ var _features_courses_services_courses__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @features//courses/services/courses */ "./src/core/features/courses/services/courses.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _features_course_services_course_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @features/course/services/course-helper */ "./src/core/features/course/services/course-helper.ts");
/* harmony import */ var _features_block_components_course_blocks_course_blocks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @features/block/components/course-blocks/course-blocks */ "./src/core/features/block/components/course-blocks/course-blocks.ts");
/* harmony import */ var _features_course_services_module_delegate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @features/course/services/module-delegate */ "./src/core/features/course/services/module-delegate.ts");
/* harmony import */ var _features_course_services_module_prefetch_delegate__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @features/course/services/module-prefetch-delegate */ "./src/core/features/course/services/module-prefetch-delegate.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
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
 * Page that displays site home index.
 */
let CoreSiteHomeIndexPage = class CoreSiteHomeIndexPage {
    constructor() {
        this.dataLoaded = false;
        this.hasContent = false;
        this.items = [];
        this.siteHomeId = 1;
        this.searchEnabled = false;
        this.downloadEnabled = false;
        this.downloadCourseEnabled = false;
        this.downloadCoursesEnabled = false;
        this.downloadEnabledIcon = 'far-square';
    }
    /**
     * Page being initialized.
     */
    ngOnInit() {
        this.searchEnabled = !_features_courses_services_courses__WEBPACK_IMPORTED_MODULE_6__["CoreCourses"].isSearchCoursesDisabledInSite();
        this.downloadCourseEnabled = !_features_courses_services_courses__WEBPACK_IMPORTED_MODULE_6__["CoreCourses"].isDownloadCourseDisabledInSite();
        this.downloadCoursesEnabled = !_features_courses_services_courses__WEBPACK_IMPORTED_MODULE_6__["CoreCourses"].isDownloadCoursesDisabledInSite();
        // Refresh the enabled flags if site is updated.
        this.updateSiteObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_7__["CoreEvents"].on(_singletons_events__WEBPACK_IMPORTED_MODULE_7__["CoreEvents"].SITE_UPDATED, () => {
            this.searchEnabled = !_features_courses_services_courses__WEBPACK_IMPORTED_MODULE_6__["CoreCourses"].isSearchCoursesDisabledInSite();
            this.downloadCourseEnabled = !_features_courses_services_courses__WEBPACK_IMPORTED_MODULE_6__["CoreCourses"].isDownloadCourseDisabledInSite();
            this.downloadCoursesEnabled = !_features_courses_services_courses__WEBPACK_IMPORTED_MODULE_6__["CoreCourses"].isDownloadCoursesDisabledInSite();
            this.switchDownload(this.downloadEnabled && this.downloadCourseEnabled && this.downloadCoursesEnabled);
        }, _services_sites__WEBPACK_IMPORTED_MODULE_4__["CoreSites"].getCurrentSiteId());
        this.currentSite = _services_sites__WEBPACK_IMPORTED_MODULE_4__["CoreSites"].getCurrentSite();
        this.siteHomeId = _services_sites__WEBPACK_IMPORTED_MODULE_4__["CoreSites"].getCurrentSiteHomeId();
        const module = _services_navigator__WEBPACK_IMPORTED_MODULE_12__["CoreNavigator"].getRouteParam('module');
        if (module) {
            const modParams = _services_navigator__WEBPACK_IMPORTED_MODULE_12__["CoreNavigator"].getRouteParam('modParams');
            _features_course_services_course_helper__WEBPACK_IMPORTED_MODULE_8__["CoreCourseHelper"].openModule(module, this.siteHomeId, undefined, modParams);
        }
        this.loadContent().finally(() => {
            this.dataLoaded = true;
        });
    }
    /**
     * Convenience function to fetch the data.
     *
     * @return Promise resolved when done.
     */
    loadContent() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.hasContent = false;
            const config = this.currentSite.getStoredConfig() || { numsections: 1, frontpageloggedin: undefined };
            this.items = yield _features_sitehome_services_sitehome__WEBPACK_IMPORTED_MODULE_5__["CoreSiteHome"].getFrontPageItems(config.frontpageloggedin);
            this.hasContent = this.items.length > 0;
            if (this.items.some((item) => item == 'NEWS_ITEMS')) {
                // Get the news forum.
                try {
                    const forum = yield _features_sitehome_services_sitehome__WEBPACK_IMPORTED_MODULE_5__["CoreSiteHome"].getNewsForum();
                    this.newsForumModule = yield _features_course_services_course__WEBPACK_IMPORTED_MODULE_2__["CoreCourse"].getModuleBasicInfo(forum.cmid);
                    this.newsForumModule.handlerData = _features_course_services_module_delegate__WEBPACK_IMPORTED_MODULE_10__["CoreCourseModuleDelegate"].getModuleDataFor(this.newsForumModule.modname, this.newsForumModule, this.siteHomeId, this.newsForumModule.section, true);
                }
                catch (_b) {
                    // Ignore errors.
                }
            }
            try {
                const sections = yield _features_course_services_course__WEBPACK_IMPORTED_MODULE_2__["CoreCourse"].getSections(this.siteHomeId, false, true);
                // Check "Include a topic section" setting from numsections.
                this.section = config.numsections ? sections.find((section) => section.section == 1) : undefined;
                if (this.section) {
                    const result = _features_course_services_course_helper__WEBPACK_IMPORTED_MODULE_8__["CoreCourseHelper"].addHandlerDataForModules([this.section], this.siteHomeId, undefined, undefined, true);
                    this.hasContent = result.hasContent || this.hasContent;
                }
                // Add log in Moodle.
                _features_course_services_course__WEBPACK_IMPORTED_MODULE_2__["CoreCourse"].logView(this.siteHomeId, undefined, undefined, (_a = this.currentSite.getInfo()) === null || _a === void 0 ? void 0 : _a.sitename).catch(() => {
                    // Ignore errors.
                });
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__["CoreDomUtils"].showErrorModalDefault(error, 'core.course.couldnotloadsectioncontent', true);
            }
        });
    }
    /**
     * Refresh the data.
     *
     * @param refresher Refresher.
     */
    doRefresh(refresher) {
        const promises = [];
        promises.push(_features_course_services_course__WEBPACK_IMPORTED_MODULE_2__["CoreCourse"].invalidateSections(this.siteHomeId));
        promises.push(this.currentSite.invalidateConfig().then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Config invalidated, fetch it again.
            const config = yield this.currentSite.getConfig();
            this.currentSite.setConfig(config);
            return;
        })));
        if (this.section && this.section.modules) {
            // Invalidate modules prefetch data.
            promises.push(_features_course_services_module_prefetch_delegate__WEBPACK_IMPORTED_MODULE_11__["CoreCourseModulePrefetchDelegate"].invalidateModules(this.section.modules, this.siteHomeId));
        }
        if (this.courseBlocksComponent) {
            promises.push(this.courseBlocksComponent.invalidateBlocks());
        }
        Promise.all(promises).finally(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const p2 = [];
            p2.push(this.loadContent());
            if (this.courseBlocksComponent) {
                p2.push(this.courseBlocksComponent.loadContent());
            }
            yield Promise.all(p2).finally(() => {
                refresher === null || refresher === void 0 ? void 0 : refresher.complete();
            });
        }));
    }
    /**
     * Toggle download enabled.
     */
    toggleDownload() {
        this.switchDownload(!this.downloadEnabled);
    }
    /**
     * Convenience function to switch download enabled.
     *
     * @param enable If enable or disable.
     */
    switchDownload(enable) {
        this.downloadEnabled = (this.downloadCourseEnabled || this.downloadCoursesEnabled) && enable;
        this.downloadEnabledIcon = this.downloadEnabled ? 'far-check-square' : 'far-square';
        _singletons_events__WEBPACK_IMPORTED_MODULE_7__["CoreEvents"].trigger(_features_courses_services_courses__WEBPACK_IMPORTED_MODULE_6__["CoreCoursesProvider"].EVENT_DASHBOARD_DOWNLOAD_ENABLED_CHANGED, { enabled: this.downloadEnabled });
    }
    /**
     * Open page to manage courses storage.
     */
    manageCoursesStorage() {
        _services_navigator__WEBPACK_IMPORTED_MODULE_12__["CoreNavigator"].navigateToSitePath('/storage');
    }
    /**
     * Go to search courses.
     */
    openSearch() {
        _services_navigator__WEBPACK_IMPORTED_MODULE_12__["CoreNavigator"].navigateToSitePath('courses/search');
    }
    /**
     * Go to available courses.
     */
    openAvailableCourses() {
        _services_navigator__WEBPACK_IMPORTED_MODULE_12__["CoreNavigator"].navigateToSitePath('courses/all');
    }
    /**
     * Go to my courses.
     */
    openMyCourses() {
        _services_navigator__WEBPACK_IMPORTED_MODULE_12__["CoreNavigator"].navigateToSitePath('courses/my');
    }
    /**
     * Go to course categories.
     */
    openCourseCategories() {
        _services_navigator__WEBPACK_IMPORTED_MODULE_12__["CoreNavigator"].navigateToSitePath('courses/categories');
    }
    /**
     * Component being destroyed.
     */
    ngOnDestroy() {
        var _a;
        (_a = this.updateSiteObserver) === null || _a === void 0 ? void 0 : _a.off();
    }
};
CoreSiteHomeIndexPage.propDecorators = {
    courseBlocksComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_features_block_components_course_blocks_course_blocks__WEBPACK_IMPORTED_MODULE_9__["CoreBlockCourseBlocksComponent"],] }]
};
CoreSiteHomeIndexPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-core-sitehome-index',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./index.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/sitehome/pages/index/index.html")).default,
    })
], CoreSiteHomeIndexPage);



/***/ })

}]);
//# sourceMappingURL=pages-index-index-module.js.map