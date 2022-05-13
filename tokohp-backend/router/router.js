'use strict';

/* insiasi */
const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.send('ini router');
})

module.exports = { router };