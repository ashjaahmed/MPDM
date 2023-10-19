const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const postSchema=new Schema({
    image:{type:String},
    title:{type:String},
    article:{type:String},
    nId:{type:Number}
});

module.exports=mongoose.model('report',postSchema);