var express = require('express');
var router = express();

var shortCodeController = require('../controller/shortcodeController');

//list
//router.get('/', shortCodeController.list);

//view for add short code
router.get('/addShortcode', shortCodeController.viewAddShortcode);
router.post('/addShortcode', shortCodeController.addShortcode);


module.exports = router;