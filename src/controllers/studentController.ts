import { Request, Response } from "express";
import { pool } from "../db/db";

export const getStudents = async (req: Request, res: Response) => {
  const students = await pool.query(
    "SELECT * FROM students",
    (error, results) => {
      if (error) throw error;
      res.status(200).json(results.rows);
    }
  );
};
