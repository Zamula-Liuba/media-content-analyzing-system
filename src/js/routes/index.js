'use strict';

const { getRouter } = require('./getRouter');
const { postRouter } = require('./postRouter');
const { putRouter } = require('./putRouter');
const { deleteRouter } = require('./deleteRouter');

module.exports = {
    getRouter,
    postRouter,
    putRouter,
    deleteRouter,
}