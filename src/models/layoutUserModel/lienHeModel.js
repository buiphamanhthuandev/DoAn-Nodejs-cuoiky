const conn = require('../../config/db');

class lienHeModel{
    static async postLienHe(username,email,sodienthoai,tieudelienhe,noidunglienhe){
        return new Promise(resolve =>{
            let sqlLienHe = 'INSERT INTO lienhe (Ten, Email, SoDienThoai,TieuDeLienHe,NoiDungLienHe) VALUES (?, ?, ?, ?, ?)'
            conn.query(sqlLienHe,[username,email,sodienthoai,tieudelienhe,noidunglienhe],(error)=>{
                if(!error){
                    resolve(true);
                }else{
                    console.log(error);
                }
            })
        })
    }
}

module.exports = lienHeModel;
