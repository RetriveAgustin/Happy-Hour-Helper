const { Discount } = require("../../db");
const {
  getModels,
  getModelsById,
  postModels,
  putModels,
  deleteModels,
} = require("../utils/mainUtils");

const getDiscount = async (req, res) => {
    try {
        const { name } = req.query;
        const discounts = name ? getModels(Discount, name) : getModels(Discount);
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
        const { id, properties } = req.query;
        const discount = getModelsById(Discount, id);
        const updatedDiscount = putModels(discount, properties);
        res.status(200).json(updatedDiscount)
    } catch (error) {
        res.status(400).json({ error: err.message });
    }
}

const deleteDiscount = async (req, res) => {
    try {
        const { id } = req.body;
        const updated = deleteModels(Discount, id);
        res.status(200).json(updated)
      } catch (err) {
        res.status(400).json({error: err.message})
      }
}

module.exports = {
    getDiscount,
    postDiscount,
    putDiscount,
    deleteDiscount
}