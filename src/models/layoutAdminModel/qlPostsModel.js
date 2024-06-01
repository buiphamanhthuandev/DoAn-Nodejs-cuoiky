const conn = require('../../config/db');

class qlPostsModel{
    // danh sách bài viết
    static async homeQlPosts(){
        return new Promise(resolve =>{
            let sqlHomeQlPosts = 'SELECT * FROM baiviet WHERE TrangThai = 1';
            conn.query(sqlHomeQlPosts,(error,resultAllPosts)=>{
                if(!error){
                    resolve(resultAllPosts);
                }else{
                    console.log(error);
                }
            });
        });
    }
    // Thêm bài viết
    static async postAddPosts(TieuDe,NoiDung,TacGia,HinhAnh,MaDanhMuc){
        return new Promise(resolve =>{
            let sqlAddPosts = 'INSERT INTO baiviet(TieuDe,NoiDung,TacGia,HinhAnh,MaDanhMuc) VALUES(?, ?, ?, ?, ?)';
            conn.query(sqlAddPosts,[TieuDe,NoiDung,TacGia,HinhAnh,MaDanhMuc],(error)=>{
                if(!error){
                    resolve(true);
                }else{
                    console.log(error);
                    resolve(false);
                }
            });
        });
    }
    // sửa bài viết 
    static async getEditPosts(id){
        return new Promise(resolve =>{
            let sqlGetEditPosts = 'SELECT * FROM baiviet WHERE id = ?';
            conn.query(sqlGetEditPosts,[id],(error,resultPosts)=>{
                if(!error){
                    resolve(resultPosts);
                }else{
                    console.log(error);
                }
            });
        });
    }
    static async postEditPosts(TieuDe,NoiDung,TacGia,HinhAnh,MaDanhMuc,id){
        return new Promise(resolve => {
            let sqlEditPost = 'UPDATE baiviet SET TieuDe = ?, NoiDung = ?, TacGia = ?, HinhAnh = ?, MaDanhMuc = ? WHERE id = ?';
            conn.query(sqlEditPost,[TieuDe,NoiDung,TacGia,HinhAnh,MaDanhMuc,id],(error) =>{
                if(!error){
                    resolve(true);
                }else{
                    console.log(error);
                    resolve(false);
                }
            });
        });
    }
    // Xóa bài viết => cập nhật trạng thái
    static async getDelPosts(id){
        return new Promise(resolve =>{
            let sqlDelPosts = 'UPDATE baiviet SET TrangThai = 0 WHERE id = ?';
            conn.query(sqlDelPosts,[id],(error)=>{
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

module.exports = qlPostsModel;