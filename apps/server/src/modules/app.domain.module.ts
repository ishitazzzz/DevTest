import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from './authentication/domain'
import { AuthorizationDomainModule } from './authorization/domain'

import { UserDomainModule } from './user/domain'

import { NotificationDomainModule } from './notification/domain'

import { QuestionDomainModule } from './question/domain'

import { OptionDomainModule } from './option/domain'

import { TestDomainModule } from './test/domain'

import { TestQuestionDomainModule } from './testQuestion/domain'

import { AnswerDomainModule } from './answer/domain'

import { LeaderboardDomainModule } from './leaderboard/domain'

@Module({
  imports: [
    AuthenticationDomainModule,
    AuthorizationDomainModule,
    UserDomainModule,
    NotificationDomainModule,

    QuestionDomainModule,

    OptionDomainModule,

    TestDomainModule,

    TestQuestionDomainModule,

    AnswerDomainModule,

    LeaderboardDomainModule,
  ],
  controllers: [],
  providers: [],
})
export class AppDomainModule {}
