"use strict";

const express = require('express');
const putRouter = express.Router();
const {models} = require('../models');

putRouter.put('/updateSurvey', async (req, res) => {
    if (!req.body.updateData) {
        res.send(JSON.stringify({
            error: "updateData is empty. Bad Request",
            code: "400"
        }))
        return;
    }
    try {
        const survey = await models.Survey.findByPk(req.body.surveyId);
        await survey.update(req.body.updateData);
        res.send('{response: 1}');
    } catch (e) {
        res.send({
            error: e.message,
            code: 400
        })
    }
});

putRouter.put('/updateStatus', async (req, res) => {
    if (!req.body.updateData) {
        res.send(JSON.stringify({
            error: "updateData is empty. Bad Request",
            code: "400"
        }))
        return;
    }
    try {
        const status = await models.SurveyAction.findOne({
            where: {
                Survey_id: req.body.surveyId
            }
        });
        await status.update(req.body.updateData);
        res.send('{response: 1}');
    } catch (e) {
        res.send({
            error: e.message,
            code: 400
        })
    }
});

putRouter.put('*', (req, res) => {
    res.send({
        error: 'Not found',
        code: 404
    })
});

module.exports = {
    putRouter
};