const conn = require('../config/db');

class accountModel{
    static async postLogin(username,password){
        return new Promise(resolve=>{
            let sql = 'SELECT TenDangNhap,MatKhau,VaiTro FROM nguoidung WHERE TenDangNhap = ? and MatKhau = ?';
            conn.query(sql,[username,password],(error,results,fields)=>{
                if(error) console.log(error);
                resolve(results);
            });
        });
    }
    static async postRegister(username,password,email,vaiTro){
        return new Promise(resolve =>{
            let sql = 'INSERT INTO nguoidung(TenDangNhap,MatKhau,Email,VaiTro) VALUES(?,?,?,?)';
            conn.query(sql,[username,password,email,vaiTro],(error,results,fields)=>{
                if(!error){
                    resolve(true);
                }else{
                    resolve(false);
                }
                
            });
        });
    }
}

module.exports = accountModel;