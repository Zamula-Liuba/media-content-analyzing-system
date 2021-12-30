const sequelize = require('../connection');
const { Model, DataTypes } = require('sequelize');
class Admin extends Model {}
Admin.init(
    {
        id: {
            type: DataTypes.INT
        },
        job: {
            type: DataTypes.STRING
        },
    },

    {
        sequelize,
        modelName: 'Admin',
        timestamps: false,
        freezeTableName: true
    }
);

module.exports = {
    Admin
};
