<<<<<<< HEAD
const { Product } = require("../../db");
=======
const { Product, Brand ,Category, Sub_category } = require("../../db");
>>>>>>> f6234c92f7265e1727e62c808b1be545c9930094
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

const getProduct = async (req, res) => {
  try {
    const { name } = req.query;
<<<<<<< HEAD
    const product = name ? getModels(Product, name) : getModels(Product);
=======
    const product = await getModels(Product, name);
>>>>>>> f6234c92f7265e1727e62c808b1be545c9930094
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error: err.message });
  }
};

<<<<<<< HEAD
=======
const getProductById = async (req, res) => {
  try {
    const { id } = req.body;
    const product = getModelsById(Product, id);
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({error: error.message });
  }
};

>>>>>>> f6234c92f7265e1727e62c808b1be545c9930094
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
<<<<<<< HEAD
=======
      brand,
      category,
      subcategory,
>>>>>>> f6234c92f7265e1727e62c808b1be545c9930094
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
<<<<<<< HEAD
=======

    await product.addBrand(brand);
    await product.addCategory(category);
    await product.addSub_category(subcategory);

>>>>>>> f6234c92f7265e1727e62c808b1be545c9930094
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(400).json("Product couldn't be created");
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

<<<<<<< HEAD
const putProduct = async (req, res) => {
  try {
    const { id, properties } = req.query;
    const product = getModelsById(Product, id);
    const updatedProduct = putModels(product, properties);
    res.status(200).json(updatedProduct);
=======
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
    const { id, properties } = req.body;
    const result = await putModels(Product, id, properties);
    res.status(200).json(result);
>>>>>>> f6234c92f7265e1727e62c808b1be545c9930094
  } catch (error) {
    res.status(400).json({ error: err.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.body;
<<<<<<< HEAD
    const updated = deleteModels(Product, id);
=======
    const updated = await deleteModels(Product, id);
>>>>>>> f6234c92f7265e1727e62c808b1be545c9930094
    res.status(200).json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

<<<<<<< HEAD
module.exports = {
  getProduct,
  postProduct,
  putProduct,
  deleteProduct,
=======
const restoreProduct = async (req, res) => {
  try {
    const { id } = req.body;
    const restored = await restoreModels(Product, id);
    res.status(200).json(restored)
  } catch (error) {
    res.status(400).json({ error: err.message });
  }
}

module.exports = {
  getProduct,
  getProductById,
  postProduct,
  putProduct,
  deleteProduct,
  restoreProduct,
  filterProductByBrand,
  filterProductByCategory,
  filterProductBySubCategory
>>>>>>> f6234c92f7265e1727e62c808b1be545c9930094
};
