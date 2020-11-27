import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  OneToMany
} from 'typeorm'
import { User } from './User.entity'
import { Products } from './Products.entity'

@Entity({ name: 'companies' })
export class Company {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  name: string

  @Column()
  cnpj: string

  @Column()
  user_id: number

  @OneToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user?: User

  @OneToMany(
    () => Products,
    product => product.companyConnection
  )
  productConnection?: Products[]

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}
