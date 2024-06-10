import Moviemodel from "../models/movie.model.js";
const MovieIndex =async (req, res) => {
  // fetch the data
  try{
    const movie=await Moviemodel.find()
return res.json(movie)

  }
  catch(error){
    return res.status(500).json({message:error.message})
  }
};
const MovieCreate = async (req, res) => {

  // create a id,title,desc
  // Insert a data into database
  const Newmovie=new Moviemodel({
    title:req.body.title,
    desc:req.body.desc
  })
  //validate a data
try{
const movie=await  Newmovie.save()
return res.status(200).json(movie)
}
catch(error){
return res.status(400).json({message:error.message})
}


};
const MovieDetail=async(req,res)=>{
  try {
    const movie=await Moviemodel.findById(req.params.id)
    if(movie==null){
      return res.status(404).json("Movie not found")
    }
    else{
      return res.json(movie)
    }
  
    
   } catch (error) {
    return res.status(500).json({message:error.message})
   }

}
const MovieUpdate = async(req, res) => {
try {
  const result=await Moviemodel.findOneAndUpdate({_id:req.params.id},{title:req.body.title,desc:req.body.desc},{new:true})
return res.status(200).json(result)
} catch (error) {
  return res.status(400).json({message:error.message})
}
};
const MovieDelete = async(req, res) => {
  const MovieId=req.params.id
  try {
   await Moviemodel.deleteOne({_id:MovieId})
    return res.json({ msg: "Delete the movie" });
  } catch (error) {
  return res.status(500).json({message:error.message})
  }
};

export {MovieCreate,MovieIndex,MovieDetail,MovieUpdate,MovieDelete}