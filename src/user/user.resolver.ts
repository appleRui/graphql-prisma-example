import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from '@prisma/client';
import { User as UserModel } from 'src/user/models/user.model';
import { CreateUserRequest } from 'src/user/dto/createUser.request';
import { CreateUserUseCase } from 'src/user/useCase/createUser.useCase';
import { FindUserByIdUseCase } from 'src/user/useCase/findUserById.useCase';
import { FindUserByEmailUseCase } from 'src/user/useCase/findUserByEmail.useCase';

@Resolver()
export class UserResolver {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly findUserByIdUseCase: FindUserByIdUseCase,
    private readonly findUserByEmailUseCase: FindUserByEmailUseCase,
  ) {}

  @Mutation(() => UserModel)
  async createUser(
    @Args('createUserRequest') createUserRequest: CreateUserRequest,
  ): Promise<User> {
    const { name, email, password } = createUserRequest;
    return await this.createUserUseCase.execute(name, email, password);
  }

  // IDからユーザーを取得する
  @Query(() => UserModel)
  async findUserById(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<User> {
    return await this.findUserByIdUseCase.execute(id);
  }

  // EMAILからユーザーを取得する
  @Query(() => UserModel)
  async findUserByEmail(
    @Args('email', { type: () => String }) email: string,
  ): Promise<User> {
    return await this.findUserByEmailUseCase.execute(email);
  }
}
