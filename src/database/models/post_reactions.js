const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('post_reactions', {
    id_post_reactions: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    id_post: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'posts',
        key: 'id_post'
      },
      unique: "post_reactions_id_post_key"
    },
    id_reaction: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'reactions',
        key: 'id_reactions'
      },
      unique: "post_reactions_id_reaction_key"
    }
  }, {
    sequelize,
    tableName: 'post_reactions',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "post_reactions_id_post_key",
        unique: true,
        fields: [
          { name: "id_post" },
        ]
      },
      {
        name: "post_reactions_id_reaction_key",
        unique: true,
        fields: [
          { name: "id_reaction" },
        ]
      },
      {
        name: "post_reactions_pkey",
        unique: true,
        fields: [
          { name: "id_post_reactions" },
        ]
      },
    ]
  });
};
