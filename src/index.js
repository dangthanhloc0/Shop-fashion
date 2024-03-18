
const path = require('path');
const express = require('express');
const { engine } = require ('express-handlebars');
var methodOverride = require('method-override')
var cookieParser = require('cookie-parser')

const app = express();
const route=require('./router');
const morgan = require('morgan')
app.use(morgan('combined'))
const { config } = require('process');
app.use(cookieParser())

app.use('/fa', express.static(__dirname + './public/css'));
app.use('/fonts', express.static(__dirname + './public/css'));

app.use(methodOverride('_method'))



const port = 3000;
//khai báo them thu luc tinh public
app.use(express.static(path.join(__dirname,'public')))

app.use(express.urlencoded({extended:true}));
app.use(express.static('assets'))
// xu li cho body
app.use(express.json());
// su li cho java script

app.engine('handlebars', engine({
  helpers:{
    sum : (a,b)=>a+b,
  }
}),
);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resource/views'));


route(app);

const DB =require('./config/db')
DB.connext();



app.listen(port, () => {
  console.log(`Example app  ${port}`)
})

