const { Brand } = require("../../db");
const {
  getModels,
  getModelsById,
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
    const updated = deleteModels(Brand, id);
    res.status(200).json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const restoreBrand = async (req, res ) => {
  try {
    const { id } = req.body;
    const recuperado =  restoreModels(Brand, id);
    res.status(200).json(recuperado);
  } catch (err) {
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
