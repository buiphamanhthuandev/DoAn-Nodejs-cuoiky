const qlPostsModel = require('../../models/layoutAdminModel/qlPostsModel');
const qlCategoryModel = require('../../models/layoutAdminModel/qlCategoryModel');

class qlPostsControllers{
    static async homeQlPosts(req,res){
        let logined = req.session.logined;
        let username = req.session.username;
        const resultAllPosts = await qlPostsModel.homeQlPosts();
        if(resultAllPosts.length > 0){
            res.render('layoutAdmin/layoutAdmin',{content:'../layoutAdmin/qlPosts/qlPosts.ejs',ktLogin:{logined : logined, username : username},resultAllPosts:resultAllPosts});
        }
    }
    // thêm bài viết
    static async getAddPosts(req,res){
        let logined = req.session.logined;
        let username = req.session.username;
        const resultAllCategory = await qlCategoryModel.homeQlCategory();
        if(resultAllCategory.length > 0){
            res.render('layoutAdmin/layoutAdmin',{content:'../layoutAdmin/qlPosts/addPosts.ejs',ktLogin:{logined: logined,username:username},resultAllCategory:resultAllCategory});
        }
    }
    static async postAddPosts(req,res){
        try{
            let TieuDe = req.body.TieuDe;
            let NoiDung = req.body.NoiDung;
            let TacGia = req.body.TacGia;
            let MaDanhMuc = req.body.MaDanhMuc;
            let HinhAnh = req.file ? `${req.file.filename}`:'';
            const resultAddPost = await qlPostsModel.postAddPosts(TieuDe,NoiDung,TacGia,HinhAnh,MaDanhMuc);
            if(resultAddPost == true){
                res.redirect('/quanlybaiviet');
            }
        }catch{ }
    }
    // Sửa bài viết
    static async getEditPosts(req,res){
        let logined = req.session.logined;
        let username = req.session.username;
        let id = req.params.id;
        const resultAllCategory = await qlCategoryModel.homeQlCategory();
        const resultPosts = await qlPostsModel.getEditPosts(id);
        if(resultPosts.length > 0){
            res.render('layoutAdmin/layoutAdmin',{content:'../layoutAdmin/qlPosts/editPosts.ejs',ktLogin:{logined: logined,username:username},resultPosts:resultPosts,resultAllCategory:resultAllCategory});
        }
    }
    static async postEditPosts(req,res){
        try{
            let id = req.params.id;
            let TieuDe = req.body.TieuDe;
            let NoiDung = req.body.NoiDung;
            let TacGia = req.body.TacGia;
            let MaDanhMuc = req.body.MaDanhMuc;
            let HinhAnh = req.file ? req.file.filename : req.body.currentHinhAnh;
            const resultEditPosts = await qlPostsModel.postEditPosts(TieuDe,NoiDung,TacGia,HinhAnh,MaDanhMuc,id);
            if(resultEditPosts == true){
                res.redirect('/quanlybaiviet');
            }
        }
        catch{}
    }
    //Xóa bài viết => cập nhật trạng thái
    static async getDelPosts(req,res){
        try {
            let id = req.params.id;
            const resultDelPosts = await qlPostsModel.getDelPosts(id);
            if(resultDelPosts == true){
                res.redirect('/quanlybaiviet');
            }
        } catch{ }
    } 
}

module.exports = qlPostsControllers;