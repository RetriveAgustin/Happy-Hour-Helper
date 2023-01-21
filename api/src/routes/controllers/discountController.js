const { Discount } = require("../../db");
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

const getDiscount = async (req, res) => {
    try {
        const { name } = req.query;
<<<<<<< HEAD
        const discounts = name ? getModels(Discount, name) : getModels(Discount);
=======
        const discounts = await getModels(Discount, name);
>>>>>>> f6234c92f7265e1727e62c808b1be545c9930094
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
<<<<<<< HEAD
        const { id, properties } = req.query;
        const discount = getModelsById(Discount, id);
        const updatedDiscount = putModels(discount, properties);
        res.status(200).json(updatedDiscount)
=======
        const { id, properties } = req.body;
        const result = await putModels(Discount, id, properties);
        res.status(200).json(result);
>>>>>>> f6234c92f7265e1727e62c808b1be545c9930094
    } catch (error) {
        res.status(400).json({ error: err.message });
    }
}

const deleteDiscount = async (req, res) => {
    try {
        const { id } = req.body;
<<<<<<< HEAD
        const updated = deleteModels(Discount, id);
=======
        const updated = await deleteModels(Discount, id);
>>>>>>> f6234c92f7265e1727e62c808b1be545c9930094
        res.status(200).json(updated)
      } catch (err) {
        res.status(400).json({error: err.message})
      }
}

<<<<<<< HEAD
=======
const restoreDiscount = async (req, res) => {
  try {
    const { id } = req.body;
    const restored = await restoreModels(Discount, id);
    res.status(200).json(restored)
  } catch (error) {
    res.status(400).json({ error: err.message });
  }
}

>>>>>>> f6234c92f7265e1727e62c808b1be545c9930094
module.exports = {
    getDiscount,
    postDiscount,
    putDiscount,
<<<<<<< HEAD
    deleteDiscount
=======
    deleteDiscount,
    restoreDiscount
>>>>>>> f6234c92f7265e1727e62c808b1be545c9930094
}