export namespace LeaderboardApplicationEvent {
  export namespace LeaderboardCreated {
    export const key = 'leaderboard.application.leaderboard.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
