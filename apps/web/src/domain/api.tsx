import { AiApi } from './ai/ai.api'
import { AuthenticationApi } from './authentication/authentication.api'
import { AuthorizationApi } from './authorization/authorization.api'
import { UploadApi } from './upload/upload.api'

import { UserApi } from './user/user.api'

import { NotificationApi } from './notification/notification.api'

import { QuestionApi } from './question/question.api'

import { OptionApi } from './option/option.api'

import { TestApi } from './test/test.api'

import { TestQuestionApi } from './testQuestion/testQuestion.api'

import { AnswerApi } from './answer/answer.api'

import { LeaderboardApi } from './leaderboard/leaderboard.api'

export namespace Api {
  export class Ai extends AiApi {}
  export class Authentication extends AuthenticationApi {}
  export class Authorization extends AuthorizationApi {}
  export class Upload extends UploadApi {}

  export class User extends UserApi {}

  export class Notification extends NotificationApi {}

  export class Question extends QuestionApi {}

  export class Option extends OptionApi {}

  export class Test extends TestApi {}

  export class TestQuestion extends TestQuestionApi {}

  export class Answer extends AnswerApi {}

  export class Leaderboard extends LeaderboardApi {}
}
