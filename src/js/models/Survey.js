const sequelize = require('../connection');
const { Model, DataTypes } = require('sequelize');
class Survey extends Model {}
Survey.init(
    {
        text: {
            type: DataTypes.STRING
        },
        type: {
            type: DataTypes.STRING
        },
        topic: {
            type: DataTypes.STRING
        },
        date: {
            type: DataTypes.DATE
        },
    },

    {
        sequelize,
        modelName: 'Survey',
        timestamps: false,
        freezeTableName: true
    }
);

module.exports = {
    Survey
};