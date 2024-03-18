const Product=require('../modules/product')
const noti=require('../modules/notification')
// const {listObject}=require('../../util/mongoose')
class HomePageControlller{
       index(req,res,next){
        Promise.all([Product.find({}),noti.find({})])
                .then(([products,notis]) =>{
                    products=products.map(product=>product.toObject())
                    notis=notis.map(noti=>noti.toObject())
                    res.render('HomePage', { products ,notis});
                })
                .catch(error => {
                console.error(error);
            });     
        }

       async product(req,res){
        var pt=await Product.findById({_id:req.params.id})
           res.render('InfomationProduct',{pt:pt.toObject()})
       
        }

    
}

module.exports= new HomePageControlller


//tạo ra đối tượng hompage để điều khiển các hoạt động back-end


