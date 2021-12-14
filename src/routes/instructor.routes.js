import { Router } from "express";
import * as docente from "../controllers/instructor.controller";

const router = Router();

router.post('/', docente.createInstructor);
router.get('/', docente.getInstructors);
router.get('/:instructorId', docente.getInstructorById);

export default router;