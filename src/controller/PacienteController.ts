import { Request, Response } from "express";
import { PacienteService } from "../service/PacienteService";

const service = new PacienteService()

export class PacienteController {

    async create(req: Request, res: Response) {
        try {
            const paciente = await service.create(req.body)
            res.status(201).json(paciente)
        } catch (e: any) {
            res.status(401).json({ mensagem: "Erro em adicionar o paciente: " + e.mensagem })
        }
    }

    async findByCpf(req: Request, res: Response) {
        try {
            const { cpf } = req.params
            const paciente = await service.findByCpf(String(cpf))
            res.status(201).json(paciente)
        } catch (e: any) {
            res.status(401).json({ mensagem: "houve um erro em buscar: " + e.mensagem })
        }
    }

    async remove(req: Request, res: Response) {
        try {
            const { id } = req.params
            const paciente = await service.remove(id)
            res.status(201).json(paciente)
        } catch (e: any) {
            res.status(401).json({ mensagem: "houve um erro em deletar: " + e.mensagem })
        }
    }

    async statusLeitos(req: Request, res: Response) {
        try {
            const leito = await service.emLeito(req.body)
            res.status(201).json(leito)
        } catch (e: any) {
            res.status(401).json({ mensagem: "aconteceu um erro: " + e.mensagem })
        }
    }
}