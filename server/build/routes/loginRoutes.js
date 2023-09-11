"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
function requireAuth(req, res, next) {
    var _a;
    if ((_a = req.session) === null || _a === void 0 ? void 0 : _a.loggedIn) {
        next();
        return;
    }
    res.status(403).send("Not permitted");
}
const router = (0, express_1.Router)();
exports.router = router;
router.post("/login", (req, res) => {
    const { email, password } = req.body;
    if (email &&
        password &&
        email === "test@test.com" &&
        password === "password") {
        // Mark this person as logged in
        req.session = { loggedIn: true };
        // Redirect them to the proper page
        res.redirect("/");
    }
    else {
        res.send("Invalid email or password");
    }
});
router.get("/", (req, res) => {
    var _a;
    if ((_a = req.session) === null || _a === void 0 ? void 0 : _a.loggedIn) {
        res.send(`
      <div>
        <h1>Hi there!</h1>
        <a href="/logout">Logout</a>
      </div>
    `);
    }
    else {
        res.send(`
      <div>
        <h1>You are not logged in.</h1>
        <a href="/login">Login</a>
      </div>
    `);
    }
});
router.get("/logout", (req, res) => {
    req.session = undefined;
    res.redirect("/");
});
router.get("/protected", requireAuth, (req, res) => {
    res.send("Welcome to protected route logged in user.");
});
