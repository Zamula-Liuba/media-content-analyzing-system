const sequelize = require('../connection');
const { Model, DataTypes } = require('sequelize');
const { User } = require('./User');
const { SelectedAlt } = require('./SelectedAlt');
class Answer extends Model {}
Answer.init(
    {
        text: {
            type: DataTypes.STRING
        },
        date: {
            type: DataTypes.DATE
        },
        Expert_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Expert,
                key: 'id'
            }
        },
        SelectedAlt_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: SelectedAlt,
                key: 'id'
            }
        }
    },

    {
        sequelize,
        modelName: 'Answer',
        timestamps: false,
        freezeTableName: true
    }
);

module.exports = {
    Answer
};
