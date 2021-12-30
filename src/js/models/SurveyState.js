const sequelize = require('../connection');
const { Model, DataTypes } = require('sequelize');
class SurveyState extends Model {}
SurveyState.init(
    {
         name: {
            type: DataTypes.STRING
        },
    },

    {
        sequelize,
        modelName: 'SurveyState',
        timestamps: false,
        freezeTableName: true
    }
);

module.exports = {
    SurveyState
};