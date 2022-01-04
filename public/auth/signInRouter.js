"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const signInValidation_1 = __importDefault(require("./middlewares/validation/signInValidation"));
const signInController_1 = require("./signInController");
const router = (0, express_1.Router)();
router.post("/", signInValidation_1.default, signInController_1.postSignIn);
router.delete("/", signInController_1.deleteToken);
exports.default = router;
