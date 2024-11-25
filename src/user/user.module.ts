import { Module } from '@nestjs/common';
import { UserController } from './adapters/driver/user.controller';
import { CreateUserUseCase } from './application/use-cases/create-user.use-case';
import { UserRepository } from './adapters/driven/user.repository';

@Module({
  controllers: [UserController],
  providers: [
    {
      provide: 'ICreateUser',
      useClass: CreateUserUseCase,
    },
    {
      provide: 'IUserRepository',
      useClass: UserRepository,
    },
  ],
})
export class UserModule {}
