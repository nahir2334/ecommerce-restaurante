import { ProductsController } from "../controllers/ProductsController";
import express from "express";  
const router = express.Router();

router.post('/products', ProductsController.createProduct);
router.get('/products', ProductsController.getAllProducts);
router.delete('/products/:id', ProductsController.deleteProduct);
router.update('/products/:id', ProductsController.updateProduct);

export {router};