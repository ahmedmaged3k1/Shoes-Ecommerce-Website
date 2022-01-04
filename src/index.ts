import  Express  from "express";
import dotnev from "dotenv"
import mongoose   from "mongoose";
import ShoesRouter from "./routers/Shoes/ShoesRouter"
import UsersRouter from "./routers/Users/UserRouter"
import { RequestInfo } from "node-fetch";



const app = Express();
const port = 4000
const databaseURI = "mongodb+srv://ahmed:123@cluster0.tavcj.mongodb.net/shoes?retryWrites=true&w=majority"
const dbConnection = mongoose.connection;
dbConnection.on("error", (err) => console.log(`Connection error ${err}`));
dbConnection.once("open", () => console.log("Connected to DB!"))
mongoose.connect(databaseURI,{},()=>{console.log("Connected To Database")})

// register view engine
app.set('view engine', 'ejs');
app.listen(port,()=>console.log(`Server Runing on Port ${port}`))
app.use(Express.json())
//noran
app.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact' });
});
//
app.use("/shoes",ShoesRouter)

