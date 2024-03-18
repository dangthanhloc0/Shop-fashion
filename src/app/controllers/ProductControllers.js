const Product= require('../modules/product')

class ProductController{
     index(req,res){
        Product.find()
        .then(products=>{
            products=products.map(Product=>Product.toObject())
            res.render('Product',{products})
         
        })
      
     }
   //  Product//:id/edit
     Repair(req,res){
         Product.findById(req.params.id)
         // .then(products=>res.json(products))
         .then(products=>{
            res.render('Repair',{products: products.toObject() })
         })          
   }
   //  put//:id/edit/save
   Product_Save(req,res,next){
      Product.updateOne({_id: req.params.id} ,req.body)
      .then(()=>res.redirect('http://localhost:3000/Admin/Product'))
      .catch(next )
   }
   //pots//delete/:id
   delete(req,res){
       Product.deleteOne({_id:req.params.id})
       .then(()=>res.redirect('http://localhost:3000/Admin/Product'))
      
   }
}


module.exports=new ProductController