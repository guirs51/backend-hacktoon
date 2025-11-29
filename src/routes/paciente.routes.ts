import { Router } from "express";
import { PacienteController } from "../controller/PacienteController";

const controller = new PacienteController
const PacienteRouter = Router()

PacienteRouter.post("/create", controller.create.bind(controller))
PacienteRouter.get("/get/:cpf", controller.findByCpf.bind(controller))
PacienteRouter.delete("/delete/:cpf", controller.remove.bind(controller))
PacienteRouter.post("/leitos",controller.statusLeitos.bind(controller))

export default PacienteRouter