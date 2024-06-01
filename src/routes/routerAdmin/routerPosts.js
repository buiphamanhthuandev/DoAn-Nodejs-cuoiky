const express = require('express');

const qlPostsControllers = require('../../controllers/layoutAdminControllers/qlPostsControllers');
const router = express.Router();

module.exports = (upload) =>{
        //quản lý bài viết 
        router.get('/quanlybaiviet',qlPostsControllers.homeQlPosts);
        router.get('/thembaiviet',qlPostsControllers.getAddPosts);
        router.post('/thembaiviet',upload.single('HinhAnh'),qlPostsControllers.postAddPosts);
        router.get('/suabaiviet/:id',qlPostsControllers.getEditPosts);
        router.post('/suabaiviet/:id',upload.single('HinhAnh'),qlPostsControllers.postEditPosts);
        router.get('/xoabaiviet/:id',qlPostsControllers.getDelPosts);
    return router;
};