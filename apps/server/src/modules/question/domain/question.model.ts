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

import { Option } from '../../../modules/option/domain'

import { TestQuestion } from '../../../modules/testQuestion/domain'

@Entity()
export class Question {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({})
  text: string

  @Column({})
  type: string

  @OneToMany(() => Option, child => child.question)
  options?: Option[]

  @OneToMany(() => TestQuestion, child => child.question)
  testQuestions?: TestQuestion[]

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
