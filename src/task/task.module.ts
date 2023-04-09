import { Module } from '@nestjs/common';
import { TaskResolver } from './task.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';
import { TaskRepositoryModule } from 'src/task/domain/task.repository.module';
import { FindTasksUseCase } from 'src/task/useCase/findTasks.useCase';
import { CreateTaskUseCase } from 'src/task/useCase/createTask.useCase';
import { UpdateTaskUseCase } from 'src/task/useCase/updateTask.useCase';

@Module({
  imports: [TaskRepositoryModule, PrismaModule],
  providers: [
    TaskResolver,
    FindTasksUseCase,
    CreateTaskUseCase,
    UpdateTaskUseCase,
  ],
})
export class TaskModule {}
