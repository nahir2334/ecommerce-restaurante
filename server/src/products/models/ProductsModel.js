import { dbpromise as db} from '../../config/db.js'

const create = async(nombre, precio, detalle, categoria) => {
  const [rows] = await db.query('INSERT INTO productos (nombre, precio, detalle, FK_ID_CATEGORIA) VALUES (?, ?, ?, ?)', [nombre, precio, detalle, categoria]);
  return rows;
}

const getAll = async() => {
  const [rows] = await db.query('SELECT * FROM productos');
  return rows;
}

const deleteProduct = async(id) => {
  const [rows] = await db.query('DELETE FROM productos WHERE id = ?', [id]);
  return rows;
}

const updateProduct= async(id, nombre, precio, detalle, categoria) => {
  const [rows] = await db.query('UPDATE productos SET nombre = ?, precio = ?, detalle = ?, FK_ID_CATEGORIA = ?, WHERE id = ?', [nombre, precio, detalle, categoria, id]);
  return rows;
}

export const ProductsModel = {
  create,
  getAll,
  deleteProduct,
  updateProduct
};
