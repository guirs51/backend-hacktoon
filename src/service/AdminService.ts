import { AppDataSource } from '../data-source'
import { Admin } from '../entities/Admin'

export class AdminService {
    private AdminRepo = AppDataSource.getRepository(Admin)

    async crate(data: {password: string, name: string}){
        try{
            const admin = await this.AdminRepo.create(data)
            await this.AdminRepo.save(admin)
            return admin
        } catch (e: any) {
            console.log("Erro ao criar o Admin: " + e.mensagem )
            throw e
        }
    }
}