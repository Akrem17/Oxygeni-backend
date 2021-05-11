var express = require('express');
var router = express.Router();
var forgetPasswordController=require('../controller/forgetpasswordController')
var userController=require('../controller/userController')

/* GET users listing. */

router.route('/')
.post(forgetPasswordController.forgetpassword);

router.route('/:id/:token')

.post(forgetPasswordController.reset,userController.updateById);
module.exports = router;
