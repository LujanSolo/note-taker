const router = require('express').Router();

const notesRouter = require('./notes');

router.get('/notes');

router.use('/notes', notesRouter);

module.exports = router;