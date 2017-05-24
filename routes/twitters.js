const express = require('express');
const api = require('../controllers/twitterController')
const router = express.Router()

router.post('/search', api.searchSomething)
// router.post('/timeline', api.timeLine)

module.exports = router
