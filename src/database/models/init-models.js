var DataTypes = require("sequelize").DataTypes;
var _comment_reactions = require("./comment_reactions");
var _comments = require("./comments");
var _message_users = require("./message_users");
var _messages = require("./messages");
var _post_reactions = require("./post_reactions");
var _posts = require("./posts");
var _reactions = require("./reactions");
var _roles = require("./roles");
var _users = require("./users");

const Sequelize = require('sequelize');
require('dotenv').config()
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config');

const configObj = config[env]

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[configObj.use_env_variable], configObj);
} else {
  sequelize = new Sequelize(configObj.database, configObj.username, configObj.password, configObj);
};

function initModels() {
  var comment_reactions = _comment_reactions(sequelize, DataTypes);
  var comments = _comments(sequelize, DataTypes);
  var message_users = _message_users(sequelize, DataTypes);
  var messages = _messages(sequelize, DataTypes);
  var post_reactions = _post_reactions(sequelize, DataTypes);
  var posts = _posts(sequelize, DataTypes);
  var reactions = _reactions(sequelize, DataTypes);
  var roles = _roles(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  comment_reactions.belongsTo(comments, { as: "id_comment_comment", foreignKey: "id_comment"});
  comments.hasOne(comment_reactions, { as: "comment_reaction", foreignKey: "id_comment"});
  posts.belongsTo(comments, { as: "comments_comment", foreignKey: "comments"});
  comments.hasMany(posts, { as: "posts", foreignKey: "comments"});
  message_users.belongsTo(messages, { as: "id_message_message", foreignKey: "id_message"});
  messages.hasOne(message_users, { as: "message_user", foreignKey: "id_message"});
  message_users.belongsTo(messages, { as: "id_sender_message", foreignKey: "id_sender"});
  messages.hasOne(message_users, { as: "id_sender_message_user", foreignKey: "id_sender"});
  post_reactions.belongsTo(posts, { as: "id_post_post", foreignKey: "id_post"});
  posts.hasOne(post_reactions, { as: "post_reaction", foreignKey: "id_post"});
  comment_reactions.belongsTo(reactions, { as: "id_reaction_reaction", foreignKey: "id_reaction"});
  reactions.hasOne(comment_reactions, { as: "comment_reaction", foreignKey: "id_reaction"});
  post_reactions.belongsTo(reactions, { as: "id_reaction_reaction", foreignKey: "id_reaction"});
  reactions.hasOne(post_reactions, { as: "post_reaction", foreignKey: "id_reaction"});
  comments.belongsTo(users, { as: "author_user", foreignKey: "author"});
  users.hasOne(comments, { as: "comment", foreignKey: "author"});
  message_users.belongsTo(users, { as: "id_receiver_user", foreignKey: "id_receiver"});
  users.hasOne(message_users, { as: "message_user", foreignKey: "id_receiver"});
  messages.belongsTo(users, { as: "sender", foreignKey: "sender_id"});
  users.hasOne(messages, { as: "message", foreignKey: "sender_id"});
  posts.belongsTo(users, { as: "author_user", foreignKey: "author"});
  users.hasOne(posts, { as: "post", foreignKey: "author"});
  roles.belongsTo(users, { as: "id_rol_user", foreignKey: "id_rol"});
  users.hasOne(roles, { as: "role", foreignKey: "id_rol"});

  return {
    comment_reactions,
    comments,
    message_users,
    messages,
    post_reactions,
    posts,
    reactions,
    roles,
    users,
  };
}

module.exports.initModels = initModels;
module.exports.sequelize = sequelize;