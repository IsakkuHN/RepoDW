import { Router } from "express";
import * as participante from "../controllers/participante.controller";


const router = Router();

router.post('/', participante.createParticipante);
router.get('/', participante.getParticipantes);
router.get('/:participanteId', participante.getParticipanteById);

export default router;

