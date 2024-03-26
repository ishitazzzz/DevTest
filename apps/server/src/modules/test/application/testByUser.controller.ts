import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { TestDomainFacade } from '@server/modules/test/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { TestApplicationEvent } from './test.application.event'
import { TestCreateDto } from './test.dto'

import { UserDomainFacade } from '../../user/domain'

@Controller('/v1/users')
export class TestByUserController {
  constructor(
    private userDomainFacade: UserDomainFacade,

    private testDomainFacade: TestDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/user/:userId/tests')
  async findManyUserId(
    @Param('userId') userId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.userDomainFacade.findOneByIdOrFail(userId)

    const items = await this.testDomainFacade.findManyByUser(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/user/:userId/tests')
  async createByUserId(
    @Param('userId') userId: string,
    @Body() body: TestCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, userId }

    const item = await this.testDomainFacade.create(valuesUpdated)

    await this.eventService.emit<TestApplicationEvent.TestCreated.Payload>(
      TestApplicationEvent.TestCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
