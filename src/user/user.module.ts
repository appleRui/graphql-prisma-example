import { Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';
import { UserRepositoryModule } from 'src/user/domain/user.repository.module';
import { CreateUserUseCase } from 'src/user/useCase/createUser.useCase';
import { FindUserByIdUseCase } from 'src/user/useCase/findUserById.useCase';
import { FindUserByEmailUseCase } from 'src/user/useCase/findUserByEmail.useCase';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [UserRepositoryModule, PrismaModule],
  providers: [
    UserResolver,
    CreateUserUseCase,
    FindUserByIdUseCase,
    FindUserByEmailUseCase,
  ],
})
export class UserModule {}
