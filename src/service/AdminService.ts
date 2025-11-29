import { PassThrough } from 'stream'
import { AppDataSource } from '../data-source'
import { Admin } from '../entities/Admin'

export class AdminService {
    private AdminRepo = AppDataSource.getRepository(Admin)

    async crate(data: { password: string, name: string }) {
        try {
            const admin = await this.AdminRepo.create(data)
            await this.AdminRepo.save(admin)
            return admin
        } catch (e: any) {
            console.log("Erro ao criar o Admin: " + e.mensagem)
            throw e
        }
    }

    async login(data: { password: string, nome: string }) {
        try {
            const admin = await this.AdminRepo.findOne({ where: { name: data.nome } })
            if (!admin) throw new Error("Erro ao realizar o login. usuario invalido")
            const boolean: boolean = await admin.validatePassword(data.password)
            if (!boolean)  throw new Error("Erro ao realizar o login. senha invalida")
            return { mensagem: "login realizado" }
        } catch (e) {
            console.log(e)
        }
    }

}