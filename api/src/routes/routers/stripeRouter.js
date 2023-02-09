const { Router } = require("express");
const Stripe = require("stripe");
const stripeRouter = Router();

require("dotenv").config();

const stripe = Stripe(process.env.STRIPE_KEY);

stripeRouter.post('/create-checkout-session', async (req, res) => {
  try {
    const line_items = req.body.productItem.map((item) => {
      // console.log(item)
      return {
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.name,
            images: [item.img],
          },
          unit_amount: item.price * 100,
        },
        quantity: item.amount,
      };
    })
    
    const session = await stripe.checkout.sessions.create({
      line_items,
      mode: 'payment',
      success_url: `${process.env.CLIENT_URL}/`,
      cancel_url:  `${process.env.CLIENT_URL}/cart`,
    });
  
  
    // res.redirect(303, session.url);
  } catch (error) {
   console.log(error);
  }
});

module.exports = stripeRouter;