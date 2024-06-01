const homeUserModel = require('../../models/layoutUserModel/homeUserModel');
const categoryModel = require('../../models/layoutUserModel/categoryModel');
require('dotenv').config();

class homeUserControllers{
    static async getHomeUser(req,res){
        let logined = req.session.logined;
        let username = req.session.username;
        let ktLienHe = req.query.lienhe || 0;
        //Hiện thị danh mục bài viết 
        const resultAllCategory = await categoryModel.getAllCategory();
        //lấy tất cả bài viết
        let resultAllPosts = await homeUserModel.getAllPosts();
        let page = req.query.page || 1;
        let pageLimit = process.env.POSTLIMIT || 11;
        let startPage = (page - 1) * pageLimit;
        //lấy bài viết giới hạn
        let resultPostLimit = await homeUserModel.getPostLimit(startPage,pageLimit);
        //lấy bài viết xem nhiều nhất
        let viewLimit = process.env.VIEWLIMIT || 5;
        const resultViewLimit = await homeUserModel.getViewLimit(viewLimit);

        res.render('layoutUsers/layoutUsers',{content:'../layoutUsers/homeUsers.ejs',
                                                ktLogin:{logined : logined, username : username},
                                                ktLienHe : ktLienHe,
                                                resultAllPosts : resultAllPosts,
                                                resultPostLimit : resultPostLimit,
                                                resultViewLimit : resultViewLimit,
                                                resultAllCategory:resultAllCategory});
    }
    static async getPhanLoaiPosts(req,res){
        let logined = req.session.logined;
        let username = req.session.username;
        //Hiện thị danh mục bài viết 
        const resultAllCategory = await categoryModel.getAllCategory();
        //lấy danh mục bài viết
        let maPhanLoai = req.query.dmpl;
        const resultPhanLoai = await homeUserModel.getPhanLoaiPosts(maPhanLoai);
        //lấy danh mục bài viết giới hạn
        let page = req.query.page || 1;
        let pageLimit = process.env.POSTLIMIT || 11;
        let startPage = (page - 1) * pageLimit;
        const resultPlPostLimit = await homeUserModel.getPhanLoaiPostLimit(maPhanLoai,startPage,pageLimit);
        //lấy bài viết xem nhiều nhất
        let viewLimit = process.env.VIEWLIMIT || 5;
        const resultViewLimit = await homeUserModel.getViewLimit(viewLimit);
        res.render('layoutUsers/layoutUsers',{content:'../layoutUsers/phanLoaiPostsUser.ejs',
                                                ktLogin:{logined : logined, username : username},
                                                resultPhanLoai : resultPhanLoai,
                                                resultPlPostLimit : resultPlPostLimit,
                                                resultViewLimit : resultViewLimit,
                                                resultAllCategory:resultAllCategory});
    }
}

module.exports = homeUserControllers;