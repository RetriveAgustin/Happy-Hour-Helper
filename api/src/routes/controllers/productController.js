const { Product, Brand ,Category, Sub_category } = require("../../db");
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
      brand,
      category,
      subcategory,
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

    product.addBrand(brand);
    product.addCategory(category);
    product.addSub_category(subcategory);

    if (product) {
      res.status(200).json(product);
    } else {
      res.status(400).json("Product couldn't be created");
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const filterProductByBrand = async (req, res) => {
  try {
    const { brand } = req.query;
    Product.findAll({
      where: {
        brand,
      },
      include: [{ model: Brand, where: { name: brand } }],
    }).then((products) => res.status(200).json(products));
  } catch (error) {
    res.status(400).error.message;
  }
};

const filterProductByCategory = async (req, res) => {
  try {
    const { category } = req.query;
    Product.findAll({
      where: {
        category,
      },
      include: [{ model: Category, where: { name: category } }],
    }).then((products) => res.status(200).json(products));
  } catch (error) {
    res.status(400).error.message;
  }
};

const filterProductBySubCategory = async (req, res) => {
  const { subcategory } = req.query;
  Product.findAll({
    where: {
      subcategory: subcategory,
    },
    include: [{ model: Sub_category, where: { name: subcategory } }],
  }).then((products) => res.json(products));
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
  filterProductByBrand,
  filterProductByCategory,
  filterProductBySubCategory,
};
