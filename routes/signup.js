var express = require('express');
var router = express.Router();
var signupController=require('../controller/signupController')
/* GET users listing. */

router.route('/')
.post(signupController.signup);


module.exports = router;
