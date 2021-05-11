var express = require('express');
var router = express.Router();
var forgetPasswordController=require('../controller/forgetpasswordController')
/* GET users listing. */

router.route('/')
.post(forgetPasswordController.forgetpassword);

router.route('/:id/:token')

.post(forgetPasswordController.reset);
module.exports = router;
