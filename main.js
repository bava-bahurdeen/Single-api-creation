import express from "express"
import Moviesroutes from "./routes/movies.route.js"
import connectDb from "./lib/db.js"

const app=express()
const PORT=6969;


connectDb()
app.use("/movies",Moviesroutes)
app.listen(PORT,()=>{
    console.log(`The app running successfully${PORT}`)
})