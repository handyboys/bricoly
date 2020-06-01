const router = require('express').Router();
const handlers = require('../handlers');

router.post('/signup', handlers.auth.signUp);


module.exports = router;