(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-discussion-discussion-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/messages/components/conversation-info/conversation-info.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/messages/components/conversation-info/conversation-info.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <h2>{{ 'addon.messages.groupinfo' | translate }}</h2>\r\n        <ion-buttons slot=\"end\">\r\n            <ion-button fill=\"clear\" (click)=\"closeModal()\" [attr.aria-label]=\"'core.close' | translate\">\r\n                <ion-icon name=\"fas-times\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <ion-refresher slot=\"fixed\" [disabled]=\"!loaded\" (ionRefresh)=\"refreshData($event.target)\">\r\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\r\n    </ion-refresher>\r\n\r\n    <core-loading [hideUntil]=\"loaded\">\r\n        <ion-item class=\"ion-text-center\" *ngIf=\"conversation\">\r\n            <ion-label>\r\n                <div class=\"large-avatar\">\r\n                    <img class=\"avatar\" [src]=\"conversation!.imageurl\" core-external-content [alt]=\"conversation!.name\"\r\n                    onError=\"this.src='assets/img/group-avatar.png'\">\r\n                </div>\r\n                <h2>\r\n                    <core-format-text [text]=\"conversation!.name\" contextLevel=\"system\" [contextInstanceId]=\"0\"></core-format-text>\r\n                </h2>\r\n                <p>\r\n                    <core-format-text *ngIf=\"conversation!.subname\" [text]=\"conversation!.subname\" contextLevel=\"system\"\r\n                        [contextInstanceId]=\"0\">\r\n                    </core-format-text>\r\n                </p>\r\n                <p>{{ 'addon.messages.numparticipants' | translate:{$a: conversation!.membercount} }}</p>\r\n            </ion-label>\r\n        </ion-item>\r\n\r\n        <ion-item class=\"ion-text-wrap addon-messages-conversation-item\" *ngFor=\"let member of members\"\r\n            (click)=\"closeModal(member.id)\" detail=\"true\" button>\r\n            <core-user-avatar [user]=\"member\" [linkProfile]=\"false\" [checkOnline]=\"member.showonlinestatus\" slot=\"start\">\r\n            </core-user-avatar>\r\n            <ion-label>\r\n                <p class=\"item-heading\">\r\n                    {{ member.fullname }}\r\n                    <ion-icon name=\"fas-user-slash\" *ngIf=\"member.isblocked\"\r\n                        [attr.aria-label]=\"'addon.messages.contactblocked' | translate\">\r\n                    </ion-icon>\r\n                </p>\r\n            </ion-label>\r\n        </ion-item>\r\n\r\n        <core-infinite-loading [enabled]=\"canLoadMore\" (action)=\"loadMoreMembers($event)\" [error]=\"loadMoreError\">\r\n        </core-infinite-loading>\r\n    </core-loading>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/messages/pages/discussion/discussion.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/messages/pages/discussion/discussion.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <h1>\r\n            <img *ngIf=\"loaded && !otherMember && conversationImage\" class=\"core-bar-button-image\" [src]=\"conversationImage\"\r\n                alt=\"\" onError=\"this.src='assets/img/group-avatar.png'\" core-external-content role=\"presentation\"\r\n                [siteId]=\"siteId || null\">\r\n            <core-user-avatar *ngIf=\"loaded && otherMember\" class=\"core-bar-button-image\" [user]=\"otherMember\"\r\n                [linkProfile]=\"false\" [checkOnline]=\"otherMember.showonlinestatus\">\r\n            </core-user-avatar>\r\n            <core-format-text [text]=\"title\" contextLevel=\"system\" [contextInstanceId]=\"0\"></core-format-text>\r\n            <ion-icon *ngIf=\"conversation && conversation.isfavourite\" name=\"fas-star\"\r\n                [attr.aria-label]=\"'core.favourites' | translate\">\r\n            </ion-icon>\r\n            <ion-icon *ngIf=\"conversation && conversation.ismuted\" name=\"fas-bell-slash\"\r\n                [attr.aria-label]=\"'addon.messages.mutedconversation' | translate\">\r\n            </ion-icon>\r\n        </h1>\r\n        <ion-buttons slot=\"end\"></ion-buttons>\r\n    </ion-toolbar>\r\n    <core-navbar-buttons slot=\"end\">\r\n        <core-context-menu [attr.aria-label]=\"'addon.messages.conversationactions' | translate\">\r\n            <core-context-menu-item [hidden]=\"isSelf || !showInfo || isGroup\" [priority]=\"1000\"\r\n                [content]=\"'addon.messages.info' | translate\" (action)=\"viewInfo()\"\r\n                iconAction=\"fas-info-circle\"></core-context-menu-item>\r\n            <core-context-menu-item [hidden]=\"isSelf || !showInfo || !isGroup\" [priority]=\"1000\"\r\n                [content]=\"'addon.messages.groupinfo' | translate\" (action)=\"viewInfo()\"\r\n                iconAction=\"fas-info-circle\"></core-context-menu-item>\r\n            <core-context-menu-item [hidden]=\"!groupMessagingEnabled || !conversation\" [priority]=\"800\"\r\n                [content]=\"(conversation && conversation.isfavourite ? 'addon.messages.removefromfavourites' :\r\n                'addon.messages.addtofavourites') | translate\"\r\n                (action)=\"changeFavourite($event)\" [closeOnClick]=\"false\" [iconAction]=\"favouriteIcon\"\r\n                [iconSlash]=\"favouriteIconSlash\"></core-context-menu-item>\r\n            <core-context-menu-item [hidden]=\"isSelf || !otherMember || otherMember.isblocked\" [priority]=\"700\"\r\n                [content]=\"'addon.messages.blockuser' | translate\" (action)=\"blockUser()\" [iconAction]=\"blockIcon\">\r\n            </core-context-menu-item>\r\n            <core-context-menu-item [hidden]=\"isSelf || !otherMember || !otherMember.isblocked\" [priority]=\"700\"\r\n                [content]=\"'addon.messages.unblockuser' | translate\" (action)=\"unblockUser()\" [iconAction]=\"blockIcon\">\r\n            </core-context-menu-item>\r\n            <core-context-menu-item [hidden]=\"isSelf || !muteEnabled || !conversation\" [priority]=\"600\"\r\n                [content]=\"(conversation && conversation.ismuted ? 'addon.messages.unmuteconversation' :\r\n                'addon.messages.muteconversation') | translate\" (action)=\"changeMute($event)\" [closeOnClick]=\"false\"\r\n                [iconAction]=\"muteIcon\"></core-context-menu-item>\r\n            <core-context-menu-item [hidden]=\"!canDelete || !messages || !messages.length\" [priority]=\"400\"\r\n                [content]=\"'addon.messages.showdeletemessages' | translate\" (action)=\"toggleDelete()\"\r\n                [iconAction]=\"(showDelete ? 'far-check-square' : 'far-square')\"></core-context-menu-item>\r\n            <core-context-menu-item [hidden]=\"!groupMessagingEnabled || !conversationId || isGroup || !messages || !messages.length\"\r\n                [priority]=\"200\" [content]=\"'addon.messages.deleteconversation' | translate\" (action)=\"deleteConversation($event)\"\r\n                [closeOnClick]=\"false\" [iconAction]=\"deleteIcon\"></core-context-menu-item>\r\n            <core-context-menu-item\r\n                [hidden]=\"isSelf || !otherMember || otherMember.iscontact || requestContactSent || requestContactReceived\"\r\n                [priority]=\"100\" [content]=\"'addon.messages.addtoyourcontacts' | translate\" (action)=\"createContactRequest()\"\r\n                [iconAction]=\"addRemoveIcon\"></core-context-menu-item>\r\n            <core-context-menu-item [hidden]=\"isSelf || !otherMember || !otherMember.iscontact\" [priority]=\"100\"\r\n                [content]=\"'addon.messages.removefromyourcontacts' | translate\" (action)=\"removeContact()\"\r\n                [iconAction]=\"addRemoveIcon\" [iconSlash]=\"true\"></core-context-menu-item>\r\n        </core-context-menu>\r\n    </core-navbar-buttons>\r\n</ion-header>\r\n<ion-content class=\"has-footer\" (ionScroll)=\"scrollFunction()\">\r\n    <core-loading [hideUntil]=\"loaded\" class=\"safe-area-page\">\r\n        <!-- Load previous messages. -->\r\n        <core-infinite-loading [enabled]=\"canLoadMore\" (action)=\"loadPrevious($event)\" position=\"top\" [error]=\"loadMoreError\">\r\n        </core-infinite-loading>\r\n\r\n        <ng-container *ngIf=\"isSelf && !canLoadMore\">\r\n            <p class=\"ion-text-center\">{{ 'addon.messages.selfconversation' | translate }}</p>\r\n            <p class=\"ion-text-center\"><i>{{ 'addon.messages.selfconversationdefaultmessage' | translate }}</i></p>\r\n        </ng-container>\r\n\r\n        <h2 class=\"sr-only\">{{ title }}</h2>\r\n\r\n        <ion-list class=\"addon-messages-discussion-container\" [class.addon-messages-discussion-group]=\"isGroup\"\r\n            [attr.aria-live]=\"'polite'\">\r\n            <ng-container *ngFor=\"let message of messages; index as index; last as last\">\r\n                <h3 class=\"ion-text-center addon-messages-date\" *ngIf=\"message.showDate\">\r\n                    {{ message.timecreated | coreFormatDate: \"strftimedayshort\" }}\r\n                </h3>\r\n\r\n                <ion-chip class=\"addon-messages-unreadfrom\" *ngIf=\"unreadMessageFrom && message.id == unreadMessageFrom\"\r\n                    color=\"light\">\r\n                    <ion-label>{{ 'addon.messages.newmessages' | translate }}</ion-label>\r\n                    <ion-icon name=\"fas-arrow-down\" aria-hidden=\"true\"></ion-icon>\r\n                </ion-chip>\r\n\r\n                <ion-item class=\"ion-text-wrap addon-message\" (longPress)=\"copyMessage(message)\"\r\n                    [class.addon-message-mine]=\"message.useridfrom == currentUserId\"\r\n                    [class.addon-message-not-mine]=\"message.useridfrom != currentUserId\"\r\n                    [class.addon-message-no-user]=\"!message.showUserData\"\r\n                    [@coreSlideInOut]=\"message.useridfrom == currentUserId ? '' : 'fromLeft'\">\r\n                    <ion-label>\r\n                        <!-- User data. -->\r\n                        <div *ngIf=\"message.showUserData\" class=\"item-heading addon-message-user\">\r\n                            <core-user-avatar slot=\"start\" [user]=\"members[message.useridfrom]\" [linkProfile]=\"false\"\r\n                                aria-hidden=\"true\">\r\n                            </core-user-avatar>\r\n                            <div>{{ members[message.useridfrom].fullname }}</div>\r\n                        </div>\r\n                        <div *ngIf=\"!message.showUserData\" class=\"sr-only\">\r\n                            {{ message.useridfrom == currentUserId\r\n                            ? ('addon.messages.you' | translate)\r\n                            : members[message.useridfrom].fullname }}\r\n                        </div>\r\n\r\n                        <!-- Some messages have <p> and some others don't. Add a <p> so they all have same styles. -->\r\n                        <p class=\"addon-message-text\">\r\n                            <core-format-text (afterRender)=\"last && scrollToBottom()\" [text]=\"message.text\" contextLevel=\"system\"\r\n                                [contextInstanceId]=\"0\"></core-format-text>\r\n                        </p>\r\n                    </ion-label>\r\n                    <ion-note *ngIf=\"!message.pending\" slot=\"end\">{{ message.timecreated | coreFormatDate: \"strftimetime\" }}</ion-note>\r\n                    <ion-note *ngIf=\"message.pending\" slot=\"end\">\r\n                        <ion-icon name=\"fas-clock\" [attr.aria-label]=\"'core.notsent' | translate\" role=\"status\"></ion-icon>\r\n                    </ion-note>\r\n                    <ion-button fill=\"clear\" *ngIf=\"!message.sending && showDelete\" (click)=\"deleteMessage(message, index)\"\r\n                        class=\"addon-messages-delete-button\" [@coreSlideInOut]=\"'fromRight'\"\r\n                        [attr.aria-label]=\" 'addon.messages.deletemessage' | translate\" slot=\"end\">\r\n                        <ion-icon name=\"fas-trash\" color=\"danger\" slot=\"icon-only\" aria-hidden=\"true\"></ion-icon>\r\n                    </ion-button>\r\n\r\n                    <div class=\"tail\" *ngIf=\"message.showTail\"></div>\r\n                </ion-item>\r\n            </ng-container>\r\n        </ion-list>\r\n\r\n        <core-empty-box *ngIf=\"!messages || messages.length <= 0\" icon=\"far-comments\"\r\n            [message]=\"'addon.messages.nomessagesfound' | translate\"></core-empty-box>\r\n    </core-loading>\r\n    <!-- Scroll bottom. -->\r\n    <ion-fab slot=\"fixed\" core-fab vertical=\"bottom\" horizontal=\"end\" *ngIf=\"loaded && newMessages > 0\">\r\n        <ion-fab-button size=\"small\" (click)=\"scrollToFirstUnreadMessage()\" color=\"light\"\r\n            [attr.aria-label]=\"'addon.messages.newmessages' | translate\">\r\n            <ion-icon name=\"fas-arrow-down\" aria-hidden=\"true\"></ion-icon>\r\n            <span class=\"sr-only\">{{ 'addon.messages.newmessages' | translate }}</span>\r\n            <span class=\"core-discussion-messages-badge\">{{ newMessages }}</span>\r\n        </ion-fab-button>\r\n    </ion-fab>\r\n</ion-content>\r\n<ion-footer color=\"light\" class=\"footer-adjustable\" *ngIf=\"loaded && (!conversationId || conversation)\">\r\n    <ion-toolbar color=\"light\">\r\n        <p *ngIf=\"footerType == 'unable'\" class=\"ion-text-center ion-margin-horizontal\">\r\n            {{ 'addon.messages.unabletomessage' | translate }}\r\n        </p>\r\n        <div *ngIf=\"footerType == 'blocked'\" class=\"ion-padding-horizontal\">\r\n            <p class=\"ion-text-center\">{{ 'addon.messages.youhaveblockeduser' | translate }}</p>\r\n            <ion-button expand=\"block\" class=\"ion-text-wrap ion-margin-bottom\" (click)=\"unblockUser()\">\r\n                {{ 'addon.messages.unblockuser' | translate }}\r\n            </ion-button>\r\n        </div>\r\n        <div *ngIf=\"footerType == 'requiresContact' && otherMember\" class=\"ion-padding-horizontal\">\r\n            <p class=\"ion-text-center\">\r\n                <strong>{{ 'addon.messages.isnotinyourcontacts' | translate: {$a: otherMember.fullname} }}</strong>\r\n            </p>\r\n            <p class=\"ion-text-center\">{{ 'addon.messages.requirecontacttomessage' | translate: {$a: otherMember.fullname} }}</p>\r\n            <ion-button expand=\"block\" class=\"ion-text-wrap ion-margin-bottom\" (click)=\"createContactRequest()\">\r\n                {{ 'addon.messages.sendcontactrequest' | translate }}\r\n            </ion-button>\r\n        </div>\r\n        <div *ngIf=\"footerType == 'requestReceived' && otherMember\" class=\"ion-padding-horizontal\">\r\n            <p class=\"ion-text-center\">{{ 'addon.messages.userwouldliketocontactyou' | translate: {$a: otherMember.fullname} }}</p>\r\n            <ion-button expand=\"block\" class=\"ion-text-wrap ion-margin-bottom\" (click)=\"confirmContactRequest()\">\r\n                {{ 'addon.messages.acceptandaddcontact' | translate }}\r\n            </ion-button>\r\n            <ion-button expand=\"block\" class=\"ion-text-wrap ion-margin-bottom\" color=\"light\" (click)=\"declineContactRequest()\">\r\n                {{ 'addon.messages.decline' | translate }}\r\n            </ion-button>\r\n        </div>\r\n        <div *ngIf=\"footerType == 'requestSent' || (footerType == 'message' && requestContactSent)\" class=\"ion-padding-horizontal\">\r\n            <p class=\"ion-text-center\"><strong>{{ 'addon.messages.contactrequestsent' | translate }}</strong></p>\r\n            <p class=\"ion-text-center\" *ngIf=\"otherMember\">\r\n                {{ 'addon.messages.yourcontactrequestpending' | translate: {$a: otherMember.fullname} }}\r\n            </p>\r\n        </div>\r\n        <core-send-message-form *ngIf=\"footerType == 'message'\" (onSubmit)=\"sendMessage($event)\" [showKeyboard]=\"showKeyboard\"\r\n            [placeholder]=\"'addon.messages.newmessage' | translate\"></core-send-message-form>\r\n    </ion-toolbar>\r\n</ion-footer>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/forum/pages/discussion/discussion.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/forum/pages/discussion/discussion.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [text]=\"'core.back' | translate\"></ion-back-button>\r\n        </ion-buttons>\r\n        <h1 *ngIf=\"startingPost\">\r\n            <core-format-text contextLevel=\"module\" [text]=\"startingPost.subject\" [contextInstanceId]=\"cmId\" [courseId]=\"courseId\">\r\n            </core-format-text>\r\n        </h1>\r\n        <ion-buttons slot=\"end\">\r\n            <!-- The context menu will be added in here. -->\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<core-navbar-buttons slot=\"end\">\r\n    <core-context-menu>\r\n        <core-context-menu-item *ngIf=\"discussionLoaded && !postHasOffline && isOnline\"\r\n            [priority]=\"650\" [content]=\"'addon.mod_forum.refreshposts' | translate\" [iconAction]=\"refreshIcon\" [closeOnClick]=\"false\"\r\n            (action)=\"doRefresh(null, $event)\">\r\n        </core-context-menu-item>\r\n        <core-context-menu-item *ngIf=\"discussionLoaded && isMobile && postHasOffline && isOnline\"\r\n            [priority]=\"550\" [content]=\"'core.settings.synchronizenow' | translate\" [iconAction]=\"syncIcon\" [closeOnClick]=\"false\"\r\n            (action)=\"doRefresh(null, $event, true)\">\r\n        </core-context-menu-item>\r\n        <core-context-menu-item [hidden]=\"sort == 'flat-oldest'\"\r\n            [priority]=\"500\" [content]=\"'addon.mod_forum.modeflatoldestfirst' | translate\" iconAction=\"fas-arrow-down\"\r\n            (action)=\"changeSort('flat-oldest')\">\r\n        </core-context-menu-item>\r\n        <core-context-menu-item [hidden]=\"sort == 'flat-newest'\"\r\n            [priority]=\"450\" [content]=\"'addon.mod_forum.modeflatnewestfirst' | translate\" iconAction=\"fas-arrow-up\"\r\n            (action)=\"changeSort('flat-newest')\">\r\n        </core-context-menu-item>\r\n        <core-context-menu-item [hidden]=\"sort == 'nested'\"\r\n            [priority]=\"400\" [content]=\"'addon.mod_forum.modenested' | translate\" iconAction=\"fas-exchange-alt\"\r\n            (action)=\"changeSort('nested')\">\r\n        </core-context-menu-item>\r\n        <core-context-menu-item [hidden]=\"!discussion || !discussion.canlock || discussion.locked\"\r\n            [priority]=\"300\" [content]=\"'addon.mod_forum.lockdiscussion' | translate\" iconAction=\"fas-lock\"\r\n            (action)=\"setLockState(true)\">\r\n        </core-context-menu-item>\r\n        <core-context-menu-item [hidden]=\"!discussion || !discussion.canlock || !discussion.locked\"\r\n            [priority]=\"300\" [content]=\"'addon.mod_forum.unlockdiscussion' | translate\" iconAction=\"fas-unlock\"\r\n            (action)=\"setLockState(false)\">\r\n        </core-context-menu-item>\r\n        <core-context-menu-item [hidden]=\"!discussion || !canPin || discussion.pinned\"\r\n            [priority]=\"250\" [content]=\"'addon.mod_forum.pindiscussion' | translate\" iconAction=\"fas-map-pin\"\r\n            (action)=\"setPinState(true)\">\r\n        </core-context-menu-item>\r\n        <core-context-menu-item [hidden]=\"!discussion || !canPin || !discussion.pinned\"\r\n            [priority]=\"250\" [content]=\"'addon.mod_forum.unpindiscussion' | translate\" [iconSlash]=\"true\" iconAction=\"fas-map-pin\"\r\n            (action)=\"setPinState(false)\">\r\n        </core-context-menu-item>\r\n        <core-context-menu-item [hidden]=\"!discussion || !discussion.canfavourite || discussion.starred\"\r\n            [priority]=\"200\" [content]=\"'addon.mod_forum.addtofavourites' | translate\" iconAction=\"fas-star\"\r\n            (action)=\"toggleFavouriteState(true)\">\r\n        </core-context-menu-item>\r\n        <core-context-menu-item [hidden]=\"!discussion || !discussion.canfavourite || !discussion.starred\"\r\n            [priority]=\"200\" [content]=\"'addon.mod_forum.removefromfavourites' | translate\" iconAction=\"fas-star\" [iconSlash]=\"true\"\r\n            (action)=\"toggleFavouriteState(false)\">\r\n        </core-context-menu-item>\r\n    </core-context-menu>\r\n</core-navbar-buttons>\r\n<ion-content>\r\n    <ion-refresher slot=\"fixed\" [disabled]=\"!discussionLoaded\" (ionRefresh)=\"doRefresh($event.target)\">\r\n        <ion-refresher-content pullingText=\"{{ 'core.pulltorefresh' | translate }}\"></ion-refresher-content>\r\n    </ion-refresher>\r\n\r\n    <core-loading [hideUntil]=\"discussionLoaded\">\r\n        <!-- Discussion replies found to be synchronized -->\r\n        <ion-card class=\"core-warning-card\" *ngIf=\"postHasOffline || hasOfflineRatings\">\r\n            <ion-item>\r\n                <ion-icon name=\"fas-exclamation-triangle\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\r\n                <ion-label>{{ 'core.hasdatatosync' | translate:{$a: discussionStr} }}</ion-label>\r\n            </ion-item>\r\n        </ion-card>\r\n\r\n        <!-- Cut-off date or due date message -->\r\n        <ion-card class=\"core-info-card\" *ngIf=\"availabilityMessage\">\r\n            <ion-item>\r\n                <ion-icon name=\"fas-info-circle\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\r\n                <ion-label>{{ availabilityMessage }}</ion-label>\r\n            </ion-item>\r\n        </ion-card>\r\n\r\n        <ion-card class=\"core-info-card\" *ngIf=\"discussion && discussion.locked\">\r\n            <ion-item>\r\n                <ion-icon name=\"fas-lock\" slot=\"start\" aria-hidden=\"true\"></ion-icon>\r\n                <ion-label>{{ 'addon.mod_forum.discussionlocked' | translate }}</ion-label>\r\n            </ion-item>\r\n        </ion-card>\r\n\r\n        <div *ngIf=\"startingPost\" class=\"ion-margin-bottom\">\r\n            <addon-mod-forum-post\r\n                [post]=\"startingPost\" [discussion]=\"discussion\" [courseId]=\"courseId\" [highlight]=\"true\"\r\n                [discussionId]=\"discussionId\" [component]=\"component\" [componentId]=\"cmId\"\r\n                [replyData]=\"replyData\" [originalData]=\"originalData\" [forum]=\"forum\" [accessInfo]=\"accessInfo\"\r\n                [trackPosts]=\"trackPosts\" [ratingInfo]=\"ratingInfo\" [leavingPage]=\"leavingPage\"\r\n                (onPostChange)=\"postListChanged()\">\r\n            </addon-mod-forum-post>\r\n        </div>\r\n\r\n        <ion-card *ngIf=\"sort != 'nested'\">\r\n            <ng-container *ngFor=\"let post of posts; first as first\">\r\n                <core-spacer *ngIf=\"!first\"></core-spacer>\r\n                <addon-mod-forum-post\r\n                    [post]=\"post\" [courseId]=\"courseId\" [discussionId]=\"discussionId\"\r\n                    [component]=\"component\" [componentId]=\"cmId\" [replyData]=\"replyData\"\r\n                    [originalData]=\"originalData\" [parentSubject]=\"postSubjects[post.parentid]\"\r\n                    [forum]=\"forum\" [accessInfo]=\"accessInfo\" [trackPosts]=\"trackPosts\" [ratingInfo]=\"ratingInfo\"\r\n                    [leavingPage]=\"leavingPage\"\r\n                    (onPostChange)=\"postListChanged()\">\r\n                </addon-mod-forum-post>\r\n            </ng-container>\r\n        </ion-card>\r\n\r\n        <ng-container *ngIf=\"sort == 'nested'\">\r\n            <ng-container *ngFor=\"let post of posts\">\r\n                <ng-container *ngTemplateOutlet=\"nestedPosts; context: {post: post}\"></ng-container>\r\n            </ng-container>\r\n        </ng-container>\r\n\r\n        <ng-template #nestedPosts let-post=\"post\">\r\n            <ion-card>\r\n                <addon-mod-forum-post\r\n                    [post]=\"post\" [courseId]=\"courseId\" [discussionId]=\"discussionId\" [component]=\"component\"\r\n                    [componentId]=\"cmId\" [replyData]=\"replyData\" [originalData]=\"originalData\"\r\n                    [parentSubject]=\"postSubjects[post.parentid]\" [forum]=\"forum\" [accessInfo]=\"accessInfo\"\r\n                    [trackPosts]=\"trackPosts\" [ratingInfo]=\"ratingInfo\" [leavingPage]=\"leavingPage\"\r\n                    (onPostChange)=\"postListChanged()\">\r\n                </addon-mod-forum-post>\r\n            </ion-card>\r\n            <div class=\"ion-padding-start\" *ngIf=\"post.children && post.children.length && post.children[0].subject\">\r\n                <ng-container *ngFor=\"let child of post.children\">\r\n                    <ng-container *ngTemplateOutlet=\"nestedPosts; context: {post: child}\"></ng-container>\r\n                </ng-container>\r\n            </div>\r\n        </ng-template>\r\n    </core-loading>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/addons/messages/components/components.module.ts":
/*!*************************************************************!*\
  !*** ./src/addons/messages/components/components.module.ts ***!
  \*************************************************************/
/*! exports provided: AddonMessagesComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonMessagesComponentsModule", function() { return AddonMessagesComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _conversation_info_conversation_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./conversation-info/conversation-info */ "./src/addons/messages/components/conversation-info/conversation-info.ts");
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




let AddonMessagesComponentsModule = class AddonMessagesComponentsModule {
};
AddonMessagesComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _conversation_info_conversation_info__WEBPACK_IMPORTED_MODULE_3__["AddonMessagesConversationInfoComponent"],
        ],
        imports: [
            _core_shared_module__WEBPACK_IMPORTED_MODULE_2__["CoreSharedModule"],
        ],
    })
], AddonMessagesComponentsModule);



/***/ }),

/***/ "./src/addons/messages/components/conversation-info/conversation-info.ts":
/*!*******************************************************************************!*\
  !*** ./src/addons/messages/components/conversation-info/conversation-info.ts ***!
  \*******************************************************************************/
/*! exports provided: AddonMessagesConversationInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonMessagesConversationInfoComponent", function() { return AddonMessagesConversationInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/messages */ "./src/addons/messages/services/messages.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
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
 * Component that displays the list of conversations, including group conversations.
 */
let AddonMessagesConversationInfoComponent = class AddonMessagesConversationInfoComponent {
    constructor(route) {
        this.route = route;
        this.conversationId = 0;
        this.loaded = false;
        this.members = [];
        this.canLoadMore = false;
        this.loadMoreError = false;
    }
    /**
     * Component loaded.
     */
    ngOnInit() {
        this.fetchData().finally(() => {
            this.loaded = true;
        });
    }
    /**
     * Fetch the required data.
     *
     * @return Promise resolved when done.
     */
    fetchData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Get the conversation data first.
            try {
                const conversation = yield _services_messages__WEBPACK_IMPORTED_MODULE_2__["AddonMessages"].getConversation(this.conversationId, false, true, 0, 0);
                this.conversation = conversation;
                // Now get the members.
                yield this.fetchMembers();
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__["CoreDomUtils"].showErrorModalDefault(error, 'Error getting members.');
            }
        });
    }
    /**
     * Get conversation members.
     *
     * @param loadingMore Whether we are loading more data or just the first ones.
     * @return Promise resolved when done.
     */
    fetchMembers(loadingMore) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loadMoreError = false;
            const limitFrom = loadingMore ? this.members.length : 0;
            const data = yield _services_messages__WEBPACK_IMPORTED_MODULE_2__["AddonMessages"].getConversationMembers(this.conversationId, limitFrom);
            if (loadingMore) {
                this.members = this.members.concat(data.members);
            }
            else {
                this.members = data.members;
            }
            this.canLoadMore = data.canLoadMore;
        });
    }
    /**
     * Function to load more members.
     *
     * @param infiniteComplete Infinite scroll complete function. Only used from core-infinite-loading.
     * @return Resolved when done.
     */
    loadMoreMembers(infiniteComplete) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.fetchMembers(true);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_3__["CoreDomUtils"].showErrorModalDefault(error, 'Error getting members.');
                this.loadMoreError = true;
            }
            finally {
                infiniteComplete && infiniteComplete();
            }
        });
    }
    /**
     * Refresh the data.
     *
     * @param refresher Refresher.
     * @return Promise resolved when done.
     */
    refreshData(refresher) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const promises = [];
            promises.push(_services_messages__WEBPACK_IMPORTED_MODULE_2__["AddonMessages"].invalidateConversation(this.conversationId));
            promises.push(_services_messages__WEBPACK_IMPORTED_MODULE_2__["AddonMessages"].invalidateConversationMembers(this.conversationId));
            yield Promise.all(promises);
            yield this.fetchData().finally(() => {
                refresher === null || refresher === void 0 ? void 0 : refresher.complete();
            });
        });
    }
    /**
     * Close modal.
     *
     * @param userId User conversation to load.
     */
    closeModal(userId) {
        _singletons__WEBPACK_IMPORTED_MODULE_5__["ModalController"].dismiss(userId);
    }
};
AddonMessagesConversationInfoComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
AddonMessagesConversationInfoComponent.propDecorators = {
    conversationId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
AddonMessagesConversationInfoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-messages-conversation-info',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./conversation-info.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/messages/components/conversation-info/conversation-info.html")).default,
    })
], AddonMessagesConversationInfoComponent);



/***/ }),

/***/ "./src/addons/messages/pages/discussion/discussion.module.ts":
/*!*******************************************************************!*\
  !*** ./src/addons/messages/pages/discussion/discussion.module.ts ***!
  \*******************************************************************/
/*! exports provided: AddonMessagesDiscussionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonMessagesDiscussionPageModule", function() { return AddonMessagesDiscussionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _discussion_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./discussion.page */ "./src/addons/messages/pages/discussion/discussion.page.ts");
/* harmony import */ var _addons_messages_components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @addons/messages/components/components.module */ "./src/addons/messages/components/components.module.ts");
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
        component: _discussion_page__WEBPACK_IMPORTED_MODULE_4__["AddonMessagesDiscussionPage"],
    },
];
let AddonMessagesDiscussionPageModule = class AddonMessagesDiscussionPageModule {
};
AddonMessagesDiscussionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_3__["CoreSharedModule"],
            _addons_messages_components_components_module__WEBPACK_IMPORTED_MODULE_5__["AddonMessagesComponentsModule"],
        ],
        declarations: [
            _discussion_page__WEBPACK_IMPORTED_MODULE_4__["AddonMessagesDiscussionPage"],
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddonMessagesDiscussionPageModule);



/***/ }),

/***/ "./src/addons/messages/pages/discussion/discussion.page.ts":
/*!*****************************************************************!*\
  !*** ./src/addons/messages/pages/discussion/discussion.page.ts ***!
  \*****************************************************************/
/*! exports provided: AddonMessagesDiscussionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonMessagesDiscussionPage", function() { return AddonMessagesDiscussionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/messages */ "./src/addons/messages/services/messages.ts");
/* harmony import */ var _services_messages_offline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/messages-offline */ "./src/addons/messages/services/messages-offline.ts");
/* harmony import */ var _services_messages_sync__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/messages-sync */ "./src/addons/messages/services/messages-sync.ts");
/* harmony import */ var _features_user_services_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @features/user/services/user */ "./src/core/features/user/services/user.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _services_utils_text__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @services/utils/text */ "./src/core/services/utils/text.ts");
/* harmony import */ var _singletons_logger__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @singletons/logger */ "./src/core/singletons/logger.ts");
/* harmony import */ var _services_app__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @services/app */ "./src/core/services/app.ts");
/* harmony import */ var _components_infinite_loading_infinite_loading__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @components/infinite-loading/infinite-loading */ "./src/core/components/infinite-loading/infinite-loading.ts");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ts-md5/dist/md5 */ "./node_modules/ts-md5/dist/md5.js");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _components_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @components/animations */ "./src/core/components/animations.ts");
/* harmony import */ var _classes_errors_error__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @classes/errors/error */ "./src/core/classes/errors/error.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_conversation_info_conversation_info__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../components/conversation-info/conversation-info */ "./src/addons/messages/components/conversation-info/conversation-info.ts");
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @/core/constants */ "./src/core/constants.ts");
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
 * Page that displays a message discussion page.
 */
let AddonMessagesDiscussionPage = class AddonMessagesDiscussionPage {
    constructor(route, elementRef) {
        this.route = route;
        this.elementRef = elementRef;
        this.fetching = false;
        this.messagesBeingSent = 0;
        this.pagesLoaded = 1;
        this.lastMessage = { text: '', timecreated: 0 };
        this.keepMessageMap = {};
        this.oldContentHeight = 0;
        this.scrollBottom = true;
        this.viewDestroyed = false;
        this.showLoadingModal = false; // Whether to show a loading modal while fetching data.
        this.showInfo = false;
        this.loaded = false;
        this.showKeyboard = false;
        this.canLoadMore = false;
        this.loadMoreError = false;
        this.messages = [];
        this.showDelete = false;
        this.canDelete = false;
        this.isGroup = false;
        this.members = {}; // Members that wrote a message, indexed by ID.
        this.favouriteIcon = 'fa-star';
        this.deleteIcon = 'fas-trash';
        this.blockIcon = 'fas-user-lock';
        this.addRemoveIcon = 'fas-user-plus';
        this.muteIcon = 'fas-bell-slash';
        this.favouriteIconSlash = false;
        this.muteEnabled = false;
        this.footerType = 'unable';
        this.requestContactSent = false;
        this.requestContactReceived = false;
        this.isSelf = false;
        this.newMessages = 0;
        this.unreadMessageFrom = 0;
        this.initialized = false;
        this.hostElement = elementRef.nativeElement;
        this.siteId = _services_sites__WEBPACK_IMPORTED_MODULE_4__["CoreSites"].getCurrentSiteId();
        this.currentUserId = _services_sites__WEBPACK_IMPORTED_MODULE_4__["CoreSites"].getCurrentSiteUserId();
        this.groupMessagingEnabled = _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].isGroupMessagingEnabled();
        this.muteEnabled = _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].isMuteConversationEnabled();
        this.logger = _singletons_logger__WEBPACK_IMPORTED_MODULE_12__["CoreLogger"].getInstance('AddonMessagesDiscussionPage');
        // Refresh data if this discussion is synchronized automatically.
        this.syncObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].on(_services_messages_sync__WEBPACK_IMPORTED_MODULE_7__["AddonMessagesSyncProvider"].AUTO_SYNCED, (data) => {
            if ((data.userId && data.userId == this.userId) ||
                (data.conversationId && data.conversationId == this.conversationId)) {
                // Fetch messages.
                this.fetchMessages();
                // Show first warning if any.
                if (data.warnings && data.warnings[0]) {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModal(data.warnings[0]);
                }
            }
        }, this.siteId);
        // Refresh data if info of a mamber of the conversation have changed.
        this.memberInfoObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].on(_services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessagesProvider"].MEMBER_INFO_CHANGED_EVENT, (data) => {
            if (data.userId && (this.members[data.userId] || this.otherMember && data.userId == this.otherMember.id)) {
                this.fetchData();
            }
        }, this.siteId);
    }
    /**
     * Runs when the page has loaded. This event only happens once per page being created.
     * If a page leaves but is cached, then this event will not fire again on a subsequent viewing.
     * Setup code for the page.
     */
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.route.queryParams.subscribe((params) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const oldConversationId = this.conversationId;
                const oldUserId = this.userId;
                let forceScrollToBottom = false;
                this.conversationId = _services_navigator__WEBPACK_IMPORTED_MODULE_20__["CoreNavigator"].getRouteNumberParam('conversationId', { params }) || undefined;
                this.userId = _services_navigator__WEBPACK_IMPORTED_MODULE_20__["CoreNavigator"].getRouteNumberParam('userId', { params }) || undefined;
                this.showInfo = !params.hideInfo;
                if (oldConversationId != this.conversationId || oldUserId != this.userId) {
                    // Showing reload again can break animations.
                    this.loaded = false;
                    this.initialized = false;
                    forceScrollToBottom = true;
                }
                this.showKeyboard = _services_navigator__WEBPACK_IMPORTED_MODULE_20__["CoreNavigator"].getRouteBooleanParam('showKeyboard', { params }) || false;
                yield this.fetchData();
                this.scrollToBottom(forceScrollToBottom);
            }));
        });
    }
    /**
     * View has been initialized.
     */
    ngAfterViewInit() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.scrollElement = yield ((_a = this.content) === null || _a === void 0 ? void 0 : _a.getScrollElement());
        });
    }
    /**
     * Adds a new message to the message list.
     *
     * @param message Message to be added.
     * @param keep If set the keep flag or not.
     * @return If message is not mine and was recently added.
     */
    addMessage(message, keep = true) {
        /* Create a hash to identify the message. The text of online messages isn't reliable because it can have random data
           like VideoJS ID. Try to use id and fallback to text for offline messages. */
        const id = 'id' in message ? message.id : '';
        message.hash = ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_15__["Md5"].hashAsciiStr(String(id || message.text || '')) + '#' + message.timecreated + '#' +
            message.useridfrom;
        let added = false;
        if (typeof this.keepMessageMap[message.hash] === 'undefined') {
            // Message not added to the list. Add it now.
            this.messages.push(message);
            added = message.useridfrom != this.currentUserId;
        }
        // Message needs to be kept in the list.
        this.keepMessageMap[message.hash] = keep;
        return added;
    }
    /**
     * Remove a message if it shouldn't be in the list anymore.
     *
     * @param hash Hash of the message to be removed.
     */
    removeMessage(hash) {
        if (this.keepMessageMap[hash]) {
            // Selected to keep it, clear the flag.
            this.keepMessageMap[hash] = false;
            return;
        }
        delete this.keepMessageMap[hash];
        const position = this.messages.findIndex((message) => message.hash == hash);
        if (position >= 0) {
            this.messages.splice(position, 1);
        }
    }
    /**
     * Convenience function to fetch the conversation data.
     *
     * @return Resolved when done.
     */
    fetchData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let loader;
            if (this.showLoadingModal) {
                loader = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showModalLoading();
            }
            if (!this.groupMessagingEnabled && this.userId) {
                // Get the user profile to retrieve the user fullname and image.
                _features_user_services_user__WEBPACK_IMPORTED_MODULE_8__["CoreUser"].getProfile(this.userId, undefined, true).then((user) => {
                    if (!this.title) {
                        this.title = user.fullname;
                    }
                    this.conversationImage = user.profileimageurl;
                    this.members[user.id] = user;
                    return;
                }).catch(() => {
                    // Ignore errors.
                });
            }
            // Synchronize messages if needed.
            try {
                const syncResult = yield _services_messages_sync__WEBPACK_IMPORTED_MODULE_7__["AddonMessagesSync"].syncDiscussion(this.conversationId, this.userId);
                if (syncResult.warnings && syncResult.warnings[0]) {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModal(syncResult.warnings[0]);
                }
            }
            catch (_a) {
                // Ignore errors;
            }
            try {
                const promises = [];
                if (this.groupMessagingEnabled) {
                    // Get the conversation ID if it exists and we don't have it yet.
                    const exists = yield this.getConversation(this.conversationId, this.userId);
                    if (exists) {
                        // Fetch the messages for the first time.
                        promises.push(this.fetchMessages());
                    }
                    if (this.userId) {
                        // Get the member info. Invalidate first to make sure we get the latest status.
                        promises.push(_services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].invalidateMemberInfo(this.userId).then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            this.otherMember = yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].getMemberInfo(this.userId);
                            if (!exists && this.otherMember) {
                                this.conversationImage = this.otherMember.profileimageurl;
                                this.title = this.otherMember.fullname;
                            }
                            this.blockIcon = this.otherMember.isblocked ? 'fas-user-check' : 'fas-user-lock';
                            return;
                        })));
                    }
                    else {
                        this.otherMember = undefined;
                    }
                }
                else {
                    if (this.userId) {
                        // Fake the user member info.
                        promises.push(_features_user_services_user__WEBPACK_IMPORTED_MODULE_8__["CoreUser"].getProfile(this.userId).then((user) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            this.otherMember = {
                                id: user.id,
                                fullname: user.fullname,
                                profileurl: '',
                                profileimageurl: user.profileimageurl || '',
                                profileimageurlsmall: user.profileimageurlsmall || '',
                                isonline: false,
                                showonlinestatus: false,
                                isblocked: false,
                                iscontact: false,
                                isdeleted: false,
                                canmessageevenifblocked: true,
                                canmessage: true,
                                requirescontact: false,
                            };
                            this.otherMember.isblocked = yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].isBlocked(this.userId);
                            this.otherMember.iscontact = yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].isContact(this.userId);
                            this.blockIcon = this.otherMember.isblocked ? 'fas-user-check' : 'fas-user-lock';
                            return;
                        })));
                    }
                    // Fetch the messages for the first time.
                    promises.push(this.fetchMessages().then(() => {
                        if (!this.title && this.messages.length) {
                            // Didn't receive the fullname via argument. Try to get it from messages.
                            // It's possible that name cannot be resolved when no messages were yet exchanged.
                            const firstMessage = this.messages[0];
                            if ('usertofullname' in firstMessage) {
                                if (firstMessage.useridto != this.currentUserId) {
                                    this.title = firstMessage.usertofullname || '';
                                }
                                else {
                                    this.title = firstMessage.userfromfullname || '';
                                }
                            }
                        }
                        return;
                    }));
                }
                yield Promise.all(promises);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'addon.messages.errorwhileretrievingmessages', true);
            }
            finally {
                this.checkCanDelete();
                this.loaded = true;
                this.setPolling(); // Make sure we're polling messages.
                this.setContactRequestInfo();
                this.setFooterType();
                loader && loader.dismiss();
            }
        });
    }
    /**
     * Runs when the page has fully entered and is now the active page.
     * This event will fire, whether it was the first load or a cached page.
     */
    ionViewDidEnter() {
        this.setPolling();
    }
    /**
     * Runs when the page is about to leave and no longer be the active page.
     */
    ionViewWillLeave() {
        this.unsetPolling();
    }
    /**
     * Convenience function to fetch messages.
     *
     * @param messagesAreNew If messages loaded are new messages.
     * @return Resolved when done.
     */
    fetchMessages(messagesAreNew = true) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loadMoreError = false;
            if (this.messagesBeingSent > 0) {
                // We do not poll while a message is being sent or we could confuse the user.
                // Otherwise, his message would disappear from the list, and he'd have to wait for the interval to check for messages.
                return;
            }
            else if (this.fetching) {
                // Already fetching.
                return;
            }
            else if (this.groupMessagingEnabled && !this.conversationId) {
                // Don't have enough data to fetch messages.
                throw new _classes_errors_error__WEBPACK_IMPORTED_MODULE_18__["CoreError"]('No enough data provided to fetch messages');
            }
            if (this.conversationId) {
                this.logger.debug(`Polling new messages for conversation '${this.conversationId}'`);
            }
            else if (this.userId) {
                this.logger.debug(`Polling new messages for discussion with user '${this.userId}'`);
            }
            else {
                // Should not happen.
                throw new _classes_errors_error__WEBPACK_IMPORTED_MODULE_18__["CoreError"]('No enough data provided to fetch messages');
            }
            this.fetching = true;
            try {
                // Wait for synchronization process to finish.
                yield _services_messages_sync__WEBPACK_IMPORTED_MODULE_7__["AddonMessagesSync"].waitForSyncConversation(this.conversationId, this.userId);
                let messages = [];
                // Fetch messages. Invalidate the cache before fetching.
                if (this.groupMessagingEnabled) {
                    yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].invalidateConversationMessages(this.conversationId);
                    messages = yield this.getConversationMessages(this.pagesLoaded);
                }
                else {
                    yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].invalidateDiscussionCache(this.userId);
                    messages = yield this.getDiscussionMessages(this.pagesLoaded);
                }
                this.loadMessages(messages, messagesAreNew);
            }
            finally {
                this.fetching = false;
            }
        });
    }
    /**
     * Format and load a list of messages into the view.
     *
     * @param messagesAreNew If messages loaded are new messages.
     * @param messages Messages to load.
     */
    loadMessages(messages, messagesAreNew = true) {
        var _a, _b;
        if (this.viewDestroyed) {
            return;
        }
        // Don't use domUtils.getScrollHeight because it gives an outdated value after receiving a new message.
        const scrollHeight = this.scrollElement ? this.scrollElement.scrollHeight : 0;
        // Check if we are at the bottom to scroll it after render.
        // Use a 5px error margin because in iOS there is 1px difference for some reason.
        this.scrollBottom = Math.abs(scrollHeight - (((_a = this.scrollElement) === null || _a === void 0 ? void 0 : _a.scrollTop) || 0) -
            (((_b = this.scrollElement) === null || _b === void 0 ? void 0 : _b.clientHeight) || 0)) < 5;
        if (this.messagesBeingSent > 0) {
            // Ignore polling due to a race condition.
            return;
        }
        // Add new messages to the list and mark the messages that should still be displayed.
        const newMessages = messages.reduce((val, message) => val + (this.addMessage(message) ? 1 : 0), 0);
        // Set the new badges message if we're loading new messages.
        if (messagesAreNew) {
            this.setNewMessagesBadge(this.newMessages + newMessages);
        }
        // Remove messages that shouldn't be in the list anymore.
        for (const hash in this.keepMessageMap) {
            this.removeMessage(hash);
        }
        // Sort the messages.
        _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].sortMessages(this.messages);
        // Calculate which messages need to display the date or user data.
        this.messages.forEach((message, index) => {
            message.showDate = this.showDate(message, this.messages[index - 1]);
            message.showUserData = this.showUserData(message, this.messages[index - 1]);
            message.showTail = this.showTail(message, this.messages[index + 1]);
        });
        // If we received a new message while using group messaging, force mark messages as read.
        const last = this.messages[this.messages.length - 1];
        const forceMark = this.groupMessagingEnabled && last && last.useridfrom != this.currentUserId && this.lastMessage.text != ''
            && (last.text !== this.lastMessage.text || last.timecreated !== this.lastMessage.timecreated);
        // Notify that there can be a new message.
        this.notifyNewMessage();
        // Mark retrieved messages as read if they are not.
        this.markMessagesAsRead(forceMark);
    }
    /**
     * Set the new message badge number and set scroll listener if needed.
     *
     * @param addMessages NUmber of messages still to be read.
     */
    setNewMessagesBadge(addMessages) {
        if (this.newMessages == 0 && addMessages > 0) {
            // Setup scrolling.
            this.content.scrollEvents = true;
            this.scrollFunction();
        }
        else if (this.newMessages > 0 && addMessages == 0) {
            // Remove scrolling.
            this.content.scrollEvents = false;
        }
        this.newMessages = addMessages;
    }
    /**
     * The scroll was moved. Update new messages count.
     */
    scrollFunction() {
        var _a, _b, _c, _d;
        if (this.newMessages > 0) {
            const scrollBottom = (((_a = this.scrollElement) === null || _a === void 0 ? void 0 : _a.scrollTop) || 0) + (((_b = this.scrollElement) === null || _b === void 0 ? void 0 : _b.clientHeight) || 0);
            const scrollHeight = (((_c = this.scrollElement) === null || _c === void 0 ? void 0 : _c.scrollHeight) || 0);
            if (scrollBottom > scrollHeight - 40) {
                // At the bottom, reset.
                this.setNewMessagesBadge(0);
                return;
            }
            const scrollElRect = (_d = this.scrollElement) === null || _d === void 0 ? void 0 : _d.getBoundingClientRect();
            const scrollBottomPos = (scrollElRect && scrollElRect.bottom) || 0;
            if (scrollBottomPos == 0) {
                return;
            }
            const messages = Array.from(this.hostElement.querySelectorAll('.addon-message-not-mine'))
                .slice(-this.newMessages)
                .reverse();
            const newMessagesUnread = messages.findIndex((message) => {
                const elementRect = message.getBoundingClientRect();
                if (!elementRect) {
                    return false;
                }
                return elementRect.bottom <= scrollBottomPos;
            });
            if (newMessagesUnread > 0 && newMessagesUnread < this.newMessages) {
                this.setNewMessagesBadge(newMessagesUnread);
            }
        }
    }
    /**
     * Get the conversation.
     *
     * @param conversationId Conversation ID.
     * @param userId User ID.
     * @return Promise resolved with a boolean: whether the conversation exists or not.
     */
    getConversation(conversationId, userId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let fallbackConversation;
            // Try to get the conversationId if we don't have it.
            if (!conversationId && userId) {
                try {
                    if (userId == this.currentUserId && _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].isSelfConversationEnabled()) {
                        fallbackConversation = yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].getSelfConversation();
                    }
                    else {
                        fallbackConversation = yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].getConversationBetweenUsers(userId, undefined, true);
                    }
                    conversationId = fallbackConversation.id;
                }
                catch (error) {
                    // Probably conversation does not exist or user is offline. Try to load offline messages.
                    this.isSelf = userId == this.currentUserId;
                    const messages = yield _services_messages_offline__WEBPACK_IMPORTED_MODULE_6__["AddonMessagesOffline"].getMessages(userId);
                    if (messages && messages.length) {
                        // We have offline messages, this probably means that the conversation didn't exist. Don't display error.
                        messages.forEach((message) => {
                            message.pending = true;
                            message.text = message.smallmessage;
                        });
                        this.loadMessages(messages);
                    }
                    else if (error.errorcode != 'errorconversationdoesnotexist') {
                        // Display the error.
                        throw error;
                    }
                    return false;
                }
            }
            // Retrieve the conversation. Invalidate data first to get the right unreadcount.
            yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].invalidateConversation(conversationId);
            try {
                this.conversation = yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].getConversation(conversationId, undefined, true);
            }
            catch (error) {
                // Get conversation failed, use the fallback one if we have it.
                if (fallbackConversation) {
                    this.conversation = fallbackConversation;
                }
                else {
                    throw error;
                }
            }
            if (this.conversation) {
                this.conversationId = this.conversation.id;
                this.title = this.conversation.name;
                this.conversationImage = this.conversation.imageurl;
                this.isGroup = this.conversation.type == _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessagesProvider"].MESSAGE_CONVERSATION_TYPE_GROUP;
                this.favouriteIcon = 'fas-star';
                this.favouriteIconSlash = this.conversation.isfavourite;
                this.muteIcon = this.conversation.ismuted ? 'fas-bell' : 'fas-bell-slash';
                if (!this.isGroup) {
                    this.userId = this.conversation.userid;
                }
                this.isSelf = this.conversation.type == _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessagesProvider"].MESSAGE_CONVERSATION_TYPE_SELF;
                return true;
            }
            else {
                return false;
            }
        });
    }
    /**
     * Get the messages of the conversation. Used if group messaging is supported.
     *
     * @param pagesToLoad Number of "pages" to load.
     * @param offset Offset for message list.
     * @return Promise resolved with the list of messages.
     */
    getConversationMessages(pagesToLoad, offset = 0) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.conversationId) {
                return [];
            }
            const excludePending = offset > 0;
            const result = yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].getConversationMessages(this.conversationId, {
                excludePending: excludePending,
                limitFrom: offset,
            });
            pagesToLoad--;
            // Treat members. Don't use CoreUtilsProvider.arrayToObject because we don't want to override the existing object.
            if (result.members) {
                result.members.forEach((member) => {
                    this.members[member.id] = member;
                });
            }
            const messages = result.messages;
            if (pagesToLoad > 0 && result.canLoadMore) {
                offset += _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessagesProvider"].LIMIT_MESSAGES;
                // Get more messages.
                const nextMessages = yield this.getConversationMessages(pagesToLoad, offset);
                return messages.concat(nextMessages);
            }
            // No more messages to load, return them.
            this.canLoadMore = !!result.canLoadMore;
            return messages;
        });
    }
    /**
     * Get a discussion. Can load several "pages".
     *
     * @param pagesToLoad Number of pages to load.
     * @param lfReceivedUnread Number of unread received messages already fetched, so fetch will be done from this.
     * @param lfReceivedRead Number of read received messages already fetched, so fetch will be done from this.
     * @param lfSentUnread Number of unread sent messages already fetched, so fetch will be done from this.
     * @param lfSentRead Number of read sent messages already fetched, so fetch will be done from this.
     * @return Resolved when done.
     */
    getDiscussionMessages(pagesToLoad, lfReceivedUnread = 0, lfReceivedRead = 0, lfSentUnread = 0, lfSentRead = 0) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Only get offline messages if we're loading the first "page".
            const excludePending = lfReceivedUnread > 0 || lfReceivedRead > 0 || lfSentUnread > 0 || lfSentRead > 0;
            // Get next messages.
            const result = yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].getDiscussion(this.userId, excludePending, lfReceivedUnread, lfReceivedRead, lfSentUnread, lfSentRead);
            pagesToLoad--;
            if (pagesToLoad > 0 && result.canLoadMore) {
                // More pages to load. Calculate new limit froms.
                result.messages.forEach((message) => {
                    if (!message.pending && 'read' in message) {
                        if (message.useridfrom == this.userId) {
                            if (message.read) {
                                lfReceivedRead++;
                            }
                            else {
                                lfReceivedUnread++;
                            }
                        }
                        else {
                            if (message.read) {
                                lfSentRead++;
                            }
                            else {
                                lfSentUnread++;
                            }
                        }
                    }
                });
                // Get next messages.
                const nextMessages = yield this.getDiscussionMessages(pagesToLoad, lfReceivedUnread, lfReceivedRead, lfSentUnread, lfSentRead);
                return result.messages.concat(nextMessages);
            }
            else {
                // No more messages to load, return them.
                this.canLoadMore = result.canLoadMore;
                return result.messages;
            }
        });
    }
    /**
     * Mark messages as read.
     */
    markMessagesAsRead(forceMark) {
        var _a, _b;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let readChanged = false;
            if (_services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].isMarkAllMessagesReadEnabled()) {
                let messageUnreadFound = false;
                // Mark all messages at a time if there is any unread message.
                if (forceMark) {
                    messageUnreadFound = true;
                }
                else if (this.groupMessagingEnabled) {
                    messageUnreadFound = !!((((_a = this.conversation) === null || _a === void 0 ? void 0 : _a.unreadcount) && ((_b = this.conversation) === null || _b === void 0 ? void 0 : _b.unreadcount) > 0) &&
                        (this.conversationId && this.conversationId > 0));
                }
                else {
                    // If an unread message is found, mark all messages as read.
                    messageUnreadFound = this.messages.some((message) => message.useridfrom != this.currentUserId && ('read' in message && !message.read));
                }
                if (messageUnreadFound) {
                    this.setUnreadLabelPosition();
                    if (this.groupMessagingEnabled) {
                        yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].markAllConversationMessagesRead(this.conversationId);
                    }
                    else {
                        yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].markAllMessagesRead(this.userId);
                        // Mark all messages as read.
                        this.messages.forEach((message) => {
                            if ('read' in message) {
                                message.read = true;
                            }
                        });
                    }
                    readChanged = true;
                }
            }
            else {
                this.setUnreadLabelPosition();
                const promises = [];
                // Mark each message as read one by one.
                this.messages.forEach((message) => {
                    // If the message is unread, call AddonMessages.markMessageRead.
                    if (message.useridfrom != this.currentUserId && 'read' in message && !message.read) {
                        promises.push(_services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].markMessageRead(message.id).then(() => {
                            readChanged = true;
                            message.read = true;
                            return;
                        }));
                    }
                });
                yield Promise.all(promises);
            }
            if (readChanged) {
                _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].trigger(_services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessagesProvider"].READ_CHANGED_EVENT, {
                    conversationId: this.conversationId,
                    userId: this.userId,
                }, this.siteId);
            }
        });
    }
    /**
     * Notify the last message found so discussions list controller can tell if last message should be updated.
     */
    notifyNewMessage() {
        var _a, _b;
        const last = this.messages[this.messages.length - 1];
        let trigger = false;
        if (!last) {
            this.lastMessage = { text: '', timecreated: 0 };
            trigger = true;
        }
        else if (last.text !== this.lastMessage.text || last.timecreated !== this.lastMessage.timecreated) {
            this.lastMessage = { text: last.text || '', timecreated: last.timecreated };
            trigger = true;
        }
        if (trigger) {
            // Update discussions last message.
            _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].trigger(_services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessagesProvider"].NEW_MESSAGE_EVENT, {
                conversationId: this.conversationId,
                userId: this.userId,
                message: this.lastMessage.text,
                timecreated: this.lastMessage.timecreated,
                isfavourite: !!((_a = this.conversation) === null || _a === void 0 ? void 0 : _a.isfavourite),
                type: (_b = this.conversation) === null || _b === void 0 ? void 0 : _b.type,
            }, this.siteId);
            // Update navBar links and buttons.
            const newCanDelete = (last && 'id' in last && last.id && this.messages.length == 1) || this.messages.length > 1;
            if (this.canDelete != newCanDelete) {
                this.checkCanDelete();
            }
        }
    }
    /**
     * Set the place where the unread label position has to be.
     */
    setUnreadLabelPosition() {
        var _a, _b;
        if (this.unreadMessageFrom != 0) {
            return;
        }
        if (this.groupMessagingEnabled) {
            // Use the unreadcount from the conversation to calculate where should the label be placed.
            if (this.conversation && (((_a = this.conversation) === null || _a === void 0 ? void 0 : _a.unreadcount) && ((_b = this.conversation) === null || _b === void 0 ? void 0 : _b.unreadcount) > 0) && this.messages) {
                // Iterate over messages to find the right message using the unreadcount. Skip offline messages and own messages.
                let found = 0;
                for (let i = this.messages.length - 1; i >= 0; i--) {
                    const message = this.messages[i];
                    if (!message.pending && message.useridfrom != this.currentUserId && 'id' in message) {
                        found++;
                        if (found == this.conversation.unreadcount) {
                            this.unreadMessageFrom = Number(message.id);
                            break;
                        }
                    }
                }
            }
        }
        else {
            let previousMessageRead = false;
            for (const x in this.messages) {
                const message = this.messages[x];
                if (message.useridfrom != this.currentUserId && 'read' in message) {
                    const unreadFrom = !message.read && previousMessageRead;
                    if (unreadFrom) {
                        // Save where the label is placed.
                        this.unreadMessageFrom = Number(message.id);
                        break;
                    }
                    previousMessageRead = !!message.read;
                }
            }
        }
        // Do not update the message unread from label on next refresh.
        if (this.unreadMessageFrom == 0) {
            // Using negative to indicate the label is not placed but should not be placed.
            this.unreadMessageFrom = -1;
        }
    }
    /**
     * Check if there's any message in the list that can be deleted.
     */
    checkCanDelete() {
        // All messages being sent should be at the end of the list.
        const first = this.messages[0];
        this.canDelete = first && !first.sending;
    }
    /**
     * Hide unread label when sending messages.
     */
    hideUnreadLabel() {
        if (this.unreadMessageFrom > 0) {
            this.unreadMessageFrom = -1;
        }
    }
    /**
     * Wait until fetching is false.
     *
     * @return Resolved when done.
     */
    waitForFetch() {
        if (!this.fetching) {
            return Promise.resolve();
        }
        const deferred = _services_utils_utils__WEBPACK_IMPORTED_MODULE_10__["CoreUtils"].promiseDefer();
        setTimeout(() => this.waitForFetch().finally(() => {
            deferred.resolve();
        }), 400);
        return deferred.promise;
    }
    /**
     * Set a polling to get new messages every certain time.
     */
    setPolling() {
        if (this.groupMessagingEnabled && !this.conversationId) {
            // Don't have enough data to poll messages.
            return;
        }
        if (!this.polling) {
            // Start polling.
            this.polling = window.setInterval(() => {
                this.fetchMessages().catch(() => {
                    // Ignore errors.
                });
            }, _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessagesProvider"].POLL_INTERVAL);
        }
    }
    /**
     * Unset polling.
     */
    unsetPolling() {
        if (this.polling) {
            this.logger.debug(`Cancelling polling for conversation with user '${this.userId}'`);
            clearInterval(this.polling);
            this.polling = undefined;
        }
    }
    /**
     * Copy message to clipboard.
     *
     * @param message Message to be copied.
     */
    copyMessage(message) {
        const text = 'smallmessage' in message ? message.smallmessage || message.text || '' : message.text || '';
        _services_utils_utils__WEBPACK_IMPORTED_MODULE_10__["CoreUtils"].copyToClipboard(_services_utils_text__WEBPACK_IMPORTED_MODULE_11__["CoreTextUtils"].decodeHTMLEntities(text));
    }
    /**
     * Function to delete a message.
     *
     * @param message Message object to delete.
     * @param index Index where the message is to delete it from the view.
     */
    deleteMessage(message, index) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const canDeleteAll = this.conversation && this.conversation.candeletemessagesforallusers;
            const langKey = message.pending || canDeleteAll || this.isSelf ? 'core.areyousure' :
                'addon.messages.deletemessageconfirmation';
            const options = {};
            if (canDeleteAll && !message.pending) {
                // Show delete for all checkbox.
                options.inputs = [{
                        type: 'checkbox',
                        name: 'deleteforall',
                        checked: false,
                        value: true,
                        label: _singletons__WEBPACK_IMPORTED_MODULE_19__["Translate"].instant('addon.messages.deleteforeveryone'),
                    }];
            }
            try {
                const data = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showConfirm(_singletons__WEBPACK_IMPORTED_MODULE_19__["Translate"].instant(langKey), undefined, undefined, undefined, options);
                const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showModalLoading('core.deleting', true);
                try {
                    yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].deleteMessage(message, data && data[0]);
                    // Remove message from the list without having to wait for re-fetch.
                    this.messages.splice(index, 1);
                    this.removeMessage(message.hash);
                    this.notifyNewMessage();
                    this.fetchMessages(); // Re-fetch messages to update cached data.
                }
                finally {
                    modal.dismiss();
                }
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'addon.messages.errordeletemessage', true);
            }
        });
    }
    /**
     * Function to load previous messages.
     *
     * @param infiniteComplete Infinite scroll complete function. Only used from core-infinite-loading.
     * @return Resolved when done.
     */
    loadPrevious(infiniteComplete) {
        var _a, _b, _c, _d;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.initialized) {
                // Don't load previous if the view isn't fully initialized.
                // Don't put the initialized condition in the "enabled" input because then the load more is hidden and
                // the scroll height changes when it appears.
                infiniteComplete && infiniteComplete();
                return;
            }
            let infiniteHeight = ((_a = this.infinite) === null || _a === void 0 ? void 0 : _a.hostElement.getBoundingClientRect().height) || 0;
            const scrollHeight = (((_b = this.scrollElement) === null || _b === void 0 ? void 0 : _b.scrollHeight) || 0);
            // If there is an ongoing fetch, wait for it to finish.
            try {
                yield this.waitForFetch();
            }
            finally {
                this.pagesLoaded++;
                try {
                    yield this.fetchMessages(false);
                    // Try to keep the scroll position.
                    const scrollBottom = scrollHeight - (((_c = this.scrollElement) === null || _c === void 0 ? void 0 : _c.scrollTop) || 0);
                    const height = ((_d = this.infinite) === null || _d === void 0 ? void 0 : _d.hostElement.getBoundingClientRect().height) || 0;
                    if (this.canLoadMore && infiniteHeight && this.infinite) {
                        // The height of the infinite is different while spinner is shown. Add that difference.
                        infiniteHeight = infiniteHeight - height;
                    }
                    else if (!this.canLoadMore) {
                        // Can't load more, take into account the full height of the infinite loading since it will disappear now.
                        infiniteHeight = infiniteHeight || height;
                    }
                    this.keepScroll(scrollHeight, scrollBottom, infiniteHeight);
                }
                catch (error) {
                    this.loadMoreError = true; // Set to prevent infinite calls with infinite-loading.
                    this.pagesLoaded--;
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'addon.messages.errorwhileretrievingmessages', true);
                }
                finally {
                    infiniteComplete && infiniteComplete();
                }
            }
        });
    }
    /**
     * Keep scroll position after loading previous messages.
     */
    keepScroll(oldScrollHeight, oldScrollBottom, infiniteHeight, retries = 0) {
        setTimeout(() => {
            var _a;
            const newScrollHeight = (((_a = this.scrollElement) === null || _a === void 0 ? void 0 : _a.scrollHeight) || 0);
            if (newScrollHeight == oldScrollHeight) {
                // Height hasn't changed yet. Retry if max retries haven't been reached.
                if (retries <= 10) {
                    this.keepScroll(oldScrollHeight, oldScrollBottom, infiniteHeight, retries + 1);
                }
                return;
            }
            // Scroll has changed, but maybe it hasn't reached the full height yet.
            setTimeout(() => {
                var _a;
                const newScrollHeight = (((_a = this.scrollElement) === null || _a === void 0 ? void 0 : _a.scrollHeight) || 0);
                const scrollTo = newScrollHeight - oldScrollBottom + infiniteHeight;
                this.content.scrollToPoint(0, scrollTo, 0);
            }, 30);
        }, 30);
    }
    /**
     * Scroll bottom when render has finished.
     *
     * @param force Whether to force scroll to bottom.
     */
    scrollToBottom(force = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Check if scroll is at bottom. If so, scroll bottom after rendering since there might be something new.
            if (this.scrollBottom || force) {
                this.scrollBottom = false;
                // Reset the badge.
                this.setNewMessagesBadge(0);
                // Leave time for the view to be rendered.
                yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_10__["CoreUtils"].nextTicks(5);
                if (!this.viewDestroyed) {
                    this.content.scrollToBottom(0);
                }
                if (force) {
                    this.initialized = true;
                }
            }
        });
    }
    /**
     * Scroll to the first new unread message.
     */
    scrollToFirstUnreadMessage() {
        if (this.newMessages > 0) {
            const messages = Array.from(this.hostElement.querySelectorAll('.addon-message-not-mine'));
            _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].scrollToElement(this.content, messages[messages.length - this.newMessages]);
        }
    }
    /**
     * Sends a message to the server.
     *
     * @param text Message text.
     */
    sendMessage(text) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.hideUnreadLabel();
            this.showDelete = false;
            this.scrollBottom = true;
            this.setNewMessagesBadge(0);
            const message = {
                id: -1,
                pending: true,
                sending: true,
                useridfrom: this.currentUserId,
                smallmessage: text,
                text: text,
                timecreated: new Date().getTime(),
            };
            message.showDate = this.showDate(message, this.messages[this.messages.length - 1]);
            this.addMessage(message, false);
            this.messagesBeingSent++;
            // If there is an ongoing fetch, wait for it to finish.
            // Otherwise, if a message is sent while fetching it could disappear until the next fetch.
            try {
                yield this.waitForFetch();
            }
            finally {
                try {
                    let data;
                    if (this.conversationId) {
                        data = yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].sendMessageToConversation(this.conversation, text);
                    }
                    else {
                        data = yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].sendMessage(this.userId, text);
                    }
                    this.messagesBeingSent--;
                    let failure = false;
                    if (data.sent) {
                        try {
                            if (!this.conversationId && data.message && 'conversationid' in data.message) {
                                // Message sent to a new conversation, try to load the conversation.
                                yield this.getConversation(data.message.conversationid, this.userId);
                                // Now fetch messages.
                                try {
                                    yield this.fetchMessages();
                                }
                                finally {
                                    // Start polling messages now that the conversation exists.
                                    this.setPolling();
                                }
                            }
                            else {
                                // Message was sent, fetch messages right now.
                                yield this.fetchMessages();
                            }
                        }
                        catch (_a) {
                            failure = true;
                        }
                    }
                    if (failure || !data.sent) {
                        // Fetch failed or is offline message, mark the message as sent.
                        // If fetch is successful there's no need to mark it because the fetch will already show the message received.
                        message.sending = false;
                        if (data.sent) {
                            // Message sent to server, not pending anymore.
                            message.pending = false;
                        }
                        else if (data.message) {
                            message.timecreated = data.message.timecreated || 0;
                        }
                        this.notifyNewMessage();
                    }
                }
                catch (error) {
                    this.messagesBeingSent--;
                    // Only close the keyboard if an error happens.
                    // We want the user to be able to send multiple messages without the keyboard being closed.
                    _services_app__WEBPACK_IMPORTED_MODULE_13__["CoreApp"].closeKeyboard();
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'addon.messages.messagenotsent', true);
                    this.removeMessage(message.hash);
                }
            }
        });
    }
    /**
     * Check date should be shown on message list for the current message.
     * If date has changed from previous to current message it should be shown.
     *
     * @param message Current message where to show the date.
     * @param prevMessage Previous message where to compare the date with.
     * @return If date has changed and should be shown.
     */
    showDate(message, prevMessage) {
        if (!prevMessage) {
            // First message, show it.
            return true;
        }
        // Check if day has changed.
        return !moment__WEBPACK_IMPORTED_MODULE_16___default()(message.timecreated).isSame(prevMessage.timecreated, 'day');
    }
    /**
     * Check if the user info should be displayed for the current message.
     * User data is only displayed for group conversations if the previous message was from another user.
     *
     * @param message Current message where to show the user info.
     * @param prevMessage Previous message.
     * @return Whether user data should be shown.
     */
    showUserData(message, prevMessage) {
        return this.isGroup && message.useridfrom != this.currentUserId && this.members[(message.useridfrom || 0)] &&
            (!prevMessage || prevMessage.useridfrom != message.useridfrom || !!message.showDate);
    }
    /**
     * Check if a css tail should be shown.
     *
     * @param message Current message where to show the user info.
     * @param nextMessage Next message.
     * @return Whether user data should be shown.
     */
    showTail(message, nextMessage) {
        return !nextMessage || nextMessage.useridfrom != message.useridfrom || !!nextMessage.showDate;
    }
    /**
     * Toggles delete state.
     */
    toggleDelete() {
        this.showDelete = !this.showDelete;
    }
    /**
     * View info. If it's an individual conversation, go to the user profile.
     * If it's a group conversation, view info about the group.
     */
    viewInfo() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.isGroup) {
                // Display the group information.
                const userId = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].openSideModal({
                    component: _components_conversation_info_conversation_info__WEBPACK_IMPORTED_MODULE_22__["AddonMessagesConversationInfoComponent"],
                    componentProps: {
                        conversationId: this.conversationId,
                    },
                });
                if (typeof userId != 'undefined') {
                    const splitViewLoaded = _services_navigator__WEBPACK_IMPORTED_MODULE_20__["CoreNavigator"].isCurrentPathInTablet('**/messages/**/discussion');
                    // Open user conversation.
                    if (splitViewLoaded) {
                        // Notify the left pane to load it, this way the right conversation will be highlighted.
                        _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].trigger(_services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessagesProvider"].OPEN_CONVERSATION_EVENT, { userId }, this.siteId);
                    }
                    else {
                        // Open the discussion in a new view.
                        _services_navigator__WEBPACK_IMPORTED_MODULE_20__["CoreNavigator"].navigateToSitePath('/messages/discussion', { params: { userId } });
                    }
                }
            }
            else {
                // Open the user profile.
                _services_navigator__WEBPACK_IMPORTED_MODULE_20__["CoreNavigator"].navigateToSitePath('/user/profile', { params: { userId: this.userId } });
            }
        });
    }
    /**
     * Change the favourite state of the current conversation.
     *
     * @param done Function to call when done.
     */
    changeFavourite(done) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.conversation) {
                return;
            }
            this.favouriteIcon = _core_constants__WEBPACK_IMPORTED_MODULE_23__["CoreConstants"].ICON_LOADING;
            try {
                yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].setFavouriteConversation(this.conversation.id, !this.conversation.isfavourite);
                this.conversation.isfavourite = !this.conversation.isfavourite;
                // Get the conversation data so it's cached. Don't block the user for this.
                _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].getConversation(this.conversation.id, undefined, true);
                _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].trigger(_services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessagesProvider"].UPDATE_CONVERSATION_LIST_EVENT, {
                    conversationId: this.conversation.id,
                    action: 'favourite',
                    value: this.conversation.isfavourite,
                }, this.siteId);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'Error changing favourite state.');
            }
            finally {
                this.favouriteIcon = 'fas-star';
                this.favouriteIconSlash = this.conversation.isfavourite;
                done && done();
            }
        });
    }
    /**
     * Change the mute state of the current conversation.
     *
     * @param done Function to call when done.
     */
    changeMute(done) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.conversation) {
                return;
            }
            this.muteIcon = _core_constants__WEBPACK_IMPORTED_MODULE_23__["CoreConstants"].ICON_LOADING;
            try {
                yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].muteConversation(this.conversation.id, !this.conversation.ismuted);
                this.conversation.ismuted = !this.conversation.ismuted;
                // Get the conversation data so it's cached. Don't block the user for this.
                _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].getConversation(this.conversation.id, undefined, true);
                _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].trigger(_services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessagesProvider"].UPDATE_CONVERSATION_LIST_EVENT, {
                    conversationId: this.conversation.id,
                    action: 'mute',
                    value: this.conversation.ismuted,
                }, this.siteId);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'Error changing muted state.');
            }
            finally {
                this.muteIcon = this.conversation.ismuted ? 'fas-bell' : 'fas-bell-slash';
                done && done();
            }
        });
    }
    /**
     * Calculate whether there are pending contact requests.
     */
    setContactRequestInfo() {
        var _a, _b;
        this.requestContactSent = false;
        this.requestContactReceived = false;
        if (this.otherMember && !this.otherMember.iscontact) {
            this.requestContactSent = !!((_a = this.otherMember.contactrequests) === null || _a === void 0 ? void 0 : _a.some((request) => request.userid == this.currentUserId && request.requesteduserid == this.otherMember.id));
            this.requestContactReceived = !!((_b = this.otherMember.contactrequests) === null || _b === void 0 ? void 0 : _b.some((request) => request.userid == this.otherMember.id && request.requesteduserid == this.currentUserId));
        }
    }
    /**
     * Calculate what to display in the footer.
     */
    setFooterType() {
        if (!this.otherMember) {
            // Group conversation or group messaging not available.
            this.footerType = 'message';
        }
        else if (this.otherMember.isblocked) {
            this.footerType = 'blocked';
        }
        else if (this.requestContactReceived) {
            this.footerType = 'requestReceived';
        }
        else if (this.otherMember.canmessage) {
            this.footerType = 'message';
        }
        else if (this.requestContactSent) {
            this.footerType = 'requestSent';
        }
        else if (this.otherMember.requirescontact) {
            this.footerType = 'requiresContact';
        }
        else {
            this.footerType = 'unable';
        }
    }
    /**
     * Displays a confirmation modal to block the user of the individual conversation.
     *
     * @return Promise resolved when user is blocked or dialog is cancelled.
     */
    blockUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.otherMember) {
                // Should never happen.
                throw new _classes_errors_error__WEBPACK_IMPORTED_MODULE_18__["CoreError"]('No member selected to be blocked.');
            }
            if (this.otherMember.canmessageevenifblocked) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModal(_singletons__WEBPACK_IMPORTED_MODULE_19__["Translate"].instant('addon.messages.cantblockuser', { $a: this.otherMember.fullname }));
                return;
            }
            const template = _singletons__WEBPACK_IMPORTED_MODULE_19__["Translate"].instant('addon.messages.blockuserconfirm', { $a: this.otherMember.fullname });
            const okText = _singletons__WEBPACK_IMPORTED_MODULE_19__["Translate"].instant('addon.messages.blockuser');
            try {
                yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showConfirm(template, undefined, okText);
                this.blockIcon = _core_constants__WEBPACK_IMPORTED_MODULE_23__["CoreConstants"].ICON_LOADING;
                const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showModalLoading('core.sending', true);
                this.showLoadingModal = true;
                try {
                    try {
                        yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].blockContact(this.otherMember.id);
                    }
                    finally {
                        modal.dismiss();
                        this.showLoadingModal = false;
                    }
                }
                catch (error) {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'core.error', true);
                }
                finally {
                    this.blockIcon = this.otherMember.isblocked ? 'fas-user-check' : 'fas-user-lock';
                }
            }
            catch (_a) {
                // User cancelled.
            }
        });
    }
    /**
     * Delete the conversation.
     *
     * @param done Function to call when done.
     */
    deleteConversation(done) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.conversation) {
                return;
            }
            const confirmMessage = 'addon.messages.' + (this.isSelf ? 'deleteallselfconfirm' : 'deleteallconfirm');
            try {
                yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showDeleteConfirm(confirmMessage);
                this.deleteIcon = _core_constants__WEBPACK_IMPORTED_MODULE_23__["CoreConstants"].ICON_LOADING;
                try {
                    try {
                        yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].deleteConversation(this.conversation.id);
                        _singletons_events__WEBPACK_IMPORTED_MODULE_3__["CoreEvents"].trigger(_services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessagesProvider"].UPDATE_CONVERSATION_LIST_EVENT, {
                            conversationId: this.conversation.id,
                            action: 'delete',
                        }, this.siteId);
                        this.messages = [];
                    }
                    finally {
                        done && done();
                    }
                }
                catch (error) {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'Error deleting conversation.');
                }
                finally {
                    this.deleteIcon = 'fas-trash';
                }
            }
            catch (_a) {
                // User cancelled.
            }
        });
    }
    /**
     * Displays a confirmation modal to unblock the user of the individual conversation.
     *
     * @return Promise resolved when user is unblocked or dialog is cancelled.
     */
    unblockUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.otherMember) {
                // Should never happen.
                throw new _classes_errors_error__WEBPACK_IMPORTED_MODULE_18__["CoreError"]('No member selected to be unblocked.');
            }
            const template = _singletons__WEBPACK_IMPORTED_MODULE_19__["Translate"].instant('addon.messages.unblockuserconfirm', { $a: this.otherMember.fullname });
            const okText = _singletons__WEBPACK_IMPORTED_MODULE_19__["Translate"].instant('addon.messages.unblockuser');
            try {
                yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showConfirm(template, undefined, okText);
                this.blockIcon = _core_constants__WEBPACK_IMPORTED_MODULE_23__["CoreConstants"].ICON_LOADING;
                const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showModalLoading('core.sending', true);
                this.showLoadingModal = true;
                try {
                    try {
                        yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].unblockContact(this.otherMember.id);
                    }
                    finally {
                        modal.dismiss();
                        this.showLoadingModal = false;
                    }
                }
                catch (error) {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'core.error', true);
                }
                finally {
                    this.blockIcon = this.otherMember.isblocked ? 'fas-user-check' : 'fas-user-lock';
                }
            }
            catch (_a) {
                // User cancelled.
            }
        });
    }
    /**
     * Displays a confirmation modal to send a contact request to the other user of the individual conversation.
     *
     * @return Promise resolved when the request is sent or the dialog is cancelled.
     */
    createContactRequest() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.otherMember) {
                // Should never happen.
                throw new _classes_errors_error__WEBPACK_IMPORTED_MODULE_18__["CoreError"]('No member selected to be requested.');
            }
            const template = _singletons__WEBPACK_IMPORTED_MODULE_19__["Translate"].instant('addon.messages.addcontactconfirm', { $a: this.otherMember.fullname });
            const okText = _singletons__WEBPACK_IMPORTED_MODULE_19__["Translate"].instant('core.add');
            try {
                yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showConfirm(template, undefined, okText);
                this.addRemoveIcon = _core_constants__WEBPACK_IMPORTED_MODULE_23__["CoreConstants"].ICON_LOADING;
                const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showModalLoading('core.sending', true);
                this.showLoadingModal = true;
                try {
                    try {
                        yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].createContactRequest(this.otherMember.id);
                    }
                    finally {
                        modal.dismiss();
                        this.showLoadingModal = false;
                    }
                }
                catch (error) {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'core.error', true);
                }
                finally {
                    this.addRemoveIcon = 'fas-user-plus';
                }
            }
            catch (_a) {
                // User cancelled.
            }
        });
    }
    /**
     * Confirms the contact request of the other user of the individual conversation.
     *
     * @return Promise resolved when the request is confirmed.
     */
    confirmContactRequest() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.otherMember) {
                // Should never happen.
                throw new _classes_errors_error__WEBPACK_IMPORTED_MODULE_18__["CoreError"]('No member selected to be confirmed.');
            }
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showModalLoading('core.sending', true);
            this.showLoadingModal = true;
            try {
                try {
                    yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].confirmContactRequest(this.otherMember.id);
                }
                finally {
                    modal.dismiss();
                    this.showLoadingModal = false;
                }
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'core.error', true);
            }
        });
    }
    /**
     * Declines the contact request of the other user of the individual conversation.
     *
     * @return Promise resolved when the request is confirmed.
     */
    declineContactRequest() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.otherMember) {
                // Should never happen.
                throw new _classes_errors_error__WEBPACK_IMPORTED_MODULE_18__["CoreError"]('No member selected to be declined.');
            }
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showModalLoading('core.sending', true);
            this.showLoadingModal = true;
            try {
                try {
                    yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].declineContactRequest(this.otherMember.id);
                }
                finally {
                    modal.dismiss();
                    this.showLoadingModal = false;
                }
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'core.error', true);
            }
        });
    }
    /**
     * Displays a confirmation modal to remove the other user of the conversation from contacts.
     *
     * @return Promise resolved when the request is sent or the dialog is cancelled.
     */
    removeContact() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.otherMember) {
                // Should never happen.
                throw new _classes_errors_error__WEBPACK_IMPORTED_MODULE_18__["CoreError"]('No member selected to be removed.');
            }
            const template = _singletons__WEBPACK_IMPORTED_MODULE_19__["Translate"].instant('addon.messages.removecontactconfirm', { $a: this.otherMember.fullname });
            const okText = _singletons__WEBPACK_IMPORTED_MODULE_19__["Translate"].instant('core.remove');
            try {
                yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showConfirm(template, undefined, okText);
                this.addRemoveIcon = _core_constants__WEBPACK_IMPORTED_MODULE_23__["CoreConstants"].ICON_LOADING;
                const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showModalLoading('core.sending', true);
                this.showLoadingModal = true;
                try {
                    try {
                        yield _services_messages__WEBPACK_IMPORTED_MODULE_5__["AddonMessages"].removeContact(this.otherMember.id);
                    }
                    finally {
                        modal.dismiss();
                        this.showLoadingModal = false;
                    }
                }
                catch (error) {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_9__["CoreDomUtils"].showErrorModalDefault(error, 'core.error', true);
                }
                finally {
                    this.addRemoveIcon = 'fas-user-plus';
                }
            }
            catch (_a) {
                // User cancelled.
            }
        });
    }
    /**
     * Page destroyed.
     */
    ngOnDestroy() {
        var _a, _b;
        // Unset again, just in case.
        this.unsetPolling();
        (_a = this.syncObserver) === null || _a === void 0 ? void 0 : _a.off();
        (_b = this.memberInfoObserver) === null || _b === void 0 ? void 0 : _b.off();
        this.viewDestroyed = true;
    }
};
AddonMessagesDiscussionPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_21__["ActivatedRoute"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
AddonMessagesDiscussionPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"],] }],
    infinite: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_components_infinite_loading_infinite_loading__WEBPACK_IMPORTED_MODULE_14__["CoreInfiniteLoadingComponent"],] }]
};
AddonMessagesDiscussionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-addon-messages-discussion',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./discussion.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/messages/pages/discussion/discussion.html")).default,
        animations: [_components_animations__WEBPACK_IMPORTED_MODULE_17__["CoreAnimations"].SLIDE_IN_OUT],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./discussion.scss */ "./src/addons/messages/pages/discussion/discussion.scss")).default]
    })
], AddonMessagesDiscussionPage);



/***/ }),

/***/ "./src/addons/messages/pages/discussion/discussion.scss":
/*!**************************************************************!*\
  !*** ./src/addons/messages/pages/discussion/discussion.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\n * App Global variables SCSS\n * ----------------------------------------------------------------------------\n * Place here the different files you should import to use global variables.\n */\n/*\n * App custom mixins for SCSS\n * ----------------------------------------------------------------------------\n * Place here our custom mixins.\n */\n/*\n * Imported ionic mixins for SCSS\n * ----------------------------------------------------------------------------\n * Place here our custom mixins.\n * Extracted from ionic.mixins.scss\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/themes/ionic.mixins.scss\n */\n/*\n * App Custom App variables SCSS\n * ----------------------------------------------------------------------------\n * Place here all custom app variables.\n */\n/*\n * App Global variables SCSS\n * ----------------------------------------------------------------------------\n * Place here all global variables.\n */\n/**\n * Layout Breakpoints\n *\n * https://ionicframework.com/docs/layout/grid#default-breakpoints\n */\n:host ion-content {\n  --background: var(--background-alternative);\n}\n:host ion-content::part(scroll) {\n  padding-bottom: 0 !important;\n}\n:host .addon-messages-discussion-container {\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 15px;\n  background: var(--background-alternative);\n}\n:host .addon-messages-date {\n  font-weight: normal;\n  font-size: 0.9rem;\n}\n:host ion-item.addon-message {\n  border: 0;\n  border-radius: 4px;\n  padding: 0 8px 0 8px;\n  margin: 10px 8px 0 8px;\n  --background: var(--addon-messages-message-bg);\n  background: var(--background);\n  align-self: flex-start;\n  width: 90%;\n  max-width: 90%;\n  --min-height: var(--a11y-min-target-size);\n  position: relative;\n  transition: width 500ms ease-in-out;\n  overflow: visible;\n}\n:host ion-item.addon-message::part(native) {\n  --inner-border-width: 0;\n  --inner-padding-end: 0;\n  padding: 0;\n  margin: 0;\n}\n:host ion-item.addon-message core-format-text > p:only-child {\n  display: inline;\n}\n:host ion-item.addon-message .addon-message-user {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.5rem;\n  margin-top: 0;\n  color: var(--ion-text-color);\n}\n:host ion-item.addon-message .addon-message-user core-user-avatar {\n  display: block;\n  --core-avatar-size: var(--addon-messages-avatar-size);\n  margin: 0;\n}\n:host ion-item.addon-message .addon-message-user div {\n  font-weight: 500;\n  flex-grow: 1;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  :host ion-item.addon-message .addon-message-user div {\n    padding-left: unset;\n    padding-right: unset;\n    -webkit-padding-start: 0.5rem;\n    padding-inline-start: 0.5rem;\n    -webkit-padding-end: 0.5rem;\n    padding-inline-end: 0.5rem;\n  }\n}\n:host ion-item.addon-message ion-note {\n  color: var(--addon-messages-message-note-text);\n  font-size: var(--addon-messages-message-note-font-size);\n  margin: 0;\n  padding: 0 0 8px 0;\n  align-self: flex-end;\n}\n:host ion-item.addon-message[tappable]:active {\n  --background: var(--addon-messages-message-activated-bg);\n}\n:host ion-item.addon-message ion-label {\n  margin: 0;\n  padding: 8px 0;\n}\n:host ion-item.addon-message .addon-message-text {\n  display: inline-flex;\n}\n:host ion-item.addon-message .addon-message-text * {\n  color: var(--ion-text-color);\n}\n:host ion-item.addon-message .tail {\n  content: \"\";\n  width: 0;\n  height: 0;\n  border: 0.5rem solid transparent;\n  position: absolute;\n  touch-action: none;\n  bottom: 0;\n}\n:host ion-item.addon-message.addon-message-mine {\n  --background: var(--addon-messages-message-mine-bg);\n  align-self: flex-end;\n}\n:host ion-item.addon-message.addon-message-mine[tappable]:active {\n  --background: var(--addon-messages-message-mine-activated-bg);\n}\n:host ion-item.addon-message.addon-message-mine .spinner {\n  float: right;\n  margin-left: 5px;\n  margin-right: -3px;\n  margin-top: 2px;\n  margin-bottom: -2px;\n}\n[dir=rtl] :host ion-item.addon-message.addon-message-mine .spinner {\n  float: left;\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  :host ion-item.addon-message.addon-message-mine .spinner {\n    margin-left: unset;\n    margin-right: unset;\n    -webkit-margin-start: 5px;\n    margin-inline-start: 5px;\n    -webkit-margin-end: -3px;\n    margin-inline-end: -3px;\n  }\n}\n:host ion-item.addon-message.addon-message-mine .spinner svg {\n  width: 16px;\n  height: 16px;\n}\n:host ion-item.addon-message.addon-message-mine .tail {\n  right: -8px;\n  margin-right: -0.5rem;\n  border-bottom-color: var(--addon-messages-message-mine-bg);\n}\n[dir=rtl] :host ion-item.addon-message.addon-message-mine .tail {\n  left: unset;\n  right: unset;\n  left: -8px;\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  :host ion-item.addon-message.addon-message-mine .tail {\n    margin-right: unset;\n    -webkit-margin-end: -0.5rem;\n    margin-inline-end: -0.5rem;\n  }\n}\n:host ion-item.addon-message.addon-message-mine[tappable]:active .tail {\n  border-bottom-color: var(--addon-messages-message-mine-activated-bg);\n}\n:host ion-item.addon-message.addon-message-not-mine .tail {\n  border-bottom-color: var(--addon-messages-message-bg);\n  left: -8px;\n  margin-left: -0.5rem;\n}\n[dir=rtl] :host ion-item.addon-message.addon-message-not-mine .tail {\n  left: unset;\n  right: unset;\n  right: -8px;\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  :host ion-item.addon-message.addon-message-not-mine .tail {\n    margin-left: unset;\n    -webkit-margin-start: -0.5rem;\n    margin-inline-start: -0.5rem;\n  }\n}\n:host ion-item.addon-message[tappable].addon-message-not-mine.activated .tail {\n  border-bottom-color: var(--addon-messages-message-activated-bg);\n}\n:host ion-item.addon-message .addon-messages-delete-button {\n  min-height: initial;\n  line-height: initial;\n  margin-top: 0;\n  margin-bottom: 0;\n  height: var(--a11y-min-target-size) !important;\n  align-self: flex-end;\n}\n:host ion-item.addon-message .addon-messages-delete-button ion-icon {\n  font-size: 1.4em;\n  line-height: initial;\n  color: var(--ion-color-danger);\n}\n:host ion-item.addon-message.addon-message-no-user {\n  margin-top: 8px;\n}\n:host ion-item.addon-message.addon-message-mine + ion-item.addon-message.addon-message-no-user.addon-message-mine,\n:host ion-item.addon-message.addon-message-not-mine + ion-item.addon-message.addon-message-no-user.addon-message-not-mine {\n  padding-top: 0;\n}\n:host ion-item.addon-message.addon-message-mine + ion-item.addon-message.addon-message-no-user.addon-message-mine .item-heading,\n:host ion-item.addon-message.addon-message-not-mine + ion-item.addon-message.addon-message-no-user.addon-message-not-mine .item-heading {\n  margin-bottom: 0;\n}\n:host-context(.ios) ion-footer .toolbar:last-child {\n  padding-bottom: 4px;\n  min-height: 0;\n}\n/*\n * App Global variables SCSS\n * ----------------------------------------------------------------------------\n * Place here the different files you should import to use global variables.\n */\n/*\n * App custom mixins for SCSS\n * ----------------------------------------------------------------------------\n * Place here our custom mixins.\n */\n/*\n * Imported ionic mixins for SCSS\n * ----------------------------------------------------------------------------\n * Place here our custom mixins.\n * Extracted from ionic.mixins.scss\n * https://github.com/ionic-team/ionic-framework/blob/master/core/src/themes/ionic.mixins.scss\n */\n/*\n * App Custom App variables SCSS\n * ----------------------------------------------------------------------------\n * Place here all custom app variables.\n */\n/*\n * App Global variables SCSS\n * ----------------------------------------------------------------------------\n * Place here all global variables.\n */\n/**\n * Layout Breakpoints\n *\n * https://ionicframework.com/docs/layout/grid#default-breakpoints\n */\n:host .addon-messages-unreadfrom {\n  color: var(--ion-color-primary);\n  background-color: transparent;\n  margin-top: 6px;\n  margin-left: auto;\n  margin-right: auto;\n}\n:host .addon-messages-unreadfrom ion-icon {\n  color: var(--ion-color-primary);\n  background-color: transparent;\n}\n:host .has-fab .scroll-content {\n  padding-bottom: 0;\n}\n:host ion-fab ion-fab-button::part(native) {\n  contain: unset;\n  overflow: visible;\n}\n:host ion-fab ion-fab-button .core-discussion-messages-badge {\n  position: absolute;\n  border-radius: 50%;\n  color: var(--addon-messages-discussion-badge-text);\n  background-color: var(--addon-messages-discussion-badge);\n  display: block;\n  line-height: 20px;\n  height: 20px;\n  width: 20px;\n  right: -6px;\n  top: -6px;\n}\n[dir=rtl] :host ion-fab ion-fab-button .core-discussion-messages-badge {\n  left: unset;\n  right: unset;\n  left: -6px;\n}\n:host ion-header ion-toolbar h1 {\n  display: flex;\n  align-items: center;\n  padding: 0;\n}\n:host ion-header ion-toolbar h1 .core-bar-button-image {\n  margin-right: 6px;\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  :host ion-header ion-toolbar h1 .core-bar-button-image {\n    margin-right: unset;\n    -webkit-margin-end: 6px;\n    margin-inline-end: 6px;\n  }\n}\n:host ion-header ion-toolbar h1 core-format-text {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  flex-shrink: 1;\n}\n:host ion-header ion-toolbar h1 ion-icon {\n  margin-left: 6px;\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  :host ion-header ion-toolbar h1 ion-icon {\n    margin-left: unset;\n    -webkit-margin-start: 6px;\n    margin-inline-start: 6px;\n  }\n}\n:host-context(.ios) ion-header ion-toolbar h1 {\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9nbG9iYWxzLnNjc3MiLCJzcmMvdGhlbWUvZ2xvYmFscy5taXhpbnMuc2NzcyIsInNyYy90aGVtZS9nbG9iYWxzLm1peGlucy5pb25pYy5zY3NzIiwic3JjL3RoZW1lL2dsb2JhbHMuY3VzdG9tLnNjc3MiLCJzcmMvdGhlbWUvZ2xvYmFscy52YXJpYWJsZXMuc2NzcyIsInNyYy90aGVtZS9jb21wb25lbnRzL2Rpc2N1c3Npb24uc2NzcyIsInNyYy9hZGRvbnMvbWVzc2FnZXMvcGFnZXMvZGlzY3Vzc2lvbi9kaXNjdXNzaW9uLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7RUFBQTtBQ0FBOzs7O0VBQUE7QUNBQTs7Ozs7O0VBQUE7QUNBQTs7OztFQUFBO0FDQUE7Ozs7RUFBQTtBQXVGQTs7OztFQUFBO0FDcEZJO0VBQ0ksMkNBQUE7QUM4QlI7QUQ1QlE7RUFDSSw0QkFBQTtBQzhCWjtBRDFCSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EseUNBQUE7QUM0QlI7QUR6Qkk7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0FDMkJSO0FEdkJJO0VBQ0ksU0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLDhDQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EseUNBQUE7RUFDQSxrQkFBQTtFSkxKLG1DQUFBO0VJUUksaUJBQUE7QUM0QlI7QUQxQlE7RUFDSSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUM0Qlo7QUR6QlE7RUFDSSxlQUFBO0FDMkJaO0FEeEJRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0FDMEJaO0FEeEJZO0VBQ0ksY0FBQTtFQUNBLHFEQUFBO0VBQ0EsU0FBQTtBQzBCaEI7QUR2Qlk7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUgyUFIsb0JHMVBvQztFSDJQcEMscUJHM1BvQztFQUM1QixnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUMwQmhCO0FKaU9ZO0VBQ0k7SUFFUSxtQkFBQTtJQUdBLG9CQUFBO0lBR0osNkJHdlF3QjtJSHdReEIsNEJHeFF3QjtJSHlReEIsMkJHelF3QjtJSDBReEIsMEJHMVF3QjtFQ3NDMUM7QUFDRjtBRGhDUTtFQUNJLDhDQUFBO0VBQ0EsdURBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQ2tDWjtBRC9CUTtFQUNJLHdEQUFBO0FDaUNaO0FEOUJRO0VBQ0ksU0FBQTtFQUNBLGNBQUE7QUNnQ1o7QUQ3QlE7RUFDSSxvQkFBQTtBQytCWjtBRDlCWTtFQUNJLDRCQUFBO0FDZ0NoQjtBRDVCUTtFQUNJLFdBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUM4Qlo7QUQxQlE7RUFDSSxtREFBQTtFQUNBLG9CQUFBO0FDNEJaO0FEMUJZO0VBQ0ksNkRBQUE7QUM0QmhCO0FEekJZO0VINFhBLFlBQUE7RUFwTEosZ0JHdE15QztFSHVNekMsa0JHdk02QjtFSHVPakMsZUd2TzRCO0VId081QixtQkd4T3VDO0FDOEIzQztBSnVIUTtFQXdPSSxXQUFBO0FJNVZaO0FKeUtZO0VBQ0k7SUFFUSxrQkFBQTtJQUdBLG1CQUFBO0lBR0oseUJHbk42QjtJSG9ON0Isd0JHcE42QjtJSHFON0Isd0JHck5pQjtJSHNOakIsdUJHdE5pQjtFQzJDbkM7QUFDRjtBRDFDZ0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQzRDcEI7QUR4Q1k7RUhvUkEsV0duUjRCO0VIOExoQyxxQkc3THlDO0VBQ2pDLDBEQUFBO0FDMENoQjtBSmdHUTtFQTBJSSxXQUFBO0VBQ0EsWUFBQTtFQUVBLFVHelI0QjtBQ2lEeEM7QUpnSlk7RUFDSTtJQUtRLG1CQUFBO0lBS0osMkJHM002QjtJSDRNN0IsMEJHNU02QjtFQ3VEL0M7QUFDRjtBRHBEWTtFQUNJLG9FQUFBO0FDc0RoQjtBRGxEUTtFQUNJLHFEQUFBO0VIdVFBLFVHdFFvQztFSGlMeEMsb0JHaEwrQjtBQ29EdkM7QUoyRVE7RUEwSUksV0FBQTtFQUNBLFlBQUE7RUFHQSxXRzlRb0M7QUMwRGhEO0FKMkhZO0VBQ0k7SUFFUSxrQkFBQTtJQU1KLDZCRzdMbUI7SUg4TG5CLDRCRzlMbUI7RUNnRXJDO0FBQ0Y7QUQ5RFE7RUFDSSwrREFBQTtBQ2dFWjtBRDdEUTtFQUNJLG1CQUFBO0VBQ0Esb0JBQUE7RUh3TVIsYUd2TXdCO0VId014QixnQkd4TWlDO0VBQ3pCLDhDQUFBO0VBQ0Esb0JBQUE7QUNnRVo7QUQ5RFk7RUFDSSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsOEJBQUE7QUNnRWhCO0FENURRO0VBQ0ksZUFBQTtBQzhEWjtBRDFESTs7RUFLSSxjQUFBO0FDeURSO0FENURROztFQUNJLGdCQUFBO0FDK0RaO0FEdkRJO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0FDMERSO0FOaFBBOzs7O0VBQUE7QUNBQTs7OztFQUFBO0FDQUE7Ozs7OztFQUFBO0FDQUE7Ozs7RUFBQTtBQ0FBOzs7O0VBQUE7QUF1RkE7Ozs7RUFBQTtBRWxGSTtFQUNJLCtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQThRUjtBQTdRUTtFQUNJLCtCQUFBO0VBQ0EsNkJBQUE7QUErUVo7QUEzUUc7RUFDSyxpQkFBQTtBQTZRUjtBQXpRUTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtBQTJRWjtBQXhRUTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrREFBQTtFQUNBLHdEQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUprWEEsV0lqWHdCO0VKcVloQyxTSXJZMEI7QUEyUTlCO0FKakNRO0VBMElJLFdBQUE7RUFDQSxZQUFBO0VBRUEsVUl2WHdCO0FBZ1JwQztBQTVRSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUErUVI7QUE3UVE7RUptUkEsaUJJbFJxQztBQStRN0M7QUpNWTtFQUNJO0lBS1EsbUJBQUE7SUFLSix1QkloU3lCO0lKaVN6QixzQklqU3lCO0VBcVIzQztBQUNGO0FBblJRO0VBQ0ksZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQXFSWjtBQWxSUTtFSnVRQSxnQkl0UStCO0FBb1J2QztBSlZZO0VBQ0k7SUFFUSxrQkFBQTtJQU1KLHlCSW5SbUI7SUpvUm5CLHdCSXBSbUI7RUEwUnJDO0FBQ0Y7QUFyUkk7RUFDSSx1QkFBQTtBQXdSUiIsImZpbGUiOiJzcmMvYWRkb25zL21lc3NhZ2VzL3BhZ2VzL2Rpc2N1c3Npb24vZGlzY3Vzc2lvbi5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogQXBwIEdsb2JhbCB2YXJpYWJsZXMgU0NTU1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIFBsYWNlIGhlcmUgdGhlIGRpZmZlcmVudCBmaWxlcyB5b3Ugc2hvdWxkIGltcG9ydCB0byB1c2UgZ2xvYmFsIHZhcmlhYmxlcy5cclxuICovXHJcblxyXG4kZm9udC1wYXRoOiBcIi4uL2Fzc2V0cy9mb250c1wiO1xyXG4kYXNzZXRzLXBhdGg6IFwiLi4vYXNzZXRzXCI7XHJcbkBpbXBvcnQgXCIuL2dsb2JhbHMubWl4aW5zLnNjc3NcIjtcclxuQGltcG9ydCBcIi4vZ2xvYmFscy5taXhpbnMuaW9uaWMuc2Nzc1wiO1xyXG5AaW1wb3J0IFwiLi9nbG9iYWxzLmN1c3RvbS5zY3NzXCI7XHJcbkBpbXBvcnQgXCIuL2dsb2JhbHMudmFyaWFibGVzLnNjc3NcIjtcclxuIiwiLypcclxuICogQXBwIGN1c3RvbSBtaXhpbnMgZm9yIFNDU1NcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBQbGFjZSBoZXJlIG91ciBjdXN0b20gbWl4aW5zLlxyXG4gKi9cclxuXHJcbiBAbWl4aW4gY29yZS1mb2N1cygpIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAmOjphZnRlciB7XHJcbiAgICAgICAgQGluY2x1ZGUgcG9zaXRpb24oMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIEBpbmNsdWRlIGNvcmUtZm9jdXMtc3R5bGUoKTtcclxuICAgIH1cclxuIH1cclxuXHJcbiBAbWl4aW4gY29yZS1mb2N1cy1zdHlsZSgpIHtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCB2YXIoLS1hMTF5LWZvY3VzLXdpZHRoKSAxcHggdmFyKC0tYTExeS1mb2N1cy1jb2xvcik7XHJcbiAgICAvLyBUaGlja2VyIG9wdGlvbjpcclxuICAgIC8vIGJvcmRlcjogdmFyKC0tYTExeS1mb2N1cy13aWR0aCkgc29saWQgdmFyKC0tYTExeS1mb2N1cy1jb2xvcik7XHJcbn1cclxuXHJcbkBtaXhpbiBjb3JlLXRyYW5zaXRpb24oJHdoZXJlOiBhbGwsICR0aW1lOiA1MDBtcykge1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAkd2hlcmUgJHRpbWUgZWFzZS1pbi1vdXQ7XHJcbiAgICAtbW96LXRyYW5zaXRpb246ICR3aGVyZSAkdGltZSBlYXNlLWluLW91dDtcclxuICAgIC1tcy10cmFuc2l0aW9uOiAkd2hlcmUgJHRpbWUgZWFzZS1pbi1vdXQ7XHJcbiAgICAtby10cmFuc2l0aW9uOiAkd2hlcmUgJHRpbWUgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiAkd2hlcmUgJHRpbWUgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbkBtaXhpbiBwdXNoLWFycm93LWNvbG9yKCRjb2xvcjogZGVkZWRlLCAkZmxpcC1ydGw6IGZhbHNlKSB7XHJcbiAgICAkc3ZnOiBcIjxzdmclMjB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTIwdmlld0JveD0nMCUyMDAlMjAxMiUyMDIwJz48cGF0aCUyMGQ9J00yLDIwbC0yLTJsOC04TDAsMmwyLTJsMTAsMTBMMiwyMHonJTIwZmlsbD0nJTIzI3skY29sb3J9Jy8+PC9zdmc+XCI7XHJcbiAgICBAaWYgJGZsaXAtcnRsICE9IHRydWUge1xyXG4gICAgICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsI3skc3ZnfVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9IEBlbHNlIHtcclxuICAgICAgICAkZmxpcHBlZC1zdmc6IFwiPHN2ZyUyMHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclMjB2aWV3Qm94PScwJTIwMCUyMDEyJTIwMjAnPjxwYXRoJTIwdHJhbnNmb3JtPSd0cmFuc2xhdGUoMjAsJTIwMCklMjBzY2FsZSgtMSwlMjAxKSclMjBkPSdNMiwyMGwtMi0ybDgtOEwwLDJsMi0ybDEwLDEwTDIsMjB6JyUyMGZpbGw9JyUyMyN7JGNvbG9yfScvPjwvc3ZnPlwiO1xyXG5cclxuICAgICAgICBAaW5jbHVkZSBsdHIgKCkge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwjeyRzdmd9XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBAaW5jbHVkZSBydGwoKSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCN7JGZsaXBwZWQtc3ZnfVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBib3JkZXItc3RhcnQoJHB4LCAkdHlwZTogbnVsbCwgJGNvbG9yOiBudWxsKSB7XHJcbiAgICBAaW5jbHVkZSBsdHIoKSB7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6ICRweCAkdHlwZSAkY29sb3I7XHJcbiAgICB9XHJcblxyXG4gICAgQGluY2x1ZGUgcnRsKCkge1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogJHB4ICR0eXBlICRjb2xvcjtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbkBtaXhpbiBib3JkZXItZW5kKCRweCwgJHR5cGU6IG51bGwsICRjb2xvcjogbnVsbCkge1xyXG4gICAgQGluY2x1ZGUgbHRyKCkge1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogJHB4ICR0eXBlICRjb2xvcjtcclxuICAgIH1cclxuXHJcbiAgICBAaW5jbHVkZSBydGwoKSB7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6ICRweCAkdHlwZSAkY29sb3I7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBzYWZlLWFyZWEtYm9yZGVyLXN0YXJ0KCRweCwgJHR5cGUsICRjb2xvcikge1xyXG4gICAgJHNhZmUtYXJlYS1wb3NpdGlvbjogY2FsYyhjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtbGVmdCkgKyAjeyRweH0pO1xyXG4gICAgJHNhZmUtYXJlYS1wb3NpdGlvbi1lbnY6IGNhbGMoZW52KHNhZmUtYXJlYS1pbnNldC1sZWZ0KSArICN7JHB4fSk7XHJcblxyXG4gICAgQGluY2x1ZGUgYm9yZGVyLXN0YXJ0KCRweCwgJHR5cGUsICRjb2xvcik7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xyXG4gICAgICAgIEBpbmNsdWRlIGJvcmRlci1zdGFydCgkc2FmZS1hcmVhLXBvc2l0aW9uLCAkdHlwZSwgJGNvbG9yKTtcclxuICAgICAgICBAaW5jbHVkZSBib3JkZXItc3RhcnQoJHNhZmUtYXJlYS1wb3NpdGlvbi1lbnYsICR0eXBlLCAkY29sb3IpO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gc2FmZS1hcmVhLWJvcmRlci1lbmQoJHB4LCAkdHlwZSwgJGNvbG9yKSB7XHJcbiAgICAkc2FmZS1hcmVhLXBvc2l0aW9uOiBjYWxjKGNvbnN0YW50KHNhZmUtYXJlYS1pbnNldC1yaWdodCkgKyAjeyRweH0pO1xyXG4gICAgJHNhZmUtYXJlYS1wb3NpdGlvbi1lbnY6IGNhbGMoZW52KHNhZmUtYXJlYS1pbnNldC1yaWdodCkgKyAjeyRweH0pO1xyXG5cclxuICAgIEBpbmNsdWRlIGJvcmRlci1lbmQoJHB4LCAkdHlwZSwgJGNvbG9yKTtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XHJcbiAgICAgICAgQGluY2x1ZGUgYm9yZGVyLWVuZCgkc2FmZS1hcmVhLXBvc2l0aW9uLCAkdHlwZSwgJGNvbG9yKTtcclxuICAgICAgICBAaW5jbHVkZSBib3JkZXItZW5kKCRzYWZlLWFyZWEtcG9zaXRpb24tZW52LCAkdHlwZSwgJGNvbG9yKTtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIHNhZmUtYXJlYS1tYXJnaW4taG9yaXpvbnRhbCgkc3RhcnQsICRlbmQ6ICRzdGFydCkge1xyXG4gICAgJHNhZmUtYXJlYS1lbmQ6IG51bGw7XHJcbiAgICAkc2FmZS1hcmVhLXN0YXJ0OiBudWxsO1xyXG4gICAgJHNhZmUtYXJlYS1zdGFydC1lbnY6IG51bGw7XHJcbiAgICAkc2FmZS1hcmVhLWVuZC1lbnY6IG51bGw7XHJcblxyXG4gICAgQGlmICgkZW5kKSB7XHJcbiAgICAgICAgJHNhZmUtYXJlYS1lbmQ6IGNhbGMoY29uc3RhbnQoc2FmZS1hcmVhLWluc2V0LXJpZ2h0KSArICN7JGVuZH0pO1xyXG4gICAgICAgICRzYWZlLWFyZWEtZW5kLWVudjogY2FsYyhlbnYoc2FmZS1hcmVhLWluc2V0LXJpZ2h0KSArICN7JGVuZH0pO1xyXG4gICAgfVxyXG4gICAgQGlmICgkc3RhcnQpIHtcclxuICAgICAgICAkc2FmZS1hcmVhLXN0YXJ0OiBjYWxjKGNvbnN0YW50KHNhZmUtYXJlYS1pbnNldC1sZWZ0KSArICN7JHN0YXJ0fSk7XHJcbiAgICAgICAgJHNhZmUtYXJlYS1zdGFydC1lbnY6IGNhbGMoZW52KHNhZmUtYXJlYS1pbnNldC1sZWZ0KSArICN7JHN0YXJ0fSk7XHJcbiAgICB9XHJcblxyXG4gICAgQGluY2x1ZGUgbWFyZ2luLWhvcml6b250YWwoJHN0YXJ0LCAkZW5kKTtcclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xyXG4gICAgICAgIEBpbmNsdWRlIG1hcmdpbi1ob3Jpem9udGFsKCRzYWZlLWFyZWEtc3RhcnQsICRzYWZlLWFyZWEtZW5kKTtcclxuICAgICAgICBAaW5jbHVkZSBtYXJnaW4taG9yaXpvbnRhbCgkc2FmZS1hcmVhLXN0YXJ0LWVudiwgJHNhZmUtYXJlYS1lbmQtZW52KTtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIHNhZmUtYXJlYS1wYWRkaW5nLXN0YXJ0KCRzdGFydCwgJGVuZCkge1xyXG4gICAgJHNhZmUtYXJlYS1zdGFydDogY2FsYyhjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtbGVmdCkgKyAjeyRzdGFydH0pO1xyXG4gICAgJHNhZmUtYXJlYS1zdGFydC1lbnY6IGNhbGMoZW52KHNhZmUtYXJlYS1pbnNldC1sZWZ0KSArICN7JHN0YXJ0fSk7XHJcblxyXG4gICAgQGluY2x1ZGUgcGFkZGluZy1ob3Jpem9udGFsKCRzdGFydCwgJGVuZCk7XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcclxuICAgICAgICBAaW5jbHVkZSBwYWRkaW5nLWhvcml6b250YWwoJHNhZmUtYXJlYS1zdGFydCwgJGVuZCk7XHJcbiAgICAgICAgQGluY2x1ZGUgcGFkZGluZy1ob3Jpem9udGFsKCRzYWZlLWFyZWEtc3RhcnQtZW52LCAkZW5kKTtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIHNhZmUtYXJlYS1wYWRkaW5nLWVuZCgkc3RhcnQsICRlbmQpIHtcclxuICAgICRzYWZlLWFyZWEtZW5kOiBjYWxjKGNvbnN0YW50KHNhZmUtYXJlYS1pbnNldC1yaWdodCkgKyAjeyRlbmR9KTtcclxuICAgICRzYWZlLWFyZWEtZW5kLWVudjogY2FsYyhlbnYoc2FmZS1hcmVhLWluc2V0LXJpZ2h0KSArICN7JGVuZH0pO1xyXG5cclxuICAgIEBpbmNsdWRlIHBhZGRpbmctaG9yaXpvbnRhbCgkc3RhcnQsICRlbmQpO1xyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XHJcbiAgICAgICAgQGluY2x1ZGUgcGFkZGluZy1ob3Jpem9udGFsKCRzdGFydCwgJHNhZmUtYXJlYS1lbmQpO1xyXG4gICAgICAgIEBpbmNsdWRlIHBhZGRpbmctaG9yaXpvbnRhbCgkc3RhcnQsICRzYWZlLWFyZWEtZW5kLWVudik7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBzYWZlLWFyZWEtcG9zaXRpb24oJHRvcDogbnVsbCwgJGVuZDogbnVsbCwgJGJvdHRvbTogbnVsbCwgJHN0YXJ0OiBudWxsKSB7XHJcbiAgICBAaW5jbHVkZSBwb3NpdGlvbi1ob3Jpem9udGFsKCRzdGFydCwgJGVuZCk7XHJcbiAgICBAaW5jbHVkZSBzYWZlLXBvc2l0aW9uLWhvcml6b250YWwoJHN0YXJ0LCAkZW5kKTtcclxuICAgIHRvcDogJHRvcDtcclxuICAgIGJvdHRvbTogJGJvdHRvbTtcclxufVxyXG5cclxuQG1peGluIGNvcmUtaGVhZGluZ3MoKSB7XHJcbiAgICBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgfVxyXG4gICAgaDIsIC5pdGVtLWhlYWRpbmcge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIH1cclxuICAgIGgzIHtcclxuICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICB9XHJcbiAgICBoNCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgaDUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxuICAgIGg2IHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBjb3JlLWFzLWl0ZW1zKCkge1xyXG4gICAgLml0ZW0tbWQuaXRlbS1ibG9jayA+IC5pdGVtLWlubmVyIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGxpc3QtbWQtYm9yZGVyLWNvbG9yO1xyXG4gICAgfVxyXG5cclxuICAgIC5pdGVtLWlvcy5pdGVtLWJsb2NrID4gLml0ZW0taW5uZXIge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206ICRoYWlybGluZXMtd2lkdGggc29saWQgJGxpc3QtaW9zLWJvcmRlci1jb2xvcjtcclxuICAgIH1cclxuXHJcbiAgICAmOmxhc3QtY2hpbGQgLml0ZW0gPiAuaXRlbS1pbm5lciB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGNvcmUtaXRlbXMoKSB7XHJcbiAgICAmLml0ZW0tbWQuaXRlbS1ibG9jayA+IC5pdGVtLWlubmVyIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGxpc3QtbWQtYm9yZGVyLWNvbG9yO1xyXG4gICAgfVxyXG5cclxuICAgICYuaXRlbS1pb3MuaXRlbS1ibG9jayA+IC5pdGVtLWlubmVyIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAkaGFpcmxpbmVzLXdpZHRoIHNvbGlkICRsaXN0LWlvcy1ib3JkZXItY29sb3I7XHJcbiAgICB9XHJcblxyXG4gICAgJi5pdGVtLWJsb2NrOmxhc3QtY2hpbGQgPiAuaXRlbS1pbm5lciB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGRhcmttb2RlKCkge1xyXG4gICAgJHJvb3Q6ICN7Jn07XHJcblxyXG4gICAgQGF0LXJvb3QgYm9keS5kYXJrIHtcclxuICAgICAgICAjeyRyb290fSB7XHJcbiAgICAgICAgICAgIEBjb250ZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGhvcml6b250YWxfc2Nyb2xsX2l0ZW0oJHdpZHRoLCAkbWluLXdpZHRoLCAkbWF4LXdpZHRoKSB7XHJcbiAgICBmbGV4OiAwIDAgJHdpZHRoO1xyXG4gICAgbWluLXdpZHRoOiAkbWluLXdpZHRoO1xyXG4gICAgbWF4LXdpZHRoOiAkbWF4LXdpZHRoO1xyXG4gICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxuICAgIGlvbi1jYXJkIHtcclxuICAgICAgICAtLXZlcnRpY2FsLW1hcmdpbjogMTBweDtcclxuICAgICAgICAtLWhvcml6b250YWwtbWFyZ2luOiAxMHB4O1xyXG5cclxuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gdmFyKC0tdmVydGljYWwtbWFyZ2luKSAtIHZhcigtLXZlcnRpY2FsLW1hcmdpbikpO1xyXG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gdmFyKC0tdmVydGljYWwtbWFyZ2luKSAtIHZhcigtLXZlcnRpY2FsLW1hcmdpbikpO1xyXG4gICAgICAgIG1hcmdpbjogdmFyKC0tdmVydGljYWwtbWFyZ2luKSB2YXIoLS1ob3Jpem9udGFsLW1hcmdpbik7XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzNjBweCkge1xyXG4gICAgICAgICAgICAtLWhvcml6b250YWwtbWFyZ2luOiA2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5pb24tdGV4dC13cmFwIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgLml0ZW0taGVhZGluZywgaDIsIHAge1xyXG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vLyBDb2xvciBtaXhpbnMuXHJcbkBmdW5jdGlvbiBnZXRfYnJpZ2h0bmVzcygkY29sb3IpIHtcclxuICAgIEByZXR1cm4gKHJlZCgkY29sb3IpICsgZ3JlZW4oJGNvbG9yKSArIGJsdWUoJGNvbG9yKSkgLyAzO1xyXG59XHJcblxyXG5AZnVuY3Rpb24gZ2V0X2NvbnRyYXN0X2NvbG9yKCRjb2xvcikge1xyXG4gICAgJGJyaWdodG5lc3M6IGdldF9icmlnaHRuZXNzKCRjb2xvcik7XHJcblxyXG4gICAgQHJldHVybiBpZigkYnJpZ2h0bmVzcyA8IDEyNywgd2hpdGUsIGJsYWNrKTtcclxufVxyXG4iLCIvKlxyXG4gKiBJbXBvcnRlZCBpb25pYyBtaXhpbnMgZm9yIFNDU1NcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBQbGFjZSBoZXJlIG91ciBjdXN0b20gbWl4aW5zLlxyXG4gKiBFeHRyYWN0ZWQgZnJvbSBpb25pYy5taXhpbnMuc2Nzc1xyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vaW9uaWMtdGVhbS9pb25pYy1mcmFtZXdvcmsvYmxvYi9tYXN0ZXIvY29yZS9zcmMvdGhlbWVzL2lvbmljLm1peGlucy5zY3NzXHJcbiAqL1xyXG5cclxuLy8gUmVzcG9uc2l2ZSBNaXhpbnNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gQ3JlYXRlcyBhIGZpeGVkIHdpZHRoIGZvciB0aGUgZ3JpZCBiYXNlZCBvbiB0aGUgc2NyZWVuIHNpemVcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkBtaXhpbiBtYWtlLWdyaWQtd2lkdGhzKCR3aWR0aHM6ICRncmlkLXdpZHRocywgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XHJcbiAgQGVhY2ggJGJyZWFrcG9pbnQsICR3aWR0aCBpbiAkd2lkdGhzIHtcclxuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGJyZWFrcG9pbnQsICRicmVha3BvaW50cykge1xyXG4gICAgICB3aWR0aDogJHdpZHRoO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4vLyBBZGRzIHBhZGRpbmcgdG8gdGhlIGVsZW1lbnQgYmFzZWQgb24gYnJlYWtwb2ludHNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkBtaXhpbiBtYWtlLWJyZWFrcG9pbnQtcGFkZGluZygkcGFkZGluZ3MpIHtcclxuICBAZWFjaCAkYnJlYWtwb2ludCBpbiBtYXAta2V5cygkcGFkZGluZ3MpIHtcclxuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGJyZWFrcG9pbnQpIHtcclxuICAgICAgJHBhZGRpbmc6IG1hcC1nZXQoJHBhZGRpbmdzLCAkYnJlYWtwb2ludCk7XHJcblxyXG4gICAgICBAaW5jbHVkZSBwYWRkaW5nKCRwYWRkaW5nKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIEdldHMgdGhlIGFjdGl2ZSBjb2xvcidzIGNzcyB2YXJpYWJsZSBmcm9tIGEgdmFyaWF0aW9uLiBBbHBoYSBpcyBvcHRpb25hbC5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gRXhhbXBsZSB1c2FnZTpcclxuLy8gY3VycmVudC1jb2xvcihiYXNlKSA9PiB2YXIoLS1pb24tY29sb3ItYmFzZSlcclxuLy8gY3VycmVudC1jb2xvcihjb250cmFzdCwgMC4xKSA9PiByZ2JhKHZhcigtLWlvbi1jb2xvci1jb250cmFzdC1yZ2IpLCAwLjEpXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkBmdW5jdGlvbiBjdXJyZW50LWNvbG9yKCR2YXJpYXRpb24sICRhbHBoYTogbnVsbCkge1xyXG4gIEBpZiAkYWxwaGEgPT0gbnVsbCB7XHJcbiAgICBAcmV0dXJuIHZhcigtLWlvbi1jb2xvci0jeyR2YXJpYXRpb259KTtcclxuICB9IEBlbHNlIHtcclxuICAgIEByZXR1cm4gcmdiYSh2YXIoLS1pb24tY29sb3ItI3skdmFyaWF0aW9ufS1yZ2IpLCAjeyRhbHBoYX0pO1xyXG4gIH1cclxufVxyXG5cclxuLy8gTWl4ZXMgYSBjb2xvciB3aXRoIGJsYWNrIHRvIGNyZWF0ZSBpdHMgc2hhZGUuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkBmdW5jdGlvbiBnZXQtY29sb3Itc2hhZGUoJGNvbG9yKSB7XHJcbiAgQHJldHVybiBtaXgoIzAwMCwgJGNvbG9yLCAxMiUpO1xyXG59XHJcblxyXG4vLyBNaXhlcyBhIGNvbG9yIHdpdGggd2hpdGUgdG8gY3JlYXRlIGl0cyB0aW50LlxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5AZnVuY3Rpb24gZ2V0LWNvbG9yLXRpbnQoJGNvbG9yKSB7XHJcbiAgQHJldHVybiBtaXgoI2ZmZiwgJGNvbG9yLCAxMCUpO1xyXG59XHJcblxyXG4vLyBDb252ZXJ0cyBhIGNvbG9yIHRvIGEgY29tbWEgc2VwYXJhdGVkIHJnYi5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuQGZ1bmN0aW9uIGNvbG9yLXRvLXJnYi1saXN0KCRjb2xvcikge1xyXG4gIEByZXR1cm4gI3tyZWQoJGNvbG9yKX0sI3tncmVlbigkY29sb3IpfSwje2JsdWUoJGNvbG9yKX07XHJcbn1cclxuXHJcblxyXG4gLy8gSW9uaWMgQ29sb3JzXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIEdlbmVyYXRlcyB0aGUgY29sb3IgY2xhc3NlcyBhbmQgdmFyaWFibGVzIGJhc2VkIG9uIHRoZVxyXG4vLyBjb2xvcnMgbWFwXHJcblxyXG5AbWl4aW4gZ2VuZXJhdGUtY29sb3IoJGNvbG9yLW5hbWUsICRjb2xvcnMpIHtcclxuICAgICRiYXNlOiBtYXAtZ2V0KCRjb2xvcnMsICRjb2xvci1uYW1lKTtcclxuXHJcbiAgICAkY29udHJhc3Q6IGdldF9jb250cmFzdF9jb2xvcigkYmFzZSk7XHJcbiAgICAkc2hhZGU6IGdldC1jb2xvci1zaGFkZSgkYmFzZSk7XHJcbiAgICAkdGludDogZ2V0LWNvbG9yLXRpbnQoJGJhc2UpO1xyXG5cclxuICAgIC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9OiB2YXIoLS0jeyRjb2xvci1uYW1lfSwgI3skYmFzZX0pO1xyXG4gICAgLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tYmFzZTogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9KTtcclxuICAgIC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LXJnYjogI3tjb2xvci10by1yZ2ItbGlzdCgkYmFzZSl9O1xyXG4gICAgLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tY29udHJhc3Q6ICN7JGNvbnRyYXN0fTtcclxuICAgIC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LWNvbnRyYXN0LXJnYjogI3tjb2xvci10by1yZ2ItbGlzdCgkY29udHJhc3QpfTtcclxuICAgIC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LXNoYWRlOiAjeyRzaGFkZX07XHJcbiAgICAtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS10aW50OiAjeyR0aW50fTtcclxuXHJcbiAgICAuaW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9IHtcclxuICAgICAgICAtLWlvbi1jb2xvcjogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9KTtcclxuICAgICAgICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tYmFzZSk7XHJcbiAgICAgICAgLS1pb24tY29sb3ItcmdiOiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tcmdiKTtcclxuICAgICAgICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yLW5hbWV9LWNvbnRyYXN0KTtcclxuICAgICAgICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS1jb250cmFzdC1yZ2IpO1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3ItI3skY29sb3ItbmFtZX0tc2hhZGUpO1xyXG4gICAgICAgIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvci1uYW1lfS10aW50KTtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGlucHV0LWNvdmVyKCkge1xyXG4gICAgQGluY2x1ZGUgcG9zaXRpb24oMCwgbnVsbCwgbnVsbCwgMCk7XHJcbiAgICBAaW5jbHVkZSBtYXJnaW4oMCk7XHJcblxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG5cclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG5cclxuICAgICY6Oi1tb3otZm9jdXMtaW5uZXIge1xyXG4gICAgICAgIGJvcmRlcjogMDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIHRleHQtaW5oZXJpdCgpIHtcclxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgZm9udC1zdHlsZTogaW5oZXJpdDtcclxuICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IGluaGVyaXQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XHJcbiAgICB0ZXh0LWluZGVudDogaW5oZXJpdDtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGluaGVyaXQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcclxuICAgIHRleHQtYWxpZ246IGluaGVyaXQ7XHJcbiAgICB3aGl0ZS1zcGFjZTogaW5oZXJpdDtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG59XHJcblxyXG5AbWl4aW4gYnV0dG9uLXN0YXRlKCkge1xyXG4gICAgQGluY2x1ZGUgcG9zaXRpb24oMCwgMCwgMCwgMCk7XHJcblxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG5cclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcblxyXG4gICAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLy8gRm9udCBzbW9vdGhpbmdcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbkBtaXhpbiBmb250LXNtb290aGluZygpIHtcclxuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxufVxyXG5cclxuLy8gR2V0IHRoZSBrZXkgZnJvbSBhIG1hcCBiYXNlZCBvbiB0aGUgaW5kZXhcclxuQGZ1bmN0aW9uIGluZGV4LXRvLWtleSgkbWFwLCAkaW5kZXgpIHtcclxuICAgICRrZXlzOiBtYXAta2V5cygkbWFwKTtcclxuXHJcbiAgICBAcmV0dXJuIG50aCgka2V5cywgJGluZGV4KTtcclxufVxyXG5cclxuXHJcbi8vIEJyZWFrcG9pbnQgTWl4aW5zXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLy8gQnJlYWtwb2ludCB2aWV3cG9ydCBzaXplcyBhbmQgbWVkaWEgcXVlcmllcy5cclxuLy9cclxuLy8gQnJlYWtwb2ludHMgYXJlIGRlZmluZWQgYXMgYSBtYXAgb2YgKG5hbWU6IG1pbmltdW0gd2lkdGgpLCBvcmRlciBmcm9tIHNtYWxsIHRvIGxhcmdlOlxyXG4vL1xyXG4vLyAgICAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpXHJcbi8vXHJcbi8vIFRoZSBtYXAgZGVmaW5lZCBpbiB0aGUgYCRzY3JlZW4tYnJlYWtwb2ludHNgIGdsb2JhbCB2YXJpYWJsZSBpcyB1c2VkIGFzIHRoZSBgJGJyZWFrcG9pbnRzYCBhcmd1bWVudCBieSBkZWZhdWx0LlxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4vLyBNaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBzbWFsbGVzdCAoZmlyc3QpIGJyZWFrcG9pbnQuXHJcbi8vXHJcbi8vICAgID4+IGJyZWFrcG9pbnQtbWluKHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxyXG4vLyAgICA1NzZweFxyXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cykge1xyXG4gICAgJG1pbjogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcclxuXHJcbiAgICBAcmV0dXJuIGlmKCRuYW1lICE9IGluZGV4LXRvLWtleSgkYnJlYWtwb2ludHMsIDEpLCAkbWluLCBudWxsKTtcclxufVxyXG5cclxuLy8gUmV0dXJucyBhIGJsYW5rIHN0cmluZyBpZiBzbWFsbGVzdCBicmVha3BvaW50LCBvdGhlcndpc2UgcmV0dXJucyB0aGUgbmFtZSB3aXRoIGEgZGFzaCBpbmZyb250LlxyXG4vLyBVc2VmdWwgZm9yIG1ha2luZyByZXNwb25zaXZlIHV0aWxpdGllcy5cclxuLy9cclxuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeCh4cywgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcclxuLy8gICAgXCJcIiAgKFJldHVybnMgYSBibGFuayBzdHJpbmcpXHJcbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXHJcbi8vICAgIFwiLXNtXCJcclxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtaW5maXgoJG5hbWUsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cykge1xyXG4gICAgQHJldHVybiBpZihicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKSA9PSBudWxsLCBcIlwiLCBcIi0jeyRuYW1lfVwiKTtcclxufVxyXG5cclxuLy8gTWVkaWEgb2YgYXQgbGVhc3QgdGhlIG1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LlxyXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIHdpZGVyLlxyXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzKSB7XHJcbiAgICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcclxuICAgIEBpZiAkbWluIHtcclxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikge1xyXG4gICAgICAgICAgICBAY29udGVudDtcclxuICAgICAgICB9XHJcbiAgICB9IEBlbHNlIHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxuLy8gTmFtZSBvZiB0aGUgbmV4dCBicmVha3BvaW50LCBvciBudWxsIGZvciB0aGUgbGFzdCBicmVha3BvaW50LlxyXG4vL1xyXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20pXHJcbi8vICAgIG1kXHJcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcclxuLy8gICAgbWRcclxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAkYnJlYWtwb2ludC1uYW1lczogKHhzIHNtIG1kIGxnIHhsKSlcclxuLy8gICAgbWRcclxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkc2NyZWVuLWJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludC1uYW1lczogbWFwLWtleXMoJGJyZWFrcG9pbnRzKSkge1xyXG4gICAgJG46IGluZGV4KCRicmVha3BvaW50LW5hbWVzLCAkbmFtZSk7XHJcbiAgICBAcmV0dXJuIGlmKCRuIDwgbGVuZ3RoKCRicmVha3BvaW50LW5hbWVzKSwgbnRoKCRicmVha3BvaW50LW5hbWVzLCAkbiArIDEpLCBudWxsKTtcclxufVxyXG5cclxuLy8gTWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgc21hbGxlc3QgKGZpcnN0KSBicmVha3BvaW50LlxyXG4vLyBUaGUgbWF4aW11bSB2YWx1ZSBpcyByZWR1Y2VkIGJ5IDAuMDJweCB0byB3b3JrIGFyb3VuZCB0aGUgbGltaXRhdGlvbnMgb2ZcclxuLy8gYG1pbi1gIGFuZCBgbWF4LWAgcHJlZml4ZXMgYW5kIHZpZXdwb3J0cyB3aXRoIGZyYWN0aW9uYWwgd2lkdGhzLlxyXG4vL1xyXG4vLyBTZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL21lZGlhcXVlcmllcy00LyNtcS1taW4tbWF4XHJcbi8vIFVzZXMgMC4wMnB4IHJhdGhlciB0aGFuIDAuMDFweCB0byB3b3JrIGFyb3VuZCBhIGN1cnJlbnQgcm91bmRpbmcgYnVnIGluIFNhZmFyaS5cdC8vIFVzZXMgMC4wMnB4IHJhdGhlciB0aGFuIDAuMDFweCB0byB3b3JrIGFyb3VuZCBhIGN1cnJlbnQgcm91bmRpbmcgYnVnIGluIFNhZmFyaS5cclxuLy8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzgyNjFcdC8vIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTc4MjYxXHJcbi8vXHJcbi8vICAgID4+IGJyZWFrcG9pbnQtbWF4KG1kLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxyXG4vLyAgICA3NjcuOThweFxyXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50czogJHNjcmVlbi1icmVha3BvaW50cykge1xyXG4gICAgJG1heDogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcclxuICAgIEByZXR1cm4gaWYoJG1heCBhbmQgJG1heCA+IDAsICRtYXggLSAuMDIsIG51bGwpO1xyXG59XHJcblxyXG4vLyBNZWRpYSBvZiBhdCBtb3N0IHRoZSBtYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgbGFyZ2VzdCBicmVha3BvaW50LlxyXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIG5hcnJvd2VyLlxyXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRzY3JlZW4tYnJlYWtwb2ludHMpIHtcclxuICAgICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xyXG4gICAgQGlmICRtYXgge1xyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbWF4KSB7XHJcbiAgICAgICAgICAgIEBjb250ZW50O1xyXG4gICAgICAgIH1cclxuICAgIH0gQGVsc2Uge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLy8gVGV4dCBEaXJlY3Rpb24gLSBsdHIgLyBydGxcclxuLy9cclxuLy8gQ1NTIGRlZmF1bHRzIHRvIHVzZSB0aGUgbHRyIGNzcywgYW5kIGFkZHMgW2Rpcj1ydGxdIHNlbGVjdG9yc1xyXG4vLyB0byBvdmVycmlkZSBsdHIgZGVmYXVsdHMuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbkBtaXhpbiBtdWx0aS1kaXIoKSB7XHJcbiAgICBAY29udGVudDtcclxuXHJcbiAgICAvLyAkcm9vdDogI3smfTtcclxuICAgIC8vIEBhdC1yb290IFtkaXJdIHtcclxuICAgIC8vICAgI3skcm9vdH0ge1xyXG4gICAgLy8gICAgIEBjb250ZW50O1xyXG4gICAgLy8gICB9XHJcbiAgICAvLyB9XHJcbn1cclxuXHJcbkBtaXhpbiBydGwoKSB7XHJcbiAgICAkcm9vdDogI3smfTtcclxuXHJcbiAgICBAYXQtcm9vdCBbZGlyPXJ0bF0ge1xyXG4gICAgICAgICN7JHJvb3R9IHtcclxuICAgICAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gbHRyKCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbn1cclxuXHJcblxyXG4vLyBTVkcgQmFja2dyb3VuZCBJbWFnZSBNaXhpblxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN2Z1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkBtaXhpbiBzdmctYmFja2dyb3VuZC1pbWFnZSgkc3ZnLCAkZmxpcC1ydGw6IGZhbHNlKSB7XHJcbiAgICAkdXJsOiB1cmwtZW5jb2RlKCRzdmcpO1xyXG4gICAgJHZpZXdCb3g6IHN0ci1zcGxpdChzdHItZXh0cmFjdCgkc3ZnLCBcInZpZXdCb3g9J1wiLCBcIidcIiksIFwiIFwiKTtcclxuXHJcbiAgICBAaWYgJGZsaXAtcnRsICE9IHRydWUgb3IgJHZpZXdCb3ggPT0gbnVsbCB7XHJcbiAgICAgICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwjeyR1cmx9XCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0gQGVsc2Uge1xyXG4gICAgICAgICR0cmFuc2Zvcm06IFwidHJhbnNmb3JtPSd0cmFuc2xhdGUoI3tudGgoJHZpZXdCb3gsIDMpfSwgMCkgc2NhbGUoLTEsIDEpJ1wiO1xyXG4gICAgICAgICRmbGlwcGVkLXVybDogJHN2ZztcclxuICAgICAgICAkZmxpcHBlZC11cmw6IHN0ci1yZXBsYWNlKCRmbGlwcGVkLXVybCwgXCI8cGF0aFwiLCBcIjxwYXRoICN7JHRyYW5zZm9ybX1cIik7XHJcbiAgICAgICAgJGZsaXBwZWQtdXJsOiBzdHItcmVwbGFjZSgkZmxpcHBlZC11cmwsIFwiPGxpbmVcIiwgXCI8bGluZSAjeyR0cmFuc2Zvcm19XCIpO1xyXG4gICAgICAgICRmbGlwcGVkLXVybDogc3RyLXJlcGxhY2UoJGZsaXBwZWQtdXJsLCBcIjxwb2x5Z29uXCIsIFwiPHBvbHlnb24gI3skdHJhbnNmb3JtfVwiKTtcclxuICAgICAgICAkZmxpcHBlZC11cmw6IHVybC1lbmNvZGUoJGZsaXBwZWQtdXJsKTtcclxuXHJcbiAgICAgICAgQGluY2x1ZGUgbHRyICgpIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsI3skdXJsfVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgQGluY2x1ZGUgcnRsKCkge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwjeyRmbGlwcGVkLXVybH1cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBBZGQgcHJvcGVydHkgaG9yaXpvbnRhbFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuQG1peGluIHByb3BlcnR5LWhvcml6b250YWwoJHByb3AsICRzdGFydCwgJGVuZDogJHN0YXJ0KSB7XHJcbiAgICBAaWYgJHN0YXJ0ID09IDAgYW5kICRlbmQgPT0gMCB7XHJcbiAgICAgICAgI3skcHJvcH0tbGVmdDogJHN0YXJ0O1xyXG4gICAgICAgICN7JHByb3B9LXJpZ2h0OiAkZW5kO1xyXG5cclxuICAgIH0gQGVsc2Uge1xyXG4gICAgICAgICN7JHByb3B9LWxlZnQ6ICRzdGFydDtcclxuICAgICAgICAjeyRwcm9wfS1yaWdodDogJGVuZDtcclxuXHJcbiAgICAgICAgQGF0LXJvb3Qge1xyXG4gICAgICAgICAgICBAc3VwcG9ydHMgKChtYXJnaW4taW5saW5lLXN0YXJ0OiAwKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDApKSB7XHJcbiAgICAgICAgICAgICAgICAmIHtcclxuICAgICAgICAgICAgICAgICAgICBAaWYgJHN0YXJ0ICE9IG51bGwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAjeyRwcm9wfS1sZWZ0OiB1bnNldDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgQGlmICRlbmQgIT0gbnVsbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICN7JHByb3B9LXJpZ2h0OiB1bnNldDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtI3skcHJvcH0tc3RhcnQ6ICRzdGFydDtcclxuICAgICAgICAgICAgICAgICAgICAjeyRwcm9wfS1pbmxpbmUtc3RhcnQ6ICRzdGFydDtcclxuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LSN7JHByb3B9LWVuZDogJGVuZDtcclxuICAgICAgICAgICAgICAgICAgICAjeyRwcm9wfS1pbmxpbmUtZW5kOiAkZW5kO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBBZGQgcHJvcGVydHkgZm9yIGFsbCBkaXJlY3Rpb25zXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkcHJvcFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJHRvcFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbVxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XHJcbi8vIEBwYXJhbSB7Ym9vbGVhbn0gJGNvbnRlbnQgaW5jbHVkZSBjb250ZW50IG9yIHVzZSBkZWZhdWx0XHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuQG1peGluIHByb3BlcnR5KCRwcm9wLCAkdG9wLCAkZW5kOiAkdG9wLCAkYm90dG9tOiAkdG9wLCAkc3RhcnQ6ICRlbmQpIHtcclxuICAgIEBpbmNsdWRlIHByb3BlcnR5LWhvcml6b250YWwoJHByb3AsICRzdGFydCwgJGVuZCk7XHJcbiAgICAjeyRwcm9wfS10b3A6ICR0b3A7XHJcbiAgICAjeyRwcm9wfS1ib3R0b206ICRib3R0b207XHJcbn1cclxuXHJcbi8vIEFkZCBwYWRkaW5nIGhvcml6b250YWxcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJGVuZFxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkBtaXhpbiBwYWRkaW5nLWhvcml6b250YWwoJHN0YXJ0LCAkZW5kOiAkc3RhcnQpIHtcclxuICAgIEBpbmNsdWRlIHByb3BlcnR5LWhvcml6b250YWwocGFkZGluZywgJHN0YXJ0LCAkZW5kKTtcclxufVxyXG5cclxuLy8gQWRkIHBhZGRpbmcgZm9yIGFsbCBkaXJlY3Rpb25zXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5AbWl4aW4gcGFkZGluZygkdG9wLCAkZW5kOiAkdG9wLCAkYm90dG9tOiAkdG9wLCAkc3RhcnQ6ICRlbmQpIHtcclxuICAgIEBpbmNsdWRlIHByb3BlcnR5KHBhZGRpbmcsICR0b3AsICRlbmQsICRib3R0b20sICRzdGFydCk7XHJcbn1cclxuXHJcbi8vIEFkZCBtYXJnaW4gaG9yaXpvbnRhbFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJHN0YXJ0XHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuQG1peGluIG1hcmdpbi1ob3Jpem9udGFsKCRzdGFydCwgJGVuZDogJHN0YXJ0KSB7XHJcbiAgICBAaW5jbHVkZSBwcm9wZXJ0eS1ob3Jpem9udGFsKG1hcmdpbiwgJHN0YXJ0LCAkZW5kKTtcclxufVxyXG5cclxuLy8gQWRkIG1hcmdpbiBmb3IgYWxsIGRpcmVjdGlvbnNcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3BcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmRcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRib3R0b21cclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzdGFydFxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkBtaXhpbiBtYXJnaW4oJHRvcCwgJGVuZDogJHRvcCwgJGJvdHRvbTogJHRvcCwgJHN0YXJ0OiAkZW5kKSB7XHJcbiAgICBAaW5jbHVkZSBwcm9wZXJ0eShtYXJnaW4sICR0b3AsICRlbmQsICRib3R0b20sICRzdGFydCk7XHJcbn1cclxuXHJcbi8vIEFkZCBwb3NpdGlvbiBob3Jpem9udGFsXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnQgLSBhbW91bnQgdG8gcG9zaXRpb24gc3RhcnRcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRlbmQgLSBhbW91bnQgdG8gbGVmdDogMDsgZW5kXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuQG1peGluIHBvc2l0aW9uLWhvcml6b250YWwoJHN0YXJ0OiBudWxsLCAkZW5kOiBudWxsKSB7XHJcbiAgICBAaWYgJHN0YXJ0ID09ICRlbmQge1xyXG4gICAgICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcclxuICAgICAgICAgICAgbGVmdDogJHN0YXJ0O1xyXG4gICAgICAgICAgICByaWdodDogJGVuZDtcclxuICAgICAgICB9XHJcbiAgICB9IEBlbHNlIHtcclxuICAgICAgICBAaW5jbHVkZSBsdHIoKSB7XHJcbiAgICAgICAgICAgIGxlZnQ6ICRzdGFydDtcclxuICAgICAgICAgICAgcmlnaHQ6ICRlbmQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBpbmNsdWRlIHJ0bCgpIHtcclxuICAgICAgICAgICAgbGVmdDogdW5zZXQ7XHJcbiAgICAgICAgICAgIHJpZ2h0OiB1bnNldDtcclxuXHJcbiAgICAgICAgICAgIGxlZnQ6ICRlbmQ7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAkc3RhcnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBBZGQgcG9zaXRpb24gZm9yIGFsbCBkaXJlY3Rpb25zXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5AbWl4aW4gcG9zaXRpb24oJHRvcDogbnVsbCwgJGVuZDogbnVsbCwgJGJvdHRvbTogbnVsbCwgJHN0YXJ0OiBudWxsKSB7XHJcbiAgICBAaW5jbHVkZSBwb3NpdGlvbi1ob3Jpem9udGFsKCRzdGFydCwgJGVuZCk7XHJcbiAgICB0b3A6ICR0b3A7XHJcbiAgICBib3R0b206ICRib3R0b207XHJcbn1cclxuXHJcbi8vIEFkZCBib3JkZXIgZm9yIGFsbCBkaXJlY3Rpb25zXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkdG9wXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZW5kXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkc3RhcnRcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5AbWl4aW4gYm9yZGVyKCR0b3AsICRlbmQ6ICR0b3AsICRib3R0b206ICR0b3AsICRzdGFydDogJGVuZCkge1xyXG4gICAgQGluY2x1ZGUgcHJvcGVydHkoYm9yZGVyLCAkdG9wLCAkZW5kLCAkYm90dG9tLCAkc3RhcnQpO1xyXG59XHJcblxyXG4vLyBBZGQgYm9yZGVyIHJhZGl1cyBmb3IgYWxsIGRpcmVjdGlvbnNcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3Atc3RhcnRcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICR0b3AtZW5kXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkYm90dG9tLWVuZFxyXG4vLyBAcGFyYW0ge3N0cmluZ30gJGJvdHRvbS1zdGFydFxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkBtaXhpbiBib3JkZXItcmFkaXVzKCR0b3Atc3RhcnQsICR0b3AtZW5kOiAkdG9wLXN0YXJ0LCAkYm90dG9tLWVuZDogJHRvcC1zdGFydCwgJGJvdHRvbS1zdGFydDogJHRvcC1lbmQpIHtcclxuICAgIEBpZiAkdG9wLXN0YXJ0ID09ICR0b3AtZW5kIGFuZCAkdG9wLXN0YXJ0ID09ICRib3R0b20tZW5kIGFuZCAkdG9wLXN0YXJ0ID09ICRib3R0b20tc3RhcnQge1xyXG4gICAgICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogJHRvcC1zdGFydDtcclxuICAgICAgICB9XHJcbiAgICB9IEBlbHNlIHtcclxuICAgICAgICBAaW5jbHVkZSBsdHIoKSB7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6ICR0b3Atc3RhcnQ7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAkdG9wLWVuZDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICRib3R0b20tZW5kO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkYm90dG9tLXN0YXJ0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQGluY2x1ZGUgcnRsKCkge1xyXG4gICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAkdG9wLWVuZDtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICR0b3Atc3RhcnQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkYm90dG9tLXN0YXJ0O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkYm90dG9tLWVuZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIEFkZCBkaXJlY3Rpb24gZm9yIGFsbCBkaXJlY3Rpb25zXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZGlyIC0gRGlyZWN0aW9uIG9uIExUUlxyXG5AbWl4aW4gZGlyZWN0aW9uKCRkaXIpIHtcclxuICAgICRvdGhlci1kaXI6IG51bGw7XHJcblxyXG4gICAgQGlmICRkaXIgPT0gbHRyIHtcclxuICAgICAgICAkb3RoZXItZGlyOiBydGw7XHJcbiAgICB9IEBlbHNlIHtcclxuICAgICAgICAkb3RoZXItZGlyOiBsdHI7XHJcbiAgICB9XHJcblxyXG4gICAgQGluY2x1ZGUgbHRyKCkge1xyXG4gICAgICAgIGRpcmVjdGlvbjogJGRpcjtcclxuICAgIH1cclxuICAgIEBpbmNsdWRlIHJ0bCgpIHtcclxuICAgICAgICBkaXJlY3Rpb246ICRvdGhlci1kaXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIEFkZCBmbG9hdCBmb3IgYWxsIGRpcmVjdGlvbnNcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICRzaWRlXHJcbi8vIEBwYXJhbSB7c3RyaW5nfSAkZGVjb3JhdG9yIC0gIWltcG9ydGFudFxyXG5AbWl4aW4gZmxvYXQoJHNpZGUsICRkZWNvcmF0b3I6IG51bGwpIHtcclxuICAgIEBpZiAkc2lkZSA9PSBzdGFydCB7XHJcbiAgICAgICAgQGluY2x1ZGUgbHRyKCkge1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdCAkZGVjb3JhdG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgICBAaW5jbHVkZSBydGwoKSB7XHJcbiAgICAgICAgICAgIGZsb2F0OiByaWdodCAkZGVjb3JhdG9yO1xyXG4gICAgICAgIH1cclxuICAgIH0gQGVsc2UgaWYgJHNpZGUgPT0gZW5kIHtcclxuICAgICAgICBAaW5jbHVkZSBsdHIoKSB7XHJcbiAgICAgICAgICAgIGZsb2F0OiByaWdodCAkZGVjb3JhdG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgICBAaW5jbHVkZSBydGwoKSB7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0ICRkZWNvcmF0b3I7XHJcbiAgICAgICAgfVxyXG4gICAgfSBAZWxzZSB7XHJcbiAgICAgICAgQGluY2x1ZGUgbXVsdGktZGlyKCkge1xyXG4gICAgICAgICAgICBmbG9hdDogJHNpZGUgJGRlY29yYXRvcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBiYWNrZ3JvdW5kLXBvc2l0aW9uKCRob3Jpem9udGFsLCAkaG9yaXpvbnRhbC1hbW91bnQ6IG51bGwsICR2ZXJ0aWNhbDogbnVsbCwgJHZlcnRpY2FsLWFtb3VudDogbnVsbCkge1xyXG4gICAgQGlmICRob3Jpem9udGFsID09IHN0YXJ0IG9yICRob3Jpem9udGFsID09IGVuZCB7XHJcbiAgICAgICAgJGhvcml6b250YWwtbHRyOiBudWxsO1xyXG4gICAgICAgICRob3Jpem9udGFsLXJ0bDogbnVsbDtcclxuICAgICAgICBAaWYgJGhvcml6b250YWwgPT0gc3RhcnQge1xyXG4gICAgICAgICAgICAkaG9yaXpvbnRhbC1sdHI6IGxlZnQ7XHJcbiAgICAgICAgICAgICRob3Jpem9udGFsLXJ0bDogcmlnaHQ7XHJcbiAgICAgICAgfSBAZWxzZSB7XHJcbiAgICAgICAgICAgICRob3Jpem9udGFsLWx0cjogcmlnaHQ7XHJcbiAgICAgICAgICAgICRob3Jpem9udGFsLXJ0bDogbGVmdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBpbmNsdWRlIGx0cigpIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogJGhvcml6b250YWwtbHRyICRob3Jpem9udGFsLWFtb3VudCAkdmVydGljYWwgJHZlcnRpY2FsLWFtb3VudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgQGluY2x1ZGUgcnRsKCkge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAkaG9yaXpvbnRhbC1ydGwgJGhvcml6b250YWwtYW1vdW50ICR2ZXJ0aWNhbCAkdmVydGljYWwtYW1vdW50O1xyXG4gICAgICAgIH1cclxuICAgIH0gQGVsc2Uge1xyXG4gICAgICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogJGhvcml6b250YWwgJGhvcml6b250YWwtYW1vdW50ICR2ZXJ0aWNhbCAkdmVydGljYWwtYW1vdW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIHRyYW5zZm9ybS1vcmlnaW4oJHgtYXhpcywgJHktYXhpczogbnVsbCkge1xyXG4gICAgQGlmICR4LWF4aXMgPT0gc3RhcnQge1xyXG4gICAgICAgIEBpbmNsdWRlIGx0cigpIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCAkeS1heGlzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBAaW5jbHVkZSBydGwoKSB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0ICR5LWF4aXM7XHJcbiAgICAgICAgfVxyXG4gICAgfSBAZWxzZSBpZiAkeC1heGlzID09IGVuZCB7XHJcbiAgICAgICAgQGluY2x1ZGUgbHRyKCkge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCAkeS1heGlzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBAaW5jbHVkZSBydGwoKSB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgJHktYXhpcztcclxuICAgICAgICB9XHJcbiAgICB9IEBlbHNlIGlmICR4LWF4aXMgPT0gbGVmdCBvciAkeC1heGlzID09IHJpZ2h0IHtcclxuICAgICAgICBAaW5jbHVkZSBtdWx0aS1kaXIoKSB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46ICR4LWF4aXMgJHktYXhpcztcclxuICAgICAgICB9XHJcbiAgICB9IEBlbHNlIHtcclxuICAgICAgICBAaW5jbHVkZSBsdHIoKSB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46ICR4LWF4aXMgJHktYXhpcztcclxuICAgICAgICB9XHJcbiAgICAgICAgQGluY2x1ZGUgcnRsKCkge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjYWxjKDEwMCUgLSAjeyR4LWF4aXN9KSAkeS1heGlzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy8gQWRkIHRyYW5zZm9ybSBmb3IgYWxsIGRpcmVjdGlvbnNcclxuLy8gQHBhcmFtIHtzdHJpbmd9ICR0cmFuc2Zvcm1zIC0gY29tbWEgc2VwYXJhdGVkIGxpc3Qgb2YgdHJhbnNmb3Jtc1xyXG5AbWl4aW4gdHJhbnNmb3JtKCR0cmFuc2Zvcm1zLi4uKSB7XHJcbiAgICAkZXh0cmE6IG51bGw7XHJcblxyXG4gICAgJHg6IG51bGw7XHJcbiAgICAkbHRyLXRyYW5zbGF0ZTogbnVsbDtcclxuICAgICRydGwtdHJhbnNsYXRlOiBudWxsO1xyXG5cclxuICAgIEBlYWNoICR0cmFuc2Zvcm0gaW4gJHRyYW5zZm9ybXMge1xyXG4gICAgICAgIEBpZiAoc3RyLWluZGV4KCR0cmFuc2Zvcm0sIHRyYW5zbGF0ZTNkKSkge1xyXG4gICAgICAgICAgICAkdHJhbnNmb3JtOiBzdHItcmVwbGFjZSgkdHJhbnNmb3JtLCAndHJhbnNsYXRlM2QoJyk7XHJcbiAgICAgICAgICAgICR0cmFuc2Zvcm06IHN0ci1yZXBsYWNlKCR0cmFuc2Zvcm0sICcpJyk7XHJcblxyXG4gICAgICAgICAgICAkY29vcmRpbmF0ZXM6IHN0ci1zcGxpdCgkdHJhbnNmb3JtLCAnLCcpO1xyXG5cclxuICAgICAgICAgICAgJHg6IG50aCgkY29vcmRpbmF0ZXMsIDEpO1xyXG4gICAgICAgICAgICAkeTogbnRoKCRjb29yZGluYXRlcywgMik7XHJcbiAgICAgICAgICAgICR6OiBudGgoJGNvb3JkaW5hdGVzLCAzKTtcclxuXHJcbiAgICAgICAgICAgICRsdHItdHJhbnNsYXRlOiB0cmFuc2xhdGUzZCgkeCwgJHksICR6KTtcclxuICAgICAgICAgICAgJHJ0bC10cmFuc2xhdGU6IHRyYW5zbGF0ZTNkKGNhbGMoLTEgKiAjeyR4fSksICR5LCAkeik7XHJcbiAgICAgICAgfSBAZWxzZSB7XHJcbiAgICAgICAgICAgIEBpZiAkZXh0cmEgPT0gbnVsbCB7XHJcbiAgICAgICAgICAgICAgICAkZXh0cmE6ICR0cmFuc2Zvcm07XHJcbiAgICAgICAgICAgIH0gQGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJGV4dHJhOiAkZXh0cmEgJHRyYW5zZm9ybTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAaWYgJHggPT0gJzAnIG9yICR4ID09IG51bGwge1xyXG4gICAgICAgIEBpbmNsdWRlIG11bHRpLWRpcigpIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiAkbHRyLXRyYW5zbGF0ZSAkZXh0cmE7XHJcbiAgICAgICAgfVxyXG4gICAgfSBAZWxzZSB7XHJcbiAgICAgICAgQGluY2x1ZGUgbHRyKCkge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06ICRsdHItdHJhbnNsYXRlICRleHRyYTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBpbmNsdWRlIHJ0bCgpIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiAkcnRsLXRyYW5zbGF0ZSAkZXh0cmE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiAqIEFwcCBDdXN0b20gQXBwIHZhcmlhYmxlcyBTQ1NTXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogUGxhY2UgaGVyZSBhbGwgY3VzdG9tIGFwcCB2YXJpYWJsZXMuXHJcbiAqL1xyXG4iLCIvKlxyXG4gKiBBcHAgR2xvYmFsIHZhcmlhYmxlcyBTQ1NTXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogUGxhY2UgaGVyZSBhbGwgZ2xvYmFsIHZhcmlhYmxlcy5cclxuICovXHJcblxyXG4kYmxhY2s6ICAgICAgICAgICAjMjgyODI4ICFkZWZhdWx0OyAvLyBIZWFkaW5ncywgc3RhbmRhcmQgdGV4dC5cclxuJGdyYXktZGFya2VyOiAgICAgIzY4NjU2NiAhZGVmYXVsdDtcclxuJGdyYXktZGFyazogICAgICAgIzllOWU5ZSAhZGVmYXVsdDtcclxuJGdyYXk6ICAgICAgICAgICAgI2RkZGRkZCAhZGVmYXVsdDtcclxuJGdyYXktbGlnaHQ6ICAgICAgI2U5ZTllOSAhZGVmYXVsdDsgLy8gQmFja2dyb3VuZC5cclxuJGdyYXktbGlnaHRlcjogICAgI2Y1ZjVmNSAhZGVmYXVsdDtcclxuJHdoaXRlOiAgICAgICAgICAgI2ZmZmZmZiAhZGVmYXVsdDsgLy8gQmFja2dyb3VuZCwgcmV2ZXJzZWQgdGV4dC5cclxuXHJcbiRibHVlOiAgICAgICAgICAgICMwMDY0ZDIgIWRlZmF1bHQ7IC8vIExpbmssIGJhY2tncm91bmQuXHJcbiRibHVlLWxpZ2h0OiAgICAgIG1peCgkYmx1ZSwgd2hpdGUsIDIwJSkgIWRlZmF1bHQ7IC8vIEJhY2tncm91bmQuXHJcbiRibHVlLWRhcms6ICAgICAgIGRhcmtlbigkYmx1ZSwgMTAlKSAhZGVmYXVsdDtcclxuXHJcbiRncmVlbjogICAgICAgICAgICM1ZTgxMDAgIWRlZmF1bHQ7IC8vIEFjY2VudC5cclxuJGdyZWVuLWxpZ2h0OiAgICAgbWl4KCRncmVlbiwgd2hpdGUsIDIwJSkgIWRlZmF1bHQ7XHJcbiRncmVlbi1kYXJrOiAgICAgIGRhcmtlbigkZ3JlZW4sIDEwJSkgIWRlZmF1bHQ7XHJcblxyXG4kcmVkOiAgICAgICAgICAgICAjY2IzZDRkICFkZWZhdWx0O1xyXG4kcmVkLWxpZ2h0OiAgICAgICBtaXgoJHJlZCwgd2hpdGUsIDIwJSkgIWRlZmF1bHQ7XHJcbiRyZWQtZGFyazogICAgICAgIGRhcmtlbigkcmVkLCAxMCUpICFkZWZhdWx0O1xyXG5cclxuJHllbGxvdzogICAgICAgICAgI2ZiYWQxYSAhZGVmYXVsdDsgLy8gQWNjZW50IChuZXZlciB0ZXh0KS5cclxuJHllbGxvdy1saWdodDogICAgbWl4KCR5ZWxsb3csIHdoaXRlLCAyMCUpICFkZWZhdWx0O1xyXG4keWVsbG93LWRhcms6ICAgICBtaXgoJHllbGxvdywgYmxhY2ssIDQwJSkgIWRlZmF1bHQ7XHJcblxyXG4kYnJhbmQtY29sb3I6ICAgICNmOTgwMTIgIWRlZmF1bHQ7XHJcblxyXG4kdGV4dC1jb2xvcjogICAgICAgICAgICAgICAkYmxhY2sgIWRlZmF1bHQ7XHJcbiR0ZXh0LWNvbG9yLXJnYjogICAgICAgICAgIGNvbG9yLXRvLXJnYi1saXN0KCR0ZXh0LWNvbG9yKSAhZGVmYXVsdDtcclxuJHRleHQtY29sb3ItZGFyazogICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xyXG4kdGV4dC1jb2xvci1kYXJrLXJnYjogICAgICBjb2xvci10by1yZ2ItbGlzdCgkdGV4dC1jb2xvci1kYXJrKSAhZGVmYXVsdDtcclxuXHJcbiRiYWNrZ3JvdW5kLWNvbG9yOiAgICAgICAgICAkZ3JheS1saWdodCAhZGVmYXVsdDtcclxuJGJhY2tncm91bmQtY29sb3ItcmdiOiAgICAgIGNvbG9yLXRvLXJnYi1saXN0KCRiYWNrZ3JvdW5kLWNvbG9yKSAhZGVmYXVsdDtcclxuJGJhY2tncm91bmQtY29sb3ItZGFyazogICAgIG1peCgjZmZmZmZmLCAjMDAwMDAwLCAxMCUpICFkZWZhdWx0OyAvLyAjMWExYTFhXHJcbiRiYWNrZ3JvdW5kLWNvbG9yLWRhcmstcmdiOiBjb2xvci10by1yZ2ItbGlzdCgkYmFja2dyb3VuZC1jb2xvci1kYXJrKSAhZGVmYXVsdDtcclxuXHJcbiRpb24taXRlbS1iYWNrZ3JvdW5kOiAgICAgICR3aGl0ZSAhZGVmYXVsdDtcclxuJGlvbi1pdGVtLWJhY2tncm91bmQtcmdiOiAgY29sb3ItdG8tcmdiLWxpc3QoJGlvbi1pdGVtLWJhY2tncm91bmQpICFkZWZhdWx0O1xyXG4kaW9uLWl0ZW0tYmFja2dyb3VuZC1kYXJrOiBtaXgoI2ZmZmZmZiwgIzAwMDAwMCwgMjAlKSAhZGVmYXVsdDsgLy8gIzMzMzMzM1xyXG4kaW9uLWl0ZW0tYmFja2dyb3VuZC1kYXJrLXJnYjogY29sb3ItdG8tcmdiLWxpc3QoJGlvbi1pdGVtLWJhY2tncm91bmQtZGFyaykgIWRlZmF1bHQ7XHJcblxyXG4kcHJpbWFyeTogICAgJGJyYW5kLWNvbG9yICFkZWZhdWx0O1xyXG4kZGFuZ2VyOiAgICAgJHJlZCAhZGVmYXVsdDtcclxuJHdhcm5pbmc6ICAgICR5ZWxsb3cgIWRlZmF1bHQ7XHJcbiRzdWNjZXNzOiAgICAkZ3JlZW4gIWRlZmF1bHQ7XHJcbiRpbmZvOiAgICAgICAkYmx1ZSAhZGVmYXVsdDtcclxuJGxpZ2h0OiAgICAgICRncmF5LWxpZ2h0ZXIgIWRlZmF1bHQ7XHJcbiRtZWRpdW06ICAgICAkZ3JheS1saWdodCAhZGVmYXVsdDtcclxuJGRhcms6ICAgICAgICRibGFjayAhZGVmYXVsdDtcclxuXHJcbiRjb2xvcnM6ICAoXHJcbiAgICBwcmltYXJ5OiAkcHJpbWFyeSxcclxuICAgIHN1Y2Nlc3M6ICRzdWNjZXNzLFxyXG4gICAgd2FybmluZzogJHdhcm5pbmcsXHJcbiAgICBkYW5nZXI6ICAkZGFuZ2VyLFxyXG4gICAgaW5mbzogJGluZm8sXHJcbiAgICBsaWdodDogJGxpZ2h0LFxyXG4gICAgbWVkaXVtOiAkbWVkaXVtLFxyXG4gICAgZGFyazogJGRhcmtcclxuKSAhZGVmYXVsdDtcclxuXHJcbiRwcmltYXJ5LWRhcms6ICAgICRicmFuZC1jb2xvciAhZGVmYXVsdDtcclxuJGRhbmdlci1kYXJrOiAgICAgbWl4KCRyZWQsIHdoaXRlLCA0MCUpICFkZWZhdWx0O1xyXG4kd2FybmluZy1kYXJrOiAgICBtaXgoJHllbGxvdywgd2hpdGUsIDQwJSkgIWRlZmF1bHQ7XHJcbiRzdWNjZXNzLWRhcms6ICAgIG1peCgkZ3JlZW4sIHdoaXRlLCA0MCUpICFkZWZhdWx0O1xyXG4kaW5mby1kYXJrOiAgICAgICBtaXgoJGJsdWUsIHdoaXRlLCA0MCUpICFkZWZhdWx0O1xyXG4kbGlnaHQtZGFyazogICAgICAkZGFyayAhZGVmYXVsdDtcclxuJG1lZGl1bS1kYXJrOiAgICAgJGdyYXktbGlnaHQgIWRlZmF1bHQ7XHJcbiRkYXJrLWRhcms6ICAgICAgICRsaWdodCAhZGVmYXVsdDtcclxuXHJcbiRjb2xvcnMtZGFyazogIChcclxuICAgIHByaW1hcnk6ICRwcmltYXJ5LWRhcmssXHJcbiAgICBzdWNjZXNzOiAkc3VjY2Vzcy1kYXJrLFxyXG4gICAgd2FybmluZzogJHdhcm5pbmctZGFyayxcclxuICAgIGRhbmdlcjogJGRhbmdlci1kYXJrLFxyXG4gICAgaW5mbzogJGluZm8tZGFyayxcclxuICAgIGxpZ2h0OiAkbGlnaHQtZGFyayxcclxuICAgIG1lZGl1bTogJG1lZGl1bS1kYXJrLFxyXG4gICAgZGFyazogJGRhcmstZGFyayxcclxuKSAhZGVmYXVsdDtcclxuXHJcbi8qKlxyXG4gKiBMYXlvdXQgQnJlYWtwb2ludHNcclxuICpcclxuICogaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy9sYXlvdXQvZ3JpZCNkZWZhdWx0LWJyZWFrcG9pbnRzXHJcbiAqL1xyXG5cclxuLy8gVGhlIG1pbmltdW0gZGltZW5zaW9ucyBhdCB3aGljaCB5b3VyIGxheW91dCB3aWxsIGNoYW5nZSxcclxuLy8gYWRhcHRpbmcgdG8gZGlmZmVyZW50IHNjcmVlbiBzaXplcywgZm9yIHVzZSBpbiBtZWRpYSBxdWVyaWVzXHJcbiRzY3JlZW4tYnJlYWtwb2ludHM6IChcclxuICAgIHhzOiAwLFxyXG4gICAgc206IDU3NnB4LFxyXG4gICAgbWQ6IDc2OHB4LFxyXG4gICAgbGc6IDk5MnB4LFxyXG4gICAgdGFibGV0OiA5OTJweCxcclxuICAgIHhsOiAxMjAwcHhcclxuKSAhZGVmYXVsdDtcclxuXHJcbiRjb3JlLWNvdXJzZS1pbWFnZS1iYWNrZ3JvdW5kOiAjODFlY2VjLCAjNzRiOWZmLCAjYTI5YmZlLCAjZGZlNmU5LCAjMDBiODk0LCAjMDk4NGUzLCAjYjJiZWMzLCAjZmRjYjZlLCAjZmQ3OWE4LCAjNmM1Y2U3ICFkZWZhdWx0O1xyXG4kY29yZS1kZC1xdWVzdGlvbi1jb2xvcnM6ICNGRkZGRkYsICNCMEM0REUsICNEQ0RDREMsICNEOEJGRDgsICM4N0NFRkEsICNEQUE1MjAsICNGRkQ3MDAsICNGMEU2OEMgIWRlZmF1bHQ7XHJcbiRjb3JlLXRleHQtaGlnaHRsaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCRibHVlLCA0MCUpICFkZWZhdWx0O1xyXG5cclxuJGNvcmUtZml4ZWQtdXJsOiBmYWxzZSAhZGVmYXVsdDtcclxuJGNvcmUtZGFzaGJvYXJkLWxvZ286IGZhbHNlICFkZWZhdWx0O1xyXG4kY29yZS1hbHdheXMtc2hvdy1tYWluLW1lbnU6IGZhbHNlICFkZWZhdWx0O1xyXG4kY29yZS1mb3JtYXQtdGV4dC1uZXZlci1zaG9ydGVuOiBmYWxzZSAhZGVmYXVsdDtcclxuXHJcbiRjb3JlLXNob3ctY291cnNlaW1hZ2Utb24tY291cnNlOiBmYWxzZSAhZGVmYXVsdDtcclxuJGNvcmUtaGlkZS1wcm9ncmVzcy1vbi1jb3Vyc2U6IGZhbHNlICFkZWZhdWx0O1xyXG4kY29yZS1oaWRlLXByb2dyZXNzLW9uLXNlY3Rpb24tc2VsZWN0b3I6IGZhbHNlICFkZWZhdWx0O1xyXG5cclxuJGNvcmUtY291cnNlLWhpZGUtdGh1bWItb24tY2FyZHM6IGZhbHNlICFkZWZhdWx0O1xyXG4kY29yZS1jb3Vyc2UtdGh1bWItb24tY2FyZHMtYmFja2dyb3VuZDogbnVsbCAhZGVmYXVsdDtcclxuJGNvcmUtY291cnNlLWhpZGUtcHJvZ3Jlc3Mtb24tY2FyZHM6IGZhbHNlICFkZWZhdWx0O1xyXG5cclxuLy8gQ29uZmlndXJhdGlvbiBvcHRpb25zIGZvciBsb2dpbiBwYWdlLlxyXG4kY29yZS1sb2dpbi1idXR0b24tb3V0bGluZTogZmFsc2UgIWRlZmF1bHQ7XHJcbiRjb3JlLWxvZ2luLWJ1dHRvbi1vdXRsaW5lLWRhcms6ICRjb3JlLWxvZ2luLWJ1dHRvbi1vdXRsaW5lICFkZWZhdWx0O1xyXG4kY29yZS1sb2dpbi1sb2FkaW5nLWNvbG9yOiBmYWxzZSAhZGVmYXVsdDtcclxuJGNvcmUtbG9naW4tbG9hZGluZy1jb2xvci1kYXJrOiAkdGV4dC1jb2xvci1kYXJrICFkZWZhdWx0O1xyXG4kY29yZS1sb2dpbi1oaWRlLWZvcmdvdC1wYXNzd29yZDogZmFsc2UgIWRlZmF1bHQ7XHJcbiRjb3JlLWxvZ2luLWhpZGUtbmVlZC1oZWxwOiBmYWxzZSAhZGVmYXVsdDtcclxuXHJcbi8vIENvbmZpZ3VyYXRpb24gb3B0aW9ucyBmb3IgbW9yZSBwYWdlLlxyXG4kY29yZS1tb3JlLWhpZGUtc2l0ZWluZm86IGZhbHNlICFkZWZhdWx0O1xyXG4kY29yZS1tb3JlLWhpZGUtc2l0ZW5hbWU6IGZhbHNlICFkZWZhdWx0O1xyXG4kY29yZS1tb3JlLWhpZGUtc2l0ZXVybDogZmFsc2UgIWRlZmF1bHQ7XHJcbiIsIkBpbXBvcnQgXCJ+dGhlbWUvZ2xvYmFscy5zY3NzXCI7XHJcblxyXG46aG9zdCB7XHJcbiAgICBpb24tY29udGVudCB7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWFsdGVybmF0aXZlKTtcclxuXHJcbiAgICAgICAgJjo6cGFydChzY3JvbGwpIHtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmFkZG9uLW1lc3NhZ2VzLWRpc2N1c3Npb24tY29udGFpbmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1hbHRlcm5hdGl2ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLmFkZG9uLW1lc3NhZ2VzLWRhdGUge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWVzc2FnZSBpdGVtLlxyXG4gICAgaW9uLWl0ZW0uYWRkb24tbWVzc2FnZSB7XHJcbiAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICBwYWRkaW5nOiAwIDhweCAwIDhweDtcclxuICAgICAgICBtYXJnaW46IDEwcHggOHB4IDAgOHB4O1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0tYWRkb24tbWVzc2FnZXMtbWVzc2FnZS1iZyk7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCk7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgIG1heC13aWR0aDogOTAlO1xyXG4gICAgICAgIC0tbWluLWhlaWdodDogdmFyKC0tYTExeS1taW4tdGFyZ2V0LXNpemUpO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBAaW5jbHVkZSBjb3JlLXRyYW5zaXRpb24od2lkdGgpO1xyXG4gICAgICAgIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGRpc3BsYXkgYnViYmxlIHRhaWxzLlxyXG4gICAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG5cclxuICAgICAgICAmOjpwYXJ0KG5hdGl2ZSkge1xyXG4gICAgICAgICAgICAtLWlubmVyLWJvcmRlci13aWR0aDogMDtcclxuICAgICAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29yZS1mb3JtYXQtdGV4dCA+IHA6b25seS1jaGlsZCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5hZGRvbi1tZXNzYWdlLXVzZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpO1xyXG5cclxuICAgICAgICAgICAgY29yZS11c2VyLWF2YXRhciB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIC0tY29yZS1hdmF0YXItc2l6ZTogdmFyKC0tYWRkb24tbWVzc2FnZXMtYXZhdGFyLXNpemUpO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHBhZGRpbmctaG9yaXpvbnRhbCguNXJlbSk7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpb24tbm90ZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1hZGRvbi1tZXNzYWdlcy1tZXNzYWdlLW5vdGUtdGV4dCk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tYWRkb24tbWVzc2FnZXMtbWVzc2FnZS1ub3RlLWZvbnQtc2l6ZSk7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAwIDhweCAwO1xyXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICZbdGFwcGFibGVdOmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0tYWRkb24tbWVzc2FnZXMtbWVzc2FnZS1hY3RpdmF0ZWQtYmcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA4cHggMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5hZGRvbi1tZXNzYWdlLXRleHQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICAgICAgKiB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGFpbCB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgICAgICBib3JkZXI6IDAuNXJlbSBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3VjaC1hY3Rpb246IG5vbmU7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIERlZmluZXMgd2hlbiBhbiBpdGVtLW1lc3NhZ2UgaXMgdGhlIHVzZXIncy5cclxuICAgICAgICAmLmFkZG9uLW1lc3NhZ2UtbWluZSB7XHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0tYWRkb24tbWVzc2FnZXMtbWVzc2FnZS1taW5lLWJnKTtcclxuICAgICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcblxyXG4gICAgICAgICAgICAmW3RhcHBhYmxlXTphY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hZGRvbi1tZXNzYWdlcy1tZXNzYWdlLW1pbmUtYWN0aXZhdGVkLWJnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnNwaW5uZXIge1xyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgZmxvYXQoZW5kKTtcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIG1hcmdpbigycHgsIC0zcHgsIC0ycHgsIDVweCk7XHJcblxyXG4gICAgICAgICAgICAgICAgc3ZnIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC50YWlsIHtcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHBvc2l0aW9uKG51bGwsIC04cHgsIG51bGwsIG51bGwpO1xyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgbWFyZ2luLWhvcml6b250YWwobnVsbCwgLTAuNXJlbSk7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS1hZGRvbi1tZXNzYWdlcy1tZXNzYWdlLW1pbmUtYmcpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmW3RhcHBhYmxlXTphY3RpdmUgLnRhaWwge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0tYWRkb24tbWVzc2FnZXMtbWVzc2FnZS1taW5lLWFjdGl2YXRlZC1iZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYuYWRkb24tbWVzc2FnZS1ub3QtbWluZSAudGFpbCB7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLWFkZG9uLW1lc3NhZ2VzLW1lc3NhZ2UtYmcpO1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBwb3NpdGlvbihudWxsLCBudWxsLCBudWxsLCAtOHB4KTtcclxuICAgICAgICAgICAgQGluY2x1ZGUgbWFyZ2luLWhvcml6b250YWwoLTAuNXJlbSwgbnVsbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmW3RhcHBhYmxlXS5hZGRvbi1tZXNzYWdlLW5vdC1taW5lLmFjdGl2YXRlZCAudGFpbCB7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLWFkZG9uLW1lc3NhZ2VzLW1lc3NhZ2UtYWN0aXZhdGVkLWJnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5hZGRvbi1tZXNzYWdlcy1kZWxldGUtYnV0dG9uIHtcclxuICAgICAgICAgICAgbWluLWhlaWdodDogaW5pdGlhbDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IGluaXRpYWw7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIG1hcmdpbigwLCBudWxsLCAwLCBudWxsKTtcclxuICAgICAgICAgICAgaGVpZ2h0OiB2YXIoLS1hMTF5LW1pbi10YXJnZXQtc2l6ZSkgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcblxyXG4gICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNGVtO1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IGluaXRpYWw7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYuYWRkb24tbWVzc2FnZS1uby11c2VyIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpb24taXRlbS5hZGRvbi1tZXNzYWdlLmFkZG9uLW1lc3NhZ2UtbWluZSArIGlvbi1pdGVtLmFkZG9uLW1lc3NhZ2UuYWRkb24tbWVzc2FnZS1uby11c2VyLmFkZG9uLW1lc3NhZ2UtbWluZSxcclxuICAgIGlvbi1pdGVtLmFkZG9uLW1lc3NhZ2UuYWRkb24tbWVzc2FnZS1ub3QtbWluZSArIGlvbi1pdGVtLmFkZG9uLW1lc3NhZ2UuYWRkb24tbWVzc2FnZS1uby11c2VyLmFkZG9uLW1lc3NhZ2Utbm90LW1pbmUge1xyXG4gICAgICAgIC5pdGVtLWhlYWRpbmcge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbjpob3N0LWNvbnRleHQoLmlvcykge1xyXG4gICAgaW9uLWZvb3RlciAudG9vbGJhcjpsYXN0LWNoaWxkIHtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDA7XHJcbiAgICB9XHJcbn1cclxuIiwiLypcbiAqIEFwcCBHbG9iYWwgdmFyaWFibGVzIFNDU1NcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFBsYWNlIGhlcmUgdGhlIGRpZmZlcmVudCBmaWxlcyB5b3Ugc2hvdWxkIGltcG9ydCB0byB1c2UgZ2xvYmFsIHZhcmlhYmxlcy5cbiAqL1xuLypcbiAqIEFwcCBjdXN0b20gbWl4aW5zIGZvciBTQ1NTXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBQbGFjZSBoZXJlIG91ciBjdXN0b20gbWl4aW5zLlxuICovXG4vKlxuICogSW1wb3J0ZWQgaW9uaWMgbWl4aW5zIGZvciBTQ1NTXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBQbGFjZSBoZXJlIG91ciBjdXN0b20gbWl4aW5zLlxuICogRXh0cmFjdGVkIGZyb20gaW9uaWMubWl4aW5zLnNjc3NcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9pb25pYy10ZWFtL2lvbmljLWZyYW1ld29yay9ibG9iL21hc3Rlci9jb3JlL3NyYy90aGVtZXMvaW9uaWMubWl4aW5zLnNjc3NcbiAqL1xuLypcbiAqIEFwcCBDdXN0b20gQXBwIHZhcmlhYmxlcyBTQ1NTXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBQbGFjZSBoZXJlIGFsbCBjdXN0b20gYXBwIHZhcmlhYmxlcy5cbiAqL1xuLypcbiAqIEFwcCBHbG9iYWwgdmFyaWFibGVzIFNDU1NcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFBsYWNlIGhlcmUgYWxsIGdsb2JhbCB2YXJpYWJsZXMuXG4gKi9cbi8qKlxuICogTGF5b3V0IEJyZWFrcG9pbnRzXG4gKlxuICogaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy9sYXlvdXQvZ3JpZCNkZWZhdWx0LWJyZWFrcG9pbnRzXG4gKi9cbjpob3N0IGlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWFsdGVybmF0aXZlKTtcbn1cbjpob3N0IGlvbi1jb250ZW50OjpwYXJ0KHNjcm9sbCkge1xuICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xufVxuOmhvc3QgLmFkZG9uLW1lc3NhZ2VzLWRpc2N1c3Npb24tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtYWx0ZXJuYXRpdmUpO1xufVxuOmhvc3QgLmFkZG9uLW1lc3NhZ2VzLWRhdGUge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDAuOXJlbTtcbn1cbjpob3N0IGlvbi1pdGVtLmFkZG9uLW1lc3NhZ2Uge1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogMCA4cHggMCA4cHg7XG4gIG1hcmdpbjogMTBweCA4cHggMCA4cHg7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYWRkb24tbWVzc2FnZXMtbWVzc2FnZS1iZyk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpO1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICB3aWR0aDogOTAlO1xuICBtYXgtd2lkdGg6IDkwJTtcbiAgLS1taW4taGVpZ2h0OiB2YXIoLS1hMTF5LW1pbi10YXJnZXQtc2l6ZSk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiB3aWR0aCA1MDBtcyBlYXNlLWluLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiB3aWR0aCA1MDBtcyBlYXNlLWluLW91dDtcbiAgLW1zLXRyYW5zaXRpb246IHdpZHRoIDUwMG1zIGVhc2UtaW4tb3V0O1xuICAtby10cmFuc2l0aW9uOiB3aWR0aCA1MDBtcyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogd2lkdGggNTAwbXMgZWFzZS1pbi1vdXQ7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuOmhvc3QgaW9uLWl0ZW0uYWRkb24tbWVzc2FnZTo6cGFydChuYXRpdmUpIHtcbiAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDA7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cbjpob3N0IGlvbi1pdGVtLmFkZG9uLW1lc3NhZ2UgY29yZS1mb3JtYXQtdGV4dCA+IHA6b25seS1jaGlsZCB7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cbjpob3N0IGlvbi1pdGVtLmFkZG9uLW1lc3NhZ2UgLmFkZG9uLW1lc3NhZ2UtdXNlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICBtYXJnaW4tdG9wOiAwO1xuICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpO1xufVxuOmhvc3QgaW9uLWl0ZW0uYWRkb24tbWVzc2FnZSAuYWRkb24tbWVzc2FnZS11c2VyIGNvcmUtdXNlci1hdmF0YXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgLS1jb3JlLWF2YXRhci1zaXplOiB2YXIoLS1hZGRvbi1tZXNzYWdlcy1hdmF0YXItc2l6ZSk7XG4gIG1hcmdpbjogMDtcbn1cbjpob3N0IGlvbi1pdGVtLmFkZG9uLW1lc3NhZ2UgLmFkZG9uLW1lc3NhZ2UtdXNlciBkaXYge1xuICBmb250LXdlaWdodDogNTAwO1xuICBmbGV4LWdyb3c6IDE7XG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuQHN1cHBvcnRzIChtYXJnaW4taW5saW5lLXN0YXJ0OiAwKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDApIHtcbiAgOmhvc3QgaW9uLWl0ZW0uYWRkb24tbWVzc2FnZSAuYWRkb24tbWVzc2FnZS11c2VyIGRpdiB7XG4gICAgcGFkZGluZy1sZWZ0OiB1bnNldDtcbiAgICBwYWRkaW5nLXJpZ2h0OiB1bnNldDtcbiAgICAtd2Via2l0LXBhZGRpbmctc3RhcnQ6IDAuNXJlbTtcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogMC41cmVtO1xuICAgIC13ZWJraXQtcGFkZGluZy1lbmQ6IDAuNXJlbTtcbiAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDAuNXJlbTtcbiAgfVxufVxuOmhvc3QgaW9uLWl0ZW0uYWRkb24tbWVzc2FnZSBpb24tbm90ZSB7XG4gIGNvbG9yOiB2YXIoLS1hZGRvbi1tZXNzYWdlcy1tZXNzYWdlLW5vdGUtdGV4dCk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tYWRkb24tbWVzc2FnZXMtbWVzc2FnZS1ub3RlLWZvbnQtc2l6ZSk7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMCAwIDhweCAwO1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbn1cbjpob3N0IGlvbi1pdGVtLmFkZG9uLW1lc3NhZ2VbdGFwcGFibGVdOmFjdGl2ZSB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYWRkb24tbWVzc2FnZXMtbWVzc2FnZS1hY3RpdmF0ZWQtYmcpO1xufVxuOmhvc3QgaW9uLWl0ZW0uYWRkb24tbWVzc2FnZSBpb24tbGFiZWwge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDhweCAwO1xufVxuOmhvc3QgaW9uLWl0ZW0uYWRkb24tbWVzc2FnZSAuYWRkb24tbWVzc2FnZS10ZXh0IHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59XG46aG9zdCBpb24taXRlbS5hZGRvbi1tZXNzYWdlIC5hZGRvbi1tZXNzYWdlLXRleHQgKiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7XG59XG46aG9zdCBpb24taXRlbS5hZGRvbi1tZXNzYWdlIC50YWlsIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyOiAwLjVyZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG91Y2gtYWN0aW9uOiBub25lO1xuICBib3R0b206IDA7XG59XG46aG9zdCBpb24taXRlbS5hZGRvbi1tZXNzYWdlLmFkZG9uLW1lc3NhZ2UtbWluZSB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYWRkb24tbWVzc2FnZXMtbWVzc2FnZS1taW5lLWJnKTtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG59XG46aG9zdCBpb24taXRlbS5hZGRvbi1tZXNzYWdlLmFkZG9uLW1lc3NhZ2UtbWluZVt0YXBwYWJsZV06YWN0aXZlIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hZGRvbi1tZXNzYWdlcy1tZXNzYWdlLW1pbmUtYWN0aXZhdGVkLWJnKTtcbn1cbjpob3N0IGlvbi1pdGVtLmFkZG9uLW1lc3NhZ2UuYWRkb24tbWVzc2FnZS1taW5lIC5zcGlubmVyIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBtYXJnaW4tcmlnaHQ6IC0zcHg7XG4gIG1hcmdpbi10b3A6IDJweDtcbiAgbWFyZ2luLWJvdHRvbTogLTJweDtcbn1cbltkaXI9cnRsXSA6aG9zdCBpb24taXRlbS5hZGRvbi1tZXNzYWdlLmFkZG9uLW1lc3NhZ2UtbWluZSAuc3Bpbm5lciB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG5Ac3VwcG9ydHMgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDApIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDogMCkge1xuICA6aG9zdCBpb24taXRlbS5hZGRvbi1tZXNzYWdlLmFkZG9uLW1lc3NhZ2UtbWluZSAuc3Bpbm5lciB7XG4gICAgbWFyZ2luLWxlZnQ6IHVuc2V0O1xuICAgIG1hcmdpbi1yaWdodDogdW5zZXQ7XG4gICAgLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDVweDtcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiA1cHg7XG4gICAgLXdlYmtpdC1tYXJnaW4tZW5kOiAtM3B4O1xuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAtM3B4O1xuICB9XG59XG46aG9zdCBpb24taXRlbS5hZGRvbi1tZXNzYWdlLmFkZG9uLW1lc3NhZ2UtbWluZSAuc3Bpbm5lciBzdmcge1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xufVxuOmhvc3QgaW9uLWl0ZW0uYWRkb24tbWVzc2FnZS5hZGRvbi1tZXNzYWdlLW1pbmUgLnRhaWwge1xuICByaWdodDogLThweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMC41cmVtO1xuICBib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS1hZGRvbi1tZXNzYWdlcy1tZXNzYWdlLW1pbmUtYmcpO1xufVxuW2Rpcj1ydGxdIDpob3N0IGlvbi1pdGVtLmFkZG9uLW1lc3NhZ2UuYWRkb24tbWVzc2FnZS1taW5lIC50YWlsIHtcbiAgbGVmdDogdW5zZXQ7XG4gIHJpZ2h0OiB1bnNldDtcbiAgbGVmdDogLThweDtcbn1cblxuQHN1cHBvcnRzIChtYXJnaW4taW5saW5lLXN0YXJ0OiAwKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDApIHtcbiAgOmhvc3QgaW9uLWl0ZW0uYWRkb24tbWVzc2FnZS5hZGRvbi1tZXNzYWdlLW1pbmUgLnRhaWwge1xuICAgIG1hcmdpbi1yaWdodDogdW5zZXQ7XG4gICAgLXdlYmtpdC1tYXJnaW4tZW5kOiAtMC41cmVtO1xuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAtMC41cmVtO1xuICB9XG59XG46aG9zdCBpb24taXRlbS5hZGRvbi1tZXNzYWdlLmFkZG9uLW1lc3NhZ2UtbWluZVt0YXBwYWJsZV06YWN0aXZlIC50YWlsIHtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0tYWRkb24tbWVzc2FnZXMtbWVzc2FnZS1taW5lLWFjdGl2YXRlZC1iZyk7XG59XG46aG9zdCBpb24taXRlbS5hZGRvbi1tZXNzYWdlLmFkZG9uLW1lc3NhZ2Utbm90LW1pbmUgLnRhaWwge1xuICBib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS1hZGRvbi1tZXNzYWdlcy1tZXNzYWdlLWJnKTtcbiAgbGVmdDogLThweDtcbiAgbWFyZ2luLWxlZnQ6IC0wLjVyZW07XG59XG5bZGlyPXJ0bF0gOmhvc3QgaW9uLWl0ZW0uYWRkb24tbWVzc2FnZS5hZGRvbi1tZXNzYWdlLW5vdC1taW5lIC50YWlsIHtcbiAgbGVmdDogdW5zZXQ7XG4gIHJpZ2h0OiB1bnNldDtcbiAgcmlnaHQ6IC04cHg7XG59XG5cbkBzdXBwb3J0cyAobWFyZ2luLWlubGluZS1zdGFydDogMCkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OiAwKSB7XG4gIDpob3N0IGlvbi1pdGVtLmFkZG9uLW1lc3NhZ2UuYWRkb24tbWVzc2FnZS1ub3QtbWluZSAudGFpbCB7XG4gICAgbWFyZ2luLWxlZnQ6IHVuc2V0O1xuICAgIC13ZWJraXQtbWFyZ2luLXN0YXJ0OiAtMC41cmVtO1xuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IC0wLjVyZW07XG4gIH1cbn1cbjpob3N0IGlvbi1pdGVtLmFkZG9uLW1lc3NhZ2VbdGFwcGFibGVdLmFkZG9uLW1lc3NhZ2Utbm90LW1pbmUuYWN0aXZhdGVkIC50YWlsIHtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0tYWRkb24tbWVzc2FnZXMtbWVzc2FnZS1hY3RpdmF0ZWQtYmcpO1xufVxuOmhvc3QgaW9uLWl0ZW0uYWRkb24tbWVzc2FnZSAuYWRkb24tbWVzc2FnZXMtZGVsZXRlLWJ1dHRvbiB7XG4gIG1pbi1oZWlnaHQ6IGluaXRpYWw7XG4gIGxpbmUtaGVpZ2h0OiBpbml0aWFsO1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBoZWlnaHQ6IHZhcigtLWExMXktbWluLXRhcmdldC1zaXplKSAhaW1wb3J0YW50O1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbn1cbjpob3N0IGlvbi1pdGVtLmFkZG9uLW1lc3NhZ2UgLmFkZG9uLW1lc3NhZ2VzLWRlbGV0ZS1idXR0b24gaW9uLWljb24ge1xuICBmb250LXNpemU6IDEuNGVtO1xuICBsaW5lLWhlaWdodDogaW5pdGlhbDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xufVxuOmhvc3QgaW9uLWl0ZW0uYWRkb24tbWVzc2FnZS5hZGRvbi1tZXNzYWdlLW5vLXVzZXIge1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG46aG9zdCBpb24taXRlbS5hZGRvbi1tZXNzYWdlLmFkZG9uLW1lc3NhZ2UtbWluZSArIGlvbi1pdGVtLmFkZG9uLW1lc3NhZ2UuYWRkb24tbWVzc2FnZS1uby11c2VyLmFkZG9uLW1lc3NhZ2UtbWluZSxcbjpob3N0IGlvbi1pdGVtLmFkZG9uLW1lc3NhZ2UuYWRkb24tbWVzc2FnZS1ub3QtbWluZSArIGlvbi1pdGVtLmFkZG9uLW1lc3NhZ2UuYWRkb24tbWVzc2FnZS1uby11c2VyLmFkZG9uLW1lc3NhZ2Utbm90LW1pbmUge1xuICBwYWRkaW5nLXRvcDogMDtcbn1cbjpob3N0IGlvbi1pdGVtLmFkZG9uLW1lc3NhZ2UuYWRkb24tbWVzc2FnZS1taW5lICsgaW9uLWl0ZW0uYWRkb24tbWVzc2FnZS5hZGRvbi1tZXNzYWdlLW5vLXVzZXIuYWRkb24tbWVzc2FnZS1taW5lIC5pdGVtLWhlYWRpbmcsXG46aG9zdCBpb24taXRlbS5hZGRvbi1tZXNzYWdlLmFkZG9uLW1lc3NhZ2Utbm90LW1pbmUgKyBpb24taXRlbS5hZGRvbi1tZXNzYWdlLmFkZG9uLW1lc3NhZ2Utbm8tdXNlci5hZGRvbi1tZXNzYWdlLW5vdC1taW5lIC5pdGVtLWhlYWRpbmcge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG46aG9zdC1jb250ZXh0KC5pb3MpIGlvbi1mb290ZXIgLnRvb2xiYXI6bGFzdC1jaGlsZCB7XG4gIHBhZGRpbmctYm90dG9tOiA0cHg7XG4gIG1pbi1oZWlnaHQ6IDA7XG59XG5cbi8qXG4gKiBBcHAgR2xvYmFsIHZhcmlhYmxlcyBTQ1NTXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBQbGFjZSBoZXJlIHRoZSBkaWZmZXJlbnQgZmlsZXMgeW91IHNob3VsZCBpbXBvcnQgdG8gdXNlIGdsb2JhbCB2YXJpYWJsZXMuXG4gKi9cbi8qXG4gKiBBcHAgY3VzdG9tIG1peGlucyBmb3IgU0NTU1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogUGxhY2UgaGVyZSBvdXIgY3VzdG9tIG1peGlucy5cbiAqL1xuLypcbiAqIEltcG9ydGVkIGlvbmljIG1peGlucyBmb3IgU0NTU1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogUGxhY2UgaGVyZSBvdXIgY3VzdG9tIG1peGlucy5cbiAqIEV4dHJhY3RlZCBmcm9tIGlvbmljLm1peGlucy5zY3NzXG4gKiBodHRwczovL2dpdGh1Yi5jb20vaW9uaWMtdGVhbS9pb25pYy1mcmFtZXdvcmsvYmxvYi9tYXN0ZXIvY29yZS9zcmMvdGhlbWVzL2lvbmljLm1peGlucy5zY3NzXG4gKi9cbi8qXG4gKiBBcHAgQ3VzdG9tIEFwcCB2YXJpYWJsZXMgU0NTU1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogUGxhY2UgaGVyZSBhbGwgY3VzdG9tIGFwcCB2YXJpYWJsZXMuXG4gKi9cbi8qXG4gKiBBcHAgR2xvYmFsIHZhcmlhYmxlcyBTQ1NTXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBQbGFjZSBoZXJlIGFsbCBnbG9iYWwgdmFyaWFibGVzLlxuICovXG4vKipcbiAqIExheW91dCBCcmVha3BvaW50c1xuICpcbiAqIGh0dHBzOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvbGF5b3V0L2dyaWQjZGVmYXVsdC1icmVha3BvaW50c1xuICovXG46aG9zdCAuYWRkb24tbWVzc2FnZXMtdW5yZWFkZnJvbSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBtYXJnaW4tdG9wOiA2cHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG46aG9zdCAuYWRkb24tbWVzc2FnZXMtdW5yZWFkZnJvbSBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuOmhvc3QgLmhhcy1mYWIgLnNjcm9sbC1jb250ZW50IHtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG46aG9zdCBpb24tZmFiIGlvbi1mYWItYnV0dG9uOjpwYXJ0KG5hdGl2ZSkge1xuICBjb250YWluOiB1bnNldDtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG46aG9zdCBpb24tZmFiIGlvbi1mYWItYnV0dG9uIC5jb3JlLWRpc2N1c3Npb24tbWVzc2FnZXMtYmFkZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY29sb3I6IHZhcigtLWFkZG9uLW1lc3NhZ2VzLWRpc2N1c3Npb24tYmFkZ2UtdGV4dCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFkZG9uLW1lc3NhZ2VzLWRpc2N1c3Npb24tYmFkZ2UpO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIHJpZ2h0OiAtNnB4O1xuICB0b3A6IC02cHg7XG59XG5bZGlyPXJ0bF0gOmhvc3QgaW9uLWZhYiBpb24tZmFiLWJ1dHRvbiAuY29yZS1kaXNjdXNzaW9uLW1lc3NhZ2VzLWJhZGdlIHtcbiAgbGVmdDogdW5zZXQ7XG4gIHJpZ2h0OiB1bnNldDtcbiAgbGVmdDogLTZweDtcbn1cblxuOmhvc3QgaW9uLWhlYWRlciBpb24tdG9vbGJhciBoMSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDA7XG59XG46aG9zdCBpb24taGVhZGVyIGlvbi10b29sYmFyIGgxIC5jb3JlLWJhci1idXR0b24taW1hZ2Uge1xuICBtYXJnaW4tcmlnaHQ6IDZweDtcbn1cbkBzdXBwb3J0cyAobWFyZ2luLWlubGluZS1zdGFydDogMCkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OiAwKSB7XG4gIDpob3N0IGlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaDEgLmNvcmUtYmFyLWJ1dHRvbi1pbWFnZSB7XG4gICAgbWFyZ2luLXJpZ2h0OiB1bnNldDtcbiAgICAtd2Via2l0LW1hcmdpbi1lbmQ6IDZweDtcbiAgICBtYXJnaW4taW5saW5lLWVuZDogNnB4O1xuICB9XG59XG46aG9zdCBpb24taGVhZGVyIGlvbi10b29sYmFyIGgxIGNvcmUtZm9ybWF0LXRleHQge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgZmxleC1zaHJpbms6IDE7XG59XG46aG9zdCBpb24taGVhZGVyIGlvbi10b29sYmFyIGgxIGlvbi1pY29uIHtcbiAgbWFyZ2luLWxlZnQ6IDZweDtcbn1cbkBzdXBwb3J0cyAobWFyZ2luLWlubGluZS1zdGFydDogMCkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OiAwKSB7XG4gIDpob3N0IGlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaDEgaW9uLWljb24ge1xuICAgIG1hcmdpbi1sZWZ0OiB1bnNldDtcbiAgICAtd2Via2l0LW1hcmdpbi1zdGFydDogNnB4O1xuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDZweDtcbiAgfVxufVxuXG46aG9zdC1jb250ZXh0KC5pb3MpIGlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaDEge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/addons/mod/forum/pages/discussion/discussion.module.ts":
/*!********************************************************************!*\
  !*** ./src/addons/mod/forum/pages/discussion/discussion.module.ts ***!
  \********************************************************************/
/*! exports provided: AddonForumDiscussionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonForumDiscussionPageModule", function() { return AddonForumDiscussionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _addons_mod_forum_components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @addons/mod/forum/components/components.module */ "./src/addons/mod/forum/components/components.module.ts");
/* harmony import */ var _guards_can_leave__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @guards/can-leave */ "./src/core/guards/can-leave.ts");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/core/shared.module */ "./src/core/shared.module.ts");
/* harmony import */ var _discussion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./discussion.page */ "./src/addons/mod/forum/pages/discussion/discussion.page.ts");
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
        component: _discussion_page__WEBPACK_IMPORTED_MODULE_6__["AddonModForumDiscussionPage"],
        canDeactivate: [_guards_can_leave__WEBPACK_IMPORTED_MODULE_4__["CanLeaveGuard"]],
    }];
let AddonForumDiscussionPageModule = class AddonForumDiscussionPageModule {
};
AddonForumDiscussionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _core_shared_module__WEBPACK_IMPORTED_MODULE_5__["CoreSharedModule"],
            _addons_mod_forum_components_components_module__WEBPACK_IMPORTED_MODULE_3__["AddonModForumComponentsModule"],
        ],
        declarations: [
            _discussion_page__WEBPACK_IMPORTED_MODULE_6__["AddonModForumDiscussionPage"],
        ],
    })
], AddonForumDiscussionPageModule);



/***/ }),

/***/ "./src/addons/mod/forum/pages/discussion/discussion.page.ts":
/*!******************************************************************!*\
  !*** ./src/addons/mod/forum/pages/discussion/discussion.page.ts ***!
  \******************************************************************/
/*! exports provided: AddonModForumDiscussionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModForumDiscussionPage", function() { return AddonModForumDiscussionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/core/constants */ "./src/core/constants.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_split_view_split_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/split-view/split-view */ "./src/core/components/split-view/split-view.ts");
/* harmony import */ var _features_fileuploader_services_fileuploader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @features/fileuploader/services/fileuploader */ "./src/core/features/fileuploader/services/fileuploader.ts");
/* harmony import */ var _features_rating_services_rating__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @features/rating/services/rating */ "./src/core/features/rating/services/rating.ts");
/* harmony import */ var _features_rating_services_rating_offline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @features/rating/services/rating-offline */ "./src/core/features/rating/services/rating-offline.ts");
/* harmony import */ var _features_rating_services_rating_sync__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @features/rating/services/rating-sync */ "./src/core/features/rating/services/rating-sync.ts");
/* harmony import */ var _features_user_services_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @features/user/services/user */ "./src/core/features/user/services/user.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_app__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @services/app */ "./src/core/services/app.ts");
/* harmony import */ var _services_navigator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @services/navigator */ "./src/core/services/navigator.ts");
/* harmony import */ var _services_screen__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @services/screen */ "./src/core/services/screen.ts");
/* harmony import */ var _services_sites__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @services/sites */ "./src/core/services/sites.ts");
/* harmony import */ var _services_utils_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @services/utils/dom */ "./src/core/services/utils/dom.ts");
/* harmony import */ var _services_utils_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @services/utils/utils */ "./src/core/services/utils/utils.ts");
/* harmony import */ var _singletons__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @singletons */ "./src/core/singletons/index.ts");
/* harmony import */ var _singletons_array__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @singletons/array */ "./src/core/singletons/array.ts");
/* harmony import */ var _singletons_events__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @singletons/events */ "./src/core/singletons/events.ts");
/* harmony import */ var _services_forum__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../services/forum */ "./src/addons/mod/forum/services/forum.ts");
/* harmony import */ var _services_forum_helper__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../services/forum-helper */ "./src/addons/mod/forum/services/forum-helper.ts");
/* harmony import */ var _services_forum_offline__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../services/forum-offline */ "./src/addons/mod/forum/services/forum-offline.ts");
/* harmony import */ var _services_forum_sync__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../services/forum-sync */ "./src/addons/mod/forum/services/forum-sync.ts");
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
 * Page that displays a forum discussion.
 */
let AddonModForumDiscussionPage = class AddonModForumDiscussionPage {
    constructor(splitView, elementRef) {
        this.splitView = splitView;
        this.elementRef = elementRef;
        this.forum = {};
        this.accessInfo = {};
        this.discussionLoaded = false;
        this.sort = 'nested';
        this.replyData = {
            replyingTo: 0,
            isEditing: false,
            subject: '',
            message: null,
            files: [],
            isprivatereply: false,
        };
        this.originalData = {
            subject: null,
            message: null,
            files: [],
            isprivatereply: false,
        };
        this.refreshIcon = _core_constants__WEBPACK_IMPORTED_MODULE_1__["CoreConstants"].ICON_LOADING;
        this.syncIcon = _core_constants__WEBPACK_IMPORTED_MODULE_1__["CoreConstants"].ICON_LOADING;
        this.discussionStr = '';
        this.component = _services_forum__WEBPACK_IMPORTED_MODULE_19__["AddonModForumProvider"].COMPONENT;
        this.canPin = false;
        this.availabilityMessage = null;
        this.leavingPage = false;
        this.hasOfflineRatings = false;
    }
    get isMobile() {
        return _services_screen__WEBPACK_IMPORTED_MODULE_12__["CoreScreen"].isMobile;
    }
    ngOnInit() {
        this.courseId = _services_navigator__WEBPACK_IMPORTED_MODULE_11__["CoreNavigator"].getRouteNumberParam('courseId');
        this.cmId = _services_navigator__WEBPACK_IMPORTED_MODULE_11__["CoreNavigator"].getRouteNumberParam('cmId');
        this.forumId = _services_navigator__WEBPACK_IMPORTED_MODULE_11__["CoreNavigator"].getRouteNumberParam('forumId');
        this.discussion = _services_navigator__WEBPACK_IMPORTED_MODULE_11__["CoreNavigator"].getRouteParam('discussion');
        this.discussionId = this.discussion
            ? this.discussion.discussion
            : _services_navigator__WEBPACK_IMPORTED_MODULE_11__["CoreNavigator"].getRouteNumberParam('discussionId');
        this.trackPosts = _services_navigator__WEBPACK_IMPORTED_MODULE_11__["CoreNavigator"].getRouteBooleanParam('trackPosts');
        this.postId = _services_navigator__WEBPACK_IMPORTED_MODULE_11__["CoreNavigator"].getRouteNumberParam('postId');
        this.parent = _services_navigator__WEBPACK_IMPORTED_MODULE_11__["CoreNavigator"].getRouteNumberParam('parent');
        this.isOnline = _services_app__WEBPACK_IMPORTED_MODULE_10__["CoreApp"].isOnline();
        this.onlineObserver = _singletons__WEBPACK_IMPORTED_MODULE_16__["Network"].onChange().subscribe(() => {
            // Execute the callback in the Angular zone, so change detection doesn't stop working.
            _singletons__WEBPACK_IMPORTED_MODULE_16__["NgZone"].run(() => {
                this.isOnline = _services_app__WEBPACK_IMPORTED_MODULE_10__["CoreApp"].isOnline();
            });
        });
        this.discussionStr = _singletons__WEBPACK_IMPORTED_MODULE_16__["Translate"].instant('addon.mod_forum.discussion');
    }
    /**
     * View loaded.
     */
    ngAfterViewInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.parent) {
                this.sort = 'nested'; // Force nested order.
            }
            else {
                this.sort = yield this.getUserSort();
            }
            yield this.fetchPosts(true, false, true);
            const scrollTo = this.postId || this.parent;
            if (scrollTo) {
                // Scroll to the post.
                setTimeout(() => {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_14__["CoreDomUtils"].scrollToElementBySelector(this.elementRef.nativeElement, this.content, '#addon-mod_forum-post-' + scrollTo);
                });
            }
        });
    }
    /**
     * User entered the page that contains the component.
     */
    ionViewDidEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.syncObserver) {
                // Already setup.
                return;
            }
            // The discussion object was not passed as parameter.
            if (!this.discussion) {
                yield this.loadDiscussion(this.forumId, this.cmId, this.discussionId);
            }
            // Refresh data if this discussion is synchronized automatically.
            this.syncObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_18__["CoreEvents"].on(_services_forum_sync__WEBPACK_IMPORTED_MODULE_22__["AddonModForumSyncProvider"].AUTO_SYNCED, data => {
                if (data.forumId == this.forumId && this.discussionId == data.discussionId
                    && data.userId == _services_sites__WEBPACK_IMPORTED_MODULE_13__["CoreSites"].getCurrentSiteUserId()) {
                    // Refresh the data.
                    this.discussionLoaded = false;
                    this.refreshPosts();
                }
            }, _services_sites__WEBPACK_IMPORTED_MODULE_13__["CoreSites"].getCurrentSiteId());
            // Refresh data if this forum discussion is synchronized from discussions list.
            this.syncManualObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_18__["CoreEvents"].on(_services_forum_sync__WEBPACK_IMPORTED_MODULE_22__["AddonModForumSyncProvider"].MANUAL_SYNCED, data => {
                if (data.source != 'discussion' && data.forumId == this.forumId &&
                    data.userId == _services_sites__WEBPACK_IMPORTED_MODULE_13__["CoreSites"].getCurrentSiteUserId()) {
                    // Refresh the data.
                    this.discussionLoaded = false;
                    this.refreshPosts();
                }
            }, _services_sites__WEBPACK_IMPORTED_MODULE_13__["CoreSites"].getCurrentSiteId());
            // Invalidate discussion list if it was not read.
            if (this.discussion.numunread > 0) {
                _services_forum__WEBPACK_IMPORTED_MODULE_19__["AddonModForum"].invalidateDiscussionsList(this.forumId);
            }
            // Listen for offline ratings saved and synced.
            this.ratingOfflineObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_18__["CoreEvents"].on(_features_rating_services_rating__WEBPACK_IMPORTED_MODULE_5__["CoreRatingProvider"].RATING_SAVED_EVENT, (data) => {
                if (data.component == 'mod_forum' && data.ratingArea == 'post' && data.contextLevel == "module" /* MODULE */ &&
                    data.instanceId == this.cmId && data.itemSetId == this.discussionId) {
                    this.hasOfflineRatings = true;
                }
            });
            this.ratingSyncObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_18__["CoreEvents"].on(_features_rating_services_rating_sync__WEBPACK_IMPORTED_MODULE_7__["CoreRatingSyncProvider"].SYNCED_EVENT, (data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (data.component == 'mod_forum' && data.ratingArea == 'post' && data.contextLevel == "module" /* MODULE */ &&
                    data.instanceId == this.cmId && data.itemSetId == this.discussionId) {
                    this.hasOfflineRatings = false;
                }
            }));
            this.changeDiscObserver = _singletons_events__WEBPACK_IMPORTED_MODULE_18__["CoreEvents"].on(_services_forum__WEBPACK_IMPORTED_MODULE_19__["AddonModForumProvider"].CHANGE_DISCUSSION_EVENT, data => {
                if ((this.forumId && this.forumId === data.forumId) || data.cmId === this.cmId) {
                    _services_forum__WEBPACK_IMPORTED_MODULE_19__["AddonModForum"].invalidateDiscussionsList(this.forumId).finally(() => {
                        var _a, _b;
                        if (typeof data.locked != 'undefined') {
                            this.discussion.locked = data.locked;
                        }
                        if (typeof data.pinned != 'undefined') {
                            this.discussion.pinned = data.pinned;
                        }
                        if (typeof data.starred != 'undefined') {
                            this.discussion.starred = data.starred;
                        }
                        if (typeof data.deleted != 'undefined' && data.deleted) {
                            if (!((_a = data.post) === null || _a === void 0 ? void 0 : _a.parentid)) {
                                if ((_b = this.splitView) === null || _b === void 0 ? void 0 : _b.outletActivated) {
                                    _services_navigator__WEBPACK_IMPORTED_MODULE_11__["CoreNavigator"].navigate('../');
                                }
                                else {
                                    _services_navigator__WEBPACK_IMPORTED_MODULE_11__["CoreNavigator"].back();
                                }
                            }
                            else {
                                this.discussionLoaded = false;
                                this.refreshPosts();
                            }
                        }
                    });
                }
            });
        });
    }
    /**
     * Check if we can leave the page or not.
     *
     * @return Resolved if we can leave it, rejected if not.
     */
    canLeave() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (_services_forum_helper__WEBPACK_IMPORTED_MODULE_20__["AddonModForumHelper"].hasPostDataChanged(this.replyData, this.originalData)) {
                // Show confirmation if some data has been modified.
                yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_14__["CoreDomUtils"].showConfirm(_singletons__WEBPACK_IMPORTED_MODULE_16__["Translate"].instant('core.confirmcanceledit'));
            }
            // Delete the local files from the tmp folder.
            _features_fileuploader_services_fileuploader__WEBPACK_IMPORTED_MODULE_4__["CoreFileUploader"].clearTmpFiles(this.replyData.files);
            this.leavingPage = true;
            return true;
        });
    }
    /**
     * Runs when the page is about to leave and no longer be the active page.
     */
    ionViewWillLeave() {
        this.syncObserver && this.syncObserver.off();
        this.syncManualObserver && this.syncManualObserver.off();
        this.ratingOfflineObserver && this.ratingOfflineObserver.off();
        this.ratingSyncObserver && this.ratingSyncObserver.off();
        this.changeDiscObserver && this.changeDiscObserver.off();
        delete this.syncObserver;
    }
    /**
     * Page destroyed.
     */
    ngOnDestroy() {
        this.onlineObserver && this.onlineObserver.unsubscribe();
    }
    /**
     * Get sort type configured by the current user.
     *
     * @return Promise resolved with the sort type.
     */
    getUserSort() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const value = yield _services_sites__WEBPACK_IMPORTED_MODULE_13__["CoreSites"].getCurrentSite().getLocalSiteConfig('AddonModForumDiscussionSort');
                return value;
            }
            catch (error) {
                try {
                    const value = yield _features_user_services_user__WEBPACK_IMPORTED_MODULE_8__["CoreUser"].getUserPreference('forum_displaymode');
                    switch (Number(value)) {
                        case 1:
                            return 'flat-oldest';
                        case -1:
                            return 'flat-newest';
                        case 3:
                            return 'nested';
                        case 2: // Threaded not implemented.
                        default:
                        // Not set, use default sort.
                        // @TODO add fallback to $CFG->forum_displaymode.
                    }
                }
                catch (error) {
                    // Ignore errors.
                }
            }
            return 'flat-oldest';
        });
    }
    /**
     * Convenience function to get the forum.
     *
     * @return Promise resolved with the forum.
     */
    fetchForum() {
        if (this.courseId && this.cmId) {
            return _services_forum__WEBPACK_IMPORTED_MODULE_19__["AddonModForum"].getForum(this.courseId, this.cmId);
        }
        if (this.courseId && this.forumId) {
            return _services_forum__WEBPACK_IMPORTED_MODULE_19__["AddonModForum"].getForumById(this.courseId, this.forumId);
        }
        throw new Error('Cannot get the forum');
    }
    /**
     * Convenience function to get the posts.
     *
     * @param sync Whether to try to synchronize the discussion.
     * @param showErrors Whether to show errors in a modal.
     * @param forceMarkAsRead Whether to mark all posts as read.
     * @return Promise resolved when done.
     */
    fetchPosts(sync, showErrors, forceMarkAsRead) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let onlinePosts = [];
            const offlineReplies = [];
            let hasUnreadPosts = false;
            try {
                if (sync) {
                    // Try to synchronize the forum.
                    yield _services_utils_utils__WEBPACK_IMPORTED_MODULE_15__["CoreUtils"].ignoreErrors(this.syncDiscussion(!!showErrors));
                }
                const response = yield _services_forum__WEBPACK_IMPORTED_MODULE_19__["AddonModForum"].getDiscussionPosts(this.discussionId, { cmId: this.cmId });
                const replies = yield _services_forum_offline__WEBPACK_IMPORTED_MODULE_21__["AddonModForumOffline"].getDiscussionReplies(this.discussionId);
                this.ratingInfo = response.ratinginfo;
                onlinePosts = response.posts;
                this.courseId = response.courseid || this.courseId;
                this.forumId = response.forumid || this.forumId;
                // Check if there are responses stored in offline.
                this.postHasOffline = !!replies.length;
                const convertPromises = [];
                // Index posts to allow quick access. Also check unread field.
                const onlinePostsMap = {};
                onlinePosts.forEach((post) => {
                    onlinePostsMap[post.id] = post;
                    hasUnreadPosts = hasUnreadPosts || !!post.unread;
                });
                replies.forEach((offlineReply) => {
                    // If we don't have forumId and courseId, get it from the post.
                    if (!this.forumId) {
                        this.forumId = offlineReply.forumid;
                    }
                    if (!this.courseId) {
                        this.courseId = offlineReply.courseid;
                    }
                    convertPromises.push(_services_forum_helper__WEBPACK_IMPORTED_MODULE_20__["AddonModForumHelper"].instance
                        .convertOfflineReplyToOnline(offlineReply)
                        .then((reply) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        offlineReplies.push(reply);
                        // Disable reply of the parent. Reply in offline to the same post is not allowed, edit instead.
                        onlinePostsMap[reply.parentid].capabilities.reply = false;
                        return;
                    })));
                });
                yield Promise.all(convertPromises);
                // Convert back to array.
                onlinePosts = _services_utils_utils__WEBPACK_IMPORTED_MODULE_15__["CoreUtils"].objectToArray(onlinePostsMap);
                let posts = offlineReplies.concat(onlinePosts);
                this.startingPost = _services_forum__WEBPACK_IMPORTED_MODULE_19__["AddonModForum"].extractStartingPost(posts);
                // If sort type is nested, normal sorting is disabled and nested posts will be displayed.
                if (this.sort == 'nested') {
                    // Sort first by creation date to make format tree work.
                    _services_forum__WEBPACK_IMPORTED_MODULE_19__["AddonModForum"].sortDiscussionPosts(posts, 'ASC');
                    const rootId = this.startingPost ? this.startingPost.id : (this.discussion ? this.discussion.id : 0);
                    posts = _services_utils_utils__WEBPACK_IMPORTED_MODULE_15__["CoreUtils"].formatTree(posts, 'parentid', 'id', rootId);
                }
                else {
                    // Set default reply subject.
                    const direction = this.sort == 'flat-newest' ? 'DESC' : 'ASC';
                    _services_forum__WEBPACK_IMPORTED_MODULE_19__["AddonModForum"].sortDiscussionPosts(posts, direction);
                }
                try {
                    // Now try to get the forum.
                    const forum = yield this.fetchForum();
                    // "forum.istracked" is more reliable than "trackPosts".
                    if (typeof forum.istracked != 'undefined') {
                        this.trackPosts = forum.istracked;
                    }
                    this.forumId = forum.id;
                    this.cmId = forum.cmid;
                    this.courseId = forum.course;
                    this.forum = forum;
                    this.availabilityMessage = _services_forum_helper__WEBPACK_IMPORTED_MODULE_20__["AddonModForumHelper"].getAvailabilityMessage(forum);
                    const promises = [];
                    promises.push(_services_forum__WEBPACK_IMPORTED_MODULE_19__["AddonModForum"].instance
                        .getAccessInformation(this.forumId, { cmId: this.cmId })
                        .then((accessInfo) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        this.accessInfo = accessInfo;
                        // Disallow replying if cut-off date is reached and the user has not the capability to override it.
                        // Just in case the posts were fetched from WS when the cut-off date was not reached but it is now.
                        if (_services_forum_helper__WEBPACK_IMPORTED_MODULE_20__["AddonModForumHelper"].isCutoffDateReached(forum) && !accessInfo.cancanoverridecutoff) {
                            posts.forEach((post) => {
                                post.capabilities.reply = false;
                            });
                        }
                        return;
                    })));
                    // The discussion object was not passed as parameter and there is no starting post.
                    if (!this.discussion) {
                        promises.push(this.loadDiscussion(this.forumId, this.cmId, this.discussionId));
                    }
                    yield Promise.all(promises);
                }
                catch (error) {
                    // Ignore errors.
                }
                if (!this.discussion && !this.startingPost) {
                    // The discussion object was not passed as parameter and there is no starting post. Should not happen.
                    throw new Error('Invalid forum discussion.');
                }
                if (this.startingPost && this.startingPost.author && this.forum.type == 'single') {
                    // Hide author and groups for first post and type single.
                    delete this.startingPost.author.fullname;
                    delete this.startingPost.author.groups;
                }
                this.posts = posts;
                this.postSubjects = this.getAllPosts().reduce((postSubjects, post) => {
                    postSubjects[post.id] = post.subject;
                    return postSubjects;
                }, this.startingPost
                    ? { [this.startingPost.id]: this.startingPost.subject }
                    : {});
                if (_services_forum__WEBPACK_IMPORTED_MODULE_19__["AddonModForum"].isSetPinStateAvailableForSite()) {
                    // Use the canAddDiscussion WS to check if the user can pin discussions.
                    try {
                        const response = yield _services_forum__WEBPACK_IMPORTED_MODULE_19__["AddonModForum"].canAddDiscussionToAll(this.forumId, { cmId: this.cmId });
                        this.canPin = !!response.canpindiscussions;
                    }
                    catch (error) {
                        this.canPin = false;
                    }
                }
                else {
                    this.canPin = false;
                }
                this.hasOfflineRatings =
                    yield _features_rating_services_rating_offline__WEBPACK_IMPORTED_MODULE_6__["CoreRatingOffline"].hasRatings('mod_forum', 'post', "module" /* MODULE */, this.cmId, this.discussionId);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_14__["CoreDomUtils"].showErrorModal(error);
            }
            finally {
                this.discussionLoaded = true;
                this.refreshIcon = _core_constants__WEBPACK_IMPORTED_MODULE_1__["CoreConstants"].ICON_REFRESH;
                this.syncIcon = _core_constants__WEBPACK_IMPORTED_MODULE_1__["CoreConstants"].ICON_SYNC;
                if (forceMarkAsRead || (hasUnreadPosts && this.trackPosts)) {
                    // // Add log in Moodle and mark unread posts as readed.
                    _services_forum__WEBPACK_IMPORTED_MODULE_19__["AddonModForum"].logDiscussionView(this.discussionId, this.forumId || -1, this.forum.name).catch(() => {
                        // Ignore errors.
                    }).finally(() => {
                        // Trigger mark read posts.
                        _singletons_events__WEBPACK_IMPORTED_MODULE_18__["CoreEvents"].trigger(_services_forum__WEBPACK_IMPORTED_MODULE_19__["AddonModForumProvider"].MARK_READ_EVENT, {
                            courseId: this.courseId,
                            moduleId: this.cmId,
                        }, _services_sites__WEBPACK_IMPORTED_MODULE_13__["CoreSites"].getCurrentSiteId());
                    });
                }
            }
        });
    }
    /**
     * Convenience function to load discussion.
     *
     * @param forumId Forum ID.
     * @param cmId Forum cmid.
     * @param discussionId Discussion ID.
     * @return Promise resolved when done.
     */
    loadDiscussion(forumId, cmId, discussionId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Fetch the discussion if not passed as parameter.
            if (this.discussion || !forumId) {
                return;
            }
            try {
                const discussion = yield _services_forum_helper__WEBPACK_IMPORTED_MODULE_20__["AddonModForumHelper"].getDiscussionById(forumId, cmId, discussionId);
                this.discussion = discussion;
                this.discussionId = this.discussion.discussion;
            }
            catch (error) {
                // Ignore errors.
            }
        });
    }
    /**
     * Tries to synchronize the posts discussion.
     *
     * @param showErrors Whether to show errors in a modal.
     * @return Promise resolved when done.
     */
    syncDiscussion(showErrors) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const promises = [];
            promises.push(_services_forum_sync__WEBPACK_IMPORTED_MODULE_22__["AddonModForumSync"].instance
                .syncDiscussionReplies(this.discussionId)
                .then((result) => {
                if (result.warnings && result.warnings.length) {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_14__["CoreDomUtils"].showErrorModal(result.warnings[0]);
                }
                if (result && result.updated) {
                    // Sync successful, send event.
                    _singletons_events__WEBPACK_IMPORTED_MODULE_18__["CoreEvents"].trigger(_services_forum_sync__WEBPACK_IMPORTED_MODULE_22__["AddonModForumSyncProvider"].MANUAL_SYNCED, {
                        forumId: this.forumId,
                        userId: _services_sites__WEBPACK_IMPORTED_MODULE_13__["CoreSites"].getCurrentSiteUserId(),
                        source: 'discussion',
                    }, _services_sites__WEBPACK_IMPORTED_MODULE_13__["CoreSites"].getCurrentSiteId());
                }
                return;
            }));
            promises.push(_services_forum_sync__WEBPACK_IMPORTED_MODULE_22__["AddonModForumSync"].instance
                .syncRatings(this.cmId, this.discussionId)
                .then((result) => {
                if (result.warnings && result.warnings.length) {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_14__["CoreDomUtils"].showErrorModal(result.warnings[0]);
                }
                return;
            }));
            try {
                yield Promise.all(promises);
            }
            catch (error) {
                if (showErrors) {
                    _services_utils_dom__WEBPACK_IMPORTED_MODULE_14__["CoreDomUtils"].showErrorModalDefault(error, 'core.errorsync', true);
                }
                throw new Error('Failed syncing discussion');
            }
        });
    }
    /**
     * Refresh the data.
     *
     * @param refresher Refresher.
     * @param done Function to call when done.
     * @param showErrors If show errors to the user of hide them.
     * @return Promise resolved when done.
     */
    doRefresh(refresher, done, showErrors = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.discussionLoaded) {
                yield this.refreshPosts(true, showErrors).finally(() => {
                    refresher === null || refresher === void 0 ? void 0 : refresher.complete();
                    done && done();
                });
            }
        });
    }
    /**
     * Refresh posts.
     *
     * @param sync Whether to try to synchronize the discussion.
     * @param showErrors Whether to show errors in a modal.
     * @return Promise resolved when done.
     */
    refreshPosts(sync, showErrors) {
        this.content.scrollToTop();
        this.refreshIcon = _core_constants__WEBPACK_IMPORTED_MODULE_1__["CoreConstants"].ICON_LOADING;
        this.syncIcon = _core_constants__WEBPACK_IMPORTED_MODULE_1__["CoreConstants"].ICON_LOADING;
        const promises = [
            _services_forum__WEBPACK_IMPORTED_MODULE_19__["AddonModForum"].invalidateForumData(this.courseId),
            _services_forum__WEBPACK_IMPORTED_MODULE_19__["AddonModForum"].invalidateDiscussionPosts(this.discussionId, this.forumId),
            _services_forum__WEBPACK_IMPORTED_MODULE_19__["AddonModForum"].invalidateAccessInformation(this.forumId),
            _services_forum__WEBPACK_IMPORTED_MODULE_19__["AddonModForum"].invalidateCanAddDiscussion(this.forumId),
        ];
        return _services_utils_utils__WEBPACK_IMPORTED_MODULE_15__["CoreUtils"].allPromises(promises).catch(() => {
            // Ignore errors.
        }).then(() => this.fetchPosts(sync, showErrors));
    }
    /**
     * Function to change posts sorting
     *
     * @param type Sort type.
     * @return Promised resolved when done.
     */
    changeSort(type) {
        this.discussionLoaded = false;
        this.sort = type;
        _services_sites__WEBPACK_IMPORTED_MODULE_13__["CoreSites"].getCurrentSite().setLocalSiteConfig('AddonModForumDiscussionSort', this.sort);
        this.content.scrollToTop();
        return this.fetchPosts();
    }
    /**
     * Lock or unlock the discussion.
     *
     * @param locked True to lock the discussion, false to unlock.
     */
    setLockState(locked) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_14__["CoreDomUtils"].showModalLoading('core.sending', true);
            try {
                const response = yield _services_forum__WEBPACK_IMPORTED_MODULE_19__["AddonModForum"].setLockState(this.forumId, this.discussionId, locked);
                this.discussion.locked = response.locked;
                const data = {
                    forumId: this.forumId,
                    discussionId: this.discussionId,
                    cmId: this.cmId,
                    locked: this.discussion.locked,
                };
                _singletons_events__WEBPACK_IMPORTED_MODULE_18__["CoreEvents"].trigger(_services_forum__WEBPACK_IMPORTED_MODULE_19__["AddonModForumProvider"].CHANGE_DISCUSSION_EVENT, data, _services_sites__WEBPACK_IMPORTED_MODULE_13__["CoreSites"].getCurrentSiteId());
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_14__["CoreDomUtils"].showToast('addon.mod_forum.lockupdated', true);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_14__["CoreDomUtils"].showErrorModal(error);
            }
            finally {
                modal.dismiss();
            }
        });
    }
    /**
     * Pin or unpin the discussion.
     *
     * @param pinned True to pin the discussion, false to unpin it.
     */
    setPinState(pinned) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_14__["CoreDomUtils"].showModalLoading('core.sending', true);
            try {
                yield _services_forum__WEBPACK_IMPORTED_MODULE_19__["AddonModForum"].setPinState(this.discussionId, pinned);
                this.discussion.pinned = pinned;
                const data = {
                    forumId: this.forumId,
                    discussionId: this.discussionId,
                    cmId: this.cmId,
                    pinned: this.discussion.pinned,
                };
                _singletons_events__WEBPACK_IMPORTED_MODULE_18__["CoreEvents"].trigger(_services_forum__WEBPACK_IMPORTED_MODULE_19__["AddonModForumProvider"].CHANGE_DISCUSSION_EVENT, data, _services_sites__WEBPACK_IMPORTED_MODULE_13__["CoreSites"].getCurrentSiteId());
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_14__["CoreDomUtils"].showToast('addon.mod_forum.pinupdated', true);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_14__["CoreDomUtils"].showErrorModal(error);
            }
            finally {
                modal.dismiss();
            }
        });
    }
    /**
     * Star or unstar the discussion.
     *
     * @param starred True to star the discussion, false to unstar it.
     */
    toggleFavouriteState(starred) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield _services_utils_dom__WEBPACK_IMPORTED_MODULE_14__["CoreDomUtils"].showModalLoading('core.sending', true);
            try {
                yield _services_forum__WEBPACK_IMPORTED_MODULE_19__["AddonModForum"].toggleFavouriteState(this.discussionId, starred);
                this.discussion.starred = starred;
                const data = {
                    forumId: this.forumId,
                    discussionId: this.discussionId,
                    cmId: this.cmId,
                    starred: this.discussion.starred,
                };
                _singletons_events__WEBPACK_IMPORTED_MODULE_18__["CoreEvents"].trigger(_services_forum__WEBPACK_IMPORTED_MODULE_19__["AddonModForumProvider"].CHANGE_DISCUSSION_EVENT, data, _services_sites__WEBPACK_IMPORTED_MODULE_13__["CoreSites"].getCurrentSiteId());
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_14__["CoreDomUtils"].showToast('addon.mod_forum.favouriteupdated', true);
            }
            catch (error) {
                _services_utils_dom__WEBPACK_IMPORTED_MODULE_14__["CoreDomUtils"].showErrorModal(error);
            }
            finally {
                modal.dismiss();
            }
        });
    }
    /**
     * New post added.
     */
    postListChanged() {
        // Trigger an event to notify a new reply.
        const data = {
            forumId: this.forumId,
            discussionId: this.discussionId,
            cmId: this.cmId,
        };
        _singletons_events__WEBPACK_IMPORTED_MODULE_18__["CoreEvents"].trigger(_services_forum__WEBPACK_IMPORTED_MODULE_19__["AddonModForumProvider"].REPLY_DISCUSSION_EVENT, data, _services_sites__WEBPACK_IMPORTED_MODULE_13__["CoreSites"].getCurrentSiteId());
        this.discussionLoaded = false;
        this.refreshPosts().finally(() => {
            this.discussionLoaded = true;
        });
    }
    /**
     * Get all the posts contained in the discussion.
     *
     * @return Array containing all the posts of the discussion.
     */
    getAllPosts() {
        const allPosts = this.posts.map(post => this.flattenPostHierarchy(post));
        return _singletons_array__WEBPACK_IMPORTED_MODULE_17__["CoreArray"].flatten(allPosts);
    }
    /**
     * Flatten a post's hierarchy into an array.
     *
     * @param parent Parent post.
     * @return Array containing all the posts within the hierarchy (including the parent).
     */
    flattenPostHierarchy(parent) {
        const posts = [parent];
        const children = parent.children || [];
        for (const child of children) {
            posts.push(...this.flattenPostHierarchy(child));
        }
        return posts;
    }
};
AddonModForumDiscussionPage.ctorParameters = () => [
    { type: _components_split_view_split_view__WEBPACK_IMPORTED_MODULE_3__["CoreSplitViewComponent"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }
];
AddonModForumDiscussionPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonContent"],] }]
};
AddonModForumDiscussionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'page-addon-mod-forum-discussion',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./discussion.html */ "./node_modules/raw-loader/dist/cjs.js!./src/addons/mod/forum/pages/discussion/discussion.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./discussion.scss */ "./src/addons/mod/forum/pages/discussion/discussion.scss")).default]
    })
], AddonModForumDiscussionPage);



/***/ }),

/***/ "./src/addons/mod/forum/pages/discussion/discussion.scss":
/*!***************************************************************!*\
  !*** ./src/addons/mod/forum/pages/discussion/discussion.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host .addon-forum-reply-button .label {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGRvbnMvbW9kL2ZvcnVtL3BhZ2VzL2Rpc2N1c3Npb24vZGlzY3Vzc2lvbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0ksU0FBQTtBQURSIiwiZmlsZSI6InNyYy9hZGRvbnMvbW9kL2ZvcnVtL3BhZ2VzL2Rpc2N1c3Npb24vZGlzY3Vzc2lvbi5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG5cclxuICAgIC5hZGRvbi1mb3J1bS1yZXBseS1idXR0b24gLmxhYmVsIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=pages-discussion-discussion-module.js.map