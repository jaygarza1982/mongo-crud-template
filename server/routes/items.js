var express = require('express');
var router = express.Router();

var crudController = require('../controllers/crud');

const { Item } = require('../models/item');

router.get('/list', crudController.list(Item));

module.exports = router;
