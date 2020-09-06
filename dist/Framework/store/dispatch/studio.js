"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studiosAllPricesRequest = exports.studiosAllRequest = exports.updateStudioImageRequest = exports.updateStudioPriceRequest = exports.createStudioRequest = void 0;
const _settings_1 = require("@settings");
const studio_1 = require("../actions/studio");
exports.createStudioRequest = (values) => async (dispatch) => {
    try {
        const res = await fetch(_settings_1.getApi("studio"), {
            body: JSON.stringify(values),
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        });
        const response = await res.json();
        if (response.error) {
            dispatch(studio_1.studioCreateFailure(response.error));
        }
        else {
            dispatch(studio_1.studioCreateSuccess(response.id));
        }
        setTimeout(() => {
            dispatch(studio_1.studioParse());
        }, 1000);
    }
    catch (err) {
        dispatch(studio_1.studioCreateFailure("Error to change language: ", err));
    }
};
exports.updateStudioPriceRequest = (id, prices) => async (dispatch) => {
    try {
        const res = await fetch(_settings_1.getApi(`studio/${id}/prices`), {
            body: JSON.stringify({ prices }),
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        });
        const response = await res.json();
        if (response.error) {
            dispatch(studio_1.studioUpdatePricesFailure(response.error));
        }
        else {
            dispatch(studio_1.studioUpdatePricesSuccess());
        }
        setTimeout(() => {
            dispatch(studio_1.studioParse());
        }, 1000);
    }
    catch (err) {
        dispatch(studio_1.studioUpdatePricesFailure("Error to change language: ", err));
    }
};
exports.updateStudioImageRequest = (id, files) => async (dispatch) => {
    let data = new FormData();
    files.forEach((value) => {
        data.append(`file`, value);
    });
    try {
        const res = await fetch(_settings_1.getApi(`studio/${id}/images`), {
            body: data,
            method: "PUT"
        });
        const response = await res.json();
        if (response.error) {
            dispatch(studio_1.studioUpdateImagesFailure(response.error));
        }
        else {
            dispatch(studio_1.studioUpdateImagesSuccess());
        }
        setTimeout(() => {
            dispatch(studio_1.studioParse());
        }, 1000);
    }
    catch (err) {
        dispatch(studio_1.studioUpdateImagesFailure("Error to change language: ", err));
    }
};
exports.studiosAllRequest = (cookies) => async (dispatch) => {
    try {
        const res = await fetch(_settings_1.getApi("studios"), {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'cookie': cookies,
            },
        });
        const response = await res.json();
        if (response.error) {
            dispatch(studio_1.studiosAllFailure(response.error));
        }
        else {
            dispatch(studio_1.studiosAllSuccess(response));
        }
    }
    catch (err) {
        dispatch(studio_1.studiosAllFailure("Error to change language: ", err));
    }
};
exports.studiosAllPricesRequest = (cookies) => async (dispatch) => {
    try {
        const res = await fetch(_settings_1.getApi("studios/prices"), {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'cookie': cookies,
            },
        });
        const response = await res.json();
        if (response.error) {
            dispatch(studio_1.studiosAllPricesFailure("Error", response.error));
        }
        else {
            dispatch(studio_1.studiosAllPricesSuccess(response));
        }
    }
    catch (err) {
        dispatch(studio_1.studiosAllPricesFailure("Error to change language: ", err));
    }
};
//# sourceMappingURL=studio.js.map