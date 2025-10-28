import { ProductsModel } from "../models/ProductsModel.js";    

const createProduct = async (req, res) => {
  try {
    const { name, price, description } = req.body;

    const newProduct = await ProductsModel.create(name, price, description);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const getAllProducts = async (req, res) => {
    try {
        const products = await ProductsModel.getAll();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: 'Ingrese el ID del Producto' });
    }
    await ProductsModel.deleteProduct(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const updateProduct = async(req, res) => {
  try {
    const { id } = req.params;
    const { nombre, precio, detalle, categoria } = req.body;

    if (!id) {
      return res.status(400).json({ message: 'Ingrese Product ID' });
    }
    await ProductsModel.updateProduct(id, nombre, precio, detalle, categoria);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export const ProductsController = {
  createProduct,
  getAllProducts,
  deleteProduct,
  updateProduct
}