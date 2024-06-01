const qlCategoryModel = require('../../models/layoutAdminModel/qlCategoryModel');

class qlCategoryControllers{
    //Danh sách danh mục bài viết
    static async homeQlCategory(req,res){
        let logined = req.session.logined;
        let username = req.session.username;
        const resultAllCategory = await qlCategoryModel.homeQlCategory();
        if(resultAllCategory.length > 0){
            res.render('layoutAdmin/layoutAdmin',{content:'../layoutAdmin/qlCategory/qlCategory.ejs',ktLogin:{logined : logined, username : username},resultAllCategory:resultAllCategory});
        }
    }
    //Thêm bài viết
    static async getAddCategory(req,res){
        let logined = req.session.logined;
        let username = req.session.username;
        res.render('layoutAdmin/layoutAdmin',{content:'../layoutAdmin/qlCategory/addCategory.ejs',ktLogin:{logined : logined, username : username}});
    }
    static async postAddCategory(req,res){
        try {
            let TenDanhMuc = req.body.TenDanhMuc;
            let MoTaDanhMuc = req.body.MoTaDanhMuc;
            const resultAddCategory = await qlCategoryModel.PostAddCategory(TenDanhMuc,MoTaDanhMuc);
            if(resultAddCategory == true){
                res.redirect('/quanlydanhmuc');
            }
        } catch (error) {
            console.log(error);
        }
    }
    //Sửa danh mục bài viết 
    static async getEditCategory(req,res){
        let logined = req.session.logined;
        let username = req.session.username;
        let id = req.params.id;
        const resultCategory = await qlCategoryModel.getEditCategory(id);
        if(resultCategory.length > 0){
            res.render('layoutAdmin/layoutAdmin',{content:'../layoutAdmin/qlCategory/editCategory.ejs',ktLogin:{logined : logined, username : username},resultCategory: resultCategory});
        }
    }
    static async postEditCategory(req,res){
        try {
            let id = req.params.id;
            let TenDanhMuc = req.body.TenDanhMuc;
            let MoTaDanhMuc = req.body.MoTaDanhMuc;
            const resultEditCategory = await qlCategoryModel.PostAddCategory(TenDanhMuc,MoTaDanhMuc,id);
            if(resultEditCategory == true){
                res.redirect('/quanlydanhmuc');
            }
        } catch (error) {
            console.log(error);
        }
    }
    // Xóa danh mục bài viết => cập nhật trạng thái
    static async getDelCategory(req,res){
        try {
            let id = req.params.id;
            const resultDelCategory = await qlCategoryModel.getDelCategory(id);
            if(resultDelCategory == true){
                res.redirect('/quanlydanhmuc');
            }
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = qlCategoryControllers;