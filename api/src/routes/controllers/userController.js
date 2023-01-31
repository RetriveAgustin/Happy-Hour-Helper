const { User } = require("../../db");
const bcryptjs = require('bcryptjs');
const {
  getModels,
  getModelsById,
  postModels,
  putModels,
  deleteModels,
  restoreModels,
  getModelsByEmail
} = require("../utils/mainUtils");

const getUser = async (req, res) => {
  try {
    const { name } = req.query;
    const users = await getModels(User, name);
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.body;
    const user = getModelsById(User, id);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({error: error.message });
  }
};

const getUserByEmail = async (req, res) => {
  try {
    const { email } = req.body;
    const user = getModelsByEmail(User, email);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({error: error.message });
  }
};

const registerUser = async (req, res) => {
  try {
    const { id, name, lastname, mail, password, created_in_google, is_admin } = req.body;
    const passwordHash = password !== null ? await bcryptjs.hash(password, 8) : null;
    const user = await postModels(User, {id, name, lastname, mail, password: passwordHash, created_in_google, is_admin})
    if (user) {
      res.status(200).send('User registered!');
    } else {
      res.status(400).send("User couldn't be created");
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { mail, password } = req.body;
    const user = await User.findAll({where: {
      mail: mail
    }})
    if (user[0]) {
      const compare = user[0].password === null && user[0].created_in_google === true ? true : await bcryptjs.compare(password, user[0].password);
      if (compare) {
        res.status(200).send('User logged!')
      }
      else {
        res.status(400).send('Wrong password!')
      }
    }
    else {
      res.status(400).send("Email doesn't exist!")
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const putUser = async (req, res) => {
  try {
    const { id, properties } = req.body;
    const result = await putModels(User, id, properties);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.body;
    const updated = await deleteModels(User, id);
    res.status(200).json(updated);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const restoreUser = async (req, res) => {
  try {
    const { id } = req.body;
    const restored = await restoreModels(User, id);
    res.status(200).json(restored)
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = {
  getUser,
  getUserById,
  registerUser,
  loginUser,
  putUser,
  deleteUser,
  restoreUser
};
