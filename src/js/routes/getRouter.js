"use strict";

const express = require('express');
const getRouter = express.Router();
const {models} = require('../models');
const {getRoutes, getHandler} = require("./getRoutes");


getRoutes.forEach((model, route) => {
    getRouter.get(`${route}`, async (req, res) => {

        res.send(await getHandler(model).catch(e => {
            res.send({
                error: e.message,
                code: 400
            })
        }));
    });
    getRouter.get(`${route}/:id`, async (req, res) => {
        res.send((await getHandler(model).catch(e => {
            res.send({
                error: e.message,
                code: 400
            })
        }))[req.params.id - 1]);
    });
});

getRouter.get('/getSurveyResult', async (req, res) => {
    try {
        const answers = await models.Answer.findAll({
            raw: true,
            attributes: ['Expert_id', 'Question_id', 'SelectedAlt_id'],
            where: {Expert_id: req.body.expertId}
        })
        const survey = await models.Survey.findOne({where: {id: req.body.surveyId}})
        const finalAnswers = await Promise.all(answers.map(async answer => {
            const question = await models.Question.findByPk(answer.Question_id);
            const alt = await models.Alt.findByPk((await models.SelectedAlt.findByPk(answer.SelectedAlt_id)).Alt_id);
            console.log(question, alt);
            return Object.assign(answer, {question, alt});
        }));
        const result = {
            survey,
            answers: finalAnswers
        }
        res.send(result);
    } catch (e) {
        res.send({
            error: e.message,
            code: 400
        })
    }
});

getRouter.get('/getSurveyStats', async (req, res) => {
    try {
        const survey = await models.Survey.findByPk(req.body.surveyId);
        const questions = await models.Survey.findAll({
            raw: true,
            where: {
                id: survey.id
            }
        });
        const answers = (await Promise.all(questions.flatMap(async q => {
            return await models.Answer.findAll({
                raw: true,
                where: {
                    Question_id: q.id
                }
            })
        })))[0];
        const experts = new Set(answers.map(a => a.Expert_id));
        const result = {
            "SurveyStats": survey,
            "answer_count": answers.length,
            "questions_count": questions.length,
            "experts_answered": experts.size,
            "extended_data": {
                answers,
                questions,
                experts: await models.Expert.findAll({
                    where: {
                        id: [...experts]
                    }
                })
            },
        };
        res.send(result);
    } catch (e) {
        res.send({
            error: e.message,
            code: 400
        })
    }

});

getRouter.get('/getInvitation', async (req, res) => {
    try {
        const expert = await models.Expert.findByPk(req.body.expertId);
        const userByExpert = await models.User.findByPk(expert.User_id);
        const survey = await models.Survey.findByPk(req.body.surveyId);
        const invitation = {
            expert_id: expert.User_id,
            username: userByExpert.username,
            email: userByExpert.mail,
            text:
                `Запрошуємо пройти опитування ${survey.text}!
            Тема: ${survey.topic},
            Дедлайн: ${survey.date}, 
            <a href="${process.env.BASE_URL || 'http://localhost:3000'}/passSurvey/${req.body.surveyId}">Перейти за посиланням </a>`
        }
        res.send(invitation);
    } catch (e) {
        res.send({
            error: e.message,
            code: 400
        })
    }
})

getRouter.get('*', (req, res) => {
    res.send({
        error: 'Not found',
        code: 404
    })
})

module.exports = {
    getRouter
}