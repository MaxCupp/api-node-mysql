import { pool } from "../db.js"; // Importamos pool de db.js

export const ping = async (req, res) => {
  const result = await pool.query('SELECT "pong" AS Result'); // es asíncrono y hay varias formas usarlo, como pasandole como segundo argumento un callback, o usando el metodo then, pero aquí usaremos async-await
  // const [result] = await pool.query('SELECT 1 + 1 AS Result')
  // res.json(result)
  // res.json(result[0])
  res.json(result[0][0]);
}