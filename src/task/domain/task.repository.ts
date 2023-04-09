import { Injectable } from '@nestjs/common';
import { Status, Task } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { TaskRepositoryInterface } from 'src/task/domain/task.repository.interface';

@Injectable()
export class TaskRepository implements TaskRepositoryInterface {
  constructor(private readonly prismaService: PrismaService) {}

  async findTasks(userId: number): Promise<Task[]> {
    return await this.prismaService.task.findMany({
      where: { userId },
    });
  }

  async createTask({
    name,
    dueDate,
    description,
    userId,
  }: {
    name: string;
    dueDate: string;
    description: string;
    userId: number;
  }): Promise<Task> {
    return await this.prismaService.task.create({
      data: {
        name,
        dueDate,
        description,
        userId,
      },
    });
  }

  async updateTask({
    id,
    name,
    dueDate,
    status,
    description,
  }: {
    id: number;
    name: string;
    dueDate: string;
    status: Status;
    description: string;
  }): Promise<Task> {
    return await this.prismaService.task.update({
      where: { id },
      data: {
        name,
        dueDate,
        status,
        description,
      },
    });
  }
}
