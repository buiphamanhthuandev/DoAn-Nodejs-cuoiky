const conn = require('../../config/db');

class homeUserModel{
    //lấy tất cả bài viết trong csdl
    static async getAllPosts(){
        return new Promise(resolve=>{
            let sqlAllPosts = 'SELECT * FROM baiviet where TrangThai = 1';
            conn.query(sqlAllPosts,(error,resultAllPosts,fields)=>{
                if(!error){
                    resolve(resultAllPosts);
                }else{
                    console.log(error);
                }
                
            });
        });
    }
    //lấy giới hạn bài viết
    static async getPostLimit(startPage,pageLimit){
        return new Promise(resolve=>{
            let sqlPostLimit = `SELECT * FROM baiviet where TrangThai = 1 LIMIT ${startPage},${pageLimit}`;
            conn.query(sqlPostLimit,(error,resultPostLimit,fields)=>{
                if(!error){
                    resolve(resultPostLimit);
                }else{
                    console.log(error);
                }
            });
        });
    }
    //lấy bài viết xem nhiều
    static async getViewLimit(viewLimit){
        return new Promise(resolve => {
            let sqlViewLimit = 'SELECT * FROM baiviet ORDER BY views desc LIMIT 5';
            conn.query(sqlViewLimit,(error,resultViewLimit,fields)=>{
                if(!error){
                    resolve(resultViewLimit);
                }else{
                    console.log(error);
                }
            });
        });
    }
    //lấy danh mục bài viết
    static async getPhanLoaiPosts(maPhanLoai){
        return new Promise(resolve =>{
            let sqlPhanLoaiPost = 'SELECT * FROM baiviet where TrangThai = 1 and MaDanhMuc = ?';
            conn.query(sqlPhanLoaiPost,[maPhanLoai],(error,resultPhanLoai,fields)=>{
                if(!error){
                    resolve(resultPhanLoai);
                }else{
                    console.log(error);
                }
            });
        });
    }
    //lấy giới hạn bài viết phân loại
    static async getPhanLoaiPostLimit(maPhanLoai,startPage,pageLimit){
        return new Promise(resolve=>{
            let sqlPlPostLimit = `SELECT * FROM baiviet where TrangThai = 1 and MaDanhMuc = ? LIMIT ${startPage},${pageLimit}`;
            conn.query(sqlPlPostLimit,[maPhanLoai],(error,resultPlPostLimit,fields)=>{
                if(!error){
                    resolve(resultPlPostLimit);
                }else{
                    console.log(error);
                }
            });
        });
    }
}

module.exports = homeUserModel;