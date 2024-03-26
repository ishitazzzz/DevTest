import { Question } from '../question'

import { Answer } from '../answer'

export class Option {
  id: string

  text: string

  isCorrect: boolean

  questionId: string

  question?: Question

  dateCreated: string

  dateDeleted: string

  dateUpdated: string

  answersAsSelectedOption?: Answer[]
}
