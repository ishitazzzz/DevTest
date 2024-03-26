import { Module } from '@nestjs/common'
import { AuthenticationApplicationModule } from './authentication/application'
import { AuthorizationApplicationModule } from './authorization/application'
import { UserApplicationModule } from './user/application'

import { QuestionApplicationModule } from './question/application'

import { OptionApplicationModule } from './option/application'

import { TestApplicationModule } from './test/application'

import { TestQuestionApplicationModule } from './testQuestion/application'

import { AnswerApplicationModule } from './answer/application'

import { LeaderboardApplicationModule } from './leaderboard/application'

import { AiApplicationModule } from './ai/application/ai.application.module'
import { NotificationApplicationModule } from './notification/application/notification.application.module'
import { UploadApplicationModule } from './upload/application/upload.application.module'

@Module({
  imports: [
    AuthenticationApplicationModule,
    UserApplicationModule,
    AuthorizationApplicationModule,
    NotificationApplicationModule,
    AiApplicationModule,
    UploadApplicationModule,

    QuestionApplicationModule,

    OptionApplicationModule,

    TestApplicationModule,

    TestQuestionApplicationModule,

    AnswerApplicationModule,

    LeaderboardApplicationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppApplicationModule {}
