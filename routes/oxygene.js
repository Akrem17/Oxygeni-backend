var express = require('express');
var router = express.Router();
var oxygeneController=require('../controller/oxygeneController')
var loginController=require('../controller/loginController')

/* GET users listing. */

router.route('/')
.get(oxygeneController.getAllOxygenes)
.post(loginController.verifyToken,oxygeneController.createOxygene);
router.route('/one/:id')
.get(oxygeneController.getOxygenById)
.put(oxygeneController.updateOxygen)
.delete(oxygeneController.deleteOxygenById);


router.route('/user/:id')
.get(oxygeneController.getAllOxygenesOfUser)
router.route('/:region')
.get(oxygeneController.getOxygenByRegion)
router.route('/:region/:city')
.get(oxygeneController.getOxygenByVilleAndRegion)

module.exports = router;
