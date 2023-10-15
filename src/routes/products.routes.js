import { Router } from "express";
import { methods as ProductsControllers } from "../controllers/products.controllers";

const router= Router();

router.get("/", ProductsControllers.getProducts)



export default router;