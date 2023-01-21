const { Sub_category } = require("../../db");
const {
  getModels,
<<<<<<< HEAD
  getModelsById,
  postModels,
  putModels,
  deleteModels,
=======
  postModels,
  putModels,
  deleteModels,
  restoreModels
>>>>>>> f6234c92f7265e1727e62c808b1be545c9930094
} = require("../utils/mainUtils");

const getSubCategory = async (req, res) => {
    try {
        const { name } = req.query;
<<<<<<< HEAD
        const subCategory = name ? getModels(Sub_category, name) : getModels(Sub_category);
=======
        const subCategory = await getModels(Sub_category, name);
>>>>>>> f6234c92f7265e1727e62c808b1be545c9930094
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
<<<<<<< HEAD
        const { id, properties } = req.query;
        const subCategory = getModelsById(Sub_category, id);
        const updatedSubCategory = putModels(subCategory, properties);
        res.status(200).json(updatedSubCategory)
=======
        const { id, properties } = req.body;
        const result = await putModels(Sub_category, id, properties);
        res.status(200).json(result);
>>>>>>> f6234c92f7265e1727e62c808b1be545c9930094
    } catch (error) {
        res.status(400).json({ error: err.message });
    }
}

const deleteSubCategory = async (req, res) => {
    try {
        const { id } = req.body;
<<<<<<< HEAD
        const updated = deleteModels(Sub_category, id);
=======
        const updated = await deleteModels(Sub_category, id);
>>>>>>> f6234c92f7265e1727e62c808b1be545c9930094
        res.status(200).json(updated)
      } catch (err) {
        res.status(400).json({error: err.message})
      }
}

<<<<<<< HEAD
=======
const restoreSubCategory = async (req, res) => {
  try {
    const { id } = req.body;
    const restored = await restoreModels(Sub_category, id);
    res.status(200).json(restored)
  } catch (error) {
    res.status(400).json({ error: err.message });
  }
}

>>>>>>> f6234c92f7265e1727e62c808b1be545c9930094
module.exports = {
    getSubCategory,
    postSubCategory,
    putSubCategory,
<<<<<<< HEAD
    deleteSubCategory
=======
    deleteSubCategory,
    restoreSubCategory
>>>>>>> f6234c92f7265e1727e62c808b1be545c9930094
}