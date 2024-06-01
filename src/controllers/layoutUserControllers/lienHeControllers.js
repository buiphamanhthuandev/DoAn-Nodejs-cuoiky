const lienHeModel = require('../../models/layoutUserModel/lienHeModel');

class lienHeControllers{
    static async postLienHe(req,res){
        try {
            let username = req.body.username;
            let email = req.body.email;
            let sodienthoai = req.body.sodienthoai;
            let tieudelienhe = req.body.tieudelienhe;
            let noidunglienhe = req.body.noidunglienhe;
            const resultLienHe = await lienHeModel.postLienHe(username,email,sodienthoai,tieudelienhe,noidunglienhe)
            if(resultLienHe == true){
                res.redirect('/?lienhe=1');
            }
        } catch (error) {
            console.log(error);
        }
    }
}
module.exports = lienHeControllers;