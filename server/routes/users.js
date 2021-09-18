var express = require('express');
var router = express.Router();

var usersController = require('../controllers/users');
const { userAuth } = require('../middleware/auth');

router.post('/login', usersController.login);
router.post('/logout', usersController.logout);
router.get('/info', userAuth, usersController.info);

module.exports = router;
