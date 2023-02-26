import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserRequest } from 'src/user/dto/createUser.request';
import * as bcrypt from 'bcrypt';
import { User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  // ユーザーの作成
  async create(createUserRequest: CreateUserRequest): Promise<User> {
    const { name, email, password } = createUserRequest;
    const hashedPassword = await bcrypt.hash(password, 10);

    return this.prismaService.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
  }

  // IDからユーザーを取得する
  async findUserById(id: number): Promise<User> {
    const result = await this.prismaService.user.findUnique({
      where: {
        id,
      },
    });

    if (!result) throw new HttpException('User Not Found', 404);

    return result;
  }

  // EMAILからユーザーを取得する
  async findUserByEmail(email: string): Promise<User> {
    const result = await this.prismaService.user.findUnique({
      where: {
        email,
      },
    });

    if (!result) throw new HttpException('User Not Found', 404);

    return result;
  }
}
