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

import { Test } from '../../../modules/test/domain'

import { Question } from '../../../modules/question/domain'

import { Answer } from '../../../modules/answer/domain'

@Entity()
export class TestQuestion {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({})
  testId: string

  @ManyToOne(() => Test, parent => parent.testQuestions)
  @JoinColumn({ name: 'testId' })
  test?: Test

  @Column({})
  questionId: string

  @ManyToOne(() => Question, parent => parent.testQuestions)
  @JoinColumn({ name: 'questionId' })
  question?: Question

  @OneToMany(() => Answer, child => child.testQuestion)
  answers?: Answer[]

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
