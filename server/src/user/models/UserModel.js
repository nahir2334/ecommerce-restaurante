import { dbpromise as db} from '../../config/db.js'

const create = async(name, password) => {
  const [rows] = await db.query('INSERT INTO user (name, password) VALUES (?, ?)', [name, password]);
  return rows;
}

const getByName = async(name) => {
  const [rows] = await db.query('SELECT * FROM user WHERE name = ?', [name]);
  return rows;
}


export const UserModel = {
  create,
  getByName
};
