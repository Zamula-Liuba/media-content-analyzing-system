const sequelize = require('../connection');
const { Model, DataTypes } = require('sequelize');
class User extends Model {}
User.init(
    {
        username: {
            type: DataTypes.STRING
        },
        level:{
            type: DataTypes.INT
        },
        password: {
            type: DataTypes.STRING
        },
        mail: {
            type: DataTypes.STRING
        },
        Mentor_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Mentor,
                key: 'id'
            }
        },  
    },

    {
        sequelize,
        modelName: 'User',
        timestamps: false,
        freezeTableName: true
    }
);

module.exports = {
    User
};
