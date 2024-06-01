const express = require('express');
const bodyParser = require('body-parser');
const conn = require('./config/db');
require('dotenv').config();
const path = require('path');
const session = require('express-session');
const app = express()
const port = process.env.PORT || 8888;
const multer = require('multer');
const router = require('./routes/routers');
const routerAdmin = require('./routes/routerAdmin/routerAdmin');
const routerQlPosts = require('./routes/routerAdmin/routerPosts');
const routerCategory = require('./routes/routerAdmin/routerCategory');
const routerUser = require('./routes/routerAdmin/routerUser');
const routerContact = require('./routes/routerAdmin/routerContact');
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
// Thiết lập thư mục lưu trữ tệp tin 
const storage = multer.diskStorage({
    destination: function(req, file,  cb){
        // Thư mục lưu trữ hình ảnh
        cb(null, path.join(__dirname,'public/images'));
    },
    filename: function(req, file, cb){  
        // Đặt tên duy nhất
        cb(null, Date.now() + path.extname(file.originalname)); 
    }
});

const upload = multer({storage: storage});

app.use(router);
app.use(routerAdmin);
app.use(routerQlPosts(upload));//truyền multer vào routes
app.use(routerCategory);
app.use(routerUser);
app.use(routerContact);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))