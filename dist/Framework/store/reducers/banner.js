"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.INITIAL_STATE = void 0;
const actionCreators_1 = require("../actionCreators");
const next_redux_wrapper_1 = require("next-redux-wrapper");
exports.INITIAL_STATE = {
    parseBannerLoaded: false,
    bannerLoaded: false,
    banners: [],
    error: false,
    errorMessage: "",
};
function reducer(state = exports.INITIAL_STATE, action) {
    switch (action.type) {
        case next_redux_wrapper_1.HYDRATE: {
            return Object.assign(Object.assign({}, state), action.payload.banner);
        }
        case actionCreators_1.bannerType.BANNER_UPDATE_FAILURE:
        case actionCreators_1.bannerType.BANNER_LIST_FAILURE:
        case actionCreators_1.bannerType.BANNER_DELETE_FAILURE:
        case actionCreators_1.bannerType.BANNER_CREATE_FAILURE: {
            return Object.assign(Object.assign({}, state), { parseBannerLoaded: false, bannerLoaded: false, error: true, errorMessage: action.error });
        }
        case actionCreators_1.bannerType.BANNER_DELETE_REQUEST:
        case actionCreators_1.bannerType.BANNER_UPDATE_REQUEST:
        case actionCreators_1.bannerType.BANNER_LIST_REQUEST:
        case actionCreators_1.bannerType.BANNER_CREATE_REQUEST: {
            return Object.assign(Object.assign({}, state), { parseBannerLoaded: false, bannerLoaded: true });
        }
        case actionCreators_1.bannerType.BANNER_CREATE_SUCCESS: {
            return Object.assign(Object.assign({}, state), { parseBannerLoaded: true, bannerLoaded: false, error: false });
        }
        case actionCreators_1.bannerType.BANNER_LIST_SUCCESS: {
            return Object.assign(Object.assign({}, state), { parseBannerLoaded: true, bannerLoaded: false, error: false, banners: action.data });
        }
        case actionCreators_1.bannerType.BANNER_ACTIVE_SUCCESS: {
            let banner = state.banners.find(i => i.id == action.id);
            if (banner) {
                banner.active = action.active;
            }
            return Object.assign(Object.assign({}, state), { parseBannerLoaded: true, bannerLoaded: false, error: false, banners: state.banners });
        }
        case actionCreators_1.bannerType.BANNER_UPDATE_SUCCESS: {
            let banner = state.banners.findIndex(i => i.id == action.id);
            if (banner > -1) {
                const _a = action.data, { token } = _a, rest = __rest(_a, ["token"]);
                state.banners[banner] = rest;
            }
            return Object.assign(Object.assign({}, state), { parseBannerLoaded: true, bannerLoaded: false, error: false, banners: state.banners });
        }
        case actionCreators_1.bannerType.BANNER_PARSE: {
            return Object.assign(Object.assign({}, state), { parseBannerLoaded: action.data });
        }
        case actionCreators_1.bannerType.BANNER_DELETE_SUCCESS: {
            return Object.assign(Object.assign({}, state), { parseBannerLoaded: true, bannerLoaded: false, error: false, banners: state.banners.filter(i => i.id != action.id) });
        }
        default: {
            return state;
        }
    }
}
exports.default = reducer;
//# sourceMappingURL=banner.js.map