import { Request, Response } from "express";
import { QueryResult } from "pg";
import { pool } from "../db/db";
import {
  addStudentQuery,
  checkEmailExists,
  deleteStudentQuery,
  getStudentByIdQuerry,
  getStudentsQuerry,
} from "../student/queries";

export const getStudents = (req: Request, res: Response) => {
  pool.query(getStudentsQuerry, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};
export const getStudentById = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);

  pool.query(getStudentByIdQuerry, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

export const addStudent = (req: Request, res: Response) => {
  const { name, email, age, dob } = req.body;

  pool.query(checkEmailExists, [email], (error, results) => {
    if (results.rows.length) {
      res.send("email already exists.");
    }

    pool.query(
      addStudentQuery,
      [name, email, age, dob],
      (error: Error, results: QueryResult) => {
        if (error) throw error;
        res.status(201).send("student added");
      }
    );
  });
};

export const deleteStudent = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);

  pool.query(
    getStudentByIdQuerry,
    [id],
    (error: Error, results: QueryResult) => {
      const noStudentFound = !results.rows.length;
      if (noStudentFound) {
        res.send("no student found with this id");
      }
      pool.query(
        deleteStudentQuery,
        [id],
        (error: Error, results: QueryResult) => {
          if (error) throw error;
          res.status(204);
        }
      );
    }
  );
};
