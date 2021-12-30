"use strict";

const express = require('express');
const router = express.Router();
const routers = require('./routes');

router.use('/get', routers.getRouter);
router.use('/post', routers.postRouter);
router.use('/put', routers.putRouter);
router.use('/delete', routers.deleteRouter);

router.get('/', (req, res) => {
    res.send('<h1>Api root</h1>');
});

module.exports = {
    router
};