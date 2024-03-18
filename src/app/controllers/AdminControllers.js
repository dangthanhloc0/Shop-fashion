const Product=require('../modules/product')
const cart=require('../modules/cart')
const ChatBox=require('../modules/Helps')

class Adminconntrollers{
      index(req,res,next){
            Product.find({})
                .then(products => {
                    products=products.map(product=>product.toObject())
                    res.render('Admin', { products });
                })
                .catch(error => {
                console.error(error);
            });
 
            
     }
     
     async receipt(req,res){
        var carts=await cart.find({})
        carts=carts.map(cart=>cart.toObject())
        res.render('receiptAdmin',{carts})
     
    }

    delete_receipt(req,res){
       cart.findByIdAndDelete({_id:req.params.id})
       .then(()=>res.redirect('http://localhost:3000/Admin/receipt/all'))
    }

    //chatbox
    async ChatBox(req,res){
      
        var ChatBoxs=await ChatBox.find({})

        ChatBoxs=ChatBoxs.map(ChatBox=>ChatBox.toObject())
        res.render('ChatBoxAdmin',{ChatBoxs})
      
     
    }

    delete_ChatBox(req,res){
        ChatBox.findByIdAndDelete({_id:req.params.id})
        .then(()=>res.redirect('http://localhost:3000/Admin/Help/all'))
     }
}



module.exports= new Adminconntrollers


//tạo ra đối tượng hompage để điều khiển các hoạt động back-end


