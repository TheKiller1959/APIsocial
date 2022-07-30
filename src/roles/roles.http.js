const roleControllers = require('./roles.controller');
const toPromise = require('../tools/toPromise').toPromise


const createRole = async (req, res) => {
  if (!req.body) {
    return res.status(400).json({ message: 'Invalid Data' })
  }

  const [newRole, err] = await toPromise(roleControllers.createNewRole(req.body))
  if (err) {
    console.log(err)
    return res.status(400).json({ message: 'Internal Error' })
  }

  res.status(201).json(newRole)
};

const getAllRoles = async (req, res) => {
  const [allRoles, err] = await toPromise(roleControllers.getAllRoles())
  if (err) {
    console.log(err)
    return res.status(400).json({ message: 'Internal Error' })
  }

  res.status(200).json(allRoles)
}

const getRoleById = async (req, res) => {
  const [role, err] = await toPromise(roleControllers.getRoleById(req.params.id))
  if (err) {
    return res.status(400).json({ message: 'Internal Error' })
  }

  res.status(200).json(role)
}

const editRole = async (req, res) => {
  if (!req.body) {
    return res.status(400).json({ message: 'Invalid Data' })
  }

  const [role, err] = await toPromise(roleControllers.updateRole(req.params.id, req.body))
  if (err) {
    console.log(err)
    return res.status(400).json({ message: 'Internal Error' })
  }

  res.status(200).json(role)
}

const deleteRole = async (req, res) => {
  const [role, err] = await toPromise(roleControllers.deleteRole(req.params.id))
  if (err) {
    console.log(err)
    return res.status(400).json({ message: 'Internal Error' })
  }

  res.status(200).json(role)
}

module.exports = {
  createRole,
  getAllRoles,
  getRoleById,
  editRole,
  deleteRole
};