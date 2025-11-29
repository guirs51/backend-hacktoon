import { Router } from "express";
import { LeitosController } from "../controller/LeitosController";

const LeitosRouter = Router()
const controller = new LeitosController()

LeitosRouter.post("/create", controller.create.bind(controller))
LeitosRouter.get('/get/:id', controller.findById.bind(controller))
LeitosRouter.delete('/delete/:id', controller.remove.bind(controller))

export default LeitosRouter