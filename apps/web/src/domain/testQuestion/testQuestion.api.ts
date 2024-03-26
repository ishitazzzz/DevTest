import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { TestQuestion } from './testQuestion.model'

export class TestQuestionApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<TestQuestion>,
  ): Promise<TestQuestion[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/testQuestions${buildOptions}`)
  }

  static findOne(
    testQuestionId: string,
    queryOptions?: ApiHelper.QueryOptions<TestQuestion>,
  ): Promise<TestQuestion> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/testQuestions/${testQuestionId}${buildOptions}`,
    )
  }

  static createOne(values: Partial<TestQuestion>): Promise<TestQuestion> {
    return HttpService.api.post(`/v1/testQuestions`, values)
  }

  static updateOne(
    testQuestionId: string,
    values: Partial<TestQuestion>,
  ): Promise<TestQuestion> {
    return HttpService.api.patch(`/v1/testQuestions/${testQuestionId}`, values)
  }

  static deleteOne(testQuestionId: string): Promise<void> {
    return HttpService.api.delete(`/v1/testQuestions/${testQuestionId}`)
  }

  static findManyByTestId(
    testId: string,
    queryOptions?: ApiHelper.QueryOptions<TestQuestion>,
  ): Promise<TestQuestion[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/tests/test/${testId}/testQuestions${buildOptions}`,
    )
  }

  static createOneByTestId(
    testId: string,
    values: Partial<TestQuestion>,
  ): Promise<TestQuestion> {
    return HttpService.api.post(
      `/v1/tests/test/${testId}/testQuestions`,
      values,
    )
  }

  static findManyByQuestionId(
    questionId: string,
    queryOptions?: ApiHelper.QueryOptions<TestQuestion>,
  ): Promise<TestQuestion[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/questions/question/${questionId}/testQuestions${buildOptions}`,
    )
  }

  static createOneByQuestionId(
    questionId: string,
    values: Partial<TestQuestion>,
  ): Promise<TestQuestion> {
    return HttpService.api.post(
      `/v1/questions/question/${questionId}/testQuestions`,
      values,
    )
  }
}
