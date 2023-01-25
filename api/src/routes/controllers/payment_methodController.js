const { Payment_method } = require("../../db");
const {
  getModels,
  getModelsById,
  postModels,
  putModels,
  deleteModels,
  restoreModels
} = require("../utils/mainUtils");

const getPayment = async (req, res) => {
  try {
    const { name } = req.query;
    const payment = await getModels(Payment_method, name);
    res.status(200).json(payment);
  } catch (error) {
    res.status(400).json({ error: error.message });
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
    const { id, properties } = req.body;
    const result = await putModels(Payment_method, id, properties);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deletePayment = async (req, res) => {
  try {
    const { id } = req.body;
    const updated = await deleteModels(Payment_method, id);
    res.status(200).json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const restorePayment = async (req, res) => {
  try {
    const { id } = req.body;
    const restored = await restoreModels(Payment_method, id);
    res.status(200).json(restored)
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = {
  getPayment,
  postPayment,
  putPayment,
  deletePayment,
  restorePayment
};
