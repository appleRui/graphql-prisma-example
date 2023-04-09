import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UserRepositoryInterface } from 'src/user/domain/user.repository.interface';
import { UserRepository } from 'src/user/domain/user.repository';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [PrismaModule],
  providers: [
    {
      provide: UserRepositoryInterface,
      useFactory: (prismaService) => new UserRepository(prismaService),
      inject: [PrismaService],
    },
  ],
  exports: [UserRepositoryInterface],
})
export class UserRepositoryModule {}
