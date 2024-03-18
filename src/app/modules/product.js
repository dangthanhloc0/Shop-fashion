const mongoose = require('mongoose');
const Schema=mongoose.Schema;
const productSchema=new Schema({
  Name:{type:String},
  Descibre:{type:String},
  Cost:{type:String },
  Img:{type:String},
  Count:{type:String},
})

module.exports = mongoose.model( 'product',productSchema);