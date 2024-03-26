import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { TestDomainModule } from '../domain'
import { TestController } from './test.controller'

import { UserDomainModule } from '../../../modules/user/domain'

import { TestByUserController } from './testByUser.controller'

@Module({
  imports: [AuthenticationDomainModule, TestDomainModule, UserDomainModule],
  controllers: [TestController, TestByUserController],
  providers: [],
})
export class TestApplicationModule {}
