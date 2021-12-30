const sequelize = require('../connection');
const { Model, DataTypes } = require('sequelize');
const { Survey } = require('./Survey');
class Report extends Model {}
Report.init(
    {
        date: {
            type: DataTypes.DATE
        },
    },

    {
        sequelize,
        modelName: 'Report',
        timestamps: false,
        freezeTableName: true
    }
);

module.exports = {
    Report
};
