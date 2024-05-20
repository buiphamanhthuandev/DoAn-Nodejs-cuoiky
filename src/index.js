const express = require('express');
const bodyParser = require('body-parser');
const conn = require('./config/db');
require('dotenv').config();
const path = require('path');
const session = require('express-session');
const app = express()
const port = process.env.PORT || 8888;

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(session({
    resave:false,
    saveUninitialized:false,
    secret:'keyboard cat'
}));


app.get('/', (req, res) =>{
    res.render('layoutUsers/layoutUsers',{content:'../layoutUsers/homeUsers.ejs'})
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))