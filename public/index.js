"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const ShoesRouter_1 = __importDefault(require("./routers/Shoes/ShoesRouter"));
const app = (0, express_1.default)();
const port = 4000;
const databaseURI = "mongodb+srv://ahmed:123@cluster0.tavcj.mongodb.net/shoes?retryWrites=true&w=majority";
const dbConnection = mongoose_1.default.connection;
dbConnection.on("error", (err) => console.log(`Connection error ${err}`));
dbConnection.once("open", () => console.log("Connected to DB!"));
mongoose_1.default.connect(databaseURI, {}, () => { console.log("Connected To Database"); });
app.listen(port, () => console.log(`Server Runing on Port ${port}`));
app.use(express_1.default.json());
app.use("/shoes", ShoesRouter_1.default);
