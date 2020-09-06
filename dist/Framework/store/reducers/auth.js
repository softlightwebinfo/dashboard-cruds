"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.INITIAL_STATE = void 0;
const actionCreators_1 = require("../actionCreators");
const next_redux_wrapper_1 = require("next-redux-wrapper");
exports.INITIAL_STATE = {
    parseAuthLoaded: false,
    authLoaded: false,
    auth: null,
    error: false,
    errorMessage: ""
};
function reducer(state = exports.INITIAL_STATE, action) {
    switch (action.type) {
        case next_redux_wrapper_1.HYDRATE: {
            return Object.assign(Object.assign({}, state), action.payload.auth);
        }
        case actionCreators_1.authType.AUTH_SUCCESS: {
            return Object.assign(Object.assign({}, state), { parseAuthLoaded: true, authLoaded: false, auth: action.auth, error: false });
        }
        case actionCreators_1.authType.AUTH_FAILURE: {
            return Object.assign(Object.assign({}, state), { parseAuthLoaded: false, authLoaded: false, auth: null, error: true, errorMessage: action.error });
        }
        case actionCreators_1.authType.AUTH_REQUEST: {
            return Object.assign(Object.assign({}, state), { parseAuthLoaded: false, authLoaded: true });
        }
        case actionCreators_1.authType.AUTH_LOGOUT_REQUEST: {
            return Object.assign(Object.assign({}, state), { auth: null });
        }
        default: {
            return state;
        }
    }
}
exports.default = reducer;
//# sourceMappingURL=auth.js.map