import Express  from 'express';
import User from '../../models/Users/UsersInterface';



export async  function getUsers (request : Express.Request ,response: Express.Response, next: Express.NextFunction){

    try{
        const users = await User.find()
        response.json(users)
    }
    catch(e){
        next(e)
    }
    
}
// export async  function getCart (request : Express.Request ,response: Express.Response, next: Express.NextFunction){

//     try{
//         const userName = request.params.name
//         const userCar = await User.updateOne(userName,)
//         response.json(users)
//     }
//     catch(e){
//         next(e)
//     }
    
// }
export async function  add(request : Express.Request ,response: Express.Response, next: Express.NextFunction) {
    try{
        const user = request.body
        const newUser =  new User(user)
        const result = await newUser.save();
        response.json(result)
        console.log(newUser)
    }
    catch(e){
        next(e)
    }
}