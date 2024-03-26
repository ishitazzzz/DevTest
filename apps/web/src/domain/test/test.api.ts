import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Test } from './test.model'

export class TestApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<Test>,
  ): Promise<Test[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/tests${buildOptions}`)
  }

  static findOne(
    testId: string,
    queryOptions?: ApiHelper.QueryOptions<Test>,
  ): Promise<Test> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/tests/${testId}${buildOptions}`)
  }

  static createOne(values: Partial<Test>): Promise<Test> {
    return HttpService.api.post(`/v1/tests`, values)
  }

  static updateOne(testId: string, values: Partial<Test>): Promise<Test> {
    return HttpService.api.patch(`/v1/tests/${testId}`, values)
  }

  static deleteOne(testId: string): Promise<void> {
    return HttpService.api.delete(`/v1/tests/${testId}`)
  }

  static findManyByUserId(
    userId: string,
    queryOptions?: ApiHelper.QueryOptions<Test>,
  ): Promise<Test[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/users/user/${userId}/tests${buildOptions}`)
  }

  static createOneByUserId(
    userId: string,
    values: Partial<Test>,
  ): Promise<Test> {
    return HttpService.api.post(`/v1/users/user/${userId}/tests`, values)
  }
}
