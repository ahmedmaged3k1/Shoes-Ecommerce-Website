"use strict";

const { default: CartInterface } = require("../../models/Cart/CartInterface");

var __awaiter = (this && this.__awaiter) || function(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function(resolve) { resolve(value); }); }
    return new(P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }

        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }

        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function(mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = exports.getCart = void 0;
//
// exports.fetchData = fetchData;
const ShoesInterface = __importDefault(require("../../models/Cart/CartInterface"));

function getCart(request, response, next) {
    return __awaiter(this, void 0, void 0, function*() {
        try {

            const shoes = yield ShoesInterface.default.find();
            console.log(response.json(shoes))
            response.json(shoes);

        } catch (e) {
            next(e);
        }
    });
}
exports.getCart = getCart;



function add(request, response, next) {
    return __awaiter(this, void 0, void 0, function*() {
        try {
            const shoes = request.body;
            const newShoe = new ShoesInterface.default(shoes);
            const result = yield newShoe.save();
            response.json(result);
            console.log(newShoe);
        } catch (e) {
            next(e);
        }
    });
}

exports.add = add;