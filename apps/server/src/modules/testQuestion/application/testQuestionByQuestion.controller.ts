import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { TestQuestionDomainFacade } from '@server/modules/testQuestion/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { TestQuestionApplicationEvent } from './testQuestion.application.event'
import { TestQuestionCreateDto } from './testQuestion.dto'

import { QuestionDomainFacade } from '../../question/domain'

@Controller('/v1/questions')
export class TestQuestionByQuestionController {
  constructor(
    private questionDomainFacade: QuestionDomainFacade,

    private testQuestionDomainFacade: TestQuestionDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/question/:questionId/testQuestions')
  async findManyQuestionId(
    @Param('questionId') questionId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.questionDomainFacade.findOneByIdOrFail(questionId)

    const items = await this.testQuestionDomainFacade.findManyByQuestion(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/question/:questionId/testQuestions')
  async createByQuestionId(
    @Param('questionId') questionId: string,
    @Body() body: TestQuestionCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, questionId }

    const item = await this.testQuestionDomainFacade.create(valuesUpdated)

    await this.eventService.emit<TestQuestionApplicationEvent.TestQuestionCreated.Payload>(
      TestQuestionApplicationEvent.TestQuestionCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
