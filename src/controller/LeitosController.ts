import { Request, Response } from "express";
import { LeitosService } from "../service/LeitosService";

const service = new LeitosService()

export class LeitosController {

    async create(req: Request, res: Response) {
        try {
            const leitos = await service.create(req.body)
            return res.status(201).json(leitos)
        } catch (e: any) {
            return res.status(401).json({ mensagem: "Erro em adicionar o paciente: " + e.mensagem })
        }
    }

    async findById(req: Request, res: Response) {
        try {
            const { id } = req.params
            const leitos = await service.findById(Number(id))
            return res.status(201).json(leitos)
        } catch (e: any) {
            return res.status(401).json({ mensagem: "houve um erro em buscar: " + e.mensagem })
        }
    }

    async remove(req: Request, res: Response) {
        try {
            const { id } = req.params
            const leitos = await service.remove(Number(id))
            res.status(201).json(leitos)
        } catch (e: any) {
            res.status(401).json({ mensagem: "houve um erro em deletar: " + e.mensagem })
        }
    }
}