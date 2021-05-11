var express = require('express');
var router = express.Router();
var forgetPasswordController=require('../controller/forgetpasswordController')
/* GET users listing. */

router.route('/')
.post(forgetPasswordController.forgetpassword);

router.route('/reset-password/:id/:token')
.get(forgetPasswordController.resetpassword)
.post(forgetPasswordController.reset);
module.exports = router;
