import { Test } from '../test'

import { Question } from '../question'

import { Answer } from '../answer'

export class TestQuestion {
  id: string

  testId: string

  test?: Test

  questionId: string

  question?: Question

  dateCreated: string

  dateDeleted: string

  dateUpdated: string

  answers?: Answer[]
}
