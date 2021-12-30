const sequelize = require('../connection');
const { Model, DataTypes } = require('sequelize');
const { Survey } = require('./Survey');
const { SurveyState } = require('./SurveyState');
class SurveyAction extends Model {}
SurveyAction.init(
    {
        at: {
            type: DataTypes.DATE
        },
        Survey_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Survey,
                key: 'id'
            }
        },
        SurveyState_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: SurveyState,
                key: 'id'
            }
        }
    },

    {
        sequelize,
        modelName: 'SurveyAction',
        timestamps: false,
        freezeTableName: true
    }
);

module.exports = {
    SurveyAction
};