const router = require('express').Router();
const handlers = require('../handlers');



router.get('/notification', handlers.jobNot.getAllNot);



module.exports = router;