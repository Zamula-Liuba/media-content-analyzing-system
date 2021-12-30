"use strict";

const {models} = require('../models');

const deleteRoutes = new Map();

const restricted = [
    'Expert',
    'Survey',
    'Question',
    'SurveyState',
    'SelectedAlt',
    'Alt',
];

for (const model of models) {
    if (model.name === 'User') {
        deleteRoutes.set('/delete' + model.name, async (req) => {
            await models.Expert.destroy({
                    where: {
                        User_id: req.params.id
                    }
                }
            );
            await model.destroy({
                where: {
                    id: req.params.id
                }
            });
        });
    } else if(!restricted.includes(model.name) ) {
        deleteRoutes.set(`/delete${model.name}`, async (req) => {
            await model.destroy({
                where: {
                    id: req.params.id
                }
            });
        })
    }
}

module.exports = {
    deleteRoutes
}
