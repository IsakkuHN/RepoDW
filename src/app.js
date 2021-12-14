import express from "express";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";

import instructorRoutes from './routes/instructor.routes';
import participanteRoutes from './routes/participante.routes'
import claseRoutes from './routes/clase.routes'

const app = express();

app.use(morgan("dev"));

app.use(express.json());

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/instructor", instructorRoutes);
app.use("/participante", participanteRoutes);
app.use("/clase", claseRoutes);



export default app;