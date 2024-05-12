import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

const coonectDB=async()=>{
    try{

        await mongoose.connect(process.env.MONGODB)
   console.log("Mongodb Succesfully connected");
    }
    catch(error){
console.error(error.message);
process.exit(1)
    }
}
export default coonectDB