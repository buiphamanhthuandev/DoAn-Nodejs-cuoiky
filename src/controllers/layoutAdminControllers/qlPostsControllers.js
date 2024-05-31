const qlPostsModel = require('../../models/layoutAdminModel/qlPostsModel');

class qlPostsControllers{
    static async homeQlPosts(req,res){
        let logined = req.session.logined;
        let username = req.session.username;
        const resultAllPosts = await qlPostsModel.homeQlPosts();
        if(resultAllPosts.length > 0){
            res.render('layoutAdmin/layoutAdmin',{content:'../layoutAdmin/qlPosts/qlPosts.ejs',ktLogin:{logined : logined, username : username},resultAllPosts:resultAllPosts});
        }
    }
}

module.exports = qlPostsControllers;