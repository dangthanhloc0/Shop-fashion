const helpOfUser=require('../modules/Helps')
class BoxChat{
   index(req,res){
     res.render('BoxChat')
   }
   save(req,res){
      var newHelp=new helpOfUser(req.body)
      newHelp.save()
      res.redirect('http://localhost:3000/TrangChu')
   }
}

    module.exports=new BoxChat