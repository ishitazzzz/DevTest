import { Request } from 'express'

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common'
import { EventService } from '@server/libraries/event'
import { Test, TestDomainFacade } from '@server/modules/test/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { TestApplicationEvent } from './test.application.event'
import { TestCreateDto, TestUpdateDto } from './test.dto'

@Controller('/v1/tests')
export class TestController {
  constructor(
    private eventService: EventService,
    private testDomainFacade: TestDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.testDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(@Body() body: TestCreateDto, @Req() request: Request) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.testDomainFacade.create(body)

    await this.eventService.emit<TestApplicationEvent.TestCreated.Payload>(
      TestApplicationEvent.TestCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:testId')
  async findOne(@Param('testId') testId: string, @Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.testDomainFacade.findOneByIdOrFail(
      testId,
      queryOptions,
    )

    return item
  }

  @Patch('/:testId')
  async update(@Param('testId') testId: string, @Body() body: TestUpdateDto) {
    const item = await this.testDomainFacade.findOneByIdOrFail(testId)

    const itemUpdated = await this.testDomainFacade.update(
      item,
      body as Partial<Test>,
    )
    return itemUpdated
  }

  @Delete('/:testId')
  async delete(@Param('testId') testId: string) {
    const item = await this.testDomainFacade.findOneByIdOrFail(testId)

    await this.testDomainFacade.delete(item)

    return item
  }
}
