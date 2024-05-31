const qlContactModel = require('../../models/layoutAdminModel/qlContactModel');

class qlContactControllers{
    static async homeQlContact(req,res){
        let logined = req.session.logined;
        let username = req.session.username;
        const resultAllContact = await qlContactModel.homeQlContact();
        if(resultAllContact.length > 0){
            res.render('layoutAdmin/layoutAdmin',{content:'../layoutAdmin/qlContact/qlContact.ejs',ktLogin:{logined : logined, username : username},resultAllContact:resultAllContact});
        }
    }
}

module.exports = qlContactControllers;