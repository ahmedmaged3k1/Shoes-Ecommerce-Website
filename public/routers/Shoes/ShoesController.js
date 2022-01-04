"use strict";
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
exports.add = exports.getShoes = void 0;
//
// exports.fetchData = fetchData;
const ShoesInterface = __importDefault(require("../../models/Shoes/ShoesInterface"));
const cart = __importDefault(require("../../routers/Cart/cartController"));


function getShoes(request, response, next) {
    return __awaiter(this, void 0, void 0, function*() {
        try {

            const shoes = yield ShoesInterface.default.find();
            response.json(shoes);

        } catch (e) {
            next(e);
        }
    });
}
exports.getShoes = getShoes;

function fetchData() {
    fetch('http://localhost:4000/shoes')
        .then(response => {
            //     console.log(response);
            if (!response.ok) {
                throw Error("ERROR");
            }
            return response.json();
        })
        .then(data => {
            for (i = 0; i < data.length; i++) {
                console.log(data[i].name)
            }

        })
        .catch(error => {
            console.log(error);
        });
}
exports.fetchData = fetchData;

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

function getShoesById(request, response, next) {
    return __awaiter(this, void 0, void 0, function*() {
        try {
            const id = request.params.shoeId;
            const shoe = yield ShoesInterface.default.findById(id);
            
            response.render('shoesDetails', { ShoesInterface: shoe })


        } catch (e) {
            next(e);
        }
    });
}
exports.getShoesById = getShoesById;
function getShoesByIdCart(request, response, next) {
    return __awaiter(this, void 0, void 0, function*() {
        try {
            const id = request.params.shoeId;
            const newshoe = yield ShoesInterface.default.findById(id);
            response.render('cart', { ShoesInterface: newshoe })


        } catch (e) {
            next(e);
        }
    });
}
exports.getShoesByIdCart = getShoesByIdCart;
// const fetch = require("node-fetch");