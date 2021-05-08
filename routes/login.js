var express = require('express');
var router = express.Router();
var loginController=require('../controller/loginController')
/* GET users listing. */

router.route('/')
.post(loginController.login);

router.route('/verify').
post(loginController.verifyToken)
module.exports = router;
