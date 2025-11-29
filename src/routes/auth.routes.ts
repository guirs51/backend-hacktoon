import { Router } from "express";
import { AdminController } from "../controller/AuthController";

const authRouter = Router()
const controller = new AdminController()

authRouter.post('/', controller.create.bind(controller))


export default authRouter