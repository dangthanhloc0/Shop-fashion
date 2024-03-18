const express=require('express')
const route=express.Router()
const Homepage =require('../app/controllers/HomePageControlller')
// const Login =require('../app/controllers/LoginController')

//Nhận các sự hoạt động của Homepage

route.get('/',Homepage.index)
// route.get('/user',Login.check)

//product
route.get('/product/:id',Homepage.product)

// tạo ra các đường dẫn lên hoạt động của  trang web xong sẽ uất

module.exports= route

//chuyển đên file index

