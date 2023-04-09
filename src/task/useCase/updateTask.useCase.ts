import { Injectable } from '@nestjs/common';
import { Task } from '@prisma/client';
import { TaskRepositoryInterface } from 'src/task/domain/task.repository.interface';
import { UpdateTaskRequest } from 'src/task/dto/updateTask.request';

@Injectable()
export class UpdateTaskUseCase {
  constructor(private readonly taskRepository: TaskRepositoryInterface) {}

  async execute(updateTask: UpdateTaskRequest): Promise<Task> {
    const { id, name, dueDate, status, description } = updateTask;
    return await this.taskRepository.updateTask({
      id,
      name,
      dueDate,
      status,
      description,
    });
  }
}
