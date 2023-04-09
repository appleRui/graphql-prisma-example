import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { TaskRepository } from 'src/task/domain/task.repository';
import { TaskRepositoryInterface } from 'src/task/domain/task.repository.interface';

@Module({
  imports: [PrismaModule],
  providers: [
    {
      provide: TaskRepositoryInterface,
      useFactory: (prismaService) => new TaskRepository(prismaService),
      inject: [PrismaService],
    },
  ],
  exports: [TaskRepositoryInterface],
})
export class TaskRepositoryModule {}
