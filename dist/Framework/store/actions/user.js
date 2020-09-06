"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userAllFailure = exports.userAllSuccess = void 0;
const actionCreators_1 = require("../actionCreators");
exports.userAllSuccess = (users) => ({ type: actionCreators_1.userType.USER_ALL_SUCCESS, users });
exports.userAllFailure = (errorText, error = null) => ({ type: actionCreators_1.userType.USER_ALL_FAILURE, errorText, error });
//# sourceMappingURL=user.js.map