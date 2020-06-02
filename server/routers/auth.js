const router = require('express').Router();
const handlers = require('../handlers');

router.post('/signup', handlers.auth.signUp);
router.post('/signin', handlers.auth.singIn);


module.exports = router;