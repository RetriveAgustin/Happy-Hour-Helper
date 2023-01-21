const { Router } = require("express");
const offerRouter = Router();

const {
  getOffer,
<<<<<<< HEAD
  postOffer,
  putOffer,
  deleteOffer,
=======
  getOfferById,
  postOffer,
  putOffer,
  deleteOffer,
  restoreOffer,
>>>>>>> f6234c92f7265e1727e62c808b1be545c9930094
} = require("../controllers/OfferController");

offerRouter.get("/getOffer", getOffer);

<<<<<<< HEAD
=======
offerRouter.get("/getOfferById", getOfferById);

offerRouter.get("/restoreOffer", restoreOffer);

>>>>>>> f6234c92f7265e1727e62c808b1be545c9930094
offerRouter.post("/postOffer", postOffer);

offerRouter.put("/putOffer", putOffer);

<<<<<<< HEAD
offerRouter.put("/deleteOffer", deleteOffer);

module.exports = offerRouter;
=======
offerRouter.delete("/deleteOffer", deleteOffer);

module.exports = offerRouter;
>>>>>>> f6234c92f7265e1727e62c808b1be545c9930094
