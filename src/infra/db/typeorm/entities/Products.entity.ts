import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany
} from 'typeorm'
import { Companies } from './Companies.entity'
import { Services } from './Services.entity'

@Entity({ name: 'products' })
export class Products {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  name: string

  @Column()
  company_id: number

  @ManyToOne(
    () => Companies,
    companies => companies.productConnection
  )
  @JoinColumn({ name: 'company_id', referencedColumnName: 'id' })
  companyConnection?: Companies

  @OneToMany(
    () => Services,
    services => services.productConnection
  )
  serviceConnection?: Services[]

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}
