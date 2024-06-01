const qlContactModel = require('../../models/layoutAdminModel/qlContactModel');

class qlContactControllers{
    //Danh sách liên hệ
    static async homeQlContact(req,res){
        let logined = req.session.logined;
        let username = req.session.username;
        const resultAllContact = await qlContactModel.homeQlContact();
        if(resultAllContact.length > 0){
            res.render('layoutAdmin/layoutAdmin',{content:'../layoutAdmin/qlContact/qlContact.ejs',ktLogin:{logined : logined, username : username},resultAllContact:resultAllContact});
        }
    }
    //Phản hồi => Xóa liên hệ => Cập nhật tình trạng
    static async getDelContact(req,res){
        try {
            let id = req.params.id;
            const resultDelContact = await qlContactModel.getDelContact(id);
            if(resultDelContact == true){
                res.redirect('/quanlylienhe');
            }
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = qlContactControllers;