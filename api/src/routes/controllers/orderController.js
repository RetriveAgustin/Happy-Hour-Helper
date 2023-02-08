const { Order } = require("../../db");
const {
  getModels,
  getModelsById,
  postModels,
  putModels,
  deleteModels,
  restoreModels,
} = require("../utils/mainUtils");

const getOrder = async (req, res) => {
  try {
    const { name } = req.query;
    const order = await getModels(Order, name);
    res.status(200).json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const postOrder = async (req, res) => {
  try {
    const { date, delivered, canceled, address, user_id } = req.body;
    const order = await postModels(Order, {
      date,
      delivered,
      canceled,
      address,
    });

    await order.addUser(user_id)

    products.map(async (p) => {
      await order.addProduct(p);
    });

    if (order) {
      res.status(200).json("Orden creada con éxito");
    } else {
      res.status(400).json("Order couldn't be created");
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

const putOrder = async (req, res) => {
  try {
    const { id, properties } = req.body;
    const result = await putModels(Order, id, properties);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteOrder = async (req, res) => {
  try {
    const { id } = req.body;
    const updated = await deleteModels(Order, id);
    res.status(200).json(updated);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const restoreOrder = async (req, res) => {
  try {
    const { id } = req.body;
    const restored = await restoreModels(Order, id);
    res.status(200).json(restored);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getOrder,
  postOrder,
  putOrder,
  deleteOrder,
  restoreOrder,
};
