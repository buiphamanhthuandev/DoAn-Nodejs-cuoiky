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
}

module.exports = qlPostsModel;