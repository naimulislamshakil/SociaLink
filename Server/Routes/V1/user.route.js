const router = require('express').Router();
const Collaction = require('../../Collaction/user.collaction');

router.route('/auth/register').post(Collaction.createUserCollaction);
router.route('/auth/login').post(Collaction.loginUserCollaction);

module.exports = router;
