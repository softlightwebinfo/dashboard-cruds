"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.INITIAL_STATE = void 0;
const actionCreators_1 = require("../actionCreators");
const next_redux_wrapper_1 = require("next-redux-wrapper");
exports.INITIAL_STATE = {
    parseStudioLoaded: false,
    studioLoaded: false,
    studios: [],
    error: false,
    errorMessage: "",
    selected: 0,
    count: 0,
    prices: [],
};
function reducer(state = exports.INITIAL_STATE, action) {
    switch (action.type) {
        case next_redux_wrapper_1.HYDRATE: {
            return Object.assign(Object.assign({}, state), action.payload.studio);
        }
        case actionCreators_1.studioType.STUDIO_GET_ALL_PRICES_FAILURE:
        case actionCreators_1.studioType.STUDIO_UPDATE_PRICES_FAILURE:
        case actionCreators_1.studioType.STUDIO_UPDATE_IMAGES_FAILURE:
        case actionCreators_1.studioType.STUDIO_CREATE_FAILURE: {
            return Object.assign(Object.assign({}, state), { parseStudioLoaded: false, studioLoaded: false, error: true, errorMessage: action.error });
        }
        case actionCreators_1.studioType.STUDIO_CREATE_REQUEST: {
            return Object.assign(Object.assign({}, state), { parseStudioLoaded: false, STUDIOLoaded: true });
        }
        case actionCreators_1.studioType.STUDIO_UPDATE_IMAGES_SUCCESS:
        case actionCreators_1.studioType.STUDIO_UPDATE_PRICES_SUCCESS:
        case actionCreators_1.studioType.STUDIO_CREATE_SUCCESS: {
            return Object.assign(Object.assign({}, state), { parseStudioLoaded: true, STUDIOLoaded: false, error: false, selected: action.id });
        }
        case actionCreators_1.studioType.STUDIO_PARSE: {
            return Object.assign(Object.assign({}, state), { parseStudioLoaded: action.data });
        }
        case actionCreators_1.studioType.STUDIO_ALL_SUCCESS: {
            return Object.assign(Object.assign({}, state), { studios: action.studios.Result.map((item) => (Object.assign(Object.assign({}, item), { prices: [] }))) || [], count: action.studios.count || 0 });
        }
        case actionCreators_1.studioType.STUDIO_GET_ALL_PRICES_SUCCESS: {
            let studios = state.studios;
            action.prices.Result.forEach(i => {
                let st = studios.findIndex(it => it.id == i.fkStudio);
                if (st != -1) {
                    studios[st].prices.push(i);
                }
            });
            return Object.assign(Object.assign({}, state), { prices: action.prices.Result, studios });
        }
        default: {
            return state;
        }
    }
}
exports.default = reducer;
//# sourceMappingURL=studio.js.map