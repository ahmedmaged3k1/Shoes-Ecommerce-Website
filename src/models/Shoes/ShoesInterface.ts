import mongoose, { Mongoose, Schema } from "mongoose"
interface IShoe{
    name:string ,
    description:string,
    image:string[],
    price:number,
    stock:number,
    rate:number
  
}
const schema = mongoose.Schema
const movieSchema = new Schema({
    name:{
        type:String,
        required:true,
        minlength:3,
        maxlength:50

    },
    descripton:{
        type:String,
        required:false,
        minlength:3,
        maxlength:300

    },
    image:{
        type:String,

    },
    price:{
        type:Number,
        required:true,
        minlength:5,
        maxlength:70

    },
    stock:{
        type:Number,
        required:true,
        minlength:5,
        maxlength:70

    },
    rate:{
        type:Number,
        required:true,
        minlength:5,
        maxlength:70

    }
})
const Shoe:mongoose.Model<IShoe> = mongoose.model("shoes",movieSchema)
export default Shoe