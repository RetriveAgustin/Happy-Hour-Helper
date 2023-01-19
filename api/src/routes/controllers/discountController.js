const { Discount } = require("../../db");
const {
  getModels,
  getModelsById,
  postModels,
  putModels,
  deleteModels,
  restoreModels
} = require("../utils/mainUtils");

const getDiscount = async (req, res) => {
    try {
        const { name } = req.query;
        const discounts = await getModels(Discount, name);
        res.status(200).json(discounts)
    } catch (error) {
        res.status(400).json({ error: err.message });
    }
}

const postDiscount = async (req, res) => {
  try {
    const { initial_date, expiration_date, discount_amount, type_of_item } = req.body;
    const discounts = await postModels(Discount, {initial_date, expiration_date, discount_amount});
    if (Discount) {
      res.status(200).json(discounts);
    } else {
      res.status(400).json("Discount couldn't be created");
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const putDiscount = async (req, res) => {
    try {
        const { id, properties } = req.body;
        const result = await putModels(Discount, id, properties);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ error: err.message });
    }
}

const deleteDiscount = async (req, res) => {
    try {
        const { id } = req.body;
        const updated = await deleteModels(Discount, id);
        res.status(200).json(updated)
      } catch (err) {
        res.status(400).json({error: err.message})
      }
}

const restoreDiscount = async (req, res) => {
  try {
    const { id } = req.body;
    const restored = await restoreModels(Discount, id);
    res.status(200).json(restored)
  } catch (error) {
    res.status(400).json({ error: err.message });
  }
}

module.exports = {
    getDiscount,
    postDiscount,
    putDiscount,
    deleteDiscount,
    restoreDiscount
}