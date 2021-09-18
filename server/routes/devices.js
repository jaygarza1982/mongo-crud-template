var express = require('express');
var router = express.Router();

var devicesController = require('../controllers/devices');
var crudController = require('../controllers/crud');
const { userAuth } = require('../middleware/auth');

const { Device } = require('../models/device');

router.post('/upsert', devicesController.upsert);
router.get('/list', userAuth, crudController.list(Device));

module.exports = router;
