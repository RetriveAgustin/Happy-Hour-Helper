const { Router } = require("express");
const offerRouter = Router();

const {
  getOffer,
  getOfferById,
  postOffer,
  putOffer,
  deleteOffer,
  restoreOffer,
} = require("../controllers/OfferController");

offerRouter.get("/getOffer", getOffer);

offerRouter.get("/getOfferById", getOfferById);

offerRouter.get("/restoreOffer", restoreOffer);

offerRouter.post("/postOffer", postOffer);

offerRouter.put("/putOffer", putOffer);

offerRouter.delete("/deleteOffer", deleteOffer);

module.exports = offerRouter;
