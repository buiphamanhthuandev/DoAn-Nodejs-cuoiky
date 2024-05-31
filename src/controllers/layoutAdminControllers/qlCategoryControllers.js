const qlCategoryModel = require('../../models/layoutAdminModel/qlCategoryModel');

class qlCategoryControllers{
    static async homeQlCategory(req,res){
        let logined = req.session.logined;
        let username = req.session.username;
        const resultAllCategory = await qlCategoryModel.homeQlCategory();
        if(resultAllCategory.length > 0){
            res.render('layoutAdmin/layoutAdmin',{content:'../layoutAdmin/qlCategory/qlCategory.ejs',ktLogin:{logined : logined, username : username},resultAllCategory:resultAllCategory});
        }
    }
}

module.exports = qlCategoryControllers;