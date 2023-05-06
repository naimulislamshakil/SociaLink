const router = require('express').Router();
const Collaction = require('../../Collaction/user.collaction');
const { verifyToken } = require('../../Middleware/verifyToken');

router.route('/auth/register').post(Collaction.createUserCollaction);
router.route('/auth/login').post(Collaction.loginUserCollaction);
router.route('/auth/me').get(verifyToken, Collaction.getMeCollaction);
router.route('/getUsers').get(verifyToken, Collaction.getAllUserCollaction);

module.exports = router;
