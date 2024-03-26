import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { AnswerDomainFacade } from '@server/modules/answer/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { AnswerApplicationEvent } from './answer.application.event'
import { AnswerCreateDto } from './answer.dto'

import { TestQuestionDomainFacade } from '../../testQuestion/domain'

@Controller('/v1/testQuestions')
export class AnswerByTestQuestionController {
  constructor(
    private testQuestionDomainFacade: TestQuestionDomainFacade,

    private answerDomainFacade: AnswerDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/testQuestion/:testQuestionId/answers')
  async findManyTestQuestionId(
    @Param('testQuestionId') testQuestionId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent =
      await this.testQuestionDomainFacade.findOneByIdOrFail(testQuestionId)

    const items = await this.answerDomainFacade.findManyByTestQuestion(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/testQuestion/:testQuestionId/answers')
  async createByTestQuestionId(
    @Param('testQuestionId') testQuestionId: string,
    @Body() body: AnswerCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, testQuestionId }

    const item = await this.answerDomainFacade.create(valuesUpdated)

    await this.eventService.emit<AnswerApplicationEvent.AnswerCreated.Payload>(
      AnswerApplicationEvent.AnswerCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
