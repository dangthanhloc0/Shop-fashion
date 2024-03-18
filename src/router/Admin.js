const Admin=require('../app/controllers/AdminControllers')
const express=require('express')
const route=express.Router()


//Nhận các sự hoạt động của Homepage

route.get('/',Admin.index)
// admin
const AddProduct =require('../app/controllers/AddProductControllers')

//addproduct
const Product=require('../app/controllers/ProductControllers')

// repair   


const multer=require('multer')
//tạo đường dẫn để lưu file vào thư  viện

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,'src/public/img')
    },
    filename: function (req, file, cb) {
      cb(null,req.body.Name+'.png')
    },

  })
  
  const upload = multer({ storage: storage })
//tạo xong đối tượng mullte // luu tru bang 2 doi tương  destination và fileName

route.post('/AddProduct/create',upload.single('image'),AddProduct.create)
route.get('/AddProduct',AddProduct.index)


// Product


route.get('/Product',Product.index)
route.get('/:id',Product.Repair)
route.post('/:id/update',upload.single('Img'),Product.Product_Save)

route.get('/delete/:id',Product.delete)


//clines
const Clinet=require('../app/controllers/ClinetController')
route.get('/Account/user',Clinet.index)
route.get('/Account/:id',Clinet.update)
route.post('/Account/:id/update',Clinet.save)

route.get('/Account/delete/:id',Clinet.delete)
//notification
const notification = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null,'src/public/imgNoti')
  },
  filename: function (req, file, cb) {
    cb(null,req.body.Date+'.png')
  },

})
const uploadNoti= multer({ storage:notification})
const addnoti=require('../app/controllers/AddNotification')
route.get('/Noti/Add',addnoti.index)
route.post('/Noti/create',uploadNoti.single('image'),addnoti.save)

//notificationController
const noti=require('../app/controllers/notifiControlller')
route.get('/notification/all',noti.index)
route.get('/notification/:id',noti.Repair)
route.post('/notification/:id/update',noti.noti_Save)
route.get('/notification/delete/:id',noti.delete)

//reeceipt
route.get('/receipt/all',Admin.receipt)
route.get('/receipt/delete/:id',Admin.delete_receipt)
// route.get('/receipt/delete/:id',Admin.delete_receipt)

//chat box 
route.get('/Help/all',Admin.ChatBox)
route.get('/Help/delete/:id',Admin.delete_ChatBox)
module.exports= route   


