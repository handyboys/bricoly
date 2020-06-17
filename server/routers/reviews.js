const router = require('express').Router();
const handlers = require('../handlers');

router.post('/reviews', handlers.createReviews.createReviews)

module.exports = router;