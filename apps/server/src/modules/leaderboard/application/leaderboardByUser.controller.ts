import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { LeaderboardDomainFacade } from '@server/modules/leaderboard/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { LeaderboardApplicationEvent } from './leaderboard.application.event'
import { LeaderboardCreateDto } from './leaderboard.dto'

import { UserDomainFacade } from '../../user/domain'

@Controller('/v1/users')
export class LeaderboardByUserController {
  constructor(
    private userDomainFacade: UserDomainFacade,

    private leaderboardDomainFacade: LeaderboardDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/user/:userId/leaderboards')
  async findManyUserId(
    @Param('userId') userId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.userDomainFacade.findOneByIdOrFail(userId)

    const items = await this.leaderboardDomainFacade.findManyByUser(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/user/:userId/leaderboards')
  async createByUserId(
    @Param('userId') userId: string,
    @Body() body: LeaderboardCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, userId }

    const item = await this.leaderboardDomainFacade.create(valuesUpdated)

    await this.eventService.emit<LeaderboardApplicationEvent.LeaderboardCreated.Payload>(
      LeaderboardApplicationEvent.LeaderboardCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
