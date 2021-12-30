"use strict";

const express = require('express');
const postRouter = express.Router();
const {models} = require('../models');

const getActionId = (string) => {
    switch (string) {
        case 'Done': return 1
        case 'Progress': return 2
        case 'Checking': return 3
        case 'Deleted': return 4
    }
}

postRouter.post(`/newAnswer`, async (req, res) => {
    try {
        await models.Answer.create({
            text: req.body.text,
            date: req.body.date,
            Expert_id: req.body.expert,
            Question_id: req.body.question,
            SelectedAlt_id: req.body.alt,
        });
        res.send('{response: 1}');
    }
    catch (e) {
        res.send({
            error: e.message,
            code: 400
        })
    }

});

postRouter.post(`/newUser`, async (req, res) => {
    try {
        await models.User.create({
            mail: req.body.mail,
            username: req.body.username,
        });
        res.send('{response: 1}');
    }
    catch (e) {
        res.send({
            error: e.message,
            code: 400
        })
    }

});

postRouter.post(`/newExpert`, async (req, res) => {
    try {
        await models.Expert.create({
            job: req.body.job,
            User_id: req.body.id,
        });
        res.send('{response: 1}');
    }
    catch (e) {
        res.send({
            error: e.message,
            code: 400
        })
    }

});

postRouter.post(`/newSurvey`, async (req, res) => {
    try {
        await models.Survey.create({
            text: req.body.text,
            type: req.body.type,
            topic: req.body.topic,
            date: req.body.date,
        });
        await models.SurveyAction.create({
            at: Date.now(),
            Survey_id: (await models.Survey.findAll()).length - 1,
            SurveyState_id: 3,
        });
        res.send('{response: 1}');
    }
    catch (e) {
        res.send({
            error: e.message,
            code: 400
        })
    }
});

postRouter.post('/newAction', async (req, res) => {
    try {
        await models.SurveyAction.create({
            at: Date.now(),
            Survey_id: req.body.surveyId,
            SurveyState_id: getActionId(req.body.progress),
        });
        res.send('{response: 1}');
    }
    catch (e) {
        res.send({
            error: e.message,
            code: 400
        })
    }

});

postRouter.post('*', (req, res) => {
    res.send({
        error: 'Not found',
        code: 404
    })
});

module.exports = {
    postRouter
};