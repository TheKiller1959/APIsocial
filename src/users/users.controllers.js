const users = require('../database/models/init-models').initModels().users;

//Solo administradores
const getAllUsers = async () => {
  const user = await users.findAll({
    attributes: {
      exclude: ["password"]
    }
  })
  return user
};

//Solo administradores
const getUserById = async (id) => {
  const user = await users.findByPk(id, {
    attributes: {
      exclude: ["password"]
    }
  })
  return user
};

//clientes y administradores
const deleteUser = async (id) => {
  const user = await users.destroy({
    where: {
      id_user: id
    }
  })
  return user
}

// cualquier rol
const editUser = async (id, body) => {
  try {
    const user = await users.update(body, {
      where: {
        id_user: id
      }
    })
    return {
      message: `User with id: ${id} updated succesfully.`,
      user
    }
  } catch (error) {
    return error
  }
}
// todo:
// ? Crear una funcion que genere un token alfanumerico aleatorio de 8 caracteres
// ? Generar un nuevo token y agregar un nuevo registro a la tabla de verify_tokens, con el userId para enlazar el token

const getPaginatedUsers = async (offset) => {
  // limit : 5

  if (offset) {
    const data = await users.findAll({
      limit: 5,
      offset
    })
    return data
  } else {
    const data = await users.findAll()
    return data

  }
};

module.exports = {
  getAllUsers,
  getUserById,
  deleteUser,
  editUser,
  getPaginatedUsers
};