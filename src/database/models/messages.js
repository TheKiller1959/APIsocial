const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('messages', {
    id_messages: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    sender_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id_user'
      },
      unique: "messages_sender_id_key"
    },
    subject: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    content: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    receiver_id: {
      type: DataTypes.UUID,
      allowNull: true,
      unique: "messages_receiver_id_key"
    }
  }, {
    sequelize,
    tableName: 'messages',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "messages_pkey",
        unique: true,
        fields: [
          { name: "id_messages" },
        ]
      },
      {
        name: "messages_receiver_id_key",
        unique: true,
        fields: [
          { name: "receiver_id" },
        ]
      },
      {
        name: "messages_sender_id_key",
        unique: true,
        fields: [
          { name: "sender_id" },
        ]
      },
    ]
  });
};
