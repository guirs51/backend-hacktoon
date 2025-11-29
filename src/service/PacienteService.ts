import { exec } from "child_process";
import { AppDataSource } from "../data-source";
import { Paciente } from "../entities/Paciente";
import { Leitos } from "../entities/Leitos";

export class PacienteService {
    private repo = AppDataSource.getRepository(Paciente)
    private leitoRepo = AppDataSource.getRepository(Leitos)

    async create(data: { nome: string, cpf: string }) {
        try {
            const exist = await this.repo.findOne({ where: { cpf: data.cpf } })
            console.log(data.nome, data.cpf)
            if (exist) throw new Error('cpf ja utilizado por outro paciente')
            const paciente = await this.repo.create(data)
            return await this.repo.save(paciente)
        } catch (e) {
            console.log("houve um erro em  criar um Paciente: " + e)
        }
    }

    async findByCpf(cpf: string) {
        try {
            const exist = await this.repo.findOne({ where: { cpf } })
            if (!exist) throw new Error('Paciente não encontrado')
            return exist
        } catch (e) {
            console.log(e)
        }
    }

    async remove(cpf: string) {
        try {
            const exist = await this.repo.findOne({ where: { cpf } })
            if (!exist) throw new Error("Paciente não encontrado")
            await this.repo.remove(exist)
            return { mensagem: 'Usuario removido' }
        } catch (e) {
            console.log(e)
        }
    };

    async emLeito(data: { cpf: string, id: number }) {
        try {
            const exist = await this.repo.findOne({ where: { cpf: data.cpf } })
            if (!exist) throw new Error("Paciente não encontado");
            const leitos = await this.leitoRepo.findOne({ where: { id: data.id } })
            if (!leitos) throw new Error("leito não encontrado")
            console.log(exist)
            if (exist.status === 'ativo') {
                leitos.quantidadeEmUso -= 1
                if (leitos.quantidadeEmUso < 0) {
                    leitos.quantidadeEmUso = 0
                }

                if (leitos.quantidadeEmUso == 0) {
                    leitos.disponivel = "Cheio"
                } else {
                    leitos.disponivel = "Disponivel"
                }

                exist.status = "não ativo"

            } else if (exist.status === 'não ativo') {
                leitos.quantidadeEmUso += 1
                if (leitos.quantidadeEmUso > 999) {
                    leitos.quantidadeEmUso = 999
                }

                if (leitos.quantidadeEmUso == 0) {
                    leitos.disponivel = "Cheio"
                } else {
                    leitos.disponivel = "Disponivel"
                }

                exist.status = "ativo"

            }

            await this.repo.save(exist)
            await this.leitoRepo.save(leitos)
            return leitos
        } catch (e) {
            console.log(e)
        }
    }
}