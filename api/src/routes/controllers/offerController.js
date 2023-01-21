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
<<<<<<< HEAD
    const offer = name ? getModels(Offer, name) : getModels(Offer);
=======
    const offer = await getModels(Offer, name);
    res.status(200).json(offer);
  } catch (error) {
    res.status(400).json({ error: err.message });
  }
};

const getOfferById = async (req, res) => {
  try {
    const { id } = req.body;
    const offer = getModelsById(Offer, id);
>>>>>>> f6234c92f7265e1727e62c808b1be545c9930094
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
<<<<<<< HEAD
    const { id, properties } = req.query;
    const offer = getModelsById(Offer, id);
    const updatedOffer = putModels(offer, properties);
    res.status(200).json(updatedOffer);
=======
    const { id, properties } = req.body;
    const result = await putModels(Offer, id, properties);
    res.status(200).json(result);
>>>>>>> f6234c92f7265e1727e62c808b1be545c9930094
  } catch (error) {
    res.status(400).json({ error: err.message });
  }
};

const deleteOffer = async (req, res) => {
  try {
    const { id } = req.body;
<<<<<<< HEAD
    const updated = deleteModels(Offer, id);
=======
    const updated = await deleteModels(Offer, id);
>>>>>>> f6234c92f7265e1727e62c808b1be545c9930094
    res.status(200).json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

<<<<<<< HEAD
module.exports = {
  getOffer,
  postOffer,
  putOffer,
  deleteOffer,
=======
const restoreOffer = async (req, res) => {
  try {
    const { id } = req.body;
    const restored = await restoreModels(Offer, id);
    res.status(200).json(restored);
  } catch (error) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  getOffer,
  getOfferById,
  postOffer,
  putOffer,
  deleteOffer,
  restoreOffer,
>>>>>>> f6234c92f7265e1727e62c808b1be545c9930094
};
