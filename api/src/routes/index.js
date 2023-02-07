const address = require("./routers/addressRouter");
const brand = require("./routers/brandRouter");
const category = require("./routers/categoryRouter");
const discounts = require("./routers/discountsRouter");
const offers = require("./routers/offersRouter");
const orders = require("./routers/ordersRouter");
const payment_methods = require("./routers/payment_methodsRouter");
const products = require("./routers/productsRouter");
const sub_category = require("./routers/sub_categoryRouter");
const user = require("./routers/userRouter");
const stripe = require ("./routers/stripeRouter")


const { Router } = require('express');
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/address", address);
router.use("/brand", brand);
router.use("/category", category);
router.use("/discounts", discounts);
router.use("/offers", offers);
router.use("/orders", orders);
// router.use("/payment-methods", payment_methods);
router.use("/products", products);
router.use("/sub-category", sub_category);
router.use("/users", user);
router.use("/stripe", stripe);



module.exports = router;