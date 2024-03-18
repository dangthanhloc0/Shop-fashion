const mongoose=require('mongoose')
const Schema=mongoose.Schema;

const notificationSchema=new Schema({
     Img:{type:String},
     Date:{type:String},
     content:{type:String},
})

module.exports=mongoose.model('notification',notificationSchema)
