import { ProductsController } from "../controllers/ProductsController.js";
import express from "express";  
const router = express.Router();

router.post('/products', ProductsController.createProduct);
router.get('/products', ProductsController.getAllProducts);
router.delete('/products/:id', ProductsController.deleteProduct);
router.put('/products/:id', ProductsController.updateProduct);

export {router};