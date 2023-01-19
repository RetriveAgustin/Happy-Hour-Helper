const { Payment_method } = require("../../db");
const {
  getModels,
  getModelsById,
  postModels,
  putModels,
  deleteModels,
} = require("../utils/mainUtils");

const getPayment = async (req, res) => {
  try {
    const { name } = req.query;
    const payment = name
      ? getModels(Payment_method, name)
      : getModels(Payment_method);
    res.status(200).json(payment);
  } catch (error) {
    res.status(400).json({ error: err.message });
  }
};

const postPayment = async (req, res) => {
  try {
    const { name, code, expiration_date, propetary_name, propetary_last_name } =
      req.body;
    const payment = await postModels(Payment_method, {
      name,
      code,
      expiration_date,
      propetary_name,
      propetary_last_name,
    });
    if (payment) {
      res.status(200).json(payment);
    } else {
      res.status(400).json("Payment method couldn't be created");
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const putPayment = async (req, res) => {
  try {
    const { id, properties } = req.query;
    const payment = getModelsById(Payment_method, id);
    const updatedPayment = putModels(payment, properties);
    res.status(200).json(updatedPayment);
  } catch (error) {
    res.status(400).json({ error: err.message });
  }
};

const deletePayment = async (req, res) => {
  try {
    const { id } = req.body;
    const updated = deleteModels(Payment_method, id);
    res.status(200).json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  getPayment,
  postPayment,
  putPayment,
  deletePayment,
};
