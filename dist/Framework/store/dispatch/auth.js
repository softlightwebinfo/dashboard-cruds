"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authLogout = exports.authInitial = exports.authRegister = exports.auth = void 0;
// @ts-ignore
const auth_1 = require("../actions/auth");
const settings_1 = require("settings");
const nookies_1 = require("nookies");
// @ts-ignore
exports.auth = (email, password) => async (dispatch) => {
    try {
        dispatch(auth_1.authRequest());
        const res = await fetch(settings_1.getApi("user/login"), {
            body: JSON.stringify({
                email: email,
                password: password,
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST"
        });
        const response = await res.json();
        if (response.error) {
            dispatch(auth_1.authFailure(response.error));
        }
        else {
            dispatch(auth_1.authSuccess(response));
        }
    }
    catch (err) {
        dispatch(auth_1.authFailure("Error to change language: ", err));
    }
};
exports.authRegister = (data) => async (dispatch) => {
    try {
        const res = await fetch(settings_1.getApi("user/register"), {
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST"
        });
        const response = await res.json();
        dispatch(auth_1.authSuccess(response));
    }
    catch (err) {
        dispatch(auth_1.authFailure(err));
    }
};
exports.authInitial = (cookie) => async (dispatch) => {
    try {
        dispatch(auth_1.authInitialRq());
        const res = await fetch(settings_1.getApi("user/initial"), {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'cookie': cookie,
            },
            method: "POST",
        });
        const response = await res.json();
        if (response.error) {
            dispatch(auth_1.authFailure(response.error));
        }
        else {
            dispatch(auth_1.authSuccess(response));
        }
    }
    catch (err) {
        dispatch(auth_1.authFailure(err));
    }
};
exports.authLogout = () => dispatch => {
    dispatch(auth_1.authLogout());
    //const cookies = parseCookies();
    nookies_1.destroyCookie(null, 'user');
    nookies_1.destroyCookie(null, 'token');
};
//# sourceMappingURL=auth.js.map