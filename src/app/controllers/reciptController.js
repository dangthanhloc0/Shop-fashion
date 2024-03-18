const product=require('../modules/product')
const cart=require('../modules/cart')
const jwt = require('jsonwebtoken');
const user=require('../modules/user')

class recipt{
 async index(req,res){
    var pt=await product.findById({_id:req.params.id})
   res.render('Receipt',{pt:pt.toObject()})
   //  res.json('ewwwewe')
 }

 async save(req,res){
  const inputValue = req.body.vote;
  const token=jwt.verify(req.cookies.token,'Thanhloc123')
  var pt=await product.findById({_id:req.params.id})
  var User=await user.findById({_id:token.id})
  var body=req.body
    if (inputValue == "add-cart") {
      const newCart=new cart()
      newCart.Name=pt.Name
      newCart.Img=pt.Img
      newCart.Cost=pt.Cost

      newCart.user_id=token.id
      newCart.link='http://localhost:3000/purchase/'+req.params.id+'/product'
      newCart.stats='Chưa thanh toán'
      newCart.save()
      res.redirect('http://localhost:3000/purchase/'+req.params.id+'/product')
    }
    else{
      var quantityToken=jwt.sign({count:req.body.quantity},'Loc123')
      res.cookie('quantityToken',quantityToken,{
        httpOnly:true,
      })
      res.render('DetailReceipt',{quantityToken,pt:pt.toObject(),body,User:User.toObject()})
    }
 }

 async buy(req,res){
  const quantityToken=jwt.verify(req.cookies.quantityToken,'Loc123') 
  const token=jwt.verify(req.cookies.token,'Thanhloc123')
  var pt=await product.findById({_id:req.params.id})
  var User=await user.findById({_id:token.id})
  var body=req.body
  const newCart=new cart()
  newCart.Name=pt.Name
  newCart.Img=pt.Img
  newCart.Cost=pt.Cost
  newCart.Addreess=req.body.Address
  newCart.Phone=req.body.Phone
  newCart.count=quantityToken.count 

  newCart.user_id=token.id
  newCart.link='http://localhost:3000/purchase/'+req.params.id+'/product'
  newCart.stats='Đã Thanh toán'
  newCart.save()
  res.redirect('http://localhost:3000/purchase/'+req.params.id+'/product')

 }


}

module.exports=new recipt