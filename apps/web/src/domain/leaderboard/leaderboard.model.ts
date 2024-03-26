import { User } from '../user'

export class Leaderboard {
  id: string

  score: number

  rank: number

  userId: string

  user?: User

  dateCreated: string

  dateDeleted: string

  dateUpdated: string
}
