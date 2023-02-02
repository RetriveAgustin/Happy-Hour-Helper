const { Category } = require("../../db");
const {
  getModels,
  getModelsById,
  postModels,
  putModels,
  deleteModels,
  restoreModels
} = require("../utils/mainUtils");

const getCategory = async (req, res) => {
  try {
    const { name } = req.query;
    const category = await getModels(Category, name);
    res.status(200).json(category);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const postCategory = async (req, res) => {
  try {
    const { name, has_discount } = req.body;
    const category = await postModels(Category, {name, has_discount});
    if (category) {
      res.status(200).json(category);
    } else {
      res.status(400).json("Category couldn't be created");
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const putCategory = async (req, res) => {
  try {
    const { id, properties } = req.body;
    const result = await putModels(Category, id, properties);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const { id } = req.body;
    const category = await deleteModels(Category, id);
    res.status(200).json(category);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const restoreCategory = async (req, res) => {
  try {
    const { id } = req.body;
    const restored = await restoreModels(Category, id);
    res.status(200).json(restored)
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = {
  getCategory,
  postCategory,
  putCategory,
  deleteCategory,
  restoreCategory
};
