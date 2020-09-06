"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.INITIAL_STATE = void 0;
const actionCreators_1 = require("../actionCreators");
const next_redux_wrapper_1 = require("next-redux-wrapper");
exports.INITIAL_STATE = {
    parseTranslatesLoaded: false,
    translationLoaded: false,
    translation: {},
    error: false,
    errorMessage: ""
};
function reducer(state = exports.INITIAL_STATE, action) {
    switch (action.type) {
        case next_redux_wrapper_1.HYDRATE: {
            return Object.assign(Object.assign({}, state), action.payload.translate);
        }
        case actionCreators_1.translationType.TRANSLATION_SUCCESS: {
            return Object.assign(Object.assign({}, state), { parseTranslatesLoaded: true, translationLoaded: true, translation: action.translation, error: false });
        }
        case actionCreators_1.translationType.TRANSLATION_FAILURE: {
            return Object.assign(Object.assign({}, state), { parseTranslatesLoaded: false, translationLoaded: false, translation: {}, error: true, errorMessage: action.error });
        }
        case actionCreators_1.translationType.TRANSLATION_REQUEST: {
            return Object.assign(Object.assign({}, state), { parseTranslatesLoaded: false, translationLoaded: false });
        }
        default: {
            return state;
        }
    }
}
exports.default = reducer;
//# sourceMappingURL=translate.js.map