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

import { Question } from '../../../modules/question/domain'

import { Answer } from '../../../modules/answer/domain'

@Entity()
export class Option {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({})
  text: string

  @Column({})
  isCorrect: boolean

  @Column({})
  questionId: string

  @ManyToOne(() => Question, parent => parent.options)
  @JoinColumn({ name: 'questionId' })
  question?: Question

  @OneToMany(() => Answer, child => child.selectedOption)
  answersAsSelectedOption?: Answer[]

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
