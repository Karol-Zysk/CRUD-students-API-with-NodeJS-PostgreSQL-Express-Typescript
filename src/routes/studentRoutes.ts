import { Router } from "express";
import { getStudentById, getStudents, addStudent, deleteStudent } from "../controllers/studentController";

const router = Router();

router.get("/", getStudents);
router.post('/', addStudent)

router.get("/:id", getStudentById);
router.delete("/:id", deleteStudent);


export default router;
