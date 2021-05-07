var express = require('express');
var router = express.Router();
var oxygeneController=require('../controller/oxygeneController')
/* GET users listing. */

router.route('/')
.get(oxygeneController.getAllOxygenes)
.post(oxygeneController.createOxygene);
router.route('/:region')
.get(oxygeneController.getOxygenByRegion)
router.route('/:region/:city')
.get(oxygeneController.getOxygenByVilleAndRegion)
module.exports = router;
