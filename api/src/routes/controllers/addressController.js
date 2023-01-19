const { Address } = require("../../db");
const { getModels, getModelsById, postModels, putModels, deleteModels } = require("../utils/mainUtils");

const getAddress = async (req, res) => {
  try {
    const { name } = req.query;
    const address = getModels(Address, name)
    res.status(200).json(address)
  } catch (err) {
    res.status(400).json({error: err.message})
  }
};

const postAddress = async (req, res) => {
  try {
    const { name, number, description, user_id } = req.body;
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
  }
};

const deleteAddress = (req, res) => {
  try {
    const { id } = req.body;
    const updated = deleteModels(Address, id);
    res.status(200).json(updated)
  } catch (err) {
    res.status(400).json({error: err.message})
  }
};

module.exports = {
  getAddress,
  postAddress,
  putAddress,
  deleteAddress,
};
