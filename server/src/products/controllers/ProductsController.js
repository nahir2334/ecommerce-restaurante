import { ProductsModel } from "../models/ProductsModel";    

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
      return res.status(400).json({ message: 'Ingrese Product ID' });
    }
    await ProductsModel.deleteProduct(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


export const ProductsController = {
  createProduct,
  getAllProducts,
  deleteProduct
}