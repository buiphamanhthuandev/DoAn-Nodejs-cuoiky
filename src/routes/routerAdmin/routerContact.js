const express = require('express');
const router = express.Router();

const qlContactControllers = require('../../controllers/layoutAdminControllers/qlContactControllers');

//quản lý liên hệ
router.get('/quanlylienhe',qlContactControllers.homeQlContact);

module.exports = router;