import { Router } from "express";
import { AdminController } from "../controller/AuthController";

const authRouter = Router()
const controller = new AdminController()

authRouter.post('/register', controller.create.bind(controller))
authRouter.post("/login", controller.login.bind(controller))


export default authRouter