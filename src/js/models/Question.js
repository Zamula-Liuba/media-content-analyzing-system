const sequelize = require('../connection');
const { Model, DataTypes } = require('sequelize');
const { Survey } = require('./Survey');
class Question extends Model {}
Question.init(
    {
        id: {
            type: DataTypes.INTEGER
        },
        type: {
            type: DataTypes.STRING
        },
        text: {
            type: DataTypes.STRING
        },
        max: {
            type: DataTypes.INTEGER
        },
        min: {
            type: DataTypes.INTEGER
        },
        Answer_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Survey,
                key: 'id'
            }
        },
        SelectedAlt_id: {
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
