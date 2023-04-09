import { Injectable } from '@nestjs/common';
import { Task } from '@prisma/client';
import { TaskRepositoryInterface } from 'src/task/domain/task.repository.interface';

@Injectable()
export class FindTasksUseCase {
  constructor(private readonly taskRepository: TaskRepositoryInterface) {}

  async execute(userId?: number): Promise<Task[]> {
    return await this.taskRepository.findTasks(userId);
  }
}
