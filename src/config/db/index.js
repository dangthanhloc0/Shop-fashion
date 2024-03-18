const mongoose = require('mongoose');
async function connext(){
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/Shop',{
            dbName : "Shop",
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('succsecc')
    } catch (error) {
        console.log('Flase')
    }
}

module.exports={
    connext
}