"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const translate_1 = __importDefault(require("./translate"));
const auth_1 = __importDefault(require("./auth"));
const banner_1 = __importDefault(require("./banner"));
const user_1 = __importDefault(require("./user"));
const studio_1 = __importDefault(require("./studio"));
const rootReducer = redux_1.combineReducers({
    translate: translate_1.default,
    auth: auth_1.default,
    banner: banner_1.default,
    user: user_1.default,
    studio: studio_1.default,
});
exports.default = rootReducer;
//# sourceMappingURL=index.js.map