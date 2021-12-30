const sequelize = require('../connection');
const { Model, DataTypes } = require('sequelize');
const { User } = require('./User');
const { SelectedAlt } = require('./SelectedAlt');
class Answer extends Model {}
Answer.init(
    {
        id: {
          type: DataTypes.INTEGER,
        },
        text: {
            type: DataTypes.STRING
        },
        date: {
            type: DataTypes.DATE
        },
        User_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Expert,
                key: 'id'
            }
        },
        Report_date: {
            type: DataTypes.DATE,
            references: {
                model: Report,
                key: 'date'
            }
        }
    },

    {
        sequelize,
        modelName: 'UserReport',
        timestamps: false,
        freezeTableName: true
    }
);

module.exports = {
    Answer
};
