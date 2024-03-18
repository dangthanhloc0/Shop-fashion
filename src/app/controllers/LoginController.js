const User=require('../modules/user')
const Product=require('../modules/product')
const noti=require('../modules/notification')
const cart=require('../modules/cart')
const jwt = require('jsonwebtoken');
var cookie = require('cookie');

class LoginController{

    index(req,res){
        res.render('Login');
     
    }

    //check account
    async check(req,res){
       var  result= await User.findOne({Email : req.body.Email,Password:req.body.Password})
        
       if(result===null){
         return res.render('Login',{Notification:'Tài khoản không tồn tại hoặc mật khẩu không chính xác'})
      }
       if(result.Role==='1'){
         return res.redirect('http://localhost:3000/Admin')
       }
       if(result.Role==='0'){
         var token=jwt.sign( {id:result._id}, 'Thanhloc123')
          res.cookie('token',token,{
            httpOnly:true,
          })
        Promise.all([Product.find({}),noti.find({}),cart.find({user_id:result._id}),cart.countDocuments({user_id:result._id})])
        .then(([products,notis,carts,count]) =>{
            products=products.map(product=>product.toObject())
            notis=notis.map(noti=>noti.toObject())
            carts=carts.map(cart=>cart.toObject())
            res.render('HomePageUsers', { products ,notis,result:result.toObject(),carts,count});
        })
        .catch(error => { 
        console.error(error);
    });     
      }
     
    }
}

module.exports=new LoginController;
