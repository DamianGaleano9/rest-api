import express from "express";
import morgan from "morgan";

// Routes 
import ProductsRoute from "./routes/products.routes";

const app = express();


// Settings
app.set("port", 4000);


// Middlewares 
app.use(morgan("dev"));


// Routes

app.use("/api/products" , ProductsRoute)

export default app;