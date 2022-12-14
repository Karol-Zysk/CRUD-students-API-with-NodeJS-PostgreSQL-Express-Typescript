import pg from "pg";

const Pool = pg.Pool;

export const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "students",
  password: process.env.DB_PASSWORD,
  port: Number(`${process.env.DB_PORT}`),
});
