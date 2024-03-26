import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Leaderboard } from './leaderboard.model'

export class LeaderboardApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<Leaderboard>,
  ): Promise<Leaderboard[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/leaderboards${buildOptions}`)
  }

  static findOne(
    leaderboardId: string,
    queryOptions?: ApiHelper.QueryOptions<Leaderboard>,
  ): Promise<Leaderboard> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/leaderboards/${leaderboardId}${buildOptions}`,
    )
  }

  static createOne(values: Partial<Leaderboard>): Promise<Leaderboard> {
    return HttpService.api.post(`/v1/leaderboards`, values)
  }

  static updateOne(
    leaderboardId: string,
    values: Partial<Leaderboard>,
  ): Promise<Leaderboard> {
    return HttpService.api.patch(`/v1/leaderboards/${leaderboardId}`, values)
  }

  static deleteOne(leaderboardId: string): Promise<void> {
    return HttpService.api.delete(`/v1/leaderboards/${leaderboardId}`)
  }

  static findManyByUserId(
    userId: string,
    queryOptions?: ApiHelper.QueryOptions<Leaderboard>,
  ): Promise<Leaderboard[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/users/user/${userId}/leaderboards${buildOptions}`,
    )
  }

  static createOneByUserId(
    userId: string,
    values: Partial<Leaderboard>,
  ): Promise<Leaderboard> {
    return HttpService.api.post(`/v1/users/user/${userId}/leaderboards`, values)
  }
}
