"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studiosAllPricesSuccess = exports.studiosAllPricesFailure = exports.studiosAllSuccess = exports.studiosAllFailure = exports.studioUpdateImagesSuccess = exports.studioUpdateImagesFailure = exports.studioUpdatePricesSuccess = exports.studioUpdatePricesFailure = exports.studioParse = exports.studioCreateRequest = exports.studioCreateFailure = exports.studioCreateSuccess = void 0;
const actionCreators_1 = require("../actionCreators");
exports.studioCreateSuccess = (id) => ({ type: actionCreators_1.studioType.STUDIO_CREATE_SUCCESS, id });
exports.studioCreateFailure = (errorText, error = null) => ({
    type: actionCreators_1.studioType.STUDIO_CREATE_FAILURE,
    errorText,
    error
});
exports.studioCreateRequest = (values) => ({ type: actionCreators_1.studioType.STUDIO_CREATE_REQUEST, data: values });
exports.studioParse = (data = false) => ({ type: actionCreators_1.studioType.STUDIO_PARSE, data });
exports.studioUpdatePricesFailure = (errorText, error = null) => ({
    type: actionCreators_1.studioType.STUDIO_UPDATE_PRICES_FAILURE,
    errorText,
    error
});
exports.studioUpdatePricesSuccess = () => ({
    type: actionCreators_1.studioType.STUDIO_UPDATE_PRICES_SUCCESS,
});
exports.studioUpdateImagesFailure = (errorText, error = null) => ({
    type: actionCreators_1.studioType.STUDIO_UPDATE_IMAGES_FAILURE,
    error,
    errorText
});
exports.studioUpdateImagesSuccess = () => ({ type: actionCreators_1.studioType.STUDIO_UPDATE_IMAGES_SUCCESS });
exports.studiosAllFailure = (errorText, error = null) => ({
    type: actionCreators_1.studioType.STUDIO_ALL_FAILURE,
    error,
    errorText
});
exports.studiosAllSuccess = (studios) => ({ type: actionCreators_1.studioType.STUDIO_ALL_SUCCESS, studios });
exports.studiosAllPricesFailure = (errorText, error) => ({
    type: actionCreators_1.studioType.STUDIO_GET_ALL_PRICES_FAILURE,
    error,
    errorText
});
exports.studiosAllPricesSuccess = (prices) => ({ type: actionCreators_1.studioType.STUDIO_GET_ALL_PRICES_SUCCESS, prices });
//# sourceMappingURL=studio.js.map