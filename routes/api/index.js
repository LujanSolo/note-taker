const router = require('express').Router();

const notesRoutes = require('./notes');

router.use('/notes', notesRoutes);

router.get('/notes');

const path = require('path');

module.exports = router;