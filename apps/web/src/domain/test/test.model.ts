import { User } from '../user'

import { TestQuestion } from '../testQuestion'

export class Test {
  id: string

  score: number

  completionTime: string

  userId: string

  user?: User

  dateCreated: string

  dateDeleted: string

  dateUpdated: string

  testQuestions?: TestQuestion[]
}
