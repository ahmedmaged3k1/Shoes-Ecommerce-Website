"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
        for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
//
const mongoose = __importStar(require("mongoose"));
const schema = mongoose.default.Schema;
const ShoesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    descripton: {
        type: String,
        required: false,
        minlength: 3,
        maxlength: 300
    },
    image: {
        type: String,
    },
    price: {
        type: Number,
        required: true,
        minlength: 5,
        maxlength: 70
    },
    stock: {
        type: Number,
        required: true,
        minlength: 5,
        maxlength: 70
    },
    rate: {
        type: Number,
        required: true,
        minlength: 5,
        maxlength: 70
    },
    size: {
        type: Number,
        required: true,
        minlength: 2,
        maxlength: 4

    },
}, { timestamps: true });
const Shoes = mongoose.default.model("Shoes", ShoesSchema);
exports.default = Shoes;
//