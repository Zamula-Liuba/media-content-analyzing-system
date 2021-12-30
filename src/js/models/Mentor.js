const sequelize = require('../connection');
const { Model, DataTypes } = require('sequelize');
class Mentor extends Model {}
Mentor.init(
    {
      id: {
        type: DataTypes.INTEGER
      },  
        level:{
            type: DataTypes.INTEGER
        },
        Admin_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Admin,
                key: 'id'
            }
        },  
    },

    {
        sequelize,
        modelName: 'Mentor',
        timestamps: false,
        freezeTableName: true
    }
);

module.exports = {
    User
};
