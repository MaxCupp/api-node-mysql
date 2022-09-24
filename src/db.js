import { createPool } from "mysql2/promise"; // createPool me crea un conjunto de conexiones a diferencia de createConnection

import {
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_DATABASE,
  DB_PORT,
} from "./config.js";

export const pool = createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  port: DB_PORT, //se puede omitir y asignará el que trae por defecto que es 3306
  database: DB_DATABASE,
});
