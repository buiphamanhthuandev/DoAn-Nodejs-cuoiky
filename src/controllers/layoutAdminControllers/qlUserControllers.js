const qlUserModel = require('../../models/layoutAdminModel/qlUserModel');

class qlUserControllers{
    //danh sách tài khoản
    static async homeQlUser(req,res){
        let logined = req.session.logined;
        let username = req.session.username;
        const resultAllUser = await qlUserModel.homeQlUser();
        if(resultAllUser.length > 0){
            res.render('layoutAdmin/layoutAdmin',{content:'../layoutAdmin/qlUser/qlUser.ejs',ktLogin:{logined : logined, username : username},resultAllUser:resultAllUser});
        }
    }
    // Thêm tài khoản get & post
    static async getAddUser(req,res){
        let logined = req.session.logined;
        let username = req.session.username;
        res.render('layoutAdmin/layoutAdmin',{content:'../layoutAdmin/qlUser/AddUser.ejs',ktLogin:{logined: logined,username:username}});
    }
    static async postAddUser(req,res){
        const TenDangNhap = req.body.TenDangNhap;
        const MatKhau = req.body.MatKhau;
        const Email = req.body.Email;
        const VaiTro = req.body.VaiTro;
        const resultAddUser = await qlUserModel.postAddUser(TenDangNhap,MatKhau,Email,VaiTro);
        if(resultAddUser == true){
            res.redirect('/quanlynguoidung');
        }
    }
    // Sửa tài khoản get & post
    static async getEditUser(req,res){
        let logined = req.session.logined;
        let username = req.session.username;
        let id = req.params.id;
        const resultUser = await qlUserModel.getEditUser(id);
        if(resultUser.length > 0){
            res.render('layoutAdmin/layoutAdmin',{content:'../layoutAdmin/qlUser/editUser.ejs',ktLogin:{logined: logined,username:username},resultUser : resultUser});
        }
    }
    static async postEditUser(req,res){
        let id = req.params.id;
        const TenDangNhap = req.body.TenDangNhap;
        const MatKhau = req.body.MatKhau;
        const Email = req.body.Email;
        const VaiTro = req.body.VaiTro;
        const resultEditUser = await qlUserModel.postEditUser(TenDangNhap,MatKhau,Email,VaiTro,id);
        if(resultEditUser == true){
            res.redirect('/quanlynguoidung');
        }
    }
    // Xóa tài khoản => cập nhật lại tài khoản trạng thái
    static async getDelUser(req,res){
        let id = req.params.id;
        const resultDelUser = await qlUserModel.getDelUser(id);
        if(resultDelUser == true){
            res.redirect('/quanlynguoidung');
        }
    }

}

module.exports = qlUserControllers;