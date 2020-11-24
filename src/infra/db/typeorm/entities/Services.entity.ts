import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn
} from 'typeorm'
import { Products } from './Products.entity'

@Entity({ name: 'services' })
export class Services {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  name: string

  @Column()
  description: string

  @Column()
  product_id: number

  @ManyToOne(
    () => Products,
    product => product.serviceConnection
  )
  @JoinColumn({ name: 'product_id', referencedColumnName: 'id' })
  productConnection?: Products

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}
