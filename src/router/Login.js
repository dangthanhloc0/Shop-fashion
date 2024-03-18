const express=require('express')
const route=express.Router()
const Login =require('../app/controllers/LoginController')
const HomePageUser =require('../app/controllers/HomePageUserControlller')


route.get('/',Login.index)
route.post('/checkAccount',Login.check)
route.get('/checkAccount/detailCart',HomePageUser.index)
route.get('/checkAccount/delete/:id',HomePageUser.delete)

module.exports= route
