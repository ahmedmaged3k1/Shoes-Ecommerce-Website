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
exports.add = exports.getUsers = void 0;
const UsersInterface_1 = __importDefault(require("../../models/Users/UsersInterface"));
function getUsers(request, response, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const users = yield UsersInterface_1.default.find();
            response.json(users);
        }
        catch (e) {
            next(e);
        }
    });
}
exports.getUsers = getUsers;
// function addCart(request, response, next) {
//     return __awaiter(this, void 0, void 0, function* () {
//         try {
//             const name = request.params.name;
//             const newValues ={$set:{cart:[

//             ]}}
//             const shoe = yield ShoesInterface.default.findById(id);
//         }
//         catch (e) {
//             next(e);
//         }
//     });
// }
function add(request, response, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = request.body;
            const newUser = new UsersInterface_1.default(user);
            const result = yield newUser.save();
            response.json(result);
            console.log(newUser);
        }
        catch (e) {
            next(e);
        }
    });
}
exports.add = add;
