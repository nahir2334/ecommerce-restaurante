import { CategoriaModel } from "../models/CategoriaModel.js";

const createCategoria = async (req, res) => {  
    try {
        const { categoria } = req.body;
        
        const newCategoria = await CategoriaModel.create(categoria);
        res.status(201).json(newCategoria);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getAllCategorias = async (req, res) => {
    try {
        const categorias = await CategoriaModel.getAll();
        res.status(200).json(categorias);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const updateCategoria = async (req, res) => {
    try {
        const { id } = req.params;
        const { categoria } = req.body;

        const updatedCategoria = await CategoriaModel.update(id, categoria);
        res.status(200).json(updatedCategoria);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const deleteCategoria = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedCategoria = await CategoriaModel.deleteById(id);
        res.status(200).json(deletedCategoria);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const CategoriaController = {
    createCategoria,
    getAllCategorias,
    updateCategoria,
    deleteCategoria
}
