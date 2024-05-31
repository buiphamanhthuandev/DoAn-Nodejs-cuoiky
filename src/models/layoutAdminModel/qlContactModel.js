const conn = require('../../config/db');

class qlContactModel{
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
}

module.exports = qlContactModel;
