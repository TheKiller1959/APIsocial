const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reactions', {
    id_reactions: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    reaction_img: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'reactions',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "reactions_pkey",
        unique: true,
        fields: [
          { name: "id_reactions" },
        ]
      },
    ]
  });
};
