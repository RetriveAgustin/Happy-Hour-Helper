const { Category } = require("../../db");
const {
  getModels,
  getModelsById,
  postModels,
  putModels,
  deleteModels,
} = require("../utils/mainUtils");

const getCategory = async (req, res) => {
  try {
    const { name } = req.query;
    const category = name ? getModels(Category, name) : getModels(Category);
    res.status(200).json(category);
  } catch (error) {
    res.status(400).json({ error: err.message });
  }
};

const postCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const category = await postModels(Category, { name });
    if (category) {
      res.status(200).json(category);
    } else {
      res.status(400).json("Category couldn't be created");
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const putCategory = async (req, res) => {
  try {
    const { id, properties } = req.query;
    const category = getModelsById(Category, id);
    const updatedCategory = putModels(category, properties);
    res.status(200).json(updatedCategory);
  } catch (error) {
    res.status(400).json({ error: err.message });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const { id } = req.body;
    const category = deleteModels(Category, id);
    res.status(200).json(category);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  getCategory,
  postCategory,
  putCategory,
  deleteCategory,
};
