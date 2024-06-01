const express = require('express');
const accController = require('../../controllers/accountControllers/accControllers');

const router = express.Router();
//Account
router.get('/login',accController.getLogin);
router.post('/login',accController.postLogin);
router.get('/logout',accController.getLogout);
router.get('/register',accController.getRegister);
router.post('/register',accController.postRegister);


module.exports = router;