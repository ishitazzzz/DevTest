import { TestQuestion } from '../testQuestion'

import { Option } from '../option'

export class Answer {
  id: string

  text?: string

  testQuestionId: string

  testQuestion?: TestQuestion

  selectedOptionId?: string

  selectedOption?: Option

  dateCreated: string

  dateDeleted: string

  dateUpdated: string
}
