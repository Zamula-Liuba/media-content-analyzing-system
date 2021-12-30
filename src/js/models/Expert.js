const sequelize = require('../connection');
const { Model, DataTypes } = require('sequelize');
const { User } = require('./User');
class Expert extends Model {}
Expert.init(
    {
        job: {
            type: DataTypes.STRING
        },
        User_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: User,
                key: 'id'
            }
        },
    },

    {
        sequelize,
        modelName: 'Expert',
        timestamps: false,
        freezeTableName: true
    }
);

module.exports = {
    Expert
};