import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn
} from 'typeorm'
import { Product } from './Product.entity'

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

  @ManyToOne(() => Product, (product) => product.serviceConnection)
  @JoinColumn({ name: 'product_id', referencedColumnName: 'id' })
  productConnection?: Product

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}
