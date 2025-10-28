import { CategoriaController } from "../controllers/CategoriaController.js";

import express from "express";  
const router = express.Router();

router.post('/categoria', CategoriaController.createCategoria);
router.get('/categoria', CategoriaController.getAllCategorias);
router.put('/categoria/:id', CategoriaController.updateCategoria);
router.delete('/categoria/:id', CategoriaController.deleteCategoria);

export {router};