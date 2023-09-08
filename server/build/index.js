"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const loginRoutes_1 = require("./routes/loginRoutes");
const body_parser_1 = require("body-parser");
const cookie_session_1 = __importDefault(require("cookie-session"));
const app = (0, express_1.default)();
app.use((0, body_parser_1.urlencoded)({ extended: true }));
app.use((0, cookie_session_1.default)({
    keys: ["asdf"],
}));
app.use(loginRoutes_1.router);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("App listening on port", PORT);
});
