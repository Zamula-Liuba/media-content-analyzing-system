"use strict";

const express = require('express');
const { deleteRoutes } = require('./deleteRoutes');
const deleteRouter = express.Router();


deleteRoutes.forEach((cb, route) => {
    deleteRouter.delete(route + '/:id', async (req, res) => {
        try {
            await cb(req);
            res.send('{response: 1}');
        }
        catch (e) {
            res.send({
                error: e.message,
                code: 400
            })
        }

    })
})

deleteRouter.delete('*', (req, res) => {
    res.send({
        error: 'Not found',
        code: 404
    })
});

module.exports = {
    deleteRouter
};