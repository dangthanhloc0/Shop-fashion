const users=require('../modules/users')
//Get all data from database users
class profile{
    // async index(req,res,){
    // try {
    //     const result=await users.find();
    //     res.json({result})    
    // } catch (e) {
    //     res.status(400).json({error:e.meessage})
    // }
    // cánh 2
    index(req,res,next){
        users.find({})
            .then(users=>res.j('HomePage'))
            .catch(next)
    }
 }

module.exports=new profile;