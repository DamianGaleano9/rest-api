import express from "express";
import morgan from "morgan";
// import { getConnection } from '../database/database';


// Routes 
import ProductsRoute from "./routes/products.routes";
import UsersRoute from "./routes/users.routes";
// import RegisterRoute from "./routes/register.routes";
// import LoginRoute from "./routes/login.routes";

// app.use("/api/register", UsersRoute)
// app.use("/api/login", UsersRoute)

const app = express();
const cors = require('cors');

// STRIPE //
const Stripe = require("stripe");
const stripe = new Stripe("sk_test_51OAppxJ5RKKP5n8TqxDWxZbrylimvUw6Yr8CQ95iQqlikgjvF45eQ6guMa07YCFYneXUbhs62EAZXyZTmHeUXvis005Aegq4Pc");

// Settings
app.set("port", 4000);



// Middlewares 
app.use(morgan("dev"));
app.use(express.json());
app.use(cors({origin: true, credentials: true}));
app.use("/api/products", ProductsRoute)
app.use("/api/users", UsersRoute)






// STRIPE




app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

app.post("/api/checkout", async (req, res) => {
    console.log('probrando checkout');
    console.log(req.body);
    
  const { id, amount, products_id } = req.body;

  try {
    const payment = await stripe.paymentIntents.create({
      amount: amount,
      return_url: 'https://google.com',
      description: products_id,
      currency: "EUR",
      payment_method: id,
      payment_method_types: ['card'],
      confirm: true, 
    });

    console.log(payment);

    return res.status(200).json({ message: "Successful Payment" });
  } catch (error) {
    console.log(error);
    return res.json({ message: error.raw.message });
  }
});

export default app;

