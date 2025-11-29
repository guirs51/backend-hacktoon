import { AppDataSource } from "../data-source";
import { Leitos } from "../entities/Leitos";

export class LeitosService {
    private repo = AppDataSource.getRepository(Leitos)

    async create(data: { setor: string, name: string, quantidadeEmUso: number, disponivel: "Disponivel" | "Cheio", qtdLeitos: number}) {
        try {
            const exist = await this.repo.findOne({ where: { name: data.name } })
            if (exist) throw new Error('leito ja criado')
            const paciente = await this.repo.create(data)
            return await this.repo.save(paciente)
        } catch (e) {
            console.log("houve um erro em  criar um leito: " + e)
        }
    }

    async findById(id: number) {
        try {
            const exist = await this.repo.findOne({ where: { id } })
            if (!exist) throw new Error('leito não encontrado')
            return exist
        } catch (e) {
            console.log(e)
        }
    }

    async remove(id: number) {
        try {
            const exist = await this.repo.findOne({ where: { id } })
            if (!exist) throw new Error("leito não encontrado")
            await this.repo.remove(exist)
            return { mensagem: 'leito removido' }
        } catch (e) {
            console.log(e)
        }
    };
}