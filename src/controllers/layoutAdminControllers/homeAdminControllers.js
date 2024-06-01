
class homeAdminControllers{

    static getHomeAdmin(req,res){
        let logined = req.session.logined;
        let username = req.session.username;
        res.render('layoutAdmin/layoutAdmin',{content:'../layoutAdmin/homeAdmin.ejs',ktLogin:{logined : logined, username : username}});
    }
}
module.exports = homeAdminControllers;