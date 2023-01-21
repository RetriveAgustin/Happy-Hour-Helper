const { Payment_method } = require("../../db");
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

const getPayment = async (req, res) => {
  try {
    const { name } = req.query;
<<<<<<< HEAD
    const payment = name
      ? getModels(Payment_method, name)
      : getModels(Payment_method);
=======
    const payment = await getModels(Payment_method, name);
>>>>>>> f6234c92f7265e1727e62c808b1be545c9930094
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
<<<<<<< HEAD
    const { id, properties } = req.query;
    const payment = getModelsById(Payment_method, id);
    const updatedPayment = putModels(payment, properties);
    res.status(200).json(updatedPayment);
=======
    const { id, properties } = req.body;
    const result = await putModels(Payment_method, id, properties);
    res.status(200).json(result);
>>>>>>> f6234c92f7265e1727e62c808b1be545c9930094
  } catch (error) {
    res.status(400).json({ error: err.message });
  }
};

const deletePayment = async (req, res) => {
  try {
    const { id } = req.body;
<<<<<<< HEAD
    const updated = deleteModels(Payment_method, id);
=======
    const updated = await deleteModels(Payment_method, id);
>>>>>>> f6234c92f7265e1727e62c808b1be545c9930094
    res.status(200).json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

<<<<<<< HEAD
=======
const restorePayment = async (req, res) => {
  try {
    const { id } = req.body;
    const restored = await restoreModels(Payment_method, id);
    res.status(200).json(restored)
  } catch (error) {
    res.status(400).json({ error: err.message });
  }
}

>>>>>>> f6234c92f7265e1727e62c808b1be545c9930094
module.exports = {
  getPayment,
  postPayment,
  putPayment,
  deletePayment,
<<<<<<< HEAD
=======
  restorePayment
>>>>>>> f6234c92f7265e1727e62c808b1be545c9930094
};
