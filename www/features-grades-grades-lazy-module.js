(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-grades-grades-lazy-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/grades/pages/courses/courses.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/grades/pages/courses/courses.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <h1>{{ 'core.grades.grades' | translate }}</h1>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <core-split-view>\r\n        <ion-refresher slot=\"fixed\" [disabled]=\"!courses.loaded\" (ionRefresh)=\"refreshCourses($event.target)\">\r\n            <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\r\n        </ion-refresher>\r\n        <core-loading [hideUntil]=\"courses.loaded\">\r\n            <core-empty-box\r\n                *ngIf=\"courses.empty\"\r\n                icon=\"fas-chart-bar\"\r\n                [message]=\"'core.grades.nogradesreturned' | translate\"\r\n            ></core-empty-box>\r\n\r\n            <ion-list *ngIf=\"!courses.empty\">\r\n                <ion-item\r\n                    *ngFor=\"let course of courses.items\"\r\n                    [attr.aria-label]=\"course.courseFullName\"\r\n                    [attr.aria-current]=\"courses.getItemAriaCurrent(course)\"\r\n                    class=\"ion-text-wrap\"\r\n                    button\r\n                    detail=\"true\"\r\n                    (click)=\"courses.select(course)\"\r\n                >\r\n                    <ion-label>\r\n                        <core-format-text\r\n                            [text]=\"course.courseFullName\"\r\n                            [contextInstanceId]=\"course.courseid\"\r\n                            contextLevel=\"course\"\r\n                        ></core-format-text>\r\n                    </ion-label>\r\n                    <ion-badge slot=\"end\" color=\"light\">\r\n                        <span class=\"sr-only\" *ngIf=\"course.grade && course.grade != '-'\">\r\n                            {{ 'core.grades.grade' | translate }}\r\n                        </span>\r\n                        {{course.grade}}\r\n                    </ion-badge>\r\n                </ion-item>\r\n            </ion-list>\r\n        </core-loading>\r\n    </core-split-view>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/grades/pages/grade/grade.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/core/features/grades/pages/grade/grade.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <h1>{{ 'core.grades.grade' | translate }}</h1>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <ion-refresher slot=\"fixed\" [disabled]=\"!gradeLoaded\" (ionRefresh)=\"refreshGrade($event.target)\">\r\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\r\n    </ion-refresher>\r\n    <core-loading [hideUntil]=\"gradeLoaded\">\r\n        <core-empty-box *ngIf=\"!grade\" icon=\"fas-chart-bar\" [message]=\"'core.grades.nogradesreturned' | translate\"></core-empty-box>\r\n\r\n        <ion-list *ngIf=\"grade\">\r\n            <ion-item *ngIf=\"grade.itemname && grade.link\" class=\"ion-text-wrap\" detail=\"true\" [href]=\"grade.link\" core-link\r\n            capture=\"true\">\r\n                <ion-icon *ngIf=\"grade.icon\" name=\"{{grade.icon}}\" slot=\"start\" [attr.aria-label]=\"grade.iconAlt\"></ion-icon>\r\n                <img *ngIf=\"grade.image\" [src]=\"grade.image\" slot=\"start\" class=\"core-module-icon\"\r\n                    [alt]=\"grade.iconAlt\">\r\n                <ion-label>\r\n                    <h2><core-format-text [text]=\"grade.itemname\" contextLevel=\"course\" [contextInstanceId]=\"courseId\">\r\n                    </core-format-text></h2>\r\n                </ion-label>\r\n            </ion-item>\r\n\r\n            <ion-item *ngIf=\"grade.itemname && !grade.link\" class=\"ion-text-wrap\" >\r\n                <ion-icon *ngIf=\"grade.icon\" name=\"{{grade.icon}}\" slot=\"start\" [attr.aria-label]=\"grade.iconAlt\"></ion-icon>\r\n                <img *ngIf=\"grade.image\" [src]=\"grade.image\" slot=\"start\" class=\"core-module-icon\" [alt]=\"grade.iconAlt\"/>\r\n                <ion-label>\r\n                    <h2><core-format-text [text]=\"grade.itemname\" contextLevel=\"course\" [contextInstanceId]=\"courseId\">\r\n                    </core-format-text></h2>\r\n                </ion-label>\r\n            </ion-item>\r\n\r\n            <ion-item class=\"ion-text-wrap\" *ngIf=\"grade.weight\">\r\n                <ion-label>\r\n                    <h2>{{ 'core.grades.weight' | translate}}</h2>\r\n                    <p [innerHTML]=\"grade.weight\"></p>\r\n                </ion-label>\r\n            </ion-item>\r\n\r\n            <ion-item class=\"ion-text-wrap\" *ngIf=\"grade.grade\">\r\n                <ion-label>\r\n                    <h2>{{ 'core.grades.grade' | translate}}</h2>\r\n                    <p [innerHTML]=\"grade.grade\"></p>\r\n                </ion-label>\r\n            </ion-item>\r\n\r\n            <ion-item class=\"ion-text-wrap\" *ngIf=\"grade.range\">\r\n                <ion-label>\r\n                    <h2>{{ 'core.grades.range' | translate}}</h2>\r\n                    <p [innerHTML]=\"grade.range\"></p>\r\n                </ion-label>\r\n            </ion-item>\r\n\r\n            <ion-item class=\"ion-text-wrap\" *ngIf=\"grade.percentage\">\r\n                <ion-label>\r\n                    <h2>{{ 'core.grades.percentage' | translate}}</h2>\r\n                    <p [innerHTML]=\"grade.percentage\"></p>\r\n                </ion-label>\r\n            </ion-item>\r\n\r\n            <ion-item class=\"ion-text-wrap\" *ngIf=\"grade.lettergrade\">\r\n                <ion-label>\r\n                    <h2>{{ 'core.grades.lettergrade' | translate}}</h2>\r\n                    <p [innerHTML]=\"grade.lettergrade\"></p>\r\n                </ion-label>\r\n            </ion-item>\r\n\r\n            <ion-item class=\"ion-text-wrap\" *ngIf=\"grade.rank\">\r\n                <ion-label>\r\n                    <h2>{{ 'core.grades.rank' | translate}}</h2>\r\n                    <p [innerHTML]=\"grade.rank\"></p>\r\n                </ion-label>\r\n            </ion-item>\r\n\r\n            <ion-item class=\"ion-text-wrap\" *ngIf=\"grade.average\">\r\n                <ion-label>\r\n                    <h2>{{ 'core.grades.average' | translate}}</h2>\r\n                    <p [innerHTML]=\"grade.average\"></p>\r\n                </ion-label>\r\n            </ion-item>\r\n\r\n            <ion-item class=\"ion-text-wrap\" *ngIf=\"grade.feedback\">\r\n                <ion-label>\r\n                    <h2>{{ 'core.grades.feedback' | translate}}</h2>\r\n                    <p><core-format-text [fullTitle]=\"'core.grades.feedback' | translate\" maxHeight=\"60\" fullOnClick=\"true\"\r\n                        [text]=\"grade.feedback\" contextLevel=\"course\" [contextInstanceId]=\"courseId\"></core-format-text></p>\r\n                </ion-label>\r\n            </ion-item>\r\n\r\n            <ion-item class=\"ion-text-wrap\" *ngIf=\"grade.contributiontocoursetotal\">\r\n                <ion-label>\r\n                    <h2>{{ 'core.grades.contributiontocoursetotal' | translate}}</h2>\r\n                    <p [innerHTML]=\"grade.contributiontocoursetotal\"></p>\r\n                </ion-label>\r\n            </ion-item>\r\n        </ion-list>\r\n    </core-loading>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/core/features/grades/grades-lazy.module.ts":
/*!********************************************************!*\
  !*** ./src/core/features/grades/grades-lazy.module.ts ***!
  \********************************************************/
/*! exports provided: CoreGradesLazyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreGradesLazyModule", function() { return CoreGradesLazyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _services_screen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/screen */ "./src/core/services/screen.ts");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _pages_course_course_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/course/course.page */ "./src/core/features/grades/pages/course/course.page.ts");
/* harmony import */ var _pages_course_course_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/course/course.module */ "./src/core/features/grades/pages/course/course.module.ts");
/* harmony import */ var _pages_courses_courses_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/courses/courses.page */ "./src/core/features/grades/pages/courses/courses.page.ts");
/* harmony import */ var _pages_grade_grade_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/grade/grade.page */ "./src/core/features/grades/pages/grade/grade.page.ts");
/* harmony import */ var _services_handlers_mainmenu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/handlers/mainmenu */ "./src/core/features/grades/services/handlers/mainmenu.ts");
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











const mobileRoutes = [
    {
        path: '',
        data: {
            mainMenuTabRoot: _services_handlers_mainmenu__WEBPACK_IMPORTED_MODULE_10__["CoreGradesMainMenuHandlerService"].PAGE_NAME,
        },
        component: _pages_courses_courses_page__WEBPACK_IMPORTED_MODULE_8__["CoreGradesCoursesPage"],
    },
    {
        path: ':courseId',
        component: _pages_course_course_page__WEBPACK_IMPORTED_MODULE_6__["CoreGradesCoursePage"],
    },
    {
        path: ':courseId/:gradeId',
        component: _pages_grade_grade_page__WEBPACK_IMPORTED_MODULE_9__["CoreGradesGradePage"],
    },
];
const tabletRoutes = [
    {
        path: '',
        data: {
            mainMenuTabRoot: _services_handlers_mainmenu__WEBPACK_IMPORTED_MODULE_10__["CoreGradesMainMenuHandlerService"].PAGE_NAME,
        },
        component: _pages_courses_courses_page__WEBPACK_IMPORTED_MODULE_8__["CoreGradesCoursesPage"],
        children: [
            {
                path: ':courseId',
                component: _pages_course_course_page__WEBPACK_IMPORTED_MODULE_6__["CoreGradesCoursePage"],
            },
        ],
    },
    {
        path: ':courseId',
        component: _pages_course_course_page__WEBPACK_IMPORTED_MODULE_6__["CoreGradesCoursePage"],
        children: [
            {
                path: ':gradeId',
                component: _pages_grade_grade_page__WEBPACK_IMPORTED_MODULE_9__["CoreGradesGradePage"],
            },
        ],
    },
];
const routes = [
    ...Object(_app_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["conditionalRoutes"])(mobileRoutes, () => _services_screen__WEBPACK_IMPORTED_MODULE_4__["CoreScreen"].isMobile),
    ...Object(_app_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["conditionalRoutes"])(tabletRoutes, () => _services_screen__WEBPACK_IMPORTED_MODULE_4__["CoreScreen"].isTablet),
];
let CoreGradesLazyModule = class CoreGradesLazyModule {
};
CoreGradesLazyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_5__["CoreSharedModule"],
            _pages_course_course_module__WEBPACK_IMPORTED_MODULE_7__["CoreGradesCoursePageModule"],
        ],
        declarations: [
            _pages_courses_courses_page__WEBPACK_IMPORTED_MODULE_8__["CoreGradesCoursesPage"],
            _pages_grade_grade_page__WEBPACK_IMPORTED_MODULE_9__["CoreGradesGradePage"],
        ],
    })
], CoreGradesLazyModule);



/***/ }),

/***/ "./src/core/features/grades/pages/courses/courses.page.ts":
/*!****************************************************************!*\
  !*** ./src/core/features/grades/pages/courses/courses.page.ts ***!
  \****************************************************************/
/*! exports provided: CoreGradesCoursesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreGradesCoursesPage", function() { return CoreGradesCoursesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _classes_page_items_list_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @classes/page-items-list-manager */ "./src/core/classes/page-items-list-manager.ts");
/* harmony import */ var _components_split_view_split_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/split-view/split-view */ "./src/core/components/split-view/split-view.ts");
/* harmony import */ var _features_grades_services_grades__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @features/grades/services/grades */ "./src/core/features/grades/services/grades.ts");
/* harmony import */ var _features_grades_services_grades_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @features/grades/services/grades-helper */ "./src/core/features/grades/services/grades-helper.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
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
var CoreGradesCoursesPage_1;








/**
 * Page that displays courses grades (main menu option).
 */
let CoreGradesCoursesPage = CoreGradesCoursesPage_1 = class CoreGradesCoursesPage {
    constructor() {
        this.courses = new CoreGradesCoursesManager(CoreGradesCoursesPage_1);
    }
    /**
     * @inheritdoc
     */
    ngAfterViewInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.fetchInitialCourses();
            this.courses.start(this.splitView);
        });
    }
    /**
     * @inheritdoc
     */
    ngOnDestroy() {
        this.courses.destroy();
    }
    /**
     * Refresh courses.
     *
     * @param refresher Refresher.
     */
    refreshCourses(refresher) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_7__["CoreUtils"].ignoreErrors(_features_grades_services_grades__WEBPACK_IMPORTED_MODULE_4__["CoreGrades"].invalidateCoursesGradesData());
            yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_7__["CoreUtils"].ignoreErrors(this.fetchCourses());
            refresher === null || refresher === void 0 ? void 0 : refresher.complete();
        });
    }
    /**
     * Obtain the initial list of courses.
     */
    fetchInitialCourses() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.fetchCourses();
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_6__["CoreDomUtils"].showErrorModalDefault(error, 'Error loading courses');
                this.courses.setItems([]);
            }
        });
    }
    /**
     * Update the list of courses.
     */
    fetchCourses() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const grades = yield _features_grades_services_grades__WEBPACK_IMPORTED_MODULE_4__["CoreGrades"].getCoursesGrades();
            const courses = yield _features_grades_services_grades_helper__WEBPACK_IMPORTED_MODULE_5__["CoreGradesHelper"].getGradesCourseData(grades);
            this.courses.setItems(courses);
        });
    }
};
CoreGradesCoursesPage.propDecorators = {
    splitView: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_components_split_view_split_view__WEBPACK_IMPORTED_MODULE_3__["CoreSplitViewComponent"],] }]
};
CoreGradesCoursesPage = CoreGradesCoursesPage_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-core-grades-courses',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./courses.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/grades/pages/courses/courses.html")).default,
    })
], CoreGradesCoursesPage);

/**
 * Helper class to manage courses.
 */
class CoreGradesCoursesManager extends _classes_page_items_list_manager__WEBPACK_IMPORTED_MODULE_2__["CorePageItemsListManager"] {
    /**
     * @inheritdoc
     */
    getItemPath(courseGrade) {
        return courseGrade.courseid.toString();
    }
    /**
     * @inheritdoc
     */
    logActivity() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield _features_grades_services_grades__WEBPACK_IMPORTED_MODULE_4__["CoreGrades"].logCoursesGradesView();
        });
    }
}


/***/ }),

/***/ "./src/core/features/grades/pages/grade/grade.page.ts":
/*!************************************************************!*\
  !*** ./src/core/features/grades/pages/grade/grade.page.ts ***!
  \************************************************************/
/*! exports provided: CoreGradesGradePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreGradesGradePage", function() { return CoreGradesGradePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _features_grades_services_grades__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @features/grades/services/grades */ "./src/core/features/grades/services/grades.ts");
/* harmony import */ var _features_grades_services_grades_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @features/grades/services/grades-helper */ "./src/core/features/grades/services/grades-helper.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
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
 * Page that displays activity grade.
 */
let CoreGradesGradePage = class CoreGradesGradePage {
    constructor() {
        var _a;
        this.gradeLoaded = false;
        this.courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].getRouteNumberParam('courseId');
        this.gradeId = _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].getRouteNumberParam('gradeId');
        this.userId = (_a = _services_navigator__WEBPACK_IMPORTED_MODULE_7__["CoreNavigator"].getRouteNumberParam('userId')) !== null && _a !== void 0 ? _a : _services_sites__WEBPACK_IMPORTED_MODULE_5__["CoreSites"].getCurrentSiteUserId();
    }
    /**
     * @inheritdoc
     */
    ngOnInit() {
        this.fetchGrade();
    }
    /**
     * Fetch all the data required for the view.
     */
    fetchGrade() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.grade = yield _features_grades_services_grades_helper__WEBPACK_IMPORTED_MODULE_4__["CoreGradesHelper"].getGradeItem(this.courseId, this.gradeId, this.userId);
                this.gradeLoaded = true;
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_2__["CoreDomUtils"].showErrorModalDefault(error, 'Error loading grade item');
            }
        });
    }
    /**
     * Refresh data.
     *
     * @param refresher Refresher.
     */
    refreshGrade(refresher) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_6__["CoreUtils"].ignoreErrors(_features_grades_services_grades__WEBPACK_IMPORTED_MODULE_3__["CoreGrades"].invalidateCourseGradesData(this.courseId, this.userId));
            yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_6__["CoreUtils"].ignoreErrors(this.fetchGrade());
            refresher.complete();
        });
    }
};
CoreGradesGradePage.ctorParameters = () => [];
CoreGradesGradePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-core-grades-grade',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./grade.html */ "./node_modules/raw-loader/dist/cjs.js!./src/core/features/grades/pages/grade/grade.html")).default,
    })
], CoreGradesGradePage);



/***/ })

}]);
//# sourceMappingURL=features-grades-grades-lazy-module.js.map