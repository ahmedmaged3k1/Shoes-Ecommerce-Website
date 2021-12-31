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
exports.add = exports.getShoes = void 0;
const ShoesInterface_1 = __importDefault(require("../../models/Shoes/ShoesInterface"));
const shoes = {
    spiderman: {
        id: 1,
        name: "SpiderMan No Way Home ",
        description: "This is the bes movie of 2021",
        price: 10,
        stock: 15
    },
    batman: {
        id: 2,
        name: "Batman No Way Home ",
        description: "This is the bes movie of 2021",
        price: 10,
        stock: 15
    },
    shoes: {
        id: 3,
        name: "Gazma Havan awy  ",
        description: "This is the bes shoe of 2021",
        price: 200,
        stock: 300
    }
};
function getShoes(request, response, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const shoes = yield ShoesInterface_1.default.find();
            response.json(shoes);
        }
        catch (e) {
            next(e);
        }
    });
}
exports.getShoes = getShoes;
function add(request, response, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const shoes = request.body;
            const newShoe = new ShoesInterface_1.default(shoes);
            const result = yield newShoe.save();
            response.json(result);
            console.log(newShoe);
        }
        catch (e) {
            next(e);
        }
    });
}
exports.add = add;
