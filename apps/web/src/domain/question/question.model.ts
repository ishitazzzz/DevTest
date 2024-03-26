import { Option } from '../option'

import { TestQuestion } from '../testQuestion'

export class Question {
  id: string

  text: string

  type: string

  dateCreated: string

  dateDeleted: string

  dateUpdated: string

  options?: Option[]

  testQuestions?: TestQuestion[]
}
