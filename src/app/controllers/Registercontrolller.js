const User= require('../modules/user')
class register{
  // get /TrangChu/Register
    index(req, res, next) {
      res.render('Register')
  };


  // post
// Luu thông tin đăng kí
  create(req,res,next){

    User.findOne({Email:req.body.Email})
    .then(user=>{
      if(user){
        var notiticaiton='User đã tồn tại'
        res.render('Register',{notiticaiton})
      }else{
        const newUser=new User(req.body);
        newUser.save()
        .then(()=> res.redirect('/Login'))
      }
    })
    .catch(error=>{
      res.status(500).json('Tao tai khoan that  bai')
    })

}
}

module.exports=new register