const express=require('express')
const route=express.Router()
var BoxChat=require('../app/controllers/BoxChatController')

route.get('/',BoxChat.index)
route.post('/save',BoxChat.save)

module.exports=route