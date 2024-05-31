const express = require('express');

const accController = require('../controllers/accControllers');
const homeUserControllers = require('../controllers/layoutUserControllers/homeUserControllers');
const chiTietPostControllers = require('../controllers/layoutUserControllers/chiTietPostControllers');
const lienHeControllers = require('../controllers/layoutUserControllers/lienHeControllers');
const layoutAdmin = require('../controllers/layoutAdmin');
const timKiemPostControllers = require('../controllers/layoutUserControllers/timKiemPostControllers');

const qlUserControllers = require('../controllers/layoutAdminControllers/qlUserControllers');
const qlPostsControllers = require('../controllers/layoutAdminControllers/qlPostsControllers');
const qlCategoryControllers = require('../controllers/layoutAdminControllers/qlCategoryControllers');
const qlContactControllers = require('../controllers/layoutAdminControllers/qlContactControllers');
const router = express.Router();

//Layout User
router.get('/',homeUserControllers.getHomeUser);
router.get('/phanloai',homeUserControllers.getPhanLoaiPosts);
router.get('/chitietbaiviet',chiTietPostControllers.getChiTietBaiViet);
router.post('/thembinhluan',chiTietPostControllers.postThemBinhLuan);
router.post('/lienhe',lienHeControllers.postLienHe);
router.post('/searchbaiviet',timKiemPostControllers.postTimKiem);
//Layout Admin 
router.get('/admin',layoutAdmin.getHomeAdmin);
//quản lý tài khoản
router.get('/quanlynguoidung',qlUserControllers.homeQlUser);
router.get('/themnguoidung',qlUserControllers.getAddUser);
router.post('/themnguoidung',qlUserControllers.postAddUser);
router.get('/suanguoidung/:id',qlUserControllers.getEditUser);
router.post('/suanguoidung/:id',qlUserControllers.postEditUser);
router.get('/xoanguoidung/:id',qlUserControllers.getDelUser);
//quản lý bài viết 
router.get('/quanlybaiviet',qlPostsControllers.homeQlPosts);

//quản lý danh mục bài viết
router.get('/quanlydanhmuc',qlCategoryControllers.homeQlCategory);

//quản lý liên hệ
router.get('/quanlylienhe',qlContactControllers.homeQlContact);

//Account
router.get('/login',accController.getLogin);
router.post('/login',accController.postLogin);
router.get('/logout',accController.getLogout);
router.get('/register',accController.getRegister);
router.post('/register',accController.postRegister);

module.exports = router;