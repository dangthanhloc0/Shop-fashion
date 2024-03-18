const noti= require('../modules/notification')

class notificationController{
     index(req,res){
        noti.find()
        .then(notis=>{
            notis=notis.map(noti=>noti.toObject())
            res.render('Notification',{notis})  
        })
        // res.json('qưeqwewqe')
     }
//    //  noti//:id/edit
     Repair(req,res){
         noti.findById(req.params.id)
         // .then(notis=>res.json(notis))
         .then(notis=>{
            res.render('repairNoti',{notis: notis.toObject() })
         })       
   }
   //  put//:id/edit/save
   noti_Save(req,res,next){
      noti.updateOne({_id: req.params.id} ,req.body)
      .then(()=>res.redirect('http://localhost:3000/Admin/notification/all'))
      .catch(next )
   }
   //pots//delete/:id
   delete(req,res){
       noti.deleteOne({_id:req.params.id})
       .then(()=>res.redirect('http://localhost:3000/Admin/notification/all'))
      
   }
}


module.exports=new notificationController