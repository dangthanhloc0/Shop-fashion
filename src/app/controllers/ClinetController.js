const { updateOne } = require('../modules/product')
const User=require('../modules/user')
class ClinetControler{
  index(req,res){
     User.find({})
     .then(users=>{
       users=users.map(User=>User.toObject())
       res.render('Clinet',{users})
     })
     
  }
  
  update(req,res){
     User.findById(req.params.id)
     .then(users=>{
       res.render('UpdateUser',{users: users.toObject()})
     })
  }

  save(req,res,next){
    User.updateOne({_id:req.params.id},req.body)
    .then(()=>{
      res.redirect('http://localhost:3000/Admin/Account/user')
    })
    .catch(next)
  
  }

  delete(req,res){
    User.deleteOne({_id:req.params.id})
    .then(()=>res.redirect('http://localhost:3000/Admin/Account/user'))
}
}

module.exports= new  ClinetControler
