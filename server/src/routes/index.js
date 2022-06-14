const { Router } = require('express');
const account = require('./account');
const user = require('./user');
const chat = require('./chat');

const router = Router();

router.use('/account', account);
router.use('/user', user);
router.use('/chat', chat);

module.exports = router;
