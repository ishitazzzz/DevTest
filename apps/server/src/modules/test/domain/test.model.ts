import { ColumnNumeric } from '@server/core/database'
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

import { User } from '../../../modules/user/domain'

import { TestQuestion } from '../../../modules/testQuestion/domain'

@Entity()
export class Test {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ColumnNumeric({ type: 'numeric' })
  score: number

  @Column({})
  completionTime: string

  @Column({})
  userId: string

  @ManyToOne(() => User, parent => parent.tests)
  @JoinColumn({ name: 'userId' })
  user?: User

  @OneToMany(() => TestQuestion, child => child.test)
  testQuestions?: TestQuestion[]

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
