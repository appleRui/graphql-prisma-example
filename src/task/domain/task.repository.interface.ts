import { Status, Task } from '@prisma/client';

export abstract class TaskRepositoryInterface {
  abstract findTasks(userId: number): Promise<Task[]>;

  abstract createTask({
    name,
    dueDate,
    description,
    userId,
  }: {
    name: string;
    dueDate: string;
    description: string;
    userId: number;
  }): Promise<Task>;

  abstract updateTask({
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
  }): Promise<Task>;
}
