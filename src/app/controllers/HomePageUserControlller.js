const cart=require('../modules/cart')
const jwt = require('jsonwebtoken');
class HomePageUser{
    async index(req,res){
        const token=jwt.verify(req.cookies.token,'Thanhloc123') 
        var carts=await cart.find({user_id:token.id})
        carts=carts.map(cart=>cart.toObject())
        res.render('DetailCart',{carts})
    }
    //delete cart
    delete(req,res){
       cart.findByIdAndDelete({_id:req.params.id})
       .then(()=>res.redirect('http://localhost:3000/Login/checkAccount/detailCart'))
    }
}




module.exports=new HomePageUser