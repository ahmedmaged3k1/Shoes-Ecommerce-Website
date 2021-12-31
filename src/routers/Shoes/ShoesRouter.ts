import express from "express";
import {getShoes , add} from './ShoesController'

const router = express.Router()
//router.get("/:movieId",MovieController.getMovie)
router.get("/",getShoes)
router.post("/",add)
export default router 
