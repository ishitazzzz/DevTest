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

import { TestQuestion } from '../../../modules/testQuestion/domain'

import { Option } from '../../../modules/option/domain'

@Entity()
export class Answer {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ nullable: true })
  text?: string

  @Column({})
  testQuestionId: string

  @ManyToOne(() => TestQuestion, parent => parent.answers)
  @JoinColumn({ name: 'testQuestionId' })
  testQuestion?: TestQuestion

  @Column({ nullable: true })
  selectedOptionId?: string

  @ManyToOne(() => Option, parent => parent.answersAsSelectedOption)
  @JoinColumn({ name: 'selectedOptionId' })
  selectedOption?: Option

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
