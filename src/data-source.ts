import 'reflect-metadata'
import { DataSource, Entity } from 'typeorm'
import { config } from 'dotenv'
import { Admin } from './entities/Admin'
import { Paciente } from './entities/Paciente'
import { Leitos } from './entities/Leitos'


config()

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT) || 3306,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [Admin, Paciente, Leitos],
    synchronize: true, // cria tabelas automaticamente (apenas dev!)
    logging: false
})