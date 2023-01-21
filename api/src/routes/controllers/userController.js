const { User } = require("../../db");
<<<<<<< HEAD
const admin = require('../utils/firebase-config.js');
=======
const admin = require("../utils/firebase-config.js");
>>>>>>> f6234c92f7265e1727e62c808b1be545c9930094
const {
  getModels,
  getModelsById,
  postModels,
  putModels,
  deleteModels,
<<<<<<< HEAD
=======
  restoreModels
>>>>>>> f6234c92f7265e1727e62c808b1be545c9930094
} = require("../utils/mainUtils");

const getUser = async (req, res) => {
  try {
    const { name } = req.query;
<<<<<<< HEAD
    const users = name ? getModels(User, name) : getModels(User);
=======
    const users = await getModels(User, name);
>>>>>>> f6234c92f7265e1727e62c808b1be545c9930094
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ error: err.message });
  }
};

<<<<<<< HEAD
const postUser = async (req, res) => {
  // try {
  //   const { id, token, name, lastname, mail, password, favourites, created_in_google } = req.body;
  //   let userInfo;
  //   if (token) {
  //     userInfo = await admin.auth().verifyIdToken(token) // trae credenciales/datos de usuario
  // }
  //   const user = token ? await postModels(User, {id, name, lastname, mail, password, favourites, created_in_google}) : await postModels(User, {id, name, lastname, mail, password, favourites, created_in_google});
=======
const getUserById = async (req, res) => {
  try {
    const { id } = req.body;
    const user = getModelsById(User, id);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({error: error.message });
  }
};

const postUser = async (req, res) => {
  // try {
  //   const {
  //     id,
  //     token,
  //     name,
  //     lastname,
  //     mail,
  //     password,
  //     favourites,
  //     created_in_google,
  //   } = req.body;
  //   let userInfo;
  //   if (token) {
  //     userInfo = await admin.auth().verifyIdToken(token); // trae credenciales/datos de usuario
  //   }
  //   const user = token
  //     ? await postModels(User, {
  //         id,
  //         name,
  //         lastname,
  //         mail,
  //         password,
  //         favourites,
  //         created_in_google,
  //       })
  //     : await postModels(User, {
  //         id,
  //         name,
  //         lastname,
  //         mail,
  //         password,
  //         favourites,
  //         created_in_google,
  //       });
>>>>>>> f6234c92f7265e1727e62c808b1be545c9930094
  //   if (user) {
  //     res.status(200).json(user);
  //   } else {
  //     res.status(400).json("User couldn't be created");
  //   }
  // } catch (err) {
  //   res.status(400).json({ error: err.message });
  // }
};

const putUser = async (req, res) => {
  try {
<<<<<<< HEAD
    const { id, properties } = req.query;
    const user = getModelsById(User, id);
    const updatedUser = putModels(user, properties);
    res.status(200).json(updatedUser);
=======
    const { id, properties } = req.body;
    const result = await putModels(User, id, properties);
    res.status(200).json(result);
>>>>>>> f6234c92f7265e1727e62c808b1be545c9930094
  } catch (error) {
    res.status(400).json({ error: err.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.body;
<<<<<<< HEAD
    const updated = deleteModels(User, id);
=======
    const updated = await deleteModels(User, id);
>>>>>>> f6234c92f7265e1727e62c808b1be545c9930094
    res.status(200).json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

<<<<<<< HEAD
module.exports = {
  getUser,
  postUser,
  putUser,
  deleteUser,
=======
const restoreUser = async (req, res) => {
  try {
    const { id } = req.body;
    const restored = await restoreModels(User, id);
    res.status(200).json(restored)
  } catch (error) {
    res.status(400).json({ error: err.message });
  }
}

module.exports = {
  getUser,
  getUserById,
  postUser,
  putUser,
  deleteUser,
  restoreUser
>>>>>>> f6234c92f7265e1727e62c808b1be545c9930094
};
