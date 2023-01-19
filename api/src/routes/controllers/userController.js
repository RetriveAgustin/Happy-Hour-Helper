const { User } = require("../../db");
const admin = require("../utils/firebase-config.js");
const {
  getModels,
  getModelsById,
  postModels,
  putModels,
  deleteModels,
  restoreModels
} = require("../utils/mainUtils");

const getUser = async (req, res) => {
  try {
    const { name } = req.query;
    const users = name ? getModels(User, name) : getModels(User);
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ error: err.message });
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
    const { id, properties } = req.query;
    const result = await putModels(User, id, properties);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: err.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.body;
    const updated = await deleteModels(User, id);
    res.status(200).json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

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
  postUser,
  putUser,
  deleteUser,
  restoreUser
};
