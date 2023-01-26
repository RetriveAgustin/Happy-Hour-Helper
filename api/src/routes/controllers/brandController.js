const { Brand } = require("../../db");
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
  } catch (error) {
    res.status(400).json({ error: error.message });
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
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const putBrand = async (req, res) => {
  try {
    const { id, properties } = req.body;
    const result = await putModels(Brand, id, properties);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteBrand = async (req, res) => {
  try {
    const { id } = req.body;
    const updated = await deleteModels(Brand, id);
    res.status(200).json(updated);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const restoreBrand = async (req, res) => {
  try {
    const { id } = req.body;
    const restored = await restoreModels(Brand, id);
    res.status(200).json(restored)
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = {
  getBrand,
  postBrand,
  putBrand,
  deleteBrand,
  restoreBrand
};
