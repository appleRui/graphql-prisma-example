import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Task } from '@prisma/client';
import { CreateTaskRequest } from './dto/createTask.request';
import { UpdateTaskRequest } from './dto/updateTask.request';
import { Task as TaskModel } from './models/task.model';
import { FindTasksUseCase } from 'src/task/useCase/findTasks.useCase';
import { CreateTaskUseCase } from 'src/task/useCase/createTask.useCase';
import { UpdateTaskUseCase } from 'src/task/useCase/updateTask.useCase';

@Resolver()
export class TaskResolver {
  constructor(
    private readonly findTasksUseCase: FindTasksUseCase,
    private readonly createTaskUseCase: CreateTaskUseCase,
    private readonly updateTaskUseCase: UpdateTaskUseCase,
  ) {}

  @Query(() => [TaskModel], { nullable: 'items' })
  async findTasks(
    @Args('userId', { type: () => Int, nullable: true }) userId?: number,
  ): Promise<Task[]> {
    return await this.findTasksUseCase.execute(userId);
  }

  @Mutation(() => TaskModel)
  async createTask(
    @Args('createTaskRequest') createTaskRequest: CreateTaskRequest,
  ): Promise<Task> {
    return await this.createTaskUseCase.execute(createTaskRequest);
  }

  @Mutation(() => TaskModel)
  async updateTask(
    @Args('updateTaskRequest') updateTaskRequest: UpdateTaskRequest,
  ): Promise<Task> {
    return await this.updateTaskUseCase.execute(updateTaskRequest);
  }
}
