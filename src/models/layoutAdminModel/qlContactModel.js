const conn = require('../../config/db');

class qlContactModel{
    // Danh sách liên hệ
    static async homeQlContact(){
        return new Promise(resolve =>{
            let sqlQlContact = 'SELECT * FROM lienhe WHERE TrangThai = 1';
            conn.query(sqlQlContact,(error,resultAllContact)=>{
                if(!error){
                    resolve(resultAllContact);
                }else{
                    console.log(error);
                }
            });
        });
    }
    //Phản hồi => Xóa liên hệ => Cập nhật tình trạng
    static async getDelContact(id){
        return new Promise(resolve => {
            let sqlDelContact = 'UPDATE lienhe SET TrangThai = 0 WHERE id = ?';
            conn.query(sqlDelContact,[id],(error)=>{
                if(!error){
                    resolve(true);
                }else{
                    console.log(error);
                    resolve(false);
                }
            })
        })
    }
}

module.exports = qlContactModel;
