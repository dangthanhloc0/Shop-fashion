const express=require('express')
const route=express.Router()
const Receipt=require('../app/controllers/reciptController')
route.get('/:id/product',Receipt.index)

route.post('/:id/save',Receipt.save)

route.post('/:id/save/buy',Receipt.buy)


module.exports= route