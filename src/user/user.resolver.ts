import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from '@prisma/client';
import { User as UserModel } from 'src/user/models/user.model';
import { CreateUserRequest } from 'src/user/dto/createUser.request';
import { UserService } from 'src/user/user.service';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => UserModel)
  async createUser(
    @Args('createUserRequest') createUserRequest: CreateUserRequest,
  ): Promise<User> {
    console.log('createUserRequest', createUserRequest);
    return await this.userService.create(createUserRequest);
  }

  // IDからユーザーを取得する
  @Query(() => UserModel)
  async findUserById(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<User> {
    console.log('id', id);
    return await this.userService.findUserById(id);
  }

  // EMAILからユーザーを取得する
  @Query(() => UserModel)
  async findUserByEmail(
    @Args('email', { type: () => String }) email: string,
  ): Promise<User> {
    console.log('Email', email);
    return await this.userService.findUserByEmail(email);
  }
}
