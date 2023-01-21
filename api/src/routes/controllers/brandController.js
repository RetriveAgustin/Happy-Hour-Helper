const { Brand } = require("../../db");
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

const getBrand = async (req, res) => {
  try {
    const { name } = req.query;
<<<<<<< HEAD
    const brands = getModels(Brand, name);
=======
    const brands = await getModels(Brand, name);
>>>>>>> f6234c92f7265e1727e62c808b1be545c9930094
    res.status(200).json(brands);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const postBrand = async (req, res) => {
  try {
    const { name } = req.body;
    const brand = await postModels(Brand, { name });
    if (brand) {
      res.status(200).json(brand);
    } else {
      res.status(400).json("Brand couldn't be created");
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const putBrand = async (req, res) => {
  try {
    const { id, properties } = req.body;
<<<<<<< HEAD
    const instance = getModelsById(Brand, id);
    const result = putModels(instance, properties);
=======
    const result = await putModels(Brand, id, properties);
>>>>>>> f6234c92f7265e1727e62c808b1be545c9930094
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteBrand = async (req, res) => {
  try {
    const { id } = req.body;
<<<<<<< HEAD
    const updated = deleteModels(Brand, id);
=======
    const updated = await deleteModels(Brand, id);
>>>>>>> f6234c92f7265e1727e62c808b1be545c9930094
    res.status(200).json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

<<<<<<< HEAD
=======
const restoreBrand = async (req, res) => {
  try {
    const { id } = req.body;
    const restored = await restoreModels(Brand, id);
    res.status(200).json(restored)
  } catch (error) {
    res.status(400).json({ error: err.message });
  }
}

>>>>>>> f6234c92f7265e1727e62c808b1be545c9930094
module.exports = {
  getBrand,
  postBrand,
  putBrand,
  deleteBrand,
<<<<<<< HEAD
=======
  restoreBrand
>>>>>>> f6234c92f7265e1727e62c808b1be545c9930094
};
