"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeLanguage = void 0;
// @ts-ignore
const translate_1 = require("../actions/translate");
// @ts-ignore
exports.changeLanguage = (action) => (dispatch) => {
    const { language } = action;
    dispatch(translate_1.translationRequest(action.language));
    if (language) {
        try {
            const translate = require(`../../../config/translates/${language}.json`);
            console.log(`=== Translate lang from folder: `, translate.language);
            dispatch(translate_1.translationSuccess(translate));
        }
        catch (err) {
            dispatch(translate_1.translationFailure("Error to change language: ", err));
        }
    }
    else {
        dispatch(translate_1.translationFailure("There's no language selected."));
    }
};
//# sourceMappingURL=translate.js.map