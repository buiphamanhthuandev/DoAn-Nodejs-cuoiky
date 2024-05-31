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
        })
    }
}

module.exports = qlCategoryModel;