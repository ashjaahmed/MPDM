const express=require("express");
const router=express.Router();

const read=require("../models/read")
const readtwo=require("../models/readtwo");

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

router.get("/goti",async(req,res,next)=>{
    try{
        const doc2=await readtwo.find({});
        if(doc2==null){
            console.log("Error Occured");
        }
        else{
            res.json(doc2);
        }
    }
    catch(err){
        next(err);
    }
});
module.exports= router;