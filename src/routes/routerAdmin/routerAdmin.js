const express = require('express');

const layoutAdmin = require('../../controllers/layoutAdmin');
const router = express.Router();

//Layout Admin 
router.get('/admin',layoutAdmin.getHomeAdmin);

module.exports = router;