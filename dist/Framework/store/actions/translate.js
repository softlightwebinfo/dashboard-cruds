"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.translationRequest = exports.translationFailure = exports.translationSuccess = void 0;
const actionCreators_1 = require("../actionCreators");
exports.translationSuccess = (translation) => ({ type: actionCreators_1.translationType.TRANSLATION_SUCCESS, translation: translation });
exports.translationFailure = (errorText, error = null) => ({ type: actionCreators_1.translationType.TRANSLATION_FAILURE, errorText, error });
exports.translationRequest = (language) => ({ type: actionCreators_1.translationType.TRANSLATION_REQUEST, language });
//# sourceMappingURL=translate.js.map