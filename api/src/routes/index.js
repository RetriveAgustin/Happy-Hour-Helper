const adress = require("./controllers/adressRouter");
const brand = require("./controllers/brandRouter");
const category = require("./controllers/categoryRouter");
const discounts = require("./controllers/discountsRouter");
const offers = require("./controllers/offersRouter");
const orders = require("./controllers/ordersRouter");
const payment_methods = require("./controllers/payment_methodsRouter");
const products = require("./controllers/productsRouter");
const sub_category = require("./controllers/sub_categoryRouter");
const user = require("./controllers/userRouter");

const { Router } = require('express');
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/adress", adress);
router.use("/brand", brand);
router.use("/category", category);
router.use("/discounts", discounts);
router.use("/offers", offers);
router.use("/orders", orders);
router.use("/payment-methods", payment_methods);
router.use("/products", products);
router.use("/sub-category", sub_category);
router.use("/users", user);



module.exports = router;