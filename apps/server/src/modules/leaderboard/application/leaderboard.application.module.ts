import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { LeaderboardDomainModule } from '../domain'
import { LeaderboardController } from './leaderboard.controller'

import { UserDomainModule } from '../../../modules/user/domain'

import { LeaderboardByUserController } from './leaderboardByUser.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    LeaderboardDomainModule,

    UserDomainModule,
  ],
  controllers: [LeaderboardController, LeaderboardByUserController],
  providers: [],
})
export class LeaderboardApplicationModule {}
