const chiTietPostModel = require('../../models/layoutUserModel/chiTietPostModel');
const homeUserModel = require('../../models/layoutUserModel/homeUserModel');
require('dotenv').config();

class chiTietPostControllers{
    static async getChiTietBaiViet(req,res){
        let logined = req.session.logined;
        let username = req.session.username;
        let ktLienHe = req.query.lienhe || 0;
        let maId = req.query.id;
        //lấy chi tiết bài viết
        const resultChiTietPost = await chiTietPostModel.getChiTietPost(maId);
        //lấy mã danh mục
        const resultMaDanhMuc = await chiTietPostModel.getMaDanhMuc(maId);
        //lấy danh sách bài viết
        let maDanhMuc = '';
        resultMaDanhMuc.forEach(item => {
            maDanhMuc = item.MaDanhMuc;
        });
        const resultPostDanhMucLimit = await chiTietPostModel.getPostDanhMucLimit(maDanhMuc);
        //update view
        const resultUpdateView = await chiTietPostModel.getUpdateView(maId);
        //lấy bài viết xem nhiều nhất
        let viewLimit = process.env.VIEWLIMIT || 5;
        const resultViewLimit = await homeUserModel.getViewLimit(viewLimit);
        
        res.render('layoutUsers/layoutUsers',{content:'../layoutUsers/chiTietPost.ejs',ktLogin:{logined : logined, username : username},ktLienHe : ktLienHe,resultChiTietPost : resultChiTietPost,resultPostDanhMucLimit : resultPostDanhMucLimit,resultViewLimit : resultViewLimit});
    }
    static async postThemBinhLuan(req,res){
        let maId = req.query.id;
        let email = req.body.Email;
        let noiDung = req.body.NoiDung;
        const resultThemBinhLuan = await chiTietPostModel.postThemBinhLuan(email,noiDung,maId);
        if(resultThemBinhLuan == true){
            res.redirect('/');
        }
    }
}

module.exports = chiTietPostControllers;