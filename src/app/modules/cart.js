const mongoose=require('mongoose')
const Schema=mongoose.Schema;

const cartschema=new Schema({
    link:{type:String},
    Name:{type:String},
    Cost:{type:String },
    Img:{type:String},
    user_id:{type:String},
    Addreess:{type:String},
    stats:{type:String},
    Phone:{type:String},
    count:{type:String,default:0},
    
})

module.exports=mongoose.model('cart',cartschema )