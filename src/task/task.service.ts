import { Injectable } from '@nestjs/common';
import { Task } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTaskRequest } from './dto/createTask.request';
import { UpdateTaskRequest } from './dto/updateTask.request';

@Injectable()
export class TaskService {
  constructor(private readonly prismaService: PrismaService) {}

  async getTasks(): Promise<Task[]> {
    return await this.prismaService.task.findMany();
  }

  async createTask(createTaskRequest: CreateTaskRequest): Promise<Task> {
    const { name, dueDate, description } = createTaskRequest;
    return await this.prismaService.task.create({
      data: {
        name,
        dueDate,
        description,
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
