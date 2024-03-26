import { Notification } from '../notification'

import { Test } from '../test'

import { Leaderboard } from '../leaderboard'

export enum UserStatus {
  CREATED = 'CREATED',
  VERIFIED = 'VERIFIED',
}
export class User {
  id: string
  email: string
  status: UserStatus
  name: string
  pictureUrl: string
  password: string
  dateCreated: string
  dateUpdated: string
  notifications?: Notification[]

  tests?: Test[]

  leaderboards?: Leaderboard[]
}
