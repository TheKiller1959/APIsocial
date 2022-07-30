const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('message_users', {
    id_message_users: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    id_message: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'messages',
        key: 'id_messages'
      },
      unique: "message_users_id_message_key"
    },
    id_sender: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'messages',
        key: 'sender_id'
      },
      unique: "message_users_id_sender_key"
    },
    id_receiver: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id_user'
      },
      unique: "message_users_id_receiver_key"
    }
  }, {
    sequelize,
    tableName: 'message_users',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "message_users_id_message_key",
        unique: true,
        fields: [
          { name: "id_message" },
        ]
      },
      {
        name: "message_users_id_receiver_key",
        unique: true,
        fields: [
          { name: "id_receiver" },
        ]
      },
      {
        name: "message_users_id_sender_key",
        unique: true,
        fields: [
          { name: "id_sender" },
        ]
      },
      {
        name: "message_users_pkey",
        unique: true,
        fields: [
          { name: "id_message_users" },
        ]
      },
    ]
  });
};
