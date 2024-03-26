import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { TestQuestionDomainModule } from '../domain'
import { TestQuestionController } from './testQuestion.controller'

import { TestDomainModule } from '../../../modules/test/domain'

import { TestQuestionByTestController } from './testQuestionByTest.controller'

import { QuestionDomainModule } from '../../../modules/question/domain'

import { TestQuestionByQuestionController } from './testQuestionByQuestion.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    TestQuestionDomainModule,

    TestDomainModule,

    QuestionDomainModule,
  ],
  controllers: [
    TestQuestionController,

    TestQuestionByTestController,

    TestQuestionByQuestionController,
  ],
  providers: [],
})
export class TestQuestionApplicationModule {}
