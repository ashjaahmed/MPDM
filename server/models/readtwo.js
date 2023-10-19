const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const postSchema=new Schema({
    newsId:{type:Number},
    para:{type:String},
    title:{type:String},
    image:{type:String}
});

module.exports=mongoose.model('explore',postSchema);