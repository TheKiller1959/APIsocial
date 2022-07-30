const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('roles', {
    id_rol: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'users',
        key: 'rol'
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(80),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'roles',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "roles_pkey",
        unique: true,
        fields: [
          { name: "id_rol" },
        ]
      },
    ]
  });
};
