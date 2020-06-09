 const router = require('express').Router();
const handlers = require('../handlers');


router.get( '/select-category', handlers.jobPost.selectCategory);
router.get('/services/:id', handlers.jobPost.selectService);
router.post('/jobDraft', handlers.jobPost.jobDraft);

module.exports = router;