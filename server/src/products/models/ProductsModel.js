import { dbpromise as db} from '../../config/db.js'

const create = async(name, price, description) => {
  const [rows] = await db.query('INSERT INTO products (name, price, description) VALUES (?, ?, ?)', [name, price, description]);
  return rows;
}

const getAll = async() => {
  const [rows] = await db.query('SELECT * FROM products');
  return rows;
}

const deleteProduct = async(id) => {
  const [rows] = await db.query('DELETE FROM products WHERE id = ?', [id]);
  return rows;
}


export const ProductsModel = {
  create,
  getAll,
  deleteProduct
};
