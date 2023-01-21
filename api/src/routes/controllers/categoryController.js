const { Category } = require("../../db");
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

const getCategory = async (req, res) => {
  try {
    const { name } = req.query;
<<<<<<< HEAD
    const category = name ? getModels(Category, name) : getModels(Category);
=======
    const category = await getModels(Category, name);
>>>>>>> f6234c92f7265e1727e62c808b1be545c9930094
    res.status(200).json(category);
  } catch (error) {
    res.status(400).json({ error: err.message });
  }
};

const postCategory = async (req, res) => {
  try {
<<<<<<< HEAD
    const { name } = req.body;
    const category = await postModels(Category, { name });
=======
    const { name, has_discount } = req.body;
    const category = await postModels(Category, {name, has_discount});
>>>>>>> f6234c92f7265e1727e62c808b1be545c9930094
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
<<<<<<< HEAD
    const { id, properties } = req.query;
    const category = getModelsById(Category, id);
    const updatedCategory = putModels(category, properties);
    res.status(200).json(updatedCategory);
=======
    const { id, properties } = req.body;
    const result = await putModels(Category, id, properties);
    res.status(200).json(result);
>>>>>>> f6234c92f7265e1727e62c808b1be545c9930094
  } catch (error) {
    res.status(400).json({ error: err.message });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const { id } = req.body;
<<<<<<< HEAD
    const category = deleteModels(Category, id);
=======
    const category = await deleteModels(Category, id);
>>>>>>> f6234c92f7265e1727e62c808b1be545c9930094
    res.status(200).json(category);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

<<<<<<< HEAD
=======
const restoreCategory = async (req, res) => {
  try {
    const { id } = req.body;
    const restored = await restoreModels(Category, id);
    res.status(200).json(restored)
  } catch (error) {
    res.status(400).json({ error: err.message });
  }
}

>>>>>>> f6234c92f7265e1727e62c808b1be545c9930094
module.exports = {
  getCategory,
  postCategory,
  putCategory,
  deleteCategory,
<<<<<<< HEAD
=======
  restoreCategory
>>>>>>> f6234c92f7265e1727e62c808b1be545c9930094
};
