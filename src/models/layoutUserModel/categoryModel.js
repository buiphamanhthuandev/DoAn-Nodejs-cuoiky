const conn = require('../../config/db');

class categoryModel{
    // Danh sách danh mục bài viết 
    static async getAllCategory(){
        return new Promise(resolve =>{
            let sqlAllCategory = 'SELECT * FROM danhmucbaiviet WHERE TrangThai = 1';
            conn.query(sqlAllCategory,(error,resultAllCategory)=>{
                if(!error){
                    resolve(resultAllCategory);
                }else{
                    console.log(error);
                }
            });
        });
    }
}

module.exports = categoryModel;