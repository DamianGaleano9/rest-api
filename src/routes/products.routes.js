import { Router } from "express";
import { methods as ProductsControllers } from "../controllers/products.controllers";

const router= Router();

router.get("/", ProductsControllers.getProducts);
router.get("/:products_id", ProductsControllers.getProduct);
router.post("/", ProductsControllers.addProducts);




export default router;