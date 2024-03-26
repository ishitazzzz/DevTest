import { AuthorizationRole as AuthorizationRoleModel } from './authorization/authorization.model'

import { User as UserModel } from './user/user.model'

import { Notification as NotificationModel } from './notification/notification.model'

import { Question as QuestionModel } from './question/question.model'

import { Option as OptionModel } from './option/option.model'

import { Test as TestModel } from './test/test.model'

import { TestQuestion as TestQuestionModel } from './testQuestion/testQuestion.model'

import { Answer as AnswerModel } from './answer/answer.model'

import { Leaderboard as LeaderboardModel } from './leaderboard/leaderboard.model'

export namespace Model {
  export class AuthorizationRole extends AuthorizationRoleModel {}

  export class User extends UserModel {}

  export class Notification extends NotificationModel {}

  export class Question extends QuestionModel {}

  export class Option extends OptionModel {}

  export class Test extends TestModel {}

  export class TestQuestion extends TestQuestionModel {}

  export class Answer extends AnswerModel {}

  export class Leaderboard extends LeaderboardModel {}
}
