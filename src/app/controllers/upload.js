const multer=require('multer')
//tạo đường dẫn để lưu file vào thư  viện
const storage=multer.diskStorage({
  //neu khong co file trả ve null neu co file trả ve thư mục định dạng
  destination:(req,file,res)=>{
    res(null,'/src/public/img')
  },
  //file name neu co file tra ve ten file khong co file trả về null
  filename:(req,file,res)=>{
    res(null,file.originalname )
  } 
})

const upload=multer({storage:storage})
//tạo xong đối tượng mullte // luu tru bang 2 doi tương  destination và fileName

module.exports=upload