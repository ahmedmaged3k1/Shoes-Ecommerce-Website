import mongoose, { Mongoose, Schema } from "mongoose"
interface IUser{
    name:string ,
    password:string,
  
}
const schema = mongoose.Schema
const movieSchema = new Schema({
    name:{
        type:String,
        required:true,
        minlength:3,
        maxlength:50

    },
    password:{
        type:String,
        required:false,
        minlength:3,
        maxlength:300

    }
})
const Shoe:mongoose.Model<IUser> = mongoose.model("users",movieSchema)
export default Shoe