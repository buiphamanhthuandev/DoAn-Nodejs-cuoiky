const conn = require('../../config/db');

class qlCategoryModel{
    // danh sách danh mục bài viết
    static async homeQlCategory(){
        return new Promise(resolve => {
            let sqlhomeQlCategory = 'SELECT * FROM danhmucbaiviet WHERE TrangThai = 1';
            conn.query(sqlhomeQlCategory,(error,resultAllCategory)=>{
                if(!error){
                    resolve(resultAllCategory);
                }else{
                    console.log(error);
                }
            });
        });
    }
    static async PostAddCategory(TenDanhMuc,MoTaDanhMuc){
        return new Promise(resolve => {
            let sqlAddCategory = 'INSERT INTO danhmucbaiviet(TenDanhMuc,MoTaDanhMuc) VALUES(?, ?)';
            conn.query(sqlAddCategory,[TenDanhMuc,MoTaDanhMuc],(error)=>{
                if(!error){
                    resolve(true);
                }else{
                    console.log(error);
                    resolve(false);
                }
            })
        })
    }
    //Sửa danh mục bài viết 
    static async getEditCategory(id){
        return new Promise(resolve =>{
            let sqlGetEditCategory = 'SELECT * FROM danhmucbaiviet WHERE id = ?';
            conn.query(sqlGetEditCategory,[id],(error,resultCategory) =>{
                if(!error){
                    resolve(resultCategory);
                }else{
                    console.log(error);
                }
            });
        });
    }
    static async postEditCategory(TenDanhMuc,MoTaDanhMuc,id){
        return new Promise(resolve =>{
            let sqlEditCategory = 'UPDATE danhmucbaiviet SET TenDanhMuc = ?, MoTaDanhMuc = ? WHERE id = ?';
            conn.query(sqlEditCategory,[TenDanhMuc,MoTaDanhMuc,id],(error)=>{
                if(!error){
                    resolve(true);
                }else{
                    console.log(error);
                    resolve(false);
                }
            })
        });
    }
    // Xóa danh mục bài viết => cập nhật trạng thái
    static async getDelCategory(id){
        return new Promise(resolve =>{
            let sqlDelCategory = 'UPDATE danhmucbaiviet SET TrangThai = 0 WHERE id = ?';
            conn.query(sqlDelCategory,[id],(error)=>{
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

module.exports = qlCategoryModel;