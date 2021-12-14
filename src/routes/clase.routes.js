import { Router } from "express";
import * as clase from '../controllers/clases.controller';

const router = Router();

router.post('/', clase.createClase);
router.get('/', clase.getClases);
router.get('/:classId', clase.getClaseById);

export default router;