'use strict';
const { models } = require('../models');

const getHandler = async (model) => {
    return await model.findAll();
};

const getRoutes = new Map();

for(const model of models) {
    getRoutes.set('/' + model.name + 's', model);
}

module.exports = {
    getHandler, getRoutes
}