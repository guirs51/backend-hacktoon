import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate, CreateDateColumn, UpdateDateColumn, AfterUpdate } from 'typeorm'
import bcrypt from 'bcrypt'

@Entity('leitos')
export class Leitos {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 100 })
    setor: string

    @Column({ length: 100 })
    name: string

    @Column()
    quantidade: number

    @Column()
    disponivel: "Disponivel" | "Cheio"
}