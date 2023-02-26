import { Injectable } from '@nestjs/common';
import { Task } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTaskRequest } from './dto/createTask.request';
import { UpdateTaskRequest } from './dto/updateTask.request';

@Injectable()
export class TaskService {
  constructor(private readonly prismaService: PrismaService) {}

  async getTasks(userId): Promise<Task[]> {
    return await this.prismaService.task.findMany({
      where: { userId },
    });
  }

  async createTask(createTaskRequest: CreateTaskRequest): Promise<Task> {
    const { name, dueDate, description, userId } = createTaskRequest;
    return await this.prismaService.task.create({
      data: {
        name,
        dueDate,
        description,
        userId,
      },
    });
  }

  async updateTask(updateTaskRequest: UpdateTaskRequest): Promise<Task> {
    const { id, name, dueDate, status, description } = updateTaskRequest;
    return await this.prismaService.task.update({
      data: { name, dueDate, status, description },
      where: { id },
    });
  }

  async deleteTask(id: number): Promise<Task> {
    return await this.prismaService.task.delete({
      where: { id },
    });
  }
}
