
// utils/db.js
import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",  // ganti sesuai DB kamu
  password: "postgres",  // ganti sesuai password kamu
  port: 5432,
});

export default pool;
