import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { TestQuestionDomainFacade } from '@server/modules/testQuestion/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { TestQuestionApplicationEvent } from './testQuestion.application.event'
import { TestQuestionCreateDto } from './testQuestion.dto'

import { TestDomainFacade } from '../../test/domain'

@Controller('/v1/tests')
export class TestQuestionByTestController {
  constructor(
    private testDomainFacade: TestDomainFacade,

    private testQuestionDomainFacade: TestQuestionDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/test/:testId/testQuestions')
  async findManyTestId(
    @Param('testId') testId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.testDomainFacade.findOneByIdOrFail(testId)

    const items = await this.testQuestionDomainFacade.findManyByTest(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/test/:testId/testQuestions')
  async createByTestId(
    @Param('testId') testId: string,
    @Body() body: TestQuestionCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, testId }

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
