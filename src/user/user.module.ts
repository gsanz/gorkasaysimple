import { Module } from '@nestjs/common';
import { UserPrismaRepository } from './infrastructure/repositories/user.prisma.repository';
import { SYMBOLS } from './infrastructure/symbols';
import { CreateUserUsecase } from './application/create.usecase';
import { UserController } from './infrastructure/controllers/user.controller';
import { DeleteUserUsecase } from './application/delete.usecase';
import { UpdateUserUsecase } from './application/update.usecase';
import { GetUserUsecase } from './application/get.usecase';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [
    {
      provide: SYMBOLS.USER_REPOSITORY,
      useClass: UserPrismaRepository,
    },
    CreateUserUsecase,
    DeleteUserUsecase,
    UpdateUserUsecase,
    GetUserUsecase,
  ],
})
export class UserModule {}
