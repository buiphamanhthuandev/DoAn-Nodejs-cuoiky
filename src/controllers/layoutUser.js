
class layoutUser{
    static getHomeUser(req,res){
        let logined = req.session.logined;
        let username = req.session.username;
        res.render('layoutUsers/layoutUsers',{content:'../layoutUsers/homeUsers.ejs',ktLogin:{logined : logined, username : username}});
    }
}

module.exports = layoutUser;