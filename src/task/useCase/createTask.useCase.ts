import { Injectable } from '@nestjs/common';
import { Task } from '@prisma/client';
import { TaskRepositoryInterface } from 'src/task/domain/task.repository.interface';
import { CreateTaskRequest } from 'src/task/dto/createTask.request';

@Injectable()
export class CreateTaskUseCase {
  constructor(private readonly taskRepository: TaskRepositoryInterface) {}

  async execute(createTaskRequest: CreateTaskRequest): Promise<Task> {
    const { name, dueDate, description, userId } = createTaskRequest;
    return await this.taskRepository.createTask({
      name,
      dueDate,
      description,
      userId,
    });
  }
}
