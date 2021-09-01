(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~addons-competency-competency-course-lazy-module~competency-lazy-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/competency/pages/coursecompetencies/coursecompetencies.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/competency/pages/coursecompetencies/coursecompetencies.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <h1>{{ 'addon.competency.coursecompetencies' | translate }}</h1>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <ion-refresher slot=\"fixed\" [disabled]=\"!competenciesLoaded\" (ionRefresh)=\"refreshCourseCompetencies($event.target)\">\r\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\r\n    </ion-refresher>\r\n    <core-loading [hideUntil]=\"competenciesLoaded\">\r\n        <ion-card *ngIf=\"!user && competencies && competencies.statistics.competencycount > 0\">\r\n            <ng-container *ngIf=\"competencies.cangradecompetencies\">\r\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"competencies.settings.pushratingstouserplans\">\r\n                    <ion-label>{{ 'addon.competency.coursecompetencyratingsarepushedtouserplans' | translate }}</ion-label>\r\n                </ion-item>\r\n                <ion-item class=\"ion-text-wrap\" *ngIf=\"!competencies.settings.pushratingstouserplans\" color=\"danger\">\r\n                    <ion-label>{{ 'addon.competency.coursecompetencyratingsarenotpushedtouserplans' | translate }}</ion-label>\r\n                </ion-item>\r\n            </ng-container>\r\n            <ion-item class=\"ion-text-wrap\" *ngIf=\"competencies.statistics.canbegradedincourse\">\r\n                <ion-label>\r\n                    <span id=\"addon-competency-course-{{courseId}}-progress\">\r\n                        {{ 'addon.competency.xcompetenciesproficientoutofyincourse' | translate: {$a:\r\n                            {x: competencies.statistics.proficientcompetencycount, y: competencies.statistics.competencycount} } }}\r\n                    </span>\r\n                    <core-progress-bar [progress]=\"competencies.statistics.proficientcompetencypercentage\"\r\n                        ariaDescribedBy=\"addon-competency-course-{{courseId}}-progress\">\r\n                    </core-progress-bar>\r\n                </ion-label>\r\n            </ion-item>\r\n            <ion-item class=\"ion-text-wrap\"\r\n                *ngIf=\"competencies.statistics.canmanagecoursecompetencies && competencies.statistics.leastproficientcount > 0\">\r\n                <ion-label>\r\n                    <p class=\"item-heading\">{{ 'addon.competency.competenciesmostoftennotproficientincourse' | translate }}</p>\r\n                    <p *ngFor=\"let comp of competencies.statistics.leastproficient\">\r\n                        <button class=\"as-link\" (click)=\"openCompetencySummary(comp.id)\">\r\n                            {{ comp.shortname }} - {{ comp.idnumber }}\r\n                        </button>\r\n                    </p>\r\n                </ion-label>\r\n            </ion-item>\r\n        </ion-card>\r\n\r\n        <h2 class=\"ion-margin-horizontal\" *ngIf=\"competencies && competencies.statistics.competencycount > 0\">\r\n            {{ 'addon.competency.coursecompetencies' | translate }}\r\n        </h2>\r\n        <ion-card *ngIf=\"user\">\r\n             <ion-item class=\"ion-text-wrap\">\r\n                <core-user-avatar [user]=\"user\" slot=\"start\"></core-user-avatar>\r\n               <ion-label><h2>{{ user.fullname }}</h2></ion-label>\r\n            </ion-item>\r\n        </ion-card>\r\n        <core-empty-box *ngIf=\"competencies && competencies.statistics.competencycount == 0\"\r\n            icon=\"fas-award\" message=\"{{ 'addon.competency.nocompetenciesincourse' | translate }}\">\r\n        </core-empty-box>\r\n\r\n        <div *ngIf=\"competencies\">\r\n            <ion-card *ngFor=\"let competency of competencies.competencies\">\r\n                <ion-item class=\"ion-text-wrap\" (click)=\"openCompetency(competency.competency.id)\"\r\n                    [attr.aria-label]=\"competency.competency.shortname\" detail=\"true\" button>\r\n                    <ion-label>\r\n                        <p class=\"item-heading\">\r\n                            {{competency.competency.shortname}} <em>{{competency.competency.idnumber}}</em>\r\n                        </p>\r\n                    </ion-label>\r\n                    <ion-badge slot=\"end\" *ngIf=\"competency.usercompetencycourse && competency.usercompetencycourse.gradename\"\r\n                        [color]=\"competency.usercompetencycourse.proficiency ? 'success' : 'danger'\">\r\n                        {{ competency.usercompetencycourse.gradename }}\r\n                    </ion-badge>\r\n                </ion-item>\r\n                <ion-item class=\"ion-text-wrap\">\r\n                    <ion-label>\r\n                        <p *ngIf=\"competency.competency.description\">\r\n                            <core-format-text [text]=\"competency.competency.description\" contextLevel=\"course\"\r\n                                [contextInstanceId]=\"courseId\">\r\n                            </core-format-text>\r\n                        </p>\r\n                        <div>\r\n                            <p class=\"item-heading\">{{ 'addon.competency.path' | translate }}</p>\r\n                            <p>\r\n                                <a *ngIf=\"competency.comppath.showlinks\"\r\n                                    [href]=\"competency.comppath.pluginbaseurl + '/competencies.php?competencyframeworkid=' +\r\n                                    competency.comppath.framework.id + '&pagecontextid=' + competency.comppath.pagecontextid\"\r\n                                    core-link [title]=\"competency.comppath.framework.name\">\r\n                                    {{ competency.comppath.framework.name }}\r\n                                </a>\r\n                                <ng-container *ngIf=\"!competency.comppath.showlinks\">\r\n                                    {{ competency.comppath.framework.name }}\r\n                                </ng-container>\r\n                                &nbsp;/&nbsp;\r\n                                <ng-container *ngFor=\"let ancestor of competency.comppath.ancestors\">\r\n                                    <button class=\"as-link\" *ngIf=\"competency.comppath.showlinks\"\r\n                                        (click)=\"openCompetencySummary(ancestor.id)\">\r\n                                        {{ ancestor.name }}\r\n                                    </button>\r\n                                    <ng-container *ngIf=\"!competency.comppath.showlinks\">{{ ancestor.name }}</ng-container>\r\n                                    <ng-container *ngIf=\"!ancestor.last\">&nbsp;/&nbsp;</ng-container>\r\n                                </ng-container>\r\n                            </p>\r\n                        </div>\r\n                        <div *ngIf=\"competencies.statistics.canmanagecoursecompetencies\">\r\n                            <p class=\"item-heading\">{{ 'addon.competency.uponcoursecompletion' | translate }}</p>\r\n                             <ng-container *ngFor=\"let ruleoutcome of competency.ruleoutcomeoptions\">\r\n                                <span *ngIf=\"ruleoutcome.selected\">{{ ruleoutcome.text }}</span>\r\n                            </ng-container>\r\n                        </div>\r\n                        <div>\r\n                            <p class=\"item-heading\">{{ 'addon.competency.activities' | translate }}</p>\r\n                            <p *ngIf=\"competency.coursemodules.length == 0\">\r\n                                {{ 'addon.competency.noactivities' | translate }}\r\n                            </p>\r\n                            <ion-item class=\"ion-text-wrap core-course-module-handler item-media\" [attr.aria-label]=\"activity.name\"\r\n                                core-link *ngFor=\"let activity of competency.coursemodules\" [href]=\"activity.url\" capture=\"true\">\r\n                                <img slot=\"start\" [src]=\"activity.iconurl\" core-external-content alt=\"\"\r\n                                    *ngIf=\"activity.iconurl\" class=\"core-module-icon\">\r\n                                <ion-label>\r\n                                    <core-format-text [text]=\"activity.name\" contextLevel=\"module\" [contextInstanceId]=\"activity.id\"\r\n                                        [courseId]=\"courseId\">\r\n                                    </core-format-text>\r\n                                </ion-label>\r\n                            </ion-item>\r\n                        </div>\r\n                        <div *ngIf=\"competency.plans\">\r\n                            <p class=\"item-heading\">{{ 'addon.competency.userplans' | translate }}</p>\r\n                            <p *ngIf=\"competency.plans.length == 0\">\r\n                                {{ 'addon.competency.nouserplanswithcompetency' | translate }}\r\n                            </p>\r\n                            <ion-item class=\"ion-text-wrap\" *ngFor=\"let plan of competency.plans\" [href]=\"plan.url\"\r\n                                [attr.aria-label]=\"plan.name\" core-link capture=\"true\">\r\n                                <ion-label>\r\n                                   <core-format-text [text]=\"plan.name\" contextLevel=\"user\" [contextInstanceId]=\"plan.userid\">\r\n                                   </core-format-text>\r\n                                </ion-label>\r\n                            </ion-item>\r\n                        </div>\r\n                    </ion-label>\r\n                </ion-item>\r\n            </ion-card>\r\n        </div>\r\n    </core-loading>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/addons/competency/pages/coursecompetencies/coursecompetencies.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/addons/competency/pages/coursecompetencies/coursecompetencies.module.ts ***!
  \*************************************************************************************/
/*! exports provided: AddonCompetencyCourseCompetenciesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonCompetencyCourseCompetenciesPageModule", function() { return AddonCompetencyCourseCompetenciesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _coursecompetencies_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./coursecompetencies.page */ "./src/addons/competency/pages/coursecompetencies/coursecompetencies.page.ts");
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




let AddonCompetencyCourseCompetenciesPageModule = class AddonCompetencyCourseCompetenciesPageModule {
};
AddonCompetencyCourseCompetenciesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _core_shared_module__WEBPACK_IMPORTED_MODULE_2__["CoreSharedModule"],
        ],
        declarations: [
            _coursecompetencies_page__WEBPACK_IMPORTED_MODULE_3__["AddonCompetencyCourseCompetenciesPage"],
        ],
    })
], AddonCompetencyCourseCompetenciesPageModule);



/***/ }),

/***/ "./src/addons/competency/pages/coursecompetencies/coursecompetencies.page.ts":
/*!***********************************************************************************!*\
  !*** ./src/addons/competency/pages/coursecompetencies/coursecompetencies.page.ts ***!
  \***********************************************************************************/
/*! exports provided: AddonCompetencyCourseCompetenciesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonCompetencyCourseCompetenciesPage", function() { return AddonCompetencyCourseCompetenciesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _addons_competency_services_competency__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @addons/competency/services/competency */ "./src/addons/competency/services/competency.ts");
/* harmony import */ var _addons_competency_services_competency_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @addons/competency/services/competency-helper */ "./src/addons/competency/services/competency-helper.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _addons_competency_services_handlers_mainmenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @addons/competency/services/handlers/mainmenu */ "./src/addons/competency/services/handlers/mainmenu.ts");
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
 * Page that displays the list of competencies of a course.
 */
let AddonCompetencyCourseCompetenciesPage = class AddonCompetencyCourseCompetenciesPage {
    constructor() {
        this.competenciesLoaded = false;
    }
    /**
     * View loaded.
     */
    ngOnInit() {
        this.courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_4__["CoreNavigator"].getRouteNumberParam('courseId');
        this.userId = _services_navigator__WEBPACK_IMPORTED_MODULE_4__["CoreNavigator"].getRouteNumberParam('userId');
        this.fetchCourseCompetencies().finally(() => {
            this.competenciesLoaded = true;
        });
    }
    /**
     * Fetches the competencies and updates the view.
     *
     * @return Promise resolved when done.
     */
    fetchCourseCompetencies() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.competencies = yield _addons_competency_services_competency__WEBPACK_IMPORTED_MODULE_2__["AddonCompetency"].getCourseCompetencies(this.courseId, this.userId);
                // Get the user profile image.
                this.user = yield _addons_competency_services_competency_helper__WEBPACK_IMPORTED_MODULE_3__["AddonCompetencyHelper"].getProfile(this.userId);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_5__["CoreDomUtils"].showErrorModalDefault(error, 'Error getting course competencies data.');
            }
        });
    }
    /**
     * Opens a competency.
     *
     * @param competencyId
     */
    openCompetency(competencyId) {
        _services_navigator__WEBPACK_IMPORTED_MODULE_4__["CoreNavigator"].navigateToSitePath('/' + _addons_competency_services_handlers_mainmenu__WEBPACK_IMPORTED_MODULE_6__["AddonCompetencyMainMenuHandlerService"].PAGE_NAME + '/competencies/' + competencyId, {
            params: { courseId: this.courseId, userId: this.userId },
        });
    }
    /**
     * Opens the summary of a competency.
     *
     * @param competencyId
     */
    openCompetencySummary(competencyId) {
        _services_navigator__WEBPACK_IMPORTED_MODULE_4__["CoreNavigator"].navigateToSitePath('/' + _addons_competency_services_handlers_mainmenu__WEBPACK_IMPORTED_MODULE_6__["AddonCompetencyMainMenuHandlerService"].PAGE_NAME + '/summary/' + competencyId, {
            params: {
                contextLevel: "course" /* COURSE */,
                contextInstanceId: this.courseId,
            }
        });
    }
    /**
     * Refreshes the competencies.
     *
     * @param refresher Refresher.
     */
    refreshCourseCompetencies(refresher) {
        _addons_competency_services_competency__WEBPACK_IMPORTED_MODULE_2__["AddonCompetency"].invalidateCourseCompetencies(this.courseId, this.userId).finally(() => {
            this.fetchCourseCompetencies().finally(() => {
                refresher === null || refresher === void 0 ? void 0 : refresher.complete();
            });
        });
    }
};
AddonCompetencyCourseCompetenciesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-competency-coursecompetencies',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./coursecompetencies.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/competency/pages/coursecompetencies/coursecompetencies.html")).default,
    })
], AddonCompetencyCourseCompetenciesPage);



/***/ })

}]);
//# sourceMappingURL=default~addons-competency-competency-course-lazy-module~competency-lazy-module.js.map