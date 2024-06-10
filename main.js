import express from "express"
import Moviesroutes from "./routes/movies.route.js"
import connectDb from "./lib/db.js"

//create a variabble for express
const app=express()
//create a dynamic port
const PORT=6969;

//mongodb database coonect
connectDb()

//Middle ware connection
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/movies",Moviesroutes)

// backend app listen
app.listen(PORT,()=>{
    console.log(`The app running successfully${PORT}`)
})