const conn = require('../../config/db');

class timKiemPostModel{
    //tìm kiếm bài viết 
    static async postTimKiemPost(timKiem){
        return new Promise(resolve =>{
            let sqlTimKiem = `SELECT * FROM baiviet where TrangThai = 1 and TieuDe LIKE '%${timKiem}%'`;
            conn.query(sqlTimKiem,(error,resultTimKiem)=>{
                if(!error){
                    resolve(resultTimKiem);
                }else{
                    console.log(error);
                }
            });
        });
    }
    //tìm kiếm bài viết giới hạn
    static async postTimKiemPostLimit(timKiem,startPage,pageLimit){
        return new Promise(resolve =>{
            let sqlTimKiemPostLimit = `SELECT * FROM baiviet where TrangThai = 1 and TieuDe LIKE '%${timKiem}%' LIMIT ${startPage},${pageLimit}`;
            conn.query(sqlTimKiemPostLimit,(error,resultTimKiemPostLimit)=>{
                if(!error){
                    resolve(resultTimKiemPostLimit);
                }else{
                    console.log(error);
                }
            });
        });
    }
}

module.exports = timKiemPostModel;
