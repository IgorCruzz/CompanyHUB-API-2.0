import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryColumn,
  OneToOne,
  JoinColumn
} from 'typeorm'
import { User } from './User.entity'

@Entity({ name: 'tokens' })
export class Token {
  @PrimaryColumn()
  user_id: number

  @OneToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user?: User

  @Column()
  token: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}
