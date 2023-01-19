const { Router } = require("express");
const offerRouter = Router();

const {
  getOffer,
  postOffer,
  putOffer,
  deleteOffer,
} = require("../controllers/OfferController");

offerRouter.get("/getOffer", getOffer);

offerRouter.post("/postOffer", postOffer);

offerRouter.put("/putOffer", putOffer);

offerRouter.delete("/deleteOffer", deleteOffer);

module.exports = offerRouter;