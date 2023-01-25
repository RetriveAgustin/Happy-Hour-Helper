const { Product, Brand, Category, Sub_category } = require("../../db");
const {
  getModels,
  getModelsById,
  postModels,
  putModels,
  deleteModels,
  restoreModels,
} = require("../utils/mainUtils");

const getProduct = async (req, res) => {
  try {
    const { name } = req.query;
    const product = await getModels(Product, name);
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.body;
    const product = await getModelsById(Product, id);
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
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
      has_discount,
    });

    await product.addBrand(brand);
    await product.addCategory(category);
    await product.addSub_category(subcategory);

    if (product) {
      res.status(200).json(product);
    } else {
      res.status(400).json("Product couldn't be created");
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const bulkProduct = async (req, res) => {
  try {
    const { instances } = req.body;
    for (let i = 0; i < instances.length; i++) {
      const {
        name,
        img,
        price,
        capacity,
        minimum_amount_for_bulk,
        bulk_discount,
        stock,
        has_discount,
        brand,
        category,
        subcategory,
      } = instances[i];
      ins = await postModels(Product, {
        name,
        img,
        price,
        capacity,
        minimum_amount_for_bulk,
        bulk_discount,
        stock,
        has_discount,
      });

      await ins.addBrand(brand);
      await ins.addCategory(category);
      await ins.addSub_category(subcategory);
    }
    res.status(200).json("Done");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//se cambió el medio de obtención de las variables, ahora se mandan por body.
//además ahora se recibe un id, no un nombre, puesto que el producto no tiene acceso a esta información
//en el home se tendrá que modificar esto para que funcione adecuadamente
const filterProductByBrand = async (req, res) => {
  try {
    const { brand } = req.body;
    Product.findAll({
      where: {
        brand,
      },
      include: [{ model: Brand, where: { id: brand } }],
    }).then((products) => res.status(200).json(products));
  } catch (error) {
    res.status(400).Json({ error: error.message });
  }
};

const filterProductByCategory = async (req, res) => {
  try {
    const { category } = req.body;
    Product.findAll({
      where: {
        category,
      },
      include: [{ model: Category, where: { id: category } }],
    }).then((products) => res.status(200).json(products));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const filterProductBySubCategory = async (req, res) => {
  const { subcategory } = req.body;
  Product.findAll({
    where: {
      subcategory: subcategory,
    },
    include: [{ model: Sub_category, where: { id: subcategory } }],
  }).then((products) => res.json(products));
};

const putProduct = async (req, res) => {
  try {
    const { id, properties } = req.body;
    const result = await putModels(Product, id, properties);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.body;
    const updated = await deleteModels(Product, id);
    res.status(200).json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const restoreProduct = async (req, res) => {
  try {
    const { id } = req.body;
    const restored = await restoreModels(Product, id);
    res.status(200).json(restored);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getProduct,
  getProductById,
  postProduct,
  putProduct,
  deleteProduct,
  restoreProduct,
  filterProductByBrand,
  filterProductByCategory,
  filterProductBySubCategory,
  bulkProduct,
};
