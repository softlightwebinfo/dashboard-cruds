"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authLogout = exports.authInitialRq = exports.authRequest = exports.authFailure = exports.authSuccess = void 0;
const actionCreators_1 = require("../actionCreators");
exports.authSuccess = (auth) => ({ type: actionCreators_1.authType.AUTH_SUCCESS, auth });
exports.authFailure = (errorText, error = null) => ({ type: actionCreators_1.authType.AUTH_FAILURE, errorText, error });
exports.authRequest = () => ({ type: actionCreators_1.authType.AUTH_REQUEST });
exports.authInitialRq = () => ({ type: actionCreators_1.authType.AUTH_INITIAL_REQUEST });
exports.authLogout = () => ({ type: actionCreators_1.authType.AUTH_LOGOUT_REQUEST });
//# sourceMappingURL=auth.js.map