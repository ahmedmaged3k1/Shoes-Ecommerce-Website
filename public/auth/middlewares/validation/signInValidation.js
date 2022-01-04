"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const UsersInterface_1 = __importDefault(require("../../../../models/Users/UsersInterface"));
function noWhiteSpaces(value, helpers) {
    if (value.includes(" ")) {
        return helpers.error("Invalid entry.");
    }
    return value;
}
;
function signInSchema(data) {
    const schema = joi_1.default.object({
        email: joi_1.default.string().min(5).max(30).required().trim().default(noWhiteSpaces),
        password: joi_1.default.string().min(8).max(30).required().trim().default(noWhiteSpaces)
    });
    return schema.validate(data).error;
}
function signInValidation(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const schemaError = signInSchema(req.body);
            if (schemaError) {
                next(schemaError);
                return;
            }
            const user = yield UsersInterface_1.default.findOne({ email: req.body.email });
            if (!user) {
                const WrongUsernameError = new Error("Erorr User Name");
                next(WrongUsernameError);
                return;
            }
            const passwordCompare = yield bcrypt_1.default.compare(req.body.password, user.password);
            if (!passwordCompare) {
                const wrongPasswordError = new Error("Erorr Password ");
                next(wrongPasswordError);
                return;
            }
            req.userId = user._id;
            req.email = user.email;
            next();
        }
        catch (err) {
            next(err);
        }
    });
}
exports.default = signInValidation;
