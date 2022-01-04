"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ShoesController_1 = require("./ShoesController");
const router = express_1.default.Router();
//router.get("/:movieId",MovieController.getMovie)
router.get("/", ShoesController_1.getShoes);
router.get("/:shoeId", ShoesController_1.getShoesById);
router.get("/shoes/:shoeId", ShoesController_1.getShoesByIdCart);

router.post("/", ShoesController_1.add);
exports.default = router;
