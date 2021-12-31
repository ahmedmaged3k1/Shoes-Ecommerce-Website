import express from "express";
import {getUsers , add} from './UserController'

const router = express.Router()
//router.get("/:movieId",MovieController.getMovie)
router.get("/",getUsers)
router.post("/",add)
export default router 
