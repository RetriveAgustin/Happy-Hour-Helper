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
    const offer = await getModels(Offer, name);
    res.status(200).json(offer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getOfferById = async (req, res) => {
  try {
    const { id } = req.body;
    const offer = getModelsById(Offer, id);
    res.status(200).json(offer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const postOffer = async (req, res) => {
  try {
    const { name, price, img, description, initial_date, expiration_date, category } =
      req.body;
    const offer = await postModels(Offer, {
      name,
      price,
      img,
      description,
      initial_date,
      expiration_date,
    });

    await product.addCategory(category);

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
    const { id, properties } = req.body;
    const result = await putModels(Offer, id, properties);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteOffer = async (req, res) => {
  try {
    const { id } = req.body;
    const updated = await deleteModels(Offer, id);
    res.status(200).json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const restoreOffer = async (req, res) => {
  try {
    const { id } = req.body;
    const restored = await restoreModels(Offer, id);
    res.status(200).json(restored);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getOffer,
  getOfferById,
  postOffer,
  putOffer,
  deleteOffer,
  restoreOffer,
};
