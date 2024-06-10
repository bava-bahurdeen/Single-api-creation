import {Schema,model} from "mongoose"
//create a schema
const schema=new Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    desc:{
        type:String,
        required:true,
    }
})

//create a model and attach a schema

const Moviemodel=model("Movie",schema)

export default Moviemodel;