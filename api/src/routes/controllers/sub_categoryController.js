const { Sub_category } = require("../../db");
const {
  getModels,
  postModels,
  putModels,
  deleteModels,
  restoreModels
} = require("../utils/mainUtils");

const getSubCategory = async (req, res) => {
    try {
        const { name } = req.query;
        const subCategory = await getModels(Sub_category, name);
        res.status(200).json(subCategory)
    } catch (error) {
        res.status(400).json({ error: err.message });
    }
}

const postSubCategory = async (req, res) => {
  try {
    const { name, has_discount } = req.body;
    const subCategory = await postModels(Sub_category, {name, has_discount});
    if (subCategory) {
      res.status(200).json(subCategory);
    } else {
      res.status(400).json("Sub-category couldn't be created");
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const putSubCategory = async (req, res) => {
    try {
        const { id, properties } = req.body;
        const result = await putModels(Sub_category, id, properties);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ error: err.message });
    }
}

const deleteSubCategory = async (req, res) => {
    try {
        const { id } = req.body;
        const updated = await deleteModels(Sub_category, id);
        res.status(200).json(updated)
      } catch (err) {
        res.status(400).json({error: err.message})
      }
}

const restoreSubCategory = async (req, res) => {
  try {
    const { id } = req.body;
    const restored = await restoreModels(Sub_category, id);
    res.status(200).json(restored)
  } catch (error) {
    res.status(400).json({ error: err.message });
  }
}

module.exports = {
    getSubCategory,
    postSubCategory,
    putSubCategory,
    deleteSubCategory,
    restoreSubCategory
}