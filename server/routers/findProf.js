const router = require('express').Router();
const handlers = require('../handlers');

router.get('/findProf', handlers.findProf.getAllProfessionals);

module.exports =router;