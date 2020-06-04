const router = require('express').Router();
const handlers = require('../handlers');


router.get('/select-category', handlers.jobPost.selectCategory);

module.exports = router;