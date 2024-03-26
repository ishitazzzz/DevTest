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
import {
  Leaderboard,
  LeaderboardDomainFacade,
} from '@server/modules/leaderboard/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { LeaderboardApplicationEvent } from './leaderboard.application.event'
import { LeaderboardCreateDto, LeaderboardUpdateDto } from './leaderboard.dto'

@Controller('/v1/leaderboards')
export class LeaderboardController {
  constructor(
    private eventService: EventService,
    private leaderboardDomainFacade: LeaderboardDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.leaderboardDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(@Body() body: LeaderboardCreateDto, @Req() request: Request) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.leaderboardDomainFacade.create(body)

    await this.eventService.emit<LeaderboardApplicationEvent.LeaderboardCreated.Payload>(
      LeaderboardApplicationEvent.LeaderboardCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:leaderboardId')
  async findOne(
    @Param('leaderboardId') leaderboardId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.leaderboardDomainFacade.findOneByIdOrFail(
      leaderboardId,
      queryOptions,
    )

    return item
  }

  @Patch('/:leaderboardId')
  async update(
    @Param('leaderboardId') leaderboardId: string,
    @Body() body: LeaderboardUpdateDto,
  ) {
    const item =
      await this.leaderboardDomainFacade.findOneByIdOrFail(leaderboardId)

    const itemUpdated = await this.leaderboardDomainFacade.update(
      item,
      body as Partial<Leaderboard>,
    )
    return itemUpdated
  }

  @Delete('/:leaderboardId')
  async delete(@Param('leaderboardId') leaderboardId: string) {
    const item =
      await this.leaderboardDomainFacade.findOneByIdOrFail(leaderboardId)

    await this.leaderboardDomainFacade.delete(item)

    return item
  }
}
