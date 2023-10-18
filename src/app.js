import express from "express";
import morgan from "morgan";

// Routes 
import ProductsRoute from "./routes/products.routes";
import UsersRoute from "./routes/users.routes";


const app = express();


// Settings
app.set("port", 4000);


// Middlewares 
app.use(morgan("dev"));
app.use(express.json());

// Routes

app.use("/api/products", ProductsRoute)
app.use("/api/users", UsersRoute)


export default app;