import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  name: string

  @Column({ unique: true })
  email: string

  @Column()
  password_hash: string

  @Column({ nullable: false, default: false })
  administrator: boolean

  @Column({ nullable: false, default: false })
  activation: boolean

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}
