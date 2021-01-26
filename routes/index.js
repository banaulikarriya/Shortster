var express = require('express');
var router = express();

var shortCodeController = require('../controller/shortcodeController');

//List
router.get('/', shortCodeController.list);

//view for add short code
router.get('/addShortcode', shortCodeController.viewAddShortcode);
router.post('/addShortcode', shortCodeController.addShortcode);

//view shortcode details
router.get('/:shortcode/stats', shortCodeController.getShortcodeDetails);

//view shortcode url
router.get('/:shortcode', shortCodeController.getUrl);

module.exports = router;