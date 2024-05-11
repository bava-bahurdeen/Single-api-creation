import express from "express"
import Moviesroutes from "./routes/movies.route.js"

const app=express()
const PORT=6969;
app.get('/',(req,res)=>{
    res.json({msg:"Hi Everone"})
})


app.use("/movies",Moviesroutes)
app.listen(PORT,()=>{
    console.log(`The app running successfully${PORT}`)
})