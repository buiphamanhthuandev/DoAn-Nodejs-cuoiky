const express = require('express');

const homeUserControllers = require('../../controllers/layoutUserControllers/homeUserControllers');
const chiTietPostControllers = require('../../controllers/layoutUserControllers/chiTietPostControllers');
const lienHeControllers = require('../../controllers/layoutUserControllers/lienHeControllers');
const timKiemPostControllers = require('../../controllers/layoutUserControllers/timKiemPostControllers');

const router = express.Router();

//Layout User
router.get('/',homeUserControllers.getHomeUser);
router.get('/phanloai',homeUserControllers.getPhanLoaiPosts);
router.get('/chitietbaiviet',chiTietPostControllers.getChiTietBaiViet);
router.post('/thembinhluan',chiTietPostControllers.postThemBinhLuan);
router.post('/lienhe',lienHeControllers.postLienHe);
router.post('/searchbaiviet',timKiemPostControllers.postTimKiem);

module.exports = router;