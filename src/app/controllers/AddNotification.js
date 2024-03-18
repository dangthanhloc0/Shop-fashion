const noti=require('../modules/notification')

class AddNotification{
    index(req,res){
        res.render('AddNoti')
    }

    save(req,res){
        const Newnoti=new noti(req.body);
        Newnoti.Img=req.file.filename
    
        Newnoti.save()
        .then(()=> res.redirect('http://localhost:3000/Admin/notification/all'))

    }
 }





module.exports =new AddNotification