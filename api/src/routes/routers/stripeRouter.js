const { Router } = require("express");
const Stripe = require("stripe");
const stripeRouter = Router();

require("dotenv").config();

const stripe = Stripe(process.env.STRIPE_KEY);

stripeRouter.post('/create-checkout-session', async (req, res) => {
  
  const line_items = req.body.productItem.map((item) => {
    return {
      price_data: {
        currency: 'ars',
        product_data: {
          name: item.name,
          images: [item.img],
        },
        unit_amount: item.price * 100,
      },
      quantity: 1,
    };
  })
  
  const session = await stripe.checkout.sessions.create({
    line_items,
    mode: 'payment',
    success_url: `http://localhost:3000/home`,
    cancel_url:  `${process.env.CLIENT_URL}/cart`,
  });


  res.send({ url: session.url });
});

module.exports = stripeRouter;