import Express  from 'express';
import Shoe from '../../models/Shoes/ShoesInterface';

const shoes ={
    spiderman :{
        id:1,
        name:"SpiderMan No Way Home ",
        description:"This is the bes movie of 2021",
        price:10,
        stock:15
    },
    batman :{
        id:2,
        name:"Batman No Way Home ",
        description:"This is the bes movie of 2021",
        price:10,
        stock:15
    }
    ,shoes:{
        id:3,
        name:"Gazma Havan awy  ",
        description:"This is the bes shoe of 2021",
        price:200,
        stock:300
    }

    
}

export async  function getShoes (request : Express.Request ,response: Express.Response, next: Express.NextFunction){

    try{
        const shoes = await Shoe.find()
        response.json(shoes)
    }
    catch(e){
        next(e)
    }
    
}
export async function  add(request : Express.Request ,response: Express.Response, next: Express.NextFunction) {
    try{
        const shoes = request.body
        const newShoe =  new Shoe(shoes)
        const result = await newShoe.save();
        response.json(result)
        console.log(newShoe)
    }
    catch(e){
        next(e)
    }
}