"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.INITIAL_STATE = void 0;
const next_redux_wrapper_1 = require("next-redux-wrapper");
const actionCreators_1 = require("../actionCreators");
exports.INITIAL_STATE = {
    users: [],
    count: 0,
};
function reducer(state = exports.INITIAL_STATE, action) {
    switch (action.type) {
        case next_redux_wrapper_1.HYDRATE: {
            return Object.assign(Object.assign({}, state), action.payload.user);
        }
        case actionCreators_1.userType.USER_ALL_SUCCESS: {
            return Object.assign(Object.assign({}, state), { users: action.users.result, count: Number(action.users.count) });
        }
        default: {
            return state;
        }
    }
}
exports.default = reducer;
//# sourceMappingURL=user.js.map