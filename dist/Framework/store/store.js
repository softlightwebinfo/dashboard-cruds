"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeStore = void 0;
// #region Global Imports
const redux_1 = require("redux");
const redux_thunk_1 = __importDefault(require("redux-thunk"));
// eslint-disable-next-line import/no-extraneous-dependencies
const developmentOnly_1 = require("redux-devtools-extension/developmentOnly");
// #endregion Global Imports
// #region Local Imports
const reducers_1 = __importDefault(require("./reducers"));
const next_redux_wrapper_1 = require("next-redux-wrapper");
// #endregion Local Imports
exports.makeStore = (_, initialState) => {
    return redux_1.createStore(reducers_1.default, initialState, developmentOnly_1.composeWithDevTools(redux_1.applyMiddleware(redux_thunk_1.default)));
};
// @ts-ignore
exports.default = next_redux_wrapper_1.createWrapper(exports.makeStore, { debug: false });
//# sourceMappingURL=store.js.map