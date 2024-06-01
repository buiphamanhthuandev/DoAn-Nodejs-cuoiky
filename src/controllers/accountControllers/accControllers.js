const accountModel = require('../../models/accountModel/accountModel');

class accController{
    // nhận giá trị đăng nhập
    static async postLogin(req,res){
        let username = req.body.Username;
        let password = req.body.Password;
        let results = await accountModel.postLogin(username,password);
        if(results.length > 0){
            let vaiTro = '';
            results.forEach(item => {
                vaiTro = item.VaiTro;
            });
            req.session.logined = true;
            req.session.username = username;
            if(vaiTro == 'admin'){
                res.redirect('/admin');
            }else{
                res.redirect('/');
            }
        }else{
            res.redirect('/login');
        }
    }
    //nhận url gọi file login
    static getLogin(req,res){
        res.render('account/login.ejs');
    }
    //nhận url gọi file register
    static getRegister(req,res){
        res.render('account/register');
    }
    //lấy giá trị Đăng ký
    static async postRegister(req,res){
        let username = req.body.Username;
        let password = req.body.Password;
        let email = req.body.Email;
        let vaiTro = 'nguoidung';
        const results = await accountModel.postRegister(username,password,email,vaiTro);
        if(results == true){
            res.redirect('/login');
        }
    }
    //nhận url => đăng xuất
    static getLogout(req,res){
        if(req.session.logined){
            req.session.logined = false;
            res.redirect('/');
        }else{
            res.redirect('/login');
        }
    }
} 

module.exports = accController;
