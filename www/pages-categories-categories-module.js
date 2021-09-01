(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-categories-categories-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/courses/pages/categories/categories.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/courses/pages/categories/categories.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <h1>\r\n            <core-format-text [text]=\"title\" contextLevel=\"coursecat\" [contextInstanceId]=\"currentCategory && currentCategory!.id\">\r\n            </core-format-text>\r\n        </h1>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <ion-refresher slot=\"fixed\" [disabled]=\"!categoriesLoaded\" (ionRefresh)=\"refreshCategories($event.target)\">\r\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\r\n    </ion-refresher>\r\n    <core-loading [hideUntil]=\"categoriesLoaded\">\r\n        <ion-item *ngIf=\"currentCategory\" class=\"ion-text-wrap\">\r\n            <ion-icon name=\"fas-folder\" slot=\"start\" [attr.aria-label]=\"'core.category' | translate\"></ion-icon>\r\n            <ion-label>\r\n                <h2>\r\n                    <core-format-text [text]=\"currentCategory!.name\" contextLevel=\"coursecat\"\r\n                    [contextInstanceId]=\"currentCategory!.id\"></core-format-text>\r\n                </h2>\r\n            </ion-label>\r\n        </ion-item>\r\n        <ion-item class=\"ion-text-wrap\" *ngIf=\"currentCategory && currentCategory!.description\">\r\n            <ion-label>\r\n                <h2>\r\n                    <core-format-text [text]=\"currentCategory!.description\" maxHeight=\"60\" contextLevel=\"coursecat\"\r\n            [contextInstanceId]=\"currentCategory!.id\"></core-format-text>\r\n                </h2>\r\n            </ion-label>\r\n        </ion-item>\r\n\r\n        <div *ngIf=\"categories.length > 0\">\r\n            <ion-item-divider>\r\n                <ion-label>\r\n                    <h2>{{ 'core.courses.categories' | translate }}</h2>\r\n                </ion-label>\r\n            </ion-item-divider>\r\n            <section *ngFor=\"let category of categories\">\r\n                <ion-item button class=\"ion-text-wrap\" (click)=\"openCategory(category.id)\" [attr.aria-label]=\"category.name\"\r\n                    detail=\"true\">\r\n                    <ion-icon name=\"fas-folder\" slot=\"start\" [attr.aria-label]=\"'core.category' | translate\"></ion-icon>\r\n                    <ion-label>\r\n                        <h2>\r\n                            <core-format-text [text]=\"category.name\" contextLevel=\"coursecat\" [contextInstanceId]=\"category.id\">\r\n                            </core-format-text>\r\n                        </h2>\r\n                    </ion-label>\r\n                    <ion-badge slot=\"end\" *ngIf=\"category.coursecount > 0\" color=\"light\">\r\n                        <span aria-hidden=\"true\">{{ category.coursecount }}</span>\r\n                        <span class=\"sr-only\">{{ 'core.courses.therearecourses' | translate:{ $a: category.coursecount } }}</span>\r\n                    </ion-badge>\r\n                </ion-item>\r\n            </section>\r\n        </div>\r\n\r\n        <div *ngIf=\"courses.length > 0\">\r\n            <ion-item-divider>\r\n                <ion-label>\r\n                    <h2>{{ 'core.courses.courses' | translate }}</h2>\r\n                </ion-label>\r\n            </ion-item-divider>\r\n            <core-courses-course-list-item *ngFor=\"let course of courses\" [course]=\"course\"></core-courses-course-list-item>\r\n        </div>\r\n        <core-empty-box *ngIf=\"!categories.length && !courses.length\" icon=\"fas-graduation-cap\"\r\n            [message]=\"'core.courses.nocoursesyet' | translate\">\r\n        </core-empty-box>\r\n    </core-loading>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/core/features/courses/pages/categories/categories.module.ts":
/*!*************************************************************************!*\
  !*** ./src/core/features/courses/pages/categories/categories.module.ts ***!
  \*************************************************************************/
/*! exports provided: CoreCoursesCategoriesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCoursesCategoriesPageModule", function() { return CoreCoursesCategoriesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/components.module */ "./src/core/features/courses/components/components.module.ts");
/* harmony import */ var _categories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./categories */ "./src/core/features/courses/pages/categories/categories.ts");
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
        component: _categories__WEBPACK_IMPORTED_MODULE_5__["CoreCoursesCategoriesPage"],
    },
];
let CoreCoursesCategoriesPageModule = class CoreCoursesCategoriesPageModule {
};
CoreCoursesCategoriesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_4__["CoreCoursesComponentsModule"],
        ],
        declarations: [
            _categories__WEBPACK_IMPORTED_MODULE_5__["CoreCoursesCategoriesPage"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CoreCoursesCategoriesPageModule);



/***/ }),

/***/ "./src/core/features/courses/pages/categories/categories.ts":
/*!******************************************************************!*\
  !*** ./src/core/features/courses/pages/categories/categories.ts ***!
  \******************************************************************/
/*! exports provided: CoreCoursesCategoriesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCoursesCategoriesPage", function() { return CoreCoursesCategoriesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _services_courses__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/courses */ "./src/core/features/courses/services/courses.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
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
 * Page that displays a list of categories and the courses in the current category if any.
 */
let CoreCoursesCategoriesPage = class CoreCoursesCategoriesPage {
    constructor() {
        this.categories = [];
        this.courses = [];
        this.categoriesLoaded = false;
        this.categoryId = 0;
        this.title = _singletons__WEBPACK_IMPORTED_MODULE_6__["Translate"].instant('core.courses.categories');
    }
    /**
     * View loaded.
     */
    ngOnInit() {
        this.categoryId = _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].getRouteNumberParam('id') || 0;
        this.fetchCategories().finally(() => {
            this.categoriesLoaded = true;
        });
    }
    /**
     * Fetch the categories.
     *
     * @return Promise resolved when done.
     */
    fetchCategories() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const categories = yield _services_courses__WEBPACK_IMPORTED_MODULE_5__["CoreCourses"].getCategories(this.categoryId, true);
                this.currentCategory = undefined;
                const index = categories.findIndex((category) => category.id == this.categoryId);
                if (index >= 0) {
                    this.currentCategory = categories[index];
                    // Delete current Category to avoid problems with the formatTree.
                    delete categories[index];
                }
                // Sort by depth and sortorder to avoid problems formatting Tree.
                categories.sort((a, b) => {
                    if (a.depth == b.depth) {
                        return (a.sortorder > b.sortorder) ? 1 : ((b.sortorder > a.sortorder) ? -1 : 0);
                    }
                    return a.depth > b.depth ? 1 : -1;
                });
                this.categories = _services_utils_utils__WEBPACK_IMPORTED_MODULE_4__["CoreUtils"].formatTree(categories, 'parent', 'id', this.categoryId);
                if (this.currentCategory) {
                    this.title = this.currentCategory.name;
                    try {
                        this.courses = yield _services_courses__WEBPACK_IMPORTED_MODULE_5__["CoreCourses"].getCoursesByField('category', this.categoryId);
                    }
                    catch (error) {
                        _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__["CoreDomUtils"].showErrorModalDefault(error, 'core.courses.errorloadcourses', true);
                    }
                }
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__["CoreDomUtils"].showErrorModalDefault(error, 'core.courses.errorloadcategories', true);
            }
        });
    }
    /**
     * Refresh the categories.
     *
     * @param refresher Refresher.
     */
    refreshCategories(refresher) {
        const promises = [];
        promises.push(_services_courses__WEBPACK_IMPORTED_MODULE_5__["CoreCourses"].invalidateUserCourses());
        promises.push(_services_courses__WEBPACK_IMPORTED_MODULE_5__["CoreCourses"].invalidateCategories(this.categoryId, true));
        promises.push(_services_courses__WEBPACK_IMPORTED_MODULE_5__["CoreCourses"].invalidateCoursesByField('category', this.categoryId));
        promises.push(_services_sites__WEBPACK_IMPORTED_MODULE_2__["CoreSites"].getCurrentSite().invalidateConfig());
        Promise.all(promises).finally(() => {
            this.fetchCategories().finally(() => {
                refresher === null || refresher === void 0 ? void 0 : refresher.complete();
            });
        });
    }
    /**
     * Open a category.
     *
     * @param categoryId Category Id.
     */
    openCategory(categoryId) {
        _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].navigateToSitePath('courses/categories/' + categoryId);
    }
};
CoreCoursesCategoriesPage.ctorParameters = () => [];
CoreCoursesCategoriesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-core-courses-categories',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./categories.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/courses/pages/categories/categories.html")).default,
    })
], CoreCoursesCategoriesPage);



/***/ })

}]);
//# sourceMappingURL=pages-categories-categories-module.js.map