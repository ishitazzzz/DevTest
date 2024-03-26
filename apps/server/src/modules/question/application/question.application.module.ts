import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { QuestionDomainModule } from '../domain'
import { QuestionController } from './question.controller'

@Module({
  imports: [AuthenticationDomainModule, QuestionDomainModule],
  controllers: [QuestionController],
  providers: [],
})
export class QuestionApplicationModule {}
