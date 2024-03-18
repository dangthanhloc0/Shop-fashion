class newscontroler{
    // get ->>news
    index(req,res){
        res.render('news');
     
    }

    show(req,res){
        res.send('News sdsd sd ')
    }
}

module.exports=new newscontroler;

