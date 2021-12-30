const sequelize = require('../connection');
const { Model, DataTypes } = require('sequelize');
class Alt extends Model {}
Alt.init(
    {
        type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        text: {
            type: DataTypes.STRING,
        }
    },

    {
        sequelize,
        modelName: 'Alt',
        timestamps: false,
        freezeTableName: true
    }
);

module.exports = {
    Alt
};