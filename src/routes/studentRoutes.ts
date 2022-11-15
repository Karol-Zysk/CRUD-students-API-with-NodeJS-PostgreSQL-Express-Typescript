import { Router } from "express";
import {
  getStudentById,
  getStudents,
  addStudent,
  deleteStudent,
  updateStudent,
} from "../controllers/studentController";

const router = Router();

router.get("/", getStudents);
router.post("/", addStudent);

router.get("/:id", getStudentById);
router.delete("/:id", deleteStudent);
router.put("/:id", updateStudent);

export default router;
