const conn = require('../../config/db');

class chiTietPostModel{
    //lấy chi tiết bài viết
    static async getChiTietPost(maId){
        return new Promise(resolve=>{
            let sqlChiTietPost = `SELECT * FROM baiviet where TrangThai = 1 and id = ?`;
            conn.query(sqlChiTietPost,[maId],(error,resultChiTietPost,fields)=>{
                if(!error){
                    resolve(resultChiTietPost);
                }else{
                    console.log(error);
                }
            })
        });
    }
    //Cập nhật view ++
    static async getUpdateView(maId){
        return new Promise(resolve =>{
            let sqlUpdateView = `UPDATE baiviet SET views = views + 1 WHERE id = ?`;
            conn.query(sqlUpdateView,[maId],(error)=>{
                if(!error){
                    resolve(true);
                }else{
                    resolve(false);
               }
            });
        });
    }
    //lấy mã danh mục bài viết 
    static async getMaDanhMuc(maId){
        return new Promise(resolve =>{
            let sqlMaDanhMuc = 'SELECT MaDanhMuc FROM baiviet where id = ?';
            conn.query(sqlMaDanhMuc,[maId],(error,resultMaDanhMuc,fields)=>{
                if(!error){
                    resolve(resultMaDanhMuc);
                }else{
                    console.log(error);
                }
            });
        });
    }
    //lấy bài viết danh muc 
    static async getPostDanhMucLimit(maDanhMuc){
        return new Promise(resolve => {
            let sqlPostDanhMucLimit = 'SELECT * FROM baiviet where TrangThai = 1 and MaDanhMuc = ? LIMIT 3';
            conn.query(sqlPostDanhMucLimit,[maDanhMuc],(error,resultPostDanhMucLimit,fields)=>{
                if(!error){
                    resolve(resultPostDanhMucLimit);
                }else{
                    console.log(error);
                }
            });
        });
    }
    //thêm bình luận
    static async postThemBinhLuan(Email,NoiDung,MaBaiViet){
        return new Promise(resolve => {
            let sqlAddBL = `INSERT INTO binhluan(Email, NoiDung, MaBaiViet) VALUES (?, ?, ?)`;
            conn.query(sqlAddBL,[Email,NoiDung,MaBaiViet],(error)=>{
                if(!error){
                    resolve(true);
                }else{
                    console.log(error);
                }
            });
        });
    }
}
module.exports = chiTietPostModel;