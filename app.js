const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const bodyParser = require('body-parser');


//routes

const indexRouter = require('./routes/index');
app.set('views', path.join(__dirname,'views'));
app.use(express.static('public'));
//public folder client-side scripts so the html can access it
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.set('view engine', 'pug');
app.listen(port, ()=>{
    console.log("app started");
})
app.use('/',indexRouter);
//nodemon index.js
