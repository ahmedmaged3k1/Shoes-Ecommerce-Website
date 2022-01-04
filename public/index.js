"use strict";

// const { fetchData } = require("./routers/Shoes/ShoesController");

var __importDefault = (this && this.__importDefault) || function(mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = __importDefault(require("express"));
const mongoose = __importDefault(require("mongoose"));
const UserRouter_1 = __importDefault(require("./routers/Users/UserRouter"));
const signInRouter_1 = __importDefault(require("./routers/auth/signInRouter"));
const ShoesRouter = __importDefault(require("./routers/Shoes/ShoesRouter"));
const CartRouter = __importDefault(require("./routers/Cart/cartRouter"));

const app = (0, express.default)();
const port = 4000;
const databaseURI = "mongodb+srv://ahmed:123@cluster0.tavcj.mongodb.net/shoes?retryWrites=true&w=majority";
const dbConnection = mongoose.default.connection;
dbConnection.on("error", (err) => console.log(`Connection error ${err}`));
dbConnection.once("open", () => console.log("Connected to DB!"));
mongoose.default.connect(databaseURI, {}, () => { console.log("Connected To Database"); });
const path = require('path')
const staticPath = path.join(__dirname, '../views');
app.use(express.default.json());
app.use(express.default.static(staticPath));
app.set('view engine', 'ejs');
const cors = require('cors')
app.use(cors())
app.listen(port, () => console.log(`Server Runing on Port ${port}`));
app.use((req, res, next) => {
    res.locals.path = req.path;
    next();
});
app.use("/shoes", ShoesRouter.default);
app.use("/carts", CartRouter.default);

app.use("/Users", UserRouter_1.default);
app.use("/SignIn", signInRouter_1.default);

//noran
app.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact' });
})
app.get('/cart', (req, res) => {
    res.render('cart', { title: 'Cart' });
});
app.get('/collection', (req, res) => {
    res.render('collection', { title: 'collection' });
});
app.get('/home', (req, res) => {
    res.render('home', { title: 'home' });
});
app.get('/shoesDetails', (req, res) => {
    res.render('shoesDetails', { title: 'shoesDetails' });
});
app.get('/AllShoeses', (req, res) => {
    res.render('AllShoeses', { title: 'AllShoeses' });
});
app.get('/racingBoots', (req, res) => {
    res.render('racingBoots', { title: 'racingBoots' });
});
app.get('/search', (req, res) => {
    res.render('search', { title: 'search' });
});
