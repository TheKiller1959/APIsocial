const { toPromise } = require('../tools/toPromise');
const usersControllers = require('./users.controllers');

// todo:
//? get /users ADMIN
//? get /users/:id ADMIN
//? delete /users/me CLIENT (no id)
//? delete /users/:id ADMIN
//? put-patch /users/me CLIENT-USER
//? put-patch /users/:id ADMIN

const getAllUsers = async (req, res) => {
  const users = await toPromise(usersControllers.getAllUsers());
  res.status(200).json(users);
};


/*
const getAllUsers = async (req, res) => {


  const offset = req.query.offset

  const totalLength = await usersControllers.getPaginatedUsers()
  // limit, offset, size, length
  const users = await usersControllers.getPaginatedUsers(5)

  res.status(200).json({
    "_links": {
      "base": `${config.domainHost}/users`,
      "next": "/page?limit=5&start=5",
      "prev": ""
    },
    total: totalLength.length,
    limit: 5,
    size,
    results: users
  })
}
*/

const getUserById = async (req, res) => {
  const users = await usersControllers.getUserById(req.params.id_user)
  res.status(200).json(users)
};

const deleteUser = async (req, res) => {
  const users = await usersControllers.deleteUser(req.params.id_user)
  res.status(200).json(users)
}

const updateUser = async (req, res) => {
  const users = await usersControllers.editUser(req.params.id, req.body)
  if (users.error) {
    res.status(400).json(users.error)
  }
  res.status(200).json(users)
}

module.exports = {
  getAllUsers,
  getUserById,
  deleteUser,
  updateUser
}