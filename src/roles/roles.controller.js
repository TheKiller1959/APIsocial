const roles = require('../database/models/init-models').initModels().roles
const uuid = require('uuid');

const createNewRole = async (data) => {
  const id = uuid.v4()
  const newRole = await roles.create({
    id_rol : id,
    ...data
  })
  return newRole
};

const getAllRoles = async () => {
  const allRoles = await roles.findAll()
  return allRoles
}

const getRoleById = async (id) => {
  const role = await roles.findOne({
    where: {
      id_rol: id
    }
  })
  return role
}

const updateRole = async (id, data) => {
  const role = await roles.update({
    ...data
  }, {
    where: {
      id_rol: id
    }
  })
  return role
}

const deleteRole = async (id) => {
  const role = await roles.destroy({
    where: {
      id_rol: id
    }
  })
  return role
}


module.exports = {
  createNewRole,
  getAllRoles,
  getRoleById,
  updateRole,
  deleteRole
};