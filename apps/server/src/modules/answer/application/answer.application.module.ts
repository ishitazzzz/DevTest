import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { AnswerDomainModule } from '../domain'
import { AnswerController } from './answer.controller'

import { TestQuestionDomainModule } from '../../../modules/testQuestion/domain'

import { AnswerByTestQuestionController } from './answerByTestQuestion.controller'

import { OptionDomainModule } from '../../../modules/option/domain'

import { AnswerByOptionController } from './answerByOption.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    AnswerDomainModule,

    TestQuestionDomainModule,

    OptionDomainModule,
  ],
  controllers: [
    AnswerController,

    AnswerByTestQuestionController,

    AnswerByOptionController,
  ],
  providers: [],
})
export class AnswerApplicationModule {}
