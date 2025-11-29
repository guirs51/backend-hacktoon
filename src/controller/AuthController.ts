import { Request, Response } from "express";
import { AdminService } from "../service/AdminService";

const service = new AdminService()

export class AdminController {
    async create(req: Request, res: Response) {
        try {
            const admin = await service.crate(req.body)
            console.log(admin);

            res.status(201).json({ message: "Sucesso ao cadastrar", admin: admin })
        } catch (e) {
            res.status(401).json({ mensagem: "Erro ao cadastrar: " + e })
        }
    }

    async login(req: Request, res: Response) {
        try {
            const admin = await service.login(req.body)
            console.log(admin);
            res.status(201).json(admin)
        } catch (e: any) {
            res.status(401).json({ mensagem: "Erro ao cadastrar: " + e.mensagem })
        }
    }
}