const express = require('express');
const bodyParser = require('body-parser');
const conn = require('./config/db');
require('dotenv').config();
const path = require('path');
const session = require('express-session');
const app = express()
const port = process.env.PORT || 8888;
const router = require('./routes/routers');
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

app.use(router);

// app.get('/logout',(req,res)=>{
//     if(req.session.logined){
//         req.session.logined = false;
//         res.redirect('/');
//     }else{
//         res.redirect('/login');
//     }
// });
// app.get('/register',(req,res)=>{
//     res.render('account/register');
// });
// app.post('/register',(req,res)=>{
//     let username = req.body.Username;
//     let password = req.body.Password;
//     let email = req.body.Email;
//     let vaiTro = 'nguoidung';
//     let sql = 'INSERT INTO nguoidung(TenDangNhap,MatKhau,Email,VaiTro) VALUES(?,?,?,?)';
//     conn.query(sql,[username,password,email,vaiTro],(error,results,fields)=>{
//         res.render('account/login');
//     });
// });
app.listen(port, () => console.log(`Example app listening on port ${port}!`))