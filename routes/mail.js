var express = require('express');
var router = express.Router();
var mailController=require('../controller/mailController')
/* GET users listing. */

router.route('/')
.post(mailController.sendmail);

module.exports = router;
