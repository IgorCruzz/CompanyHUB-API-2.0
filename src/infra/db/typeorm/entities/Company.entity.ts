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
import { Product } from './Product.entity'

@Entity({ name: 'companies' })
export class Company {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  name: string

  @Column()
  cnpj: string

  @Column()
  user_id?: number

  @OneToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user?: User

  @OneToMany(() => Product, (product) => product.companyConnection)
  productConnection?: Product[]

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}
