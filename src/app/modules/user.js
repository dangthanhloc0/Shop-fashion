const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  Name: { type: String },
  Email: { type: String },
  Password: { type: String},
  Address:{type:String,default:null},
  Role:{type:String,default:0}
})

module.exports= mongoose.model('user', userSchema);

