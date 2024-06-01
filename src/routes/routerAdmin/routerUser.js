const express = require('express');
const router = express.Router();

const qlUserControllers = require('../../controllers/layoutAdminControllers/qlUserControllers');
//quản lý tài khoản
router.get('/quanlynguoidung',qlUserControllers.homeQlUser);
router.get('/themnguoidung',qlUserControllers.getAddUser);
router.post('/themnguoidung',qlUserControllers.postAddUser);
router.get('/suanguoidung/:id',qlUserControllers.getEditUser);
router.post('/suanguoidung/:id',qlUserControllers.postEditUser);
router.get('/xoanguoidung/:id',qlUserControllers.getDelUser);

module.exports = router;