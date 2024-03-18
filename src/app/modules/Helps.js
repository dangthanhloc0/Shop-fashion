const mongoose=require('mongoose')
const Schema=mongoose.Schema;

const HelpSchema=new Schema({
    Name:{type:String},
    Phone:{type:String},
    Email:{type:String},
    Problem:{type:String},
})

module.exports=mongoose.model('help',HelpSchema)