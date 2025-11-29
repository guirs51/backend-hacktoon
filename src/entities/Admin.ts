import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate, CreateDateColumn, UpdateDateColumn, AfterUpdate } from 'typeorm'
import bcrypt from 'bcrypt'

@Entity('admins')
export class Admin {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 100 })
    password: string

    @Column({ length: 100 })
    name: string

    @BeforeInsert()
    @AfterUpdate()
    async hashPassword() {

        if (!this.password.startsWith('$2')) {
            const rounds = parseInt(process.env.BCRYPT_SALT_ROUNDS || '10', 10)

            this.password = await bcrypt.hash(this.password, rounds)
        }
    }


    async validatePassword(plain: string): Promise<boolean> {
        return bcrypt.compare(plain, this.password)
    }
}