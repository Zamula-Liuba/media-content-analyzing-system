const sequelize = require('../connection');
const { Model, DataTypes } = require('sequelize');
const { Alt } = require('./Alt')
class SelectedAlt extends Model {}
SelectedAlt.init(
    {
        Alt_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Alt,
                key: 'id'
            }
        },
    },

    {
        sequelize,
        modelName: 'SelectedAlt',
        timestamps: false,
        freezeTableName: true
    }
);

module.exports = {
    SelectedAlt
};