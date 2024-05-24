const express = require('express');

const accController = require('../controllers/accControllers');
const homeUserControllers = require('../controllers/layoutUserControllers/homeUserControllers');
const chiTietPostControllers = require('../controllers/layoutUserControllers/chiTietPostControllers');
const lienHeControllers = require('../controllers/layoutUserControllers/lienHeControllers');
const layoutAdmin = require('../controllers/layoutAdmin');
const timKiemPostControllers = require('../controllers/layoutUserControllers/timKiemPostControllers');
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

//Account
router.get('/login',accController.getLogin);
router.post('/login',accController.postLogin);
router.get('/logout',accController.getLogout);
router.get('/register',accController.getRegister);
router.post('/register',accController.postRegister);

module.exports = router;