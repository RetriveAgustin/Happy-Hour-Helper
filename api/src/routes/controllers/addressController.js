// const { Adress } = require("../../db");
const { getAllAddress, getAddressByName } = require("../utils/addressUtils");

const getAddress = async (req, res) => {
  
  try {
    const { street } = req.query;
    let results = street ? await getAddressByName(street) : await getAllAddress();
    if (results[0]) {
      return res.status(200).json(results);
    }
    else return res.send(null);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const postAddress = (req, res) => {
  try {
    
  } catch (err) {
    
  }
};

const putAddress = (req, res) => {
  try {
    
  } catch (err) {
    
  }
};

const deleteAddress = (req, res) => {
  try {
    
  } catch (err) {
    
  }
};

module.exports = {
  getAddress,
  postAddress,
  putAddress,
  deleteAddress,
};
