const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('comments', {
    id_comments: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    author: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id_user'
      },
      unique: "comments_author_key"
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'comments',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "comments_author_key",
        unique: true,
        fields: [
          { name: "author" },
        ]
      },
      {
        name: "comments_pkey",
        unique: true,
        fields: [
          { name: "id_comments" },
        ]
      },
    ]
  });
};
