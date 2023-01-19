const { Offer } = require("../../db");
const {
  getModels,
  getModelsById,
  postModels,
  putModels,
  deleteModels,
} = require("../utils/mainUtils");

const getOffer = async (req, res) => {
  try {
    const { name } = req.query;
    const offer = name ? getModels(Offer, name) : getModels(Offer);
    res.status(200).json(offer);
  } catch (error) {
    res.status(400).json({ error: err.message });
  }
};

const postOffer = async (req, res) => {
  try {
    const { name, price, img, description, initial_date, expiration_date } =
      req.body;
    const offer = await postModels(Offer, {
      name,
      price,
      img,
      description,
      initial_date,
      expiration_date,
    });
    if (offer) {
      res.status(200).json(offer);
    } else {
      res.status(400).json("Offer couldn't be created");
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const putOffer = async (req, res) => {
  try {
    const { id, properties } = req.query;
    const result = await putModels(Offer, id, properties);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: err.message });
  }
};

const deleteOffer = async (req, res) => {
  try {
    const { id } = req.body;
    const updated = deleteModels(Offer, id);
    res.status(200).json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  getOffer,
  postOffer,
  putOffer,
  deleteOffer,
};
