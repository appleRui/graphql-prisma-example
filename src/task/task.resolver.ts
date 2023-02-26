import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Task } from '@prisma/client';
import { CreateTaskRequest } from './dto/createTask.request';
import { UpdateTaskRequest } from './dto/updateTask.request';
import { Task as TaskModel } from './models/task.model';
import { TaskService } from './task.service';

@Resolver()
export class TaskResolver {
  constructor(private readonly taskService: TaskService) {}

  @Query(() => [TaskModel], { nullable: 'items' })
  async getTasks(
    @Args('userId', { type: () => Int, nullable: true }) userId?: number,
  ): Promise<Task[]> {
    return await this.taskService.getTasks(userId);
  }

  @Mutation(() => TaskModel)
  async createTask(
    @Args('createTaskRequest') createTaskRequest: CreateTaskRequest,
  ): Promise<Task> {
    return await this.taskService.createTask(createTaskRequest);
  }

  @Mutation(() => TaskModel)
  async updateTask(
    @Args('updateTaskRequest') updateTaskRequest: UpdateTaskRequest,
  ): Promise<Task> {
    return await this.taskService.updateTask(updateTaskRequest);
  }

  @Mutation(() => TaskModel)
  async deleteTask(@Args('id', { type: () => Int }) id: number): Promise<Task> {
    return await this.taskService.deleteTask(id);
  }
}
