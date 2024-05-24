const timKiemPostModel = require('../../models/layoutUserModel/timKiemPostModel');
const homeUserModel = require('../../models/layoutUserModel/homeUserModel');
require('dotenv').config();

class timKiemPostControllers{
    static async postTimKiem(req,res){
        let logined = req.session.logined;
        let username = req.session.username;
        let timKiem = req.body.timkiem;
        //danh sách tìm kiếm
        const ktLienHe = req.query.lienhe || 0;
        const resultTimKiem = await timKiemPostModel.postTimKiemPost(timKiem);
        //Phân trang danh sách tìm kiếm
        let page = req.query.page || 1;
        let pageLimit = process.env.POSTLIMIT || 11;
        let startPage = (page - 1) * pageLimit;
        const resultTimKiemPostLimit = await timKiemPostModel.postTimKiemPostLimit(timKiem,startPage,pageLimit);
        //lấy bài viết xem nhiều nhất
        let viewLimit = process.env.VIEWLIMIT || 5;
        const resultViewLimit = await homeUserModel.getViewLimit(viewLimit);
        if(resultTimKiem.length > 0){

            res.render('layoutUsers/layoutUsers',{content:'../layoutUsers/timKiemPost.ejs',ktLogin:{logined : logined, username : username},ktLienHe : ktLienHe,resultTimKiem : resultTimKiem,resultTimKiemPostLimit : resultTimKiemPostLimit,resultViewLimit : resultViewLimit});
        }
    }
}

module.exports = timKiemPostControllers;