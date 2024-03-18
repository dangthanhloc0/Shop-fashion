const newPage=require('./HomePage')
const NewLogin=require('./Login')
const NewRegister=require('./Register')
const NewAdmin=require('./Admin')
const NewReceipt=require('./receipt')
const NewBoxChat=require('./BoxChat')




function route(app){

    app.use('/Login',NewLogin)
    app.use('/Register',NewRegister)
    app.use('/TrangChu',newPage)
    app.use('/Admin',NewAdmin)
    app.use('/purchase',NewReceipt)
    app.use('/BoxChat',NewBoxChat)
    
    

   
}

module.exports=route