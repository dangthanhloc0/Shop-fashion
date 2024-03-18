const express=require('express')
const route=express.Router()
const Registercontroller =require('../app/controllers/Registercontrolller')

route.post('/AddUser',Registercontroller.create)
route.get('/',Registercontroller.index)


module.exports= route