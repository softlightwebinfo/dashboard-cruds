"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userAllRequest = void 0;
const settings_1 = require("settings");
const user_1 = require("../actions/user");
exports.userAllRequest = (cookies) => async (dispatch) => {
    try {
        const res = await fetch(settings_1.getApi("users"), {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'cookie': cookies,
            },
        });
        const response = await res.json();
        if (response.error) {
            dispatch(user_1.userAllFailure(response.error));
        }
        else {
            dispatch(user_1.userAllSuccess(response));
        }
    }
    catch (err) {
        dispatch(user_1.userAllFailure("Error to change language: ", err));
    }
};
//# sourceMappingURL=user.js.map