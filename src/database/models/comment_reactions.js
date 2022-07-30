const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('comment_reactions', {
    id_comment_reactions: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    id_comment: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'comments',
        key: 'id_comments'
      },
      unique: "comment_reactions_id_comment_key"
    },
    id_reaction: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'reactions',
        key: 'id_reactions'
      },
      unique: "comment_reactions_id_reaction_key"
    }
  }, {
    sequelize,
    tableName: 'comment_reactions',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "comment_reactions_id_comment_key",
        unique: true,
        fields: [
          { name: "id_comment" },
        ]
      },
      {
        name: "comment_reactions_id_reaction_key",
        unique: true,
        fields: [
          { name: "id_reaction" },
        ]
      },
      {
        name: "comment_reactions_pkey",
        unique: true,
        fields: [
          { name: "id_comment_reactions" },
        ]
      },
    ]
  });
};
