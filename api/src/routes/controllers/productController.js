const { Product } = require("../../db");
const {
  getModels,
  getModelsById,
  postModels,
  putModels,
  deleteModels,
} = require("../utils/mainUtils");

const getProduct = async (req, res) => {
  try {
    const { name } = req.query;
    const product = name ? getModels(Product, name) : getModels(Product);
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error: err.message });
  }
};

const postProduct = async (req, res) => {
  try {
    const {
      name,
      img,
      price,
      capacity,
      minimum_amount_for_bulk,
      bulk_discount,
      stock,
      rating,
      has_discount,
    } = req.body;
    const product = await postModels(Product, {
      name,
      img,
      price,
      capacity,
      minimum_amount_for_bulk,
      bulk_discount,
      stock,
      rating,
      has_discount,
    });
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(400).json("Product couldn't be created");
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const putProduct = async (req, res) => {
  try {
    const { id, properties } = req.query;
    const product = getModelsById(Product, id);
    const updatedProduct = putModels(product, properties);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(400).json({ error: err.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.body;
    const updated = deleteModels(Product, id);
    res.status(200).json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  getProduct,
  postProduct,
  putProduct,
  deleteProduct,
};
