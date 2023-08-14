const express=require("express");
const router=express.Router();
const read=require("../models/read")
const mongoose=require("mongoose");
mongoose.Promise=global.Promise;
mongoose.connect("mongodb://localhost:27017/livenews");
router.get('/',function(req,res){
    
    res.send('api works');
})
router.get("/jhumru",async(req,res,next)=>{
    try{
        const doc=await read.find({});
        if(doc==null){
            console.log("Error Occured")
        }
        else{
            res.json(doc);
        }
    }
    catch(err){
        next(err);
    }
});
module.exports= router;