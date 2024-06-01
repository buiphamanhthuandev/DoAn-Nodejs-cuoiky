const express = require('express');

const layoutAdmin = require('../../controllers/layoutAdminControllers/homeAdminControllers');
const router = express.Router();

//Layout Admin 
router.get('/admin',layoutAdmin.getHomeAdmin);

module.exports = router;