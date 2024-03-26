import { Module } from '@nestjs/common'
import { SocketModule } from '@server/libraries/socket'
import { AuthorizationDomainModule } from '@server/modules/authorization/domain'
import { NotificationDomainModule } from '../domain'

import { NotificationQuestionSubscriber } from './subscribers/notification.question.subscriber'

import { NotificationOptionSubscriber } from './subscribers/notification.option.subscriber'

import { NotificationTestSubscriber } from './subscribers/notification.test.subscriber'

import { NotificationTestQuestionSubscriber } from './subscribers/notification.testQuestion.subscriber'

import { NotificationAnswerSubscriber } from './subscribers/notification.answer.subscriber'

import { NotificationLeaderboardSubscriber } from './subscribers/notification.leaderboard.subscriber'

@Module({
  imports: [AuthorizationDomainModule, NotificationDomainModule, SocketModule],
  providers: [
    NotificationQuestionSubscriber,

    NotificationOptionSubscriber,

    NotificationTestSubscriber,

    NotificationTestQuestionSubscriber,

    NotificationAnswerSubscriber,

    NotificationLeaderboardSubscriber,
  ],
  exports: [],
})
export class NotificationInfrastructureModule {}
