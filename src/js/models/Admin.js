const sequelize = require('../connection');
const { Model, DataTypes } = require('sequelize');
class Admin extends Model {}
User.init(
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
