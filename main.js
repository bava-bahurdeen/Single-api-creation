import express from "express"

const app=express()
const PORT=6969;
app.get('/',(req,res)=>{
    res.json({msg:"Hi Everone"})
})

app.listen(PORT,()=>{
    console.log(`The app running successfully${PORT}`)
})