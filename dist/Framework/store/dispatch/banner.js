"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBanner = exports.activeBanner = exports.getAllBanner = exports.updateBanner = exports.createBanner = void 0;
const settings_1 = require("settings");
const banner_1 = require("../actions/banner");
exports.createBanner = (action) => async (dispatch) => {
    let data = new FormData();
    data.append("title", action.data.Title);
    data.append("page", action.data.page);
    data.append("file", action.data.File.file);
    data.append("button", action.data.Button || null);
    data.append("route", action.data.Route || null);
    data.append("subtitle", action.data.Subtitle || null);
    try {
        const res = await fetch(settings_1.getApi("banner"), {
            body: data,
            method: "POST"
        });
        const response = await res.json();
        if (response.error) {
            dispatch(banner_1.bannerFailure(response.error));
        }
        else {
            dispatch(banner_1.bannerSuccess());
        }
        setTimeout(() => {
            dispatch(banner_1.bannerParse());
        }, 1000);
    }
    catch (err) {
        dispatch(banner_1.bannerFailure("Error to change language: ", err));
    }
};
exports.updateBanner = (action) => async (dispatch) => {
    let data = new FormData();
    data.append("id", action.id);
    data.append("title", action.data.Title);
    data.append("page", action.data.page);
    if (action.data.File) {
        data.append("file", action.data.File.file);
    }
    data.append("button", action.data.Button || null);
    data.append("route", action.data.Route || null);
    data.append("subtitle", action.data.Subtitle || null);
    try {
        const res = await fetch(settings_1.getApi(`banner/${action.id}`), {
            body: data,
            method: "PUT"
        });
        const response = await res.json();
        if (response.error) {
            dispatch(banner_1.bannerUpdateFailure(response.error));
        }
        else {
            dispatch(banner_1.bannerUpdateSuccess(action.id, response));
            setTimeout(() => {
                dispatch(banner_1.bannerParse());
            }, 1000);
        }
    }
    catch (err) {
        dispatch(banner_1.bannerUpdateFailure("Error to change language: ", err));
    }
};
exports.getAllBanner = () => async (dispatch) => {
    try {
        dispatch(banner_1.bannerListRequest());
        const res = await fetch(settings_1.getApi("banner"));
        const response = await res.json();
        if (response.error) {
            dispatch(banner_1.bannerListFailure(response.error));
        }
        else {
            dispatch(banner_1.bannerListSuccess(response.Result));
        }
        setTimeout(() => {
            dispatch(banner_1.bannerParse());
        }, 1000);
    }
    catch (err) {
        dispatch(banner_1.bannerListFailure("Error to change language: ", err));
    }
};
exports.activeBanner = (action) => async (dispatch) => {
    try {
        let active = !action.active;
        const res = await fetch(settings_1.getApi(`banner/${action.id}/${active ? "active" : "inactive"}`), {
            body: JSON.stringify({}),
            method: "PUT"
        });
        const response = await res.json();
        if (response.error) {
            dispatch(banner_1.bannerActiveFailure(response.error));
        }
        else {
            dispatch(banner_1.bannerActiveSuccess(action.id, active));
        }
        setTimeout(() => {
            dispatch(banner_1.bannerParse());
        }, 1000);
    }
    catch (err) {
        dispatch(banner_1.bannerActiveFailure("Error no activate banner: ", err));
    }
};
exports.deleteBanner = (action) => async (dispatch) => {
    try {
        const res = await fetch(settings_1.getApi(`banner/${action.id}`), {
            body: JSON.stringify({
                image: action.image,
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "DELETE"
        });
        const response = await res.json();
        if (response.error) {
            dispatch(banner_1.bannerDeleteFailure(response.error));
        }
        else {
            dispatch(banner_1.bannerDeleteSuccess(action.id, action.image));
        }
        setTimeout(() => {
            dispatch(banner_1.bannerParse());
        }, 1000);
    }
    catch (err) {
        dispatch(banner_1.bannerDeleteFailure("Error no activate banner: ", err));
    }
};
//# sourceMappingURL=banner.js.map