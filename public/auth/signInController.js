"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteToken = exports.postSignIn = void 0;
const constants_1 = require("../../constants");
const tokenCreation_1 = require("./middlewares/tokenCreation");
function postSignIn(req, res, next) {
    const userId = req.userId;
    const accessToken = (0, tokenCreation_1.createToken)(userId);
    res.status(200)
        .cookie(constants_1.COOKIE_AUTH_NAME, accessToken, { maxAge: constants_1.MAX_AGE_SEC * 1000 })
        .send({ message: "Signed in successfully", email: req.username, accessToken });
}
exports.postSignIn = postSignIn;
function deleteToken(req, res, next) {
    try {
        res.cookie(constants_1.COOKIE_AUTH_NAME, "", { maxAge: 0 });
        res.send({ message: "LoggedOut" });
    }
    catch (e) {
        console.log(e);
        next(e);
    }
}
exports.deleteToken = deleteToken;
