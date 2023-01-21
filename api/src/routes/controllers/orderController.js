const { Order } = require("../../db");
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

const getOrder = async (req, res) => {
  try {
    const { name } = req.query;
<<<<<<< HEAD
    const orders = name ? getModels(Order, name) : getModels(Order);
=======
    const orders = await getModels(Order, name);
>>>>>>> f6234c92f7265e1727e62c808b1be545c9930094
    res.status(200).json(order);
  } catch (error) {
    res.status(400).json({ error: err.message });
  }
};

const postOrder = async (req, res) => {
  try {
    const { date, delivered, canceled, adress, payment_method } = req.body;
    const order = await postModels(Order, {
      date,
      delivered,
      canceled,
      adress,
      payment_method,
    });
    if (order) {
      res.status(200).json(order);
    } else {
      res.status(400).json("Order couldn't be created");
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const putOrder = async (req, res) => {
  try {
<<<<<<< HEAD
    const { id, properties } = req.query;
    const order = getModelsById(Order, id);
    const updatedOrder = putModels(order, properties);
    res.status(200).json(updatedOrder);
=======
    const { id, properties } = req.body;
    const result = await putModels(Order, id, properties);
    res.status(200).json(result);
>>>>>>> f6234c92f7265e1727e62c808b1be545c9930094
  } catch (error) {
    res.status(400).json({ error: err.message });
  }
};

const deleteOrder = async (req, res) => {
  try {
    const { id } = req.body;
<<<<<<< HEAD
    const updated = deleteModels(Order, id);
=======
    const updated = await deleteModels(Order, id);
>>>>>>> f6234c92f7265e1727e62c808b1be545c9930094
    res.status(200).json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

<<<<<<< HEAD
=======
const restoreOrder = async (req, res) => {
  try {
    const { id } = req.body;
    const restored = await restoreModels(Order, id);
    res.status(200).json(restored)
  } catch (error) {
    res.status(400).json({ error: err.message });
  }
}

>>>>>>> f6234c92f7265e1727e62c808b1be545c9930094
module.exports = {
  getOrder,
  postOrder,
  putOrder,
  deleteOrder,
<<<<<<< HEAD
=======
  restoreOrder
>>>>>>> f6234c92f7265e1727e62c808b1be545c9930094
};
