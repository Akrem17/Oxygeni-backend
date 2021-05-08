var express = require('express');
var router = express.Router();
var userController=require('../controller/userController')
/* GET users listing. */

router.route('/')
.get(userController.getAllUsers)
.post(userController.createUser);
router.route('/:id')
.get(userController.getUserById);


module.exports = router;
