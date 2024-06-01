const timKiemPostModel = require('../../models/layoutUserModel/timKiemPostModel');
const homeUserModel = require('../../models/layoutUserModel/homeUserModel');
const categoryModel = require('../../models/layoutUserModel/categoryModel');

require('dotenv').config();

class timKiemPostControllers{
    static async postTimKiem(req,res){
        let logined = req.session.logined;
        let username = req.session.username;
        let timKiem = req.body.timkiem;
        //Hiện thị danh mục bài viết 
        const resultAllCategory = await categoryModel.getAllCategory();
        //danh sách tìm kiếm
        const resultTimKiem = await timKiemPostModel.getTimKiemPost(timKiem);
        //Phân trang danh sách tìm kiếm
        let page = req.query.page || 1;
        let pageLimit = process.env.POSTLIMIT || 11;
        let startPage = (page - 1) * pageLimit;
        const resultTimKiemPostLimit = await timKiemPostModel.getTimKiemPostLimit(timKiem,startPage,pageLimit);
        //lấy bài viết xem nhiều nhất
        let viewLimit = process.env.VIEWLIMIT || 5;
        const resultViewLimit = await homeUserModel.getViewLimit(viewLimit);
        if(resultViewLimit.length > 0){
            res.render('layoutUsers/layoutUsers',{content:'../layoutUsers/timKiemPost.ejs',
                                                    ktLogin:{logined : logined, username : username},
                                                    resultTimKiem : resultTimKiem,
                                                    resultTimKiemPostLimit : resultTimKiemPostLimit,
                                                    resultViewLimit : resultViewLimit,
                                                    resultAllCategory:resultAllCategory});
        }
    }
}

module.exports = timKiemPostControllers;