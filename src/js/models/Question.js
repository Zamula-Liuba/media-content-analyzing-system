const sequelize = require('../connection');
const { Model, DataTypes } = require('sequelize');
const { Survey } = require('./Survey');
class Question extends Model {}
Question.init(
    {
        type: {
            type: DataTypes.STRING
        },
        text: {
            type: DataTypes.STRING
        },
        Survey_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Survey,
                key: 'id'
            }
        },
    },

    {
        sequelize,
        modelName: 'Question',
        timestamps: false,
        freezeTableName: true
    }
);

module.exports = {
    Question
};