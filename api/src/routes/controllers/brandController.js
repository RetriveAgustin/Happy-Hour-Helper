const { Brand, Category, Sub_category } = require("../../db");
const {
  getModels,
  postModels,
  putModels,
  deleteModels,
  restoreModels
} = require("../utils/mainUtils");

const getBrand = async (req, res) => {
  try {
    const { name } = req.query;
    const brands = await getModels(Brand, name);
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
    const result = await putModels(Brand, id, properties);
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteBrand = async (req, res) => {
  try {
    const { id } = req.body;
    const updated = await deleteModels(Brand, id);
    res.status(200).json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const restoreBrand = async (req, res) => {
  try {
    const { id } = req.body;
    const restored = await restoreModels(Brand, id);
    res.status(200).json(restored)
  } catch (error) {
    res.status(400).json({ error: err.message });
  }
}

module.exports = {
  getBrand,
  postBrand,
  putBrand,
  deleteBrand,
  restoreBrand
};
