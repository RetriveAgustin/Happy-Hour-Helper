const { Address } = require("../../db");
<<<<<<< HEAD
const { getModels, getModelsById, postModels, putModels, deleteModels } = require("../utils/mainUtils");
=======
const {
  getModels,
  getModelsById,
  postModels,
  putModels,
  deleteModels,
  restoreModels,
} = require("../utils/mainUtils");
>>>>>>> f6234c92f7265e1727e62c808b1be545c9930094

const getAddress = async (req, res) => {
  try {
    const { name } = req.query;
<<<<<<< HEAD
    const address = getModels(Address, name)
    res.status(200).json(address)
  } catch (err) {
    res.status(400).json({error: err.message})
=======
    const address = getModels(Address, name);
    res.status(200).json(address);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getAddressById = async (req, res) => {
  try {
    const { id } = req.body;
    const address = getModelsById(Address, id);
    res.status(200).json(address);
  } catch (error) {
    res.status(400).json({error: error.message });
>>>>>>> f6234c92f7265e1727e62c808b1be545c9930094
  }
};

const postAddress = async (req, res) => {
  try {
    const { name, number, description, user_id } = req.body;
<<<<<<< HEAD
    const address = await postModels(Address, {name, number, description, user_id});
    if(address){
      res.status(200).json(address);
    }else{
      res.status(400).json("Address couldn't be created")
    }
  } catch (err) {
    res.status(400).json({error: err.message})
  }
};

const putAddress = (req, res) => {
  try {
    const { id, properties } = req.body;
    const instance = getModelsById(Address, id)
    const result = putModels(instance, properties);
    res.status(200).json(result)
  } catch (err) {
    res.status(400).json({error: err.message})
=======
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
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const putAddress = async (req, res) => {
  try {
    const { id, properties } = req.body;
    const result = await putModels(Address, id, properties);
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
>>>>>>> f6234c92f7265e1727e62c808b1be545c9930094
  }
};

const deleteAddress = (req, res) => {
  try {
    const { id } = req.body;
    const updated = deleteModels(Address, id);
<<<<<<< HEAD
    res.status(200).json(updated)
  } catch (err) {
    res.status(400).json({error: err.message})
=======
    res.status(200).json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const restoreAddress = async (req, res) => {
  try {
    const { id } = req.body;
    const restored = await restoreModels(Address, id);
    res.status(200).json(restored);
  } catch (error) {
    res.status(400).json({ error: err.message });
>>>>>>> f6234c92f7265e1727e62c808b1be545c9930094
  }
};

module.exports = {
  getAddress,
<<<<<<< HEAD
  postAddress,
  putAddress,
  deleteAddress,
=======
  getAddressById,
  postAddress,
  putAddress,
  deleteAddress,
  restoreAddress,
>>>>>>> f6234c92f7265e1727e62c808b1be545c9930094
};
