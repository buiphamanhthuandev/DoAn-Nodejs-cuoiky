const express = require('express');


const router = express.Router();
const qlCategoryControllers = require('../../controllers/layoutAdminControllers/qlCategoryControllers');

//quản lý danh mục bài viết
router.get('/quanlydanhmuc',qlCategoryControllers.homeQlCategory);
router.get('/themdanhmuc',qlCategoryControllers.getAddCategory);
router.post('/themdanhmuc',qlCategoryControllers.postAddCategory);
router.get('/suadanhmuc/:id',qlCategoryControllers.getEditCategory);
router.post('/suadanhmuc/:id',qlCategoryControllers.postEditCategory);
router.get('/xoadanhmuc/:id',qlCategoryControllers.getDelCategory);
module.exports = router;