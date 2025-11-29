import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate, CreateDateColumn, UpdateDateColumn, AfterUpdate } from 'typeorm'
import bcrypt from 'bcrypt'

@Entity('pacientes')
export class Paciente {

    @PrimaryGeneratedColumn()
    id: number

    @Column({length: 100})
    nome: string

    @Column()
    cpf: string

    @Column()
    status: "ativo" | "não ativo"
}