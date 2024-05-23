const express = require('express');

const accController = require('../controllers/accControllers');
const layoutUser = require('../controllers/layoutUser');
const layoutAdmin = require('../controllers/layoutAdmin');
const router = express.Router();
//Layout User
router.get('/',layoutUser.getHomeUser);

//Layout Admin 
router.get('/admin',layoutAdmin.getHomeAdmin);

//Account
router.get('/login',accController.getLogin);
router.post('/login',accController.postLogin);
router.get('/logout',accController.getLogout);
router.get('/register',accController.getRegister);
router.post('/register',accController.postRegister);

module.exports = router;