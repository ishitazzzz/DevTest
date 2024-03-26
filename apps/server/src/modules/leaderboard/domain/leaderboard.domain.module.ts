import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { LeaderboardDomainFacade } from './leaderboard.domain.facade'
import { Leaderboard } from './leaderboard.model'

@Module({
  imports: [TypeOrmModule.forFeature([Leaderboard]), DatabaseHelperModule],
  providers: [LeaderboardDomainFacade, LeaderboardDomainFacade],
  exports: [LeaderboardDomainFacade],
})
export class LeaderboardDomainModule {}
