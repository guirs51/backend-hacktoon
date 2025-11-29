import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate, CreateDateColumn, UpdateDateColumn, AfterUpdate } from 'typeorm'
import { IsInt, Min, Max } from "class-validator";

@Entity('leitos')
export class Leitos {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 100 })
    setor: string

    @Column({ length: 100 })
    name: string

    @Column()
    quantidadeEmUso: number

    @Column()
    disponivel: "Disponivel" | "Cheio"

    @Column()
    @Max(45)
    qtdLeitosMax: 40
}