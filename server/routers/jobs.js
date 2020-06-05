const router = require('express').Router();
const handlers = require('../handlers');

router.get('/jobs/feed', handlers.jobs.getJobs);



module.exports = router;