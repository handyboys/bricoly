const router = require('express').Router();
const handlers = require('../handlers');

router.get('/feed', handlers.jobs.getJobs);
router.post('/feed', handlers.jobs.postJobs);
module.exports = router;