import { Router } from "express";
import PacienteRouter from "./paciente.routes";
import LeitosRouter from "./leitos.routes";

const adminRouter = Router()
adminRouter.use('/paciente', PacienteRouter)
adminRouter.use('/leitos', LeitosRouter)


export default adminRouter
