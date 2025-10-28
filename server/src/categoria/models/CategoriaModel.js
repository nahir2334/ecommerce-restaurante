import { dbpromise as db} from '../../config/db.js'

const create = async(categoria) => {
  const [rows] = await db.query('INSERT INTO categoria (categoria) VALUES (?)', [categoria]);
  return rows;
}

const getAll = async() => {
  const [rows] = await db.query('SELECT * FROM categoria');
  return rows;
}

const update = async(id, categoria) => {
  const [rows] = await db.query('UPDATE categoria SET categoria = ? WHERE id = ?', [categoria, id]);
  return rows;
}

const deleteById = async(id) => {
  const [rows] = await db.query('DELETE FROM categoria WHERE id = ?', [id]);
  return rows;
}


export const CategoriaModel = {
  create,
  getAll,
  update,
  deleteById
};
