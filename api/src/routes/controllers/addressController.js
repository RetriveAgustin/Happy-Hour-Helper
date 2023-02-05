const { Address } = require("../../db");
const {
  getModels,
  getModelsById,
  postModels,
  putModels,
  deleteModels,
  restoreModels,
} = require("../utils/mainUtils");

const getAddress = async (req, res) => {
  try {
    const { name } = req.query;
    const address = await getModels(Address, name);
    res.status(200).json(address);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAddressById = async (req, res) => {
  try {
    const { id } = req.body;
    const address = getModelsById(Address, id);
    res.status(200).json(address);
  } catch (error) {
    res.status(400).json({error: error.message });
  }
};

const postAddress = async (req, res) => {
  try {
    const { name, number, description, user_id } = req.body;
    const address = await postModels(Address, {
      name,
      number,
      description,
      user_id,
    });
    if (address) {
      res.status(200).json(address);
    } else {
      res.status(400).json("Address couldn't be created");
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const putAddress = async (req, res) => {
  try {
    const { id, properties } = req.body;
    const result = await putModels(Address, id, properties);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteAddress = (req, res) => {
  try {
    const { id } = req.body;
    const updated = deleteModels(Address, id);
    res.status(200).json(updated);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const restoreAddress = async (req, res) => {
  try {
    const { id } = req.body;
    const restored = await restoreModels(Address, id);
    res.status(200).json(restored);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAddress,
  getAddressById,
  postAddress,
  putAddress,
  deleteAddress,
  restoreAddress,
};
