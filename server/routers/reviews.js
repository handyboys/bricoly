const router = require('express').Router();
const handlers = require('../handlers');

router.post('/reviews', handlers.createReviews.updateReviews)

module.exports = router;