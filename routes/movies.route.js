import express from "express"
import {MovieCreate,MovieIndex,MovieUpdate,MovieDelete, MovieDetail} from "../controllers/movies.controler.js"

const router=express.Router()
//movies app CRUD operation

//R-read operation
router.get("/",MovieIndex)

//C-Creation operation
router.post("/",MovieCreate)
router.get("/:id",MovieDetail)

//U-read operation
router.put("/:id",MovieUpdate)

//D-read operation
router.delete("/:id",MovieDelete)
export default router