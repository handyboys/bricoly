const router = require('express').Router();
const handlers = require('../handlers');

router.get('/feed', handlers.jobs.getJobs);
router.get('/history/:id', handlers.jobs.getJobHistory)

module.exports = router;