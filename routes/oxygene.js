var express = require('express');
var router = express.Router();
var oxygeneController=require('../controller/oxygeneController')
var loginController=require('../controller/loginController')

/* GET users listing. */

router.route('/')
.get(loginController.verifyToken,oxygeneController.getAllOxygenes)
.post(loginController.verifyToken,oxygeneController.createOxygene);
router.route('/:region')
.get(oxygeneController.getOxygenByRegion)
router.route('/:region/:city')
.get(oxygeneController.getOxygenByVilleAndRegion)
module.exports = router;
