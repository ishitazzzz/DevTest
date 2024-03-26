import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { TestDomainFacade } from './test.domain.facade'
import { Test } from './test.model'

@Module({
  imports: [TypeOrmModule.forFeature([Test]), DatabaseHelperModule],
  providers: [TestDomainFacade, TestDomainFacade],
  exports: [TestDomainFacade],
})
export class TestDomainModule {}
