const conn = require('../../config/db');

class qlUserModel{
    // Lấy all tài khoản
    static async homeQlUser(){
        return new Promise(resolve => {
            let sqlHomeQlUser = 'SELECT * FROM nguoidung WHERE TrangThai = 1'
            conn.query(sqlHomeQlUser,(error,resultAllUser)=>{
                if(!error){
                    resolve(resultAllUser);
                }else{
                    console.log(error);
                }
            });
        });
    }
    // Thêm tài khoản
    static async postAddUser(TenDangNhap,MatKhau,Email,VaiTro){
        return new Promise(resolve =>{
            let sqlPostAddUser = 'INSERT INTO nguoidung(TenDangNhap,MatKhau,Email,VaiTro) VALUES(?, ?, ?, ?)';
            conn.query(sqlPostAddUser,[TenDangNhap,MatKhau,Email,VaiTro],(error)=>{
                if(!error){
                    resolve(true);
                }else{
                    console.log(error);
                    resolve(false);
                }
            });
        });
    }
    // Sửa tài khoản
    static async getEditUser(id){
        return new Promise(resolve =>{
            let sqlEditUser = 'SELECT * FROM nguoidung WHERE id = ?';
            conn.query(sqlEditUser,[id],(error,resultUser)=>{
                if(!error){
                    resolve(resultUser);
                }else{
                    console.log(error);
                }
            })
        })
    }
    static async postEditUser(TenDangNhap,MatKhau,Email,VaiTro,id){
        return new Promise(resolve =>{
            let sqlEditUser = 'UPDATE nguoidung SET TenDangNhap = ?, MatKhau = ?, Email = ?, VaiTro = ? WHERE id = ?';
            conn.query(sqlEditUser,[TenDangNhap,MatKhau,Email,VaiTro,id],(error)=>{
                if(!error){
                    resolve(true);
                }else{
                    console.log(error);
                    resolve(false);
                }
            });
        });
    }
    // Xóa tài khoản => cập nhật lại tài khoản 
    static async getDelUser(id){
        return new Promise(resolve =>{
            let sqlDelUser = 'UPDATE nguoidung SET TrangThai = 0 WHERE id = ?';
            conn.query(sqlDelUser,[id],(error)=>{
                if(!error){
                    resolve(true);
                }else{
                    console.log(error);
                    resolve(false);
                }
            });
        });
    }
}

module.exports = qlUserModel;