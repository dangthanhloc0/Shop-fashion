const Product= require('../modules/product')

class AddProductControllers{
  // get /TrangChu/Register
    index(req, res, next) {
      res.render('AddProduct')
  };


  // post
// Luu thông tin đăng kí
  create(req,res,next){
    const newProduct=new Product(req.body);
    newProduct.Img=req.body.Name+'.png' 

    newProduct.save()
    .then(()=> res.redirect('/Admin'))
}
}

module.exports=new AddProductControllers